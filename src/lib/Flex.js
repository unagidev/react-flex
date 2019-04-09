// @flow
import React, { Component } from 'react';
import { getId } from './helpers';
import type { Breakpoint } from './StyleManager';
import styleManager from './StyleManager';
import { getDisplay } from './properties/display';
import properties from './properties';
import type { AlignContent } from './properties/alignContent';
import type { JustifyContent } from './properties/justifyContent';
import type { AlignItems } from './properties/alignItems';
import type { AlignSelf } from './properties/alignSelf';
import type { CrossAxisAlign, MainAxisAlign } from './properties/align';

type Props = {
  children: React$Element<any>,
  className?: string,
  inline?: boolean | { [key: Breakpoint]: boolean },
  direction?: string | { [key: Breakpoint]: string },
  justifyContent?: JustifyContent | { [key: Breakpoint]: JustifyContent },
  alignItems?: AlignItems | { [key: Breakpoint]: AlignItems },
  alignSelf?: AlignContent | { [key: Breakpoint]: AlignContent },
  alignContent?: AlignSelf | { [key: Breakpoint]: AlignSelf },
  wrap?: boolean | { [key: Breakpoint]: boolean },
  grow?: number | { [key: Breakpoint]: number },
  shrink?: number | { [key: Breakpoint]: number },
  basis?: string | number | { [key: Breakpoint]: string | number },
  align?:
    | MainAxisAlign
    | [MainAxisAlign, CrossAxisAlign]
    | { [key: Breakpoint]: MainAxisAlign | [MainAxisAlign, CrossAxisAlign] },
  spacing?: string | { [key: Breakpoint]: string },
  gap?: number | { [key: Breakpoint]: number },
  fill?: boolean | { [key: Breakpoint]: boolean },
  size?:
    | string
    | [string, string]
    | { [key: Breakpoint]: string | [string, string] },
  minSize?: string | { [key: Breakpoint]: string },
  maxSize?: string | { [key: Breakpoint]: string },
  show?: boolean | { [key: Breakpoint]: boolean },
  hide?: boolean | { [key: Breakpoint]: boolean },
};

type State = {
  id: string,
  rules: Object,
};

class Flex extends Component<Props, State> {
  state = {
    id: '',
    rules: {},
  };
  children = React.Children.map(this.props.children, child => {
    if (child && child.type && child.type.name === 'Flex') {
      return React.cloneElement(child, {
        layoutGap: this.props.gap,
      });
    }
    return child;
  });

  componentWillMount(): void {
    if (this.props.show && this.props.hide) {
      throw Error('show & hide can not be combined');
    }
    const id = getId();
    this.setState({ id: id });
  }

  componentWillUnmount(): void {
    //
  }

  shouldComponentUpdate(nextProps: Props, nextState: State, nextContext: any) {
    return true;
  }

  addRule = (selector: string, declaration: string) => {
    const { rules } = this.state;

    if (rules[selector]) {
      rules[selector].push(declaration);
    } else {
      rules[selector] = [];
      rules[selector].push(declaration);
    }
  };

  addRules = (
    cssProps: string[],
    prop: { [key: Breakpoint]: string },
    getValues: ?(props: Object) => string[] | null,
  ) => {
    const breakpoints = Object.keys(styleManager.breakpoints);
    breakpoints.forEach(breakpoint => {
      if (prop[breakpoint]) {
        if (getValues) {
          const values = getValues(prop[breakpoint]);
          values.forEach((value, i) => {
            if (value) {
              this.addRule(breakpoint, `${cssProps[i]}: ${value};`);
            }
          });
        } else {
          this.addRule(breakpoint, `${cssProps[0]}: ${prop[breakpoint]};`);
        }
      }
    });
  };

  buildRuleSet() {
    this.addRule('xs', getDisplay(this.props.inline, this.props.show || this.props.hide));

    properties.forEach(property => {
      if (this.props[property.name]) {
        this.addRules(
          property.cssProperties,
          property.format(this.props[property.name]),
          propertyValue => {
            const isDispaly = property.cssProperties[0] === 'display';
            if (isDispaly) {
              const inline = this.props.inline;
              property.getValues(() => {
                return { inline, propertyValue };
              });
              return property.getValues(propertyValue);
            }
            return property.getValues(propertyValue);
          },
        );
      }
    });
  }

  getClass() {
    const { id } = this.state;
    this.buildRuleSet();
    const prefix = 'flex';
    const className = styleManager.addClass(id, this.state.rules);
    return `${prefix} ${className} ${this.props.className || ''}`;
  }

  getElProps() {
    const {
      children,
      direction,
      justifyContent,
      alignItems,
      align,
      alignSelf,
      alignContent,
      spacing,
      wrap,
      grow,
      gap,
      layoutGap,
      basis,
      shrink,
      fill,
      size,
      maxSize,
      minSize,
      show,
      hide,
      className,
      ...rest
    } = this.props;

    return rest;
  }

  render() {
    return (
      <div className={this.getClass()} {...this.getElProps()}>
        {this.children}
      </div>
    );
  }
}

export default Flex;

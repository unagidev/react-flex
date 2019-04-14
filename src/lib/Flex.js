// @flow
import React, { Component } from 'react';
import { getId } from './helpers';
import type { Breakpoint } from './StyleManager';
import styleManager from './StyleManager';
import properties from './properties';
import type { AlignContent } from './properties/alignContent';
import type { JustifyContent } from './properties/justifyContent';
import type { AlignItems } from './properties/alignItems';
import type { CrossAxisAlign, MainAxisAlign } from './properties/align';
import type { Height, Width } from './properties/size';

type Props = {
  children: React$Element<any>,
  className?: string,
  inline?: boolean | { [key: Breakpoint]: boolean },
  direction?: string | { [key: Breakpoint]: string },
  justifyContent?: JustifyContent | { [key: Breakpoint]: JustifyContent },
  alignItems?: AlignItems | { [key: Breakpoint]: AlignItems },
  alignSelf?: 'auto' | AlignItems | { [key: Breakpoint]: AlignContent },
  alignContent?: AlignItems | { [key: Breakpoint]: AlignItems },
  wrap?: boolean | { [key: Breakpoint]: boolean },
  grow?: number | { [key: Breakpoint]: number },
  shrink?: number | { [key: Breakpoint]: number },
  basis?: string | number | { [key: Breakpoint]: string | number },
  spacing?: string | { [key: Breakpoint]: string },
  gap?: number | { [key: Breakpoint]: number },
  layoutGap?: number,
  fill?: boolean | { [key: Breakpoint]: boolean },
  align?:
    | MainAxisAlign
    | [MainAxisAlign, CrossAxisAlign]
    | { [key: Breakpoint]: MainAxisAlign | [MainAxisAlign, CrossAxisAlign] },
  size?:
    | string
    | number
    | [Width, Height]
    | { [key: Breakpoint]: string | number | [Width, Height] },
  minSize?:
    | string
    | number
    | [Width, Height]
    | { [key: Breakpoint]: string | number | [Width, Height] },
  maxSize?:
    | string
    | number
    | [Width, Height]
    | { [key: Breakpoint]: string | number | [Width, Height] },
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
    // console.log(child.type === <Flex />.type);
    if (child && child.type && child.type === Flex) {
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
      if (prop[breakpoint] || typeof prop[breakpoint] === 'boolean') {
        if (getValues) {
          const values = getValues(prop[breakpoint]);
          if (values) {
            values.forEach((value, i) => {
              if (value) {
                this.addRule(breakpoint, `${cssProps[i]}: ${value};`);
              }
            });
          }
        } else {
          this.addRule(breakpoint, `${cssProps[0]}: ${prop[breakpoint]};`);
        }
      }
    });
  };

  buildRuleSet() {
    properties.forEach(property => {
      if (this.props[property.name]) {
        this.addRules(
          property.cssProperties,
          property.format(this.props[property.name]),
          propertyValue => {
            const isDisplay = property.cssProperties[0] === 'display';
            if (isDisplay) {
              const inline = this.props.inline;
              return property.getValues({ inline, propertyValue });
            }
            return property.getValues(propertyValue);
          },
        );
      } else {
        const isShow = property.name === 'show';
        if (isShow) {
          this.addRules(
            property.cssProperties,
            property.format(this.props[property.name]),
            propertyValue => {
              const inline = this.props.inline;
              return property.getValues({ inline, propertyValue });
            },
          );
        }
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
      inline,
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

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
import type { MainAxisAlign, CrossAxisAlign } from './properties/align';

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
    propKeys: string[],
    props: { [key: Breakpoint]: string },
    getPropValues: ?(props: Object) => string[] | null,
  ) => {
    const breakpoints = Object.keys(styleManager.breakpoints);
    breakpoints.forEach(breakpoint => {
      if (props[breakpoint]) {
        if (getPropValues) {
          const propValues = getPropValues(props[breakpoint]);
          propValues.forEach((propValue, i) => {
            if (propValue) {
              this.addRule(breakpoint, `${propKeys[i]}: ${propValue};`);
            }
          });
        } else {
          this.addRule(breakpoint, `${propKeys[0]}: ${props[breakpoint]};`);
        }
      }
    });
  };

  buildRules() {
    this.addRule('xs', getDisplay(this.props.item));

    properties.forEach(property => {
      if (this.props[property.name]) {
        this.addRules(
          property.cssProperties,
          property.format(this.props[property.name]),
          property.getDeclaration,
        );
      }
    });
  }

  getClass() {
    const { id } = this.state;
    this.buildRules();
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

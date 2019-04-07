// @flow
import React, { Component } from 'react';
import { getId } from './helpers';
import type { Breakpoint } from './StyleManager';
import styleManager from './StyleManager';
import type {
  AlignItems,
  AlignSelf,
  CrossAxisAlign,
  JustifyContent,
  MainAxisAlign,
} from './properties';
import {
  getBasis,
  getBasisDeclaration,
  getDirection,
  getDisplay,
  getFill,
  getFillDeclaration,
  getGrow,
  getSpacing,
  getSpacingDeclaration,
  getWrap,
  getWrapDeclaration,
  getGap,
  getGapDeclaration,
} from './properties';
import properties from './properties';
import type { AlignContent } from './properties/alignContent';
import {
  getContainerGap,
  getContainerGapDeclaration,
} from './properties/containerGap';

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
  _layoutGap?: number | { [key: Breakpoint]: number },
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
        _layoutGap: this.props.gap,
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

    // fill
    this.addRules(['flex'], getFill(this.props.fill), getFillDeclaration);

    // wrap
    this.addRules(['flex-wrap'], getWrap(this.props.wrap), getWrapDeclaration);

    // grow
    if (this.props.grow) {
      this.addRules(['flex-grow'], getGrow(this.props.grow));
    }

    // shrink
    if (this.props.shrink) {
      this.addRules(['flex-shrink'], getGrow(this.props.shrink));
    }

    // basis
    this.addRules(
      ['flex-basis'],
      getBasis(this.props.basis),
      getBasisDeclaration,
    );

    // gap
    if (this.props.gap) {
      this.addRules(
        ['border', 'box-sizing'],
        getContainerGap(this.props.gap),
        getContainerGapDeclaration,
      );
    }

    if (this.props._layoutGap) {
      this.addRules(
        ['border', 'box-sizing'],
        getGap(this.props._layoutGap),
        getGapDeclaration,
      );
    }

    // spacing
    this.addRules(
      ['margin', 'padding'],
      getSpacing(this.props.spacing),
      getSpacingDeclaration,
    );
  }

  getClass() {
    const { id } = this.state;
    this.buildRules();
    const prefix = 'flex';
    const className = styleManager.addClass(id, this.state.rules);
    // console.log(id, this.props);
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
      _layoutGap,
      basis,
      shrink,
      fill,
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

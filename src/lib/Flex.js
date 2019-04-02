// @flow
import React, { Component } from 'react';
import { getId } from './helpers';
import type { Breakpoint } from './StyleManager';
import styleManager from './StyleManager';
import type { CrossAxisAlign, MainAxisAlign } from './properties';
import {
  getAlign,
  getAlignDeclaration,
  getDirection,
  getDisplay,
  getSpacing,
  getSpacingDeclaration
} from './properties';

type Props = {
  children: React$Element<any>,
  className?: string,
  item?: boolean,
  direction?: string | { [key: Breakpoint]: string },
  align?:
    | MainAxisAlign
    | [MainAxisAlign, CrossAxisAlign]
    | { [key: Breakpoint]: MainAxisAlign | [MainAxisAlign, CrossAxisAlign] },
  alignSelf?: string | { [key: Breakpoint]: string },
  inline?: boolean | { [key: Breakpoint]: boolean },
  wrap?: string | { [key: Breakpoint]: string },
  grow?: string | { [key: Breakpoint]: string },
  gap?: string | { [key: Breakpoint]: string },
  basis?: string | { [key: Breakpoint]: string },
  spacing?: string | { [key: Breakpoint]: string }
};

type State = {
  id: string,
  rules: Object
};

class Flex extends Component<Props, State> {
  state = {
    id: '',
    rules: {}
  };

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
    getPropValues: ?(props: Object) => [string, string]
  ) => {
    const breakpoints = Object.keys(styleManager.breakpoints);
    breakpoints.forEach(breakpoint => {
      if (props[breakpoint]) {
        if (getPropValues) {
          const propValues = getPropValues(props[breakpoint]);
          propValues.forEach((propValue, i) => {
            this.addRule(breakpoint, `${propKeys[i]}: ${propValue};`);
          });
        } else {
          this.addRule(breakpoint, `${propKeys[0]}: ${props[breakpoint]};`);
        }
      }
    });
  };

  buildRules() {
    this.addRule('xs', getDisplay(this.props.item));

    this.addRules(['flex-direction'], getDirection(this.props.direction));

    this.addRules(
      ['margin', 'padding'],
      getSpacing(this.props.spacing),
      getSpacingDeclaration
    );

    if (this.props.item) {
      this.addRules(
        ['align-self'],
        getAlign(this.props.align),
        getAlignDeclaration
      );
    } else {
      this.addRules(
        ['justify-content', 'align-items'],
        getAlign(this.props.align),
        getAlignDeclaration
      );
    }
  }

  getClass() {
    const { id } = this.state;
    this.buildRules();
    const prefix = this.props.item ? 'flex-item' : 'flex';
    const className = styleManager.addClass(id, this.state.rules);
    return `${prefix} ${className} ${this.props.className || ''}`;
  }

  getElProps() {
    const {
      children,
      item,
      direction,
      align,
      spacing,
      wrap,
      grow,
      gap,
      basis,
      className,
      ...rest
    } = this.props;

    return rest;
  }

  render() {
    const { children } = this.props;
    return (
      <div className={this.getClass()} {...this.getElProps()}>
        {children}
      </div>
    );
  }
}

export default Flex;

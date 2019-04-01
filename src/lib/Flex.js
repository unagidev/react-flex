// @flow
import React, { Component } from 'react';
import { getId, isObj } from './helpers';
import type { Breakpoints } from './StyleManager';
import styleManager from './StyleManager';
import {
  getDisplay,
  getDirection,
  getSpacing,
  getSpacingDeclaration,
  getAlignDeclaration,
  getAlign
} from './properties';

type Props = {
  children: React$Element<any>,
  className?: string,
  item?: boolean,
  direction?: string | Breakpoints,
  wrap?: string | Breakpoints,
  align?: string | Breakpoints,
  spacing?: string | Breakpoints
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
    props: Breakpoints,
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

    this.addRules(
      ['justify-content', 'align-items'],
      getAlign(this.props.align),
      getAlignDeclaration
    );
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

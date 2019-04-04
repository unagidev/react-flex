// @flow
import React, { Component } from 'react';
import { getId } from './helpers';
import type { Breakpoint } from './StyleManager';
import styleManager from './StyleManager';
import type { AlignSelf, CrossAxisAlign, MainAxisAlign } from './properties';
import {
  getAlign,
  getAlignContent,
  getAlignContentDeclaration,
  getAlignDeclaration,
  getAlignSelf,
  getAlignSelfDeclaration,
  getBasis,
  getBasisDeclaration,
  getDirection,
  getDisplay,
  getFill,
  getFillDeclaration,
  getGrow,
  getSpacing,
  getSpacingDeclaration
} from './properties';
import { getWrap, getWrapDeclaration } from './properties/wrap';
import { getGap, getGapDeclaration } from './properties/gap';
import type { AlignContent } from './properties/alignContent';

type Props = {
  children: React$Element<any>,
  className?: string,
  inline?: boolean | { [key: Breakpoint]: boolean },
  direction?: string | { [key: Breakpoint]: string },
  align?:
    | MainAxisAlign
    | [MainAxisAlign, CrossAxisAlign]
    | { [key: Breakpoint]: MainAxisAlign | [MainAxisAlign, CrossAxisAlign] },
  alignSelf?: AlignContent | { [key: Breakpoint]: AlignContent },
  alignContent?: AlignSelf | { [key: Breakpoint]: AlignSelf },
  fill?: boolean | { [key: Breakpoint]: boolean },
  wrap?: boolean | { [key: Breakpoint]: boolean },
  grow?: number | { [key: Breakpoint]: number },
  shrink?: number | { [key: Breakpoint]: number },
  basis?: string | number | { [key: Breakpoint]: string | number },
  gap?: number | { [key: Breakpoint]: number },
  spacing?: string | { [key: Breakpoint]: string },
  _layoutGap?: number | { [key: Breakpoint]: number }
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
  children = React.Children.map(this.props.children, child => {
    // console.log(child);
    if (child && child.type && child.type.name === 'Flex') {
      return React.cloneElement(child, {
        _layoutGap: this.props.gap
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
    getPropValues: ?(props: Object) => [string, ?string]
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

    // direction
    this.addRules(['flex-direction'], getDirection(this.props.direction));

    // align
    this.addRules(
      ['justify-content', 'align-items'],
      getAlign(this.props.align),
      getAlignDeclaration
    );

    // alignSelf
    this.addRules(
      ['align-self'],
      getAlignSelf(this.props.alignSelf),
      getAlignSelfDeclaration
    );

    // alignContent
    this.addRules(
      ['align-content'],
      getAlignContent(this.props.alignContent),
      getAlignContentDeclaration
    );

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
      getBasisDeclaration
    );

    // gap
    if (this.props._layoutGap) {
      this.addRules(
        ['padding'],
        getGap(this.props._layoutGap),
        getGapDeclaration
      );
    }

    // spacing
    this.addRules(
      ['margin', 'padding'],
      getSpacing(this.props.spacing),
      getSpacingDeclaration
    );
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

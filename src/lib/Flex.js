// @flow
import React, { useEffect, useState } from 'react';
import { getId, isObj } from './helpers';
import type { Breakpoints } from './StyleManager';
import styleManager from './StyleManager';

type Props = {
  children: React$Element<any>,
  className?: string,
  direction?: string | Breakpoints,
  wrap?: string | Breakpoints,
  align?: string | Breakpoints,
  spacing?: string | Breakpoints
};

const Flex = (props: Props) => {
  const [id, setId] = useState(null);
  const {
    children,
    className = '',
    direction = { xs: 'row' },
    wrap = { xs: 'nowrap' },
    align = { xs: 'start' },
    spacing = { xs: 0 }
  } = props;

  const getSpacingValue = config => {
    return `${typeof config === 'number' ? `${config}px` : config}`;
  };
  const getSpacingProperty = config => {
    if (config.length === 2 || config.length === 4) {
      return `${config.map(value => getSpacingValue(value)).join(' ')}`;
    } else {
      return 0;
    }
  };
  const getSpacing = config => {
    let margin = '0';
    let padding = '0';
    if (typeof config === 'undefined') {
      return { margin, padding };
    }
    if (typeof config === 'number') {
      margin = `${config}px`;
      return { margin, padding };
    }
    if (typeof config === 'string') {
      margin = config;
      return { margin, padding };
    }
    const [outerSpace, innerSpace] = config;
    padding = Array.isArray(innerSpace)
      ? getSpacingProperty(innerSpace)
      : getSpacingValue(innerSpace);
    margin = Array.isArray(outerSpace)
      ? getSpacingProperty(outerSpace)
      : getSpacingValue(outerSpace);
    return { margin, padding };
  };

  const addRule = (breakpoint: string, rules: Breakpoints, rule: string) => {
    if (rules[breakpoint]) {
      rules[breakpoint].push(rule);
    } else {
      rules[breakpoint] = [];
      rules[breakpoint].push(rule);
    }
  };

  const addBreackPointRules = (
    rules: Breakpoints,
    key: string,
    prop: Breakpoints
  ) => {
    const breakpoints = Object.keys(styleManager.breakpoints);
    breakpoints.forEach(breakpoint => {
      if (prop[breakpoint]) {
        addRule(breakpoint, rules, `${key}: ${prop[breakpoint]};`);
      }
    });
  };

  const getRules = () => {
    const rules = {};

    addRule('xs', rules, 'display:flex;');

    if (isObj(direction)) {
      addRule('xs', rules, `flex-direction: ${direction.xs};`);
      addBreackPointRules(rules, 'flex-direction', direction);
    } else {
      addRule('xs', rules, `flex-direction: ${direction};`);
    }

    if (isObj(spacing)) {
      const { margin, padding } = getSpacing(spacing.xs);
      addRule('xs', rules, `margin: ${margin};`);
      addRule('xs', rules, `padding: ${padding};`);
      const breakpoints = Object.keys(styleManager.breakpoints);
      breakpoints.forEach(breakpoint => {
        if (spacing[breakpoint]) {
          const { margin, padding } = getSpacing(spacing[breakpoint]);
          addRule(breakpoint, rules, `margin: ${margin};`);
          addRule(breakpoint, rules, `padding: ${padding};`);
        }
      });
    } else {
      const { margin, padding } = getSpacing(spacing);
      addRule('xs', rules, `margin: ${margin};`);
      addRule('xs', rules, `padding: ${padding};`);
    }
    return rules;
  };

  const getClass = _id => {
    if (_id) {
      const rules = getRules();
      return styleManager.addClass(_id, rules);
    }

    return '';
  };

  useEffect(() => {
    const _id = getId();
    setId(_id);
    return styleManager.removeClass(_id);
  }, []);

  return <div className={`${getClass(id)} ${className}`}>{children}</div>;
};

export default Flex;

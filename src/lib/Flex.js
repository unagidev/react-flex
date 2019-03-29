// @flow
import React, { useEffect, useState } from 'react';
import { isObj, getId } from './helpers';
import styleManager from './StyleManager';

type Props = {
  children: React$Element<any>,
  className?: string,
  direction?: string | Object,
  wrap?: string | Object,
  align?: string | Object,
  spacing?: string | Object
};

const Flex = (props: Props) => {
  const [id, setId] = useState(null);
  const { children, className = '', direction, wrap, align, spacing } = props;

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

  const addRule = (bp, rules, rule) => {
    if (rules[bp]) {
      rules[bp].push(rule);
    } else {
      rules[bp] = [];
      rules[bp].push(rule);
    }
  };

  const addBreackPointRules = (rules, key, prop) => {
    const breackPoints = Object.keys(styleManager.breackPoints);
    breackPoints.forEach(breackPoint => {
      if (direction[breackPoint]) {
        addRule(breackPoint, rules, `${key}: ${prop[breackPoint]};`);
      }
    });
  };

  const getRules = (media = false) => {
    const rules = {};

    if (!media) {
      addRule('xs', rules, 'display:flex;');
    }

    if (isObj(direction)) {
      addRule('xs', rules, `flex-direction: ${direction.xs};`);
      addBreackPointRules(rules, 'flex-direction', direction);
    } else {
      addRule('xs', rules, `flex-direction: ${direction || 'row;'};`);
    }

    if (isObj(spacing)) {
      const { margin, padding } = getSpacing(spacing.xs);
      addRule('xs', rules, `margin: ${margin};`);
      addRule('xs', rules, `padding: ${padding};`);
      const breackPoints = Object.keys(styleManager.breackPoints);
      breackPoints.forEach(breackPoint => {
        if (spacing[breackPoint]) {
          const { margin, padding } = getSpacing(spacing[breackPoint]);
          addRule(breackPoint, rules, `margin: ${margin};`);
          addRule(breackPoint, rules, `padding: ${padding};`);
        }
      });
    } else {
      const { margin, padding } = getSpacing(spacing);
      addRule('xs', rules, `margin: ${margin};`);
      addRule('xs', rules, `padding: ${padding};`);
    }
    return rules;
  };

  useEffect(() => {
    setId(getId());
    return styleManager.removeClass(id);
  }, []);

  const getClass = _id => {
    if (_id) {
      const rules = getRules();
      return styleManager.addClass(id, rules);
    }

    return '';
  };

  return <div className={`${getClass(id)} ${className}`}>{children}</div>;
};

export default Flex;

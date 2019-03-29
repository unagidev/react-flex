// @flow
import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import { isObj } from './helpers';
import './Grid.scss';
import styleManager from './StyleManager';

const Flex = React.memo((props) => {
  const [id, setId] = useState(null);
  const { direction, wrap, align, spacing } = props;

  const getSpacingValue = (config) => {
    return `${typeof config === 'number' ? `${config}px` : config}`;
  };
  const getSpacingProperty = (config) => {
    switch (config.length) {
      case 2:
        return `${getSpacingValue(config[0])} ${getSpacingValue(config[1])}`;
      case 4:
        return `${getSpacingValue(config[0])} ${getSpacingValue(config[1])} ${getSpacingValue(config[2])} ${getSpacingValue(config[3])}`;
      default:
        return 0;
    }
  };
  const getSpacing = (config) => {
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
          const { _margin, _padding } = getSpacing(spacing[breackPoint]);
          addRule(breackPoint, rules, `margin: ${_margin};`);
          addRule(breackPoint, rules, `padding: ${_padding};`);
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
    setId(shortid.generate());
    return styleManager.removeClass(id);
  }, []);

  const getClass = _id => {
    if (_id) {
      const rules = getRules();
      return styleManager.addClass(id, rules);
    }

    return '';
  };

  return (
    <div className={getClass(id)}>
      {props.children}
    </div>
  );
});

export { Flex };

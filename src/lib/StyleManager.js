// @flow
import { isObj } from './helpers';

class StyleManager {
  breackPoints = {
    es: `@media screen and (max-width : 575px)`,
    sm: `@media screen and (min-width : 576px) and (max-width : 767px)`,
    md: `@media screen and (min-width : 768px) and (max-width : 991px)`,
    lg: `@media screen and (min-width : 992px) and (max-width : 1199px)`,
    xl: `@media screen and (min-width : 1200px)`
  };

  sheetId = 1;

  rules = new Map();

  constructor() {
    this.sheetId = this.sheetId + 1;
    const style = document.createElement('style');
    style.id = this.sheetId;
    document.head.appendChild(style);
  }

  get sheet() {
    return document.getElementById(this.sheetId).sheet;
  }

  get style() {
    return document.getElementById(this.sheetId);
  }

  clearSheet() {
    this.sheet.disabled = true;
    this.style.parentNode.removeChild(this.style);
    const style = document.createElement('style');
    style.id = this.sheetId;
    document.head.appendChild(style);
  }

  getRules(rules) {
    const out = [];
    rules.forEach((properties, key) => {
      out.push(`.grid-${key}{ ${properties.join(' ')} }`);
    });
    return out.join('\n');
  }

  updateSheet() {
    this.clearSheet();
    const rules = [];
    this.rules.forEach((rule, key) => {
      if (isObj(rule)) {
        rules.push(`${this.breackPoints[key]} { ${this.getRules(rule)} }`);
      } else {
        rules.push(`.grid-${key} { ${rule.join(' ')} }`);
      }
    });

    const sorted = rules.sort((a, b) => {
      if (a === b) {
        return 0;
      }
      return a > b ? -1 : 1;
    });
    sorted.forEach(rule => {
      this.sheet.insertRule(rule);
    });
    console.log(sorted);
  }

  addRule(id, breakPoint, props) {
    if (breakPoint !== 'xs') {
      let breakpointRule = this.rules.get(breakPoint);
      if (breakpointRule) {
        breakpointRule.set(id, props);
      } else {
        breakpointRule = new Map();
        breakpointRule.set(id, props);
      }
      this.rules.set(breakPoint, breakpointRule);
    } else {
      this.rules.set(id, props);
    }
  }

  addClass(id, rules) {
    const breakpoints = Object.keys(rules);
    breakpoints.forEach(breackPoint => {
      const rule = rules[breackPoint];
      this.addRule(id, breackPoint, rule);
    });

    this.updateSheet();

    return `grid-${id}`;
  }

  removeClass(id) {
    this.rules.forEach((rule, key) => {
      if (isObj(rule)) {
        rule.forEach((bRule, bkey) => {
          if (id === bkey) {
            rule.delete(key);
          }
        });
      } else {
        if (id === key) {
          this.rules.delete(key);
        }
      }
    });

    this.updateSheet();
  }
}

export default new StyleManager();

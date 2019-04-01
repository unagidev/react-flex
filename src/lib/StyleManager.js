// @flow
import { getId, isObj } from './helpers';

type Breakpoints = {
  xs?: any,
  es?: any,
  sm?: any,
  md?: any,
  lg?: any,
  es?: any,
  xl?: any
};
type BreakpointRules = {
  xs?: string[],
  es?: string[],
  sm?: string[],
  md?: string[],
  lg?: string[],
  es?: string[],
  xl?: string[]
};
type RulesMap = Map<string, string[]>;
type MediaRulesMap = Map<string, RulesMap>;

class StyleManager {
  breakpoints: Breakpoints = {
    xs: `@media screen and (min-width : 0)`,
    es: `@media screen and (max-width : 575px)`,
    sm: `@media screen and (min-width : 576px) and (max-width : 767px)`,
    md: `@media screen and (min-width : 768px) and (max-width : 991px)`,
    lg: `@media screen and (min-width : 992px) and (max-width : 1199px)`,
    xl: `@media screen and (min-width : 1200px)`
  };

  _sheetId: string;

  _rules: MediaRulesMap = new Map();

  constructor() {
    this._sheetId = getId();
    const style = document.createElement('style');
    style.id = this._sheetId;
    if (document.head) {
      document.head.appendChild(style);
    } else {
      throw Error('document.head is not available');
    }
  }

  get _sheet() {
    const style = document.getElementById(this._sheetId);
    // $FlowFixMe
    return style.sheet;
  }

  get _style() {
    return document.getElementById(this._sheetId);
  }

  _clearSheet() {
    // $FlowFixMe
    this._sheet.disabled = true;
    // $FlowFixMe
    this._style.parentNode.removeChild(this._style);
    const style = document.createElement('style');
    style.id = this._sheetId;
    // $FlowFixMe
    document.head.appendChild(style);
  }

  _getMediaRules(rules: RulesMap): string {
    const out = [];
    rules.forEach((rule, key) => {
      out.push(`.fx-${key}{ ${rule.join(' ')} }`);
    });
    return out.join('\n');
  }

  _updateSheet() {
    this._clearSheet();
    const rules = [];
    this._rules.forEach((rule, key) => {
      if (rule) {
        const breakpoint = this.breakpoints[key];
        const mediaRules = this._getMediaRules(rule);
        if (key !== 'xs' && breakpoint) {
          rules.unshift(`${breakpoint} { ${mediaRules} }`);
        } else {
          rule.forEach((mRule, key) => {
            rules.push(`.fx-${key}{ ${mRule.join(' ')} }`);
          });
        }
      }
    });

    // console.log(rules);
    rules.forEach(rule => {
      this._sheet.insertRule(rule);
    });
  }

  _addRule(id: string, breakpoint: string, props: string[]) {
    let breakpointRule = this._rules.get(breakpoint);
    if (breakpointRule) {
      breakpointRule.set(id, props);
    } else {
      breakpointRule = new Map();
      breakpointRule.set(id, props);
    }
    this._rules.set(breakpoint, breakpointRule);
  }

  addClass(id: string, rules: BreakpointRules) {
    const breakpoints = Object.keys(rules);
    breakpoints.forEach(breakpoint => {
      const rule = rules[breakpoint];
      if (rule) {
        this._addRule(id, breakpoint, rule);
      }
    });

    this._updateSheet();

    return `fx-${id}`;
  }

  removeClass(id: string) {
    this._rules.forEach((rule, key) => {
      if (rule) {
        if (isObj(rule)) {
          rule.forEach((bRule, bkey) => {
            if (id === bkey) {
              rule.delete(key);
            }
          });
        } else {
          if (id === key) {
            this._rules.delete(key);
          }
        }
      }
    });

    this._updateSheet();
  }
}

export default new StyleManager();
export type { Breakpoints };

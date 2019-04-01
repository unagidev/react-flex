// @flow
export const getDisplay = (isItem: boolean, inline: false) => {
  return isItem
    ? `display:${inline ? 'inline-block' : 'block'};`
    : `display:${inline ? 'inline-flex' : 'flex'};`;
};

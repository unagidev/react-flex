import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Code = props => {
  let lines = props.children.split('\n');

  const minWhitespaces = lines.reduce((minTabs, line) => {
    const pttrn = /^\s*/;
    const whitespaces = line.match(pttrn)[0].length;
    if (minTabs <= 0) {
      minTabs = whitespaces;
    }
    if (minTabs > whitespaces) {
      minTabs = whitespaces;
    }

    return minTabs;
  }, -1);

  lines = lines.map(line => {
    const pttrn = /^\s*/;
    const whitespaces = line.match(pttrn)[0].length;
    if (whitespaces > 0) {
      const spaces = whitespaces - minWhitespaces;
      return new Array(spaces).join(' ') + line.trim();
    }
    return line;
  });

  return (
    <SyntaxHighlighter className="full-width" language="jsx" style={coy}>
      {lines.join('\n')}
    </SyntaxHighlighter>
  );
};

export default Code;

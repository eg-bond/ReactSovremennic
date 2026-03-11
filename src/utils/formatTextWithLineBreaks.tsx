import { ReactNode } from 'react';

export function formatTextWithLineBreaks(text: string): ReactNode {
  return text.split('\n').map((line, i, arr) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </span>
  ));
}

export function removeLineBreaks(text: string): string {
  return text.replace(/\n/g, '');
}

import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import './Editor.css';

function Editor() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);
  return (
    <CodeMirror
      value="console.log('hello world!');"
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
      minHeight={"600px"}
    />
  );
}
export default Editor;
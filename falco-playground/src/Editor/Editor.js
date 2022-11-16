import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { Mixed } from "./MixedLanguage"
import './Editor.css';

const initialContnet = `fd.name contains "pippo" and fd.name = 5`;

function Editor() {
  const onChange = React.useCallback((value, viewUpdate) => {
    // console.log('value:', value);
  }, []);
  return (
    <CodeMirror
      value={initialContnet}
      extensions={[Mixed()]}
      onChange={onChange}
      minHeight={"600px"}
    />
  );
}
export default Editor;
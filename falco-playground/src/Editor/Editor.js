import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from "@codemirror/language"
import { yaml } from "@codemirror/legacy-modes/mode/yaml"
import { Falco, FalcoLanguageHighlight } from "./FalcoLanguage"
import { syntaxHighlighting } from "@codemirror/language"
import './Editor.css';

const initialContnet = `fd.name contains "pippo" and fd.name = 5`;

function Editor() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);
  return (
    <CodeMirror
      value={initialContnet}
      extensions={[Falco(), syntaxHighlighting(FalcoLanguageHighlight)]}
      onChange={onChange}
      minHeight={"600px"}
    />
  );
}
export default Editor;
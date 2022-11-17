import React, { useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { tags } from '@lezer/highlight';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { Mixed } from "./MixedLanguage"
import { falcoLinter, falcoLintGutter, setFalco } from './Linter';
import { oneDark } from '@codemirror/theme-one-dark';
import './Editor.css';

const initialContent = `####################
# Your custom rules!
####################

# Add new rules, like this one
 - rule1: The program "sudo" is run in a container
   desc: An event will trigger every time you run sudo in a container
   condition: evt.type = execve and evt.dir=< and container.id != host and proc.name = sudo
   output: "Sudo run in container (user=%user.name %container.info parent=%proc.pname cmdline=%proc.cmdline)"
   priority: ERROR
   tags: [users, container]
`;

const FalcoLanguageHighlight = HighlightStyle.define([
  { tag: tags.variableName, color: "#fc6" },
  { tag: tags.operator, color: "#f5d" }
]);

function Editor({ falco, content, onContentChange }) {
  useEffect(()=>{
    setFalco(falco)
  }, [falco]);

  return (
    <CodeMirror
      value={content}
      extensions={[Mixed(), syntaxHighlighting(FalcoLanguageHighlight), falcoLinter, falcoLintGutter, oneDark]}
      onChange={onContentChange}
      height={"45vh"}
      width={"100%"}
      className="editor"
    />
  );
}
export default Editor;
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { tags, styleTags } from '@lezer/highlight';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { Mixed } from "./MixedLanguage"
import './Editor.css';

const initialContnet = `####################
# Your custom rules!
####################

# Add new rules, like this one
 - rule: The program "sudo" is run in a container
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


function Editor() {
  const onChange = React.useCallback((value, viewUpdate) => {
    // console.log('value:', value);
  }, []);
  return (
    <CodeMirror
      value={initialContnet}
      extensions={[Mixed(), syntaxHighlighting(FalcoLanguageHighlight)]}
      onChange={onChange}
      minHeight={"600px"}
    />
  );
}
export default Editor;
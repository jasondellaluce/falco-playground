import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from "@codemirror/language"
import { yaml } from "@codemirror/legacy-modes/mode/yaml"
import './Editor.css';


const initialContnet = `#################################
# Start writing your Falco rules!
#################################

# Add new rules, like this one
- rule: The program "sudo" is run in a container
  desc: An event will trigger every time you run sudo in a container
  condition: evt.type = execve and evt.dir=< and container.id != host and proc.name = sudo
  output: "Sudo run in container (user=%user.name %container.info parent=%proc.pname cmdline=%proc.cmdline)"
  priority: ERROR
  tags: [users, container]
`;

function Editor() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);
  return (
    <CodeMirror
      value={initialContnet}
      extensions={[StreamLanguage.define(yaml)]}
      onChange={onChange}
      minHeight={"600px"}
    />
  );
}
export default Editor;
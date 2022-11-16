import {syntaxTree} from "@codemirror/language"
import {linter, Diagnostic} from "@codemirror/lint"

const falcoLinter = linter(view => {
  let diagnostics = [];
//   syntaxTree(view.state).cursor().iterate(node => {
//     if (node.name == "RegExp") diagnostics.push({
//       from: node.from,
//       to: node.to,
//       severity: "warning",
//       message: "Regular expressions are FORBIDDEN",
//       actions: [{
//         name: "Remove",
//         apply(view, from, to) { view.dispatch({changes: {from, to}}) }
//       }]
//     })
//   })
  syntaxTree(view.state).cursor().iterate(node => {
    console.log("falco linter: ", node.name);
    if (node.name == "Program") {
        let text = view.viewState.state.doc.text.join(' ');
        // let text = view.viewState.state.toText();
        text = text.substring(node.from, node.to);
        console.log("falco linter: found the condition tag !! >> ", node.name, " content: ", node, view, text);
    }  
  });
  // simulation of a problem
  diagnostics.push({
    from: 66,
    to: 69,
    // severity: "warning",
    severity: "error",
    message: "Falco rule syntax is wrong: \"sudo\" not allowed here",
    actions: [{
        name: "Remove",
        apply(view, from, to) { view.dispatch({changes: {from, to}}) }
    }]
  });
  return diagnostics;
})

export default falcoLinter;
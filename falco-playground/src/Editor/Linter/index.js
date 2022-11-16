import {syntaxTree} from "@codemirror/language"
import {linter, Diagnostic} from "@codemirror/lint"

const falcoLinter = linter(view => {
  let diagnostics = [];
  
  // ... an offset from falco rule validation json response
  const offset = 98;

  // the end of selection
  let end = 0;

  syntaxTree(view.state).cursor().iterate(node => {
    try {
        let text = view.viewState.state.doc.text.join(' ');
        text = text.substring(node.from, node.to);
        
        if (node.from == offset) {
            end = node.to;
        }

        console.log("falco linter: ",  node.name, 
            node.index, node.from, node.to, 
            " - ", offset, end,
            text);
        
    } catch (e) {
        console.log('trust me: ignore this', e);
    }
  });
  // simulation of a problem
  diagnostics.push({
    from: offset,
    to: end,
    severity: "warning",
    // severity: "error",
    source: "Falco® Engine (WASM)",
    message: "Falco rule syntax is wrong",
    // actions: [{
    //     name: "Remove",
    //     apply(view, from, to) { view.dispatch({changes: {from, to}}) }
    // }]
  });
  return diagnostics;
})

export default falcoLinter;
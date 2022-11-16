import {syntaxTree} from "@codemirror/language"
import {linter, Diagnostic} from "@codemirror/lint"

const falcoLinter = linter(view => {
  let diagnostics = [];
  
  // ... an offset from falco rule validation json response
  const falcoWarnings = [
    {
        message: "An unknown top-level object is in the rules content. It will be ignored.",
        offset: 98,
        end: 0,
    },
    {
        message: "Falco rule syntax is wrong (fake)",
        offset: 149,
        end: 0,
    }
  ];

  syntaxTree(view.state).cursor().iterate(node => {
    try {
        let text = view.viewState.state.doc.text.join(' ');
        text = text.substring(node.from, node.to);
        
        falcoWarnings.forEach((item) => {
            if (item.offset == node.from) {
                item.end = node.to;
            }
        });

        console.log("falco linter: ",  node.name, 
            node.index, node.from, node.to, 
            text, falcoWarnings);
        
    } catch (e) {
        console.log('trust me: ignore this', e);
    }
  });
  // simulation of a problem

  falcoWarnings.forEach((item) => {
    if (item.offset < item.end) {
        diagnostics.push({
            from: item.offset,
            to: item.end,
            severity: "warning",
            // severity: "error",
            source: "Falco® Engine (WASM)",
            message: item.message,
            // actions: [{
            //     name: "Remove",
            //     apply(view, from, to) { view.dispatch({changes: {from, to}}) }
            // }]
        });
    }
  });
  return diagnostics;
})

export default falcoLinter;
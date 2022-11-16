import { syntaxTree } from "@codemirror/language"
import { linter } from "@codemirror/lint"
import falcoResponse from "./falcoResponse";

const falcoLinter = linter(view => {
    let diagnostics = [];

    let errors = falcoResponse.errors;
    let warnings = falcoResponse.warnings;

    syntaxTree(view.state).cursor().iterate(node => {
        try {
            let text = view.viewState.state.doc.text.join(' ');
            text = text.substring(node.from, node.to);

            errors.forEach((item) => {
                let locations = item.context.locations;
                let loc = locations[locations.length-1];
                if (loc.position.offset == node.from) {
                    loc.position.end = node.to;
                }
            });

            warnings.forEach((item) => {
                let locations = item.context.locations;
                let loc = locations[locations.length-1];
                if (loc.position.offset == node.from) {
                    loc.position.end = node.to;
                }
            });

            console.log("falco linter: ", node.name,
                node.index, node.from, node.to, text);

        } catch (e) {
            console.log('trust me: ignore this', e);
        }
    });
    // simulation of a problem

    warnings.forEach((item) => {
        let locations = item.context.locations;
        let loc = locations[locations.length-1];
        if (loc.position.offset < loc.position.end) {
            diagnostics.push({
                from: loc.position.offset,
                to: loc.position.end,
                severity: "warning",
                source: "Falco® Engine (WASM)",
                message: item.codedesc,
                // actions: [{
                //     name: "Remove",
                //     apply(view, from, to) { view.dispatch({changes: {from, to}}) }
                // }]
            });
        }
    });
    errors.forEach((item) => {
        let locations = item.context.locations;
        let loc = locations[locations.length-1];
        let from = loc.position.offset;
        let to = from+1;
        if (loc.position.offset < loc.position.end) {
            to = loc.position.end; 
        }
        diagnostics.push({
            from: from,
            to: to,
            severity: "error",
            source: "Falco® Engine (WASM)",
            message: item.codedesc,
            // actions: [{
            //     name: "Remove",
            //     apply(view, from, to) { view.dispatch({changes: {from, to}}) }
            // }]
        });
    });
    return diagnostics;
})

export default falcoLinter;
import { syntaxTree } from "@codemirror/language"
import { linter } from "@codemirror/lint"
import falcoResponse from "./falcoResponse";

const falcoLinter = linter(view => {
    let diagnostics = [];
    let errors = falcoResponse.errors;
    let warnings = falcoResponse.warnings;

    syntaxTree(view.state).cursor().iterate(node => {
        try {
            errors.forEach((item) => {
                setEnd(item, node);
            });

            warnings.forEach((item) => {
                setEnd(item, node);
            });

            const text = getText(view, node);
            console.log("falco linter: ", node.index, node.from, node.to, '|', node.name, '|', text);

        } catch (e) {
            console.log('trust me: ignore this', e);
        }
    });

    warnings.forEach((item) => {
        const d = buildDiagnostic(item, SEVERITY_WARNING);
        if (d != null && d.from < d.to) {
            diagnostics.push(d);
        }
    });

    errors.forEach((item) => {
        const d = buildDiagnostic(item, SEVERITY_ERORR);
        if (d != null && d.from < d.to) {
            diagnostics.push(d);
        }
    });

    return diagnostics;
})

const getText = (view, node) => {
    let text = view.viewState.state.doc.text.join(' ');
    text = text.substring(node.from, node.to);
    return text;
}

const setEnd = (item, node) => {
    let locations = item.context.locations;
    let loc = locations[locations.length-1];
    if (loc.position.offset == node.from) {
        loc.position.end = node.to;
    }
}

const SEVERITY_WARNING = 'warning';
const SEVERITY_ERORR = 'error';
const buildDiagnostic = (item, severity) => {
    let locations = item.context.locations;
    let loc = locations[locations.length-1]; // note: get last location, it's correct ?
    let from = loc.position.offset;
    let to = from+1;
    if (loc.position.offset < loc.position.end) {
        to = loc.position.end; 
    }
    return {
        from: from,
        to: to,
        severity: severity,
        source: "Falco® Engine (WASM)",
        message: item.codedesc,
        // actions: [{
        //     name: "Remove",
        //     apply(view, from, to) { view.dispatch({changes: {from, to}}) }
        // }]
    };
}

export default falcoLinter;

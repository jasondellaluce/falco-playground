import { syntaxTree } from "@codemirror/language"
import { linter, lintGutter } from "@codemirror/lint"

// a static falco errors and warnings, uncomment for testing purpose
// import falcoResponse from "./falcoResponse";

let falco = null;

const setFalco = (falcoParam) => {
    console.log('setFalco', falco);
    falco = falcoParam;
}

const runFalcoEngineValidation = (text) => {
    try {
        let jsonStr = falco.validateRules("file1", text);
        console.log('falco response', jsonStr);

        return JSON.parse(jsonStr);
    } catch (err) {
        console.log('falco engine error: ', err);

        // exit before in case of errors
        return null;
    }
}

const falcoLinterSource = (view) => {
    let diagnostics = [];
    
    let text = getText(view);
    let falcoResponse = runFalcoEngineValidation(text);
    if (falcoResponse == null) {
        return diagnostics;
    }

    let errors = falcoResponse.errors;
    let warnings = falcoResponse.warnings;

    if (errors.length === 0 && warnings.length === 0) {
        return diagnostics;
    }

    syntaxTree(view.state).cursor().iterate(node => {
        try {
            errors.forEach((item) => {
                setEnd(item, node);
            });

            warnings.forEach((item) => {
                setEnd(item, node);
            });

            const text = getNodeText(view, node);
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
}

const getText = (view) => {
    let text = view.viewState.state.doc.text.join('\n');
    return text;
}

const getNodeText = (view, node) => {
    let text = view.viewState.state.doc.text.join(' ');
    text = text.substring(node.from, node.to);
    return text;
}

const setEnd = (item, node) => {
    let locations = item.context.locations;
    let loc = locations[locations.length-1];
    if (loc.position.offset === node.from) {
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

const falcoLinter = linter(falcoLinterSource, {
    delay: 750,
});

const falcoLintGutter = lintGutter({
    hoverTime: 800,
})

export {falcoLinter, falcoLintGutter, setFalco};

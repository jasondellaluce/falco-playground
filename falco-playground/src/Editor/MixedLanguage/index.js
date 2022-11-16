import { parseMixed } from "@lezer/common"
import { LRLanguage, LanguageSupport} from "@codemirror/language"
import { Falco } from "../FalcoLanguage"
import { YAMLLanguage } from "../YAMLLanguage"
import { syntaxHighlighting } from "@codemirror/language"


const mixedFalcoYAMLParser = YAMLLanguage.parser.configure({
  wrap: parseMixed(node => {
    console.log(node);
    console.log(node.matchContext("condition: "));
    console.log(node.name);
    return null;
  })
})

export const MixedLanguage = LRLanguage.define({parser: mixedFalcoYAMLParser})

export function Mixed() {
  return new LanguageSupport(MixedLanguage);
}
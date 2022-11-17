import { parseMixed } from "@lezer/common"
import { LRLanguage, LanguageSupport} from "@codemirror/language"
import { Falco } from "../FalcoLanguage"
import { YAMLLanguage } from "../YAMLLanguage"


const mixedFalcoYAMLParser = YAMLLanguage.parser.configure({
  wrap: parseMixed((node) => {
    if (node.name == "ConditionValue") {
      let p = { parser: Falco().language.parser };
      return p;
    }
    return null;
  })
})

export const MixedLanguage = LRLanguage.define({parser: mixedFalcoYAMLParser})

export function Mixed() {
  return new LanguageSupport(MixedLanguage);
}

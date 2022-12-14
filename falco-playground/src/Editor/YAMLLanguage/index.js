import { ExternalTokenizer, ContextTracker, LRParser } from '@lezer/lr';
import { styleTags, tags } from '@lezer/highlight';
import { HighlightStyle, LRLanguage, LanguageSupport } from '@codemirror/language';

// This file was generated by lezer-generator. You probably shouldn't edit it.
const indent = 22,
  dedent = 23,
  newline$1 = 24,
  newlineEmpty = 25;

const newline = 10,
  carriageReturn = 13,
  space = 32,
  tab = 9,
  hash = 35;

const newlines = new ExternalTokenizer(
  (input, stack) => {
    if (input.next === newline || input.next === carriageReturn) {
      input.advance();
      let spaces = 0;
      while (input.next === space || input.next === tab) {
        input.advance();
        spaces++;
      }
      let empty = input.next === newline || input.next === carriageReturn || input.next === hash;
      input.acceptToken(empty ? newlineEmpty : newline$1, -spaces);
    }
  },
  { contextual: true, fallback: true }
);

const indentation = new ExternalTokenizer((input, stack) => {
  let cDepth = stack.context.depth;
  if (cDepth < 0) {
    return;
  }
  let prev = input.peek(-1);
  if ((prev === newline || prev === carriageReturn) && stack.context.depth >= 0) {
    let depth = 0,
      chars = 0;
    for (;;) {
      if (input.next === space) {
        depth++;
      } else if (input.next === tab) {
        depth += 8 - (depth % 8);
      } else {
        break;
      }
      input.advance();
      chars++;
    }
    if (
      depth !== cDepth &&
      input.next !== newline &&
      input.next !== carriageReturn &&
      input.next !== hash
    ) {
      if (depth < cDepth) {
        input.acceptToken(dedent, -chars);
      } else {
        input.acceptToken(indent);
      }
    }
  }
});

class IndentLevel {
  constructor(parent, depth) {
    this.parent = parent;
    // -1 means this is not an actual indent level but a set of brackets
    this.depth = depth;
    this.hash = (parent ? (parent.hash + parent.hash) << 8 : 0) + depth + (depth << 4);
  }
}

const topIndent = new IndentLevel(null, 0);

function countIndent(space) {
  let depth = 0;
  for (let i = 0; i < space.length; i++) {
    depth += space.charCodeAt(i) === tab ? 8 - (depth % 8) : 1;
  }
  return depth;
}

const trackIndent = new ContextTracker({
  start: topIndent,

  reduce(context) {
    return context.depth < 0 ? context.parent : context;
  },

  shift(context, term, stack, input) {
    if (term === indent) {
      return new IndentLevel(context, countIndent(input.read(input.pos, stack.pos)));
    }
    if (term === dedent) {
      return context.parent;
    }

    return context;
  },

  hash(context) {
    return context.hash;
  }
});

const yamlHighlighting = styleTags({
  DocStart: tags.meta,
  DocEnd: tags.meta,
  Key: tags.operator,
  Boolean: tags.bool,
  Null: tags.null,
  Plain: tags.string,
  Number: tags.number,
  Value: tags.string,
  FoldOp: tags.operatorKeyword,
  "[ ]": tags.squareBracket,
  "{ }": tags.brace,
  Comment: tags.comment
});

// This file was generated by lezer-generator. You probably shouldn't edit it.
const spec_PlainString = {__proto__:null,true:70, false:70, null:72, "~":72};
const parser = LRParser.deserialize({
  version: 14,
  states: "&lObQbOOOgQbO'#DOQOQbOOOrQdO'#C_O!ZQdO'#C_OOQ`'#Cs'#CsO!eQbO,59jOOQ`'#Cc'#CcOOQ`'#Ce'#CeOOQ`'#Cg'#CgOOQ`'#Cb'#CbO!pQhO'#CiO!uQbO'#CiOOQ`'#Ca'#CaO!zQbO,58yO#bQdO'#CoO#iQdO'#CrOOQ`'#Cl'#ClOOQ`-E6q-E6qO#pQbO,59TO#uQcO,59TOOQ`1G.e1G.eO#zQbO'#DUOOQ`,59Z,59ZO$VQbO,59ZOOQ`,59^,59^O$[QbO,59^O#uQcO1G.oO$a]hO'#DTOOQ`1G.o1G.oO#PQdO'#CuO$fQbO,59pOOQ`1G.u1G.uOOQ`1G.x1G.xO$qQbO7+$ZO$v]`O'#CtO${]iO,59oOOQ`,59a,59aOOQ`-E6s-E6sOOQ`<<Gu<<GuOO]a,59`,59`OO]a-E6r-E6rOOQ`1G/Z1G/Z",
  stateData: "%Z~OqOSnOSPOS~OnOS~OmPO~OSRO_SOjrX~OWXOYYO[XO^[OsVOtWOuZO~Ob_Oe`O~PrOSRO_SOjra~OvcO~OmdO~OmeO~OWXOYYO[XOsVOtWO~OagO~P#POdiO~P#POmkO~OklO~OynOaxXdxX~OapO~OdqO~OvsO~OynOaxadxa~OuwO~OmxO~OlzOvsO~OS_YvW~",
  goto: "#cyPPPzP!O!R!`P!`P!`P!gPP!mPP!jPP!j!p!v!|PPPPPPPP#SPPPP#V#]TTPUR^RQ]RQaSSf_`RunZYRS_`nQ]RRaSR^SQUPRbUQtlRytQofRvoRQOQmdRrkQh_Rj`",
  nodeNames: "??? Comment Document Property ConditionKey ConditionValue Scalar Boolean PlainString Null Number String QuotedString MultiLine FoldOp Key Value } { Mapping ] [ Sequence",
  maxTerm: 41,
  context: trackIndent,
  nodeProps: [
    ["openedBy", 17,"{",20,"["],
    ["closedBy", 18,"}",21,"]"]
  ],
  propSources: [yamlHighlighting],
  skippedNodes: [0,1],
  repeatNodeCount: 3,
  tokenData: "!Bg~R{OX#xXY)kYZ+cZ[#x[])k]^+c^p#xpq)kqr%^rs.`st2Xtu#xuw%^wz#xz{%^{|#x|}5[}!O6O!O!PAx!P!Q#x!Q!RKj!R![Mv![!]%^!]!^#x!^!`%^!`!a!!b!a!c%^!c!}!$O!}#O!*z#O#P!+k#P#Q!-Z#Q#R#x#R#S!$O#S#T#x#T#V!$O#V#W!-z#W#o!$O#o#p!AP#p#q!!b#q#r!Ap#r;'S#x;'S;=`!Ba<%lO#xU#}XvSOY$jZ]$j^r$jst%^t#O$j#O#P'n#P;'S$j;'S;=`)e<%lO$jU$qXvSWQOY$jZ]$j^r$jst%^t#O$j#O#P'n#P;'S$j;'S;=`)e<%lO$jS%cWvSOY%^Z]%^^r%^s#O%^#O#P%{#P;'S%^;'S;=`'h<%lO%^S&Q[vSOY%^YZ%^Z]%^]^%^^r%^rs%^s#O%^#O#P%{#P;'S%^;'S;=`&v;=`<%l%^<%lO%^S&{XvSOY%^Z]%^^r%^s#O%^#O#P%{#P;'S%^;'S;=`'h;=`<%l%^<%lO%^S'kP;=`<%l%^U'u]vSWQOY$jYZ$jZ]$j]^$j^r$jrs$jst$jt#O$j#O#P'n#P;'S$j;'S;=`(n;=`<%l$j<%lO$jU(uYvSWQOY$jZ]$j^r$jst%^t#O$j#O#P'n#P;'S$j;'S;=`)e;=`<%l$j<%lO$jU)hP;=`<%l$j~)r[vSq~OX%^XY)kZ[%^[])k^p%^pq)kqr%^s#O%^#O#P*h#P;'S%^;'S;=`'h<%lO%^~*m[vSOY%^YZ)kZ]%^]^)k^r%^rs%^s#O%^#O#P%{#P;'S%^;'S;=`&v;=`<%l%^<%lO%^Q+fWOY,OZ],O^r,Ot#O,O#O#P,m#P;'S,O;'S;=`.Y<%lO,OQ,TWWQOY,OZ],O^r,Ot#O,O#O#P,m#P;'S,O;'S;=`.Y<%lO,OQ,r[WQOY,OYZ,OZ],O]^,O^r,Ort,Ot#O,O#O#P,m#P;'S,O;'S;=`-h;=`<%l,O<%lO,OQ-mXWQOY,OZ],O^r,Ot#O,O#O#P,m#P;'S,O;'S;=`.Y;=`<%l,O<%lO,OQ.]P;=`<%l,O~.eWu~OY.}Z].}^r.}t#O.}#O#P/r#P;'S.};'S;=`1`<%lO.}~/QXOY.}Z].}^r.}rs/mt#O.}#O#P/r#P;'S.};'S;=`1`<%lO.}~/rO[~~/u]OY.}YZ.}Z].}]^.}^r.}rs0nst.}t#O.}#O#P/r#P;'S.};'S;=`1f;=`<%l.}<%lO.}~0sX[~OY.}Z].}^r.}rs/mt#O.}#O#P/r#P;'S.};'S;=`1`<%lO.}~1cP;=`<%l.}~1iYOY.}Z].}^r.}rs/mt#O.}#O#P/r#P;'S.};'S;=`1`;=`<%l.}<%lO.}~2`XvSP~OY2XZ]2X^r2Xrs2{s#O2X#O#P3g#P;'S2X;'S;=`5U<%lO2X~3QTP~OY2{Z]2{^;'S2{;'S;=`3a<%lO2{~3dP;=`<%l2{~3n[vSP~OY2XYZ%^Z]2X]^%^^r2Xrs2Xs#O2X#O#P3g#P;'S2X;'S;=`4d;=`<%l%^<%lO2X~4iXvSOY%^Z]%^^r%^s#O%^#O#P%{#P;'S%^;'S;=`'h;=`<%l2X<%lO%^~5XP;=`<%l2XV5cXyPvSOY$jZ]$j^r$jst%^t#O$j#O#P'n#P;'S$j;'S;=`)e<%lO$jU6T]vSOY%^Z]%^^r%^s!O%^!O!P6|!P!Q%^!Q!R?l!R![@o![#O%^#O#P%{#P;'S%^;'S;=`'h<%lO%^U7R^vSOY%^Z]%^^r%^s!Q%^!Q![7}![#O%^#O#P%{#P#]%^#]#^;m#^#b%^#b#c>S#c;'S%^;'S;=`'h<%lO%^U8U^YQvSOY%^Z]%^^r%^s!Q%^!Q![7}![!g%^!g!h9Q!h#O%^#O#P%{#P#X%^#X#Y9Q#Y;'S%^;'S;=`'h<%lO%^U9V^vSOY%^Z]%^^r%^s{%^{|:R|}%^}!O:R!O!Q%^!Q![:v![#O%^#O#P%{#P;'S%^;'S;=`'h<%lO%^U:WYvSOY%^Z]%^^r%^s!Q%^!Q![:v![#O%^#O#P%{#P;'S%^;'S;=`'h<%lO%^U:}YYQvSOY%^Z]%^^r%^s!Q%^!Q![:v![#O%^#O#P%{#P;'S%^;'S;=`'h<%lO%^U;rYvSOY%^Z]%^^r%^s#O%^#O#P%{#P#b%^#b#c<b#c;'S%^;'S;=`'h<%lO%^U<gYvSOY%^Z]%^^r%^s#O%^#O#P%{#P#Y%^#Y#Z=V#Z;'S%^;'S;=`'h<%lO%^U=^[YQvSOY%^Z]%^^r%^s!g%^!g!h9Q!h#O%^#O#P%{#P#X%^#X#Y9Q#Y;'S%^;'S;=`'h<%lO%^U>XYvSOY%^Z]%^^r%^s#O%^#O#P%{#P#T%^#T#U>w#U;'S%^;'S;=`'h<%lO%^U>|YvSOY%^Z]%^^r%^s#O%^#O#P%{#P#b%^#b#c=V#c;'S%^;'S;=`'h<%lO%^U?s^YQvSOY%^Z]%^^r%^s!O%^!O!P6|!P!g%^!g!h9Q!h#O%^#O#P%{#P#X%^#X#Y9Q#Y;'S%^;'S;=`'h<%lO%^U@v`YQvSOY%^Z]%^^r%^s!O%^!O!P6|!P!Q%^!Q![@o![!g%^!g!h9Q!h#O%^#O#P%{#P#X%^#X#Y9Q#Y;'S%^;'S;=`'h<%lO%^UA}_vSOY$jZ]$j^r$jst%^t!Q$j!Q![B|![#O$j#O#P'n#P#]$j#]#^GQ#^#b$j#b#cIv#c;'S$j;'S;=`)e<%lO$jUCV_YQvSWQOY$jZ]$j^r$jst%^t!Q$j!Q![B|![!g$j!g!hDU!h#O$j#O#P'n#P#X$j#X#YDU#Y;'S$j;'S;=`)e<%lO$jUD]_vSWQOY$jZ]$j^r$jst%^t{$j{|E[|}$j}!OE[!O!Q$j!Q![FU![#O$j#O#P'n#P;'S$j;'S;=`)e<%lO$jUEcZvSWQOY$jZ]$j^r$jst%^t!Q$j!Q![FU![#O$j#O#P'n#P;'S$j;'S;=`)e<%lO$jUF_ZYQvSWQOY$jZ]$j^r$jst%^t!Q$j!Q![FU![#O$j#O#P'n#P;'S$j;'S;=`)e<%lO$jUGXZvSWQOY$jZ]$j^r$jst%^t#O$j#O#P'n#P#b$j#b#cGz#c;'S$j;'S;=`)e<%lO$jUHRZvSWQOY$jZ]$j^r$jst%^t#O$j#O#P'n#P#Y$j#Y#ZHt#Z;'S$j;'S;=`)e<%lO$jUH}]YQvSWQOY$jZ]$j^r$jst%^t!g$j!g!hDU!h#O$j#O#P'n#P#X$j#X#YDU#Y;'S$j;'S;=`)e<%lO$jUI}ZvSWQOY$jZ]$j^r$jst%^t#O$j#O#P'n#P#T$j#T#UJp#U;'S$j;'S;=`)e<%lO$jUJwZvSWQOY$jZ]$j^r$jst%^t#O$j#O#P'n#P#b$j#b#cHt#c;'S$j;'S;=`)e<%lO$jUKq_YQvSOY$jZ]$j^r$jst%^t!O$j!O!PLp!P!g$j!g!hDU!h#O$j#O#P'n#P#X$j#X#YDU#Y;'S$j;'S;=`)e<%lO$jULw_vSWQOY$jZ]$j^r$jst%^t!Q$j!Q![B|![#O$j#O#P'n#P#]$j#]#^GQ#^#b$j#b#cIv#c;'S$j;'S;=`)e<%lO$jUM}aYQvSOY$jZ]$j^r$jst%^t!O$j!O!PLp!P!Q$j!Q![! S![!g$j!g!hDU!h#O$j#O#P'n#P#X$j#X#YDU#Y;'S$j;'S;=`)e<%lO$jU! ]aYQvSWQOY$jZ]$j^r$jst%^t!O$j!O!PLp!P!Q$j!Q![! S![!g$j!g!hDU!h#O$j#O#P'n#P#X$j#X#YDU#Y;'S$j;'S;=`)e<%lO$jU!!i[^QvSOY%^Z]%^^r%^s{%^{|!#_|}%^}!O!#_!O#O%^#O#P%{#P;'S%^;'S;=`'h<%lO%^U!#fW^QvSOY%^Z]%^^r%^s#O%^#O#P%{#P;'S%^;'S;=`'h<%lO%^V!$TfvSOX$jXY!%iZ[$j[]!%i^p$jpq!%iqr$jst%^t!Q$j!Q![!)_![!]!&o!]!c$j!c!}!)_!}#O$j#O#P!(_#P#R$j#R#S!)_#S#T$j#T#o!)_#o;'S$j;'S;=`)e<%lO$jV!%p_vSWQOX$jXY!%iZ[$j[]!%i^p$jpq!%iqr$jst%^t![$j![!]!&o!]#O$j#O#P!(_#P;'S$j;'S;=`)e<%lO$jV!&vZvSWQOY$jZ]$j^p$jpq!'iqr$jst%^t#O$j#O#P'n#P;'S$j;'S;=`)e<%lO$jV!'rX_PvSWQOY$jZ]$j^r$jst%^t#O$j#O#P'n#P;'S$j;'S;=`)e<%lO$jV!(f]vSWQOY$jYZ!%iZ]$j]^!%i^r$jrs$jst$jt#O$j#O#P'n#P;'S$j;'S;=`(n;=`<%l$j<%lO$jV!)ffvSWQOX$jXY!%iZ[$j[]!%i^p$jpq!%iqr$jst%^t!Q$j!Q![!)_![!]!&o!]!c$j!c!}!)_!}#O$j#O#P!(_#P#R$j#R#S!)_#S#T$j#T#o!)_#o;'S$j;'S;=`)e<%lO$jU!+RWeQvSOY%^Z]%^^r%^s#O%^#O#P%{#P;'S%^;'S;=`'h<%lO%^~!+p]vSOY$jYZ)kZ]$j]^)k^r$jrs%^st%^t#O$j#O#P'n#P;'S$j;'S;=`!,i;=`<%l%^<%lO$jU!,nXvSOY%^Z]%^^r%^s#O%^#O#P%{#P;'S%^;'S;=`'h;=`<%l$j<%lO%^V!-bWdRvSOY%^Z]%^^r%^s#O%^#O#P%{#P;'S%^;'S;=`'h<%lO%^V!.PhvSOX$jXY!%iZ[$j[]!%i^p$jpq!%iqr$jst%^t!Q$j!Q![!)_![!]!&o!]!c$j!c!}!)_!}#O$j#O#P!(_#P#R$j#R#S!)_#S#T$j#T#c!)_#c#d!/k#d#o!)_#o;'S$j;'S;=`)e<%lO$jV!/rhvSWQOX$jXY!%iZ[$j[]!%i^p$jpq!%iqr$jst%^t!Q$j!Q![!)_![!]!&o!]!c$j!c!}!)_!}#O$j#O#P!(_#P#R$j#R#S!)_#S#T$j#T#b!)_#b#c!1^#c#o!)_#o;'S$j;'S;=`)e<%lO$jV!1ehvSWQOX$jXY!%iZ[$j[]!%i^p$jpq!%iqr$jst%^t!Q$j!Q![!)_![!]!&o!]!c$j!c!}!)_!}#O$j#O#P!(_#P#R$j#R#S!)_#S#T$j#T#W!)_#W#X!3P#X#o!)_#o;'S$j;'S;=`)e<%lO$jV!3WhvSWQOX$jXY!%iZ[$j[]!%i^p$jpq!%iqr$jst%^t!Q$j!Q![!)_![!]!&o!]!c$j!c!}!)_!}#O$j#O#P!(_#P#R$j#R#S!)_#S#T$j#T#]!)_#]#^!4r#^#o!)_#o;'S$j;'S;=`)e<%lO$jV!4yhvSWQOX$jXY!%iZ[$j[]!%i^p$jpq!%iqr$jst%^t!Q$j!Q![!)_![!]!&o!]!c$j!c!}!)_!}#O$j#O#P!(_#P#R$j#R#S!)_#S#T$j#T#h!)_#h#i!6e#i#o!)_#o;'S$j;'S;=`)e<%lO$jV!6lhvSWQOX$jXY!%iZ[$j[]!%i^p$jpq!%iqr$jst%^t!Q$j!Q![!)_![!]!&o!]!c$j!c!}!)_!}#O$j#O#P!(_#P#R$j#R#S!)_#S#T$j#T#]!)_#]#^!8W#^#o!)_#o;'S$j;'S;=`)e<%lO$jV!8_hvSWQOX$jXY!%iZ[$j[]!%i^p$jpq!%iqr$jst%^t!Q$j!Q![!)_![!]!&o!]!c$j!c!}!)_!}#O$j#O#P!(_#P#R$j#R#S!)_#S#T$j#T#c!)_#c#d!9y#d#o!)_#o;'S$j;'S;=`)e<%lO$jV!:QhvSWQOX$jXY!%iZ[$j[]!%i^p$jpq!%iqr$jst%^t!Q$j!Q![!)_![!]!&o!]!c$j!c!}!)_!}#O$j#O#P!(_#P#R$j#R#S!)_#S#T$j#T#b!)_#b#c!;l#c#o!)_#o;'S$j;'S;=`)e<%lO$jV!;sfvSWQOX$jXY!=XZ[$j[]!=X^p$jpq!=Xqr$jst%^t!Q$j!Q![!)_![!]!>_!]!c$j!c!}!)_!}#O$j#O#P!@P#P#R$j#R#S!)_#S#T$j#T#o!)_#o;'S$j;'S;=`)e<%lO$jV!=`_vSWQOX$jXY!=XZ[$j[]!=X^p$jpq!=Xqr$jst%^t![$j![!]!>_!]#O$j#O#P!@P#P;'S$j;'S;=`)e<%lO$jV!>fZvSWQOY$jZ]$j^p$jpq!?Xqr$jst%^t#O$j#O#P'n#P;'S$j;'S;=`)e<%lO$jV!?dXSP_PvSWQOY$jZ]$j^r$jst%^t#O$j#O#P'n#P;'S$j;'S;=`)e<%lO$jV!@W]vSWQOY$jYZ!=XZ]$j]^!=X^r$jrs$jst$jt#O$j#O#P'n#P;'S$j;'S;=`(n;=`<%l$j<%lO$jU!AWWbQvSOY%^Z]%^^r%^s#O%^#O#P%{#P;'S%^;'S;=`'h<%lO%^V!AwWaRvSOY%^Z]%^^r%^s#O%^#O#P%{#P;'S%^;'S;=`'h<%lO%^U!BdP;=`<%l#x",
  tokenizers: [indentation, 0, 1, 2, newlines],
  topRules: {"Document":[0,2]},
  specialized: [{term: 8, get: value => spec_PlainString[value] || -1}],
  tokenPrec: 189
});

const YAMLLanguageHighlight = HighlightStyle.define([

]);
const YAMLLanguage = LRLanguage.define({
    parser: parser.configure({
        props: [
            styleTags({
                Key: tags.attributeName,
                ConditionKey: tags.attributeName,
            })
        ]
    })
});
function YAML() {
    return new LanguageSupport(YAMLLanguage);
}

export { YAML, YAMLLanguage, YAMLLanguageHighlight };

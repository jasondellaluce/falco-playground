import { LRParser } from '@lezer/lr';
import { HighlightStyle, LRLanguage, LanguageSupport } from '@codemirror/language';
import { tags, styleTags } from '@lezer/highlight';

// This file was generated by lezer-generator. You probably shouldn't edit it.
const parser = LRParser.deserialize({
  version: 14,
  states: "&rOVQPOOOeQQO'#CbOvQQO'#CaOOQO'#Ca'#CaO!UQPO'#C`OOQO'#C`'#C`O!aQQO'#C_O!oQQO'#C^OVQPO'#CaQOQPOOO!zQSO,58|OOQO'#Cg'#CgO#SQPO'#CgO#[QWO'#CgO#dQPO'#CgOOQO,58{,58{OOQO,58z,58zOVQPO'#CuO#lQQO,58yOVQPO'#CvO#zQQO,58xO$VQPO,58{OOQO'#Cd'#CdO$[QPO1G.hOOQO'#Cj'#CjOOQO,59R,59ROOQO'#Cn'#CnO$aQWO'#CqOOQO'#Cq'#CqOOQO,59a,59aOOQO-E6s-E6sOOQO,59b,59bOOQO-E6t-E6tOOQO1G.g1G.gOOQO7+$S7+$SO$lQWO'#CsO$zQWO,59]OOQO,59],59]O#[QWO'#CtO%VQWO,59_OOQO-E6q-E6qOOQO1G.w1G.wOOQO,59`,59`OOQO-E6r-E6r",
  stateData: "%e~OmOS~OVPOfROnSOqWO~OoYO[UX]UXaUXdUX~O[ZO][Oa]Od^O~OVPOfROqWO~OtaOkRXuRXsRX~OucOkQXsQX~OXfOYfO~O_hO`hO~OXjOcjO~OflOqkO~OtaOkRauRasRa~OucOkQasQa~OsqO~OprO~OXjOcjOsuO~OrvOXgXcgXsgX~OXjOcjOsyO~OrvOXgacgasga~O",
  goto: "#ckPPlry!R![P!cPP!fPP!iPPP!lPP!vP!y#P#V#]QXOReWSVOWRocUUOWcRmaWTOWacR`SZQOSWacRgYR_QRi[Qi]SsktRzvRi^QtkRxtQwsR{wQbURnbQdVRpd",
  nodeNames: "⚠ Program OrExpr AndExpr NotExpr Check CheckField FieldName FieldArg QuotedStr FieldArgBareStr CheckCondition UnaryOperator NumOperator NumValue HexNumber Number StrOperator StrValue BareStr ListOperator ListValue Identifier",
  maxTerm: 37,
  skippedNodes: [0],
  repeatNodeCount: 4,
  tokenData: "%(k~R!TOW$bXY'jYZ'jZ]$b]^'j^p$bpq'jqr'{rs*Osw$bwx+lxy-Tyz-zz{$b{|.q|}7z}!O.q!O!Q$b!Q!R8q!R![0T![!^$b!^!_=e!_!`?j!`!a=e!a!c$b!c!p@g!p!q$b!q!}@g!}#OHp#O#P$b#P#QIg#Q#T$b#T#UJ^#U#V@g#V#W!#R#W#X@g#X#Y!5V#Y#Z@g#Z#[##g#[#]@g#]#^#-q#^#b@g#b#c$(a#c#d$,e#d#e$1a#e#g@g#g#h$@V#h#o@g#o;'S$b;'S;=`'d<%lO$b[$iacWYSOW$bZ]$b^p$bqr$bsw$bxz%nz|$b|}%n}!_$b!_!`%n!`!}$b!}#O&i#O#P$b#P#Q&i#Q;'S$b;'S;=`'d<%lO$bS%sYYSOW%nZ]%n^p%nqr%nsw%nx!}%n#O#P%n#Q;'S%n;'S;=`&c<%lO%nS&fP;=`<%l%nW&nYcWOW&iZ]&i^p&iqr&isw&iz|&i}!_&i!`;'S&i;'S;=`'^<%lO&iW'aP;=`<%l&i['gP;=`<%l$b~'oSm~XY'jYZ'j]^'jpq'j^(SacWYSOW$bZ]$b^p$bqr$bsw$bxz%nz|$b|}%n}!_$b!_!`)X!`!}$b!}#O&i#O#P$b#P#Q&i#Q;'S$b;'S;=`'d<%lO$bU)`YYSaQOW%nZ]%n^p%nqr%nsw%nx!}%n#O#P%n#Q;'S%n;'S;=`&c<%lO%n~*RVOr*Ors*hs#O*O#O#P*m#P;'S*O;'S;=`+f<%lO*O~*mOX~~*pRO;'S*O;'S;=`*y;=`O*O~*|WOr*Ors*hs#O*O#O#P*m#P;'S*O;'S;=`+f;=`<%l*O<%lO*O~+iP;=`<%l*O~+oVOw+lwx*hx#O+l#O#P,U#P;'S+l;'S;=`,}<%lO+l~,XRO;'S+l;'S;=`,b;=`O+l~,eWOw+lwx*hx#O+l#O#P,U#P;'S+l;'S;=`,};=`<%l+l<%lO+l~-QP;=`<%l+lT-[YqPYSOW%nZ]%n^p%nqr%nsw%nx!}%n#O#P%n#Q;'S%n;'S;=`&c<%lO%n_.RYsZYSOW%nZ]%n^p%nqr%nsw%nx!}%n#O#P%n#Q;'S%n;'S;=`&c<%lO%n].xccWYSOW$bZ]$b^p$bqr$bsw$bxz%nz|$b|}%n}!R$b!R![0T![!_$b!_!`%n!`!}$b!}#O&i#O#P$b#P#Q&i#Q;'S$b;'S;=`'d<%lO$b]0^jcWYS`POW$bZ]$b^p$bqr$bsw$bxz%nz|$b|}%n}!O$b!O!P2O!P!Q$b!Q!R2O!R![0T![!_$b!_!`%n!`!g$b!g!h3p!h!}$b!}#O&i#O#P$b#P#Q&i#Q#X$b#X#Y3p#Y;'S$b;'S;=`'d<%lO$b]2XgcWYS`POW$bZ]$b^p$bqr$bsw$bxz%nz|$b|}%n}!Q$b!Q![2O![!_$b!_!`%n!`!g$b!g!h3p!h!}$b!}#O&i#O#P$b#P#Q&i#Q#X$b#X#Y3p#Y;'S$b;'S;=`'d<%lO$b]3wccWYSOW$bZ]$b^p$bqr$bsw$bxz%nz{$b{|5S|}%n}!O5S!O!_$b!_!`%n!`!}$b!}#O&i#O#P$b#P#Q&i#Q;'S$b;'S;=`'d<%lO$b]5ZccWYSOW$bZ]$b^p$bqr$bsw$bxz%nz|$b|}%n}!Q$b!Q![6f![!_$b!_!`%n!`!}$b!}#O&i#O#P$b#P#Q&i#Q;'S$b;'S;=`'d<%lO$b]6occWYS`POW$bZ]$b^p$bqr$bsw$bxz%nz|$b|}%n}!Q$b!Q![6f![!_$b!_!`%n!`!}$b!}#O&i#O#P$b#P#Q&i#Q;'S$b;'S;=`'d<%lO$b[8RYrWYSOW%nZ]%n^p%nqr%nsw%nx!}%n#O#P%n#Q;'S%n;'S;=`&c<%lO%n]8xecWYSOW$bZ]$b^p$bqr$bsw$bxz%nz|$b|}%n}!_$b!_!`%n!`!z$b!z!{:Z!{!}$b!}#O&i#O#P$b#P#Q&i#Q#l$b#l#m:Z#m;'S$b;'S;=`'d<%lO$b]:bfcWYSOW$bZ]$b^p$bqr$bsw$bxz%nz|$b|}%n}!Q$b!Q![;v![!_$b!_!`%n!`!c$b!c!};v!}#O&i#O#P$b#P#Q&i#Q#T$b#T#o;v#o;'S$b;'S;=`'d<%lO$b]<PfcWYS_POW$bZ]$b^p$bqr$bsw$bxz%nz|$b|}%n}!Q$b!Q![;v![!_$b!_!`%n!`!c$b!c!};v!}#O&i#O#P$b#P#Q&i#Q#T$b#T#o;v#o;'S$b;'S;=`'d<%lO$b^=nacWYS]QOW$bZ]$b^p$bqr$bsw$bxz%nz|$b|}%n}!_$b!_!`>s!`!}$b!}#O&i#O#P$b#P#Q&i#Q;'S$b;'S;=`'d<%lO$bU>zYYS]QOW%nZ]%n^p%nqr%nsw%nx!}%n#O#P%n#Q;'S%n;'S;=`&c<%lO%nU?q[YSaQOW%nZ]%n^p%nqr%nsw%nx!_%n!_!`)X!`!}%n#O#P%n#Q;'S%n;'S;=`&c<%lO%n]@nrcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#o@g#o;'S$b;'S;=`'d<%lO$bPB}SfPXYBxYZBx]^BxpqBx]CbdcWYSOW$bZ]$b^p$bqr$bsw$bxz%nz|$b|}%n}!_$b!_!`%n!`!c$b!c!}Dp!}#O&i#O#P$b#P#Q&i#Q#T$b#T#oDp#o;'S$b;'S;=`'d<%lO$b]DyjcWYSVPOW$bZ]$b^p$bqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Dp![!_$b!_!`%n!`!c$b!c!}Dp!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SDp#S#T$b#T#oDp#o;'S$b;'S;=`'d<%lO$b]FrncWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#oFk#o;'S$b;'S;=`'d<%lO$bYHwYoQcWOW&iZ]&i^p&iqr&isw&iz|&i}!_&i!`;'S&i;'S;=`'^<%lO&iXInYpPcWOW&iZ]&i^p&iqr&isw&iz|&i}!_&i!`;'S&i;'S;=`'^<%lO&i_JercWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cLo#c#o@g#o;'S$b;'S;=`'d<%lO$b_LvpcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#WFk#W#XNz#X#oFk#o;'S$b;'S;=`'d<%lO$b_! TntQcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#oFk#o;'S$b;'S;=`'d<%lO$b_!#YscWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#d!%g#d#o@g#o;'S$b;'S;=`'d<%lO$b_!%nrcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#c!'x#c#o@g#o;'S$b;'S;=`'d<%lO$b_!(PpcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#hFk#h#i!*T#i#oFk#o;'S$b;'S;=`'d<%lO$b_!*[ocWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#U!,]#U#oFk#o;'S$b;'S;=`'d<%lO$b_!,dpcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#]Fk#]#^!.h#^#oFk#o;'S$b;'S;=`'d<%lO$b_!.opcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#bFk#b#c!0s#c#oFk#o;'S$b;'S;=`'d<%lO$b_!0zpcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#gFk#g#h!3O#h#oFk#o;'S$b;'S;=`'d<%lO$b_!3XncWYSaQOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#oFk#o;'S$b;'S;=`'d<%lO$b_!5^tcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#c!7n#c#l@g#l#m!ES#m#o@g#o;'S$b;'S;=`'d<%lO$b_!7upcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#WFk#W#X!9y#X#oFk#o;'S$b;'S;=`'d<%lO$b_!:QpcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#gFk#g#h!<U#h#oFk#o;'S$b;'S;=`'d<%lO$b_!<]pcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#kFk#k#l!>a#l#oFk#o;'S$b;'S;=`'d<%lO$b_!>hpcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#]Fk#]#^!@l#^#oFk#o;'S$b;'S;=`'d<%lO$b_!@spcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#hFk#h#i!Bw#i#oFk#o;'S$b;'S;=`'d<%lO$b_!COpcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#[Fk#[#]!3O#]#oFk#o;'S$b;'S;=`'d<%lO$b_!EZtcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#]@g#]#^!Gk#^#b@g#b#cFk#c#o@g#o;'S$b;'S;=`'d<%lO$b_!GrtcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#g@g#g#h!JS#h#o@g#o;'S$b;'S;=`'d<%lO$b_!JZtcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#h@g#h#i!Lk#i#o@g#o;'S$b;'S;=`'d<%lO$b_!LrtcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#g@g#g#h# S#h#o@g#o;'S$b;'S;=`'d<%lO$b_# ]rcWYS[QOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#o@g#o;'S$b;'S;=`'d<%lO$b_##ntcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#`@g#`#a#&O#a#b@g#b#cFk#c#o@g#o;'S$b;'S;=`'d<%lO$b_#&VscWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#d#(d#d#o@g#o;'S$b;'S;=`'d<%lO$b_#(ktcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#U@g#U#V#*{#V#b@g#b#cFk#c#o@g#o;'S$b;'S;=`'d<%lO$b_#+SrcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpq#-^qr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#o@g#o;'S$b;'S;=`'d<%lO$bR#-eSfPaQXYBxYZBx]^BxpqBx_#-xtcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#V@g#V#W#0Y#W#b@g#b#c#B[#c#o@g#o;'S$b;'S;=`'d<%lO$b_#0ascWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#d#2n#d#o@g#o;'S$b;'S;=`'d<%lO$b_#2urcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#c#5P#c#o@g#o;'S$b;'S;=`'d<%lO$b_#5WpcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#hFk#h#i#7[#i#oFk#o;'S$b;'S;=`'d<%lO$b_#7cocWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#U#9d#U#oFk#o;'S$b;'S;=`'d<%lO$b_#9kpcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#]Fk#]#^#;o#^#oFk#o;'S$b;'S;=`'d<%lO$b_#;vpcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#bFk#b#c#=z#c#oFk#o;'S$b;'S;=`'d<%lO$b_#>RpcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#gFk#g#h#@V#h#oFk#o;'S$b;'S;=`'d<%lO$b_#@^ncWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpq#-^qr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#oFk#o;'S$b;'S;=`'d<%lO$b_#BepcWYSdQOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#hFk#h#i#Di#i#oFk#o;'S$b;'S;=`'d<%lO$b_#DppcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#XFk#X#Y#Ft#Y#oFk#o;'S$b;'S;=`'d<%lO$b_#F{pcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#fFk#f#g#IP#g#oFk#o;'S$b;'S;=`'d<%lO$b_#IWpcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#gFk#g#h#K[#h#oFk#o;'S$b;'S;=`'d<%lO$b_#KcpcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#XFk#X#Y#Mg#Y#oFk#o;'S$b;'S;=`'d<%lO$b_#MnpcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#VFk#V#W$ r#W#oFk#o;'S$b;'S;=`'d<%lO$b_$ ypcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#hFk#h#i$#}#i#oFk#o;'S$b;'S;=`'d<%lO$b_$$UpcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#gFk#g#h$&Y#h#oFk#o;'S$b;'S;=`'d<%lO$b_$&cncWYSdQOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!}Fk!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#oFk#o;'S$b;'S;=`'d<%lO$b]$(hccWYSOW$bZ]$b^p$bqr$bsw$bxz%nz|$b|}%n}!_$b!_!`%n!`!}$b!}#O&i#O#P$b#P#Q&i#Q#c$b#c#d$)s#d;'S$b;'S;=`'d<%lO$b]$)zccWYSOW$bZ]$b^p$bqr$bsw$bxz%nz|$b|}%n}!_$b!_!`%n!`!}$b!}#O&i#O#P$b#P#Q&i#Q#h$b#h#i$+V#i;'S$b;'S;=`'d<%lO$b]$+`anPcWYSOW$bZ]$b^p$bqr$bsw$bxz%nz|$b|}%n}!_$b!_!`%n!`!}$b!}#O&i#O#P$b#P#Q&i#Q;'S$b;'S;=`'d<%lO$b_$,ltcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#f@g#f#g$.|#g#o@g#o;'S$b;'S;=`'d<%lO$b_$/VruQcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#o@g#o;'S$b;'S;=`'d<%lO$b_$1hscWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#a@g#a#b$3u#b#cFk#c#o@g#o;'S$b;'S;=`'d<%lO$b_$3|scWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#U$6Z#U#b@g#b#cFk#c#o@g#o;'S$b;'S;=`'d<%lO$b_$6btcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#h@g#h#i$8r#i#o@g#o;'S$b;'S;=`'d<%lO$b_$8ytcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#V@g#V#W$;Z#W#b@g#b#cFk#c#o@g#o;'S$b;'S;=`'d<%lO$b_$;btcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#[@g#[#]$=r#]#b@g#b#cFk#c#o@g#o;'S$b;'S;=`'d<%lO$b_$={rcWYSdQOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#o@g#o;'S$b;'S;=`'d<%lO$b_$@^tcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#h@g#h#i$Bn#i#o@g#o;'S$b;'S;=`'d<%lO$b_$BuscWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#U$ES#U#b@g#b#cFk#c#o@g#o;'S$b;'S;=`'d<%lO$b_$EZtcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#f@g#f#g$Gk#g#o@g#o;'S$b;'S;=`'d<%lO$b_$GrtcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#h@g#h#i$JS#i#o@g#o;'S$b;'S;=`'d<%lO$b_$JZtcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#g@g#g#h$Lk#h#o@g#o;'S$b;'S;=`'d<%lO$b_$LrtcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#k@g#k#l% S#l#o@g#o;'S$b;'S;=`'d<%lO$b_% ZtcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#]@g#]#^%#k#^#b@g#b#cFk#c#o@g#o;'S$b;'S;=`'d<%lO$b_%#rtcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#b@g#b#cFk#c#h@g#h#i%&S#i#o@g#o;'S$b;'S;=`'d<%lO$b_%&ZtcWYSOW$bXYBxYZBxZ]$b]^Bx^p$bpqBxqr$bsw$bxz%nz|$b|}%n}!O$b!O!PCZ!P!Q$b!Q![Fk![!_$b!_!`%n!`!c$b!c!p@g!p!qFk!q!}@g!}#O&i#O#P$b#P#Q&i#Q#R$b#R#SFk#S#T$b#T#[@g#[#]#*{#]#b@g#b#cFk#c#o@g#o;'S$b;'S;=`'d<%lO$b",
  tokenizers: [0, 1, 2, 3],
  topRules: {"Program":[0,1]},
  tokenPrec: 0
});

const FalcoLanguageHighlight = HighlightStyle.define([
    { tag: tags.variableName, color: "#fc6" },
    { tag: tags.operator, color: "#f5d", fontStyle: "italic" }
]);
const FalcoLanguage = LRLanguage.define({
    parser: parser.configure({
        props: [
            styleTags({
                Identifier: tags.variableName,
                UnaryOperator: tags.operator,
                NumOperator: tags.operator,
                StrOperator: tags.operator,
                ListOperator: tags.operator
            })
        ]
    })
});
function Falco() {
    return new LanguageSupport(FalcoLanguage);
}

export { Falco, FalcoLanguage, FalcoLanguageHighlight };

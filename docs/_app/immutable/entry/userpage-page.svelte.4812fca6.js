import{S as $e,i as Ve,s as We,k as a,a as v,l as r,m as i,c as m,h as t,n as s,J as Ae,b as U,G as e,H as Le,o as je,q as b,r as S,u as Z,N as He}from"../chunks/index.2832069c.js";import{k as Ge}from"../chunks/stores.cb0d02c7.js";function Oe(P){let l,d,u=P[0].user+"",k,I;return{c(){l=a("title"),d=b("Welcome "),k=b(u),I=b("!")},l(f){l=r(f,"TITLE",{});var c=i(l);d=S(c,"Welcome "),k=S(c,u),I=S(c,"!"),c.forEach(t)},m(f,c){U(f,l,c),e(l,d),e(l,k),e(l,I)},p(f,c){c&1&&u!==(u=f[0].user+"")&&Z(k,u)},d(f){f&&t(l)}}}function Ue(P){let l,d,u,k,I,f,c,M,R,H,y,$,D,C,T,o,n,p,h=P[0].user+"",g,N,V,F,L,ce,oe,W,Y=(Math.round(P[0].data.budget*100)/100).toLocaleString("en-US",{style:"currency",currency:"USD"})+"",x,ie,ee,ne,j,he,ue,G,fe,de,te,pe,q,_e,ve,w,z=P[1]>=0?"":"-",se,me,Q=Math.abs(Math.round(P[1]*100)/100)+"",le,ge,J,K,X,Ee,O,be;return{c(){l=a("nav"),d=a("a"),u=a("span"),k=b(" Innovocks"),I=v(),f=a("div"),c=a("a"),M=b("Trade "),R=a("span"),H=v(),y=a("a"),$=b("Log out "),D=a("span"),C=v(),T=a("main"),o=a("section"),n=a("p"),p=b("Welcome "),g=b(h),N=v(),V=a("hr"),F=v(),L=a("p"),ce=b("Account Cash Amount"),oe=v(),W=a("p"),x=b(Y),ie=v(),ee=a("hr"),ne=v(),j=a("p"),he=b("Total Stock Value"),ue=v(),G=a("p"),fe=b("$0.00 (Placeholder)"),de=v(),te=a("hr"),pe=v(),q=a("p"),_e=b("Total Cash Profits"),ve=v(),w=a("p"),se=b(z),me=b("$"),le=b(Q),ge=v(),J=a("section"),K=a("figure"),X=a("div"),Ee=v(),O=a("a"),be=b("Trade now"),this.h()},l(E){l=r(E,"NAV",{});var A=i(l);d=r(A,"A",{href:!0,class:!0});var Se=i(d);u=r(Se,"SPAN",{class:!0}),i(u).forEach(t),k=S(Se," Innovocks"),Se.forEach(t),I=m(A),f=r(A,"DIV",{class:!0});var ae=i(f);c=r(ae,"A",{href:!0,class:!0});var Pe=i(c);M=S(Pe,"Trade "),R=r(Pe,"SPAN",{class:!0}),i(R).forEach(t),Pe.forEach(t),H=m(ae),y=r(ae,"A",{href:!0,class:!0});var ke=i(y);$=S(ke,"Log out "),D=r(ke,"SPAN",{class:!0}),i(D).forEach(t),ke.forEach(t),ae.forEach(t),A.forEach(t),C=m(E),T=r(E,"MAIN",{});var B=i(T);o=r(B,"SECTION",{class:!0});var _=i(o);n=r(_,"P",{class:!0});var ye=i(n);p=S(ye,"Welcome "),g=S(ye,h),ye.forEach(t),N=m(_),V=r(_,"HR",{class:!0}),F=m(_),L=r(_,"P",{class:!0});var Ie=i(L);ce=S(Ie,"Account Cash Amount"),Ie.forEach(t),oe=m(_),W=r(_,"P",{class:!0});var Te=i(W);x=S(Te,Y),Te.forEach(t),ie=m(_),ee=r(_,"HR",{class:!0}),ne=m(_),j=r(_,"P",{class:!0});var Ne=i(j);he=S(Ne,"Total Stock Value"),Ne.forEach(t),ue=m(_),G=r(_,"P",{class:!0});var Ce=i(G);fe=S(Ce,"$0.00 (Placeholder)"),Ce.forEach(t),de=m(_),te=r(_,"HR",{class:!0}),pe=m(_),q=r(_,"P",{class:!0});var Me=i(q);_e=S(Me,"Total Cash Profits"),Me.forEach(t),ve=m(_),w=r(_,"P",{class:!0});var re=i(w);se=S(re,z),me=S(re,"$"),le=S(re,Q),re.forEach(t),_.forEach(t),ge=m(B),J=r(B,"SECTION",{class:!0});var we=i(J);K=r(we,"FIGURE",{class:!0});var De=i(K);X=r(De,"DIV",{id:!0}),i(X).forEach(t),De.forEach(t),we.forEach(t),Ee=m(B),O=r(B,"A",{href:!0,class:!0});var Re=i(O);be=S(Re,"Trade now"),Re.forEach(t),B.forEach(t),this.h()},h(){s(u,"class","icon"),s(d,"href","/"),s(d,"class","logo select-hidden logo-font"),s(R,"class","underline"),s(c,"href","/trade"),s(c,"class","select-hidden"),s(D,"class","underline"),s(y,"href","/"),s(y,"class","select-hidden"),s(f,"class","links"),s(n,"class","select-light title"),s(V,"class","divider"),s(L,"class","select-light subtitle"),s(W,"class","select-light data moneyDisplay"),s(ee,"class","divider"),s(j,"class","select-light subtitle"),s(G,"class","select-light data"),s(te,"class","divider"),s(q,"class","select-light subtitle"),s(w,"class","select-light data profits positive"),He(w,"negative",P[1]<0),s(o,"class","welcome-section"),s(X,"id","container"),s(K,"class","highcharts-figure"),s(J,"class","history"),s(O,"href","/trade"),s(O,"class","select-hidden link-button")},m(E,A){U(E,l,A),e(l,d),e(d,u),e(d,k),e(l,I),e(l,f),e(f,c),e(c,M),e(c,R),e(f,H),e(f,y),e(y,$),e(y,D),U(E,C,A),U(E,T,A),e(T,o),e(o,n),e(n,p),e(n,g),e(o,N),e(o,V),e(o,F),e(o,L),e(L,ce),e(o,oe),e(o,W),e(W,x),e(o,ie),e(o,ee),e(o,ne),e(o,j),e(j,he),e(o,ue),e(o,G),e(G,fe),e(o,de),e(o,te),e(o,pe),e(o,q),e(q,_e),e(o,ve),e(o,w),e(w,se),e(w,me),e(w,le),e(T,ge),e(T,J),e(J,K),e(K,X),e(T,Ee),e(T,O),e(O,be)},p(E,A){A&1&&h!==(h=E[0].user+"")&&Z(g,h),A&1&&Y!==(Y=(Math.round(E[0].data.budget*100)/100).toLocaleString("en-US",{style:"currency",currency:"USD"})+"")&&Z(x,Y),A&2&&z!==(z=E[1]>=0?"":"-")&&Z(se,z),A&2&&Q!==(Q=Math.abs(Math.round(E[1]*100)/100)+"")&&Z(le,Q),A&2&&He(w,"negative",E[1]<0)},d(E){E&&t(l),E&&t(C),E&&t(T)}}}function qe(P){let l,d,u,k,I,f,c,M,R,H,y,$,D,C,T,o,n=P[0]!=null&&Oe(P),p=P[0]!=null&&Ue(P);return{c(){l=a("head"),n&&n.c(),d=v(),u=a("link"),k=v(),I=a("link"),f=v(),c=a("body"),M=a("script"),H=v(),y=a("script"),D=v(),C=a("script"),o=v(),p&&p.c(),this.h()},l(h){l=r(h,"HEAD",{});var g=i(l);n&&n.l(g),d=m(g),u=r(g,"LINK",{rel:!0,href:!0}),k=m(g),I=r(g,"LINK",{rel:!0,href:!0}),g.forEach(t),f=m(h),c=r(h,"BODY",{});var N=i(c);M=r(N,"SCRIPT",{src:!0});var V=i(M);V.forEach(t),H=m(N),y=r(N,"SCRIPT",{src:!0});var F=i(y);F.forEach(t),D=m(N),C=r(N,"SCRIPT",{src:!0});var L=i(C);L.forEach(t),o=m(N),p&&p.l(N),N.forEach(t),this.h()},h(){s(u,"rel","stylesheet"),s(u,"href","/styles/theme.css"),s(I,"rel","stylesheet"),s(I,"href","/styles/userpage.css"),Ae(M.src,R="https://code.highcharts.com/highcharts.js")||s(M,"src",R),Ae(y.src,$="https://code.highcharts.com/modules/series-label.js")||s(y,"src",$),Ae(C.src,T="https://code.highcharts.com/js/themes/dark-unica.js")||s(C,"src",T)},m(h,g){U(h,l,g),n&&n.m(l,null),e(l,d),e(l,u),e(l,k),e(l,I),U(h,f,g),U(h,c,g),e(c,M),e(c,H),e(c,y),e(c,D),e(c,C),e(c,o),p&&p.m(c,null)},p(h,[g]){h[0]!=null?n?n.p(h,g):(n=Oe(h),n.c(),n.m(l,d)):n&&(n.d(1),n=null),h[0]!=null?p?p.p(h,g):(p=Ue(h),p.c(),p.m(c,null)):p&&(p.d(1),p=null)},i:Le,o:Le,d(h){h&&t(l),n&&n.d(),h&&t(f),h&&t(c),p&&p.d()}}}function Je(){let P=[0,4,8,5,2,8,14];Highcharts.chart("container",{title:{text:"Price history ",align:"left"},subtitle:{text:"Showing price history of all owned stocks - WARNING: Only placeholder data",align:"left"},legend:{enabled:!1},yAxis:{title:{text:""}},xAxis:{labels:{enabled:!1}},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:0}},series:[{name:"Price",data:P}]})}function Ke(P,l,d){let u,k=0;return Math.floor(Math.random()*Ge.length),je(()=>{d(0,u=JSON.parse(sessionStorage.getItem("currentUser"))),u==null&&(window.location="/login"),d(1,k=u.data.budget-1e5),setTimeout(()=>{Je()},25)}),[u,k]}class Ye extends $e{constructor(l){super(),Ve(this,l,Ke,qe,We,{})}}export{Ye as default};

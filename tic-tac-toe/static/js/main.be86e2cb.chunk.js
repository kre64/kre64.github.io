(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(e,t,n){},34:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(27),r=n.n(c),s=n(6),i=n(11),o=n(10),l=n(8),u=(n(32),n(1)),d=function(e){var t=e.value,n=e.i,a=e.j,c=e.focused,r=e.handleCellClick,s=e.handleOnMouseEnter,i=e.handleOnMouseLeave,o=n===c[0]||a===c[1]?"cell active":"cell";return Object(u.jsx)("div",{className:o,onClick:function(){return r(n,a)},onMouseEnter:function(){return s(n,a)},onMouseLeave:function(){return i},children:t})},j=n(13),b=n(12),O=(n(34),{X:"You win!",O:"AI win.",Draw:"Draw.",null:null}),h=function(e){var t=e.loading,n=e.winner,a=e.handleOnReset;if(null==n)return Object(u.jsx)("div",{className:"turn-banner",children:t?Object(u.jsx)(j.a,{animation:"grow",size:"lg"}):Object(u.jsx)("h2",{children:"Your turn!"})});return Object(u.jsxs)("div",{className:"turn-banner",children:[Object(u.jsx)("h2",{children:O[n]}),Object(u.jsx)(b.a,{variant:"outline-dark",onClick:function(){a()},children:"Reset board"})]})},f={initBoard:function(){return[["","",""],["","",""],["","",""]]},checkGameState:function(e,t){if(t<2)return null;if(t>8)return"Draw";for(var n=[[e[0][0],e[0][1],e[0][2]],[e[1][0],e[1][1],e[1][2]],[e[2][0],e[2][1],e[2][2]],[e[0][0],e[1][0],e[2][0]],[e[0][1],e[1][1],e[2][1]],[e[0][2],e[1][2],e[2][2]],[e[0][0],e[1][1],e[2][2]],[e[0][2],e[1][1],e[2][0]]],a=0;a<n.length;a++){var c=Object(s.a)(n[a],3),r=c[0],i=c[1],o=c[2];if(r&&r===i&&i===o)return r}return null}},x=n(14),m=n.n(x),v=(n(53),function(e){var t=e.handleWinner,n=e.bearer,c=Object(a.useState)(f.initBoard()),r=Object(s.a)(c,2),i=r[0],o=r[1],l=Object(a.useState)([null,null]),j=Object(s.a)(l,2),b=j[0],O=j[1],x=Object(a.useState)(!0),v=Object(s.a)(x,2),p=v[0],S=v[1],g=Object(a.useState)(!0),w=Object(s.a)(g,2),k=w[0],N=w[1],y=Object(a.useState)(!1),C=Object(s.a)(y,2),E=C[0],z=C[1],I=Object(a.useState)(null),L=Object(s.a)(I,2),M=L[0],B=L[1],D=Object(a.useState)(0),F=Object(s.a)(D,2),T=F[0],A=F[1],G=Object(a.useRef)(!1);Object(a.useEffect)((function(){if(G.current){var e=f.checkGameState(i,T);if(e)return t(e),B(e),void S(!1);k?o(i):_()}else G.current=!0}),[k]);var R=function(e,t){""===i[e][t]&&k&&p&&(i[e][t]="X",A(T+1),N(!k))},_=function(){z(!0),m.a.post("https://d9u7x85vp9.execute-api.us-east-2.amazonaws.com/production/engine",{board:i},{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){if(!e.data.success)throw new Error;console.table(e.data.board),o(e.data.board),A(T+1),N(!k)})).catch((function(e){window.alert("An unexpected error occured, resetting game!"),X()})).finally((function(){z(!1)}))},X=function(){o(f.initBoard),A(0),N(!0),S(!0),B(null)},J=function(e,t){O([e,t])},P=function(){O([null,null])},U=i.map((function(e,t){return e.map((function(e,n){return Object(u.jsx)(d,{value:e,i:t,j:n,focused:b,handleCellClick:R,handleOnMouseEnter:J,handleOnMouseLeave:P},n)}))}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{loading:E,winner:M,handleOnReset:X}),Object(u.jsx)("div",{className:"board",children:U})]})}),p=(n(54),function(e){var t=e.player_score,n=e.ties,a=e.ai_score;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(o.a,{noGutters:!0,children:[Object(u.jsxs)(l.a,{xs:12,className:"scorebox",children:[Object(u.jsx)("div",{className:"scorebox-header",children:"AI"}),Object(u.jsx)("div",{className:"scorebox-body",children:a})]}),Object(u.jsxs)(l.a,{xs:12,className:"scorebox",children:[Object(u.jsx)("div",{className:"scorebox-header",children:"Ties"}),Object(u.jsx)("div",{className:"scorebox-body",children:n})]}),Object(u.jsxs)(l.a,{xs:12,className:"scorebox",children:[Object(u.jsx)("div",{className:"scorebox-header",children:"Player"}),Object(u.jsx)("div",{className:"scorebox-body",children:t})]})]})})}),S=function(e){var t=e.bearer,n=Object(a.useState)(0),c=Object(s.a)(n,2),r=c[0],d=c[1],j=Object(a.useState)(0),b=Object(s.a)(j,2),O=b[0],h=b[1],f=Object(a.useState)(0),x=Object(s.a)(f,2),m=x[0],S=x[1];return Object(u.jsx)(i.a,{fluid:!0,children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(l.a,{xs:12,md:8,children:Object(u.jsx)(v,{handleWinner:function(e){switch(e){case"X":d(r+1);break;case"O":h(O+1);break;case"Draw":S(m+1)}},bearer:t})}),Object(u.jsx)(l.a,{xs:4,children:Object(u.jsx)(p,{player_score:r,ties:m,ai_score:O})})]})})},g=n(9),w=function(e){var t=e.handleSignUp,n=Object(a.useState)(!1),c=Object(s.a)(n,2),r=c[0],o=c[1],l=Object(a.useState)(!1),d=Object(s.a)(l,2),O=d[0],h=d[1],f=Object(a.useState)(!1),x=Object(s.a)(f,2),v=x[0],p=x[1],S=Object(a.useState)(""),w=Object(s.a)(S,2),k=w[0],N=w[1],y=function(e){return e.loading?Object(u.jsx)(b.a,{variant:"primary",size:"lg",disabled:!0,block:!0,children:Object(u.jsx)(j.a,{as:"span",animation:"border",size:"lg",role:"status","aria-hidden":"true"})}):Object(u.jsx)(b.a,{type:"submit",size:"lg",block:!0,children:"Submit form"})};return Object(u.jsx)(i.a,{fluid:!0,children:Object(u.jsxs)(g.a,{className:"ttt-form",noValidate:!0,validated:r,onSubmit:function(e){e.preventDefault(),h(!0),m.a.post("https://d9u7x85vp9.execute-api.us-east-2.amazonaws.com/production/auth",{email:k}).then((function(e){p(!1),o(!0),t(e.data.token)})).catch((function(e){console.error(e),p(!0),o(!1),h(!1)}))},children:[Object(u.jsxs)(g.a.Group,{controlId:"validationForEmail",children:[Object(u.jsx)(g.a.Label,{children:"Email address"}),Object(u.jsx)(g.a.Control,{type:"text",placeholder:"name@example.com",value:k,onChange:function(e){N(e.target.value)},isInvalid:v,size:"lg"}),Object(u.jsx)(g.a.Control.Feedback,{type:"invalid",children:"Please provide a valid email!"}),Object(u.jsx)(g.a.Control.Feedback,{type:"valid",children:"Looks good!"})]}),Object(u.jsx)(y,{loading:O})]})})},k="TTTbearerToken",N={loadSession:function(){return sessionStorage.getItem(k)},storeSession:function(e){sessionStorage.setItem(k,e)},clearSession:function(){sessionStorage.clear(k)}},y=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){c(N.loadSession()),window.addEventListener("storage",(function(){c(N.loadSession)}))}),[]);return null!==n?Object(u.jsx)(S,{bearer:n}):Object(u.jsx)(w,{handleSignUp:function(e){c(e),N.storeSession(e)}})};n(58),n(59);r.a.render(Object(u.jsx)(y,{}),document.getElementById("root"))}},[[60,1,2]]]);
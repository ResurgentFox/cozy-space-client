(this["webpackJsonpcozy-space-client"]=this["webpackJsonpcozy-space-client"]||[]).push([[0],{24:function(n,e,t){},31:function(n,e,t){"use strict";t.r(e);var i,a,r,c,o,s,d=t(1),u=t.n(d),p=t(13),x=t.n(p),l=(t(24),t(19)),b=t(6),f=t.n(b),j=t(9),h=t(4),g=t(2),m=t(3),O=t.p+"static/media/asteroid.7252a113.svg",v=t(0),w=m.a.div(i||(i=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  font-family: 'Tourney', cursive;\n  font-weight: 900;\n"]))),y=m.a.div(a||(a=Object(g.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  padding: 0 25px;\n"]))),k=m.a.div(r||(r=Object(g.a)(["\n  color: #746087;\n  font-size: 12px;\n"]))),S=m.a.time(c||(c=Object(g.a)(["\n  font-size: 12px;\n  color: #6c6c6c;\n"]))),z=m.a.div(o||(o=Object(g.a)(["\n  max-width: 400px;\n  min-height: 50px;\n  padding: 15px;\n  border-radius: 30px;\n  background-color: #7984e8;\n  font-size: 14px;\n  word-wrap: break-word;\n"])));function P(n){var e=new Date(n.timestamp).toLocaleString(navigator.language,{hour:"2-digit",minute:"2-digit"});return Object(v.jsxs)(w,{children:[Object(v.jsxs)(y,{children:[Object(v.jsx)(k,{children:n.name}),Object(v.jsx)(S,{children:e})]}),Object(v.jsx)(z,{children:n.text})]})}var N=m.a.div(s||(s=Object(g.a)(["\n  max-width: 400px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  & > *:not(:first-child) {\n    margin-top: 20px;\n  }\n"])));function T(n){return Object(v.jsx)(N,{children:n.posts.map((function(n){return Object(v.jsx)(P,{name:n.name,timestamp:n.timestamp,text:n.text},n._id)}))})}var C,E,J,_,B,D=t(17),A=t(18),I="api-cozy-space.herokuapp.com",K=function(){function n(){var e=this;Object(D.a)(this,n),this.ws=void 0,this.handleNewPost=void 0,this.ws=new WebSocket("wss://".concat(I)),this.ws.onmessage=function(n){var t;null===(t=e.handleNewPost)||void 0===t||t.call(e,JSON.parse(n.data))}}return Object(A.a)(n,[{key:"onNewPost",value:function(n){this.handleNewPost=n}},{key:"getPosts",value:function(){return fetch("https://".concat(I,"/get_posts"))}},{key:"sendPost",value:function(n){return fetch("https://".concat(I,"/send_post?name=").concat(n.name,"&text=").concat(n.text))}}]),n}(),L=m.a.div(C||(C=Object(g.a)(["\n  top: 0;\n  position: sticky;\n  margin: 0 auto;\n  margin-bottom: 5%;\n  padding-top: 5%;\n  @media (max-width: 320px) {\n    padding-top: 5px;\n  }\n\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n"]))),M=m.a.input(E||(E=Object(g.a)(["\n  padding: 10px;\n  background-color: #746087;\n  border: 1px solid #1e1d1f;\n  border-radius: 10px;\n  outline: none;\n  font-family: 'Tourney', cursive;\n  font-weight: 800;\n"]))),W=m.a.textarea(J||(J=Object(g.a)(["\n  min-height: 100px;\n  padding: 10px;\n  border-radius: 15px;\n  outline: none;\n  border: 1px solid #1e1d1f;\n  background-color: #746087;\n  font-family: 'Tourney', cursive;\n  font-weight: 800;\n"]))),Y=m.a.button(_||(_=Object(g.a)(["\n  margin-top: 7%;\n  max-width: 120px;\n  max-height: 40px;\n  outline: none;\n  border-radius: 30px;\n  background: linear-gradient(45deg, #66538f 30%, #7984e8 60%, #2d3159);\n  border: transparent;\n  color: #000;\n  font-size: 28px;\n  font-family: 'Bungee Shade', cursive;\n  font-weight: 900;\n  cursor: pointer;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition-duration: 0.5s;\n  top: 0;\n  position: relative;\n  &:hover {\n    top: 5px;\n    border: 2px solid #2efef7;\n    background: linear-gradient(45deg, #41265c 33%, #2efef7 66%, #5f04b4);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n"]))),q=m.a.label(B||(B=Object(g.a)(["\n  margin-top: 25px;\n  margin-bottom: 8px;\n  color: #746087;\n  font-size: 20px;\n  font-family: 'Tourney', cursive;\n"])));function F(n){var e=d.useState(""),t=Object(h.a)(e,2),i=t[0],a=t[1],r=d.useState(""),c=Object(h.a)(r,2),o=c[0],s=c[1],u=function(){var e={name:i,text:o};n.onSend(e),s("")};return Object(v.jsxs)(L,{children:[Object(v.jsx)(q,{children:"Your name"}),Object(v.jsx)(M,{value:i,onChange:function(n){return a(n.target.value)}}),Object(v.jsx)(q,{children:"Share what`s in your mind"}),Object(v.jsx)(W,{value:o,onKeyPress:function(n){"Enter"===n.key&&(u(),n.preventDefault())},onChange:function(n){return s(n.target.value)}}),Object(v.jsx)(Y,{onClick:u,children:"go!"})]})}var G,H,Q,R,U=function(){return Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:".5rem"},children:Object(v.jsx)("div",{className:"loadingio-spinner-bean-eater-hwm2danfbfh",children:Object(v.jsxs)("div",{className:"ldio-fgtgkv4yzh6",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{})]})]})})})},V=m.a.section(G||(G=Object(g.a)(["\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 0 20px 15px;\n"]))),X=m.a.section(H||(H=Object(g.a)(["\n  height: 100vh;\n"]))),Z=m.a.h1(Q||(Q=Object(g.a)(["\n  font-size: 56px;\n  line-height: 80px;\n  text-align: center;\n  font-family: 'Tourney', cursive;\n  font-weight: 600;\n  background: linear-gradient(45deg, #41265c 33%, #2efef7 66%, #5f04b4);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  @media (max-width: 320px) {\n    margin-top: 5px;\n    margin-bottom: 0;\n  }\n"]))),$=m.a.img(R||(R=Object(g.a)(["\n  width: 60px;\n  height: 60px;\n  max-width: 100%;\n"]))),nn=new K;function en(){var n=u.a.useState([]),e=Object(h.a)(n,2),t=e[0],i=e[1],a=u.a.useState(!1),r=Object(h.a)(a,2),c=r[0],o=r[1],s=function(){var n=Object(j.a)(f.a.mark((function n(e){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,nn.sendPost(e);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=Object(j.a)(f.a.mark((function n(){var e;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(!0),n.next=3,nn.getPosts();case 3:return e=n.sent,n.next=6,tn(3e3);case 6:return n.t0=i,n.next=9,e.json();case 9:n.t1=n.sent,(0,n.t0)(n.t1),o(!1);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return u.a.useEffect((function(){d()}),[]),u.a.useEffect((function(){nn.onNewPost((function(n){var e=[n].concat(Object(l.a)(t));i(e)}))}),[t]),Object(v.jsxs)(V,{children:[Object(v.jsxs)(X,{children:[Object(v.jsxs)(Z,{children:["Cozy Space ",Object(v.jsx)($,{src:O,alt:"Asteroid"})]}),c?Object(v.jsx)(U,{}):Object(v.jsx)(F,{onSend:s})]}),Object(v.jsx)(T,{posts:t})]})}function tn(n){return new Promise((function(e){return setTimeout(e,n)}))}x.a.render(Object(v.jsx)(u.a.StrictMode,{children:Object(v.jsx)(en,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.fe99f4c9.chunk.js.map
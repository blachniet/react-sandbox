(this["webpackJsonpreact-sandbox"]=this["webpackJsonpreact-sandbox"]||[]).push([[0],{100:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),s=r(33),a=r.n(s),c=(r(88),r(20)),u=r(12),i=(r(89),r(150)),d=r(147),l=r(144),j=r(143),b=r(151),h=r(149),O=r(28),p=r(145),x=r(148),m=r(152),f=r(44),g=r(71),v=r.n(g),k=r(2);var w=function(){var e=Object(O.b)(),t=e.control,r=e.handleSubmit,o=e.reset,s=Object(O.c)({control:t}),a=s.isDirty,g=s.isSubmitted,w=s.errors,F=Object(n.useState)(),M=Object(u.a)(F,2),q=M[0],y=M[1],H=Object(n.useState)(),T=Object(u.a)(H,2),I=T[0],S=T[1];return Object(k.jsxs)(d.a,{fixed:!0,children:[Object(k.jsxs)(x.a,{component:"h1",variant:"h4",children:[Object(k.jsx)(v.a,{}),"\xa0Watchin' the Clock"]}),Object(k.jsxs)("form",{onSubmit:r((function(e){var t=f.Duration.fromObject({hours:parseFloat(e.targetHours),minutes:parseFloat(e.targetMinutes)}),r=f.Duration.fromObject({hours:parseFloat(e.workedHours),minutes:parseFloat(e.workedMinutes)}),n=f.Duration.fromObject({hours:parseFloat(e.breakHours),minutes:parseFloat(e.breakMinutes)}),s=t.minus(r);y(s),S(f.DateTime.now().plus(s).plus(n)),o(void 0,{keepValues:!0,keepIsSubmitted:!0})})),children:[Object(k.jsx)(p.a,{children:"Target"}),Object(k.jsx)(O.a,{name:"targetHours",defaultValue:"8",rules:{required:"Required"},render:function(e){var t,r=e.field;return Object(k.jsx)(j.a,Object(c.a)(Object(c.a)({},r),{},{type:"number",error:!!w.targetHours,helperText:null===(t=w.targetHours)||void 0===t?void 0:t.message,onFocus:function(e){return e.target.select()},sx:{width:"10ch"},InputProps:{endAdornment:Object(k.jsx)(h.a,{position:"end",children:"h"})}}))},control:t}),Object(k.jsx)(O.a,{name:"targetMinutes",defaultValue:"0",rules:{required:"Required"},render:function(e){var t,r=e.field;return Object(k.jsx)(j.a,Object(c.a)(Object(c.a)({},r),{},{type:"number",error:!!w.targetMinutes,helperText:null===(t=w.targetMinutes)||void 0===t?void 0:t.message,onFocus:function(e){return e.target.select()},sx:{width:"10ch"},InputProps:{endAdornment:Object(k.jsx)(h.a,{position:"end",children:"m"})}}))},control:t}),Object(k.jsx)(p.a,{children:"Worked"}),Object(k.jsx)(O.a,{name:"workedHours",defaultValue:"0",rules:{required:"Required"},render:function(e){var t,r=e.field;return Object(k.jsx)(j.a,Object(c.a)(Object(c.a)({},r),{},{autoFocus:!0,type:"number",error:!!w.workedHours,helperText:null===(t=w.workedHours)||void 0===t?void 0:t.message,onFocus:function(e){return e.target.select()},sx:{width:"10ch"},InputProps:{endAdornment:Object(k.jsx)(h.a,{position:"end",children:"h"})}}))},control:t}),Object(k.jsx)(O.a,{name:"workedMinutes",defaultValue:"0",rules:{required:"Required"},render:function(e){var t,r=e.field;return Object(k.jsx)(j.a,Object(c.a)(Object(c.a)({},r),{},{type:"number",error:!!w.workedMinutes,helperText:null===(t=w.workedMinutes)||void 0===t?void 0:t.message,onFocus:function(e){return e.target.select()},sx:{width:"10ch"},InputProps:{endAdornment:Object(k.jsx)(h.a,{position:"end",children:"m"})}}))},control:t}),Object(k.jsx)(p.a,{children:"Breaks left"}),Object(k.jsx)(O.a,{name:"breakHours",defaultValue:"0",rules:{required:"Required"},render:function(e){var t,r=e.field;return Object(k.jsx)(j.a,Object(c.a)(Object(c.a)({},r),{},{type:"number",error:!!w.breakHours,helperText:null===(t=w.breakHours)||void 0===t?void 0:t.message,onFocus:function(e){return e.target.select()},sx:{width:"10ch"},InputProps:{endAdornment:Object(k.jsx)(h.a,{position:"end",children:"h"})}}))},control:t}),Object(k.jsx)(O.a,{name:"breakMinutes",defaultValue:"0",rules:{required:"Required"},render:function(e){var t,r=e.field;return Object(k.jsx)(j.a,Object(c.a)(Object(c.a)({},r),{},{type:"number",error:!!w.breakMinutes,helperText:null===(t=w.breakMinutes)||void 0===t?void 0:t.message,onFocus:function(e){return e.target.select()},sx:{width:"10ch"},InputProps:{endAdornment:Object(k.jsx)(h.a,{position:"end",children:"m"})}}))},control:t}),Object(k.jsx)(i.a,{py:1,children:Object(k.jsx)(l.a,{variant:"contained",type:"submit",children:"Calculate"})})]}),!a&&g?Object(k.jsxs)(x.a,{children:["You have ",Object(k.jsx)("strong",{children:null===q||void 0===q?void 0:q.toFormat("h'h'm'm'")})," left to work. You will be done at ",Object(k.jsx)("strong",{children:null===I||void 0===I?void 0:I.toLocaleString(f.DateTime.TIME_SIMPLE)}),"."]}):"",Object(k.jsx)(i.a,{py:2,children:Object(k.jsx)(b.a,{})}),Object(k.jsxs)(x.a,{align:"center",children:["Coypright \xa9 ",Object(k.jsx)(m.a,{href:"https://blachniet.com",children:"Brian Lachniet"})," 2021"]})]})},F=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,153)).then((function(t){var r=t.getCLS,n=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),n(e),o(e),s(e),a(e)}))};a.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(w,{})}),document.getElementById("root")),F()},88:function(e,t,r){},89:function(e,t,r){}},[[100,1,2]]]);
//# sourceMappingURL=main.7e28cd2a.chunk.js.map
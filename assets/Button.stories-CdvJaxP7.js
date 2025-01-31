import{d as k,b as f,t as B,n as C,o as v}from"./vue.esm-bundler-BE74Ma3r.js";const b=k({__name:"Button",props:{label:{},primary:{type:Boolean}},setup(t){return(e,s)=>(v(),f("button",{type:"button",class:C({primary:e.primary})},B(e.label),3))}}),P=(t,e)=>{const s=t.__vccOpts||t;for(const[g,_]of e)s[g]=_;return s},U=P(b,[["__scopeId","data-v-e353d3a1"]]);b.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"primary",required:!1,type:{name:"boolean"}}],sourceFiles:["C:/Users/dashu/Project/vue-storybook/src/components/Button/Button.vue"]};const S={title:"Components/Button",component:U,tags:["autodocs"],argTypes:{label:{control:"text"},primary:{control:"boolean"},onClick:{action:"clicked"}}},r={args:{label:"Click Me"}},a={args:{label:"Primary Button",primary:!0}},o={args:{label:"Unko"}};var n,c,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Click Me"
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Primary Button",
    primary: true
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var i,d,y;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Unko"
  }
}`,...(y=(d=o.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const D=["Default","Primary","Unko"];export{r as Default,a as Primary,o as Unko,D as __namedExportsOrder,S as default};

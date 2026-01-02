import{j as m}from"./jsx-runtime-BPAEHIfW.js";import{r as p}from"./iframe-DgmDDvRY.js";import{c as g}from"./cn-2dOUpm6k.js";import"./preload-helper-PPVm8Dsz.js";const f={default:"bg-gray-100 text-gray-800",success:"bg-green-100 text-green-800",warning:"bg-yellow-100 text-yellow-800",error:"bg-red-100 text-red-800",info:"bg-blue-100 text-blue-800"},y={sm:"px-2 py-0.5 text-xs",md:"px-2.5 py-1 text-sm"},i=p.forwardRef(({className:a,variant:e="default",size:l="md",...d},u)=>m.jsx("span",{ref:u,className:g("inline-flex items-center font-medium rounded-full",f[e],y[l],a),...d}));i.displayName="Badge";i.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"md"',computed:!1}}}};const{expect:n}=__STORYBOOK_MODULE_TEST__,T={title:"Components/Badge",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","error","info"]},size:{control:"select",options:["sm","md"]}}},r={args:{children:"Default",variant:"default"},play:async({canvas:a})=>{const e=a.getByText("Default");await n(e).toBeInTheDocument()}},t={args:{children:"Success",variant:"success"},play:async({canvas:a})=>{const e=a.getByText("Success");await n(e).toBeInTheDocument(),await n(e).toHaveClass("bg-green-100")}},s={args:{children:"Warning",variant:"warning"}},o={args:{children:"Error",variant:"error"},play:async({canvas:a})=>{const e=a.getByText("Error");await n(e).toBeInTheDocument(),await n(e).toHaveClass("bg-red-100")}},c={args:{children:"Info",variant:"info"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    variant: 'default'
  },
  play: async ({
    canvas
  }: {
    canvas: ReturnType<typeof within>;
  }) => {
    const badge = canvas.getByText('Default');
    await expect(badge).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Success',
    variant: 'success'
  },
  play: async ({
    canvas
  }: {
    canvas: ReturnType<typeof within>;
  }) => {
    const badge = canvas.getByText('Success');
    await expect(badge).toBeInTheDocument();
    await expect(badge).toHaveClass('bg-green-100');
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Warning',
    variant: 'warning'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Error',
    variant: 'error'
  },
  play: async ({
    canvas
  }: {
    canvas: ReturnType<typeof within>;
  }) => {
    const badge = canvas.getByText('Error');
    await expect(badge).toBeInTheDocument();
    await expect(badge).toHaveClass('bg-red-100');
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Info',
    variant: 'info'
  }
}`,...c.parameters?.docs?.source}}};const h=["Default","Success","Warning","Error","Info"];export{r as Default,o as Error,c as Info,t as Success,s as Warning,h as __namedExportsOrder,T as default};

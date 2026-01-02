import{B as i}from"./Badge-BQxq8RGZ.js";import"./jsx-runtime-CU2tKxnD.js";import"./iframe-B2XCKgBt.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-2dOUpm6k.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,m={title:"Components/Badge",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","error","info"]},size:{control:"select",options:["sm","md"]}}},r={args:{children:"Default",variant:"default"},play:async({canvas:a})=>{const e=a.getByText("Default");await n(e).toBeInTheDocument()}},t={args:{children:"Success",variant:"success"},play:async({canvas:a})=>{const e=a.getByText("Success");await n(e).toBeInTheDocument(),await n(e).toHaveClass("bg-green-100")}},s={args:{children:"Warning",variant:"warning"}},o={args:{children:"Error",variant:"error"},play:async({canvas:a})=>{const e=a.getByText("Error");await n(e).toBeInTheDocument(),await n(e).toHaveClass("bg-red-100")}},c={args:{children:"Info",variant:"info"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const y=["Default","Success","Warning","Error","Info"];export{r as Default,o as Error,c as Info,t as Success,s as Warning,y as __namedExportsOrder,m as default};

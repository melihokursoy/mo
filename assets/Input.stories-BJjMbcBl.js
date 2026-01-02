import{j as s}from"./jsx-runtime-4at-Sylm.js";import{r as y}from"./iframe-DlCSlj7Q.js";import{c as w}from"./cn-2dOUpm6k.js";import{b as r,r as v}from"./borders-DZ2aVSvH.js";import"./preload-helper-PPVm8Dsz.js";const d=y.forwardRef(({className:a,label:e,error:t,helperText:u,id:g,...h},b)=>{const m=g||y.useId();return s.jsxs("div",{className:"w-full",children:[e&&s.jsx("label",{htmlFor:m,className:"block text-sm font-medium text-gray-700 mb-1",children:e}),s.jsx("input",{id:m,ref:b,className:w("block w-full px-4 py-2 text-gray-900 placeholder:text-gray-400 transition-colors",v.default,r.base,t?"border-red-500 focus:border-red-500 focus:ring-red-500":`${r.color} ${r.focus} ${r.ring}`,a),...h}),t&&s.jsx("p",{className:"mt-1 text-sm text-red-600",children:t}),u&&!t&&s.jsx("p",{className:"mt-1 text-sm text-gray-500",children:u})]})});d.displayName="Input";d.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""}}};const{expect:n,userEvent:x,fn:f}=__STORYBOOK_MODULE_TEST__,I={title:"Components/Input",component:d,tags:["autodocs"],args:{onChange:f()},argTypes:{type:{control:"select",options:["text","email","password","number"]}}},o={args:{placeholder:"Enter text..."},play:async({canvas:a,args:e})=>{const t=a.getByPlaceholderText("Enter text...");await n(t).toBeInTheDocument(),await x.type(t,"Hello World"),await n(t).toHaveValue("Hello World"),e?.onChange&&typeof e.onChange=="function"&&await n(e.onChange).toHaveBeenCalled()}},l={args:{label:"Email",placeholder:"you@example.com",type:"email"},play:async({canvas:a})=>{const e=a.getByLabelText("Email");await n(e).toBeInTheDocument(),await n(e).toHaveAttribute("type","email"),await x.type(e,"test@example.com"),await n(e).toHaveValue("test@example.com")}},i={args:{label:"Password",type:"password",helperText:"Must be at least 8 characters"}},c={args:{label:"Email",type:"email",error:"Please enter a valid email",defaultValue:"invalid"},play:async({canvas:a})=>{const e=a.getByText("Please enter a valid email");await n(e).toBeInTheDocument();const t=a.getByLabelText("Email");await n(t).toHaveValue("invalid")}},p={args:{label:"Disabled",disabled:!0,placeholder:"Cannot edit"},play:async({canvas:a})=>{const e=a.getByLabelText("Disabled");await n(e).toBeDisabled()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  },
  play: async ({
    canvas,
    args
  }: {
    canvas: ReturnType<typeof within>;
    args?: Partial<InputProps>;
  }) => {
    const input = canvas.getByPlaceholderText('Enter text...');
    await expect(input).toBeInTheDocument();
    await userEvent.type(input, 'Hello World');
    await expect(input).toHaveValue('Hello World');
    if (args?.onChange && typeof args.onChange === 'function') {
      await expect(args.onChange as (...args: unknown[]) => unknown).toHaveBeenCalled();
    }
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email'
  },
  play: async ({
    canvas
  }: {
    canvas: ReturnType<typeof within>;
  }) => {
    const input = canvas.getByLabelText('Email');
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAttribute('type', 'email');
    await userEvent.type(input, 'test@example.com');
    await expect(input).toHaveValue('test@example.com');
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Must be at least 8 characters'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    error: 'Please enter a valid email',
    defaultValue: 'invalid'
  },
  play: async ({
    canvas
  }: {
    canvas: ReturnType<typeof within>;
  }) => {
    const errorMessage = canvas.getByText('Please enter a valid email');
    await expect(errorMessage).toBeInTheDocument();
    const input = canvas.getByLabelText('Email');
    await expect(input).toHaveValue('invalid');
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true,
    placeholder: 'Cannot edit'
  },
  play: async ({
    canvas
  }: {
    canvas: ReturnType<typeof within>;
  }) => {
    const input = canvas.getByLabelText('Disabled');
    await expect(input).toBeDisabled();
  }
}`,...p.parameters?.docs?.source}}};const C=["Default","WithLabel","WithHelperText","WithError","Disabled"];export{o as Default,p as Disabled,c as WithError,i as WithHelperText,l as WithLabel,C as __namedExportsOrder,I as default};

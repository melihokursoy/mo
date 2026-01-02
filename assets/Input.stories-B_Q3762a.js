import{j as r}from"./jsx-runtime-BV_mIS9u.js";import{r as m}from"./iframe-D13Mxg5g.js";import{c as b}from"./cn-2dOUpm6k.js";import"./preload-helper-PPVm8Dsz.js";const p=m.forwardRef(({className:a,label:e,error:t,helperText:u,id:g,...x},h)=>{const d=g||m.useId();return r.jsxs("div",{className:"w-full",children:[e&&r.jsx("label",{htmlFor:d,className:"block text-sm font-medium text-gray-700 mb-1",children:e}),r.jsx("input",{id:d,ref:h,className:b("block w-full rounded-lg border px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors",t?"border-red-500 focus:border-red-500 focus:ring-red-500":"border-gray-300 focus:border-primary-500 focus:ring-primary-500",a),...x}),t&&r.jsx("p",{className:"mt-1 text-sm text-red-600",children:t}),u&&!t&&r.jsx("p",{className:"mt-1 text-sm text-gray-500",children:u})]})});p.displayName="Input";p.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""}}};const{expect:n,userEvent:y,fn:f}=__STORYBOOK_MODULE_TEST__,B={title:"Components/Input",component:p,tags:["autodocs"],args:{onChange:f()},argTypes:{type:{control:"select",options:["text","email","password","number"]}}},s={args:{placeholder:"Enter text..."},play:async({canvas:a,args:e})=>{const t=a.getByPlaceholderText("Enter text...");await n(t).toBeInTheDocument(),await y.type(t,"Hello World"),await n(t).toHaveValue("Hello World"),e?.onChange&&typeof e.onChange=="function"&&await n(e.onChange).toHaveBeenCalled()}},o={args:{label:"Email",placeholder:"you@example.com",type:"email"},play:async({canvas:a})=>{const e=a.getByLabelText("Email");await n(e).toBeInTheDocument(),await n(e).toHaveAttribute("type","email"),await y.type(e,"test@example.com"),await n(e).toHaveValue("test@example.com")}},l={args:{label:"Password",type:"password",helperText:"Must be at least 8 characters"}},i={args:{label:"Email",type:"email",error:"Please enter a valid email",defaultValue:"invalid"},play:async({canvas:a})=>{const e=a.getByText("Please enter a valid email");await n(e).toBeInTheDocument();const t=a.getByLabelText("Email");await n(t).toHaveValue("invalid")}},c={args:{label:"Disabled",disabled:!0,placeholder:"Cannot edit"},play:async({canvas:a})=>{const e=a.getByLabelText("Disabled");await n(e).toBeDisabled()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Must be at least 8 characters'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const D=["Default","WithLabel","WithHelperText","WithError","Disabled"];export{s as Default,c as Disabled,i as WithError,l as WithHelperText,o as WithLabel,D as __namedExportsOrder,B as default};

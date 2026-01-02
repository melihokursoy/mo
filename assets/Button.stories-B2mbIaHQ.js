import{j as t}from"./jsx-runtime-BV_mIS9u.js";import{r as m}from"./iframe-D13Mxg5g.js";import{c as C}from"./cn-2dOUpm6k.js";import{H as I}from"./Heart.esm-WTXxSuTe.js";import"./preload-helper-PPVm8Dsz.js";const P={primary:"bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",secondary:"bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500",outline:"border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500",ghost:"text-gray-700 hover:bg-gray-100 focus:ring-gray-500"},R={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"},p=m.forwardRef(({className:r,variant:n="primary",size:a="md",isLoading:d=!1,disabled:h,children:v,icon:e,iconPosition:y="left",...x},w)=>{const b={sm:16,md:20,lg:24},B={sm:"regular",md:"regular",lg:"bold"},g=()=>{if(!e)return null;if(m.isValidElement(e)){const k=(e.props&&e.props.size)??void 0,S=(e.props&&e.props.weight)??void 0,f=a,T={size:k??b[f],weight:S??B[f]};try{return m.cloneElement(e,T)}catch{return e}}return e};return t.jsxs("button",{ref:w,className:C("inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",P[n],R[a],r),disabled:h||d,...x,children:[d&&t.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[t.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),t.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),e&&y==="left"&&t.jsx("span",{className:"mr-2 inline-flex items-center",children:g()}),t.jsx("span",{className:"inline-flex items-center",children:v}),e&&y==="right"&&t.jsx("span",{className:"ml-2 inline-flex items-center",children:g()})]})});p.displayName="Button";p.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "outline" | "ghost"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element to render inside the button"},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"Position for the icon when `icon` is provided",defaultValue:{value:"'left'",computed:!1}}}};const{expect:u,userEvent:j,fn:N}=__STORYBOOK_MODULE_TEST__,H={title:"Components/Button",component:p,tags:["autodocs"],args:{onClick:N()},argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost"]},size:{control:"select",options:["sm","md","lg"]}}},o={args:{children:"Primary Button",variant:"primary"},play:async({canvas:r,args:n})=>{const a=r.getByRole("button",{name:"Primary Button"});await u(a).toBeInTheDocument(),await j.click(a),n?.onClick&&typeof n.onClick=="function"&&await u(n.onClick).toHaveBeenCalled()}},s={args:{children:"Secondary Button",variant:"secondary"}},i={args:{children:"Outline Button",variant:"outline"}},c={args:{children:"Ghost Button",variant:"ghost"}},l={args:{children:"With Icon",variant:"primary",icon:t.jsx(I,{size:16}),iconPosition:"left"},play:async({canvas:r})=>{const n=r.getByRole("button",{name:"With Icon"});await u(n).toBeInTheDocument()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary'
  },
  play: async ({
    canvas,
    args
  }: {
    canvas: ReturnType<typeof within>;
    args?: Partial<ButtonProps>;
  }) => {
    const button = canvas.getByRole('button', {
      name: 'Primary Button'
    });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    if (args?.onClick && typeof args.onClick === 'function') {
      await expect(args.onClick as (...args: unknown[]) => unknown).toHaveBeenCalled();
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outline Button',
    variant: 'outline'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost Button',
    variant: 'ghost'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'With Icon',
    variant: 'primary',
    icon: <Heart size={16} />,
    iconPosition: 'left'
  },
  play: async ({
    canvas
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'With Icon'
    });
    await expect(btn).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};const V=["Primary","Secondary","Outline","Ghost","WithIcon"];export{c as Ghost,i as Outline,o as Primary,s as Secondary,l as WithIcon,V as __namedExportsOrder,H as default};

import{j as r}from"./jsx-runtime-C_AO3mhU.js";import{r as C}from"./iframe-Choes1VT.js";import{c as m}from"./cn-2dOUpm6k.js";import{r as x}from"./borders-DZ2aVSvH.js";import"./preload-helper-PPVm8Dsz.js";const f={default:"bg-white",bordered:"bg-white border border-gray-200",elevated:"bg-white shadow-lg"},d=C.forwardRef(({className:e,variant:a="bordered",children:t,...h},u)=>r.jsx("div",{ref:u,className:m(x.default,"p-6",f[a],e),...h,children:t}));d.displayName="Card";const n=C.forwardRef(({className:e,...a},t)=>r.jsx("div",{ref:t,className:m("flex flex-col space-y-1.5 pb-4",e),...a}));n.displayName="CardHeader";const s=C.forwardRef(({className:e,...a},t)=>r.jsx("h3",{ref:t,className:m("text-xl font-semibold text-gray-900",e),...a}));s.displayName="CardTitle";const o=C.forwardRef(({className:e,...a},t)=>r.jsx("div",{ref:t,className:m("text-gray-600",e),...a}));o.displayName="CardContent";d.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "bordered" | "elevated"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"bordered"'},{name:"literal",value:'"elevated"'}]},description:"",defaultValue:{value:'"bordered"',computed:!1}}}};n.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};s.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};o.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const{expect:p}=__STORYBOOK_MODULE_TEST__,j={title:"Components/Card",component:d,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","bordered","elevated"]}}},i={render:e=>r.jsxs(d,{...e,children:[r.jsx(n,{children:r.jsx(s,{children:"Card Title"})}),r.jsx(o,{children:"This is the card content."})]}),args:{variant:"default"},play:async({canvas:e})=>{await p(e.getByText("Card Title")).toBeInTheDocument(),await p(e.getByText("This is the card content.")).toBeInTheDocument()}},l={render:e=>r.jsxs(d,{...e,children:[r.jsx(n,{children:r.jsx(s,{children:"Bordered Card"})}),r.jsx(o,{children:"Card with a border."})]}),args:{variant:"bordered"}},c={render:e=>r.jsxs(d,{...e,children:[r.jsx(n,{children:r.jsx(s,{children:"Elevated Card"})}),r.jsx(o,{children:"Card with shadow."})]}),args:{variant:"elevated"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>This is the card content.</CardContent>
    </Card>,
  args: {
    variant: 'default'
  },
  play: async ({
    canvas
  }: {
    canvas: ReturnType<typeof within>;
  }) => {
    await expect(canvas.getByText('Card Title')).toBeInTheDocument();
    await expect(canvas.getByText('This is the card content.')).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardHeader>
        <CardTitle>Bordered Card</CardTitle>
      </CardHeader>
      <CardContent>Card with a border.</CardContent>
    </Card>,
  args: {
    variant: 'bordered'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
      </CardHeader>
      <CardContent>Card with shadow.</CardContent>
    </Card>,
  args: {
    variant: 'elevated'
  }
}`,...c.parameters?.docs?.source}}};const b=["Default","Bordered","Elevated"];export{l as Bordered,i as Default,c as Elevated,b as __namedExportsOrder,j as default};

import{j as r,u as e,C as i,T as t,G as s,c as l,r as a}from"./index-1d8a79cf.js";import{T as c}from"./Title-22e3c86d.js";import{B as d}from"./Button-a3873be0.js";import{I as m}from"./IconArrowRight-659f1735.js";function j(){return r.jsx("main",{children:r.jsx(x,{})})}const g=l(o=>({root:{paddingTop:a(32),paddingBottom:a(32)},label:{textAlign:"center",fontWeight:900,fontSize:a(200),lineHeight:1,color:o.colorScheme==="dark"?o.colors.dark[4]:o.colors.gray[3],marginBottom:o.spacing.xl,[o.fn.smallerThan("sm")]:{fontSize:a(100)}},title:{textAlign:"center",fontWeight:850,fontSize:a(38),color:o.colorScheme=="dark"?"white":o.colors.dark[9],[o.fn.smallerThan("sm")]:{fontSize:a(32)}},description:{maxWidth:a(450),margin:"auto",fontWeight:500,marginTop:o.spacing.xl,marginBottom:o.spacing.xl}}));function x(){const{classes:o}=g(),n=e();return r.jsxs(i,{className:o.root,children:[r.jsx("div",{className:o.label,children:"404"}),r.jsx(c,{className:o.title,children:"Not Found"}),r.jsx(t,{color:"dimmed",size:"xl",align:"center",className:o.description,children:"The page you are looking for was moved, removed, renamed or may have never existed."}),r.jsx(s,{position:"center",my:25,children:r.jsx(d,{variant:"gradient",size:"lg",radius:20,onClick:()=>n("/"),rightIcon:r.jsx(m,{}),children:"Go Back Home"})})]})}export{x as NotFound,j as default};

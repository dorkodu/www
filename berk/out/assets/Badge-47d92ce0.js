import{r as o,c as j,g as S,a as B,b as k,R as d,h as C,d as I}from"./index-19849965.js";var D=Object.defineProperty,V=Object.defineProperties,A=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,y=(r,e,t)=>e in r?D(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,g=(r,e)=>{for(var t in e||(e={}))T.call(e,t)&&y(r,t,e[t]);if(h)for(var t of h(e))W.call(e,t)&&y(r,t,e[t]);return r},H=(r,e)=>V(r,A(e));const L=["light","filled","outline","dot","gradient"],u={xs:{fontSize:o(9),height:o(16)},sm:{fontSize:o(10),height:o(18)},md:{fontSize:o(11),height:o(20)},lg:{fontSize:o(13),height:o(26)},xl:{fontSize:o(16),height:o(32)}},G={xs:o(4),sm:o(4),md:o(6),lg:o(8),xl:o(10)};function q({theme:r,variant:e,color:t,size:a,gradient:i}){if(!L.includes(e))return null;if(e==="dot"){const n=S({size:a,sizes:G});return{backgroundColor:"transparent",color:r.colorScheme==="dark"?r.colors.dark[0]:r.colors.gray[7],border:`${o(1)} solid ${r.colorScheme==="dark"?r.colors.dark[3]:r.colors.gray[3]}`,paddingLeft:`calc(${S({size:a,sizes:r.spacing})} / 1.5 - ${n} / 2)`,"&::before":{content:'""',display:"block",width:n,height:n,borderRadius:n,backgroundColor:r.fn.themeColor(t,r.colorScheme==="dark"?4:r.fn.primaryShade("light"),!0),marginRight:n}}}const s=r.fn.variant({color:t,variant:e,gradient:i});return{background:s.background,color:s.color,border:`${o(e==="gradient"?0:1)} solid ${s.border}`}}var F=j((r,{color:e,radius:t,gradient:a,fullWidth:i},{variant:s,size:n})=>{const{fontSize:p,height:l}=n in u?u[n]:u.md;return{leftSection:{marginRight:`calc(${r.spacing.xs} / 2)`},rightSection:{marginLeft:`calc(${r.spacing.xs} / 2)`},inner:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},root:g(H(g(g({},r.fn.focusStyles()),r.fn.fontStyles()),{fontSize:p,height:l,WebkitTapHighlightColor:"transparent",lineHeight:`calc(${l} - ${o(2)})`,textDecoration:"none",padding:`0 calc(${S({size:n,sizes:r.spacing})} / 1.5)`,boxSizing:"border-box",display:i?"flex":"inline-flex",alignItems:"center",justifyContent:"center",width:i?"100%":"auto",textTransform:"uppercase",borderRadius:r.fn.radius(t),fontWeight:700,letterSpacing:o(.25),cursor:"inherit",textOverflow:"ellipsis",overflow:"hidden"}),q({theme:r,variant:s,color:e,size:n,gradient:a}))}});const J=F;var K=Object.defineProperty,f=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(r,e,t)=>e in r?K(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,M=(r,e)=>{for(var t in e||(e={}))O.call(e,t)&&v(r,t,e[t]);if(f)for(var t of f(e))b.call(e,t)&&v(r,t,e[t]);return r},Q=(r,e)=>{var t={};for(var a in r)O.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&f)for(var a of f(r))e.indexOf(a)<0&&b.call(r,a)&&(t[a]=r[a]);return t};const U={variant:"light",size:"md",radius:"xl"},P=B.forwardRef((r,e)=>{const t=k("Badge",U,r),{className:a,color:i,variant:s,fullWidth:n,children:p,size:l,leftSection:_,rightSection:m,radius:w,gradient:x,classNames:$,styles:z,unstyled:N}=t,E=Q(t,["className","color","variant","fullWidth","children","size","leftSection","rightSection","radius","gradient","classNames","styles","unstyled"]),{classes:c,cx:R}=J({fullWidth:n,color:i,radius:w,gradient:x},{classNames:$,styles:z,name:"Badge",unstyled:N,variant:s,size:l});return d.createElement(C,M({className:R(c.root,a),ref:e},E),_&&d.createElement("span",{className:c.leftSection},_),d.createElement("span",{className:c.inner},p),m&&d.createElement("span",{className:c.rightSection},m))});P.displayName="@mantine/core/Badge";const Y=I(P);export{Y as B};

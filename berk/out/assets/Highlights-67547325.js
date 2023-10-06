import{a as O,b as W,R as k,h as E,z as H,j as r,G as _,I as P,S as I,T as p,D as V,E as q,C as A,_ as Y}from"./index-7424d17f.js";import{P as X}from"./Paper-631ee39b.js";import{T as K}from"./ThemeIcon-af48c2be.js";import{a as C}from"./IconBrandTwitter-22acc9bd.js";import{L as Q,B as Z}from"./Button-5c22d274.js";import{S as N}from"./commons-110f92e0.js";import{T as J}from"./Title-5261a658.js";function ss(o){return Array.isArray(o)?o:[o]}const os={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}};var ts=Object.defineProperty,rs=Object.defineProperties,es=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,G=(o,t,e)=>t in o?ts(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,ns=(o,t)=>{for(var e in t||(t={}))$.call(t,e)&&G(o,e,t[e]);if(b)for(var e of b(t))F.call(t,e)&&G(o,e,t[e]);return o},is=(o,t)=>rs(o,es(t)),as=(o,t)=>{var e={};for(var n in o)$.call(o,n)&&t.indexOf(n)<0&&(e[n]=o[n]);if(o!=null&&b)for(var n of b(o))t.indexOf(n)<0&&F.call(o,n)&&(e[n]=o[n]);return e};const js={},B=O.forwardRef((o,t)=>{const e=W("Flex",js,o),{gap:n,rowGap:j,columnGap:c,align:v,justify:R,wrap:x,direction:w,sx:U}=e,f=as(e,["gap","rowGap","columnGap","align","justify","wrap","direction","sx"]);return k.createElement(E,is(ns({},f),{sx:[{display:"flex"},i=>H({gap:n,rowGap:j,columnGap:c,align:v,justify:R,wrap:x,direction:w},i,os),...ss(U)],ref:t}))});B.displayName="@mantine/core/Flex";async function us(o){try{const e=await(await fetch(`https://api.github.com/users/${o}`)).json();return ls.toGithubUser(e)}catch(t){return console.log(t),null}}const ls={toGithubUser(o){return T(o,h("GithubUser"))},githubUserToJson(o){return JSON.stringify(D(o,h("GithubUser")),null,2)},toGithubRepo(o){return T(JSON.parse(o),h("GithubRepo"))},githubRepoToJson(o){return JSON.stringify(D(o,h("GithubRepo")),null,2)}};function d(o,t,e,n=""){const j=S(o),c=n?` on ${n}`:"",v=e?` for key "${e}"`:"";throw Error(`Invalid value${v}${c}. Expected ${j} but got ${JSON.stringify(t)}`)}function S(o){return Array.isArray(o)?o.length===2&&o[0]===void 0?`an optional ${S(o[1])}`:`one of [${o.map(t=>S(t)).join(", ")}]`:typeof o=="object"&&o.literal!==void 0?o.literal:typeof o}function ds(o){if(o.jsonToJS===void 0){const t={};o.props.forEach(e=>t[e.json]={key:e.js,typ:e.typ}),o.jsonToJS=t}return o.jsonToJS}function ps(o){if(o.jsToJSON===void 0){const t={};o.props.forEach(e=>t[e.js]={key:e.json,typ:e.typ}),o.jsToJSON=t}return o.jsToJSON}function m(o,t,e,n="",j=""){function c(i,a){return typeof i==typeof a?a:d(i,a,n,j)}function v(i,a){const u=i.length;for(let y=0;y<u;y++){const l=i[y];try{return m(a,l,e)}catch{}}return d(i,a,n,j)}function R(i,a){return i.indexOf(a)!==-1?a:d(i.map(u=>g(u)),a,n,j)}function x(i,a){return Array.isArray(a)?a.map(u=>m(u,i,e)):d(g("array"),a,n,j)}function w(i){if(i===null)return null;const a=new Date(i);return isNaN(a.valueOf())?d(g("Date"),i,n,j):a}function U(i,a,u){if(u===null||typeof u!="object"||Array.isArray(u))return d(g(f||"object"),u,n,j);const y={};return Object.getOwnPropertyNames(i).forEach(l=>{const L=i[l],M=Object.prototype.hasOwnProperty.call(u,l)?u[l]:void 0;y[L.key]=m(M,L.typ,e,l,f)}),Object.getOwnPropertyNames(u).forEach(l=>{Object.prototype.hasOwnProperty.call(i,l)||(y[l]=m(u[l],a,e,l,f))}),y}if(t==="any")return o;if(t===null)return o===null?o:d(t,o,n,j);if(t===!1)return d(t,o,n,j);let f;for(;typeof t=="object"&&t.ref!==void 0;)f=t.ref,t=ys[t.ref];return Array.isArray(t)?R(t,o):typeof t=="object"?t.hasOwnProperty("unionMembers")?v(t.unionMembers,o):t.hasOwnProperty("arrayItems")?x(t.arrayItems,o):t.hasOwnProperty("props")?U(e(t),t.additional,o):d(t,o,n,j):t===Date&&typeof o!="number"?w(o):c(t,o)}function T(o,t){return m(o,t,ds)}function D(o,t){return m(o,t,ps)}function g(o){return{literal:o}}function cs(o){return{arrayItems:o}}function s(...o){return{unionMembers:o}}function z(o,t){return{props:o,additional:t}}function h(o){return{ref:o}}const ys={GithubUser:z([{json:"login",js:"login",typ:s(void 0,"")},{json:"id",js:"id",typ:s(void 0,0)},{json:"node_id",js:"nodeID",typ:s(void 0,"")},{json:"avatar_url",js:"avatarURL",typ:s(void 0,"")},{json:"gravatar_id",js:"gravatarID",typ:s(void 0,"")},{json:"url",js:"url",typ:s(void 0,"")},{json:"html_url",js:"htmlURL",typ:s(void 0,"")},{json:"followers_url",js:"followersURL",typ:s(void 0,"")},{json:"following_url",js:"followingURL",typ:s(void 0,"")},{json:"gists_url",js:"gistsURL",typ:s(void 0,"")},{json:"starred_url",js:"starredURL",typ:s(void 0,"")},{json:"subscriptions_url",js:"subscriptionsURL",typ:s(void 0,"")},{json:"organizations_url",js:"organizationsURL",typ:s(void 0,"")},{json:"repos_url",js:"reposURL",typ:s(void 0,"")},{json:"events_url",js:"eventsURL",typ:s(void 0,"")},{json:"received_events_url",js:"receivedEventsURL",typ:s(void 0,"")},{json:"type",js:"type",typ:s(void 0,"")},{json:"site_admin",js:"siteAdmin",typ:s(void 0,!0)},{json:"name",js:"name",typ:s(void 0,"")},{json:"company",js:"company",typ:s(void 0,"")},{json:"blog",js:"blog",typ:s(void 0,"")},{json:"location",js:"location",typ:s(void 0,"")},{json:"email",js:"email",typ:s(void 0,null)},{json:"hireable",js:"hireable",typ:s(void 0,!0)},{json:"bio",js:"bio",typ:s(void 0,"")},{json:"twitter_username",js:"twitterUsername",typ:s(void 0,"")},{json:"public_repos",js:"publicRepos",typ:s(void 0,0)},{json:"public_gists",js:"publicGists",typ:s(void 0,0)},{json:"followers",js:"followers",typ:s(void 0,0)},{json:"following",js:"following",typ:s(void 0,0)},{json:"created_at",js:"createdAt",typ:s(void 0,Date)},{json:"updated_at",js:"updatedAt",typ:s(void 0,Date)}],!1),GithubRepo:z([{json:"id",js:"id",typ:s(void 0,0)},{json:"node_id",js:"nodeID",typ:s(void 0,"")},{json:"name",js:"name",typ:s(void 0,"")},{json:"full_name",js:"fullName",typ:s(void 0,"")},{json:"private",js:"private",typ:s(void 0,!0)},{json:"owner",js:"owner",typ:s(void 0,h("GithubUser"))},{json:"html_url",js:"htmlURL",typ:s(void 0,"")},{json:"description",js:"description",typ:s(void 0,"")},{json:"fork",js:"fork",typ:s(void 0,!0)},{json:"url",js:"url",typ:s(void 0,"")},{json:"forks_url",js:"forksURL",typ:s(void 0,"")},{json:"keys_url",js:"keysURL",typ:s(void 0,"")},{json:"collaborators_url",js:"collaboratorsURL",typ:s(void 0,"")},{json:"teams_url",js:"teamsURL",typ:s(void 0,"")},{json:"hooks_url",js:"hooksURL",typ:s(void 0,"")},{json:"issue_events_url",js:"issueEventsURL",typ:s(void 0,"")},{json:"events_url",js:"eventsURL",typ:s(void 0,"")},{json:"assignees_url",js:"assigneesURL",typ:s(void 0,"")},{json:"branches_url",js:"branchesURL",typ:s(void 0,"")},{json:"tags_url",js:"tagsURL",typ:s(void 0,"")},{json:"blobs_url",js:"blobsURL",typ:s(void 0,"")},{json:"git_tags_url",js:"gitTagsURL",typ:s(void 0,"")},{json:"git_refs_url",js:"gitRefsURL",typ:s(void 0,"")},{json:"trees_url",js:"treesURL",typ:s(void 0,"")},{json:"statuses_url",js:"statusesURL",typ:s(void 0,"")},{json:"languages_url",js:"languagesURL",typ:s(void 0,"")},{json:"stargazers_url",js:"stargazersURL",typ:s(void 0,"")},{json:"contributors_url",js:"contributorsURL",typ:s(void 0,"")},{json:"subscribers_url",js:"subscribersURL",typ:s(void 0,"")},{json:"subscription_url",js:"subscriptionURL",typ:s(void 0,"")},{json:"commits_url",js:"commitsURL",typ:s(void 0,"")},{json:"git_commits_url",js:"gitCommitsURL",typ:s(void 0,"")},{json:"comments_url",js:"commentsURL",typ:s(void 0,"")},{json:"issue_comment_url",js:"issueCommentURL",typ:s(void 0,"")},{json:"contents_url",js:"contentsURL",typ:s(void 0,"")},{json:"compare_url",js:"compareURL",typ:s(void 0,"")},{json:"merges_url",js:"mergesURL",typ:s(void 0,"")},{json:"archive_url",js:"archiveURL",typ:s(void 0,"")},{json:"downloads_url",js:"downloadsURL",typ:s(void 0,"")},{json:"issues_url",js:"issuesURL",typ:s(void 0,"")},{json:"pulls_url",js:"pullsURL",typ:s(void 0,"")},{json:"milestones_url",js:"milestonesURL",typ:s(void 0,"")},{json:"notifications_url",js:"notificationsURL",typ:s(void 0,"")},{json:"labels_url",js:"labelsURL",typ:s(void 0,"")},{json:"releases_url",js:"releasesURL",typ:s(void 0,"")},{json:"deployments_url",js:"deploymentsURL",typ:s(void 0,"")},{json:"created_at",js:"createdAt",typ:s(void 0,Date)},{json:"updated_at",js:"updatedAt",typ:s(void 0,Date)},{json:"pushed_at",js:"pushedAt",typ:s(void 0,Date)},{json:"git_url",js:"gitURL",typ:s(void 0,"")},{json:"ssh_url",js:"sshURL",typ:s(void 0,"")},{json:"clone_url",js:"cloneURL",typ:s(void 0,"")},{json:"svn_url",js:"svnURL",typ:s(void 0,"")},{json:"homepage",js:"homepage",typ:s(void 0,null)},{json:"size",js:"size",typ:s(void 0,0)},{json:"stargazers_count",js:"stargazersCount",typ:s(void 0,0)},{json:"watchers_count",js:"watchersCount",typ:s(void 0,0)},{json:"language",js:"language",typ:s(void 0,null)},{json:"has_issues",js:"hasIssues",typ:s(void 0,!0)},{json:"has_projects",js:"hasProjects",typ:s(void 0,!0)},{json:"has_downloads",js:"hasDownloads",typ:s(void 0,!0)},{json:"has_wiki",js:"hasWiki",typ:s(void 0,!0)},{json:"has_pages",js:"hasPages",typ:s(void 0,!0)},{json:"has_discussions",js:"hasDiscussions",typ:s(void 0,!0)},{json:"forks_count",js:"forksCount",typ:s(void 0,0)},{json:"mirror_url",js:"mirrorURL",typ:s(void 0,null)},{json:"archived",js:"archived",typ:s(void 0,!0)},{json:"disabled",js:"disabled",typ:s(void 0,!0)},{json:"open_issues_count",js:"openIssuesCount",typ:s(void 0,0)},{json:"license",js:"license",typ:s(void 0,null)},{json:"allow_forking",js:"allowForking",typ:s(void 0,!0)},{json:"is_template",js:"isTemplate",typ:s(void 0,!0)},{json:"web_commit_signoff_required",js:"webCommitSignoffRequired",typ:s(void 0,!0)},{json:"topics",js:"topics",typ:s(void 0,cs("any"))},{json:"visibility",js:"visibility",typ:s(void 0,"")},{json:"forks",js:"forks",typ:s(void 0,0)},{json:"open_issues",js:"openIssues",typ:s(void 0,0)},{json:"watchers",js:"watchers",typ:s(void 0,0)},{json:"default_branch",js:"defaultBranch",typ:s(void 0,"")},{json:"temp_clone_token",js:"tempCloneToken",typ:s(void 0,null)},{json:"network_count",js:"networkCount",typ:s(void 0,0)},{json:"subscribers_count",js:"subscribersCount",typ:s(void 0,0)}],!1)};function fs({username:o,width:t=400,commitGraph:e=!1}){const[n,j]=O.useState(null);return O.useEffect(()=>{n==null&&us(o).then(c=>{j(c)})}),r.jsx(X,{p:10,withBorder:!0,shadow:"xs",maw:t,mih:100,m:10,children:n?r.jsxs(r.Fragment,{children:[r.jsxs(_,{position:"apart",align:"flex-start",children:[r.jsxs(_,{spacing:10,children:[r.jsx(P,{src:n.avatarURL,alt:n.name,width:50,height:50,radius:8}),r.jsxs(I,{spacing:0,children:[r.jsx(p,{weight:700,size:18,children:n.name}),r.jsxs(p,{weight:400,color:"dimmed",children:["@",n.login]})]})]}),r.jsx("a",{href:n.htmlURL,children:r.jsx(_,{children:r.jsx(K,{variant:"light",color:"gray",radius:"md",size:"xl",children:r.jsx(C,{size:28})})})})]}),r.jsx(p,{my:10,size:"sm",children:n.bio}),e&&r.jsx("div",{children:r.jsx(P,{src:`https://ghchart.rshah.org/50c060/${o}`,alt:`@${o}`})}),r.jsx(V,{my:10}),r.jsxs(_,{children:[r.jsxs(p,{size:"sm",children:[r.jsxs("b",{children:[n.publicRepos," "]}),r.jsx(p,{color:"dimmed",span:!0,children:"Repos"})]}),r.jsxs(p,{size:"sm",children:[r.jsxs("b",{children:[n.followers," "]}),r.jsx(p,{color:"dimmed",span:!0,children:"Followers"})]})]})]}):r.jsx(q,{children:r.jsx(Q,{variant:"dots",color:"green"})})})}const ms=k.lazy(()=>Y(()=>import("./SubstackEmbed-1b23c507.js"),["assets/SubstackEmbed-1b23c507.js","assets/index-7424d17f.js"])),vs=()=>r.jsx(N,{size:.8,content:[r.jsxs(E,{maw:500,mx:"auto",children:[r.jsx(J,{order:2,children:"I ❤️ Open Source"}),r.jsx(p,{my:12,children:"Since my teenage years, I've built many open source projects; libraries, tools and even some components of Dorkodu's products/services are open to public."}),r.jsx(Z,{component:"a",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/berkcambaz",size:"md",radius:"lg",color:"dark",leftIcon:r.jsx(C,{}),children:"See My GitHub"})]}),r.jsx(B,{align:"flex-end",children:r.jsx(A,{py:20,size:600,px:0,children:r.jsx(fs,{commitGraph:!0,width:400,username:"berkcambaz"})})})]}),hs=()=>r.jsx(N,{size:.65,content:[r.jsxs(I,{maw:400,mx:"auto",children:[r.jsx(J,{order:2,children:"🔖 We're on Substack."}),r.jsx(p,{children:"Dorkodu has a newsletter and community on Substack. You may like our weekly publication, notes and podcasts about technology, design, business and more."})]}),r.jsx(ms,{})]});function Ls(){return r.jsxs(A,{px:0,children:[r.jsx(vs,{}),r.jsx(hs,{})]})}export{Ls as default};
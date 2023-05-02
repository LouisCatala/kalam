import{aI as f,b as _,aT as a,bc as N,bb as m,bf as G,ba as j,bh as z,d2 as F,d3 as O,d4 as E,ck as A,cS as W,cN as R,d5 as U,bv as b,aU as S,c2 as V,bd as k,ch as $,cT as q,aV as H,cU as J,bI as K,bk as Q,d6 as X}from"./vendor.dfe763a8.js";import{a as v}from"./vendor_axios.5abceb0c.js";import{C as Y,S as Z,D as aa}from"./collapseData.823a2776.js";import{b as I,L as ta,S as ea}from"./index.a0a07941.js";import{_ as ra,L as sa,F as T,E as na,S as oa,a as ia,C as la,T as ca}from"./vendor_devextreme.b9cb8326.js";import"./vendor_core_js_pure.0ea38aa2.js";import"./vendor_mui_datatables.e4cef698.js";import"./vendor_lodash.61d30fe5.js";import"./vendor_react_epic_spinners.d732b23a.js";import"./vendor_react_slick.00ec4174.js";import"./vendor_react_easy_edit.bfc94365.js";import"./vendor_react_player.20d2e3d1.js";const da="https://join.navgurukul.org/api/",C=({url:t})=>{const[i,u]=f.useState({data:null,partnerId:window.location.pathname.split("/")[2]});_.exports.useEffect(()=>{v.get(`${da}${t}`).then(e=>{const l=e.data.map(r=>({name:I[r.name],value:r.value,studentNames:r.studentNames,percentage:r.percentage}));u({...i,data:l})})},[]);const n=e=>`${e.valueText} ${e.argument} (${(e.percent*100).toFixed(2)}%)`,h=e=>{const l=i.data,{studentNames:r}=l.find(s=>s.name===e.argument);return{text:r.sort().map(s=>`${s}`)}};if(i.data){const e=i.data;return a(N,{style:{height:"800px"},children:m(ra,{resolveLabelOverlapping:"shift",id:"pie",type:"doughnut",palette:"Bright",dataSource:e,title:"Progress Made Graph",style:{height:"750px"},children:[a(sa,{orientation:"horizontal",itemTextPosition:"right",horizontalAlignment:"center",verticalAlignment:"bottom",columnCount:4,style:{},children:a(T,{size:16})}),a(na,{enabled:!0}),a(oa,{argumentField:"name",valueField:"value",children:m(ia,{visible:!0,position:"columns",customizeText:n,children:[a(T,{size:15}),a(la,{visible:!0,width:.5})]})}),a(ca,{enabled:!0,customizeTooltip:h})]})})}return a(G,{m:2,pt:3,children:a(ta,{})})};var pa="/assets/whatsapp.74cf84f3.png";const ma=j(t=>({root:{maxWidth:400,borderRadius:10,padding:10},image:{width:60,height:60,marginTop:10},large:{width:t.spacing(7),height:t.spacing(7),marginLeft:10,color:t.palette.getContrastText($[500]),backgroundColor:$[500]},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},expandOpen:{transform:"rotate(0deg)",transition:"all .5s ease",webkitTransition:"all .5s ease",mozTransition:"all .5s ease"},container:{display:"flex",alignItems:"center",flexDirection:"column",marginTop:2}})),ua=({title:t,detailsData:i,index:u,message:n})=>{const{enqueueSnackbar:h}=z(),e=ma(),l=f.useMemo(()=>[{icon:a(F,{className:e.image})},{icon:a(O,{className:e.image})},{icon:a(E,{className:e.image})},{icon:a(A,{className:e.image})}],[]),r=s=>a(q.CopyToClipboard,{text:s,onCopy:()=>{h("Message copied!",{variant:"success"})},children:a(S,{title:"Copy Details",style:{background:"#f05f40"},className:e.large,children:a(H,{children:a(J,{sx:{color:"white"}})})})});return a(W,{className:e.root,children:m(R,{children:[m("div",{style:{marginBottom:50},children:[U?m(b,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",children:[r(n),a("br",{}),a(S,{title:"Share Details on WhatsApp",children:a("a",{href:`https://api.whatsapp.com/send?text=${n}`,"data-action":"share/whatsapp/share",children:a(V,{className:e.large,alt:"Remy Sharp",src:pa,children:" "})})})]}):a(b,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",children:r(n)}),a("br",{}),a("center",{children:l[u].icon}),a("br",{}),a("center",{children:a(k,{variant:"h5",children:t})})]}),Object.entries(i).map(([s,c])=>a("div",{children:a(Y,{classes:e,details:c,stage:s})},`${s}${Math.random()}`))]})})},D="https://join.navgurukul.org/api/",ha=j(t=>({root:{maxWidth:400,borderRadius:10,padding:10},image:{width:60,height:60,marginTop:10},large:{width:t.spacing(7),height:t.spacing(7),marginLeft:10,color:t.palette.getContrastText($[500]),backgroundColor:$[500]},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},expandOpen:{transform:"rotate(0deg)",transition:"all .5s ease",webkitTransition:"all .5s ease",mozTransition:"all .5s ease"},container:{display:"flex",alignItems:"center",flexDirection:"column",marginTop:2}})),_a=()=>{const{partnerId:t}=K(),i=ha(),[u,n]=f.useState(2),[h,e]=f.useState(""),[l,r]=f.useState({}),s=d=>{Object.entries(d).forEach(([p,x])=>{let o=`*${p}*

`;Object.entries(x).forEach(([g,y])=>{y.length>0&&(o=`${o}
_${I[g]} (${y.length})_
`,y.forEach(w=>{o=`${o}${w.name}: ${w.mobile}
`}))}),o=`${o}
For more information visit
http://admissions.navgurukul.org/partner/${t}`,r(g=>({...g,[p]:{detailsData:x,message:o}}))})},c=location.pathname.split("/")[2]==="group"?"partnerGroup":"partners";_.exports.useEffect(()=>{v.get(`${D}${c}/${t}${c==="partnerGroup"?"/name":""}`).then(d=>{var p;return e(((p=d.data.data[0])==null?void 0:p.name)||d.data.data.name)}),v.get(`${D}${c}/progress_made/${t}`).then(d=>s(d.data.data))},[]);const L=()=>n(1),M=()=>n(0),P=()=>n(2),B=d=>{switch(d){case 0:return a(aa,{displayData:ea.columns.partnerData,url:`${c}/${t}/students`});case 1:return a(b,{maxWidth:"xl",container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"flex-start",style:{marginTop:10,justifyContent:"center"},children:Object.entries(l).map(([p,{detailsData:x,message:o}],g)=>a(b,{item:!0,xs:12,sm:6,md:3,children:a(ua,{title:p,detailsData:x,index:g,message:o})},p))});case 2:return a(C,{url:`${c}/graph/progress_made/${t}`});default:return a(C,{url:`${c}/graph/progress_made/${t}`})}};return m(Q,{children:[a(X,{}),m(N,{className:i.container,maxWidth:"xl",children:[a(b,{item:!0,xs:12,style:{marginBottom:12},children:m(k,{variant:"h4",children:[" Hello ",h]})}),a(Z,{progressMade:{label:"Progress Made",action:L},tabularData:{label:"Tabular Data",action:M},showGraphData:{label:"Graph Data",action:P},selected:u===0?"tabularData":u===1?"progressMade":"showGraphData"}),B(u)]})]})};export{_a as default};

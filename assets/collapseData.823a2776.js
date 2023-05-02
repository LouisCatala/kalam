import{bH as ie,bi as re,bj as ce,aI as D,b as de,aT as a,bb as l,bv as m,bx as j,bf as ue,cz as k,cA as L,cB as P,bt as N,bE as B,ba as me,bc as pe,bd as S,cM as he,bs as w,cN as Y,cO as fe,aV as ge,cP as be,cQ as ye,cR as Se}from"./vendor.dfe763a8.js";import{M as Ce}from"./vendor_mui_datatables.e4cef698.js";import{a as ve}from"./vendor_axios.5abceb0c.js";import{a as xe,b as F,d as _,M as we,e as De,f as Fe,q as Ie,c as Te,g as Ae,h as z,i as Me,j as Oe,k as je,l as ke,m as Le,o as Pe}from"./index.a0a07941.js";const E=Object.entries(xe).map(([t,n])=>({value:t,label:n})),R=Object.entries(F).map(([t,n])=>({value:t,label:n})),Ne="https://join.navgurukul.org/api/",Be=[{label:"English Interview Pending (2nd Round)",name:"pendingEnglishInterview",options:{viewColumns:!1,display:!1,filter:!1}},{label:"English Interview Failed",name:"englishInterviewFail",options:{viewColumns:!1,display:!1,filter:!1}},{label:"Algebra Interview Pending (3rd Round)",name:"pendingAlgebraInterview",options:{viewColumns:!1,display:!1,filter:!1}},{label:"Algebra Interview Failed",name:"algebraInterviewFail",options:{viewColumns:!1,display:!1,filter:!1}},{label:"Culture Fit Interview Pending (4th Round)",name:"pendingCultureFitInterview",options:{viewColumns:!1,display:!1,filter:!1}},{label:"Culture Interview Failed",name:"cultureFitInterviewFail",options:{viewColumns:!1,display:!1,filter:!1}},{label:"Selected",name:"selected",options:{viewColumns:!1,display:!1,filter:!1}},{label:"Offer Letter Sent",name:"offerLetterSent",options:{viewColumns:!1,display:!1,filter:!1}},{label:"Unreachable",name:"notReachable",options:{viewColumns:!1,display:!1,filter:!1}}],$e=({displayData:t,title:n,url:p,isCampus:h=!1})=>{const r=ie(),{students:o,allStudents:b,fromDate:C,toDate:I,allStatusCount:T}=re(e=>e.campus),f=ce(),U=()=>f(Te(!1)),W=e=>f(Ae(e)),q=e=>f(Oe(B(e).format("YYYY-MM-DD"))),G=e=>f(je(B(e).format("YYYY-MM-DD"))),H=e=>f(ke(e)),v=e=>f(De(e)),K=e=>f(Le(e)),Q=()=>f(Fe()),[V,X]=D.useState(!0),Z=e=>{if(h){const d=z.reduce((i,s)=>({...i,[s]:0}),{total:0}),u=e.reduce((i,s)=>(s.stage.campus_status&&z.includes(s.stage.campus_status)&&(i[s.stage.campus_status]+=1),i),d);u.total=e.length,H(u)}const c=e.map(d=>Me(d,h));v(c),K(c),X(!1)},x=async e=>{try{const c=Ne+p,d=await ve.get(c,{signal:e,params:{from:C,to:I}}),u={},i=d.data.data.map(s=>{const g=s.lastTransition?s.lastTransition.to_stage:"other",y=s.contacts[s.contacts.length-1];return u[g]?u[g]+=1:u[g]=1,{...s,qualification:Ie[s.qualification],altNumber:y&&y.alt_mobile,donor:s.studentDonor?s.studentDonor:null}});i.length>0&&(i[0]={...i[0],...u}),Z(i)}catch{U()}};de.exports.useEffect(()=>{const e=new AbortController;return(async()=>await x(e.signal))(),()=>{e.abort(),v([]),Q()}},[]);const J=async e=>{q(e),x()},ee=e=>{G(e),x()},ae=e=>{const c=b.filter(d=>d.stage===e);v(c)},A=async e=>{W(e),ae(e.label)},te=r.pathname.split("/")[1],M=parseInt(r.pathname[r.pathname.length-1],10),ne=(e,c,d,u)=>{const i=u.map(({data:s})=>({data:s.map((g,y)=>{var O;switch(((O=t[y])==null?void 0:O.name)||"DEFAULT"){case"enrolmentKey":return{onlineTest:"Online Test",offlineTest:"Offline Test","N/A":"N/A"}[g[g.length-1].type_of_test];default:return g}})}));return`\uFEFF${e(d)}${c(i)}`},se=D.useCallback(()=>a("tbody",{}),[]),le=l(m,{container:!0,spacing:4,sx:{paddingY:"0.8rem"},children:[a(m,{item:!0,xs:12,md:6,lg:3,children:a(j,{onChange:A,options:M?R:E,placeholder:"Filter Stage",isClearable:!0,closeMenuOnSelect:!0,menuPortalTarget:document.body,styles:{menuPortal:e=>({...e,zIndex:9999})}})}),a(m,{item:!0,xs:12,md:6,lg:3,children:a(k,{dateAdapter:L,children:a(P,{margin:"dense",style:{marginLeft:16,maxWidth:"40%"},value:C,id:"date-picker-dialog",label:"From Date",format:"MM/dd/yyyy",onChange:J,KeyboardButtonProps:{"aria-label":"change date"},renderInput:e=>a(N,{fullWidth:!0,size:"small",...e})})})}),a(m,{item:!0,xs:12,md:6,lg:3,children:a(k,{dateAdapter:L,children:a(P,{margin:"dense",style:{marginLeft:16,maxWidth:"40%"},value:I,id:"date-picker-dialog",label:"To Date",format:"MM/dd/yyyy",onChange:ee,KeyboardButtonProps:{"aria-label":"change date"},renderInput:e=>a(N,{size:"small",fullWidth:!0,...e})})})})]}),oe=b.length>0&&l(m,{container:!0,spacing:3,sx:{paddingY:"0.8rem"},children:[a(m,{item:!0,container:!0,xs:12,md:6,lg:3,sx:{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%"},children:a(j,{onChange:A,options:M?R:E,placeholder:"Filter Stage",isClearable:!0,closeMenuOnSelect:!0,menuPortalTarget:document.body,styles:{menuPortal:e=>({...e,zIndex:9999})}})}),a(m,{item:!0,xs:12,md:12,lg:6,children:a(Ce,{columns:Object.keys(T).map(e=>{var c,d,u,i;return{name:e,label:(d=(c=_[e])==null?void 0:c.label)!=null?d:"Total",options:{display:(i=(u=_[e])==null?void 0:u.display)!=null?i:!0}}}),title:"Campus Counts",data:[T],options:{customFooter:se,filter:!1,sort:!1,showTitle:!1,viewColumns:!0,print:!1,search:!1,selectableRows:"none",toolbar:!1}})})]});return l(ue,{sx:{paddingX:"1.2rem",paddingY:"0.2rem"},children:[te==="campus"?oe:le,a(we,{tableBodyMaxHeight:"56vh",title:n,columns:[...t,...Be],onDownload:ne,data:o,showLoader:V})]})},Ye=me(()=>({container:{display:"flex",alignItems:"center",flexDirection:"column"},space:{marginBottom:10}})),Ue=({name:t,progressMade:n,tabularData:p,showGraphData:h,selected:r})=>{const o=Ye();return l(pe,{className:o.container,children:[a(m,{item:!0,xs:12,className:o.space,children:l(S,{variant:"h4",children:[" ",t]})}),a(m,{item:!0,xs:12,className:o.space,children:l(he,{size:"large",color:"primary","aria-label":"large outlined primary button group",children:[a(w,{variant:r==="tabularData"?"contained":"outlined",onClick:()=>p.action(),children:p.label}),a(w,{variant:r==="progressMade"?"contained":"outlined",onClick:()=>n.action(),children:n.label}),a(w,{variant:r==="showGraphData"?"contained":"outlined",onClick:()=>h.action(),children:h.label})]})})]})},$=t=>{let n="";t.status!=null&&(n=(t.status.charAt(0).toUpperCase()+t.status.slice(1)).split(/(?=[A-Z])/).join(" "));const p=location.pathname.split("/")[1];return l("center",{children:[l("div",{style:{fontSize:15,fontFamily:"Arial",display:"flex"},children:[p==="campus"?a(Pe,{isShow:!0,studentName:t.name,studentId:t.id,dataType:"columnTransition"}):t.name," ",":",t.mobile?t.mobile:t.contacts[0].mobile]}),t.status!=null?l("span",{style:{fontSize:15,fontWeight:500},children:["(",n,")"]}):a("span",{children:t.status})]},`${t.name}${Math.random()}`)},We=t=>{const[n,p]=D.useState(!1),h=()=>{p(C=>!C)},{classes:r,details:o,stage:b}=t;return o.length?l("div",{children:[l(Y,{children:[a("center",{children:l(S,{variant:"h6",children:[F[b],"(",o.length,")"]})}),o.length>0&&!n&&o.slice(0,10).map($),o.length>0&&n&&o.map($)]}),a(fe,{disableSpacing:!0,children:o.length>10&&a(ge,{className:be(r.expand,{[r.expandOpen]:n}),onClick:h,"aria-expanded":n,"aria-label":"show more",children:n?l("div",{children:[a(S,{children:"See Less"}),a(ye,{className:r.expandOpen,color:"primary"})]}):l("div",{children:[a(S,{children:"See More"}),a(Se,{className:r.expandOpen,color:"primary"})]})})})]}):l(Y,{children:[a("center",{children:l(S,{variant:"h6",children:[F[b],"(",o.length,")"]})}),o.length===0&&a("center",{children:a("p",{style:{fontSize:15,color:"red"},children:"No record Found"})})]})};export{We as C,$e as D,Ue as S};

import{bI as h,aI as p,b as g,bb as $,aT as r}from"./vendor.dfe763a8.js";import{a as D}from"./vendor_axios.5abceb0c.js";import{S as P}from"./index.a0a07941.js";import{S,D as f}from"./collapseData.823a2776.js";import{S as i,P as w}from"./PieRechartReport.923c8484.js";import"./vendor_core_js_pure.0ea38aa2.js";import"./vendor_react_epic_spinners.d732b23a.js";import"./vendor_mui_datatables.e4cef698.js";import"./vendor_lodash.61d30fe5.js";import"./vendor_react_slick.00ec4174.js";import"./vendor_react_easy_edit.bfc94365.js";import"./vendor_react_player.20d2e3d1.js";import"./vendor_devextreme.b9cb8326.js";const G="https://join.navgurukul.org/api/",_=()=>{const{partnerId:t}=h(),[u,m]=p.useState(""),[s,o]=p.useState(1),a=location.pathname.split("/")[2]==="group"?"partnerGroup":"partners";g.exports.useEffect(()=>{D.get(`${G}${a}/${t}${a==="partnerGroup"?"/name":""}`).then(e=>{var n;m(((n=e.data.data[0])==null?void 0:n.name)||e.data.data.name)})},[]);const c=()=>o(1),l=()=>o(0),d=()=>o(2),b=e=>{switch(e){case 0:return r(f,{displayData:P.CampusData,url:`${a}/joined_progress_made/${t}`});case 1:return r(i,{url:`${a}/${t}`});case 2:return r(w,{url:`/${a}/${t}/students/distribution`});default:return r(i,{url:`${a}/${t}`})}};return $("div",{children:[r(S,{name:`Hello ${u}`,progressMade:{label:"Progress Made",action:c},tabularData:{label:"Tabular Data",action:l},showGraphData:{label:"Graph on Job",action:d},selected:s===0?"tabularData":s===1?"progressMade":"showGraphData"}),b(s)]})};export{_ as default};

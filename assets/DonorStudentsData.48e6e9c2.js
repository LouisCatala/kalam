import{bI as l,aI as m,bb as D,aT as t}from"./vendor.dfe763a8.js";import{r as b,S as e}from"./index.a0a07941.js";import{S as h,D as n}from"./collapseData.823a2776.js";import{P as S,S as f}from"./PieRechartReport.923c8484.js";import"./vendor_core_js_pure.0ea38aa2.js";import"./vendor_axios.5abceb0c.js";import"./vendor_react_epic_spinners.d732b23a.js";import"./vendor_mui_datatables.e4cef698.js";import"./vendor_lodash.61d30fe5.js";import"./vendor_react_slick.00ec4174.js";import"./vendor_react_easy_edit.bfc94365.js";import"./vendor_react_player.20d2e3d1.js";import"./vendor_devextreme.b9cb8326.js";const B=()=>{const{donorId:a}=l(),[r,o]=m.useState(0),i=b.find(s=>s.id===parseInt(a,10)).name,d=()=>o(1),p=()=>o(0),u=()=>o(2),c=s=>{switch(s){case 0:return t(n,{displayData:e.DonorData,url:`donor/${a}/students`});case 1:return t(f,{url:`donor/${a}`});case 2:return t(S,{url:`/donor/${a}/students/distribution`});default:return t(n,{displayData:e.DonorData,url:`donor/${a}/students`})}};return D("div",{children:[t(h,{name:`${i} Donor`,progressMade:{label:"Progress Made",action:d},tabularData:{label:"Tabular Data",action:p},showGraphData:{label:"Graph on Job",action:u},selected:r===0?"tabularData":r===1?"progressMade":"showGraphData"}),c(r)]})};export{B as default};

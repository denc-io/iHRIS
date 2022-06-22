"use strict";(self["webpackChunkihris_frontend"]=self["webpackChunkihris_frontend"]||[]).push([[902],{3205:function(t,e,i){i.d(e,{Z:function(){return a}});var s=i(8085),r=i(3325),a=(0,r.Z)(s.Z).extend({name:"v-subheader",props:{inset:Boolean},render(t){return t("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},8651:function(t,e,i){i.r(e),i.d(e,{default:function(){return V}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"my-3"},[t._t("default",null,{source:t.source}),i("v-overlay",{attrs:{value:t.overlay}},[i("v-progress-circular",{attrs:{size:"50",color:"primary",indeterminate:""}})],1),i("v-navigation-drawer",{staticClass:"primary darken-1 white--text",staticStyle:{"z-index":"3"},attrs:{app:"",right:"",permanent:"",clipped:""}},[i("v-list",{staticClass:"white--text"},[i("v-list-item",[t.edit?i("v-btn",{staticClass:"secondary",attrs:{dark:""},on:{click:function(e){t.fhirId?t.$router.go(0):t.$router.go(-1)}}},[i("v-icon",{attrs:{light:""}},[t._v("mdi-pencil-off")]),i("span",[t._v("Cancel")])],1):i("v-btn",{staticClass:"secondary",attrs:{dark:""},on:{click:function(e){return t.$emit("set-edit",!t.edit)}}},[i("v-icon",{attrs:{light:""}},[t._v("mdi-pencil")]),i("span",[t._v("Edit")])],1),i("v-spacer"),t.edit?i("v-btn",{staticClass:"success darken-1",attrs:{dark:""},on:{click:function(e){return t.processFHIR()}}},[i("v-icon",{attrs:{light:""}},[t._v("mdi-content-save")]),i("span",[t._v("Save")])],1):t._e()],1),i("v-divider",{attrs:{color:"white"}}),i("v-subheader",{staticClass:"white--text"},[i("h2",[t._v(t._s(t.$t("App.ihris-codesystem.section")))])]),t._l(t.sectionMenu,(function(e){return i("v-list-item",{key:e.name,attrs:{href:"#section-"+e.name}},[t.edit&&e.secondary?t._e():i("v-list-item-content",{staticClass:"white--text"},[i("v-list-item-title",{staticClass:"text-uppercase"},[i("h4",[t._v(t._s(e.title))])]),i("v-list-item-subtitle",{staticClass:"white--text"},[t._v(t._s(e.desc))])],1)],1)}))],2)],1)],2)},r=[],a=(i(6699),{name:"ihris-codesystem",props:["title","field","fhir-id","page","profile","section-menu","edit"],data:function(){return{fhir:{},source:{data:{},path:""},loading:!1,overlay:!1,isEdit:!1}},created:function(){if(this.fhirId){this.loading=!0;let t=this.profile.substring(this.profile.lastIndexOf("/")+1);fetch("/fhir/"+this.field+"/"+t).then((t=>{t.ok?t.json().then((t=>{let e={};if(t.property)for(let s of t.property)e[s.code]="value"+s.type.charAt(0).toUpperCase()+s.type.slice(1);let i=t.concept.find((t=>t.code===this.fhirId));if(i&&i.property){for(let t of i.property)i[t.code]=t[e[t.code]];delete i.property}this.source={data:i,path:this.field},this.loading=!1})).catch((e=>{this.loading=!1,console.log(this.field,this.fhirId,e,t)})):(this.loading=!1,console.log("Invalid response",t),t.text().then((t=>{console.log("body text:",t)})).catch((t=>{console.log("Failed to get text:",t)})))})).catch((t=>{this.loading=!1,console.log(this.field,this.fhirId,t)}))}},computed:{hasFhirId:function(){return""==this.fhirId?(console.log("blank"),!1):this.fhirId?(console.log("fhirid else"),!0):(console.log("fhirid is falsy"),!1)}},methods:{processFHIR:function(){this.overlay=!0,this.loading=!0,this.fhir={},n(this.field,this.fhir,this.$children);let t=this.profile.substring(this.profile.lastIndexOf("/")+1),e="/fhir/"+this.field+"/"+t,i={method:"PATCH",headers:{"Content-Type":"application/fhir+json"},redirect:"manual"};e+="/"+this.fhir.code;const s=["code","display","definition","property"];for(let r of Object.keys(this.fhir))s.includes(r)||delete this.fhir[r];i.body=JSON.stringify(this.fhir),console.log("SAVE",e,this.fhir),fetch(e,i).then((t=>{200===t.status&&(this.overlay=!1,this.loading=!1,this.fhirId?this.$router.go(0):this.$router.push({name:"resource_view",params:{page:this.page,id:this.fhir.code}}))})).catch((t=>{console.log("FAILED TO SAVE",e,t)}))}}});const o=t=>{let e="value"+t.substring(4);return e.replace(/(-[a-z])/gi,(t=>t.toUpperCase().replace("-","")))},n=function(t,e,i){i.forEach((i=>{let s=t,r=e;if(i.field&&!i.fieldType){let t;if(i.sliceName?i.field.startsWith("value[x]")?(t=i.field.substring(9),s+="."+t):(t=i.field.replace(":"+i.sliceName,""),s+="."+t):(t=i.field,s+="."+t),"1"!==i.max||"1"!==i.baseMax?e.hasOwnProperty(t)||(r[t]=[]):r[t]={},i.hasOwnProperty("value"))if(i.path.startsWith("CodeSystem.property.")){r.property||(r.property=[]);let e={code:t},s=o(i.$vnode.componentOptions.tag);i.value&&(!i.value.hasOwnProperty("system")||(i.value.code||i.value.value))&&(e[s]=i.value,r.property.push(e))}else r[t]=i.value;r=r[t]}i.$children&&n(s,r,i.$children)}))};var l=a,c=i(3736),h=i(3453),d=i.n(h),f=i(3150),p=i(4228),u=i(1418),v=i(6428),y=i(6816),g=i(7620),m=i(4562),C=i(5132),b=i(1058),_=i(624),I=i(9762),k=i(3205),x=(0,c.Z)(l,s,r,!1,null,null,null),V=x.exports;d()(x,{VBtn:f.Z,VContainer:p.Z,VDivider:u.Z,VIcon:v.Z,VList:y.Z,VListItem:g.Z,VListItemContent:m.km,VListItemSubtitle:m.oZ,VListItemTitle:m.V9,VNavigationDrawer:C.Z,VOverlay:b.Z,VProgressCircular:_.Z,VSpacer:I.Z,VSubheader:k.Z})}}]);
//# sourceMappingURL=fhir-codesystem.9facb689.js.map
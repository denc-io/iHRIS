(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["report"],{"2fc5":function(r,e,t){"use strict";t.r(e);var i,o=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ihris-template",{key:r.$route.path},[r._v(" Loading... ")])},a=[],n=(t("d3b7"),t("a026")),h={name:"fhir-report",props:["report"],data:function(){return{}},created:function(){this.$route.params&&this.$route.params.report?i=this.$route.params.report:this.report&&(i=this.report),this.getTemplate()},methods:{getTemplate:function(){var r=this;fetch("/config/report/"+i).then((function(e){e.json().then((function(e){n["default"].component("ihris-template",{name:"ihris-template",data:function(){return{reportData:e.reportData,dataURL:e.dataURL,terms:{}}},components:{"ihris-report":function(){return Promise.all([t.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),t.e("fhir-main~fhir-primary~fhir-search~mhero"),t.e("fhir-primary~fhir-search~mhero"),t.e("fhir-search")]).then(t.bind(null,"2e2c"))},"ihris-search-term":function(){return Promise.all([t.e("fhir-main~fhir-primary~fhir-search~fhir-secondary~mhero"),t.e("fhir-main~fhir-primary~fhir-search~mhero"),t.e("fhir-primary~fhir-search~mhero"),t.e("fhir-search")]).then(t.bind(null,"d604"))}},template:e.reportTemplate,methods:{searchData:function(r,e){this.$set(this.terms,r,e)}}}),r.$forceUpdate(),console.log("updated template")})).catch((function(e){console.log(e),n["default"].component("ihris-template",{template:"<div><h1>Error</h1><p>An error occurred trying to load this report</p>.</div>"}),r.$forceUpdate()}))})).catch((function(e){console.log(e),n["default"].component("ihris-template",{template:"<div><h1>Error</h1><p>An error occurred trying to load this report</p>.</div>"}),r.$forceUpdate()}))}},components:{},beforeCreate:function(){n["default"].component("ihris-template",{template:"<div>Loading...</div>"})}},p=h,c=t("2877"),s=Object(c["a"])(p,o,a,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=report.0d2686a0.js.map
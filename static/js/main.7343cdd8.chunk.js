(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(45),m=t.n(n),s=t(72),c=t(73),i=t(83),o=t(82),d=(t(71),t(6)),u=t(103),p=t(104),E=t(102),f=t(68),N=t.n(f),b=t(17),v=t(105);var g=function(e){return r.a.createElement(v.a,{style:{width:"22rem"},className:"my-4 border-primary mx-4"},r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,"User ",e.results.firstName),r.a.createElement(v.a.Subtitle,{className:"mb-2 text-muted"},"user_name: ",e.results.firstName," ",e.results.lastName),r.a.createElement(v.a.Text,null,r.a.createElement("b",null,"FirstName: ",e.results.firstName),r.a.createElement("br",null),r.a.createElement("b",null,"LastName: ",e.results.lastName),r.a.createElement("br",null),r.a.createElement("b",null,"Password: ",e.results.password),r.a.createElement("br",null),r.a.createElement("b",null,"ConfirmPassword: ",e.results.confirmPassword),r.a.createElement("br",null),r.a.createElement("b",null,"Email: ",e.results.email),r.a.createElement("br",null),r.a.createElement("b",null,"Gender: ",e.results.gender),r.a.createElement("br",null),r.a.createElement("b",null,"AcceptTandC: ",e.results.acceptTandC),r.a.createElement("br",null),r.a.createElement("b",null,"Department: ",e.results.department)),r.a.createElement(v.a.Link,{href:"mailto:".concat(e.results.email)},"Send Mail")))},h=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).state={data:{firstName:"",lastName:"",password:"",confirmPassword:"",email:"",gender:"",acceptTandC:null,department:""},isSubmitting:!1},l}return Object(c.a)(t,[{key:"componentDidMount",value:function(){document.title="Day-13-Formik"}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{className:"p-4 ".concat(N.a.Navbar)},r.a.createElement(p.a,{className:"mx-auto"},r.a.createElement("h1",{className:"text-dark"},"Registration Form"))),r.a.createElement(E.a,{className:"py-5"},r.a.createElement(d.d,{initialValues:{firstName:"",lastName:"",password:"",confirmPassword:"",email:"",gender:"",acceptTandC:!1,department:""},validationSchema:b.b().shape({firstName:b.d().required("FirstName is required!"),lastName:b.d().required("LastName is required"),password:b.d().min(6,"Password length must be atleast 6 character long").required("Password is required"),confirmPassword:b.d().oneOf([b.c("password")],"Password must match").required("Password is required"),email:b.d().email("Email is invalid").required("Email is required"),gender:b.d().required("You must select gender"),department:b.d().nullable().required("You must select department"),acceptTandC:b.a().oneOf([!0],"You must accept T&C")}),onSubmit:function(a){e.setState({isSubmitting:!0,data:{firstName:a.firstName,lastName:a.lastName,password:a.password,confirmPassword:a.confirmPassword,email:a.email,gender:a.gender,department:a.department,acceptTandC:JSON.stringify(a.acceptTandC)}})}},(function(e){var a=e.errors,t=e.touched;return r.a.createElement(d.c,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",null,"First Name"),r.a.createElement(d.b,{name:"firstName",type:"text",className:"form-control "+(a.firstName&&t.firstName?"is-invalid":"")}),r.a.createElement(d.a,{name:"firstName",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",null,"Last Name"),r.a.createElement(d.b,{name:"lastName",type:"text",className:"form-control "+(a.lastName&&t.lastName?"is-invalid":"")}),r.a.createElement(d.a,{name:"lastName",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",null,"Password"),r.a.createElement(d.b,{name:"password",type:"password",className:"form-control "+(a.password&&t.password?"is-invalid":"")}),r.a.createElement(d.a,{name:"password",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",null,"Confirm password"),r.a.createElement(d.b,{name:"confirmPassword",type:"password",className:"form-control "+(a.confirmPassword&&t.confirmPassword?"is-invalid":"")}),r.a.createElement(d.a,{name:"confirmPassword",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",null,"Email"),r.a.createElement(d.b,{name:"email",type:"text",className:"form-control "+(a.email&&t.email?"is-invalid":"")}),r.a.createElement(d.a,{name:"email",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group form-check"},r.a.createElement("label",{className:"mr-5"},"Gender"),r.a.createElement(d.b,{type:"radio",name:"gender",value:"male",id:"male",className:"mx-2 form-check-input "+(a.gender&&t.gender?" is-invalid":"")}),r.a.createElement("label",{className:"form-check-label mx-4",htmlFor:"male"},"Male"),r.a.createElement(d.b,{type:"radio",name:"gender",value:"female",id:"female",className:"mx-2 form-check-input "+(a.gender&&t.gender?" is-invalid":"")}),r.a.createElement("label",{className:"form-check-label mx-4",htmlFor:"female"},"Female"),r.a.createElement(d.b,{type:"radio",name:"gender",value:"other",id:"other",className:"mx-2 form-check-input "+(a.gender&&t.gender?" is-invalid":"")}),r.a.createElement("label",{className:"form-check-label mx-4",htmlFor:"other"},"Other"),r.a.createElement(d.a,{name:"gender",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"department"},"Department"),r.a.createElement("br",null),r.a.createElement(d.b,{as:"select",name:"department",className:"form-control "+(a.department&&t.department?" is-invalid":"")},r.a.createElement("option",{value:""},"--Select--"),r.a.createElement("option",{value:".Net"},".Net"),r.a.createElement("option",{value:"React"},"React"),r.a.createElement("option",{value:"Angular"},"Angular"),r.a.createElement("option",{value:"BDM"},"Business Development & Management"),r.a.createElement("option",{value:"HRM"},"Human Resource Management")),r.a.createElement(d.a,{name:"department",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group form-check"},r.a.createElement(d.b,{type:"checkbox",name:"acceptTandC",className:"form-check-input "+(a.acceptTandC&&t.acceptTandC?" is-invalid":"")}),r.a.createElement("label",{htmlFor:"acceptTandC",className:"form-check-label"},"Accept Terms & Conditions"),r.a.createElement(d.a,{name:"acceptTandC",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group ".concat(N.a.Button," mx-auto py-5")},r.a.createElement("input",{type:"submit",value:"Submit"}),r.a.createElement("input",{type:"reset",value:"Reset"}))))})),r.a.createElement("div",null,this.state.isSubmitting?r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("h1",{className:"text-primary text-center"},"Registered User"),r.a.createElement(g,{results:this.state.data})):null)))}}]),t}(r.a.Component);var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null))};m.a.render(r.a.createElement(w,null),document.getElementById("root"))},68:function(e,a,t){e.exports={Navbar:"FormikAndYup_Navbar__3BIrP",Button:"FormikAndYup_Button__219D9"}},85:function(e,a,t){e.exports=t(100)}},[[85,1,2]]]);
//# sourceMappingURL=main.7343cdd8.chunk.js.map
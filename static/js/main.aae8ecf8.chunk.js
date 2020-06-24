(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(e,a,t){e.exports=t(48)},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),m=t(8),o=t(5),s=t(7),i=t.n(s),u=(t(16),t(35)),E=t(18),p=t(21);var h=function(){return r.a.createElement("div",{className:"px-5 py-4 my-5"},r.a.createElement("h1",{className:"mb-4"},"React Router"),r.a.createElement("h4",{className:"mb-3"},r.a.createElement("b",{className:"text-primary"},"React Router")," is a standard routing library for React. When you need to navigate through a React application with multiple views, you\u2019ll need a router to manage the URLs. React Router takes care of that, keeping your application UI and the URL in sync."),r.a.createElement("h4",{className:"mb-2"},r.a.createElement("b",null,"React")," is a popular library for creating single-page applications that are rendered on the client side"),r.a.createElement("h4",null,"React makes it painless to create interactive UIs."))};var d=function(){return r.a.createElement("div",{className:"px-5 py-4 my-5"},r.a.createElement("h1",{className:"mb-4"},"About React"),r.a.createElement("h4",{className:"mb-4"},r.a.createElement("b",{className:"text-primary"},"React")," is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications"),r.a.createElement("h4",{className:"mb-4"},r.a.createElement("b",{className:"text-primary"},"Routing")," is the process of keeping the browser URL in sync with what\u2019s being rendered on the page. React Router lets you handle routing declaratively. The declarative routing approach allows you to control the data flow in your application"))},y=t(9),b=t(33);var g=function(){return r.a.createElement("div",{className:"px-5 py-5"},r.a.createElement(y.a,null,r.a.createElement(y.a.Group,{controlId:"formBasicName"},r.a.createElement(y.a.Label,null,"Name"),r.a.createElement(y.a.Control,{type:"text",placeholder:"Enter name"})),r.a.createElement(y.a.Group,{controlId:"formBasicEmail"},r.a.createElement(y.a.Label,null,"Email address"),r.a.createElement(y.a.Control,{type:"email",placeholder:"Enter email"}),r.a.createElement(y.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(y.a.Group,{controlId:"formBasicmessage"},r.a.createElement(y.a.Label,null,"Feedback"),r.a.createElement(y.a.Control,{type:"tel",placeholder:"Enter feedback"})),r.a.createElement(y.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(y.a.Check,{type:"checkbox",label:"Check me out"})),r.a.createElement(b.a,{variant:"primary",type:"submit"},"Submit")))},N=[{id:1,title:"User 1",Name:"Kajal",Age:21,DOB:"14 - 03 - 1998",City:"Vapi",State:"Gujarat",Country:"India"},{id:2,title:"User 2",Name:"Amit",Age:29,DOB:"14 - 03 - 1990",City:"Vapi",State:"Gujarat",Country:"India"},{id:3,title:"User 3",Name:"Abhishek",Age:22,DOB:"07 - 04 - 1997",City:"Vadodara",State:"Gujarat",Country:"India"},{id:4,title:"User 4",Name:"Pooja",Age:25,DOB:"18 - 12 - 1994",City:"Junagadh",State:"Gujarat",Country:"India"},{id:5,title:"User 5",Name:"Keshav",Age:35,DOB:"08 - 12 - 1991",City:"Ahmedabad",State:"Gujarat",Country:"India"},{id:6,title:"User 6",Name:"Keshav",Age:35,DOB:"28 - 11 - 1994",City:"Indore",State:"Madhya Pradesh",Country:"India"}];function f(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{className:"mx-auto my-5"},r.a.createElement("h1",{className:"".concat(i.a.Title," mb-3")},e.user.title),r.a.createElement("h5",null,"Name: ",e.user.Name),r.a.createElement("h5",null,"Age: ",e.user.Age),r.a.createElement("h5",null,"DOB: ",e.user.DOB),r.a.createElement("h5",null,"City: ",e.user.City),r.a.createElement("h5",null,"State: ",e.user.State),r.a.createElement("h5",null,"Country: ",e.user.Country)))}function R(){return r.a.createElement(r.a.Fragment,null,N.map((function(e){return r.a.createElement(f,{user:e,key:e.id})})))}function v(){return r.a.createElement("div",null,r.a.createElement("h3",{className:"text-success"},"Child Routing"),r.a.createElement("p",null,"The useRouteMatch hook attempts to match the current URL in the same way that a Route would. It\u2019s mostly useful for getting access to the match data without actually rendering a Route."),r.a.createElement("p",null,"The useLocation hook returns the location object that represents the current URL. You can think about it like a useState that returns a new location whenever the URL changes."))}function k(){var e=Object(o.g)().params;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pt-5"},void 0===e?r.a.createElement("h4",{className:"text-danger"},"You should pass user detail to be searched as parameter"):r.a.createElement("h4",null,"Displaying user info with parameter:"," ",r.a.createElement("b",{className:"text-success"},e))," "),N.filter((function(a){return a.Name===e||JSON.stringify(a.id)===e||a.City===e})).map((function(e){return r.a.createElement(f,{user:e,key:e.id})})))}function C(){var e=Object(o.h)(),a=e.path,t=e.url;return r.a.createElement("div",{className:"py-5"},r.a.createElement("h1",{className:"text-primary"},"Search users Details"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"".concat(t,"/documentation"),className:"".concat(i.a.Link)},"Documentation")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"".concat(t,"/get-users-by-id"),className:"".concat(i.a.Link)},"Get Users Info Based On Id")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"".concat(t,"/get-users-by-name"),className:"".concat(i.a.Link)},"Get Users Info Based On Name")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"".concat(t,"/get-users-by-city"),className:"".concat(i.a.Link)},"Get Users Info Based On City"))),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"".concat(a,"/documentation")},r.a.createElement(v,null)),r.a.createElement(o.a,{path:"".concat(a,"/get-users-by-id/:params?")},r.a.createElement(k,null)),r.a.createElement(o.a,{path:"".concat(a,"/get-users-by-name/:params?")},r.a.createElement(k,null)),r.a.createElement(o.a,{path:"".concat(a,"/get-users-by-city/:params?")},r.a.createElement(k,null)),r.a.createElement(o.a,{path:"".concat(a)},r.a.createElement("h1",null,"Please choose a topic"))))}var _=t(36);var x=function(){var e=new URLSearchParams(Object(o.f)().search),a=Object(_.a)(e.entries()).map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("h4",null,"You are visiting the page with"," ",r.a.createElement("b",{className:"text-primary"},e[0],"=",e[1])))}));return r.a.createElement("div",{className:"py-5"},r.a.createElement("h1",{className:"text-success"},"Query Parameters"),r.a.createElement("ul",null,a))};function L(){return r.a.createElement(E.a,{collapseOnSelect:!0,expand:"lg",fixed:"top",className:"p-4 mb-5 ".concat(i.a.Navbar)},r.a.createElement(E.a.Brand,{className:"".concat(i.a.Brand," font-weight-bolder text-light")},r.a.createElement("h1",null,"React-Routing")),r.a.createElement(E.a.Toggle,{"aria-controls":"responsive-navbar-nav",className:"bg-light"}),r.a.createElement(E.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(u.a,{className:"ml-auto font-weight-bold"},r.a.createElement(m.b,{to:"/",className:"".concat(i.a.Link," m-3")},"Home"),r.a.createElement(m.b,{to:"/about-us",className:"".concat(i.a.Link," m-3")},"About Us"),r.a.createElement(m.b,{to:"/contact-us",className:"".concat(i.a.Link," m-3")},"Contact Us"),r.a.createElement(m.b,{to:"/get-info",className:"".concat(i.a.Link," m-3")},"Get Info"),r.a.createElement(m.b,{to:"/get-info-by-params",className:"".concat(i.a.Link," m-3")},"Get Info(params)"),r.a.createElement(m.b,{to:"/query-param",className:"".concat(i.a.Link," m-3")},"Query Params"))))}function I(){return Object(n.useEffect)((function(){return document.title="Day-10-routing"})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"".concat(i.a.Footer," p-4")},r.a.createElement("p",{className:"my-auto"},"Author: Kajal Karmakar",r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:kajal.karmakar@theonetechnologies.co.in"},"kajal.karmakar@theonetechnologies.co.in"))),r.a.createElement("p",{className:"".concat(i.a.Copy," ").concat(i.a.Footer," mb-0")},r.a.createElement("small",null,"Copyright \xa9 2020")))}var w=function(){return r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement("br",null),r.a.createElement(p.a,{className:"mt-5 pt-5 ".concat(i.a.DisplayDetails)},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(h,null)),r.a.createElement(o.a,{path:"/about-us"},r.a.createElement(d,null)),r.a.createElement(o.a,{path:"/contact-us"},r.a.createElement(g,null)),r.a.createElement(o.a,{path:"/get-info"},r.a.createElement(R,null)),r.a.createElement(o.a,{path:"/get-info-by-params"},r.a.createElement(C,null)),r.a.createElement(o.a,{path:"/query-param"},r.a.createElement(x,null)),r.a.createElement(o.a,{path:"*"},r.a.createElement("h1",{className:"text-danger py-5"},"Not Found!!")))),r.a.createElement(I,null)))};var B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null))};c.a.render(r.a.createElement(B,null),document.getElementById("root"))},7:function(e,a,t){e.exports={Navbar:"ReactRouter_Navbar__1iRgr",Brand:"ReactRouter_Brand__37g5e",header:"ReactRouter_header__1iAVC",Active:"ReactRouter_Active__GCVK6",Link:"ReactRouter_Link__13zV0",Footer:"ReactRouter_Footer__2ltHF",Copy:"ReactRouter_Copy__401XK",Title:"ReactRouter_Title__2tbK7",DisplayDetails:"ReactRouter_DisplayDetails__1SbtO"}}},[[37,1,2]]]);
//# sourceMappingURL=main.aae8ecf8.chunk.js.map
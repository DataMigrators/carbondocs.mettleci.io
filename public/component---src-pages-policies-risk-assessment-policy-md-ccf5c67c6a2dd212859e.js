"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[7509],{3624:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(7294),o=n(8650),i=n.n(o),r=n(1597),l=n(4799),s=n(7275),c=n(5900),m=n.n(c),d=function(e){var t,n=e.title,o=e.theme,i=e.tabs,r=void 0===i?[]:i;return a.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===o,t))},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},n)))))},p=function(e){var t=e.relativePagePath,n=e.repository,o=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,i=n||o,l=i.baseUrl,s=i.subDirectory,c=l+"/edit/"+i.branch+s+"/src/pages"+t;return l?a.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"bx--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=n(4703),h=n(1721),k=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,o=e.slug,l=o.split("/").filter(Boolean).slice(-1)[0],s=n.map((function(e){var t,n=i()(e,{lower:!0,strict:!0}),s=n===l,c=new RegExp(l+"/?(#.*)?$"),d=o.replace(c,n);return a.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},a.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},a.createElement("nav",{"aria-label":t},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(a.Component),y=k,g=n(7296),b=n(5387),f=n(3732),v=function(e){var t=e.date,n=new Date(t);return t?a.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(f.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},x=function(e){var t=e.pageContext,n=e.children,o=e.location,c=e.Title,m=t.frontmatter,h=void 0===m?{}:m,k=t.relativePagePath,f=t.titleType,x=h.tabs,E=h.title,P=h.theme,T=h.description,w=h.keywords,N=h.date,A=(0,b.Z)().interiorTheme,L=(0,r.useStaticQuery)("2456312558").site.pathPrefix,D=L?o.pathname.replace(L,""):o.pathname,C=x?D.split("/").filter(Boolean).slice(-1)[0]||i()(x[0],{lower:!0}):"",R=P||A;return a.createElement(s.Z,{tabs:x,homepage:!1,theme:R,pageTitle:E,pageDescription:T,pageKeywords:w,titleType:f},a.createElement(d,{title:c?a.createElement(c,null):E,label:"label",tabs:x,theme:R}),x&&a.createElement(y,{title:E,slug:D,tabs:x,currentTab:C}),a.createElement(g.Z,{padded:!0},n,a.createElement(p,{relativePagePath:k}),a.createElement(v,{date:N})),a.createElement(u.Z,{pageContext:t,location:o,slug:D,tabs:x,currentTab:C}),a.createElement(l.Z,null))}},6087:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return h}});var a=n(3366),o=(n(7294),n(4983)),i=n(3624),r=["components"],l={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},c=s("PageDescription"),m=s("AnchorLinks"),d=s("AnchorLink"),p={_frontmatter:l},u=i.Z;function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)(u,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"PageDescription"},(0,o.kt)("p",null,"This page describes Data Migrators’ policy on risk assessment.")),(0,o.kt)(m,{mdxType:"AnchorLinks"},(0,o.kt)(d,{mdxType:"AnchorLink"},"Overview"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Purpose"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Scope"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Policy"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Policy Compliance"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Exceptions"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Non-compliance"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Related Documents"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Definitions and Terms")),(0,o.kt)("h2",null,"Overview"),(0,o.kt)("p",null,"See Purpose."),(0,o.kt)("h2",null,"Purpose"),(0,o.kt)("p",null,"To empower Infosec to perform periodic information security risk\nassessments (RAs) for the purpose of determining areas of vulnerability,\nand to initiate appropriate remediation."),(0,o.kt)("h2",null,"Scope"),(0,o.kt)("p",null,"Risk assessments can be conducted on any entity within Data Migrators\nor any outside entity that has signed a ",(0,o.kt)("em",{parentName:"p"},"Third Party Agreement")," with\nData Migrators. RAs can be conducted on any information system, to\ninclude applications, servers, and networks, and any process or\nprocedure by which these systems are administered and/or maintained."),(0,o.kt)("h2",null,"Policy"),(0,o.kt)("p",null,"The execution, development and implementation of remediation programs is\nthe joint responsibility of Infosec and the department responsible for\nthe system area being assessed. Employees are expected to cooperate\nfully with any RA being conducted on systems for which they are held\naccountable. Employees are further expected to work with the Infosec\nRisk Assessment Team in the development of a remediation plan."),(0,o.kt)("p",null,"For additional information, go to the ",(0,o.kt)("em",{parentName:"p"},"Risk Assessment Process"),"."),(0,o.kt)("h2",null,"Policy Compliance"),(0,o.kt)("h3",null,"Compliance Measurement"),(0,o.kt)("p",null,"The Infosec team will verify compliance to this policy through various\nmethods, including but not limited to, business tool reports, internal\nand external audits, and feedback to the policy owner."),(0,o.kt)("h2",null,"Exceptions"),(0,o.kt)("p",null,"Any exception to the policy must be approved by the Infosec team in\nadvance."),(0,o.kt)("h2",null,"Non-Compliance"),(0,o.kt)("p",null,"An employee found to have violated this policy may be subject to\ndisciplinary action, up to and including termination of employment."),(0,o.kt)("h2",null,"Related Documents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Risk Assessment Process")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Third Party Agreement"))),(0,o.kt)("h2",null,"Definitions and Terms"),(0,o.kt)("p",null,"None."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-policies-risk-assessment-policy-md-ccf5c67c6a2dd212859e.js.map
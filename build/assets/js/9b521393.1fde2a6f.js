"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[561],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=m(a),k=r,h=u["".concat(p,".").concat(k)]||u[k]||d[k]||l;return a?n.createElement(h,o(o({ref:e},s),{},{components:a})):n.createElement(h,o({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9714:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={},p="FIBOCOM NL668 AT Commands User Manual HTTP",m={unversionedId:"NL668/AT Commands HTTP",id:"NL668/AT Commands HTTP",title:"FIBOCOM NL668 AT Commands User Manual HTTP",description:"Version 2020-03-11",source:"@site/docs/NL668/AT Commands HTTP.md",sourceDirName:"NL668",slug:"/NL668/AT Commands HTTP",permalink:"/fibocom_docs2/docs/NL668/AT Commands HTTP",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/NL668/AT Commands HTTP.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FG150 document example",permalink:"/fibocom_docs2/docs/FG150/fg_example"},next:{title:"FIBOCOM NL668-LA Series Hardware Guide",permalink:"/fibocom_docs2/docs/NL668/NL668-LA Series Hardware Guide"}},s=[{value:"<strong>Copyright</strong>",id:"copyright",children:[],level:3},{value:"<strong>Attention</strong>",id:"attention",children:[],level:3},{value:"<strong>Trademark</strong>",id:"trademark",children:[],level:3},{value:"<strong>Versions</strong>",id:"versions",children:[],level:3},{value:"<strong>Applicability Type</strong>",id:"applicability-type",children:[],level:3},{value:"<strong>Contents</strong>",id:"contents",children:[],level:2},{value:"<strong>1.1 +HTTPSET, Set HTTP or HTTPS parameters</strong>",id:"11-httpset-set-http-or-https-parameters",children:[{value:"<strong>1.1.1 Description</strong>",id:"111-description",children:[],level:3},{value:"<strong>1.1.2. Syntax</strong>",id:"112-syntax",children:[],level:3},{value:"<strong>1.1.3. Attributes</strong>",id:"113-attributes",children:[],level:3},{value:"<strong>1.1.4. Defined Values</strong>",id:"114-defined-values",children:[],level:3}],level:2},{value:"<strong>1.2 +HTTPDATA, send POST data to modem</strong>",id:"12-httpdata-send-post-data-to-modem",children:[{value:"<strong>1.2.1 Description</strong>",id:"121-description",children:[],level:3},{value:"<strong>1.2.2. Syntax</strong>",id:"122-syntax",children:[],level:3},{value:"<strong>1.2.3. Attributes</strong>",id:"123-attributes",children:[],level:3},{value:"<strong>1.2.4. Defined Values</strong>",id:"124-defined-values",children:[],level:3}],level:2},{value:"<strong>1.3 +HTTPACT, start HTTP or HTTPS service</strong>",id:"13-httpact-start-http-or-https-service",children:[],level:2},{value:"<strong>1.3.1 Description</strong>",id:"131-description",children:[],level:2}],d={toc:s};function u(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"fibocom-nl668-at-commands-user-manual-http"},"FIBOCOM NL668 AT Commands User Manual HTTP"),(0,l.kt)("p",null,"Version: V1.2.3 Date: 2020-03-11 "),(0,l.kt)("h3",{id:"copyright"},(0,l.kt)("strong",{parentName:"h3"},"Copyright")),(0,l.kt)("p",null,"Copyright \xa92020 Fibocom Wireless Inc . All rights reserved. "),(0,l.kt)("p",null,"Without the prior written permission of the copyright holder, any company or individual is prohibited to excerpt, copy any part of or the entire document, or transmit the document in any form. "),(0,l.kt)("h3",{id:"attention"},(0,l.kt)("strong",{parentName:"h3"},"Attention")),(0,l.kt)("p",null,"The document is subject to update from time to time owing to the product version upgrade or other reasons. Unless otherwise specified, the document only serves as the user guide. All the statements, information  and  suggestions  contained  in  the  document  do  not  constitute  any  explicit  or  implicit guarantee. "),(0,l.kt)("h3",{id:"trademark"},(0,l.kt)("strong",{parentName:"h3"},"Trademark")),(0,l.kt)("p",null,"The trademark is registered and owned by Fibocom Wireless Inc. "),(0,l.kt)("h3",{id:"versions"},(0,l.kt)("strong",{parentName:"h3"},"Versions")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Version")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Date")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Remarks")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V1.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-12-05"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V1.0.1"),(0,l.kt)("td",{parentName:"tr",align:null},"2017-03-09"),(0,l.kt)("td",{parentName:"tr",align:null},"Declare that https is not support; Delete ERR","_","CODE chapter;")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V1.0.2"),(0,l.kt)("td",{parentName:"tr",align:null},"2017-08-22"),(0,l.kt)("td",{parentName:"tr",align:null},"Change to new template")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V1.0.3"),(0,l.kt)("td",{parentName:"tr",align:null},"2018-04-21"),(0,l.kt)("td",{parentName:"tr",align:null},"Add NL668 serial")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V1.0.4"),(0,l.kt)("td",{parentName:"tr",align:null},"2018-11-13"),(0,l.kt)("td",{parentName:"tr",align:null},"Add NL668-AM serial and NL668-EU serial")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V1.0.5"),(0,l.kt)("td",{parentName:"tr",align:null},"2018-12-04"),(0,l.kt)("td",{parentName:"tr",align:null},"Add +HTTPHEAD command")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V1.0.6"),(0,l.kt)("td",{parentName:"tr",align:null},"2018-12-15"),(0,l.kt)("td",{parentName:"tr",align:null},"Modify +HTTPSET cmommad")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V1.0.7"),(0,l.kt)("td",{parentName:"tr",align:null},"2018-12-26"),(0,l.kt)("td",{parentName:"tr",align:null},"Add AT example")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V1.0.8"),(0,l.kt)("td",{parentName:"tr",align:null},"2019-04-17"),(0,l.kt)("td",{parentName:"tr",align:null},"List all the specific application types")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V1.2.1"),(0,l.kt)("td",{parentName:"tr",align:null},"2019-05-30"),(0,l.kt)("td",{parentName:"tr",align:null},"Add Note for +HTTPREAD command")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V1.2.2"),(0,l.kt)("td",{parentName:"tr",align:null},"2019-10-14"),(0,l.kt)("td",{parentName:"tr",align:null},"Add NL668-CN-10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V1.2.3"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-03-11"),(0,l.kt)("td",{parentName:"tr",align:null},"Add NL668-CN-05")))),(0,l.kt)("h3",{id:"applicability-type"},(0,l.kt)("strong",{parentName:"h3"},"Applicability Type")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"No.")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Note")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"NL668-CN-00/01/02/03/04/10/05"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"NL668-EAU-00"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"NL668-EU-00/01/03"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"NL668-AM-00/01"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"NL668-JP-00/01"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"NL668-LA-00"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"NL661-EU-00"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")))),(0,l.kt)("h2",{id:"contents"},(0,l.kt)("strong",{parentName:"h2"},"Contents")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#1--http-commands"},(0,l.kt)("strong",{parentName:"a"},"1  HTTP Commands")," ")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#"},"+HTTPSET, Set HTTP or HTTPS parameters")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#_page6_x52.00_y132.04"},"+HTTPDATA, send POST data to modem")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#_page7_x81.00_y72.04"},"+HTTPACT, start HTTP or HTTPS service")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#_page8_x81.00_y152.04"},"+HTTPREAD, Read data")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#_page9_x81.00_y256.04"},"+HTTPHEAD, Set HTTP or HTTPS header parameters"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#_page11_x52.00_y72.04"},(0,l.kt)("strong",{parentName:"a"},"2  HTTP(S) Example"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#_page11_x81.00_y100.04"},"+HTTPSET ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#_page11_x81.00_y417.04"},"+HTTPDATA")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#_page11_x81.00_y555.04"},"+HTTPACT")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#_page12_x81.00_y292.04"},"+HTTPREAD")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#_page14_x81.00_y252.04"},"+HTTPHEAD"))),(0,l.kt)("h1",{id:"1--http-commands"},(0,l.kt)("strong",{parentName:"h1"},"1.  HTTP Commands")),(0,l.kt)("h2",{id:"11-httpset-set-http-or-https-parameters"},(0,l.kt)("strong",{parentName:"h2"},"1.1 +HTTPSET, Set HTTP or HTTPS parameters")),(0,l.kt)("h3",{id:"111-description"},(0,l.kt)("strong",{parentName:"h3"},"1.1.1 Description")),(0,l.kt)("p",null,"This command is used to set service type of HTTP or HTTPS. "),(0,l.kt)("h3",{id:"112-syntax"},(0,l.kt)("strong",{parentName:"h3"},"1.1.2. Syntax")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Command")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Response")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'+HTTPSET=<"httpParam">,<"httpParamValue">'),(0,l.kt)("td",{parentName:"tr",align:null},"OK ",(0,l.kt)("br",null),"or:  ERROR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+HTTPSET?"),(0,l.kt)("td",{parentName:"tr",align:null},'+HTTPSET: "httpParam","httpParamValue"',(0,l.kt)("br",null),'+HTTPSET: "httpParam","httpParamValue"',(0,l.kt)("br",null)," \u2026 ",(0,l.kt)("br",null),"OK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+HTTPSET=?"),(0,l.kt)("td",{parentName:"tr",align:null},'+HTTPSET: (<"httpParam">),(<"httpParamValue">) OK')))),(0,l.kt)("h3",{id:"113-attributes"},(0,l.kt)("strong",{parentName:"h3"},"1.1.3. Attributes")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Pin Restricted")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Persistent")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Sync Mode")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Effect Immediately")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Time of duration")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"- 1s")))),(0,l.kt)("h3",{id:"114-defined-values"},(0,l.kt)("strong",{parentName:"h3"},"1.1.4. Defined Values")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"httpParam")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"httpParamValue")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"URL"),(0,l.kt)("td",{parentName:"tr",align:null},"http server address\uff0ccharacter string type\uff0cstring length is 0-255, the string format must be any kind of the following\uff1a",(0,l.kt)("br",null),"For HTTP ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"http://host/path:port"},"http://host/path:port "),"e.g.",(0,l.kt)("a",{parentName:"td",href:"http://news.sohu.com/20131010/n387881216.shtml:80"},"http://news.sohu.com/20131010/n387881216.shtml:80")," ",(0,l.kt)("br",null),"host/path:port       e.g.  news.sohu.com/20131010/n387881216.shtml:80",(0,l.kt)("br",null),"http://host/path   e.g.",(0,l.kt)("a",{parentName:"td",href:"http://news.sohu.com/20131010/n387881216.shtml"},"http://news.sohu.com/20131010/n387881216.shtml")," ",(0,l.kt)("br",null),"For HTTPS ",(0,l.kt)("br",null),"https://host:port    e.g. https:// ",(0,l.kt)("a",{parentName:"td",href:"http://www.googleapis.com:443"},"www.googleapis.com:443")," ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://hoste.g."},"https://hoste.g.")," https:// ",(0,l.kt)("a",{parentName:"td",href:"http://www.googleapis.com"},"www.googleapis.com")," ",(0,l.kt)("br",null),"Notes\uff1a",(0,l.kt)("br",null),"Host  ---  http or https host name or host IP address ",(0,l.kt)("br",null),"Path  ---  the file path requested by http or https ",(0,l.kt)("br",null),"Port  --- http or https port , optional setting. The default number for http is 80, and 443 for https.",(0,l.kt)("br",null),"Note:",(0,l.kt)("br",null),"No matter http or https, it requires the port in the end of URL string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UAGENT"),(0,l.kt)("td",{parentName:"tr",align:null},"User-Agent Value, character string type, optional settings.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONTYPE"),(0,l.kt)("td",{parentName:"tr",align:null},"Content-Type Value, character string type, optional settings.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACCEPT"),(0,l.kt)("td",{parentName:"tr",align:null},"Accept Value, character string type, optional settings.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RESPONSEHEADER"),(0,l.kt)("td",{parentName:"tr",align:null},'Response Header Value, character string type, optional settings, the default value is "0", it means HTTP head information is showed in AT+HTTPREAD output.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MODE"),(0,l.kt)("td",{parentName:"tr",align:null},'Read mode Value, character string type, optional settings, the default value is "0".',(0,l.kt)("br",null),'When the value is "1", the received data will be sent to UART since connection built up. AT+HTTPREAD execution can read continuous data until the end of receiving.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REDIR"),(0,l.kt)("td",{parentName:"tr",align:null},'Redirect Value, character string type, option settings, the default value is "0". When the value is "1", and the module receives 3XX or 500 and other return codes from server, it will redirect to the new URL automatically.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RANGE"),(0,l.kt)("td",{parentName:"tr",align:null},'Content-Range value, character string type, optional settings, the default value is NULL. Enter each time you use it in accordance with the protocol standard format, such as "bytes=0-12". Receives 206 for success. Overwrite the last record each time it is used. If you don\'t want to use RANGE, you can assign it to NULL. Post does not apply.')))),(0,l.kt)("p",null,"The document is subject to update from time to time owing to the product version upgrade or other reasons. Unless otherwise specified, the document only serves as the user guide. All the statements, information  and  suggestions  contained  in  the  document  do  not  constitute  any  explicit  or  implicit guarantee.\n",(0,l.kt)("strong",{parentName:"p"},"\u26a0 Note :")," "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The value of ","<","httpParam> is only support capital letter. ")),(0,l.kt)("h2",{id:"12-httpdata-send-post-data-to-modem"},(0,l.kt)("strong",{parentName:"h2"},"1.2 +HTTPDATA, send POST data to modem")),(0,l.kt)("h3",{id:"121-description"},(0,l.kt)("strong",{parentName:"h3"},"1.2.1 Description")),(0,l.kt)("p",null,"This command is used to send data to the module via UART for HTTPPOST procedure. "),(0,l.kt)("h3",{id:"122-syntax"},(0,l.kt)("strong",{parentName:"h3"},"1.2.2. Syntax")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Command")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Response")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+HTTPDATA= ","<","length>"),(0,l.kt)("td",{parentName:"tr",align:null},">",(0,l.kt)("br",null),"\u2026\u2026",(0,l.kt)("br",null),"OK",(0,l.kt)("br",null),"or:  ERROR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+HTTPDATA?"),(0,l.kt)("td",{parentName:"tr",align:null},"OK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+HTTPDATA=?"),(0,l.kt)("td",{parentName:"tr",align:null},"+HTTPDATA: (list of supported ","<","length>s) OK")))),(0,l.kt)("h3",{id:"123-attributes"},(0,l.kt)("strong",{parentName:"h3"},"1.2.3. Attributes")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Pin Restricted")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Persistent")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Sync Mode")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Effect Immediately")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Time of duration")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"- 1s")))),(0,l.kt)("h3",{id:"124-defined-values"},(0,l.kt)("strong",{parentName:"h3"},"1.2.4. Defined Values")),(0,l.kt)("p",null,"<","length>: integer type;length of the data will be input. Range 1-64000 byte. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u26a0 Note")," :  "),(0,l.kt)("p",null,"When the received data length reaches to the given size, the module exits from data mode and responses OK. "),(0,l.kt)("p",null,"The time out of data input is 30 seconds, then the module exits from data mode and response ERROR"),(0,l.kt)("h2",{id:"13-httpact-start-http-or-https-service"},(0,l.kt)("strong",{parentName:"h2"},"1.3 +HTTPACT, start HTTP or HTTPS service")),(0,l.kt)("h2",{id:"131-description"},(0,l.kt)("strong",{parentName:"h2"},"1.3.1 Description")),(0,l.kt)("p",null,"This command used to start HTTP or HTTPS connect (GET or POST)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Command")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Response")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+HTTPACT=","<","mode>","[,","<","timernum>]"),(0,l.kt)("td",{parentName:"tr",align:null},"OK ",(0,l.kt)("br",null),"or:",(0,l.kt)("br",null),"ERROR:")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+HTTPACT?"),(0,l.kt)("td",{parentName:"tr",align:null},"OK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+HTTPACT=?"),(0,l.kt)("td",{parentName:"tr",align:null},"+HTTPACT: (list of supported ","<","mode>s) ","[, list of supported ","<","timernum>s]"," ",(0,l.kt)("br",null),"OK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"URC"),(0,l.kt)("td",{parentName:"tr",align:null},"+HTTP: ","<","status> ",(0,l.kt)("br",null),"+HTTPS: ","<","status>")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"URC"),(0,l.kt)("td",{parentName:"tr",align:null},"+HTTPRES: ","<","mode>,","<","reply>,","<","length>")))))}u.isMDXComponent=!0}}]);
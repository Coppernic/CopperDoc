"use strict";(self.webpackChunkcopper_docusaurus=self.webpackChunkcopper_docusaurus||[]).push([[4893],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4430:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},p="Technical note about E-MMC change on C-One devices (V1)",c={unversionedId:"product/technical_C-one_emmc",id:"product/technical_C-one_emmc",isDocsHomePage:!1,title:"Technical note about E-MMC change on C-One devices (V1)",description:"e-MMC change (Flash MEMORY)",source:"@site/docs/product/technical_C-one_emmc.md",sourceDirName:"product",slug:"/product/technical_C-one_emmc",permalink:"/CopperDoc/docs/product/technical_C-one_emmc",editUrl:"https://github.com/Coppernic/coppernic.github.io/docs/product/technical_C-one_emmc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PC/SC",permalink:"/CopperDoc/docs/product/pcsc"},next:{title:"Agrident Wedge",permalink:"/CopperDoc/docs/app/agrident_wedge"}},u=[{value:"e-MMC change (Flash MEMORY)",id:"e-mmc-change-flash-memory",children:[]},{value:"Operating System",id:"operating-system",children:[]},{value:"Current leakage on serial communication",id:"current-leakage-on-serial-communication",children:[]},{value:"Summary",id:"summary",children:[{value:"E-MMC",id:"e-mmc",children:[]},{value:"Current Leakage",id:"current-leakage",children:[]}]}],m={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"technical-note-about-e-mmc-change-on-c-one-devices-v1"},"Technical note about E-MMC change on C-One devices (V1)"),(0,l.kt)("h2",{id:"e-mmc-change-flash-memory"},"e-MMC change (Flash MEMORY)"),(0,l.kt)("p",null,"Due to end of life of the internal flash memory(e-MMC) of the C-One, this memory was replaced in 2018."),(0,l.kt)("p",null,"This change was done between serial number ",(0,l.kt)("strong",{parentName:"p"},"E18BG007595")," and ",(0,l.kt)("strong",{parentName:"p"},"E18BG008068"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"All C-One with serial number older than ",(0,l.kt)("strong",{parentName:"li"},"E18BG007595")," use and old memory Flash version 1 (eMMC-v1)"),(0,l.kt)("li",{parentName:"ul"},"All C-One with serial number newer to ",(0,l.kt)("strong",{parentName:"li"},"E18BG008068")," use new memory Flash version 2 (eMMC-v2)"),(0,l.kt)("li",{parentName:"ul"},"Between these serial number, we do not know which version has been installed.")),(0,l.kt)("h2",{id:"operating-system"},"Operating System"),(0,l.kt)("p",null,"C-One\u2019s Operating System (OS) has also been changed to support both eMMC version."),(0,l.kt)("p",null,"OS versions newer or equal to"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Jelly Bean\xa0: ",(0,l.kt)("strong",{parentName:"li"},"20171013")),(0,l.kt)("li",{parentName:"ul"},"KitKat\xa0: ",(0,l.kt)("strong",{parentName:"li"},"20180712"))),(0,l.kt)("p",null,"are supporting both eMMC version."),(0,l.kt)("p",null,"Older OS version does not work with eMMC-V2."),(0,l.kt)("p",null,"It is strongly recommended to validate OS version which support both versions. We do not have any more motherboard in stock with eMMC-V1."),(0,l.kt)("p",null,"Please contact ",(0,l.kt)("a",{parentName:"p",href:"https://support.coppernic.fr/index.php"},"support")," if you have any problem with this flash memory change."),(0,l.kt)("h2",{id:"current-leakage-on-serial-communication"},"Current leakage on serial communication"),(0,l.kt)("p",null,"We have also corrected a current leakage from OS newer and equal to"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Jelly Bean: ",(0,l.kt)("strong",{parentName:"li"},"20180706")),(0,l.kt)("li",{parentName:"ul"},"KitKat: ",(0,l.kt)("strong",{parentName:"li"},"20180712"))),(0,l.kt)("p",null,"In order to correct it, we need to enable the serial connection (",(0,l.kt)("inlineCode",{parentName:"p"},"EXTERNAL_UART_MODE"),") before communicating with serial reader (ASK) connected on the C-One.\nThis modification has been applied from library ",(0,l.kt)("inlineCode",{parentName:"p"},"CpcCore 1.8.2")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"CpcAsk 3.2.1"),".\nYou will need to update these libraries with new OS to make your application working.\nYou will also need to update ",(0,l.kt)("inlineCode",{parentName:"p"},"CpcSystemServices")," to at least ",(0,l.kt)("inlineCode",{parentName:"p"},"v3.3.1"),"."),(0,l.kt)("p",null,"For Jelly Bean, using OS ",(0,l.kt)("strong",{parentName:"p"},"20171013")," will allow using old software and use new eMMC version."),(0,l.kt)("p",null,"For Kitkat, you will have no other choice that updating your libraries in your application."),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("h3",{id:"e-mmc"},"E-MMC"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Before E18BG007595"),(0,l.kt)("th",{parentName:"tr",align:null},"E18BG007595 <-> 8068"),(0,l.kt)("th",{parentName:"tr",align:null},"After E18BG008068"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Version eMMC"),(0,l.kt)("td",{parentName:"tr",align:null},"\xa0eMMC-V1\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"?"),(0,l.kt)("td",{parentName:"tr",align:null},"eMMC-V2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Version OS JB"),(0,l.kt)("td",{parentName:"tr",align:null},"\xa0All versions\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"20171013")," and after, do not use older versions"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"20171013")," and after, do not use older versions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Version OS KK"),(0,l.kt)("td",{parentName:"tr",align:null},"\xa0All versions\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"20180712")," and after, do not use older versions"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"20180712")," and after, do not use older versions")))),(0,l.kt)("h3",{id:"current-leakage"},"Current Leakage"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"JB 20171013"),(0,l.kt)("th",{parentName:"tr",align:null},"JB 20180706 and newer"),(0,l.kt)("th",{parentName:"tr",align:null},"KK 20180712 and newer"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CpcCore < ",(0,l.kt)("inlineCode",{parentName:"td"},"1.8.2"),", CpcAsk < ",(0,l.kt)("inlineCode",{parentName:"td"},"3.2.1"),", CpcSystemServices < ",(0,l.kt)("inlineCode",{parentName:"td"},"3.3.1")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CpcCore >= ",(0,l.kt)("inlineCode",{parentName:"td"},"1.8.2"),", CpcAsk >= ",(0,l.kt)("inlineCode",{parentName:"td"},"3.2.1"),", CpcSystemServices >= ",(0,l.kt)("inlineCode",{parentName:"td"},"3.3.1")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);
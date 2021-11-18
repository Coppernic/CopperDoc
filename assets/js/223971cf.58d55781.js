"use strict";(self.webpackChunkcopper_docusaurus=self.webpackChunkcopper_docusaurus||[]).push([[6778],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return f}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return n?t.createElement(m,i(i({ref:r},u),{},{components:n})):t.createElement(m,i({ref:r},u))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6282:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},p="Power",c={unversionedId:"sdk/core/power",id:"sdk/core/power",isDocsHomePage:!1,title:"Power",description:"Setup",source:"@site/docs/sdk/core/power.md",sourceDirName:"sdk/core",slug:"/sdk/core/power",permalink:"/CopperDoc/docs/sdk/core/power",editUrl:"https://github.com/Coppernic/coppernic.github.io/docs/sdk/core/power.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Key Mapping",permalink:"/CopperDoc/docs/sdk/core/mapping"},next:{title:"Serial communication",permalink:"/CopperDoc/docs/sdk/core/serial"}},u=[{value:"Setup",id:"setup",children:[]},{value:"More information",id:"more-information",children:[]}],s={toc:u};function d(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"power"},"Power"),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a power listener:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"private final PowerListener powerListener = new PowerListener() {\n    @Override\n    public void onPowerUp(RESULT res, Peripheral peripheral) {\n        if (res == RESULT.OK) {\n            //Peripheral is on\n        } else {\n            //Peripehral power status is undefined\n        }\n    }\n\n    @Override\n    public void onPowerDown(RESULT res, Peripheral peripheral) {\n        //Peripehral is off\n    }\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Register the listener:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Override\nprotected void onCreate(Bundle savedInstanceState) {\n    PowerManager.get().registerListener(powerListener);\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select a peripheral according to device and power it on:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"if (OsHelper.isCone()) {\n    peripheral = ConePeripheral.FP_IB_COLOMBO_USB;\n    //Could be any other enum value corresponding to your device\n} else if (OsHelper.isIdPlatform()) {\n    peripheral = IdPlatformPeripheral.FINGERPRINT;\n    //Could be any other enum value corresponding to your device\n}\n\nperipheral.on(context);\n//The the listener will be called with the result\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Power off when you are done:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"peripheral.off(context);\n//The the listener will be called with the result\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Release resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Override\nprotected void onDestroy() {\n    PowerManager.get().unregisterAll();\n    PowerManager.get().releaseResources();\n    super.onDestroy();\n}\n")),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On C-One, C-One\xb2 and their e-ID counterpart, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"MASTER_ASKEY_CONE_GPIO")," to power off all devices at the same time.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On C-One\xb2 and C-One\xb2 e-ID, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"USB_HOST_ASKEY_CONE_GPIO.off(context)")," to force USB being device. This allows C-One\xb2 to be powered by USB. Please use ",(0,a.kt)("inlineCode",{parentName:"p"},"CpcCore")," at version 1.8.16 for this."))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={title:"Windows Uninstall"},o="Windows Uninstall",i={unversionedId:"install/windows_uninstall",id:"install/windows_uninstall",title:"Windows Uninstall",description:"Note:  Uninstalling the RKE2 Windows Agent deletes all of the node data.",source:"@site/docs/install/windows_uninstall.md",sourceDirName:"install",slug:"/install/windows_uninstall",permalink:"/install/windows_uninstall",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/windows_uninstall.md",tags:[],version:"current",lastUpdatedAt:1670002649,formattedLastUpdatedAt:"Dec 2, 2022",frontMatter:{title:"Windows Uninstall"},sidebar:"mySidebar",previous:{title:"Linux Uninstall",permalink:"/install/linux_uninstall"},next:{title:"Overview",permalink:"/upgrade/"}},s={},c=[{value:"Tarball Method",id:"tarball-method",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"windows-uninstall"},"Windows Uninstall"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:"),"  Uninstalling the RKE2 Windows Agent deletes all of the node data.")),(0,l.kt)("p",null,"Depending on the method used to install RKE2, the uninstallation process varies."),(0,l.kt)("h2",{id:"tarball-method"},"Tarball Method"),(0,l.kt)("p",null,"To uninstall the RKE2 Windows Agent installed via the tarball method from your system, simply run the command below. This will shutdown all RKE2 Windows processes, remove the RKE2 Windows binary, and clean up the files used by RKE2."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"c:/usr/local/bin/rke2-uninstall.ps1\n")))}d.isMDXComponent=!0}}]);
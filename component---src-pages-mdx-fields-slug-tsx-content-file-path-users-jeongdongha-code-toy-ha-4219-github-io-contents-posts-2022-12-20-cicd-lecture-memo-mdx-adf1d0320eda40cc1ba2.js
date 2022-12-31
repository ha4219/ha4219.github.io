"use strict";(self.webpackChunkha4219_github_io=self.webpackChunkha4219_github_io||[]).push([[803],{6554:function(e,l,n){n.r(l),n.d(l,{PostTemplate:function(){return m},default:function(){return o}});var t=n(1151),r=n(7294);function c(e){const l=Object.assign({h1:"h1",ul:"ul",li:"li",code:"code",pre:"pre"},(0,t.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(l.h1,null,"CI/CD"),"\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,"git-flow"),"\n",r.createElement(l.li,null,"docker","\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,"Namespace","\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,"pid"),"\n",r.createElement(l.li,null,"network"),"\n",r.createElement(l.li,null,"IPC"),"\n",r.createElement(l.li,null,"Mount"),"\n",r.createElement(l.li,null,"UNIX Time-sharing"),"\n"),"\n"),"\n",r.createElement(l.li,null,"CGroup","\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,"cpu"),"\n",r.createElement(l.li,null,"memory"),"\n",r.createElement(l.li,null,"block I/O"),"\n",r.createElement(l.li,null,"network"),"\n"),"\n"),"\n",r.createElement(l.li,null,"union file system"),"\n",r.createElement(l.li,null,r.createElement(l.code,null,"-it"),"\nFor interactive processes (like a shell), you must use ",r.createElement(l.code,null,"-i -t")," together in order to allocate a tty for the container process. ",r.createElement(l.code,null,"-i -t")," is often written ",r.createElement(l.code,null,"-it")," as you’ll see in later examples. Specifying ",r.createElement(l.code,null,"-t")," is forbidden when the client is receiving its standard input from a pipe, as in:","\n",r.createElement(l.pre,null,r.createElement(l.code,{className:"language-bash"},"echo test | docker run -i busybox cat\n")),"\n"),"\n"),"\n"),"\n",r.createElement(l.li,null,"docker file 작성","\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,"CMD & ENTRYPOINT"),"\n"),"\n"),"\n",r.createElement(l.li,null,"linux","\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,r.createElement(l.code,null,"tail -f")," : tail follow"),"\n",r.createElement(l.li,null,r.createElement(l.code,null,"history")," → ",r.createElement(l.code,null,"!{number}")),"\n",r.createElement(l.li,null,"layered file system","\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,r.createElement(l.code,null,"from ubuntu18")),"\n"),"\n"),"\n",r.createElement(l.li,null,"history 남기지 않기","\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,r.createElement(l.code,null,"공백")," command"),"\n"),"\n"),"\n"),"\n"),"\n",r.createElement(l.li,null,"python","\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,r.createElement(l.code,null,"fire"),"\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,"support CLI"),"\n"),"\n"),"\n"),"\n"),"\n",r.createElement(l.li,null,"Jenkins","\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,"kubernetes","\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,"argo cd"),"\n"),"\n"),"\n",r.createElement(l.li,null,"RBAC","\n",r.createElement(l.ul,null,"\n",r.createElement(l.li,null,"roll based access control"),"\n"),"\n"),"\n"),"\n"),"\n"))}var a=function(e){void 0===e&&(e={});const{wrapper:l}=Object.assign({},(0,t.ah)(),e.components);return l?r.createElement(l,e,r.createElement(c,e)):c(e)},u=n(2968),i=n(3653);const m=e=>{let{data:l,children:n}=e;const{0:c,1:a}=(0,r.useState)(null),{siteUrl:m}=l.site.siteMetadata,{slug:o}=l.mdx.fields;return(0,r.useEffect)((()=>{if(!m||!o)return;const e=m.replace(/(^\w+:|^)\/\//,""),l=o.replace(/\//g,"");fetch("https://api.countapi.xyz/hit/"+e+"/"+l).then((e=>e.json())).then((e=>{let{value:l}=e;return a(l)})).catch((()=>a(0)))}),[m,o]),r.createElement(u.Z,null,c,r.createElement(t.Zo,{components:i.Z},n))};function o(e){return r.createElement(m,e,r.createElement(a,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-users-jeongdongha-code-toy-ha-4219-github-io-contents-posts-2022-12-20-cicd-lecture-memo-mdx-adf1d0320eda40cc1ba2.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{mkNY:function(t,n,c){"use strict";c.r(n),c.d(n,"ArticleModule",function(){return x});var e=c("ofXK"),i=c("Z48m"),a=c("fXoL"),o=c("tyNb"),r=c("YYwF");function l(t,n){if(1&t&&(a.Pb(0,"h5",9),a.wc(1),a.Ob()),2&t){const t=a.ac(2);a.yb(1),a.yc(" ",t.data.article.category," ")}}function s(t,n){if(1&t&&(a.Pb(0,"h1",9),a.wc(1),a.Ob()),2&t){const t=a.ac(2);a.yb(1),a.yc(" ",t.data.article.title," ")}}function b(t,n){if(1&t&&(a.Pb(0,"h2",10),a.wc(1),a.Ob()),2&t){const t=a.ac(2);a.yb(1),a.yc(" ",t.data.article.subtitle," ")}}function g(t,n){if(1&t&&(a.Pb(0,"section",6),a.Pb(1,"div",2),a.Pb(2,"div",3),a.vc(3,l,2,1,"h5",7),a.vc(4,s,2,1,"h1",7),a.vc(5,b,2,1,"h2",8),a.Ob(),a.Ob(),a.Ob()),2&t){const t=a.ac();a.yb(3),a.gc("ngIf",t.data.article.category),a.yb(1),a.gc("ngIf",t.data.article.title),a.yb(1),a.gc("ngIf",t.data.article.subtitle)}}function d(t,n){if(1&t&&(a.Pb(0,"section",6),a.Pb(1,"div",2),a.Pb(2,"div",3),a.Lb(3,"p",15),a.bc(4,"safe"),a.Ob(),a.Ob(),a.Ob()),2&t){const t=a.ac().$implicit;a.yb(3),a.gc("innerHTML",a.dc(4,1,t.data,"html"),a.pc)}}function f(t,n){if(1&t&&(a.Pb(0,"section",16),a.Lb(1,"img",17),a.bc(2,"safe"),a.Ob()),2&t){const t=a.ac().$implicit;a.yb(1),a.gc("src",a.dc(2,1,t.url,"resourceUrl"),a.rc)}}function p(t,n){if(1&t&&a.Lb(0,"input",25),2&t){const t=n.index;a.hc("id","s-",t+1,""),a.gc("checked",0===t)}}function u(t,n){if(1&t&&(a.Lb(0,"iframe",28),a.bc(1,"safe")),2&t){const t=a.ac().$implicit;a.gc("src",a.dc(1,1,t.url,"resourceUrl"),a.qc)}}const O=function(t){return{"background-image":t}};function P(t,n){if(1&t&&(a.Nb(0),a.Pb(1,"li",26),a.vc(2,u,2,4,"iframe",27),a.Ob(),a.Mb()),2&t){const t=n.$implicit;a.yb(1),a.gc("ngStyle",a.jc(2,O,"url("+t.url+")")),a.yb(1),a.gc("ngIf","video"===t.tag)}}function m(t,n){if(1&t&&(a.Nb(0),a.Pb(1,"span"),a.Lb(2,"label",30),a.Ob(),a.Pb(3,"span"),a.Lb(4,"label",30),a.Ob(),a.Mb()),2&t){const t=a.ac().index;a.yb(1),a.Bb("s-nav-",t+1," right"),a.yb(1),a.Bb("s-nav-",t+1," right"),a.hc("for","s-",t+2,""),a.yb(1),a.Bb("s-nav-",t+2," left"),a.yb(1),a.Bb("s-nav-",t+2," left"),a.hc("for","s-",t+1,"")}}function y(t,n){if(1&t&&(a.Nb(0),a.vc(1,m,5,14,"ng-container",29),a.Mb()),2&t){const t=n.index,c=a.ac(2).$implicit;a.yb(1),a.gc("ngIf",t<(null==c.slides?null:c.slides.length)-1)}}function h(t,n){if(1&t&&(a.Pb(0,"section",18),a.Pb(1,"div",19),a.Pb(2,"div",20),a.vc(3,p,1,2,"input",21),a.Pb(4,"ul",22),a.Pb(5,"pre"),a.wc(6),a.bc(7,"json"),a.Ob(),a.vc(8,P,3,4,"ng-container",23),a.Ob(),a.Pb(9,"div",24),a.vc(10,y,2,1,"ng-container",23),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&t){const t=a.ac().$implicit;a.yb(3),a.gc("ngForOf",t.slides),a.yb(3),a.xc(a.cc(7,4,t.slides)),a.yb(2),a.gc("ngForOf",t.slides),a.yb(2),a.gc("ngForOf",t.slides)}}function v(t,n){if(1&t&&(a.Pb(0,"section",31),a.Pb(1,"div",2),a.Pb(2,"div",3),a.Lb(3,"iframe",32),a.bc(4,"safe"),a.Ob(),a.Ob(),a.Ob()),2&t){const t=a.ac().$implicit;a.yb(3),a.gc("src",a.dc(4,1,t.url,"resourceUrl"),a.qc)}}function M(t,n){if(1&t&&(a.Pb(0,"section",11),a.vc(1,d,5,4,"section",4),a.vc(2,f,3,4,"section",12),a.vc(3,h,11,6,"section",13),a.vc(4,v,5,4,"section",14),a.Ob()),2&t){const t=n.$implicit;a.yb(1),a.gc("ngIf","p"===t.tag),a.yb(1),a.gc("ngIf","img"===t.tag),a.yb(1),a.gc("ngIf","slider"===t.tag),a.yb(1),a.gc("ngIf","video"===t.tag)}}let C=(()=>{class t{constructor(t,n){this.route=t,this.articlesService=n}ngOnInit(){this.data=this.articlesService.getArticle(this.route.snapshot.paramMap.get("id"),this.articlesService.currentPage)}}return t.\u0275fac=function(n){return new(n||t)(a.Kb(o.a),a.Kb(i.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-article"]],decls:9,vars:6,consts:[[1,"article-header-bg","mb-5",3,"ngStyle"],[1,"container"],[1,"row"],[1,"col-12"],["class","article-content container",4,"ngIf"],["class","py-5",4,"ngFor","ngForOf"],[1,"article-content","container"],["class","my-5",4,"ngIf"],["class","my-4",4,"ngIf"],[1,"my-5"],[1,"my-4"],[1,"py-5"],["class","article-image",4,"ngIf"],["class","article-slider",4,"ngIf"],["class","article-video container",4,"ngIf"],[3,"innerHTML"],[1,"article-image"],[3,"src"],[1,"article-slider"],[1,"outer-wrapper","mt-0"],["role","slider",1,"s-wrap","s-type-1","mb-0"],["type","radio","name","slider-control",3,"id","checked",4,"ngFor","ngForOf"],[1,"s-content"],[4,"ngFor","ngForOf"],[1,"s-nav"],["type","radio","name","slider-control",3,"id","checked"],[1,"s-item",3,"ngStyle"],["class","frame","frameBorder","0",3,"src",4,"ngIf"],["frameBorder","0",1,"frame",3,"src"],[4,"ngIf"],[3,"for"],[1,"article-video","container"],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen",3,"src"]],template:function(t,n){1&t&&(a.Pb(0,"article"),a.Pb(1,"section",0),a.Pb(2,"div",1),a.Pb(3,"div",2),a.Pb(4,"div",3),a.Pb(5,"h1"),a.wc(6),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.vc(7,g,6,3,"section",4),a.vc(8,M,5,4,"section",5),a.Ob()),2&t&&(a.yb(1),a.gc("ngStyle",a.jc(4,O,"url("+(null==n.data||null==n.data.article?null:n.data.article.headerBgUrl)+")")),a.yb(5),a.yc(" ",null==n.data||null==n.data.article?null:n.data.article.header," "),a.yb(1),a.gc("ngIf",(null==n.data?null:n.data.article)&&(n.data.article.title||n.data.article.subtitle||n.data.article.category)),a.yb(1),a.gc("ngForOf",null==n.data||null==n.data.article?null:n.data.article.content))},directives:[e.l,e.k,e.j],pipes:[r.a,e.e],styles:["article[_ngcontent-%COMP%]{background-color:#fff;font-size:14px;color:#212121}.article-header-bg[_ngcontent-%COMP%]{background-position:center 25%;background-repeat:no-repeat;background-size:cover;background-color:#1a1a1a;color:#fff;width:100%;padding-top:12%;padding-bottom:9%}.article-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:gilroy-bold}.article-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;line-height:1.5}.article-slider[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:gilroy-bold}.s-wrap[_ngcontent-%COMP%]   .s-item-4[_ngcontent-%COMP%]{background-position:center 20%}.s-wrap[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]{height:100%}.article-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .article-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .article-slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .article-video[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px}.article-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:653px;display:inline-block}@media (max-width:1200px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:540px}}@media (max-width:990px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:388px}}@media (max-width:768px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:296px}}@media (max-width:500px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:250px}}@media (max-width:360px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:185px}}"]}),t})();var _=c("+G0P");const w=[{path:"",component:C}];let x=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(n){return new(n||t)},imports:[[e.b,o.i.forChild(w),_.a]]}),t})()}}]);
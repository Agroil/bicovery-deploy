(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{mkNY:function(t,n,e){"use strict";e.r(n),e.d(n,"ArticleModule",(function(){return C}));var c=e("ofXK"),i=e("fXoL"),a=e("tyNb"),o=e("Z48m"),r=e("YYwF");function l(t,n){if(1&t&&(i.Pb(0,"h5",9),i.uc(1),i.Ob()),2&t){const t=i.ac(2);i.zb(1),i.wc(" ",t.data.article.category," ")}}function s(t,n){if(1&t&&(i.Pb(0,"h1",9),i.uc(1),i.Ob()),2&t){const t=i.ac(2);i.zb(1),i.wc(" ",t.data.article.title," ")}}function b(t,n){if(1&t&&(i.Pb(0,"h2",10),i.uc(1),i.Ob()),2&t){const t=i.ac(2);i.zb(1),i.wc(" ",t.data.article.subtitle," ")}}function g(t,n){if(1&t&&(i.Pb(0,"section",6),i.Pb(1,"div",2),i.Pb(2,"div",3),i.tc(3,l,2,1,"h5",7),i.tc(4,s,2,1,"h1",7),i.tc(5,b,2,1,"h2",8),i.Ob(),i.Ob(),i.Ob()),2&t){const t=i.ac();i.zb(3),i.fc("ngIf",t.data.article.category),i.zb(1),i.fc("ngIf",t.data.article.title),i.zb(1),i.fc("ngIf",t.data.article.subtitle)}}function f(t,n){if(1&t&&(i.Pb(0,"section",6),i.Pb(1,"div",2),i.Pb(2,"div",3),i.Lb(3,"p",15),i.bc(4,"safe"),i.Ob(),i.Ob(),i.Ob()),2&t){const t=i.ac().$implicit;i.zb(3),i.fc("innerHTML",i.cc(4,1,t.data,"html"),i.nc)}}function d(t,n){if(1&t&&(i.Pb(0,"section",16),i.Lb(1,"img",17),i.bc(2,"safe"),i.Ob()),2&t){const t=i.ac().$implicit;i.zb(1),i.fc("src",i.cc(2,1,t.url,"resourceUrl"),i.pc)}}const p=function(t){return{"background-image":t}};function O(t,n){1&t&&i.Lb(0,"li",45),2&t&&i.fc("ngStyle",i.hc(1,p,"url("+n.$implicit+")"))}function P(t,n){if(1&t&&(i.Pb(0,"section",18),i.Pb(1,"div",19),i.Pb(2,"div",20),i.Lb(3,"input",21),i.Lb(4,"input",22),i.Lb(5,"input",23),i.Lb(6,"input",24),i.Lb(7,"input",25),i.Pb(8,"ul",26),i.tc(9,O,1,3,"li",27),i.Ob(),i.Pb(10,"div",28),i.Pb(11,"span",29),i.Lb(12,"label",30),i.Ob(),i.Pb(13,"span",31),i.Lb(14,"label",32),i.Ob(),i.Pb(15,"span",33),i.Lb(16,"label",34),i.Ob(),i.Pb(17,"span",35),i.Lb(18,"label",36),i.Ob(),i.Pb(19,"span",37),i.Lb(20,"label",38),i.Ob(),i.Pb(21,"span",39),i.Lb(22,"label",40),i.Ob(),i.Pb(23,"span",41),i.Lb(24,"label",42),i.Ob(),i.Pb(25,"span",43),i.Lb(26,"label",44),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&t){const t=i.ac().$implicit;i.zb(9),i.fc("ngForOf",t.slides)}}function h(t,n){if(1&t&&(i.Pb(0,"section",46),i.Pb(1,"div",2),i.Pb(2,"div",3),i.Lb(3,"iframe",47),i.bc(4,"safe"),i.Ob(),i.Ob(),i.Ob()),2&t){const t=i.ac().$implicit;i.zb(3),i.fc("src",i.cc(4,1,t.url,"resourceUrl"),i.oc)}}function m(t,n){if(1&t&&(i.Pb(0,"section",11),i.tc(1,f,5,4,"section",4),i.tc(2,d,3,4,"section",12),i.tc(3,P,27,1,"section",13),i.tc(4,h,5,4,"section",14),i.Ob()),2&t){const t=n.$implicit;i.zb(1),i.fc("ngIf","p"===t.tag),i.zb(1),i.fc("ngIf","img"===t.tag),i.zb(1),i.fc("ngIf","slider"===t.tag),i.zb(1),i.fc("ngIf","video"===t.tag)}}let u=(()=>{class t{constructor(t,n){this.route=t,this.articlesService=n}ngOnInit(){this.data=this.articlesService.getArticle(this.route.snapshot.paramMap.get("id"),this.articlesService.currentPage),console.log(this.data.article.content)}}return t.\u0275fac=function(n){return new(n||t)(i.Kb(a.a),i.Kb(o.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-article"]],decls:9,vars:6,consts:[[1,"article-header-bg","mb-5",3,"ngStyle"],[1,"container"],[1,"row"],[1,"col-12"],["class","article-content container",4,"ngIf"],["class","py-5",4,"ngFor","ngForOf"],[1,"article-content","container"],["class","my-5",4,"ngIf"],["class","my-4",4,"ngIf"],[1,"my-5"],[1,"my-4"],[1,"py-5"],["class","article-image",4,"ngIf"],["class","article-slider",4,"ngIf"],["class","article-video container",4,"ngIf"],[3,"innerHTML"],[1,"article-image"],[3,"src"],[1,"article-slider"],[1,"outer-wrapper","mt-0"],["role","slider",1,"s-wrap","s-type-1","mb-0"],["type","radio","id","s-1","name","slider-control","checked","checked"],["type","radio","id","s-2","name","slider-control"],["type","radio","id","s-3","name","slider-control"],["type","radio","id","s-4","name","slider-control"],["type","radio","id","s-5","name","slider-control"],[1,"s-content"],["class","s-item",3,"ngStyle",4,"ngFor","ngForOf"],[1,"s-nav"],[1,"s-nav-1","right"],["for","s-2",1,"s-nav-1","right"],[1,"s-nav-2","left"],["for","s-1",1,"s-nav-2","left"],[1,"s-nav-2","right"],["for","s-3",1,"s-nav-2","right"],[1,"s-nav-3","left"],["for","s-2",1,"s-nav-3","left"],[1,"s-nav-3","right"],["for","s-4",1,"s-nav-3","right"],[1,"s-nav-4","left"],["for","s-3",1,"s-nav-4","left"],[1,"s-nav-4","right"],["for","s-5",1,"s-nav-4","right"],[1,"s-nav-5","left"],["for","s-4",1,"s-nav-5","left"],[1,"s-item",3,"ngStyle"],[1,"article-video","container"],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen",3,"src"]],template:function(t,n){1&t&&(i.Pb(0,"article"),i.Pb(1,"section",0),i.Pb(2,"div",1),i.Pb(3,"div",2),i.Pb(4,"div",3),i.Pb(5,"h1"),i.uc(6),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.tc(7,g,6,3,"section",4),i.tc(8,m,5,4,"section",5),i.Ob()),2&t&&(i.zb(1),i.fc("ngStyle",i.hc(4,p,"url("+n.data.article.headerBgUrl+")")),i.zb(5),i.wc(" ",n.data.article.header," "),i.zb(1),i.fc("ngIf",n.data.article.title||n.data.article.subtitle||n.data.article.category),i.zb(1),i.fc("ngForOf",n.data.article.content))},directives:[c.k,c.j,c.i],pipes:[r.a],styles:["article[_ngcontent-%COMP%]{background-color:#fff;font-size:14px;color:#212121}.article-header-bg[_ngcontent-%COMP%]{background-position:center 25%;background-repeat:no-repeat;background-size:cover;background-color:#1a1a1a;color:#fff;width:100%;padding-top:12%;padding-bottom:9%}.article-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:gilroy-bold}.article-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;line-height:1.5}.article-slider[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:gilroy-bold}.s-wrap[_ngcontent-%COMP%]   .s-item-4[_ngcontent-%COMP%]{background-position:center 20%}.article-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .article-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .article-slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .article-video[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px}.article-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:653px;display:inline-block}@media (max-width:1200px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:540px}}@media (max-width:990px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:388px}}@media (max-width:768px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:296px}}@media (max-width:500px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:250px}}@media (max-width:360px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:185px}}"]}),t})();var v=e("+G0P");const M=[{path:"",component:u}];let C=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(n){return new(n||t)},imports:[[c.b,a.h.forChild(M),v.a]]}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"Rx/Z":function(t,n,o){"use strict";o.r(n),o.d(n,"PostModule",function(){return m});var e=o("ofXK"),i=o("8UQ/"),s=o("fXoL"),a=o("tyNb"),r=o("jhN1"),c=o("jSPT"),b=o("YYwF");function p(t,n){if(1&t&&(s.Pb(0,"div"),s.Pb(1,"p"),s.wc(2),s.Ob(),s.Ob()),2&t){const t=s.ac().$implicit;s.yb(2),s.xc(t.data)}}function l(t,n){if(1&t&&(s.Pb(0,"div"),s.Lb(1,"img",41),s.Ob()),2&t){const t=s.ac().$implicit;s.yb(1),s.gc("src",t.data,s.rc)}}function g(t,n){1&t&&(s.Pb(0,"div"),s.wc(1,"output2"),s.Ob())}function d(t,n){if(1&t&&(s.Pb(0,"div",37),s.Pb(1,"div",38),s.vc(2,p,3,1,"div",39),s.vc(3,l,2,1,"div",39),s.vc(4,g,2,0,"div",40),s.Ob(),s.Ob()),2&t){const t=n.$implicit;s.yb(1),s.gc("ngSwitch",t.tag),s.yb(1),s.gc("ngSwitchCase","p"),s.yb(1),s.gc("ngSwitchCase","img")}}const f=function(t){return{"background-image":t}};function h(t,n){1&t&&s.Lb(0,"li",42),2&t&&s.gc("ngStyle",s.jc(1,f,"url("+n.$implicit+")"))}let v=(()=>{class t{constructor(t,n,o,e,i){this.route=t,this.router=n,this.postsService=o,this.titleService=e,this.metaService=i}ngOnInit(){const t=this.route.snapshot.paramMap.get("id");if(this.postData=this.postsService.getPost(t),this.postData){const{pageTitle:t,metaKeywords:n,metaDescritpion:o}=this.postData;t&&this.titleService.setTitle(t),Array.isArray(n)&&n.length&&this.metaService.addTag({name:"keywords",content:n.join(",")}),o&&this.metaService.addTag({name:"description",content:o})}}}return t.\u0275fac=function(n){return new(n||t)(s.Kb(a.a),s.Kb(a.f),s.Kb(i.a),s.Kb(r.d),s.Kb(r.c))},t.\u0275cmp=s.Eb({type:t,selectors:[["app-post"]],decls:47,vars:11,consts:[[1,"post"],[1,"post-header",3,"ngStyle"],[1,"container"],[1,"row"],[1,"col"],[1,"hvr-sweep-to-right",3,"click"],[1,"post-body"],[1,"col-12"],["class","post-body-content",4,"ngFor","ngForOf"],[1,"outer-wrapper"],["role","slider",1,"s-wrap","s-type-1"],["type","radio","id","s-1","name","slider-control","checked","checked"],["type","radio","id","s-2","name","slider-control"],["type","radio","id","s-3","name","slider-control"],["type","radio","id","s-4","name","slider-control"],["type","radio","id","s-5","name","slider-control"],[1,"s-content"],["class","s-item",3,"ngStyle",4,"ngFor","ngForOf"],[1,"s-nav"],[1,"s-nav-1","right"],["for","s-2",1,"s-nav-1","right"],[1,"s-nav-2","left"],["for","s-1",1,"s-nav-2","left"],[1,"s-nav-2","right"],["for","s-3",1,"s-nav-2","right"],[1,"s-nav-3","left"],["for","s-2",1,"s-nav-3","left"],[1,"s-nav-3","right"],["for","s-4",1,"s-nav-3","right"],[1,"s-nav-4","left"],["for","s-3",1,"s-nav-4","left"],[1,"s-nav-4","right"],["for","s-5",1,"s-nav-4","right"],[1,"s-nav-5","left"],["for","s-4",1,"s-nav-5","left"],["videoPopUp",""],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen",1,"frame",3,"src"],[1,"post-body-content"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["alt","post image",3,"src"],[1,"s-item",3,"ngStyle"]],template:function(t,n){if(1&t){const t=s.Qb();s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"div",3),s.Pb(4,"div",4),s.Pb(5,"button",5),s.Wb("click",function(){return s.oc(t),s.mc(44).open()}),s.wc(6," PLAY VIDEO "),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(7,"div",6),s.Pb(8,"div",2),s.Pb(9,"div",3),s.Pb(10,"div",7),s.Pb(11,"h4"),s.wc(12),s.Ob(),s.Pb(13,"h1"),s.wc(14),s.Ob(),s.vc(15,d,5,3,"div",8),s.Ob(),s.Ob(),s.Ob(),s.Pb(16,"section"),s.Pb(17,"div",9),s.Pb(18,"div",10),s.Lb(19,"input",11),s.Lb(20,"input",12),s.Lb(21,"input",13),s.Lb(22,"input",14),s.Lb(23,"input",15),s.Pb(24,"ul",16),s.vc(25,h,1,3,"li",17),s.Ob(),s.Pb(26,"div",18),s.Pb(27,"span",19),s.Lb(28,"label",20),s.Ob(),s.Pb(29,"span",21),s.Lb(30,"label",22),s.Ob(),s.Pb(31,"span",23),s.Lb(32,"label",24),s.Ob(),s.Pb(33,"span",25),s.Lb(34,"label",26),s.Ob(),s.Pb(35,"span",27),s.Lb(36,"label",28),s.Ob(),s.Pb(37,"span",29),s.Lb(38,"label",30),s.Ob(),s.Pb(39,"span",31),s.Lb(40,"label",32),s.Ob(),s.Pb(41,"span",33),s.Lb(42,"label",34),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(43,"app-video-popup",null,35),s.Lb(45,"iframe",36),s.bc(46,"safe"),s.Ob()}2&t&&(s.yb(1),s.gc("ngStyle",s.jc(9,f,"url("+n.postData.imageUrl+")")),s.yb(11),s.xc(n.postData.subtitle),s.yb(2),s.xc(n.postData.title),s.yb(1),s.gc("ngForOf",n.postData.content),s.yb(10),s.gc("ngForOf",n.postData.slider),s.yb(20),s.gc("src",s.dc(46,6,n.postData.videoUrl,"resourceUrl"),s.qc))},directives:[e.l,e.j,c.a,e.m,e.n,e.o],pipes:[b.a],styles:[".post-header[_ngcontent-%COMP%]{position:relative;height:420px;outline:1px solid hsla(0,0%,100%,.2);overflow:hidden;background-size:cover;background-repeat:no-repeat;background-position:50%}.post-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:gilroy-bold;margin-top:230px;font-size:64px;line-height:1;letter-spacing:1px;text-transform:capitalize;color:#fff}.post-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;top:240px;outline:none;width:280px;height:72px;border:1px solid #fff;font-weight:600;font-size:24px;line-height:24px;text-align:center;letter-spacing:1px;text-transform:uppercase;color:#fff;background-color:transparent;margin-top:48px;background-color:hsla(0,0%,58.8%,.6)}.post-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#000}.post-body[_ngcontent-%COMP%]{padding-top:60px;background-color:#fff;position:relative}.post-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:15px;font-weight:bolder}.post-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-weight:300;font-size:14px}.post-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .post-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-family:gilroy;font-style:normal;letter-spacing:1px;text-transform:capitalize}.post-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:15px;font-weight:700;font-size:64px;display:flex;align-items:center}.post-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:40px;font-family:gilroy;font-style:normal;font-weight:400;font-size:14px;letter-spacing:1px}.s-wrap[_ngcontent-%COMP%]{margin-bottom:0}"]}),t})();var u=o("AKxs"),O=o("+G0P");const P=[{path:"",component:v}];let m=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(n){return new(n||t)},imports:[[e.b,a.j.forChild(P),u.a,O.a]]}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"Rx/Z":function(t,n,o){"use strict";o.r(n),o.d(n,"PostModule",(function(){return v}));var e=o("ofXK"),i=o("fXoL"),s=o("tyNb"),a=o("8UQ/"),r=o("jSPT"),c=o("YYwF");function b(t,n){if(1&t&&(i.Pb(0,"div"),i.Pb(1,"p"),i.uc(2),i.Ob(),i.Ob()),2&t){const t=i.ac().$implicit;i.zb(2),i.vc(t.data)}}function p(t,n){if(1&t&&(i.Pb(0,"div"),i.Lb(1,"img",41),i.Ob()),2&t){const t=i.ac().$implicit;i.zb(1),i.fc("src",t.data,i.pc)}}function l(t,n){1&t&&(i.Pb(0,"div"),i.uc(1,"output2"),i.Ob())}function f(t,n){if(1&t&&(i.Pb(0,"div",37),i.Pb(1,"div",38),i.tc(2,b,3,1,"div",39),i.tc(3,p,2,1,"div",39),i.tc(4,l,2,0,"div",40),i.Ob(),i.Ob()),2&t){const t=n.$implicit;i.zb(1),i.fc("ngSwitch",t.tag),i.zb(1),i.fc("ngSwitchCase","p"),i.zb(1),i.fc("ngSwitchCase","img")}}const g=function(t){return{"background-image":t}};function d(t,n){1&t&&i.Lb(0,"li",42),2&t&&i.fc("ngStyle",i.hc(1,g,"url("+n.$implicit+")"))}let u=(()=>{class t{constructor(t,n,o){this.route=t,this.router=n,this.postsService=o}ngOnInit(){const t=this.route.snapshot.paramMap.get("id");this.postData=this.postsService.getPost(t)}}return t.\u0275fac=function(n){return new(n||t)(i.Kb(s.a),i.Kb(s.d),i.Kb(a.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-post"]],decls:47,vars:11,consts:[[1,"post"],[1,"post-header",3,"ngStyle"],[1,"container"],[1,"row"],[1,"col"],[1,"hvr-sweep-to-right",3,"click"],[1,"post-body"],[1,"col-12"],["class","post-body-content",4,"ngFor","ngForOf"],[1,"outer-wrapper"],["role","slider",1,"s-wrap","s-type-1"],["type","radio","id","s-1","name","slider-control","checked","checked"],["type","radio","id","s-2","name","slider-control"],["type","radio","id","s-3","name","slider-control"],["type","radio","id","s-4","name","slider-control"],["type","radio","id","s-5","name","slider-control"],[1,"s-content"],["class","s-item",3,"ngStyle",4,"ngFor","ngForOf"],[1,"s-nav"],[1,"s-nav-1","right"],["for","s-2",1,"s-nav-1","right"],[1,"s-nav-2","left"],["for","s-1",1,"s-nav-2","left"],[1,"s-nav-2","right"],["for","s-3",1,"s-nav-2","right"],[1,"s-nav-3","left"],["for","s-2",1,"s-nav-3","left"],[1,"s-nav-3","right"],["for","s-4",1,"s-nav-3","right"],[1,"s-nav-4","left"],["for","s-3",1,"s-nav-4","left"],[1,"s-nav-4","right"],["for","s-5",1,"s-nav-4","right"],[1,"s-nav-5","left"],["for","s-4",1,"s-nav-5","left"],["videoPopUp",""],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen",1,"frame",3,"src"],[1,"post-body-content"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["alt","post image",3,"src"],[1,"s-item",3,"ngStyle"]],template:function(t,n){if(1&t){const t=i.Qb();i.Pb(0,"div",0),i.Pb(1,"div",1),i.Pb(2,"div",2),i.Pb(3,"div",3),i.Pb(4,"div",4),i.Pb(5,"button",5),i.Wb("click",(function(){return i.mc(t),i.kc(44).open()})),i.uc(6," PLAY VIDEO "),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(7,"div",6),i.Pb(8,"div",2),i.Pb(9,"div",3),i.Pb(10,"div",7),i.Pb(11,"h4"),i.uc(12),i.Ob(),i.Pb(13,"h1"),i.uc(14),i.Ob(),i.tc(15,f,5,3,"div",8),i.Ob(),i.Ob(),i.Ob(),i.Pb(16,"section"),i.Pb(17,"div",9),i.Pb(18,"div",10),i.Lb(19,"input",11),i.Lb(20,"input",12),i.Lb(21,"input",13),i.Lb(22,"input",14),i.Lb(23,"input",15),i.Pb(24,"ul",16),i.tc(25,d,1,3,"li",17),i.Ob(),i.Pb(26,"div",18),i.Pb(27,"span",19),i.Lb(28,"label",20),i.Ob(),i.Pb(29,"span",21),i.Lb(30,"label",22),i.Ob(),i.Pb(31,"span",23),i.Lb(32,"label",24),i.Ob(),i.Pb(33,"span",25),i.Lb(34,"label",26),i.Ob(),i.Pb(35,"span",27),i.Lb(36,"label",28),i.Ob(),i.Pb(37,"span",29),i.Lb(38,"label",30),i.Ob(),i.Pb(39,"span",31),i.Lb(40,"label",32),i.Ob(),i.Pb(41,"span",33),i.Lb(42,"label",34),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(43,"app-video-popup",null,35),i.Lb(45,"iframe",36),i.bc(46,"safe"),i.Ob()}2&t&&(i.zb(1),i.fc("ngStyle",i.hc(9,g,"url("+n.postData.imageUrl+")")),i.zb(11),i.vc(n.postData.subtitle),i.zb(2),i.vc(n.postData.title),i.zb(1),i.fc("ngForOf",n.postData.content),i.zb(10),i.fc("ngForOf",n.postData.slider),i.zb(20),i.fc("src",i.cc(46,6,n.postData.videoUrl,"resourceUrl"),i.oc))},directives:[e.k,e.i,r.a,e.l,e.m,e.n],pipes:[c.a],styles:[".post-header[_ngcontent-%COMP%]{position:relative;height:420px;outline:1px solid hsla(0,0%,100%,.2);overflow:hidden;background-size:cover;background-repeat:no-repeat;background-position:50%}.post-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:gilroy-bold;margin-top:230px;font-size:64px;line-height:1;letter-spacing:1px;text-transform:capitalize;color:#fff}.post-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;top:240px;outline:none;width:280px;height:72px;border:1px solid #fff;font-weight:600;font-size:24px;line-height:24px;text-align:center;letter-spacing:1px;text-transform:uppercase;color:#fff;background-color:transparent;margin-top:48px;background-color:hsla(0,0%,58.8%,.6)}.post-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#000}.post-body[_ngcontent-%COMP%]{padding-top:60px;background-color:#fff;position:relative}.post-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:15px;font-weight:bolder}.post-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-weight:300;font-size:14px}.post-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .post-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-family:gilroy;font-style:normal;letter-spacing:1px;text-transform:capitalize}.post-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:15px;font-weight:700;font-size:64px;display:flex;align-items:center}.post-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:40px;font-family:gilroy;font-style:normal;font-weight:400;font-size:14px;letter-spacing:1px}.s-wrap[_ngcontent-%COMP%]{margin-bottom:0}"]}),t})();var h=o("AKxs"),O=o("+G0P");const P=[{path:"",component:u}];let v=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(n){return new(n||t)},imports:[[e.b,s.h.forChild(P),h.a,O.a]]}),t})()}}]);
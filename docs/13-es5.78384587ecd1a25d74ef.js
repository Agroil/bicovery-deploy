!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"Rx/Z":function(e,o,i){"use strict";i.r(o),i.d(o,"PostModule",function(){return z});var c=i("ofXK"),r=i("8UQ/"),a=i("fXoL"),s=i("tyNb"),b=i("jhN1"),p=i("jSPT"),l=i("YYwF");function g(t,n){if(1&t&&(a.Pb(0,"div"),a.Pb(1,"p"),a.xc(2),a.Ob(),a.Ob()),2&t){var e=a.ac().$implicit;a.yb(2),a.yc(e.data)}}function f(t,n){if(1&t&&(a.Pb(0,"div"),a.Lb(1,"img",15),a.Ob()),2&t){var e=a.ac().$implicit;a.yb(1),a.gc("src",e.data,a.sc)}}function d(t,n){if(1&t&&(a.Pb(0,"div",12),a.Pb(1,"div",13),a.wc(2,g,3,1,"div",14),a.wc(3,f,2,1,"div",14),a.Ob(),a.Ob()),2&t){var e=n.$implicit;a.yb(1),a.gc("ngSwitch",e.tag),a.yb(1),a.gc("ngSwitchCase","p"),a.yb(1),a.gc("ngSwitchCase","img")}}function u(t,n){if(1&t&&a.Lb(0,"input",22),2&t){var e=n.index;a.hc("id","s-",e+1,""),a.gc("checked",0===e)}}function h(t,n){if(1&t&&(a.Lb(0,"iframe",25),a.bc(1,"safe")),2&t){var e=a.ac().$implicit;a.gc("src",a.dc(1,1,e.url,"resourceUrl"),a.rc)}}var y=function(t){return{"background-image":t}};function v(t,n){if(1&t&&(a.Nb(0),a.Pb(1,"li",23),a.wc(2,h,2,4,"iframe",24),a.Ob(),a.Mb()),2&t){var e=n.$implicit;a.yb(1),a.gc("ngStyle",a.jc(2,y,"url("+e.url+")")),a.yb(1),a.gc("ngIf","video"===e.tag)}}function m(t,n){if(1&t&&(a.Nb(0),a.Pb(1,"span"),a.Lb(2,"label",26),a.Ob(),a.Pb(3,"span"),a.Lb(4,"label",26),a.Ob(),a.Mb()),2&t){var e=a.ac().index;a.yb(1),a.Bb("s-nav-",e+1," right"),a.yb(1),a.Bb("s-nav-",e+1," right"),a.hc("for","s-",e+2,""),a.yb(1),a.Bb("s-nav-",e+2," left"),a.yb(1),a.Bb("s-nav-",e+2," left"),a.hc("for","s-",e+1,"")}}function O(t,n){if(1&t&&(a.Nb(0),a.wc(1,m,5,14,"ng-container",16),a.Mb()),2&t){var e=n.index,o=a.ac(2).$implicit;a.yb(1),a.gc("ngIf",e<(null==o.slides?null:o.slides.length)-1)}}function P(t,n){if(1&t&&(a.Pb(0,"section"),a.Pb(1,"div"),a.Pb(2,"div",17),a.Pb(3,"div",18),a.wc(4,u,1,2,"input",19),a.Pb(5,"ul",20),a.wc(6,v,3,4,"ng-container",9),a.Ob(),a.Pb(7,"div",21),a.wc(8,O,2,1,"ng-container",9),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&t){var e=a.ac().$implicit;a.yb(4),a.gc("ngForOf",e.slides),a.yb(2),a.gc("ngForOf",e.slides),a.yb(2),a.gc("ngForOf",e.slides)}}function w(t,n){if(1&t&&(a.Nb(0),a.wc(1,P,9,3,"section",16),a.Mb()),2&t){var e=n.$implicit;a.yb(1),a.gc("ngIf","slider"===e.tag)}}var x,M,C=((x=function(){function e(n,o,i,c,r){t(this,e),this.route=n,this.router=o,this.postsService=i,this.titleService=c,this.metaService=r}var o,i,c;return o=e,(i=[{key:"ngOnInit",value:function(){var t=this.route.snapshot.paramMap.get("id");if(this.postData=this.postsService.getPost(t),this.postData){var n=this.postData,e=n.pageTitle,o=n.metaKeywords,i=n.metaDescritpion;e&&this.titleService.setTitle(e),Array.isArray(o)&&o.length&&this.metaService.addTag({name:"keywords",content:o.join(",")}),i&&this.metaService.addTag({name:"description",content:i})}}}])&&n(o.prototype,i),c&&n(o,c),e}()).\u0275fac=function(t){return new(t||x)(a.Kb(s.a),a.Kb(s.f),a.Kb(r.a),a.Kb(b.d),a.Kb(b.c))},x.\u0275cmp=a.Eb({type:x,selectors:[["app-post"]],decls:21,vars:11,consts:[[1,"post"],[1,"post-header",3,"ngStyle"],[1,"container"],[1,"row"],[1,"col"],[1,"hvr-sweep-to-right",3,"click"],[1,"post-body"],[1,"col-12"],["class","post-body-content",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["videoPopUp",""],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen","loading","lazy",1,"frame",3,"src"],[1,"post-body-content"],[3,"ngSwitch"],[4,"ngSwitchCase"],["loading","lazy","alt","post image",3,"src"],[4,"ngIf"],[1,"outer-wrapper","mt-0"],["role","slider",1,"s-wrap","s-type-1","mb-0"],["type","radio","name","slider-control",3,"id","checked",4,"ngFor","ngForOf"],[1,"s-content"],[1,"s-nav"],["type","radio","name","slider-control",3,"id","checked"],[1,"s-item",3,"ngStyle"],["class","frame","frameBorder","0","loading","lazy",3,"src",4,"ngIf"],["frameBorder","0","loading","lazy",1,"frame",3,"src"],[3,"for"]],template:function(t,n){if(1&t){var e=a.Qb();a.Pb(0,"div",0),a.Pb(1,"div",1),a.Pb(2,"div",2),a.Pb(3,"div",3),a.Pb(4,"div",4),a.Pb(5,"button",5),a.Wb("click",function(){return a.pc(e),a.nc(18).open()}),a.xc(6," PLAY VIDEO "),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Pb(7,"div",6),a.Pb(8,"div",2),a.Pb(9,"div",3),a.Pb(10,"div",7),a.Pb(11,"h4"),a.xc(12),a.Ob(),a.Pb(13,"h1"),a.xc(14),a.Ob(),a.wc(15,d,4,3,"div",8),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.wc(16,w,2,1,"ng-container",9),a.Ob(),a.Pb(17,"app-video-popup",null,10),a.Lb(19,"iframe",11),a.bc(20,"safe"),a.Ob()}2&t&&(a.yb(1),a.gc("ngStyle",a.jc(9,y,"url("+n.postData.imageUrl+")")),a.yb(11),a.yc(n.postData.subtitle),a.yb(2),a.yc(n.postData.title),a.yb(1),a.gc("ngForOf",n.postData.content),a.yb(1),a.gc("ngForOf",n.postData.content),a.yb(3),a.gc("src",a.dc(20,6,n.postData.videoUrl,"resourceUrl"),a.rc))},directives:[c.l,c.j,p.a,c.m,c.n,c.k],pipes:[l.a],styles:[".post-header[_ngcontent-%COMP%]{position:relative;height:420px;outline:1px solid hsla(0,0%,100%,.2);overflow:hidden;background-size:cover;background-repeat:no-repeat;background-position:50%}.post-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:gilroy-bold;margin-top:230px;font-size:64px;line-height:1;letter-spacing:1px;text-transform:capitalize;color:#fff}.post-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;top:240px;outline:none;width:280px;height:72px;border:1px solid #fff;font-weight:600;font-size:24px;line-height:24px;text-align:center;letter-spacing:1px;text-transform:uppercase;color:#fff;background-color:transparent;margin-top:48px;background-color:hsla(0,0%,58.8%,.6)}.post-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#000}.post-body[_ngcontent-%COMP%]{padding-top:60px;background-color:#fff;position:relative}.post-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:15px;font-weight:bolder}.post-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-weight:300;font-size:14px}.post-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .post-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-family:gilroy;font-style:normal;letter-spacing:1px;text-transform:capitalize}.post-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:15px;font-weight:700;font-size:64px;display:flex;align-items:center}.post-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:40px;font-family:gilroy;font-style:normal;font-weight:400;font-size:17px;letter-spacing:1px}.s-wrap[_ngcontent-%COMP%]{margin-bottom:0}"]}),x),_=i("AKxs"),k=i("+G0P"),S=[{path:"",component:C}],z=((M=function n(){t(this,n)}).\u0275mod=a.Ib({type:M}),M.\u0275inj=a.Hb({factory:function(t){return new(t||M)},imports:[[c.c,s.j.forChild(S),_.a,k.a]]}),M)}}])}();
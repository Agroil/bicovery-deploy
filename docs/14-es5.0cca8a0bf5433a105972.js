!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{UeG6:function(e,n,i){"use strict";i.r(n),i.d(n,"WorksModule",(function(){return V}));var r=i("ofXK"),c=i("fXoL"),a=i("tyNb"),s=i("jSPT"),l=i("R0Ic"),b=i("3Pt+"),u=i("cfV7"),d=i("5eHb"),g=function(t){return{active:t}};function m(t,e){if(1&t){var o=c.Qb();c.Pb(0,"fieldset"),c.Pb(1,"input",14),c.Wb("change",(function(){c.oc(o);var t=e.$implicit;return c.ac(2).onStyleSelect(t)})),c.Ob(),c.Pb(2,"label",15),c.wc(3),c.Ob(),c.Ob()}if(2&t){var n=e.$implicit,i=c.ac(2);c.yb(1),c.zb("id",n.value),c.yb(1),c.gc("ngClass",c.jc(4,g,n.value===i.selectedStyle)),c.zb("for",n.value),c.yb(1),c.xc(n.viewValue)}}function p(t,e){if(1&t){var o=c.Qb();c.Pb(0,"div",2),c.Pb(1,"div",3),c.Pb(2,"div",4),c.Pb(3,"div",5),c.Pb(4,"h3"),c.wc(5,"Quotes"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(6,"div",6),c.Pb(7,"div",4),c.Pb(8,"div",7),c.Pb(9,"div",8),c.Pb(10,"h2"),c.wc(11,"Which style of product would you like ?"),c.Ob(),c.Pb(12,"p"),c.wc(13," Our clients get the best results when they have our team dedicated to their business for extended periods of time. Ready to move forward? "),c.Ob(),c.Ob(),c.Ob(),c.Pb(14,"div",9),c.vc(15,m,4,6,"fieldset",10),c.Ob(),c.Ob(),c.Ob(),c.Pb(16,"div",11),c.Pb(17,"div",4),c.Pb(18,"div",12),c.Pb(19,"button",13),c.Wb("click",(function(){return c.oc(o),c.ac().setStep("budget")})),c.wc(20," Next "),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()}if(2&t){var n=c.ac();c.gc("@inOutAnimation",void 0),c.yb(15),c.gc("ngForOf",n.productStyles)}}function f(t,e){if(1&t){var o=c.Qb();c.Pb(0,"fieldset"),c.Pb(1,"input",14),c.Wb("change",(function(){c.oc(o);var t=e.$implicit;return c.ac(2).onCostSelect(t)})),c.Ob(),c.Pb(2,"label",15),c.wc(3),c.Ob(),c.Ob()}if(2&t){var n=e.$implicit,i=c.ac(2);c.yb(1),c.zb("id",n.value),c.yb(1),c.gc("ngClass",c.jc(4,g,n.value===i.selectedCost)),c.zb("for",n.value),c.yb(1),c.xc(n.viewValue)}}function v(t,e){if(1&t){var o=c.Qb();c.Pb(0,"div",2),c.Pb(1,"div",3),c.Pb(2,"div",4),c.Pb(3,"div",5),c.Pb(4,"h3"),c.wc(5,"Quotes"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(6,"div",6),c.Pb(7,"div",4),c.Pb(8,"div",7),c.Pb(9,"div",8),c.Pb(10,"h2"),c.wc(11,"What is your budget?"),c.Ob(),c.Pb(12,"p"),c.wc(13," We are looking forward to provide you best looking product that meets your budget and deadline. "),c.Ob(),c.Ob(),c.Ob(),c.Pb(14,"div",9),c.vc(15,f,4,6,"fieldset",10),c.Ob(),c.Ob(),c.Ob(),c.Pb(16,"div",11),c.Pb(17,"div",4),c.Pb(18,"div",16),c.Pb(19,"button",13),c.Wb("click",(function(){return c.oc(o),c.ac().setStep("style")})),c.wc(20," Prev "),c.Ob(),c.Ob(),c.Pb(21,"div",17),c.Pb(22,"button",13),c.Wb("click",(function(){return c.oc(o),c.ac().setStep("contact")})),c.wc(23," Next "),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()}if(2&t){var n=c.ac();c.gc("@inOutAnimation",void 0),c.yb(15),c.gc("ngForOf",n.productCosts)}}function h(t,e){1&t&&(c.Pb(0,"span",29),c.wc(1," Please enter email. "),c.Ob())}function O(t,e){if(1&t){var o=c.Qb();c.Pb(0,"div",2),c.Pb(1,"div",3),c.Pb(2,"div",4),c.Pb(3,"div",5),c.Pb(4,"h3"),c.wc(5,"Quotes"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(6,"div",6),c.Pb(7,"div",4),c.Pb(8,"div",18),c.Pb(9,"div",8),c.Pb(10,"h2"),c.wc(11,"Leave us your contacts"),c.Ob(),c.Pb(12,"p"),c.wc(13," We will come shortly with possible solutions "),c.Ob(),c.Ob(),c.Ob(),c.Pb(14,"div",19),c.Pb(15,"form",20),c.Wb("ngSubmit",(function(){return c.oc(o),c.ac().sendContactForm()})),c.Pb(16,"div",21),c.Pb(17,"label",22),c.wc(18,"Email *"),c.Ob(),c.Pb(19,"div",5),c.Lb(20,"input",23),c.vc(21,h,2,0,"span",24),c.Ob(),c.Ob(),c.Pb(22,"div",21),c.Pb(23,"label",25),c.wc(24," Message "),c.Ob(),c.Pb(25,"div",5),c.Lb(26,"textarea",26),c.Ob(),c.Ob(),c.Pb(27,"div",27),c.Pb(28,"button",28),c.wc(29," Send "),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(30,"div",11),c.Pb(31,"div",4),c.Pb(32,"div",16),c.Pb(33,"button",13),c.Wb("click",(function(){return c.oc(o),c.ac().setStep("budget")})),c.wc(34," Prev "),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()}if(2&t){var n=c.ac();c.gc("@inOutAnimation",void 0),c.yb(15),c.gc("formGroup",n.contactForm),c.yb(6),c.gc("ngIf",(n.contactForm.get("email").hasError("required")||n.contactForm.get("email").hasError("whitespace"))&&(n.contactForm.get("email").dirty||n.contactForm.get("email").touched))}}var w,P,y,k,x=((w=function(){function e(o,n,i){t(this,e),this.emailService=o,this.formBuilder=n,this.toastrService=i,this.currentStep="style",this.isDisabled=this.mobileCheck(),this.productStyles=[{value:"video_production",viewValue:"Video production"},{value:"motion_graphics",viewValue:"Motion graphics"},{value:"2d_animation",viewValue:"2d animation"},{value:"3d_animation",viewValue:"3d animation"},{value:"ui_ux",viewValue:"Ui/Ux"}],this.productCosts=[{value:"5000",viewValue:"$5,000"},{value:"10000",viewValue:"$10,000"},{value:"20000",viewValue:"$20,000"},{value:"50000",viewValue:"$50,000"}]}return o(e,[{key:"ngOnInit",value:function(){this.contactForm=this.formBuilder.group({email:["",[b.j.required,this.noWhitespaceValidator,b.j.email]],message:["",b.j.maxLength(500)]})}},{key:"onStyleSelect",value:function(t){this.selectedStyle=t.value}},{key:"onCostSelect",value:function(t){this.selectedCost=t.value}},{key:"setStep",value:function(t){this.currentStep=t}},{key:"sendContactForm",value:function(){var t=this;this.contactForm.valid?this.emailService.sendFromQuotes(this.contactForm.value,this.selectedStyle,this.selectedCost).then((function(e){t.toastrService.success("Your request was sent to Geek Power.")})).catch((function(e){t.toastrService.error("Can't send your request to Geek Power, please use phone or email to contact with us.")})):this.contactForm.markAllAsTouched()}},{key:"noWhitespaceValidator",value:function(t){return 0!==(t.value||"").trim().length?null:{whitespace:!0}}},{key:"mobileCheck",value:function(){var t,e=!1;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0),e}}]),e}()).\u0275fac=function(t){return new(t||w)(c.Kb(u.a),c.Kb(b.b),c.Kb(d.b))},w.\u0275cmp=c.Eb({type:w,selectors:[["app-quotes"]],decls:4,vars:4,consts:[[1,"quotes-wrapper"],["class","quotes-step",4,"ngIf"],[1,"quotes-step"],[1,"quotes-header"],[1,"row"],[1,"col"],[1,"quotes-body"],[1,"col-12","col-sm-8","quotes-body-text-wrapper"],[1,"quotes-body-text"],[1,"col-12","col-sm-4","quotes-body-select"],[4,"ngFor","ngForOf"],[1,"quotes-footer"],[1,"col-md-2","offset-md-10","text-center"],[1,"quotes-button","hvr-underline-from-left",3,"click"],["type","radio","name","select_style",3,"change"],[3,"ngClass"],[1,"col-md-2","text-center"],[1,"col-md-2","offset-md-8","text-center"],[1,"col-12","col-sm-6","quotes-body-text-wrapper"],[1,"col-12","col-sm-6","quotes-body-select"],["name","contactForm","novalidate","","autocomplete","off",3,"formGroup","ngSubmit"],[1,"form-group","py-4","row"],["for","nameField",1,"col-3","col-form-label"],["type","text","id","nameField","formControlName","email","required","",1,"form-control"],["class","error",4,"ngIf"],["for","messageField",1,"col-3","col-form-label"],["id","messageField","rows","1","formControlName","message",1,"form-control"],[1,"text-right"],["type","submit",1,"btn","btn-primary","mb-2","hvr-sweep-to-right"],[1,"error"]],template:function(t,e){1&t&&(c.Pb(0,"div",0),c.vc(1,p,21,2,"div",1),c.vc(2,v,24,2,"div",1),c.vc(3,O,35,3,"div",1),c.Ob()),2&t&&(c.gc("@.disabled",e.isDisabled),c.yb(1),c.gc("ngIf","style"===e.currentStep),c.yb(1),c.gc("ngIf","budget"===e.currentStep),c.yb(1),c.gc("ngIf","contact"===e.currentStep))},directives:[r.k,r.j,r.i,b.k,b.g,b.d,b.a,b.f,b.c,b.i],styles:[".quotes-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:center;align-content:center;height:100%}.quotes-header[_ngcontent-%COMP%]{position:fixed;top:40px}.quotes-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-style:normal;font-weight:600;font-size:24px;line-height:24px;letter-spacing:1px;color:#fff;opacity:.5}.quotes-body-text-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:center;align-content:center}.quotes-body-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-style:normal;font-weight:600;font-size:48px;line-height:48px;letter-spacing:1px;color:#fff;opacity:.5}.quotes-body-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300;font-size:16px;line-height:24px;letter-spacing:1px;color:#fff;opacity:.5}.quotes-body-select[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{display:none}.quotes-body-select[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{text-align:center;padding:6px}.quotes-body-select[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{cursor:pointer;font-style:normal;font-weight:300;font-size:24px;line-height:24px;letter-spacing:1px;color:#fff;opacity:.5;transition:all .5s ease}.quotes-body-select[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover{transform:scale(1.2);text-decoration:underline}.quotes-body-select[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + label.active[_ngcontent-%COMP%]{font-style:normal;font-weight:300;font-size:24px;line-height:24px;letter-spacing:1px;color:#fff;transform:scale(1.2);text-decoration:underline;opacity:1}.quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:600px}.quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:none;border-bottom:2px solid #ccc;background:transparent;outline:none;box-shadow:none;font-size:14px}.quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{color:#666;background:transparent;border-color:#6b6b6b;outline:none;box-shadow:none}.quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{position:absolute}.quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:24px;text-transform:uppercase;font-weight:bolder;background-color:transparent;border-color:#fff;border-radius:0;line-height:2;padding-left:40px;padding-right:40px}.quotes-footer[_ngcontent-%COMP%]{position:fixed;bottom:40px;left:0;width:100%}.quotes-step[_ngcontent-%COMP%]{position:relative;margin:0 auto;width:95%}"],data:{animation:[Object(l.o)("inOutAnimation",[Object(l.n)(":enter",[Object(l.m)({height:0,opacity:0}),Object(l.e)("1.5s ease-out",Object(l.m)({height:205,opacity:1}))]),Object(l.n)(":leave",[Object(l.m)({height:205,opacity:1}),Object(l.e)("1.5s ease-in",Object(l.m)({height:0,opacity:0}))])])]}}),w),C=["modal"],_=function(t){return{"background-image":t}},M=function(){return["/category/video"]},q=function(){return["/category/animation"]},z=function(){return["/category/mobile"]},S=((y=function(){function e(){t(this,e),this.backgroundUrl=""}return o(e,[{key:"ngOnInit",value:function(){this.setBackgroundUrl("video")}},{key:"ngAfterViewInit",value:function(){}},{key:"setBackgroundUrl",value:function(t){this.backgroundUrl="assets/images/categories/".concat(t,"/").concat(this.randomIntFromInterval(1,2),".png")}},{key:"randomIntFromInterval",value:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)}}]),e}()).\u0275fac=function(t){return new(t||y)},y.\u0275cmp=c.Eb({type:y,selectors:[["app-works"]],viewQuery:function(t,e){var o;1&t&&c.zc(C,!0),2&t&&c.lc(o=c.Xb())&&(e.modal=o.first)},decls:63,vars:9,consts:[[1,"works-wrapper"],[1,"container-fluid","h-100"],[1,"row","works-items","justify-content-center","h-100",3,"ngStyle"],[1,"col-12","col-lg-4","works-item","border-animated","draw",3,"routerLink","mouseenter"],[1,"works-item-content"],[1,"number"],["href","https://geekpowr.com/#/category/video"],[1,"works-item-content-hover"],["href","https://geekpowr.com/#/category/animation"],["href","https://geekpowr.com/#/category/mobile"],[1,"container-fluid","our-clients"],[1,"my-5"],[1,"row"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-one"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-two"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-three"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-four"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-five"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-six"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-seven"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-eight"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-ten"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-nine"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-eleven"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-twelve"],[1,"row","know-us"],[1,"yellow-button",3,"click"],["modal",""]],template:function(t,e){if(1&t){var o=c.Qb();c.Pb(0,"div",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Pb(3,"div",3),c.Wb("mouseenter",(function(){return e.setBackgroundUrl("video")})),c.Pb(4,"div",4),c.Pb(5,"div",5),c.wc(6,"01"),c.Ob(),c.Pb(7,"a",6),c.Pb(8,"h4"),c.wc(9,"Video Production"),c.Ob(),c.Ob(),c.Ob(),c.Pb(10,"div",7),c.Pb(11,"h3"),c.wc(12,"V"),c.Ob(),c.Ob(),c.Ob(),c.Pb(13,"div",3),c.Wb("mouseenter",(function(){return e.setBackgroundUrl("animation")})),c.Pb(14,"div",4),c.Pb(15,"div",5),c.wc(16,"02"),c.Ob(),c.Pb(17,"a",8),c.Pb(18,"h4"),c.wc(19,"Animation"),c.Ob(),c.Ob(),c.Ob(),c.Pb(20,"div",7),c.Pb(21,"h3"),c.wc(22,"A"),c.Ob(),c.Ob(),c.Ob(),c.Pb(23,"div",3),c.Wb("mouseenter",(function(){return e.setBackgroundUrl("mobile")})),c.Pb(24,"div",4),c.Pb(25,"div",5),c.wc(26,"03"),c.Ob(),c.Pb(27,"a",9),c.Pb(28,"h4"),c.wc(29,"Mobile & Platforms"),c.Ob(),c.Ob(),c.Ob(),c.Pb(30,"div",7),c.Pb(31,"h3"),c.wc(32,"M"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(33,"div",10),c.Pb(34,"h1",11),c.wc(35,"Kudos"),c.Ob(),c.Pb(36,"div",12),c.Lb(37,"div",13),c.Lb(38,"div",14),c.Lb(39,"div",15),c.Lb(40,"div",16),c.Ob(),c.Pb(41,"div",12),c.Lb(42,"div",17),c.Lb(43,"div",18),c.Lb(44,"div",19),c.Lb(45,"div",20),c.Ob(),c.Pb(46,"div",12),c.Lb(47,"div",21),c.Lb(48,"div",22),c.Lb(49,"div",23),c.Lb(50,"div",24),c.Ob(),c.Ob(),c.Pb(51,"div",25),c.Pb(52,"h3"),c.wc(53,"Get to know us!"),c.Ob(),c.Pb(54,"p"),c.wc(55," Take 3-step survey and we will come "),c.Lb(56,"br"),c.wc(57," to you shortly with a solution "),c.Ob(),c.Pb(58,"button",26),c.Wb("click",(function(){return c.oc(o),c.mc(61).open()})),c.wc(59,"Get a Quote"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(60,"app-video-popup",null,27),c.Lb(62,"app-quotes"),c.Ob()}2&t&&(c.yb(2),c.gc("ngStyle",c.jc(4,_,"url("+e.backgroundUrl+")")),c.yb(1),c.gc("routerLink",c.ic(6,M)),c.yb(10),c.gc("routerLink",c.ic(7,q)),c.yb(10),c.gc("routerLink",c.ic(8,z)))},directives:[r.l,a.e,s.a,x],styles:['.works-items[_ngcontent-%COMP%]{background-repeat:no-repeat;background-position:50%;transition:background .5s ease-in;background-color:#1a1a1a;background-size:cover}.works-items[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{outline:1px solid hsla(0,0%,100%,.2);max-height:1080px;height:-webkit-fill-available;height:100vh}.works-item[_ngcontent-%COMP%]{cursor:pointer;background-color:transparent;transition:all 1s linear}.works-item[_ngcontent-%COMP%]:hover{background-color:#1a1a1a;background-image:url(white-line.png);background-repeat:no-repeat;background-position:50%;background-size:270px}.works-item[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]{-webkit-animation:blink 1s linear 0s 3;animation:blink 1s linear 0s 3}.works-item[_ngcontent-%COMP%]:hover   .works-item-content-hover[_ngcontent-%COMP%]{display:block}.works-item-content[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-top:33px;margin-bottom:15px;font-size:14px}.works-item-content[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%], .works-item-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-left:48px;line-height:24px;letter-spacing:1px;color:#fff}.works-item-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:600;font-size:24px}.works-item-content-hover[_ngcontent-%COMP%]{display:none;height:80%;position:relative}.works-item-content-hover[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700;font-size:240px;line-height:1;align-items:center;letter-spacing:1px;color:#fff;transform:translate3d(-50%,-50%,1px);position:absolute;top:50%;left:50%}.works-wrapper[_ngcontent-%COMP%]{background-color:#1a1a1a;position:relative;width:100%;min-height:678px}.border-animated[_ngcontent-%COMP%]{background:none;border:0;box-sizing:border-box;box-shadow:inset 0 0 0 2px transparent;color:transparent;font-size:inherit;font-weight:700;position:relative;vertical-align:middle}.border-animated[_ngcontent-%COMP%]:after, .border-animated[_ngcontent-%COMP%]:before{box-sizing:inherit;content:"";position:absolute;width:100%;height:100%}.draw[_ngcontent-%COMP%]{transition:color .25s}.draw[_ngcontent-%COMP%]:after, .draw[_ngcontent-%COMP%]:before{border:1px solid transparent;width:0;height:0}.draw[_ngcontent-%COMP%]:before{top:0;left:0}.draw[_ngcontent-%COMP%]:after{bottom:0;right:0}.draw[_ngcontent-%COMP%]:hover{color:#fff}.draw[_ngcontent-%COMP%]:hover:after, .draw[_ngcontent-%COMP%]:hover:before{width:100%;height:100%}.draw[_ngcontent-%COMP%]:hover:before{border-top-color:#fff;border-right-color:#fff;transition:width .25s ease-out,height .25s ease-out .25s}.draw[_ngcontent-%COMP%]:hover:after{border-bottom-color:#fff;border-left-color:#fff;transition:border-color 0s ease-out .5s,width .25s ease-out .5s,height .25s ease-out .75s}.know-us[_ngcontent-%COMP%]{height:640px;background-color:#1a1a1a;display:flex;flex-wrap:nowrap;flex-direction:column;justify-content:center;align-items:center;align-content:center}.know-us[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;margin:20px}.know-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700;font-size:64px;display:flex;align-items:center;letter-spacing:1px;text-transform:capitalize}.know-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .know-us[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:gilroy;font-style:normal;text-align:center;color:#fff}.know-us[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:18px;line-height:114%}@-webkit-keyframes blink{0%{opacity:0}50%{opacity:.5}to{opacity:1}}@keyframes blink{0%{opacity:0}50%{opacity:.5}to{opacity:1}}']}),y),j=((P=function e(){t(this,e)}).\u0275mod=c.Ib({type:P}),P.\u0275inj=c.Hb({factory:function(t){return new(t||P)},imports:[[r.b,b.e,b.h]]}),P),F=i("AKxs"),L=[{path:"",component:S}],V=((k=function e(){t(this,e)}).\u0275mod=c.Ib({type:k}),k.\u0275inj=c.Hb({factory:function(t){return new(t||k)},imports:[[r.b,a.h.forChild(L),j,F.a]]}),k)}}])}();
(this.webpackJsonpfire_talk=this.webpackJsonpfire_talk||[]).push([[0],{57:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var r,a=t(2),c=t.n(a),i=t(30),o=t.n(i),s=t(8),l=t(4),d=t(24),b=t(9),p=t(15),u=t(41),x=t(19),j=t(5),h=t(1),f=j.b.div(r||(r=Object(l.a)(["\n  display: flex;\n  width: 100%;\n  height: 54px;\n  background-color: #eeeeee;\n"]))),g={width:"86.5px",lineHeight:4,textAlign:"center",color:"#aca8a8"},O={color:"orange"},m=function(e){e.userObj;return Object(h.jsxs)(f,{children:[Object(h.jsx)(d.b,{to:"/",style:g,exact:!0,activeStyle:O,children:Object(h.jsx)(p.a,{icon:x.f,size:"2x"})}),Object(h.jsx)(d.b,{to:"/chattingplace",style:g,activeStyle:O,children:Object(h.jsx)(p.a,{icon:x.b,size:"2x"})}),Object(h.jsx)(d.b,{to:"/myprofile",style:g,activeStyle:O,children:Object(h.jsx)(p.a,{icon:x.e,size:"2x"})}),Object(h.jsx)(d.b,{to:"/news",style:g,activeStyle:O,children:Object(h.jsx)(p.a,{icon:u.a,size:"2x"})})]})},v=t(22),w=t(10),y=t.n(w),k=t(14),A=t(26);t(55),t(60),t(59);A.a.initializeApp({apiKey:"AIzaSyDcnJ9pkFnnH7Cq8DU3ksTWCpsLI_YffN4",authDomain:"firetalk-6ff79.firebaseapp.com",projectId:"firetalk-6ff79",storageBucket:"firetalk-6ff79.appspot.com",messagingSenderId:"957982515505",appId:"1:957982515505:web:4a7dc582557f4be980d010"});var I,S,E,U,C,B,R,D,N,z,F,L,M,Q,G,P,H,K,T,q,W,Y,Z,V,X,J,_,$,ee,ne,te,re,ae,ce,ie,oe,se,le,de,be,pe,ue,xe=A.a,je=A.a.auth(),he=A.a.firestore(),fe=A.a.storage(),ge=j.b.div(I||(I=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 1;\n"]))),Oe=j.b.div(S||(S=Object(l.a)(["\n  width: 50vh;\n\n  padding: 30px;\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-direction: column;\n"]))),me=j.b.div(E||(E=Object(l.a)(["\n  display: flex;\n"]))),ve=j.b.h2(U||(U=Object(l.a)(["\n  margin: 0 14px 0 6px;\n  padding: 10px;\n  color: orange;\n"]))),we=j.b.div(C||(C=Object(l.a)(["\n  border: none;\n  height: 10px;\n  color: gray;\n  &:hover {\n    color: black;\n  }\n  cursor: pointer;\n"]))),ye=j.b.form(B||(B=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 28vh;\n  padding: 10px;\n  position: relative;\n"]))),ke=j.b.input(R||(R=Object(l.a)(["\n  height: 6vh;\n  margin: 10px 0;\n  border: 1.5px solid rgb(214, 212, 212);\n  border-radius: 10px;\n  font-size: 2vh;\n  font-weight: 400;\n  padding: 1vh;\n  position: relative;\n"]))),Ae=j.b.button(D||(D=Object(l.a)(["\n  position: relative;\n  top: 40px;\n  left: -40px;\n  width: 326.5px;\n  border-radius: 0 0 20px 20px;\n  height: 50px;\n  border: none;\n  &:hover {\n    background-color: orange;\n    color: white;\n  }\n  cursor: pointer;\n"]))),Ie=function(e){var n=e.setIsShowing,t=e.refreshUser,r=Object(a.useState)(""),c=Object(s.a)(r,2),o=c[0],l=c[1],d=Object(a.useState)(""),b=Object(s.a)(d,2),u=b[0],j=b[1],f=function(e){var n=e.target,t=n.name,r=n.value;"email"===t?l(r):"password"===t&&j(r)},g=function(){var e=Object(k.a)(y.a.mark((function e(n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,je.createUserWithEmailAndPassword(o,u);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0.message);case 9:t();case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}();return Object(i.createPortal)(Object(h.jsx)(ge,{children:Object(h.jsxs)(Oe,{children:[Object(h.jsxs)(me,{children:[Object(h.jsx)("img",{src:"https://img.icons8.com/color/50/000000/google-firebase-console.png",alt:"firebase"}),Object(h.jsx)(ve,{children:"\ud30c\uc774\uc5b4 \ud1a0\ud06c \uac00\uc785"}),Object(h.jsx)(we,{children:Object(h.jsx)(p.a,{icon:x.d,onClick:function(){n(!1)}})})]}),Object(h.jsxs)(ye,{onSubmit:g,children:[Object(h.jsx)(ke,{name:"email",placeholder:"\uc774\uba54\uc77c",spellcheck:"false",autocomplete:"off",onChange:f}),Object(h.jsx)(ke,{name:"password",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",spellcheck:"false",onChange:f}),Object(h.jsx)(Ae,{type:"submit",children:"\ud68c\uc6d0\uac00\uc785"})]})]})}),document.getElementById("modal"))},Se={fontSize:"25px",fontWeight:"500",margin:"0 10px",position:"relative",top:"-10px",color:"orange"},Ee={display:"flex",flexDirection:"column"},Ue={width:"220px",height:"40px",margin:"10px 0",padding:"0 10px",borderRadius:"20px",border:"1px solid gray",outline:"none"},Ce={height:"40px",backgroundColor:"orange",color:"white",margin:"10px 0",fontWeight:"600",border:"none",borderRadius:"20px",cursor:"pointer"},Be={fontSize:"13px",margin:"0 20px",color:"orange",cursor:"pointer"},Re={margin:"40px 0",borderRadius:"20px"},De={margin:"10px 10px",textAlign:"center",border:"none"},Ne={width:"50px",height:"50px",margin:"5px 10px",cursor:"pointer",backgroundSize:"cover",backgroundColor:"white",border:"none",borderRadius:"50%",boxShadow:"1px 1px 5px gray"},ze=function(e){var n=e.refreshUser,t=(e.haveProfile,Object(a.useState)("")),r=Object(s.a)(t,2),c=r[0],i=r[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),d=l[0],b=l[1],p=Object(a.useState)(""),u=Object(s.a)(p,2),x=u[0],j=u[1],f=Object(a.useState)(!1),g=Object(s.a)(f,2),O=g[0],m=g[1],w=function(e){var n=e.target,t=n.name,r=n.value;"email"===t?i(r):"password"===t&&b(r)},A=function(){var e=Object(k.a)(y.a.mark((function e(t){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,je.signInWithEmailAndPassword(c,d);case 4:r=e.sent,console.log(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),j(e.t0.message);case 11:n();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}(),I=function(){var e=Object(k.a)(y.a.mark((function e(n){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===n.target.name&&(t=new xe.auth.GoogleAuthProvider),e.next=4,je.signInWithPopup(t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{style:{position:"relative",top:"50px"},children:[Object(h.jsx)("img",{src:"https://img.icons8.com/color/50/000000/google-firebase-console.png",alt:"firebase"}),Object(h.jsx)("span",{style:Se,children:"FIRE TALK"}),Object(h.jsxs)("form",{onSubmit:A,style:Ee,children:[Object(h.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:c,onChange:w,style:Ue,autoComplete:"off"}),Object(h.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:d,onChange:w,style:Ue,autoComplete:"off"}),Object(h.jsx)("input",{type:"submit",value:"\ub85c\uadf8\uc778",style:Ce}),x]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{style:Be,children:"\ube44\ubc00\ubc88\ud638 \ucc3e\uae30"}),Object(h.jsx)("span",{style:Be,onClick:function(){m(!0)},children:"\ud68c\uc6d0\uac00\uc785"}),Object(h.jsx)("div",{children:O&&Object(h.jsx)(Ie,{setIsShowing:m,refreshUser:n})})]}),Object(h.jsxs)("div",{style:Re,children:[Object(h.jsx)("div",{style:De,children:"\uac04\ud3b8\ud558\uac8c SNS \ub85c\uadf8\uc778"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:I,name:"google",style:Object(v.a)(Object(v.a)({},Ne),{},{backgroundImage:"url('https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg')"})}),Object(h.jsx)("button",{onClick:I,name:"google",style:Object(v.a)(Object(v.a)({},Ne),{},{backgroundImage:"url('https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg')",backgroundSize:"cover"})}),Object(h.jsx)("button",{onClick:I,name:"github",style:Object(v.a)(Object(v.a)({},Ne),{},{backgroundImage:"url('https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg')"})})]})]})]})},Fe=t(61),Le=j.b.div(N||(N=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  position: relative;\n  top: -35px;\n  width: 100%;\n"]))),Me=j.b.h2(z||(z=Object(l.a)(["\n  padding: 10px 0;\n  margin: 0;\n  border-bottom: 2px solid #eee;\n"]))),Qe=j.b.img(F||(F=Object(l.a)(["\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  margin: 20px auto 0 auto;\n  object-fit: cover;\n"]))),Ge=j.b.h4(L||(L=Object(l.a)(["\n  text-align: center;\n  cursor: pointer;\n  margin: 10px;\n"]))),Pe=j.b.input(M||(M=Object(l.a)(["\n  border: none;\n  border-bottom: 2px solid gray;\n  width: 300px;\n  margin-bottom: 20px;\n"]))),He=j.b.button(Q||(Q=Object(l.a)(["\n  color: white;\n  background-color: orange;\n  border: none;\n  border-radius: 20px;\n  width: 50px;\n  height: 30px;\n  font-weight: 500;\n  margin-left: 250px;\n  cursor: pointer;\n"]))),Ke=function(e){var n=e.refreshUser,t=e.userObj,r=e.handleErrorImage,c=Object(a.useState)(""),i=Object(s.a)(c,2),o=i[0],l=i[1],d=Object(a.useState)(""),b=Object(s.a)(d,2),p=b[0],u=b[1],x=Object(a.useState)(""),j=Object(s.a)(x,2),f=j[0],g=j[1],O=function(){var e=Object(k.a)(y.a.mark((function e(r){var a,c,i,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),a="",!p){e.next=10;break}return c=fe.ref().child("".concat(t.uid,"/").concat(Object(Fe.a)())),e.next=6,c.putString(p,"data_url");case 6:return i=e.sent,e.next=9,i.ref.getDownloadURL();case 9:a=e.sent;case 10:return t.updateProfile({displayName:o,photoURL:a}),s={userState:f,creatorId:t.uid,photoURL:a,displayName:o},e.next=14,he.collection("FireTalk_User").add(s);case 14:n();case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(h.jsxs)(Le,{children:[Object(h.jsx)(Me,{children:"\ud504\ub85c\ud544 \uc124\uc815"}),Object(h.jsx)(Qe,{src:p,alt:"userphoto",onError:r}),Object(h.jsxs)("form",{onSubmit:O,children:[Object(h.jsx)("input",{id:"imgFile",type:"file",accept:"image/*",onChange:function(e){var n=e.target.files[0],t=new FileReader;n&&(t.readAsDataURL(n),t.onloadend=function(e){var n=e.currentTarget.result;u(n)})},style:{display:"none"}}),Object(h.jsx)("label",{htmlFor:"imgFile",children:Object(h.jsx)(Ge,{children:"\ud074\ub9ad\ud558\uc5ec \uc774\ubbf8\uc9c0 \uc120\ud0dd"})}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"column",padding:"0px 10px",margin:"40px 0"},children:[Object(h.jsx)("h5",{style:{margin:"10px 0",color:"orange"},children:"\ub2c9\ub124\uc784"}),Object(h.jsx)(Pe,{type:"text",placeholder:"...",onChange:function(e){var n=e.target.value;l(n)},value:o}),Object(h.jsx)("h5",{style:{margin:"10px 0",color:"orange"},children:"\ub0b4 \uc0c1\ud0dc"}),Object(h.jsx)(Pe,{type:"text",placeholder:"...",onChange:function(e){var n=e.target.value;g(n)},value:f}),Object(h.jsx)(He,{type:"submit",children:"\uc644\ub8cc"})]})]})]})},Te=j.b.div(G||(G=Object(l.a)(["\n  display: flex;\n\n  padding: 10px 10px;\n  border-bottom: 1px solid #eee;\n"]))),qe=j.b.img(P||(P=Object(l.a)(["\n  width: 40px;\n  height: 40px;\n  object-fit: cover;\n  border-radius: 50%;\n"]))),We=j.b.div(H||(H=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0px 7px;\n"]))),Ye=j.b.h5(K||(K=Object(l.a)(["\n  margin: 2px 0;\n  font-weight: 500;\n  font-size: 13px;\n"]))),Ze=j.b.div(T||(T=Object(l.a)(["\n  font-size: 5px;\n  color: gray;\n"]))),Ve=function(e){var n=e.user,t=e.handleErrorImage;return Object(h.jsxs)(Te,{children:[Object(h.jsx)(qe,{src:n.photoURL,onError:t}),Object(h.jsxs)(We,{children:[Object(h.jsx)(Ye,{children:n.displayName}),Object(h.jsx)(Ze,{children:n.userState})]})]})},Xe=j.b.div(q||(q=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n"]))),Je=j.b.h2(W||(W=Object(l.a)(["\n  padding: 10px 0;\n  margin: 3px 20px;\n  border-bottom: 2px solid #eee;\n"]))),_e=j.b.div(Y||(Y=Object(l.a)(["\n  padding: 0px 20px;\n  height: 390px;\n  overflow: auto;\n  &::-webkit-scrollbar {\n    width: 6px;\n    height: 8px;\n    background: #ffffff;\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 3.5px;\n    background-color: #ced4da;\n\n    &:hover {\n      background-color: #adb5bd;\n    }\n  }\n  &::-webkit-scrollbar-track {\n    background: #ffffff;\n  }\n"]))),$e=j.b.div(Z||(Z=Object(l.a)(["\n  display: flex;\n  border-radius: 10px;\n  height: 90px;\n  margin: 5px 20px;\n  padding: 5px;\n  border: 3px dotted #eee;\n"]))),en=j.b.img(V||(V=Object(l.a)(["\n  width: 75px;\n  height: 75px;\n  object-fit: cover;\n  border-radius: 50%;\n"]))),nn=j.b.div(X||(X=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n"]))),tn=j.b.h3(J||(J=Object(l.a)(["\n  margin: 2px 0;\n"]))),rn=j.b.div(_||(_=Object(l.a)(["\n  font-size: 12px;\n  color: gray;\n"]))),an=j.b.h4($||($=Object(l.a)(["\n  color: orange;\n  margin: 10px 25px;\n"]))),cn=function(e){var n=e.userObj,t=e.handleErrorImage,r=Object(a.useState)(""),c=Object(s.a)(r,2),i=c[0],o=c[1],l=Object(a.useState)(""),d=Object(s.a)(l,2),b=d[0],p=d[1],u=Object(a.useState)(""),x=Object(s.a)(u,2),j=x[0],f=x[1],g=Object(a.useState)([]),O=Object(s.a)(g,2),m=O[0],v=O[1],w=function(){var e=Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.collection("FireTalk_User").where("creatorId","==",n.uid).onSnapshot((function(e){var n=e.docs.map((function(e){return e.data()}))[0];n&&(f(n.userState),p(n.displayName),o(n.photoURL))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.collectionGroup("FireTalk_User").onSnapshot((function(e){var t=e.docs.map((function(e){return e.data()}));v(t.filter((function(e){return e.creatorId!==n.uid})))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){w(),A()}),[]),Object(h.jsxs)(Xe,{children:[Object(h.jsx)(Je,{children:"\ud68c\uc6d0"}),Object(h.jsxs)($e,{children:[Object(h.jsx)(en,{src:i||n.photoURL,alt:"MeImg",onError:t}),Object(h.jsxs)(nn,{children:[Object(h.jsx)(tn,{children:b||n.displayName}),Object(h.jsx)(rn,{children:j||""})]})]}),Object(h.jsx)(an,{children:"\ud68c\uc6d0\ub4e4"}),Object(h.jsx)(_e,{children:m.map((function(e){return Object(h.jsx)(Ve,{user:e,handleErrorImage:t},e.creatorId)}))})]})},on=function(){var e=Object(b.f)();return Object(h.jsx)("button",{onClick:function(){je.signOut(),e.push("/")},children:"SignOut"})},sn=j.b.div(ee||(ee=Object(l.a)(["\n  display: flex;\n  margin: 5px 0;\n  ","\n"])),(function(e){return e.isOwner&&Object(j.a)(ne||(ne=Object(l.a)(["\n      flex-direction: row-reverse;\n    "])))})),ln=j.b.div(te||(te=Object(l.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  ","\n"])),(function(e){return e.isOwner&&Object(j.a)(re||(re=Object(l.a)(["\n      align-items: flex-end;\n    "])))})),dn=j.b.span(ae||(ae=Object(l.a)(["\n  padding: 10px 10px;\n  max-width: 200px;\n  border-radius: 10px;\n  font-size: 10px;\n  line-height: 1.5;\n  background-color: #eeeeee;\n\n  ","\n"])),(function(e){return e.isOwner&&Object(j.a)(ce||(ce=Object(l.a)(["\n      background-color: #facc2e;\n    "])))})),bn=j.b.img(ie||(ie=Object(l.a)(["\n  margin: 5px 0;\n  object-fit: cover;\n  max-width: 250px;\n  max-height: 200px;\n  border-radius: 20px;\n"]))),pn=j.b.button(oe||(oe=Object(l.a)(["\n  background: transparent;\n  border: none;\n  &:hover {\n    color: black;\n  }\n  color: #ccc;\n  cursor: pointer;\n"]))),un=function(e){var n=e.talkObj,t=e.isOwner,r=e.scrollRef,a=function(){var e=Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc815\ub9d0\ub85c \uc9c0\uc6b0\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,he.doc("FireTalk/".concat(n.id)).delete();case 4:if(""===n.attachmentUrl){e.next=7;break}return e.next=7,fe.refFromURL(n.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(sn,{isOwner:t,ref:r,children:[Object(h.jsxs)(ln,{isOwner:t,children:[Object(h.jsx)(dn,{isOwner:t,children:n.text}),n.attachmentUrl&&Object(h.jsx)(bn,{src:n.attachmentUrl,alt:"thumbnail"})]}),t&&Object(h.jsx)(pn,{onClick:a,children:Object(h.jsx)(p.a,{icon:x.d})})]})},xn={display:"flex",flexDirection:"column",position:"relative",width:"100%"},jn={margin:"3px 20px",padding:"10px 0",borderBottom:"2px solid #eee"},hn=j.b.div(se||(se=Object(l.a)(["\n  padding: 10px 20px;\n  height: 500px;\n  overflow: auto;\n  &::-webkit-scrollbar {\n    width: 6px;\n    height: 8px;\n    background: #ffffff;\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 3.5px;\n    background-color: #ced4da;\n\n    &:hover {\n      background-color: #adb5bd;\n    }\n  }\n  &::-webkit-scrollbar-track {\n    background: #ffffff;\n  }\n"]))),fn={width:"100%",display:"flex"},gn={width:"270px",outline:"none",borderRadius:"20px",border:"1px solid #ccc",padding:"0 10px"},On=j.b.div(le||(le=Object(l.a)(["\n  position: absolute;\n  z-index: 1;\n\n  background: orange;\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  border-radius: 10px;\n  bottom: 45px;\n  left: 30px;\n  box-shadow: 1px 1px 5px gray;\n"]))),mn=j.b.button(de||(de=Object(l.a)(["\n  border: none;\n  background: transparent;\n  color: gray;\n  margin: 0 10px;\n  &:hover {\n    color: black;\n  }\n  cursor: pointer;\n"]))),vn=function(e){var n=e.userObj,t=Object(a.useState)(""),r=Object(s.a)(t,2),c=r[0],i=r[1],o=Object(a.useState)([]),l=Object(s.a)(o,2),d=l[0],b=l[1],u=Object(a.useState)(""),j=Object(s.a)(u,2),f=j[0],g=j[1],O=Object(a.useRef)();Object(a.useEffect)((function(){var e=he.collection("FireTalk").orderBy("createdAt","asc").onSnapshot((function(n){var t=n.docs.map((function(e){return Object(v.a)({id:e.id},e.data())}));return b(t),function(){return e()}}))}),[]);var m=function(){var e=Object(k.a)(y.a.mark((function e(t){var r,a,o,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r="",""===f){e.next=10;break}return a=fe.ref().child("".concat(n.uid,"/").concat(Object(Fe.a)())),e.next=6,a.putString(f,"data_url");case 6:return o=e.sent,e.next=9,o.ref.getDownloadURL();case 9:r=e.sent;case 10:return s={text:c,createdAt:Date.now(),creatorId:n.uid,attachmentUrl:r},e.next=13,he.collection("FireTalk").add(s);case 13:i(""),g(""),O.current.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"});case 16:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{style:xn,children:[Object(h.jsx)("h2",{style:jn,children:"\ucc44\ud305"}),Object(h.jsx)(hn,{children:d.map((function(e){return Object(h.jsx)(un,{scrollRef:O,talkObj:e,isOwner:e.creatorId===n.uid},e.id)}))}),f&&Object(h.jsxs)(On,{children:[Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(h.jsx)("h4",{style:{margin:"5px 0",background:"orange",padding:"5px 20px"},children:"\uc0ac\uc9c4 \ucca8\ubd80\ud558\uae30"}),Object(h.jsx)(mn,{onClick:function(){return g(null)},children:Object(h.jsx)(p.a,{icon:x.d})})]}),Object(h.jsx)("img",{src:f,style:{padding:"5px ",background:"white",maxHeight:"150px",objectFit:"contain",textAlign:"left"},alt:"thumbnail"})]}),Object(h.jsxs)("form",{onSubmit:m,style:fn,children:[Object(h.jsx)("label",{htmlFor:"file",children:Object(h.jsx)(p.a,{size:"2x",icon:x.c,style:{width:"28px",height:"28px",color:"orange",cursor:"pointer",margin:" 0 5px"}})}),Object(h.jsx)("input",{id:"file",type:"file",accept:"image/*",onChange:function(e){var n=e.target.files[0],t=new FileReader;n&&(t.readAsDataURL(n),t.onloadend=function(e){var n=e.currentTarget.result;g(n)})},style:{display:"none"}}),Object(h.jsx)("input",{type:"text",value:c,placeholder:"...",maxLength:"120",onChange:function(e){var n=e.target.value;i(n)},style:gn,required:!0}),Object(h.jsx)("button",{style:{border:"none",background:"transparent"},children:Object(h.jsx)(p.a,{icon:x.a,size:"2x",style:{color:"orange",cursor:"pointer"}})})]})]})},wn=function(){return Object(h.jsx)("div",{})},yn=j.b.div(be||(be=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 650px;\n  width: 350px;\n  align-items: center;\n  box-shadow: 1px 1px 10px gray;\n  border-radius: 10px;\n"]))),kn=j.b.div(pe||(pe=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 600px;\n  width: 100%;\n"]))),An=function(e){var n=e.refreshUser,t=e.isLoggedIn,r=e.userObj,a=e.haveProfile,c=function(e){e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAADACAMAAACKwPcLAAAANlBMVEVmZmb////u8vpwb3D29vbY2NixsbGLi4vi4uKCgoLr6+vPz8+fn594eHjFxcWop6i7u7uVlZUD7tw7AAAEB0lEQVR4nO2ba5ujIAxG2wHBu+3//7MzjnhpV60kr5vBJ+fjri6cQhIE9nZLnC/pDrBRA3nUQB41kEcN5FEDedRAHjWQRw3kUQN51EAeNZBHDeRRA3nUQB41kEcN5FEDedRAHjXYxjxdld17bFa5pzmrnZMMmi6/v5F3zSlNnWJQZ+/dH8jqExo7weBZrve/p3zCm4MbNBu//zQO6LmENujsvsBPXHfYFrEGplp2tXK+6P+08K5ailXQvAQ1MHMCsm3x+ndFO0vkSAWkQTMJWLfSR+PsGQpAg3kEHhsdNI8TFHAGk0Dptx/yJVwBZzAGcbbbNzMm2wrVLsygCz1rPz3YhgdRSRVl0NiDApOCBZU2lEGYHBn62c+ADJ4hiA/FpwnhjFkjgQxCn3ay0BIffCFNYwzqUAeOPh/qAmSxjTEI32KHc7yxuEiAGDTDT+qOv+GGNxDpCGLQRQ7BNAiImgAxyI+WgpmhKOSAxhEGZpgSxecnZ4rhHcDqCGEwFAMb95JFlQSEgaMs1arY4N8CYVBRopKkvQbCIIupxyMeVREQBjY+kMdQjgyeNRAGQ1r5P2/9ixr0qAEPnEHKkZx+NiWV1z9V0dJfVaS/skt/dZ3+F84FvjLT/9JPf7flAjte6e86XmDnN/3d9wucgKR/CnWBk8ALnMamfyK+VEj0VsIFboZc4HbOLf0bUrcL3FL7UWh3BSK3lT6DNvDVXv97yhp7eRZr4D9MoRAJa7mWDNKgONT/Xwfg1VngquLx2svs0fmwvvC+e7zZ4eIBZuCXN33Lx8rXi3cvd7EB23W/oAzcYoq8l+OZxi089xexh8EYmHmOfArTenawkJmE2S/aX9K9MTtAAhphUEwriepQwTXzlAMoAAwmAXt486HIcQp8g/Eb/55HrHhMC1NgG0zfBG1caqlR4cw2GLNQ1N57z6TATKpcg7EQE+rTqMDc+WIaeOoI9NR0+wU8g3EHlCQwK7BCgWcQ5hD5MKkFzCOWQZhD9B3QMZFxUirLIOQhxi56wc9HHIMwjVk7oI4dzByDkjmHekIuYAwCw8AjcuE4kPRIYBjEHmBuMAwC/UyNbhB/iLxOzawJdAOHGYJxEIhFkWPAbHgm/BTU18kGBWBBMBCmY+QdsQmyQccMwAU5K6DIBkMmOnwPYQ/HWhyRDXhD/0IoLMS3qQYFq9U3WL8G1aDmL4tnMk5Zpho4XBiMnxnEUKYakP7XxBYdZ0CpBqR7vluw7v9SDXK8AbG2UA2QqYj3r6kBBgmDv4MayKMG8qiBPGogjxrIowbyqIE8aiCPGsijBvKogTxqII8ayKMG8qiBPGogjxrIowbyqIE8aiCPGsijBvKogTxqII8ayKMG8qiBPGogz9c3668W/KAjNpwAAAAASUVORK5CYII="};return Object(h.jsx)(yn,{children:Object(h.jsxs)(d.a,{basename:"/fire_talk",children:[Object(h.jsx)(kn,{children:Object(h.jsx)(b.c,{children:t?a?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b.a,{exact:!0,path:"/",children:Object(h.jsx)(cn,{userObj:r,handleErrorImage:c})}),Object(h.jsx)(b.a,{path:"/chattingplace",children:Object(h.jsx)(vn,{userObj:r})}),Object(h.jsx)(b.a,{path:"/myprofile",children:Object(h.jsx)(on,{userObj:r,refreshUser:n})}),Object(h.jsx)(b.a,{path:"/news",userObj:r,children:Object(h.jsx)(wn,{})})]}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(b.a,{path:"/",children:Object(h.jsx)(Ke,{userObj:r,refreshUser:n,handleErrorImage:c})})}):Object(h.jsx)(b.a,{exact:!0,path:"/",children:Object(h.jsx)(ze,{refreshUser:n,haveProfile:a})})})}),t&&a&&Object(h.jsx)(m,{userObj:r})]})})},In=(t(57),j.b.div(ue||(ue=Object(l.a)(["\n  height: 654px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))));var Sn=function(){var e=Object(a.useState)(!1),n=Object(s.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(null),i=Object(s.a)(c,2),o=i[0],l=i[1],d=Object(a.useState)(!1),b=Object(s.a)(d,2),p=b[0],u=b[1];return Object(a.useEffect)((function(){je.onAuthStateChanged((function(e){e?(l({displayName:e.displayName,photoURL:e.photoURL,uid:e.uid,updateProfile:function(n){return e.updateProfile(n)}}),null!==e.displayName&&u(!0)):(l(null),u(!1)),r(!0)}))}),[]),Object(h.jsx)(h.Fragment,{children:t?Object(h.jsx)(In,{children:Object(h.jsx)(An,{refreshUser:function(){var e=je.currentUser;l({displayName:e.displayName,photoURL:e.photoURL,uid:e.uid,updateProfile:function(n){return e.updateProfile(n)}})},isLoggedIn:Boolean(o),userObj:o,haveProfile:p})}):"Initializing..."})};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(Sn,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.b61d64ed.chunk.js.map
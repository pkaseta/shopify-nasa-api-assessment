(this["webpackJsonpshopify-front-end-assessment"]=this["webpackJsonpshopify-front-end-assessment"]||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(11),r=a.n(c),i=a(40),o=a.n(i),d=a(42),j=a(6),l=a(41),b=(a(49),a(71)),u=(a(50),a.p+"static/media/thumbsUp.2e3233aa.png"),h=a.p+"static/media/thumbsDown.c75e7788.png",O=a(1);var x=function(e){var t=Object(n.useState)(!1),a=Object(j.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(h),i=Object(j.a)(r,2),o=i[0],d=i[1],x=Object(n.useState)("Thumbs Up"),m=Object(j.a)(x,2),p=m[0],g=m[1],v=e.apiCallData;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(b.a.Header,{children:v.copyright?Object(O.jsxs)("h6",{children:["\xa9 ",v.copyright]}):Object(O.jsx)("h6",{children:"\xa9 NASA"})}),"image"===v.media_type?Object(O.jsx)(b.a.Img,{variant:"top",src:v.hdurl,alt:v.title}):"video"===v.media_type?Object(O.jsx)("video",{src:v.url,controls:"controls",autoPlay:!0}):"",Object(O.jsxs)(b.a.Body,{children:[Object(O.jsx)("h6",{children:v.date}),Object(O.jsx)(b.a.Title,{children:v.title}),v.explanation]}),Object(O.jsxs)(b.a.Footer,{children:[Object(O.jsx)(l.a,{variant:"dark",onClick:function(){if(!s)return c(!0),d(u),g("Thumbs Down"),void console.log("Liked");c(!1),d(h),g("Thumbs Up"),console.log("Not Like")},children:s?"Unlike":"Like"}),Object(O.jsx)(b.a.Img,{src:o,alt:p})]})]})})},m=(a(52),a(70)),p=a(66),g=a(69),v=a.p+"static/media/nasaImg.555adec6.png",f=(a(53),a(68)),D=a(35);a(54);var S=function(e){e.nasaData;var t,a=e.setStartDateHandler,s=e.setEndDateHandler,c=e.setStartDate,r=e.setEndDate,i=e.startDate,o=e.endDate,d=e.submitButtonHAndler,b=Object(n.useState)(!1),u=Object(j.a)(b,2),h=u[0],x=u[1],m=Object(n.useState)(""),p=Object(j.a)(m,2),g=(p[0],p[1],(new Date).getTime()),v=new Date(i).getTime(),S=new Date(o).getTime(),y=function(){return x(!1)};return g<v||g<S?(c(""),r(""),t="Sorry we cannot see into the future",Object(D.b)("".concat(t),{toastId:"custom-id-yes"})):Object(O.jsxs)("div",{children:[Object(O.jsx)(l.a,{variant:"dark",onClick:function(){return x(!0)},children:"Search Dates"}),Object(O.jsxs)(f.a,{show:h,onHide:y,placement:"bottom",children:[Object(O.jsx)(f.a.Header,{closeButton:!0,children:Object(O.jsx)(f.a.Title,{children:"Set Date Parameters (All dates must be todays date or prior)"})}),Object(O.jsxs)(f.a.Body,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Enter a starting date"}),Object(O.jsx)("input",{type:"date",className:"startDate-input",onChange:a})]}),i?Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Enter an ending date (Optional)"}),Object(O.jsx)("input",{type:"date",name:"endDate",onChange:s}),Object(O.jsx)("br",{}),Object(O.jsx)(l.a,{variant:"dark",type:"submit",onClick:function(){d(),y()},children:"Get Images"})]}):""]})]})]})};var y=function(e){return e.setStartDateHandler,e.setEndDateHandler,e.setStartDate,e.setEndDate,e.startDate,e.endDate,e.submitButtonHAndler,Object(O.jsx)(m.a,{expand:"lg",variant:"light",children:Object(O.jsxs)(p.a,{children:[Object(O.jsxs)(m.a.Brand,{onClick:function(){return window.location.reload(!0)},children:[Object(O.jsx)("img",{id:"nasa-logo-img",src:v,alt:"Nasa Logo"}),"Spacetagram"]}),Object(O.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(m.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(g.a,{className:"me-auto",children:[Object(O.jsx)(g.a.Link,{href:"https://github.com/pkaseta/shopify-nasa-api-assessment",children:"GitHub Repo"}),Object(O.jsx)(g.a.Link,{href:"https://api.nasa.gov/",children:"NASA API Docs"})]})})]})})};a(60);var k=function(e){var t=e.setStartDateHandler,a=e.setEndDateHandler,n=e.setStartDate,s=e.setEndDate,c=e.startDate,r=e.endDate,i=e.submitButtonHAndler;return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"welcome-div",children:Object(O.jsxs)("div",{className:"welcome-div-inner-container",children:[Object(O.jsx)("p",{children:"Welcome to Spacetagram!"}),Object(O.jsx)("p",{children:"View the Astronomy pictures/videos of the day since 1996"}),Object(O.jsx)("div",{className:"offCanvas-button-container",children:Object(O.jsx)(S,{setStartDateHandler:t,setEndDateHandler:a,startDate:c,endDate:r,submitButtonHAndler:i,setStartDate:n,setEndDate:s})})]})})})},w=a.p+"static/media/waitingAstronaut.a62f6338.png",H=(a(61),a(67));var N=function(){return Object(O.jsx)(H.a,{animation:"border",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})})};var A=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),r=Object(j.a)(c,2),i=r[0],b=r[1],u=Object(n.useState)(""),h=Object(j.a)(u,2),m=h[0],p=h[1],g=Object(n.useState)(!0),v=Object(j.a)(g,2),f=v[0],D=v[1],S=Object(n.useState)(!1),H=Object(j.a)(S,2),A=H[0],E=H[1],C=["gk8bKq9xEbYbewwnD4OZ7ffHEGKzzVbZit5733Yp"],B=function(){var e=Object(d.a)(o.a.mark((function e(){var t,a,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E(!0),!i||!m){e.next=10;break}return e.next=4,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(C,"&start_date=").concat(i,"&end_date=").concat(m));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,s(a),E(!1);case 10:if(!i||m){e.next=22;break}return E(!0),e.next=14,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(C,"&date=").concat(i));case 14:return n=e.sent,e.next=17,n.json();case 17:c=e.sent,s(c),E(!1),e.next=23;break;case 22:return e.abrupt("return");case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(a),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y,{}),A?Object(O.jsxs)("div",{className:"loading-display",children:[Object(O.jsx)("h1",{children:"Please Wait..."}),Object(O.jsxs)("div",{className:"load-screen",children:[Object(O.jsx)("div",{className:"waiting-image",children:Object(O.jsx)("img",{src:w,alt:"Cartoon Astronaut"})}),Object(O.jsx)("div",{className:"loading-spinner",children:Object(O.jsx)(N,{})})]})]}):Object(O.jsxs)(O.Fragment,{children:[!f||a.length||a.image?"":Object(O.jsx)(k,{setStartDateHandler:function(e){b(e.target.value)},setEndDateHandler:function(e){p(e.target.value)},endDate:m,startDate:i,submitButtonHAndler:function(){B(),D(!1)},setStartDate:b,setEndDate:p}),a&&!a.length?Object(O.jsxs)("div",{className:"home-container-main",children:[Object(O.jsx)("div",{className:"reset-button-container",children:Object(O.jsx)(l.a,{variant:"light",onClick:function(){return window.location.reload()},children:" Restart "})}),Object(O.jsx)(x,{apiCallData:a})]}):a.length?Object(O.jsxs)("div",{className:"home-container-main",children:[Object(O.jsx)("div",{className:"reset-button-container",children:Object(O.jsx)(l.a,{variant:"light",onClick:function(){return window.location.reload()},children:" Restart "})}),a.map((function(e){return Object(O.jsx)(x,{apiCallData:e})}))]}):""]})]})};a(62),a(63);var E=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(A,{}),Object(O.jsx)(D.a,{})]})};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(E,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.f9ef098f.chunk.js.map
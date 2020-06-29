(this["webpackJsonpinterstellar-weather-app"]=this["webpackJsonpinterstellar-weather-app"]||[]).push([[0],{120:function(e,n,t){e.exports=t.p+"static/media/context_camera.ad456a3a.PNG"},126:function(e,n,t){e.exports=t(225)},225:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(15),o=t.n(i),c=t(54),l=t.n(c),s=t(76),m=t(35),p=t(77),d=t.n(p),u=t(19),h=t(17);function f(){var e=Object(u.a)(["\n  background: rgba(0, 0, 0, 0.7);\n  padding: 20px;\n  margin-top: 20px;\n  border-radius: 14px;\n  border: 1px solid #1E1E1E;\n  display: flex;\n  width: 100%;\n  max-width: 1000px;\n  flex-direction: column;\n  \n  @media (max-width: 767px) {\n    margin-top: 6px;\n  }\n  \n  .weather-title {\n    align-self: center;\n    text-align: center;\n    font-size: var(--fs-h1);\n    font-weight: var(--fw-semi);\n    margin-bottom: 20px;\n    color: #CDCDCD;\n    }\n    \n    .weather-title__location {\n      color: ",";\n      text-transform: uppercase;\n      letter-spacing: 2px;\n    }\n  }\n  \n  .weather-date {\n    display: flex;\n    justify-content: space-between;\n    \n    h2 {\n      margin: 0;\n    }\n    p {\n      color: #ADADAD;\n      font-size: 1.1rem;\n      margin: 0;\n    }\n    span {\n      font-size: var(--fs-body);\n      color: #ADADAD;\n    }\n  }\n  \n  .search-container {\n    margin: 20px 0 20px 0;\n    text-align: center;\n  }\n  \n  .unit-container {\n    display: flex;\n    align-items: center;\n  }\n"]);return f=function(){return e},e}function g(){var e=Object(u.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 20px 0 20px;\n  color: #F4F4F4;\n  margin: 0;\n  font-family: 'Montserrat', sans-serif;\n  line-height: 1.6;\n    \n  @media (max-width: 767px) {\n    padding: 6px 6px 0 6px;\n  }\n  \n  .content-container {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n"]);return g=function(){return e},e}function x(){var e=Object(u.a)(["\n  * {\n    box-sizing: border-box;\n  }\n    \n  :root {\n    --fw-light: 300;\n    --fw-normal: 400;\n    --fw-semi: 500;\n    --fw-bold: 700;\n    --fs-h1: 1.5rem;\n    --fs-h2: 2.25rem;\n    --fs-body: 1rem;\n    --fs-xl: 4.5rem;\n  }\n\n  body {\n    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url(",");\n    background-size: cover;\n    background-attachment: fixed;\n    background-position: ",";\n  }\n  \n  .preloadImage {\n    display: none;\n  }\n  \n  h1, h2, h3, h4 {\n    line-height: 1;\n    color: #F4F4F4;\n  }\n"]);return x=function(){return e},e}var b=Object(h.b)(x(),(function(e){return e.imageUrl}),(function(e){return e.theme.backgroundPosition})),E=h.c.div(g()),v=h.c.main(f(),(function(e){return e.theme.themeColor})),w={themeColor:"#d06d6d",backgroundPosition:"80% 40%"},y={themeColor:"#78A9E3",backgroundPosition:"50% 50%"},k=t(78),N=t.n(k),_=t(79),j=t.n(_),O=function(e,n){var t=e;return n||(t=5/9*(e-32)),Math.round(t)};function z(){var e=Object(u.a)(["\n  overflow: hidden;\n  padding: 0 70px;\n  height: 40px;\n      \n  input {\n    position: absolute;\n    left: -99em;\n  }\n  \n  .toggle {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 40px;\n    background-color: rgba(0, 0, 0, 0.6);\n    border-radius: 84px;\n    transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  }\n  .toggle:before {\n    content: 'EARTH';\n    position: absolute;\n    left: -70px;\n    top: 5px;\n    font-size: 18px;\n    color: #fff;\n  }\n  .toggle:after {\n    content: 'MARS';\n    position: absolute;\n    right: -60px;\n    top: 5px;\n    font-size: 18px;\n    color: #E0E0E0;\n  }\n  \n  .toggle__handler {\n    display: inline-block;\n    position: relative;\n    z-index: 1;\n    top: 3px;\n    left: 3px;\n    width: 34px;\n    height: 34px;\n    background-color: #83D8FF;\n    border-radius: 50px;\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n    transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    transform: rotate(-45deg);\n  }\n  .toggle__handler .crater {\n    position: absolute;\n    background-color: #E8CDA5;\n    opacity: 0;\n    transition: opacity 200ms ease-in-out;\n    border-radius: 100%;\n  }\n  .toggle__handler .crater--1 {\n    top: 18px;\n    left: 5px;\n    width: 4px;\n    height: 4px;\n  }\n  .toggle__handler .crater--2 {\n    top: 20px;\n    left: 16px;\n    width: 6px;\n    height: 6px;\n  }\n  .toggle__handler .crater--3 {\n    top: 6px;\n    left: 17px;\n    width: 8px;\n    height: 8px;\n  }\n  \n  .star {\n    position: absolute;\n    background-color: #ffffff;\n    transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n    border-radius: 50%;\n  }\n  \n  .star--1 {\n    top: 10px;\n    left: 35px;\n    z-index: 0;\n    width: 30px;\n    height: 3px;\n  }\n  \n  .star--2 {\n    top: 18px;\n    left: 28px;\n    z-index: 1;\n    width: 30px;\n    height: 3px;\n  }\n  \n  .star--3 {\n    top: 27px;\n    left: 40px;\n    z-index: 0;\n    width: 30px;\n    height: 3px;\n  }\n  \n  .star--4,\n  .star--5 {\n    opacity: 0;\n    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  }\n  \n  .star--4 {\n    top: 16px;\n    left: 11px;\n    z-index: 0;\n    width: 2px;\n    height: 2px;\n    transform: translate3d(3px, 0, 0);\n  }\n  \n  .star--5 {\n    top: 32px;\n    left: 17px;\n    z-index: 0;\n    width: 3px;\n    height: 3px;\n    transform: translate3d(3px, 0, 0);\n  }\n  \n  input:checked + .toggle {\n    background-color: rgba(0, 0, 0, 0.6);;\n  }\n  input:checked + .toggle:before {\n    color: #E0E0E0;\n  }\n  input:checked + .toggle:after {\n    color: #ffffff;\n  }\n  input:checked + .toggle .toggle__handler {\n    background-color: #FFE5B5;\n    transform: translate3d(40px, 0, 0) rotate(0);\n  }\n  input:checked + .toggle .toggle__handler .crater {\n    opacity: 1;\n  }\n  input:checked + .toggle .star--1 {\n    width: 2px;\n    height: 2px;\n  }\n  input:checked + .toggle .star--2 {\n    width: 4px;\n    height: 4px;\n    transform: translate3d(-5px, 0, 0);\n  }\n  input:checked + .toggle .star--3 {\n    width: 2px;\n    height: 2px;\n    transform: translate3d(-7px, 0, 0);\n  }\n  input:checked + .toggle .star--4,\n  input:checked + .toggle .star--5 {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n  input:checked + .toggle .star--4 {\n    transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  }\n  input:checked + .toggle .star--5 {\n    transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  }\n"]);return z=function(){return e},e}var F=h.c.div(z()),S=function(e){var n=e.planet,t=e.setPlanet;return r.a.createElement(F,null,r.a.createElement("input",{type:"checkbox",onChange:function(){return t("Mars"===n?"Earth":"Mars")},id:"dn",defaultChecked:"Mars"===n}),r.a.createElement("label",{htmlFor:"dn",className:"toggle"},r.a.createElement("span",{className:"toggle__handler"},r.a.createElement("span",{className:"crater crater--1"}),r.a.createElement("span",{className:"crater crater--2"}),r.a.createElement("span",{className:"crater crater--3"})),r.a.createElement("span",{className:"star star--1"}),r.a.createElement("span",{className:"star star--2"}),r.a.createElement("span",{className:"star star--3"}),r.a.createElement("span",{className:"star star--4"}),r.a.createElement("span",{className:"star star--5"}),r.a.createElement("span",{className:"star star--6"})))};function D(){var e=Object(u.a)(["\n  p {\n    margin: 0;\n  }\n  \n  .previous-day__sol {\n    margin: 0;\n  }\n  \n  .previous-day__date {\n    font-size: 0.9 rem;\n    color: #ADADAD;\n    margin-bottom: 10px;\n  }\n  \n  .previous-day__temp {\n    color: #CDCDCD;\n    font-size: 16px;\n  }\n  \n  .previous-day__more-info {\n    line-height: 30px;\n    height: 30px;\n    text-align: center;\n    width: 100%;\n    cursor: pointer;\n    color: #FFF;\n    transition: all 0.3s;\n    position: relative;\n    margin-top: 10px;\n    \n    span {\n      color: #ADADAD;\n    }\n    \n    :before {\n      content: '';\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 1;\n      opacity: 0;\n      transition: all 0.3s;\n      border-top-width: 1px;\n      border-bottom-width: 1px;\n      border-top-style: solid;\n      border-bottom-style: solid;\n      border-top-color: rgba(255,255,255,0.5);\n      border-bottom-color: rgba(255,255,255,0.5);\n      transform: scale(0.1, 1);\n    }\n    \n    :hover span {\n      letter-spacing: 2px;\n      color: #fff;\n    }\n    \n    :hover::before {\n      opacity: 1; \n      transform: scale(1, 1); \n    }\n    \n    ::after {\n      content: '';\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 1;\n      transition: all 0.3s;\n      background-color: rgba(255,255,255,0.1);\n    }\n    \n    :hover::after {\n      opacity: 0; \n      transform: scale(0.1, 1);\n    }\n  }\n"]);return D=function(){return e},e}function C(){var e=Object(u.a)(["\n  overflow-x: scroll;\n  text-align: center;\n"]);return C=function(){return e},e}function M(){var e=Object(u.a)(["\n  width: 100%;\n  \n  .previous-title {\n    color: #fff;\n    margin: 20px 40px;\n    \n    @media (max-width: 767px) {\n      margin: 20px 0;\n    }\n  }\n"]);return M=function(){return e},e}var A=h.c.div(M()),W=h.c.div(C()),L=h.c.div(D()),P=t(230),T=t(229),I=function(e){var n=e.marsWeather,t=e.setSelectedSol,a=e.isMetric,i=e.marsLoading;return r.a.createElement(A,null,r.a.createElement("h2",{className:"previous-title"},"Previous 7 days"),r.a.createElement(W,null,i?r.a.createElement("div",null,"Loading ..."):r.a.createElement(P.b,{grid:{gutter:12,column:7},dataSource:n,style:{minWidth:"1000px"},renderItem:function(e){return r.a.createElement(P.b.Item,{key:n.sol},r.a.createElement(L,null,r.a.createElement(T.a,{bodyStyle:{padding:10},style:{color:"#F4F4F4",border:"1px solid #1E1E1E",borderRadius:14,backgroundColor:"rgba(0, 0, 0, 0.6)"}},r.a.createElement("h2",{className:"previous-day__sol"}," ",e.sol," "),r.a.createElement("p",{className:"previous-day__date"}," ",e.date," "),r.a.createElement("p",{className:"previous-day__temp"},"High:",r.a.createElement("span",null," ",O(e.maxTemp,a)),r.a.createElement("span",null," ",a?" C":" F"," ")),r.a.createElement("p",{className:"previous-day__temp"},"Low:",r.a.createElement("span",null," ",O(e.minTemp,a)," "),r.a.createElement("span",null," ",a?" C":" F"," ")),r.a.createElement("div",{onClick:function(){return t(e.itemNumber)},className:"previous-day__more-info"},r.a.createElement("span",null,"More info")))))}})))};function H(){var e=Object(u.a)(["\n  cursor: pointer;\n  width: 4em;\n  border: 2px solid #fff;\n  background: transparent;\n  padding: 0;\n  border-radius: 100vmax;\n  margin: 0 10px;\n  outline: 0;\n\n  ::after {\n    content: '';\n    display: block;\n    background: #fff;\n    border-radius: 50%;\n    height: 1rem;\n    margin: 3px;\n    margin-left: ",";\n    width: 1rem;\n  }\n"]);return H=function(){return e},e}function R(){var e=Object(u.a)(["\n  color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  opacity: 0.7;\n  transition: opacity 275ms linear;\n\n  :hover {\n    opacity: 1;\n  }\n"]);return R=function(){return e},e}var B=h.c.div(R()),G=h.c.button(H(),(function(e){return e.metric?"3px":"auto"})),U=function(e){var n=e.isMetric,t=e.setMetric;return r.a.createElement(B,null,r.a.createElement("label",{htmlFor:"cel"},"\xb0C"),r.a.createElement(G,{metric:n,onClick:function(){return t((function(e){return!e}))}}),r.a.createElement("label",{htmlFor:"fah"},"\xb0F"))};function q(){var e=Object(u.a)(["\n  margin: 0 20px;\n\n  .instance-value {\n    font-size: 1.7rem;\n    display: flex;\n    justify-content: center;\n  }\n  \n  .instance-description {\n    text-align: center;\n    font-size: 1.1rem;\n    color: #ADADAD;\n  }\n"]);return q=function(){return e},e}function J(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 20px 20px 0 20px;\n  width: 240px;\n  \n  .weather-instance-container {\n    display: flex;\n    margin-bottom: 10px;\n  }\n  \n  .photo {\n    width: 160px;\n    border: 1px solid #1E1E1E;\n    border-radius: 8px;\n  }\n  \n  .photo-description {\n    text-align: center;\n    margin-top: 10px;\n    width: 190px;\n    font-size: 0.9rem;\n    color: #ADADAD;\n  }\n"]);return J=function(){return e},e}function $(){var e=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n"]);return $=function(){return e},e}var K=h.c.div($()),Q=h.c.div(J()),V=h.c.div(q()),X=t(120),Y=t.n(X),Z=t(232),ee=t(233),ne=function(e){var n=e.sol,t=e.isMetric;return r.a.createElement(K,null,r.a.createElement(Q,null,r.a.createElement("div",{className:"weather-instance-container"},r.a.createElement(V,null,r.a.createElement("div",{className:"instance-value"},O(n.maxTemp,t),r.a.createElement("span",null," ",t?" \xb0C":" \xb0F"," ")),r.a.createElement("div",{className:"instance-description"},"High")),r.a.createElement(V,null,r.a.createElement("div",{className:"instance-value"},O(n.minTemp,t),r.a.createElement("span",null," ",t?" \xb0C":" \xb0F"," ")),r.a.createElement("div",{className:"instance-description"},"Low"))),r.a.createElement(V,null,r.a.createElement("div",{className:"instance-value"},"No data"===n.windSpeed?"No data":"".concat(n.windSpeed," mph")),r.a.createElement("div",{className:"instance-description"},"Wind"))),r.a.createElement(Q,null,r.a.createElement("img",{className:"photo",src:Y.a,alt:"current"}),r.a.createElement("div",{className:"photo-description"},"Lander-mounted, Instrument Context Camera (ICC)",r.a.createElement(Z.a,{overlayStyle:{maxWidth:220},content:"NASA's InSight Mars lander acquired this image in front of the lander on ".concat(n.date),trigger:"hover"},r.a.createElement(ee.a,{style:{fontSize:20,marginLeft:5,color:"#fff"}})))))},te=function(e){var n=e.marsWeather,t=e.isMetric,a=e.marsLoading,i=e.setMetric,o=e.selectedSol;return a?r.a.createElement("div",null,"Loading ..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"weather-title"}," Latest weather at",r.a.createElement("span",{className:"weather-title__location"}," Elysium Plantitia")),r.a.createElement("div",{className:"weather-date"},r.a.createElement("div",null,r.a.createElement("h2",null,n[o].sol||"sol",r.a.createElement("span",null," (day on Mars)")),r.a.createElement("p",null,n[o].date||"date")),r.a.createElement("div",{className:"unit-container"},r.a.createElement(U,{isMetric:t,setMetric:i}))),r.a.createElement(ne,{sol:n[o],isMetric:t}))},ae=t(231),re=function(e){var n=e.earthWeather,t=n.temp,a=n.humidity,i=n.pressure;return r.a.createElement(K,null,r.a.createElement(Q,null,r.a.createElement("div",{className:"weather-instance-container"},r.a.createElement(V,null,r.a.createElement("div",{className:"instance-value"},Math.round(t)," \xb0C"),r.a.createElement("div",{className:"instance-description"},"Temp")),r.a.createElement(V,null,r.a.createElement("div",{className:"instance-value"},a," %"),r.a.createElement("div",{className:"instance-description"},"Humidity"))),r.a.createElement(V,null,r.a.createElement("div",{className:"instance-value"},i," hPa"),r.a.createElement("div",{className:"instance-description"},"Pressure"))))},ie=function(e){var n=e.fetchEarthData,t=e.earthWeather,a=e.city,i=e.error,o=ae.a.Search;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"weather-title"},null==t?"Enter the name of the city to get started!":r.a.createElement(r.a.Fragment,null,"Current weather in ",r.a.createElement("span",{className:"weather-title__location"},a))),r.a.createElement("div",{className:"search-container"},r.a.createElement(o,{onSearch:function(e){return n(e)},style:{maxWidth:400,borderRadius:10},size:"large"}),null!==i&&r.a.createElement("p",null,i)),null!==t&&r.a.createElement(re,{earthWeather:t}))},oe=function(){var e=Object(a.useState)("Mars"),n=Object(m.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)([]),c=Object(m.a)(o,2),p=c[0],u=c[1],f=Object(a.useState)(!0),g=Object(m.a)(f,2),x=g[0],k=g[1],_=Object(a.useState)(!0),O=Object(m.a)(_,2),z=O[0],F=O[1],D=Object(a.useState)(),C=Object(m.a)(D,2),M=C[0],A=C[1],W=function(){var e=Object(s.a)(l.a.mark((function e(){var n,t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.nasa.gov/insight_weather/?api_key=tCe59kbvnGzFzWrvO4ufe1e8g748WbgiR9e5Wr2B&feedtype=json&ver=1.0",n=d.a.get("https://api.nasa.gov/insight_weather/?api_key=tCe59kbvnGzFzWrvO4ufe1e8g748WbgiR9e5Wr2B&feedtype=json&ver=1.0"),e.next=4,n;case 4:t=e.sent,a=t.data.sol_keys.map((function(e,n){var a,r,i;return{sol:e,maxTemp:(null===(a=t.data[e].AT)||void 0===a?void 0:a.mx)||"No data",minTemp:(null===(r=t.data[e].AT)||void 0===r?void 0:r.mn)||"No data",windSpeed:t.data[e].HWS&&t.data[e].HWS.av?Math.round(t.data[e].HWS.av):"No data",date:(i=new Date(t.data[e].First_UTC),i.toLocaleDateString(void 0,{day:"numeric",month:"long"})),itemNumber:n}})),u(a),A(a.length-1),k(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=Object(a.useState)(null),P=Object(m.a)(L,2),T=P[0],H=P[1],R=Object(a.useState)(null),B=Object(m.a)(R,2),G=B[0],U=B[1],q=Object(a.useState)(null),J=Object(m.a)(q,2),$=J[0],K=J[1],Q=function(){var e=Object(s.a)(l.a.mark((function e(n){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",(K("Please enter the name of the city"),H(null)));case 2:return t="https://api.openweathermap.org/data/2.5/"+"weather?q=".concat(n,"&appid=3d210771b356ac5fbc2fd51f7a263aa2&units=metric"),a=d.a.get(t),e.next=6,a;case 6:r=e.sent,K(null),H(r.data.main),U(r.data.name);case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){W()}),[]),r.a.createElement(h.a,{theme:"Mars"===t?w:y},r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{imageUrl:"Mars"===t?N.a:j.a}),r.a.createElement("img",{src:N.a,alt:"#",className:"preloadImage"}),r.a.createElement("img",{src:j.a,alt:"#",className:"preloadImage"}),r.a.createElement(E,null,r.a.createElement("div",{className:"content-container"},r.a.createElement(S,{planet:t,setPlanet:i}),r.a.createElement(v,null,"Mars"===t?r.a.createElement(te,{marsWeather:p,isMetric:z,marsLoading:x,setMetric:F,selectedSol:M}):r.a.createElement(ie,{fetchEarthData:Q,earthWeather:T,city:G,error:$}))),"Mars"===t&&r.a.createElement(I,{marsWeather:p,setSelectedSol:A,isMetric:z,marsLoading:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(224);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,n,t){e.exports=t.p+"static/media/mars.0d4cbc41.jpg"},79:function(e,n,t){e.exports=t.p+"static/media/earth.464a0c64.jpg"}},[[126,1,2]]]);
//# sourceMappingURL=main.330933f7.chunk.js.map
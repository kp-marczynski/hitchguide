(this.webpackJsonphitchguide=this.webpackJsonphitchguide||[]).push([[1],{150:function(e,t,n){e.exports=n(173)},157:function(e,t,n){var r={"./ion-action-sheet.entry.js":[175,5],"./ion-alert.entry.js":[176,6],"./ion-app_8.entry.js":[177,7],"./ion-avatar_3.entry.js":[178,17],"./ion-back-button.entry.js":[179,18],"./ion-backdrop.entry.js":[180,44],"./ion-button_2.entry.js":[181,19],"./ion-card_5.entry.js":[182,20],"./ion-checkbox.entry.js":[183,21],"./ion-chip.entry.js":[184,22],"./ion-col_3.entry.js":[185,45],"./ion-datetime_3.entry.js":[186,10],"./ion-fab_3.entry.js":[187,23],"./ion-img.entry.js":[188,46],"./ion-infinite-scroll_2.entry.js":[189,47],"./ion-input.entry.js":[190,24],"./ion-item-option_3.entry.js":[191,25],"./ion-item_8.entry.js":[192,26],"./ion-loading.entry.js":[193,27],"./ion-menu_3.entry.js":[194,28],"./ion-modal.entry.js":[195,8],"./ion-nav_2.entry.js":[196,14],"./ion-popover.entry.js":[197,9],"./ion-progress-bar.entry.js":[198,29],"./ion-radio_2.entry.js":[199,30],"./ion-range.entry.js":[200,31],"./ion-refresher_2.entry.js":[201,11],"./ion-reorder_2.entry.js":[202,16],"./ion-ripple-effect.entry.js":[203,48],"./ion-route_4.entry.js":[204,32],"./ion-searchbar.entry.js":[205,33],"./ion-segment_2.entry.js":[206,34],"./ion-select_3.entry.js":[207,35],"./ion-slide_2.entry.js":[208,49],"./ion-spinner.entry.js":[209,13],"./ion-split-pane.entry.js":[210,50],"./ion-tab-bar_2.entry.js":[211,36],"./ion-tab_2.entry.js":[212,15],"./ion-text.entry.js":[213,37],"./ion-textarea.entry.js":[214,38],"./ion-toast.entry.js":[215,39],"./ion-toggle.entry.js":[216,12],"./ion-virtual-scroll.entry.js":[217,51]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=157,e.exports=a},159:function(e,t,n){var r={"./ion-icon.entry.js":[219,57]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=159,e.exports=a},160:function(e,t,n){},161:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(98),c=n.n(o),l=n(48),i=n(82),s=(n(160),a.a.createContext(void 0)),u=n(224),m=n(128),d=n(94),y=n(95),f=n(96),p=n(97),v=n(129),g=n.n(v),h=n(76),j=n(63),b=n(120),w=n(70),S=n(226),E=function(e){var t=e.children;return a.a.createElement("div",null,t)},k=n(131),I=function(e){var t=e.source,n=e.style,a=void 0===n?void 0:n,o=e.zIndex,c=void 0===o?0:o,l=e.minZoom,i=void 0===l?0:l,u=e.maxZoom,m=void 0===u?14:u,d=Object(r.useContext)(s).map;return Object(r.useEffect)((function(){if(d){var e=new k.a({source:t,style:a,minZoom:i,maxZoom:m});return e.on("featureclick",(function(e){return console.log(e)})),d.addLayer(e),e.setZIndex(c),function(){d&&d.removeLayer(e)}}}),[d]),null},O=n(134),x=function(e){var t=e.source,n=e.zIndex,a=void 0===n?0:n,o=Object(r.useContext)(s).map;return Object(r.useEffect)((function(){if(o){var e=new O.a({source:t,zIndex:a});return o.addLayer(e),e.setZIndex(a),function(){o&&o.removeLayer(e)}}}),[o]),null},L=new h.a;L.setStyle(new j.c({image:new b.a({radius:20,fill:new w.a({color:"rgba(51,153,204,0.75)"})})}));var _=function(e){var t,n=e.children,o=e.view,c=Object(r.useRef)(),v=Object(r.useState)(null),h=Object(i.a)(v,2),j=h[0],b=h[1],w=Object(r.useState)(null),k=Object(i.a)(w,2),O=k[0],x=k[1];Object(r.useEffect)((function(){document.addEventListener("visibilitychange",(function(){null===j||void 0===j||j.updateSize()}))}),[j]),Object(r.useEffect)((function(){var e=new m.a;e.on("select",(function(t){var n,r;((null===(n=t.selected[0].getProperties())||void 0===n?void 0:n.name)||(null===(r=t.selected[0].getProperties())||void 0===r?void 0:r.description))&&(console.log(t.selected[0].getProperties()),L.setGeometry(t.selected[0].getProperties().geometry),x(t.selected[0].getProperties())),e.getFeatures().clear()}));var t={view:o,layers:[],controls:[],overlays:[],interactions:[new d.a,new y.a,new f.a,new p.a,e],tilePixelRatio:1},n=new u.a(t);return n.setTarget(c.current),b(n),function(){return n.setTarget(void 0)}}),[]);var _=Object(r.useRef)(),P=Object(r.useRef)();Object(r.useEffect)((function(){O?C():(_.current.style.transition=".5s ease-out",_.current.style.transform="translateY(".concat(25,"px) "))}),[O]),Object(r.useEffect)((function(){var e=_.current;Object(l.l)({el:e,gestureName:"my-swipe",direction:"y",onEnd:function(t){t.deltaY>20?"false"===e.dataset.open?(x(!1),L.setGeometry(void 0)):T():t.deltaY<-20&&C()}}).enable(!0),Object(l.l)({el:P.current,gestureName:"my-swipe2",direction:"y",onMove:function(e){e.event.preventDefault()}}).enable(!0)}),[]);var C=function(){var e=_.current;e&&(e.style.transition=".5s ease-in",e.style.transform="translateY(".concat(-350,"px) "),e.dataset.open="true")},T=function(){var e=_.current;e&&(e.style.transition=".5s ease-out",e.style.transform="translateY(".concat(-60,"px) "),e.dataset.open="false")};return a.a.createElement(s.Provider,{value:{map:j}},a.a.createElement("div",{ref:c,className:"ol-map"},n,a.a.createElement(E,null,a.a.createElement(I,{source:new S.a({features:[L]})}))),a.a.createElement(l.c,{ref:_,className:g()({bottomDrawer:!0,hiddenCard:!O})},a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement(l.b,{size:"large",color:"dark",style:{height:10,width:100},onClick:function(){"true"===_.current.dataset.open?C():T()}})),a.a.createElement(l.e,null,a.a.createElement(l.f,null,null===O||void 0===O?void 0:O.name)),a.a.createElement(l.d,{ref:P},a.a.createElement("div",{dangerouslySetInnerHTML:{__html:null!==(t=null===O||void 0===O?void 0:O.description)&&void 0!==t?t:"No description"},style:{overflowY:"scroll",height:275}}))))},P=n(5),C=n(223),T=n(69),N=n(72),D=n(130),G=n(113),z=(n(161),n(50)),A=n(93),M=n(225);var Y=function(e){switch(e){case 5:return"green";case 4:return"blue";case 3:return"yellow";case 2:return"orange";case 1:return"red";default:return"purple"}},Z=new h.a;Z.setStyle(new j.c({image:new b.a({radius:6,fill:new w.a({color:"#3399CC"}),stroke:new N.a({color:"#fff",width:2})})}));var U=new G.a({projection:"EPSG:3857",center:Object(P.d)([17,51]),zoom:4,maxZoom:14}),F=new D.a({trackingOptions:{enableHighAccuracy:!0},projection:U.getProjection()}),R=new h.a;F.on("change:accuracyGeometry",(function(){R.setGeometry(F.getAccuracyGeometry())})),F.setTracking(!0),F.on("change:position",(function(){var e=F.getPosition();Z.setGeometry(e?new T.a(e):void 0)})),document.addEventListener("visibilitychange",(function(){console.log("change1"),F.setTracking("hidden"!==document.visibilityState)}));var W=new h.a;W.setGeometry(new T.a(Object(P.d)([17,51]))),W.setStyle(new j.c({image:new b.a({radius:50,fill:new w.a({color:"#3399CC"}),stroke:new N.a({color:"#fff",width:2})}),text:new A.a({text:"42",scale:5})}));var B=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)("Poland"),s=Object(i.a)(c,2),u=(s[0],s[1],Object(r.useState)()),m=Object(i.a)(u,2),d=m[0],y=m[1];Object(r.useEffect)((function(){setTimeout((function(){return o(!0)}),1e3),fetch("assets/json/world.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){var t='<?xml version="1.0" encoding="UTF-8"?>\n<kml xmlns="http://earth.google.com/kml/2.2">\n<Document>\n<name>World</name>\n<visibility>1</visibility>\n<Style id="placemark-blue">\n<IconStyle><Icon><href>http://maps.google.com/mapfiles/kml/paddle/blu-circle.png</href></Icon><scale>0.75</scale></IconStyle>\n<LabelStyle><scale>0.5</scale></LabelStyle>\n</Style>\n<Style id="placemark-green">\n<IconStyle><Icon><href>http://maps.google.com/mapfiles/kml/paddle/grn-circle.png</href></Icon><scale>0.75</scale></IconStyle>\n<LabelStyle><scale>0.5</scale></LabelStyle>\n</Style>\n<Style id="placemark-yellow">\n<IconStyle><Icon><href>http://maps.google.com/mapfiles/kml/paddle/ylw-circle.png</href></Icon><scale>0.75</scale></IconStyle>\n<LabelStyle><scale>0.5</scale></LabelStyle>\n</Style>\n<Style id="placemark-red">\n<IconStyle><Icon><href>http://maps.google.com/mapfiles/kml/paddle/red-circle.png</href></Icon><scale>0.75</scale></IconStyle>\n<LabelStyle><scale>0.5</scale></LabelStyle>\n</Style>\n<Style id="placemark-brown">\n<IconStyle><Icon><href>http://maps.google.com/mapfiles/kml/paddle/wht-circle.png</href></Icon><scale>0.75</scale></IconStyle>\n<LabelStyle><scale>0.5</scale></LabelStyle>\n</Style>\n<Style id="placemark-purple">\n<IconStyle><Icon><href>http://maps.google.com/mapfiles/kml/paddle/purple-circle.png</href></Icon><scale>0.75</scale></IconStyle>\n<LabelStyle><scale>0.5</scale></LabelStyle>\n</Style>\n<Style id="placemark-orange">\n<IconStyle><Icon><href>http://maps.google.com/mapfiles/kml/paddle/orange-circle.png</href></Icon><scale>0.75</scale></IconStyle>\n<LabelStyle><scale>0.5</scale></LabelStyle>\n</Style>\n<Style id="placemark-pink">\n<IconStyle><Icon><href>http://maps.google.com/mapfiles/kml/paddle/pink-circle.png</href></Icon><scale>0.75</scale></IconStyle>\n<LabelStyle><scale>0.5</scale></LabelStyle>\n</Style>\n\n'+e.map((function(e){var t;return'<Placemark xmlns="http://www.opengis.net/kml/2.2" id="'+e.i+'">\n<name>Spot '+e.i+"</name>\n<visibility>1</visibility>\n<address>"+e.c+(e.p?", "+e.p:"")+"</address>\n<description><![CDATA["+(null!==(t=e.d)&&void 0!==t?t:"")+"]]></description>\n<Point><coordinates>"+e.l+"</coordinates></Point>\n<styleUrl>#placemark-"+Y(e.s)+"</styleUrl>\n</Placemark>"})).join("\n")+"</Document>\n</kml>\n";y(t)}))}),[]),document.addEventListener("visibilitychange",(function(){o(!1),setTimeout((function(){return o(!0)}),1e3)}));return a.a.createElement(l.k,null,a.a.createElement(l.g,{scrollY:!1},n&&a.a.createElement("div",{style:{width:"100%",height:"100%",position:"static"},id:"map-container"},a.a.createElement(_,{view:U},a.a.createElement(E,null,a.a.createElement(x,{source:new C.a({url:"https://ows.terrestris.de/osm/service?",params:{LAYERS:"OSM-WMS",TILED:!0,FORMAT:"image/png"},attributions:[],transition:0}),zIndex:0}),a.a.createElement(I,{source:new S.a({features:[R]})}),d&&a.a.createElement(I,{source:new S.a({features:new M.a({showPointNames:!1}).readFeatures(d,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"})}),minZoom:8}),a.a.createElement(I,{source:new S.a({features:[Z]})}))),a.a.createElement("div",{className:"attribution",id:"attribution"},"\xa9 ",a.a.createElement("a",{href:"https://www.openstreetmap.org/copyright"},"OpenStreetMap")," contributors"),a.a.createElement("div",{className:"versionNumber"},"hitchguide"," v","0.0.47"),a.a.createElement(l.h,{vertical:"top",horizontal:"end",slot:"fixed"},a.a.createElement(l.i,{onClick:function(){var e=F.getPosition();e&&U.animate({center:e,zoom:12,rotation:0})}},a.a.createElement(l.j,{icon:z.h}))))))},H=(n(162),n(163),n(164),n(165),n(166),n(167),n(168),n(169),n(170),n(171),n(172),function(){return a.a.createElement(l.a,null,a.a.createElement(B,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[150,3,4]]]);
//# sourceMappingURL=main.d3f4c064.chunk.js.map
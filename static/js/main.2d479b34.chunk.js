(this.webpackJsonphitchguide=this.webpackJsonphitchguide||[]).push([[1],{155:function(e,t,n){e.exports=n(178)},162:function(e,t,n){var r={"./ion-action-sheet.entry.js":[180,5],"./ion-alert.entry.js":[181,6],"./ion-app_8.entry.js":[182,7],"./ion-avatar_3.entry.js":[183,17],"./ion-back-button.entry.js":[184,18],"./ion-backdrop.entry.js":[185,44],"./ion-button_2.entry.js":[186,19],"./ion-card_5.entry.js":[187,20],"./ion-checkbox.entry.js":[188,21],"./ion-chip.entry.js":[189,22],"./ion-col_3.entry.js":[190,45],"./ion-datetime_3.entry.js":[191,10],"./ion-fab_3.entry.js":[192,23],"./ion-img.entry.js":[193,46],"./ion-infinite-scroll_2.entry.js":[194,47],"./ion-input.entry.js":[195,24],"./ion-item-option_3.entry.js":[196,25],"./ion-item_8.entry.js":[197,26],"./ion-loading.entry.js":[198,27],"./ion-menu_3.entry.js":[199,28],"./ion-modal.entry.js":[200,8],"./ion-nav_2.entry.js":[201,14],"./ion-popover.entry.js":[202,9],"./ion-progress-bar.entry.js":[203,29],"./ion-radio_2.entry.js":[204,30],"./ion-range.entry.js":[205,31],"./ion-refresher_2.entry.js":[206,11],"./ion-reorder_2.entry.js":[207,16],"./ion-ripple-effect.entry.js":[208,48],"./ion-route_4.entry.js":[209,32],"./ion-searchbar.entry.js":[210,33],"./ion-segment_2.entry.js":[211,34],"./ion-select_3.entry.js":[212,35],"./ion-slide_2.entry.js":[213,49],"./ion-spinner.entry.js":[214,13],"./ion-split-pane.entry.js":[215,50],"./ion-tab-bar_2.entry.js":[216,36],"./ion-tab_2.entry.js":[217,15],"./ion-text.entry.js":[218,37],"./ion-textarea.entry.js":[219,38],"./ion-toast.entry.js":[220,39],"./ion-toggle.entry.js":[221,12],"./ion-virtual-scroll.entry.js":[222,51]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=162,e.exports=o},164:function(e,t,n){var r={"./ion-icon.entry.js":[224,57]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=164,e.exports=o},165:function(e,t,n){},166:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(102),i=n.n(a),c=n(25),s=n(89),l=(n(165),o.a.createContext(void 0)),u=n(228),m=n(132),d=n(98),f=n(99),y=n(100),v=n(101),j=n(133),p=n.n(j),h=function(e){var t=e.children,n=e.view,a=Object(r.useRef)(),i=Object(r.useState)(null),j=Object(s.a)(i,2),h=j[0],E=j[1],w=Object(r.useState)(null),b=Object(s.a)(w,2),g=b[0],O=b[1];Object(r.useEffect)((function(){var e=new m.a;e.on("select",(function(t){var n,r;((null===(n=t.selected[0].getProperties())||void 0===n?void 0:n.name)||(null===(r=t.selected[0].getProperties())||void 0===r?void 0:r.description))&&(console.log(t.selected[0].getProperties()),O(t.selected[0].getProperties())),e.getFeatures().clear()}));var t={view:n,layers:[],controls:[],overlays:[],interactions:[new d.a,new f.a,new y.a,new v.a,e],tilePixelRatio:1},r=new u.a(t);return r.setTarget(a.current),E(r),function(){return r.setTarget(void 0)}}),[]);var _=Object(r.useRef)(),k=Object(r.useRef)();Object(r.useEffect)((function(){g?x():P()}),[g]),Object(r.useEffect)((function(){var e=_.current;Object(c.r)({el:e,gestureName:"my-swipe",direction:"y",onMove:function(e){e.deltaY>20?P():e.deltaY<-20&&x()}}).enable(!0),Object(c.r)({el:k.current,gestureName:"my-swipe2",direction:"y",onMove:function(e){e.event.preventDefault()}}).enable(!0)}),[]);var x=function(){var e=_.current;e&&(e.style.transition=".5s ease-in",e.style.transform="translateY(".concat(-350,"px) "),e.dataset.open="true")},P=function(){var e=_.current;e&&(e.style.transition=".5s ease-out",e.style.transform="",e.dataset.open="false")};return o.a.createElement(l.Provider,{value:{map:h}},o.a.createElement("div",{ref:a,className:"ol-map"},t),o.a.createElement(c.c,{ref:_,className:p()({bottomDrawer:!0,hiddenCard:!g})},o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(c.b,{size:"large",style:{height:10,width:100},onClick:function(){"true"===_.current.dataset.open?x():P()}})),o.a.createElement(c.e,null,o.a.createElement(c.f,null,null===g||void 0===g?void 0:g.name)),o.a.createElement(c.d,{ref:k},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:null===g||void 0===g?void 0:g.description},style:{overflowY:"scroll",height:275}}))))},E=function(e){var t=e.children;return o.a.createElement("div",null,t)},w=n(135),b=function(e){var t=e.source,n=e.style,o=void 0===n?void 0:n,a=e.zIndex,i=void 0===a?0:a,c=e.minZoom,s=void 0===c?0:c,u=Object(r.useContext)(l).map;return Object(r.useEffect)((function(){if(u){var e=new w.a({source:t,style:o,minZoom:s});return e.on("featureclick",(function(e){return console.log(e)})),u.addLayer(e),e.setZIndex(i),function(){u&&u.removeLayer(e)}}}),[u]),null},g=n(138),O=function(e){var t=e.source,n=e.zIndex,o=void 0===n?0:n,a=Object(r.useContext)(l).map;return Object(r.useEffect)((function(){if(a){var e=new g.a({source:t,zIndex:o});return a.addLayer(e),e.setZIndex(o),function(){a&&a.removeLayer(e)}}}),[a]),null},_=n(7),k=n(231),x=n(232),P=n(230),C=n(96),S=n(72),I=n(64),L=n(124),N=n(70),T=n(74),M=n(134),z=n(118),D=(n(166),n(51)),G=n(229),R=function(e){var t=e.url;return o.a.createElement(b,{source:new P.a({url:t,format:new G.a({showPointNames:!1})}),minZoom:8})},Y=new C.a;Y.setStyle(new I.c({image:new L.a({radius:6,fill:new N.a({color:"#3399CC"}),stroke:new T.a({color:"#fff",width:2})})}));var Z=new z.a({projection:"EPSG:3857",center:Object(_.d)([17,51]),zoom:4,maxZoom:14}),A=new M.a({trackingOptions:{enableHighAccuracy:!0},projection:Z.getProjection()}),F=new C.a;A.on("change:accuracyGeometry",(function(){F.setGeometry(A.getAccuracyGeometry())})),A.setTracking(!0),A.on("change:position",(function(){var e=A.getPosition();Y.setGeometry(e?new S.a(e):void 0)})),document.addEventListener("visibilitychange",(function(){A.setTracking("hidden"!==document.visibilityState)}));var U=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)("Poland"),l=Object(s.a)(i,2),u=l[0],m=l[1];Object(r.useEffect)((function(){setTimeout((function(){return a(!0)}),1e3)}),[]);return o.a.createElement(c.n,null,o.a.createElement(c.j,null,o.a.createElement(c.q,null,o.a.createElement(c.l,null,o.a.createElement(c.m,null,"Country"),o.a.createElement(c.o,{value:u,onIonChange:function(e){return m(e.detail.value)},placeholder:"Select Country"},o.a.createElement(c.p,{value:null}),o.a.createElement(c.p,{value:"Poland"},"Poland"),o.a.createElement(c.p,{value:"Poland2"},"Poland2"),o.a.createElement(c.p,{value:"Germany"},"Germany"))))),o.a.createElement(c.g,{scrollY:!1},n&&o.a.createElement("div",{style:{width:"100%",height:"100%",position:"static"},id:"map-container"},o.a.createElement(h,{view:Z},o.a.createElement(E,null,o.a.createElement(O,{source:new k.a({url:"https://ows.terrestris.de/osm/service?",params:{LAYERS:"OSM-WMS",TILED:!0,FORMAT:"image/png"},attributions:[],transition:0}),zIndex:0}),o.a.createElement(O,{source:new x.a}),o.a.createElement(b,{source:new P.a({features:[F]})}),u&&o.a.createElement(R,{url:"/hitchguide/assets/kml/countries/"+u+".kml",key:u}),o.a.createElement(b,{source:new P.a({features:[Y]})}))),o.a.createElement("div",{className:"attribution",id:"attribution"},"\xa9 ",o.a.createElement("a",{href:"https://www.openstreetmap.org/copyright"},"OpenStreetMap")," contributors"),o.a.createElement(c.h,{vertical:"bottom",horizontal:"end",slot:"fixed"},o.a.createElement(c.i,{onClick:function(){var e=A.getPosition();e&&Z.animate({center:e,zoom:12,rotation:0})}},o.a.createElement(c.k,{icon:D.h}))))))},W=(n(167),n(168),n(169),n(170),n(171),n(172),n(173),n(174),n(175),n(176),n(177),function(){return o.a.createElement(c.a,null,o.a.createElement(U,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[155,3,4]]]);
//# sourceMappingURL=main.2d479b34.chunk.js.map
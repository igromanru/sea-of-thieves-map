!function(e){var o={};function i(t){if(o[t])return o[t].exports;var s=o[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=o,i.d=function(e,o,t){i.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,o){if(1&o&&(e=i(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var s in e)i.d(t,s,function(o){return e[o]}.bind(null,s));return t},i.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(o,"a",o),o},i.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},i.p="",i(i.s=0)}([function(e,o,i){e.exports=i(1)},function(e,o,i){"use strict";i.r(o);var t;let s;window.addEventListener("load",function(){function e(e){console.log("online offline update"),navigator.onLine?console.log("went online"):console.log(" went offline")}window.addEventListener("online",e),window.addEventListener("offline",e)}),"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js").then(function(){console.log("Service Worker Registered")}),t=!!navigator.onLine;var r=document.querySelector("#install-button");window.addEventListener("beforeinstallprompt",e=>{console.log("beforeinstallprompt - showme!!!"),e.preventDefault(),s=e,document.querySelector("#installBut").classList.add("showme")}),r.addEventListener("click",()=>{document.querySelector("#installBut").classList.remove("showme"),s.prompt(),s.userChoice.then(e=>{"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),s=null})}),window.addEventListener("appinstalled",e=>{console.log("a2hs","installed")});var n=[{loc:[-39.625,60.1],title:"Lone Cove",radius:4,pigs:!0,snakes:!0},{loc:[-67.53125,48.125],title:"Cannon Cove",radius:4,chickens:!0,pigs:!0},{loc:[-65.09375,62.84375],title:"Rum Runner Isle",radius:2,pigs:!0},{loc:[-78.422607,118.649658],title:"The Crooked Masts",radius:3,chickens:!0,snakes:!0},{loc:[-25.71875,15.59375],title:"Sailor's Bounty",radius:4,chickens:!0,pigs:!0},{loc:[-18.227905,40.417725],title:"Smuggler's Bay",radius:4,chickens:!0,snakes:!0},{loc:[-20.850708,54.960571],title:"Salty Sands",radius:2,chickens:!0},{loc:[-25.875,66.875],title:"Picaroon Palms",radius:2,snakes:!0},{loc:[-24.90625,85.8125],title:"Scurvy Isley",radius:2},{loc:[-25.786011,104.275391],title:"Old Faithful Isle",radius:4,chickens:!0,pigs:!0},{loc:[-20.0625,118.4375],title:"Black Sand Atoll",radius:2,snakes:!0},{loc:[-18.634888,133.902466],title:"Marauder's Arch",radius:4,chickens:!0,pigs:!0},{loc:[-30.094604,30.657227],title:"Sandy Shallows",radius:2,snakes:!0},{loc:[-30.9375,47.96875],title:"Boulder Cay",radius:2,chickens:!0},{loc:[-42.625,21.96875],title:"Keel Haul Fort",radius:2,isFortress:!0},{loc:[-45.8125,41.28125],title:"Sanctuary Outpost",radius:4,isOutpost:!0},{loc:[-53.90625,55],title:"Lonely Isle",radius:2,snakes:!0},{loc:[-53.125,69.25],title:"Hidden Spring Keep",radius:3,isFortress:!0},{loc:[-38.733154,112.010498],title:"Blind Man's Lagoon",radius:2,pigs:!0},{loc:[-32.576904,123.666748],title:"Shark Fin Camp",radius:2,isFortress:!0},{loc:[-39.858154,134.197998],title:"Plunderer's Plight",radius:2,pigs:!0},{loc:[-31.59375,141.65625],title:"Black Water Enclave",radius:2,chickens:!0},{loc:[-38.125,90.5625],title:"Kraken's Watchtower",radius:2,isFortress:!0},{loc:[-51.208862,103.17157],title:"Dagger Tooth Outpost",radius:4,isOutpost:!0},{loc:[-49.613525,122.312012],title:"The Sunken Grove",radius:3,pigs:!0,snakes:!0},{loc:[-53.00293,142.175415],title:"Galleon's Grave Outpost",radius:3,isOutpost:!0},{loc:[-62.65918,114.48791],title:"Isle of Last Words",radius:2,pigs:!0,snakes:!0},{loc:[-65.15625,127.15625],title:"Skull Keep",radius:2,isFortress:!0},{loc:[-69.125,140.09375],title:"Tri-Rock Isle",radius:2,chickens:!0},{loc:[-77.875,132.375],title:"Shiver Retreat",radius:2,pigs:!0},{loc:[-76.14502,149.006836],title:"Liar's Backbone",radius:2,snakes:!0},{loc:[-90.52002,127.038086],title:"Shark Tooth Key",radius:2,pigs:!0},{loc:[-88.67627,142.475586],title:"Kraken's Fall",radius:4,pigs:!0,snakes:!0},{loc:[-71.851074,100.23291],title:"Shipwreck Bay",radius:4,chickens:!0,pigs:!0},{loc:[-55.99707,28.127686],title:"Rapier Cay",radius:2,chickens:!0},{loc:[-63.62207,19.908936],title:"Crescent Isle",radius:3,pigs:!0,snakes:!0},{loc:[-72.65625,29.5],title:"Golden Sand Outpost",radius:4,isOutpost:!0},{loc:[-79.662964,14.701294],title:"Sea Dog's Rest",radius:2,pigs:!0},{loc:[-79.412262,57.996521],title:"Twin Groves",radius:2,chickens:!0},{loc:[-89,45.9375],title:"Wanderer's Refuge",radius:4,chickens:!0,snakes:!0},{loc:[-89.544189,28.243774],title:"Lagoon of Whispers",radius:2,chickens:!0,snakes:!0},{loc:[-94.631592,14.016357],title:"Mermaid's Hideaway",radius:3,chickens:!0,pigs:!0},{loc:[-102.756592,34.328857],title:"Sailor's Knot Stronghold",radius:3,isFortress:!0},{loc:[-101.039307,69.45874],title:"Fools Lagoon",radius:2,pigs:!0},{loc:[-98.539307,80.95874],title:"Castaway Isle",radius:2,snakes:!0},{loc:[-101.820557,94.89624],title:"Old Boot Fort",radius:2,isFortress:!0},{loc:[-115.021362,49.43103],title:"Plunder Valley",radius:4,chickens:!0,pigs:!0},{loc:[-113.333862,67.2747],title:"Chicken Isle",radius:2,chickens:!0,pigs:!0},{loc:[-112.496826,82.470093],title:"Snake Island",radius:3,pigs:!0,snakes:!0},{loc:[-114.133301,103.807495],title:"Crooks's Hollow",radius:2,chickens:!0,snakes:!0},{loc:[-112.352051,119.151245],title:"Barnacle Cay",radius:2,chickens:!0},{loc:[-123.622437,131.406738],title:"Ancient Spire Outpost",radius:2,isOutpost:!0},{loc:[-121.170898,31.903809],title:"Discovery Ridge",radius:4,chickens:!0,snakes:!0},{loc:[-134.920898,42.466309],title:"Old Salts Atoll",radius:2,chickens:!0},{loc:[-126.573975,62.819702],title:"Lost Gold Fort",radius:2,isFortress:!0},{loc:[-142.713379,57.555176],title:"Shark Bait Cove",radius:4,chickens:!0,pigs:!0},{loc:[-145.838379,71.555176],title:"Lookout Point",radius:2,pigs:!0},{loc:[-150.088379,82.367676],title:"Booty Isle",radius:2,snakes:!0},{loc:[-132.392822,80.059204],title:"Plunder Outpost",radius:3,isOutpost:!0},{loc:[-124.549072,92.434204],title:"Paradise Spring",radius:2,pigs:!0},{loc:[-130.830322,101.809204],title:"Cutlass Cay",radius:2,snakes:!0},{loc:[-127.950684,114.55481],title:"The Crow's Nest Fortress",radius:2,isFortress:!0},{loc:[-141.200684,110.21106],title:"Mutineer Rock",radius:2,chickens:!0},{loc:[-141.24353,125.804077],title:"Devil's Ridge",radius:3,pigs:!0,snakes:!0},{loc:[-145.062866,96.548401],title:"Thieves' Haven",radius:4,chickens:!0,pigs:!0}],a=[{loc:[-12.625,28.4375],title:"D2",isLarge:!0,desc:"Large (3rd out of the 4 offshore rocks counting from the east, at the back of the island, D2"},{loc:[-20.726562,132.023438],title:"Marauder's Arch",isLarge:!0,desc:"South top"},{loc:[-52.882812,69.21875],title:"Hidden Spring Keep",isLarge:!1,desc:" Very top, use the South West cannon"},{loc:[-140.34375,125.289063],title:"Devil's Ridge",isLarge:!1,desc:" North side underneath the ridge"},{loc:[-61,84.875],title:"N10",isLarge:!1,desc:"Underwater, uncharted island"},{loc:[-71.132812,100.97656],title:"Shipwreck Bay",isLarge:!0,desc:"Northern small island"},{loc:[-95.96875,14.945313],title:"Mermaid's Hideaway",isLarge:!1,desc:"Across from the Southern peak"},{loc:[-133.460937,80.585938],title:"Plunder Outpost",isLarge:!0,desc:"South top"},{loc:[-145.875,98.648438],title:"Thieves Haven",isLarge:!1,desc:"East rock in the water"},{loc:[-133.460937,80.585938],title:"Plunder Outpost",isLarge:!0,desc:"South top"}],l=t;console.log("-- detect isOnline: "+l);var c=L.map("mapid",{maxZoom:7,minZoom:2,crs:L.CRS.Simple,attributionControl:!1,preferCanvas:!1}).setView([70,70],4),d=new L.LatLngBounds(c.unproject([0,20924],7),c.unproject([20924,0],7));c.fitBounds(d),L.tileLayer("images/tiles/{z}/{x}/{y}.png",{minZoom:2,maxZoom:7,bounds:d,noWrap:!0,tms:!1}).addTo(c),c.setMaxBounds(d,{padding:[200,200]});var u=new L.LayerGroup;c.addLayer(u),c.on("click",function(e){console.log("You clicked the map at "+e.latlng),L.icon({iconUrl:"/images/xmarksthespot.png",shadowUrl:"/images/xmarksthespot.png",iconSize:[40,45],shadowSize:[0,0],iconAnchor:[20,24],shadowAnchor:[0,0],popupAnchor:[-20,-45]})});var p=new L.LayerGroup;c.addLayer(p);var h=new L.LayerGroup,g=new L.LayerGroup,k=new L.LayerGroup,m=new L.Control.Search({position:"topright",layer:p,initial:!1,zoom:4,marker:!1});c.addControl(m);var f=L.icon({iconUrl:"/images/markers/chicken_marker.png",shadowUrl:"/images/markers/chicken_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[0,30],shadowAnchor:[0,0],popupAnchor:[0,0]}),v=L.icon({iconUrl:"/images/markers/snake_marker.png",shadowUrl:"/images/markers/snake_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[30,30],shadowAnchor:[0,0],popupAnchor:[0,0]}),w=L.icon({iconUrl:"/images/markers/pig_marker.png",shadowUrl:"/images/markers/pig_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[30,0],shadowAnchor:[0,0],popupAnchor:[0,0]});for(var S in n){var y=n[S].title,O=n[S].radius,C=L.circle(n[S].loc,{strokeweight:1,opacity:0,color:"#fff",fillColor:"#fff",fillOpacity:0,radius:O,className:"islandClass",title:y}).bindPopup(y);if(p.addLayer(C),n[S].chickens){var b=G(n[S].loc,.5*O,.6*O);L.marker(b,{icon:f,title:"chicken"}).addTo(h).setIcon(f)}if(n[S].snakes){var A=G(n[S].loc,.5*O,.6*O*-1);L.marker(A,{icon:v,title:"snake"}).addTo(g)}if(n[S].pigs){var T=G(n[S].loc,.5*O*-1,.6*O*-1);L.marker(T,{icon:w,title:"pigs"}).addTo(k)}}var B=new L.LayerGroup,F=L.icon({iconUrl:"/images/markers/throne_marker.png",shadowUrl:"/images/markers/throne_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[15,30],shadowAnchor:[0,0],popupAnchor:[-20,-45]});for(var P in a){var x=a[P].loc;L.marker(x,{icon:F,title:"Skelton Throne"}).addTo(B).bindPopup(a[P].desc)}var z=!1,_=L.popup();function j(){c.getZoom()>=4&&$(".leaflet-grid-label").addClass("big")}function G(e,o,i){return[e[0]+o,e[1]+i]}function I(){var e=$(window).height();$(".sotm_wrapper").css({height:e+"px"}),$("#mapid").css({height:e+"px"})}c.on("contextmenu",function(e){window.console.log("find nearest"),function(e){var o,i=1e3;for(var t in n){n[t].title;var s=n[t].loc;(o=c.distance(s,e))<i&&(i=o)}}(e.latlng),_.setLatLng(e.latlng).setContent("You clicked the map at "+e.latlng.toString()).openOn(mymap)}),L.simpleGraticule({interval:5.85,showOriginLabel:!1,redraw:"move",zoomIntervals:[{start:3,end:6,interval:5.85}]}).addTo(c),c.on("zoomend",function(){j()}),c.on("move",function(){j()}),c.on("moveend",function(){j()});var M=-1;$(function(){I(),$(window).resize(function(){I()}),$(window).on("load",function(e){I()}),$(".js-searchforisland").click(function(){"left"==$(this).data("dir")?--M<0&&(M=n.length-1):++M>=n.length&&(M=0);var e=n[M].loc;c.setView(e,6)}),$(".js-toggleThrones").click(function(){z?(z=!1,c.removeLayer(B)):(z=!0,c.addLayer(B))}),$(".js-toggleOutposts").click(function(){console.log("highlight outposts")}),$(".js-toggleMarkers").click(function(){!function(e){console.log(e),c.addLayer(k)}($(this).attr("name"))})})}]);
//# sourceMappingURL=maps/sotm.js.map
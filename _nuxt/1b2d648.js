(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{399:function(t,n,o){var content=o(403);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("1b7833da",content,!0,{sourceMap:!1})},400:function(t,n,o){t.exports=o.p+"img/banner.30c4244.png"},401:function(t,n,o){t.exports=o.p+"img/banner-dark.5260c80.png"},402:function(t,n,o){"use strict";o(399)},403:function(t,n,o){(n=o(7)(!1)).push([t.i,".centered-input input{text-align:center!important}",""]),t.exports=n},414:function(t,n,o){"use strict";o.r(n);o(62),o(36),o(254),o(20),o(53),o(40),o(42);var e={layout:"default",data:function(){return{show:!1,valueInput:null,banner:o(400),bannerDark:o(401)}},methods:{autoKeyboardLang:function(t){for(var n=["й","ц","у","к","е","н","г","ш","щ","з","х","ъ","ф","ы","в","а","п","р","о","л","д","ж","э","я","ч","с","м","и","т","ь","б","ю","ї","і","є"],o=["q","w","e","r","t","y","u","i","o","p","\\[","\\]","a","s","d","f","g","h","j","k","l",";","'","z","x","c","v","b","n","m",",","\\.","\\]","s","'"],e=function(i){var e=new RegExp(n[i],"mig");t=t.replace(e,(function(a){return a==a.toLowerCase()?o[i]:o[i].toUpperCase()}))},i=0;i<n.length;i++)e(i);return t},convert:function(){var t=this;if(this.valueInput){var n=this.valueInput.split("").map((function(n){return t.autoKeyboardLang(n)})).join("");try{this.$clipboard(n),this.valueInput=null,this.$toasted.show("Текст скопирован в буфер обмена",{position:"top-center",icon:"information",type:"success",duration:3e3,action:{icon:"close",onClick:function(t,n){n.goAway(0)}}})}catch(t){console.error("Could not copy text: ",t)}}else this.$toasted.show("Введите текст для перевода!",{position:"top-center",icon:"information",type:"error",duration:3e3,action:{icon:"close",onClick:function(t,n){n.goAway(0)}}})},exit:function(){this.$store.commit("appSignout")}}},r=(o(402),o(89)),c=o(122),l=o.n(c),f=o(181),d=o(81),v=o(385),h=o(386),w=o(387),x=o(388),m=o(389),component=Object(r.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return n("v-layout",{attrs:{"align-center":""}},[n("v-flex",[n("v-card",{staticClass:"mx-auto",attrs:{color:"transparent",elevation:"0"}},[n("v-card-text",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VCard:f.a,VCardText:d.c,VCol:v.a,VContainer:h.a,VFlex:w.a,VLayout:x.a,VRow:m.a})}}]);
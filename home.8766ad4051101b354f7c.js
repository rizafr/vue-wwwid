webpackJsonp([0],{"0/R4":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("lWcZ"),i=e("svY8"),s=e("xRi5");var r=function(t){e("rxbG")},c=Object(s.a)(n.a,i.a,i.b,!1,r,null,null);a.default=c.exports},HxWs:function(t,a,e){t.exports={default:e("Q17y"),__esModule:!0}},MPjN:function(t,a,e){"use strict";e.d(a,"a",function(){return n});var n={title:"Tantangan Web Developer Untuk Membuat Aplikasi Web Bisa Digunakan Kurang Dari 5 Detik",desc:"Ada banyak jalan menuju Roma, sama dengan ada banyak cara membuat sebuah aplikasi web dan banyak teknik untuk mengoptimalkan sebuah aplikasi web. Cara membuat saat ini sudah cukup banyak tutorialnya, tapi bagaimana dengan teknik mengoptimalkannya?",author:"Yohan Totting",pubDate:"2018-02-13 07:45:58"}},Q17y:function(t,a,e){var n=e("zKeE"),i=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},g15A:function(t,a,e){"use strict";e.d(a,"a",function(){return s}),e.d(a,"b",function(){return r});var n=e("HxWs"),i=e.n(n),s=function(t){var a=null,e=localStorage.getItem("WWWID_"+t);try{if(a=JSON.parse(e),console.log("get from cache "+t+", created "+a.created+" ",a),a)a=(new Date).getDate()!==new Date(a.created).getDate()?null:a.data}catch(t){}return a},r=function(t,a){var e={created:(new Date).getTime(),data:a},n=i()(e);localStorage.setItem("WWWID_"+t,n)}},lWcZ:function(t,a,e){"use strict";var n=e("g15A"),i=e("MPjN");a.a={name:"Home",data:function(){return{loading:!0,dummy:i.a,articles:[]}},mounted:function(){this.fetchArtciles()},methods:{fetchArtciles:function(){var t=this;this.loading=!0;var a=Object(n.a)("articles");a?(this.articles=a,this.loading=!1):fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid").then(function(t){return t.json()}).then(function(a){var e=/<p>.*.<\/p>\n</g;t.articles=a.items.map(function(t){var a=t.content.match(e);t.contentView=a[0].slice(0,-1);var n=t.link.split("/");return t.slug=n[n.length-1],t}),Object(n.b)("articles",t.articles),t.loading=!1})},seeDetail:function(t){var a=this.articles.filter(function(a){return a.slug===t});console.log("detail",a),a.length>0&&(Object(n.b)("article",a[0]),this.$router.push("/post/"+a[0].slug))}}}},rxbG:function(t,a){},svY8:function(t,a,e){"use strict";e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t.loading?e("ul",t._l([1,2,3],function(a){return e("li",{key:a},[e("div",{staticClass:"a-img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"assets/icons/overlay.png",expression:"'assets/icons/overlay.png'"}],staticClass:"dummy"})]),t._v(" "),e("div",{staticClass:"a-title c"},[t._v("\n          "+t._s(t.dummy.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"c a-wrap"},[e("span",{staticClass:"a-author"},[t._v("\n            "+t._s(t.dummy.author)+"\n          ")]),t._v(" "),e("span",{staticClass:"a-pub"},[t._v("\n            "+t._s(t.dummy.pubDate)+"\n          ")])]),t._v(" "),e("div",{staticClass:"a-content c"},[t._v("\n          "+t._s(t.dummy.desc)+"\n        ")])])})):t._e(),t._v(" "),t.loading?t._e():e("ul",t._l(t.articles,function(a){return e("li",{key:a.guid,on:{click:function(e){t.seeDetail(a.slug)}}},[e("div",{staticClass:"a-img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.thumbnail,expression:"article.thumbnail"}]})]),t._v(" "),e("div",{staticClass:"a-title c"},[t._v(t._s(a.title))]),t._v(" "),e("div",{staticClass:"c a-wrap"},[e("span",{staticClass:"a-author"},[t._v(t._s(a.author))]),t._v(" "),e("span",{staticClass:"a-pub"},[t._v(t._s(a.pubDate))])]),t._v(" "),e("div",{staticClass:"a-content c",domProps:{innerHTML:t._s(a.contentView)}})])}))])},i=[]},zKeE:function(t,a){var e=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=e)}});
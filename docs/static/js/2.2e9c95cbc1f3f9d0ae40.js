webpackJsonp([2],{"/wXA":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("dqiE"),s=i("G3uJ"),n=i("NxGh"),l=i("+ZRt"),r=i("nh2a"),o=i("Au9i"),c=(i("NYxO"),{components:{Loading:n.a,PageHeader:l.a,SongList:r.a},data:function(){return{isAddFilter:!1,selected:"song",songlist:[],albumlist:[],mvlist:[],singer:""}},created:function(){var t=this;this._getSingerData(),window.onscroll=function(){t.fiexdTop()}},beforeDestroy:function(){window.onscroll=null},computed:{singername:function(){return this.$route.query.singername||this.singer},imgUrl:function(){return"https://y.gtimg.cn/music/photo_new/T001R300x300M000"+this.$route.params.id+".jpg?max_age=2592000"}},methods:{goTo:function(t,e){var i="/"+t+"/"+e;this.$router.push(i)},_getSingerData:function(){var t=this,e=this.$route.params.id;Object(a.b)(e).then(function(e){var i=e.data;t.singer=i.singer_name,i.list.forEach(function(e){t.songlist.push(Object(s.a)(e.musicData))}),i.albumlist.forEach(function(e){t.albumlist.push({albummid:e.albummid,name:e.name,img:e.pic,publish:e.publish_date})}),null!=i.mvlist&&i.mvlist.forEach(function(e){t.mvlist.push({title:e.title,pubdate:e.pubdate,img:"https://shp.qpic.cn/qqvideo_ori/0/"+e.vid+"_360_204/0"})})})},fiexdTop:function(){var t=document.getElementById("navbar"),e=document.getElementById("main"),i=document.documentElement.scrollTop;i>=230?(t.classList.add("fiexd-top"),e.style.marginTop="320px"):(t.classList.remove("fiexd-top"),e.style.marginTop=0),this.isAddFilter=i>0},message:function(){Object(o.MessageBox)({title:"提示",message:"mv还没有开发呀！"})}}}),m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide"}},[i("div",{staticClass:"singer"},[i("page-header",{attrs:{imgUrl:t.imgUrl,title:t.singername}}),t._v(" "),i("div",{staticClass:"background",class:{filter:t.isAddFilter},style:"backgroundImage:url("+t.imgUrl+")"}),t._v(" "),i("div",{}),t._v(" "),i("div",{staticClass:"navbar",attrs:{id:"navbar"}},[i("mt-navbar",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[i("mt-tab-item",{attrs:{id:"song"}},[t._v("歌曲")]),t._v(" "),i("mt-tab-item",{attrs:{id:"album"}},[t._v("专辑")]),t._v(" "),i("mt-tab-item",{attrs:{id:"MV"}},[t._v("MV")])],1)],1),t._v(" "),i("div",{staticClass:"main",attrs:{id:"main"}},[i("mt-tab-container",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[i("mt-tab-container-item",{attrs:{id:"song"}},[i("song-list",{attrs:{songlist:t.songlist}})],1),t._v(" "),i("mt-tab-container-item",{attrs:{id:"album"}},[i("ul",[t.albumlist.length?t._e():i("div",{staticClass:"loading-container"},[i("loading")],1),t._v(" "),t._l(t.albumlist,function(e,a){return i("li",{key:a,staticClass:"album",on:{click:function(i){return t.goTo("album",e.albummid)}}},[i("div",{staticClass:"media-img"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img,expression:"item.img"}]})]),t._v(" "),i("div",{staticClass:"media-text"},[i("h3",[t._v(t._s(e.name))]),t._v(" "),i("p",[t._v(t._s(e.publish))])])])})],2)]),t._v(" "),i("mt-tab-container-item",{attrs:{id:"MV"}},[i("h2",{staticClass:"mvlist-title"},[t._v("最新MV")]),t._v(" "),i("ul",{staticClass:"mv-ul"},t._l(t.mvlist,function(e,a){return i("li",{key:a,staticClass:"mv",on:{click:t.message}},[i("div",{staticClass:"media-img"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img,expression:"item.img"}]})]),t._v(" "),i("div",{staticClass:"media-text"},[i("h3",[t._v(t._s(e.title))]),t._v(" "),i("p",[t._v(t._s(e.pubdate))])])])}),0)])],1)],1)],1)])},staticRenderFns:[]};var u=i("VU/8")(c,m,!1,function(t){i("oDpy")},"data-v-7667cbe3",null);e.default=u.exports},dqiE:function(t,e,i){"use strict";e.a=function(){return Object(a.a)("https://szc.y.qq.com/v8/fcg-bin/v8.fcg",{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0},{param:"jsonpCallback"})},e.b=function(t){var e={singermid:t,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5page",needNewCode:1,order:"listen",from:"h5",num:30,begin:0};return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e,{param:"jsonpCallback"})};var a=i("cQcd")},oDpy:function(t,e){}});
//# sourceMappingURL=2.2e9c95cbc1f3f9d0ae40.js.map
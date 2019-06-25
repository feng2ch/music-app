<template>
	<div class="recommend">
        <div class="slider">
             <mt-swipe>
                <mt-swipe-item v-for="(item,index) in slider" :key="index">
                    <a :href="item.linkUrl"><img :src="item.picUrl"></a>
				</mt-swipe-item>
			 </mt-swipe>
		</div>
		<router-link to="/search"><div align="center" class="searchBox"><img src="../assets/img/search.png" class="search">搜索</div></router-link>
        <div class="nav">
            <router-link to="/hotsinger"><img src="../assets/img/hotsinger.png" class="icon_1"><span class="nav_item_1">歌单</span></router-link>
			<router-link to="/toplists"><img src="../assets/img/rank.png" class="icon_2"><span class="nav_item_2">榜单</span></router-link>
			<router-link to="/singerlist"><img src="../assets/img/singerlist.png" class="icon_3"><span class="nav_item_3">歌手列表</span></router-link>
			<router-link to="/user"><img src="../assets/img/user.png" class="icon_4"><span class="nav_item_4">个人中心</span></router-link>
		</div>
		
	<div class="song-list">
			<h2 class="title">推荐歌单</h2>
			<ul>
				<li v-for="(item,index) in songList" :key="index">
					<router-link :to="`/recommend/songsheet?id=sheet${index}`">
						<div class="media-img">
							<img v-lazy="item.picUrl">
							<i class="play"></i>
						</div>
						<div class="media-text">
							<p>{{item.songListDesc}}</p>
						</div>
					</router-link>
				</li>
			</ul>
	</div>
	 
	<div class="radio-list">
			<h2 class="title_1">电台</h2>
			<ul>
				<li v-for="(item,index) in radioList">
					<div class="media-img" @click="selectRadio(index)">
						<img :src="item.picUrl">
						<i class="radio-play" :class="radioplayIcon(index)" v-show="radioList.length"></i>
					</div>
					<div class="media-text">
						<p>{{item.Ftitle}}</p>
					</div>
				</li>
			</ul> 
	</div>
    <router-view></router-view>
	</div>
</template>
<script>
	import { getRecommendData} from '@/api/getRecommendData.js'
	import { getToplist } from '@/api/getToplistsData.js'
	import { createSong } from '@/assets/js/song'
	import { mapState,mapGetters,mapMutations,mapActions  } from 'vuex'
	

	export default {
	
		data(){
			return {
				slider:[],
				radioList:[],
				songList:[],
				
				radioSongs:[],
				radioplay:-1,
			}
		},
		computed:{
			...mapState([
				'playing',
			]),
		},
		created(){
			this._getRecommendData();
			
		},
		methods:{
			...mapActions([
				'selectPlay'
			]),
			...mapMutations([
				'setPlaylist',
				'setPlayingState',
				'setCurrentIndex',
			]),
			_getRecommendData(){
				getRecommendData().then((res)=>{
					let data=res.data;
					this.slider=data.slider;
					this.radioList=data.radioList;
                    this.songList=data.songList;
				})
				getToplist(26).then((res)=>{
					for(let i=0;i<30;i++){
						this.radioSongs.push(createSong(res.songlist[i].data))
					}
				})
			},
			 
			selectRadio(index){
				//歌单数据被腾讯限制，用toplist数据模拟
				this.radioplay = index 
				let songs=[]
				index ===0 ? songs = this.radioSongs.slice(0,15) : songs = this.radioSongs.slice(15,30)
				this.selectPlay({
					list:songs,
					index:0
				})
			},
			radioplayIcon(index) {
				if ( this.radioplay === index) {
					return this.playing ? 'radio-playing' : 'radio-pause'
				}
			}
		}	
	}
</script>
<style scoped>
    .nav_item_1{
      margin-left:35px;
      font-size:14.9px;

    }
    .nav_item_2{
      margin-left:32px;
      font-size:14.9px;
    }
    .nav_item_3,
    .nav_item_4{
      font-size:14.9px;
      margin-left:20px;
      margin-top:0px;
    }
    .icon_1{
      position:relative;
      width:39px;
      height:39px;
      margin:3px 30px 0px 30px;
    }
    .icon_2{
      position:relative;
      width:39px;
      height:39px;
      margin:3px 30px 0px 30px;
    }
     .icon_3{
      position:relative;
      width:39px;
      height:39px;
      margin:3px 30px 0px 30px;
    }
     .icon_4{
      position:relative;
      width:39px;
      height:39px;
      margin:3px 30px 0px 30px;
    }
    .user{
      width:20px;
      height:20px;
      background-color:pink;
    }
    .nav{
		display: flex;
		height: 38px;
		line-height: 38px;
	}
	.nav-item{
		flex-grow: 1;
		text-align: center;
		color:#666;
	}
	.searchBox{
	 width:367px;
	 height:37px;
     margin:8px auto;
	 background-color:#F9F9F9;
	 border-radius:20px;
	 line-height:37px;
	 color:#8a8a8a;
	}
	.search{
	 width:22px;
	 height:22px;
	 margin-top:7px;
	 margin-right:5px;
	}
	ul{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	li{
		width: 50%;
	}
	.recommend{
		background-color: #fff;
		margin-bottom: 80px;
	}
	.slider{
		width: 100%;
		height: 180px;
	}
	.slider a{
		display: block;
		
	}
	.slider img{
		width: 100%;
		height: 180px;
	}
	.radio-list{
		/*background-color: #fff;*/
		min-height: 250px;
		text-align: center;

		
		

	}
	.title{
		padding: 70px 0 9px 10px;
		font-weight:normal;
		font-size:20px;
		text-align: center;
		color:#333;

	}
	.title_1{
		padding: 20px 0 9px 10px;
		font-weight:normal;
		font-size:20px;
		text-align: center;
		color:#333;

	}
	.media-img{
		position: relative;
	}
	.radio-list .radio-play{
		position: absolute;
		top: 50%;
		left: 50%;
		width: 48px;
		height: 48px;
		transform: translate(-50%,-50%);
		background-image: url('../assets/img/list_sprite.png');
	}
	.radio-list ul{
		background-color:#fff;
		padding: 0 10px;
	}
	.radio-list li{
		width: 49%;
		margin-bottom: 10px;
	}

	.radio-list img{
		width: 100%;
		height: auto;
		border-radius:50%;
	}
	.radio-list p{
		height: 45px;
		line-height:45px;
		padding: 5px 0 15px 7px;
		color: #000;
		font-weight: normal;
		font-size: 15px;
        background-color: #fff;
	}

	.radio-list .radio-playing{
		background-position-y: -50px;
	}
	.radio-list .radio-pause{
		background-position-y: 0;
	}
	
	.song-list ul{
		background-color:#F9F9F9;
		padding: 0 0px;
	}
	.song-list li{
		width: 32%;
		margin-bottom: 10px;
	}
	.song-list a{
		display: block;
	}
	.song-list img{
		width: 100%;

	}
	.song-list .play{
		position: absolute;
		position: absolute;
	    right: 5px;
	    bottom: 5px;
	    width: 24px;
	    height: 24px;
	    background-image: url('../assets/img/list_sprite.png');
	    background-size: cover;
	}
	.song-list p{
		height: 46px;
		padding: 5px 0 15px 7px;
		color: #000;
		font-weight: normal;
		font-size: 13px;
		background-color:#fff;
	}  
</style>

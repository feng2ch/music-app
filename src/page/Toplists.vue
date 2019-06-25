<template>
<div class="wrapper">
    <div class="back-warpper">
          <img src="../assets/img/back.png" class="back-i" @click="back">
    </div>
	  <div class="toplists">
	    <ul>
			<div class="loading-container" v-if="!toplists.length">
				<loading></loading>
			</div>

			<li v-for="(item,index) in toplists" :key="index" @click="goTo('toplists/toplist',item.id)">
				<div class="media-img"><img v-lazy="item.picUrl"></div>
				<div class="media-text">
					<p v-for="(song,index) in item.songList" :key="index">
						<span>{{index+1}}</span>
						<span class="songname">{{song.songname}}</span>
						<span>-{{song.singername}}</span>
					</p>
				</div>
				
			</li>
		</ul>
		<router-view></router-view>
	  </div>
</div>
</template>
<script>
	import getToplistsData from '@/api/getToplistsData'
	import Loading from '@/components/Loading'
	export default {
		components:{
			Loading
		},
		data(){
			return {
				toplists:[]
			}
		},
		created(){
			this._getToplistsData();
		},
		methods:{
		     back() {
              this.$router.go(-1)
             },
			_getToplistsData(){
				getToplistsData().then((res)=>{
					this.toplists=res.data.topList
				})
			},
			goTo(place,id){
				let url=`/${place}/${id}`
				this.$router.push(url)
			}
		}
	}
</script>
<style scoped>
    .wrapper{
     background-color: #f4f4f4;
      }
	.loading-container{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.toplists{
		width: 100%;
		padding: 0 20px;
		background-color: #f4f4f4;
		overflow: hidden;
		margin-bottom: 80px;
	}
	.toplists li{
		position: relative;
		display: flex;
		align-items: center;
		height: 100px;
		width: 100%;
		margin-top:20px;
		background-color: #fff;
	}
	.toplists img{
		width: 100px;
		height: 100px;
	}
	.toplists .media-text{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 80px;
		width: 60%;
		margin-left: 20px;
	}
	.toplists .media-text .songname{
		color: #000;
	}
	.toplists .media-text p{
		font-size: 14px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		color: #888;
	}
	
	 .back-i{
           margin:8px auto 0px;
           z-index: 10;
           font-size:25px;
           width:35px ;
           height:30px;
          
      }
</style>

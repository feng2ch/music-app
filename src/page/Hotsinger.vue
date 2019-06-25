<template>
  <div >
      <div class="recommend-list">
        <div class="back-warpper">
          <img src="../assets/img/back.png" class="back-i" @click="back">
        </div>
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li @click="selectItem(item)" v-for="item in discList" class="item">
              <div class="icon">
                <img width="75" height="75" v-lazy="item.imgurl">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
    
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import {getDiscList} from 'api/getHotsingerData'
  import {playlistMixin} from 'api/mixin'
  import {mapMutations} from 'vuex'
export default {
    mixins: [playlistMixin],
    data() {
      return {
        discList: []
      }
    },
    created() {
      this._getDiscList()
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      selectItem(item) {
        this.$router.push({
          path: `/Hotsinger/${item.dissid}`
        })
        this.setDisc(item)
      },
     
      _getDiscList() {
        getDiscList().then((res) => {
          if (res.code === 0) {
            this.discList = res.data.list
          }
        })
      },
      ...mapMutations({
        setDisc: 'SET_DISC'
      })
    },
    
  }
</script>

<style>
   .recommend-list{
     background-color:#fff;
   }
  

  .recommend-list
        .list-title{
          height: 45px;
          line-height: 45px;
          text-align: center;
          font-size: 19px;
          color: black;
          font-weight:normal;
          margin:0px auto 10px;
          }
        .item{
          display: flex;
          box-sizing: border-box;
          align-items: center;
          padding: 0 0px 10px 0px;


          }
          .icon{
            flex:0 0 60px;

            width:75px;
            padding-right: 20px;

            }
          .text{
            padding-left:15px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            line-height:32.8px;
            overflow: hidden;
            font-size: 14px;
            background-color:#fcfcfc;


            }
            .name{
              margin-bottom: 10px;
              color:#000;
              font-size:15px;
              font-weight:normal;
              }
            .desc{
              color:#000;
            }
            .back-i{
            margin:8px auto 0px;
           z-index: 10;
           font-size: 25px;
           width:35px ;
           height:30px;
          
            }
      
</style>
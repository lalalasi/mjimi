<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="title clearfix">
        <router-link tag="a" to="shequ">社区</router-link>><a href="javascirpt:;" class="blue">综合讨论区</a>
        <button class="btn r" @click="onPublish">发起讨论</button>
      </div>

      <div class="content">
        <dl class="item clearfix" v-for="item in list">
          <dt>
            <img :src="item.userInfo.headImage"/>
            <span class="part-name">{{item.userInfo.name}}</span>
          </dt>
          <dd>
            <div class="part-title">
              <router-link tag="a" :to="'/shequDetails?id='+item.id">{{item.title}}</router-link>
            </div>
            <div class="part-info">
              <span class="part-eye"><img src="../assets/images/eye.png"/> {{item.scanNum}}</span>
              <span class="part-say"><img src="../assets/images/say.png"/> {{item.commentNum}}</span>
              <span class="part-date r">{{item.createTime|formatDay}}</span>
            </div>
          </dd>
        </dl>
      </div>

      <div class="foot">
        <Page :total="totalPage" :page-size="pageSize" :current="currPage" @on-change="onChangePage"></Page>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import API from '@/fetch/api'
  import util from '@/util/util'
  import auth from '@/util/auth'

  export default {
    components:{
      Header
    },
    data () {
      return {
        currPage:1,
        totalPage:0,
        pageSize:10,
        id:"",
        user:"",
        list:[]
      }
    },
    mounted(){
      this.user = auth.getUserInfo();
      this.id = util.GetQueryString("id");
      if(!this.id){
        this.$router.push('/shequ')
      }

      $(()=>{
        this.getList();
      });
    },
    methods:{
      onChangePage(v){
        this.currPage = v;
        this.getList();
      },
      onPublish(){
        if(!this.user){
          alert("请先去登录！")
          return;
        }
        this.$router.push('/shequPublish');
      },
      getList(){
        var params = {
          "method": "postList",
          "userid": "",
          "token": "",
          "params": {
            "communityId": this.id,
            "currentPage": this.currPage,
            "countPerPage": this.pageSize
          }
        };

        API.posts(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message);
            return;
          }

          this.list = re.result.postList;
          this.totalPage = re.result.amount;
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{ padding: .32rem 0 .1rem;}
  dl dt,dl dd{ float: left;}
  dl dt{ padding: .32rem 0rem .22rem; width: 1.52rem; text-align: center;}
  dl dd{ padding: .32rem 0 .22rem; width: 5.66rem; border-bottom: 1px solid #E6E6E6;}

  .title{ padding: .3rem .32rem .38rem; line-height: .72rem;}
  .title a{ color: #666666; font-size: .28rem;}
  .title a.blue{ color: #4FB1F7; font-size: .28rem;}
  .title .btn{ padding: 0; width: 2.4rem; height: .72rem; color: #ffffff;}
  .content{ min-height: 8rem;}
  .content .item dt img{ display: block; margin: 0 auto; width: .64rem; height: .64rem; border-radius: 50%;}
  .content .item dt span{ display: block; margin: .12rem auto 0; width: 1.4rem; font-size: .22rem; color: #999999; overflow: hidden; white-space: nowrap;}
  .content .item .part-title{ max-height: .8rem; overflow: hidden;}
  .content .item .part-title a{ color: #4FB1F7;}
  .content .item .part-info{ margin-top: .18rem; overflow: hidden;}
  .content .item .part-info span{ display: inline-block; color: #999999;}
  .content .item .part-info .part-eye{ width: 1rem;}
  .content .item .part-info .part-say{ width: 1rem;}
  .content .item .part-info .part-date{ width: 1rem; text-align: right;}
  .content .item .part-info span img{ display: inline-block; margin-top: -.06rem; margin-right: .04rem; width: .32rem; height: .32rem; color: #999999; vertical-align: middle;}
  .foot{ padding: .36rem 0 .6rem; text-align: center;}
</style>

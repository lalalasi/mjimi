<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="title">
        <a href="javascript:;" class="loca">社区</a>
        <ul class="r clearfix">
          <li>主题</li>
          <li>贴数</li>
          <li>最后发表</li>
          <li>时间</li>
        </ul>
      </div>

      <div class="content">
        <router-link tag="a" :to="'/shequPart?id='+item.id" v-for="item in list" :key="item.id">
          <dl class="item clearfix">
          <dt>
            <img :src="item.imageUrl"/>
          </dt>
          <dd>
            <div class="part-title"><a href="javascript:;">{{item.name}}</a></div>
            <div class="part-amount">
              <span class="today-post">今日新帖：{{item.todayComments}}</span>
              <span class="today-theme">主题：{{item.todayPosts}}</span>
            </div>
            <div class="part-info">
              <span class="theme">{{item.posts}}</span>
              <span class="post">{{item.comments}}</span>
              <span class="author">{{item.userName}}</span>
              <span class="date">{{item.commentsTime|formatDate}}</span>
            </div>
          </dd>
        </dl>
        </router-link>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import Footer from '@/components/Footer';
  import API from '@/fetch/api'

  export default {
    components:{
      Header,
      Footer
    },
    data () {
      return {
        list:[]
      }
    },
    mounted(){
      $(()=>{
        this.getList();
      });
    },
    methods:{
      getList(){
        var params = {
          "method": "communityList",
          "userid": "",
          "token": "",
          "params": {}
        };

        API.communitys(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message);
            return;
          }

          this.list = re.result;
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{ padding: .4rem 0 .1rem;}
  dl dt,dl dd{ float: left;}
  dl dt{ width: 1.92rem;}
  dl dd{ padding-left: .32rem; width: 4.94rem;}

  .title{ padding: 0 .32rem;}
  .title .loca{ color: #718398; font-size: .48rem;}
  .title ul{ margin-top: .21rem;}
  .title ul li{ float: left; margin-right: .38rem; color: #999999; font-size: .22rem; line-height: 1;}
  .title ul li:before{ content: ""; display: inline-block; margin-top: -.03rem; margin-right: .08rem; width: .2rem; height: .2rem; vertical-align: middle; background: #EDEFF1;}
  .title ul li:nth-child(3){ margin-right: .62rem;}
  .title ul li:nth-child(4){ margin-right: 0;}

  .content .item{ margin-top: .2rem; padding: .32rem;}
  .content .item img{  height: 1.44rem;}
  .content .item .part-title a{ color: #333333; font-size: .32rem;}
  .content .item .part-amount{ margin-top: .18rem; color: #999999; font-size: .22rem;}
  .content .item .part-amount span{ margin-right: .38rem;}
  .content .item .part-info{ margin-top: .18rem; color: #333333; font-size: 0;}
  .content .item .part-info span{ display: inline-block; font-size: .22rem;}
  .content .item .part-info .theme{ width: .94rem;}
  .content .item .part-info .post{ width: .98rem;}
  .content .item .part-info .author{ width: 1.4rem;}
  .content .item .part-info .date{ width: 1.28rem;}
</style>

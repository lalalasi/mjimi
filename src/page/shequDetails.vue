<template>
  <div class="wrapper" id="sqdBox">
    <Header></Header>

    <div class="main">
      <div class="title clearfix">
        <router-link tag="a" to="shequ">社区</router-link>><router-link tag="a" to="shequPart" class="blue">综合讨论区</router-link>
        <button class="btn r master-reply" @click="replayMaster()">回复楼主</button>
      </div>

      <div class="box">
        <dl class="master clearfix" v-if ="post">
          <dt>
            <img :src="post.userInfo.headImage">
            <span class="name">{{post.userInfo.name}}</span>
            <span class="ident">楼主</span>
          </dt>
          <dd>
            <div class="m-title">{{post.title}}</div>
            <div class="m-content">{{post.content}}</div>
            <div class="m-opera">
              <button class="btn like" :class="{disable:post.agrees == 1}" @click="onLike" v-if="post.agrees == 0"><i class="iconfont icon-dianzan"></i>({{post.agreeNum}})</button>
              <button class="btn like" :class="{disable:post.agrees == 1}" @click="onLike" v-if="post.agrees == 1"><i class="iconfont icon-dianzan"></i>已赞</button>
              <button class="btn follow" :class="{disable:post.follows == 1}" @click="onFollows" v-if="post.follows == 0">关注</button>
              <button class="btn follow" :class="{disable:post.follows == 1}" @click="onFollows" v-if="post.follows == 1">已关注</button>
            </div>
            <div class="m-date">
              <span>{{post.createTime|formatTiem}}</span>
            </div>
          </dd>
        </dl>

        <dl class="guest clearfix" v-for="(guest,index) in commentList" v-if="commentList">
          <dt>
            <img :src="guest.userInfo.headImage">
          </dt>
          <dd>
            <div class="info">
              <div class="g-title">
                <span class="name">{{guest.userInfo.name}}</span>
                <span class="layer r">{{index+2}}楼</span>
              </div>
              <div class="g-content">{{guest.content}}</div>
              <div class="g-opera">
                <button class="btn guest-reply" @click="replayGuest(guest)">回复</button>
              </div>
              <div class="date"><span>{{guest.createTime|formatTiem}}</span></div>
            </div>
            <div class="answer">
              <dl class="clearfix" v-for="answer in guest.childComments">
                <dt>
                  <img :src="answer.userInfo.headImage"/>
                </dt>
                <dd>
                  <div class="a-title"><span>{{answer.userInfo.name}}</span></div>
                  <div class="a-content">{{answer.content}}</div>
                  <div class="a-opera">
                    <span class="date">{{answer.createTime|formatTiem}}</span>
                    <a href="javascript:void(0);" class="r answer-reply" @click="replayAnswer(answer)">回复</a>
                  </div>
                </dd>
              </dl>
            </div>
          </dd>
        </dl>
      </div>

      <div class="foot">
        <div class="goset" v-if="!user">
          <p>请验证您的手机以使用社区功能。 <a href="javascript:;" class="">前往设置</a></p>
        </div>
        <div>
          <!--<Page :total="100" show-sizer></Page>-->
        </div>
      </div>

      <div class="sendmsg" id="sendmsg" v-show="msg.state">
        <input type="text" :placeholder="msg.name" v-model="msg.content"/>
        <button class="btn" @click="onSend">发送</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import API from '@/fetch/api';
  import util from '@/util/util';
  import auth from '@/util/auth';

  export default {
    components:{
      Header
    },
    data () {
      return {
        id:"",
        user:"",
        post:"",
        commentList:[],
        // currPage:1,
        // countPerPage:10,
        msg:{
          id:"",
          name:"",
          content:"",
          state:0
        }
      }
    },
    mounted(){
      this.user = auth.getUserInfo();
      this.id = util.GetQueryString("id");
      if(!this.id){
        this.$router.push("/");
        return;
      }
      if(!this.user){
        this.user = {id:"",token:""};
      }

      this.getPost();
      this.getCommentList();

      //点击任何地方关闭输入框
      $("#sqdBox").click((e)=>{
        if(!$(e.target).is('#sendmsg *') &&　!$(e.target).is(".master-reply") &&　!$(e.target).is(".guest-reply") &&　!$(e.target).is(".answer-reply")) {
          if(this.msg.state == 1){
            this.msg.state = 0;
            this.msg.id = "";
            this.msg.name = "";
          }
        }
      });
    },
    methods:{
      onSend(){
        if(!this.msg.content){
          alert("请输入内容");
          return;
        }

        this.addCommentHttp();
      },
      replayMaster(){
        if(!this.user.id){
          alert("请先去登录！");
          return;
        }

        this.msg.state = 1;
        this.msg.name = "回复 "+this.post.userInfo.name+":";
      },
      replayGuest(data){
        if(!this.user.id){
          alert("请先去登录！");
          return;
        }

        this.msg.id = data.id;
        this.msg.state = 1;
        this.msg.name = "回复 "+data.userInfo.name+":";
      },
      replayAnswer(data){
        if(!this.user.id){
          alert("请先去登录！");
          return;
        }

        this.msg.id = data.id;
        this.msg.state = 1;
        this.msg.name = "回复 "+data.userInfo.name+":";
      },
      addCommentHttp(){
        var params = {
          "method": "addComment",
          "userid": this.user.id,
          "token": this.user.token,
          "params": {
            "postId": this.id,
            "content": this.msg.content,
            "anonymous": 0,
            "parentCommentId": this.msg.id
          }
        };

        API.comments(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }

          alert("回复成功");
          this.msg.id = "";
        });
      },
      onLike(){
        if(!this.user.id){
          alert("请先去登录！");
          return;
        }

        var params = {
          "method": "agrees",
          "userid": this.user.id,
          "token": this.user.token,
          "params": {
            "postId": this.id
          }
        };

        API.posts(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }

          if(this.post.agrees == 0){
            this.post.agrees = 1;
            ++this.post.num;
          } else{
            this.post.agrees = 0;
            --this.post.num;
          }
        });
      },
      onFollows(){
        if(!this.user.id){
          alert("请先去登录！");
          return;
        }

        var params = {
          "method": "follows",
          "userid": this.user.id,
          "token": this.user.token,
          "params": {
            "postUesrId": this.post.userInfo.id
          }
        };

        API.posts(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }

          if(this.post.follows == 0){
            this.post.follows = 1;
          } else{
            this.post.follows = 0;
          }
        });
      },
      getPost(){
        var params = {
          "method": "postInfo",
          "userid": this.user.id,
          "token": this.user.token,
          "params": {
            "postId": this.id
          }
        };

        API.posts(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }

          this.post = re.result;
        });
      },
      getCommentList(){
        var params = {
          "method": "commentList",
          "userid": "",
          "token": "",
          "params": {
            "postId": this.id,
            // "currentPage": this.currPage,
            // "countPerPage": this.countPerPage
          }
        };

        API.comments(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }

          this.commentList = re.result.commentList;
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{ padding: .32rem 0 1rem;}
  .box{ padding: 0 .32rem;}
  dl{ padding: .32rem 0 .2rem; border-bottom: 1px solid #E6E6E6;}
  dl dt,dl dd{ float: left;}
  dl dt{ text-align: center;}
  dl dt img{ border-radius: 50%;}
  .btn{ margin-right: .15rem; padding: .09rem 0; width: 1.6rem; font-size: .28rem;}
  .btn:last-child{ margin-right: 0;}
  .btn.disable{ color: #999999; background: #F5F5F5;}

  .title{ padding: .3rem .32rem .38rem; line-height: .72rem;}
  .title a{ color: #666666; font-size: .28rem;}
  .title a.blue{ color: #4FB1F7; font-size: .28rem;}
  .title .btn{ padding: 0; width: 2.4rem; height: .72rem; color: #ffffff;}

  .master dt{ width: .88rem;}
  .master dd{ padding-left: .32rem; width: 5.98rem; font-size: .28rem; color: #999999;}
  .master dt img{ width: .64rem; height: .64rem;}
  .master dt .name{ font-size: .22rem; color: #999999;}
  .master dt .ident{ display: inline-block; width: .88rem; font-size: .22rem; color: #ffffff; background: #8EDEE0; border-radius: 2px;}
  .master dd .m-title{ margin-bottom: .32rem; color: #333333;}
  .master dd .m-content{ margin-bottom: .32rem; overflow: hidden;}
  .master dd .m-opera{ margin-bottom: .2rem;}
  .master dd .m-opera .like{ padding: .06rem 0;}
  .master dd .m-opera .btn i{ margin-right: .08rem; font-size: .32rem; vertical-align: middle;}
  .master dd .m-date{ font-size: .22rem; line-height: .32rem;}
  .guest{ padding: .2rem 0;}
  .guest>dt{ padding-top: .32rem; width: .88rem;}
  .guest>dd{ padding-left: .32rem; width: 5.98rem; font-size: .28rem; color: #999999;}
  .guest .info{ padding: .32rem 0 .2rem;}
  .guest .info .g-title{ margin-bottom: .16rem; font-size: .22rem; color: #999999;}
  .guest .info .g-title .layer{ color: #718398;}
  .guest .info .g-content{ margin-bottom: .4rem; overflow: hidden;}
  .guest .info .g-opera{ margin-bottom: .2rem;}
  .guest .answer{ padding: 0 .32rem 0 .34rem; background: #F5F5F5;}
  .guest .answer>dl{ padding: .2rem 0; border-bottom: 1px solid #E6E6E6;}
  .guest .answer>dl:last-child{ border: 0;}
  .guest .answer>dl>dt{ width: .48rem;}
  .guest .answer>dl>dd{ padding-left: .18rem; width: 4.52rem; font-size: .22rem;}
  .guest .answer>dl>dt img{ width: .48rem; height: .48rem;}
  .guest .answer .a-title{ margin-bottom: .22rem;}
  .guest .answer .a-content{ margin-bottom: .2rem; font-size: .24rem; overflow: hidden;}
  .guest .answer .a-opera a{ font-size: .22rem; color: #47ABF3;}

  .foot{ text-align: center;}
  .foot .goset{ padding: .4rem 0 .64rem; font-size: .28rem; color: #999999;}
  .foot .goset a{ color: #47ABF3;}

  .sendmsg{ position: fixed; bottom: 0; padding: .2rem .32rem; width: 7.5rem; font-size: 0; background: #F5F5F5;}
  .sendmsg input{ margin-right: .3rem; padding: .08rem; width: 5.46rem; vertical-align: middle;}
  .sendmsg .btn{ width: 1.1rem;}
</style>

<template>
  <div class="header">
    <div class="nav">
      <div class="container">
        <router-link class="logo" tag="a" to="/"><img src="../assets/images/logo.png"/></router-link>
        <div class="menu r">
          <a href="javascript:;" class="mask" @click="onMaskTrigger"><img :src="mask1"/></a>
          <a href="javascript:;" class="siderbar" @click="onMenuTrigger">
            <img src="../assets/images/menu.png"/>
          </a>
        </div>
      </div>
    </div>

    <!--遮罩-->
    <div class="tbg" :class="{ hide: !tbgTrigger}" @click="onTbg"></div>

    <!-- 头像 -->
    <div class="toggle-mask" :class="{ active: maskTrigger }">
      <div class="mask-not-logged" v-if="!user">
        <div class="top-bar">
          <a href="/"><img class="logo" src="../assets/images/logo.png"/></a>
          <span class="iconfont icon-delete r close" @click="onMaskTrigger"></span>
        </div>
        <div class="main">
          <ul>
            <li><a href="javascript:;">服务热线</a></li>
            <li><a href="javascript:;">027-8720-6915</a></li>
          </ul>
        </div>
        <div class="foot">
          <router-link to="register" tag="a">免费注册</router-link>
          <router-link to="login" tag="a">登录</router-link>
        </div>
      </div>

      <div class="mask-already-logged"  v-if="user">
        <div class="top-bar">
          <img class="usermask" :src="mask2"/>
          <a href="javascript:;" class="username">{{user.name}}</a>
          <span class="iconfont icon-delete r close" @click="onMaskTrigger"></span>
        </div>
        <div class="main">
          <ul>
            <li><router-link tag="a" to="userInfo">个人信息</router-link></li>
            <li><router-link tag="a" to="updatePwd">修改密码</router-link></li>
            <li><router-link tag="a" to="order">我的订单</router-link></li>
            <li><router-link tag="a" to="bind">样本绑定</router-link></li>
            <li><router-link tag="a" to="report">查看报告</router-link></li>
            <li><a href="javascript:;" @click="onLogout">退出</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 菜单 -->
    <div class="toggle-menu" :class="{ active: menuTrigger }">
      <div class="menu">
        <div class="top-bar">
          <span class="iconfont icon-delete close" @click="onMenuTrigger"></span>
        </div>
        <div class="main">
          <ul>
            <router-link tag="li" to="/">首页</router-link>
            <router-link tag="li" to="flow">检测流程</router-link>
            <router-link tag="li" to="reportNav">报告示例</router-link>
            <router-link tag="li" to="shequ">社区</router-link>
            <router-link tag="li" to="buyNav">购买</router-link>
          </ul>
        </div>
        <div class="foot">
          <div class="already-logged" v-if="user">
            <img class="usermask" :src="mask2"/><a href="javascript:;" class="username">{{user.name}}</a>|<a href="javascript:;" class="logout" @click="onLogout">退出</a>
          </div>
          <div class="not-logged" v-if="!user">
            <router-link tag="a" to="login">登录</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import API from '@/fetch/api';
  import auth from '@/util/auth';
  import mask1 from '@/assets/images/mask1.png';
  import mask2 from '@/assets/images/mask2.png';

export default {
  data () {
    return {
      user: "",
      mask1: mask1,
      mask2: mask2,
      menuTrigger: false,
      maskTrigger: false,
      tbgTrigger: false
    }
  },
  mounted(){
    this.user = auth.getUserInfo();

    if(this.user){
      this.mask1 = this.user.headImage?this.user.headImage:mask1;
      this.mask2 = this.user.headImage?this.user.headImage:mask2;
    }
  },
  methods:{
    onLogout(){
      var params = {
        "userid": this.user.id,
        "method": "logout",
        "token": this.user.token,
        "params": {}
      };
      API.userInfo(params).then((re) => {
        if (re.status.code !== 200) {
          alert(re.status.message);
          return;
        }
        auth.removeUserInfo();
        location.reload()
      })
    },
    onMenuTrigger(){
      this.tbgTrigger = !this.menuTrigger;
      this.menuTrigger = !this.menuTrigger;
    },
    onMaskTrigger(){
      this.tbgTrigger = !this.maskTrigger;
      this.maskTrigger = !this.maskTrigger;
    },
    onTbg(){
      if(this.menuTrigger){
        this.menuTrigger = !this.menuTrigger;
        this.tbgTrigger = false;
      }
      if(this.maskTrigger){
        this.maskTrigger = !this.maskTrigger;
        this.tbgTrigger = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{overflow: hidden;}
  .nav{ padding: .18rem 0;}
  .nav img{display: inline-block;}
  .nav .logo img{ width: 1.04rem;}
  .nav .menu .mask img{ margin-top: .12rem; margin-right: .2rem; width: .48rem; height: .48rem; border-radius: 50%;}
  .nav .menu .siderbar img{ margin-top: .12rem; margin-left: .2rem; width: .48rem; height: .48rem;}
  .tbg{ position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,.7); z-index: 99;}

  /*头像*/
  .toggle-mask{ position: fixed; top: 0; width: 7.5rem; z-index: 999; -webkit-transform: translateY(-100%); transform: translateY(-100%);transition: all .5s;}
  .toggle-mask.active{ -webkit-transform: translateY(0); transform: translateY(0);}
  .toggle-mask>div{ position: relative; top: 0; background: #15171A; font-size: .14rem; color: #999999; z-index: 999;}
  .toggle-mask>div .top-bar{ padding: .18rem .4rem; background: #202124;}
  .toggle-mask>div .top-bar .close{ margin-top: .09rem; line-height: 1; font-size: .5rem; color: #ffffff;}

  .toggle-mask .mask-not-logged .top-bar .logo{ width: 1.04rem;}
  .toggle-mask .mask-not-logged .main{ padding-right: 50%;}
  .toggle-mask .mask-not-logged .main ul li{ padding: .30rem .44rem; border-bottom: 1px solid #2B2B2E;}
  .toggle-mask .mask-not-logged .main ul li:last-child{ border: 0;}
  .toggle-mask .mask-not-logged .main ul li a{ font-size: .28rem; color: #F5F5F5;}
  .toggle-mask .mask-not-logged .main ul li:last-child a{ font-size: .28rem; color: #999999;}
  .toggle-mask .mask-not-logged .foot{ padding: .3rem 0 .66rem; font-size: 0; text-align: center;}
  .toggle-mask .mask-not-logged .foot a{ display: inline-block; margin-right: .4rem; width: 3.14rem; height: .7rem; line-height: .72rem; font-size: .28rem; border: 1px solid #666666;}
  .toggle-mask .mask-not-logged .foot a:active{ color: #ffffff; background: #00A4FF; border: 1px solid #00A4FF;}
  .toggle-mask .mask-not-logged .foot a:last-child{ margin-right: 0;}

  .toggle-mask .mask-already-logged .top-bar{ padding: .30rem .4rem;}
  .toggle-mask .mask-already-logged .top-bar .usermask{ margin-right: .18rem; width: .48rem; height: .48rem; border-radius: 50%;}
  .toggle-mask .mask-already-logged .top-bar .username{ display: inline-block; max-width: 2rem; vertical-align: middle; font-size: .32rem; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
  .toggle-mask .mask-already-logged .top-bar .close{ margin-top: 0;}
  .toggle-mask .mask-already-logged .main{ font-size: .32rem;}
  .toggle-mask .mask-already-logged .main ul{ padding: .24rem 0;}
  .toggle-mask .mask-already-logged .main ul li{ padding: .24rem 0; text-align: center;}
  .toggle-mask .mask-already-logged .main ul li a{ color: #ffffff;}
  .toggle-mask .mask-already-logged .main ul li a:active{ color: #4FB1F7;}

  /*菜单*/
  .toggle-menu{ position: fixed; top: 0; bottom: 0; overflow: hidden; width: 100%; height: 100%; z-index: 999; -webkit-transform: translateX(100%); transform: translateX(100%); transition: all .5s;}
  .toggle-menu.active{ -webkit-transform: translateX(1.5rem); transform: translateX(1.5rem);}
  .toggle-menu .menu{ position: absolute; overflow-y: auto; width: 6rem; height: 100%; font-size: .14rem; color: #999999; z-index: 999; background: #4FB1F7;}
  .toggle-menu .menu .top-bar{ padding: .27rem .4rem; line-height: 1; color: #ffffff; text-align: right;}
  .toggle-menu .menu .top-bar .close{ font-size: .5rem; vertical-align: middle;}
  .toggle-menu .menu .main ul{ padding-bottom: .2rem;}
  .toggle-menu .menu .main ul li{ margin-bottom: .2rem; padding: .14rem .4rem; font-size: .32rem; color: #ffffff;}
  .toggle-menu .menu .main ul li:active{ background: rgba(0,0,0,0.20);}
  .toggle-menu .foot{ padding-left: .4rem;}
  .toggle-menu .foot>div{ padding: .22rem 0; color: #ffffff; font-size: .32rem; vertical-align: middle; border-top: 0.01rem solid #ffffff;}
  .toggle-menu .foot>div a{ color: #ffffff; vertical-align: middle;}
  .toggle-menu .foot .already-logged img{ margin-right: .14rem; width: .48rem; height: .48rem; border-radius: 50%;}
  .toggle-menu .foot .already-logged .username{ display: inline-block; margin-right: .14rem; max-width: 2rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
  .toggle-menu .foot .already-logged .logout{ margin-left: .14rem;}



</style>

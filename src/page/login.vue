<template>
  <div class="main">
    <div class="container">
      <div class="title">
        <router-link tag="a" to="/"><img src="../assets/images/logo.png"/></router-link>
        <span class="line"></span>
        <a href="javascript:;">账户登录</a>
      </div>

      <div class="form">
        <ul>
          <li>
            <input type="text" placeholder="请输入用户名" v-model="username.text" @focus="onFocusAcc"/>
            <p class="error" v-if="username.error"><i class="iconfont icon-delete"></i> {{username.msg}}</p>
          </li>

          <li>
            <input type="password" placeholder="请输入密码" v-model="password.text" @focus="onFocusPwd"/>
            <i class="iconfont icon-delete clean" v-if="password.text" @click="clear"></i>
            <p class="error" v-if="password.error"><i class="iconfont icon-delete"></i> {{password.msg}}</p>
          </li>

          <li style="padding-top: .2rem;">
            <button class="btn btn-block login" v-on:click="onLogin()">登录</button>
          </li>

          <li>
            <a href="javascript:;" @click="toTherLogin"><span class="iconfont icon-weixin wechat"></span></a>
            <router-link to="forget" tag="a" class="r forget">忘记密码？</router-link>
          </li>
        </ul>

        <div class="rbox">
          <p>还没有注册己秘账号？</p>
          <router-link to="register" tag="a" class="btn btn-block btn-empty">立即注册</router-link>
        </div>
      </div>

      <div class="copyright">
        <p>2018 GeneMe. All Rights Reserved<br/>鄂ICP备14013250号-2 鄂公网安备 42018502001124 号</p>
      </div>
    </div>
  </div>
</template>

<script>
  import API from '@/fetch/api';
  import auth from '@/util/auth';
  import reg from '@/util/reg';
  import util from '@/util/util';

  export default {
    data() {
      return {
        username: {
          text: "",
          // text: "18201481453",
          error: 0,
          msg:""
        },
        password: {
          text: "",
          // text: "111111a",
          error: 0,
          msg:""
        }
      }
    },
    mounted() {
    },
    methods: {
      toTherLogin(){
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
          this.$router.push("/otherLogin")
        }else{
          alert("请用使用微信浏览器");
        }
      },
      onFocusAcc(){
        this.username.error = 0;
        this.username.msg = "";
      },
      onFocusPwd(){
        this.password.error = 0;
        this.password.msg = "";
      },
      clear() {
        this.password.text = "";
      },
      onLogin() {
        if (!reg.phone.test(this.username.text)) {
          this.username.error = 1;
          this.username.msg = "请输入正确的手机号";
          return;
        }
        if (!reg.password.test(this.password.text)) {
          this.password.error = 1;
          this.password.msg = "密码不能小于6位";
          return;
        }

        var params = {
          "userid": "",
          "method": "login",
          "token": "",
          "params": {
            "phone": this.username.text,
            "password": this.password.text
          }
        };

        API.userInfo(params).then((re) => {
          if(re.status.code == 305){
            this.username.error = 1;
            this.username.msg = re.status.message;
            return;
          }
          if(re.status.code == 315){
            this.password.error = 1;
            this.password.msg = re.status.message;
            return;
          }
          if (re.status.code !== 200) {
            alert(re.status.message);
            return;
          }

          auth.setUserInfo(re.result);
          this.$router.push('/');
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    padding-top: .8rem;
    min-height: 100%;
    background: #EBEBEB;
  }

  .title {
    text-align: center;
  }

  .title img {
    width: 1.14rem;
  }

  .title .line {
    display: inline-block;
    margin: 0 .4rem;
    width: 2px;
    height: 1.08rem;
    vertical-align: middle;
    background: #D9D9D9;
  }

  .title a {
    font-size: .4rem;
  }

  .form {
    padding: 1.28rem .44rem 0 .46rem;
  }

  .form input {
    width: 100%;
  }

  .form ul {
    width: 100%;
  }

  .form ul li {
    position: relative;
    margin-bottom: .6rem;
  }

  .form ul li .clean {
    display: inline-block;
    position: absolute;
    top: .22rem;
    right: .4rem;
    padding: .05rem;
    line-height: 1;
    font-size: .2rem;
    color: #ffffff;
    cursor: pointer;
    border-radius: 50%;
    background: rgba(113, 131, 152, 0.50);
  }

  .form ul li .error {
    position: absolute;
    bottom: -.4rem;
    font-size: .24rem;
    color: #718398;
  }

  .form ul li .error i {
    display: inline-block;
    margin-top: -4px;
    margin-right: .12rem;
    padding: .05rem;
    line-height: 1;
    font-size: .2rem;
    color: #ffffff;
    vertical-align: middle;
    border-radius: 50%;
    background: #F25484;
  }

  .form ul li .btn {
    background: #47ABF3;
  }

  .form ul li .wechat {
    color: #19D100;
    font-size: .6rem;
    vertical-align: middle;
  }

  .form ul li .forget {
    margin-top: .24rem;
    color: #1991EB;
    font-size: .28rem;
    vertical-align: middle;
  }

  .form .rbox {
    padding-bottom: .34rem;
    border-top: 1px solid #D9D9D9;
  }

  .form .rbox p {
    padding: .2rem 0;
    font-size: .28rem;
    color: #999999;
    text-align: center;
  }

  .form .rbox a {
    margin-top: .1rem;
  }

  .copyright {
    padding: .4rem 0;
    font-size: .24rem;
    color: #999999;
    text-align: center;
  }

</style>

<template>
  <div class="main">
    <div class="container">
      <div class="title">
        <router-link tag="a" to="/"><img src="../assets/images/logo.png"/></router-link>
        <span class="line"></span>
        <a href="javascript:;">注册账号</a>
      </div>

      <div class="form">
        <div class="row">
          <input type="text" placeholder="请输入您的手机号" v-model="mobile"/>
        </div>

        <div class="row f0">
          <input type="text" class="input-small" placeholder="验证码" v-model="code.text"/>
          <button class="btn btn-small" @click="onSendCode" :class="{disabled:code.state}" :disabled="code.state == 1">{{code.btn}}</button>
        </div>

        <div class="row">
          <input type="password" placeholder="请输入您的密码" v-model="password"/>
        </div>

        <div class="row">
          <input type="password" placeholder="再次输入密码" v-model="again"/>
        </div>

        <div class="row f0">
          <input type="text" class="input-small" placeholder="图片验证码" v-model="imgcode.text"/>
          <img :src="imgcode.src" class="r imgcode" @click="getImgCode"/>
        </div>

        <div class="row">
          <label class="checkbox">
            <input type="checkbox" v-model="agree"/>
            <i><img src="../assets/images/checkbox1.png"><img src="../assets/images/checkbox2.png"></i>
            <span>我已遵阅读并同意本站的</span>
          </label>
          <router-link class="contract" tag="a" :to="{path:'/about',query: {type: 1}}">用户协议</router-link>
        </div>

        <div class="row">
          <button class="btn btn-block" @click="onSubmit">提交</button>
        </div>
      </div>

      <div class="go">
        已有账号？<router-link to="login" tag="a" class="gologin">立即登录</router-link>
        <!--<a href="/login" class="gologin">立即登录</a>-->
      </div>
    </div>
  </div>
</template>

<script>
  import API from '@/fetch/api';
  import reg from '@/util/reg';
  import auth from '@/util/auth';

export default {
  data () {
    return {
      mobile:"",
      password:"",
      again:"",
      agree:"",
      imgcode:{
        src:"",
        text:""
      },
      code:{
        text:"",
        state:0,
        btn:"发送验证码"
      }
    }
  },
  mounted(){
    this.imgcode.src = "http://www.geneme.com.cn/imageCode.jsp?"+Math.random();
  },
  methods:{
    getImgCode(){
      this.imgcode.src = "http://www.geneme.com.cn/imageCode.jsp?"+Math.random()
    },
    onSubmit(){
      if(!reg.phone.test(this.mobile)){
        alert("请输入正确的手机号");
        return;
      }
      if(!reg.code.test(this.code.text)){
        alert("验证码必须是6位整数");
        return;
      }
      if(!reg.password.test(this.password) || !reg.password.test(this.again)){
        alert("密码不能小于6位");
        return;
      }
      if(this.password != this.again){
        alert("两次密码输入不一致");
        return;
      }
      if(this.imgcode.text == ""){
        alert("图片验证码不能为空");
        return;
      }
      if(!this.agree){
        alert("请同意用户协议");
        return;
      }

      var params = {
        "method": "register",
        "userid": "",
        "token": "",
        "params": {
          "phone": this.mobile,
          "password": this.password,
          "code": this.code.text,
          "pageCode": this.imgcode.text
        }
      };
      API.userInfo(params).then((re) => {
        if (re.status.code !== 200) {
          alert(re.status.message);
          return;
        }

        auth.setUserInfo(re.result);
        this.$router.push("/");
      });
    },
    countDown(){
      let count = 10;
      this.code.state = 1;
      let timer = setInterval(()=>{
        --count;
        if(count<1){
          clearInterval(timer);
          this.code.btn = "发送验证码";
          this.code.state = 0;
          return;
        }
        this.code.btn = count;
      },1000)
    },
    onSendCode(){
      if(!reg.phone.test(this.mobile)){
        alert("请输入正确的手机号");
        return;
      }

      this.countDown();

      var params = {
        "method": "getCode",
        "userid": "",
        "token": "",
        "params": {
          "phone": this.mobile,
          "type":"1"
        }
      };

      API.userInfo(params).then((re) => {
        if (re.status.code !== 200) {
          alert(re.status.message);
          return;
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{ padding-top: .8rem; min-height: 100%; background: #EBEBEB;}
  .title{ text-align: center;}
  .title img{ width: 1.14rem}
  .title .line{ display: inline-block; margin: 0 .4rem; width: 2px; height: 1.08rem; vertical-align: middle; background: #D9D9D9;}
  .title a{ font-size: .4rem;}
  .title a:hover{ color: #999999;}

  .form{ overflow: hidden; margin-top: .48rem; padding: .8rem .44rem 0 .46rem; background: #ffffff;}
  .form input{ width: 100%; vertical-align: middle;}
  .form .row{ margin-bottom: .6rem;}
  .form .input-small{ margin-right: .1rem; width: 3.2rem;}
  .form .imgcode{ width: 1.68rem; height: .72rem; vertical-align: middle;}
  .form .checkbox{ margin-right: .22rem; color: #666666; cursor: pointer;}
  .form .checkbox i{ font-size: .3rem; vertical-align: middle;}
  .form .contract{ color: #1991EB; text-decoration: underline;}
  .go{ padding: .52rem 0; color: #666666; text-align: center;}
  .go .gologin{ color: #1991EB; text-decoration: underline;}
</style>

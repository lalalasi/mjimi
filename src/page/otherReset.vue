<template>
  <div class="main">
    <div class="container">
      <div class="title">
        <router-link tag="a" to="/"><img src="../assets/images/logo.png"/></router-link>
        <span class="line"></span>
        <a href="javascript:;">绑定手机密码</a>
      </div>

      <div class="form">
        <div class="row">
          <input type="password" placeholder="请输入您的密码" v-model="password"/>
        </div>

        <div class="row">
          <input type="password" placeholder="再次输入密码" v-model="again"/>
        </div>

        <div class="row">
          <button class="btn btn-block" @click="onSubmit">确定</button>
        </div>
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
    data () {
      return {
        openid:"",
        mobile:"",
        code:"",
        password:"",
        again:""
      }
    },
    mounted(){
      this.openid = util.GetQueryString("openid");
      this.mobile = util.GetQueryString("phone");
      this.code = util.GetQueryString("code");

      if(!this.openid||!this.mobile||!this.code){
        this.$router.push("/login")
      }
    },
    methods:{
      onSubmit(){
        if(!reg.password.test(this.password) || !reg.password.test(this.again)){
          alert("密码不能小于6位");
          return;
        }
        if(this.password != this.again){
          alert("两次密码输入不一致");
          return;
        }

        var params = {
          "method": "thirdBindPhone",
          "userid": "",
          "token": "",
          "params": {
            "uniqueId": this.openid,
            "type": 0,
            "phone": this.mobile,
            "code": this.code,
            "password": this.password
          }
        };
        API.userInfo(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message);
            return;
          }

          //绑定成功跳转首页
          auth.setUserInfo(re.result);
          alert("绑定成功");
          this.$router.push('/');
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{ padding-top: .8rem; min-height: 100%; background: #EBEBEB;}
  .title{ text-align: center;}
  .title img{ width: 1.14rem;}
  .title .line{ display: inline-block; margin: 0 .4rem; width: 2px; height: 1.08rem; vertical-align: middle; background: #D9D9D9;}
  .title a{ font-size: .4rem;}

  .form{ overflow: hidden; margin-top: .48rem; padding: .8rem .44rem 0 .46rem; background: #ffffff;}
  .form input{ width: 100%; vertical-align: middle;}
  .form .row{ margin-bottom: .6rem;}
</style>

<template>
  <div class="main">
    <div class="container">
      <div class="title">
        <router-link tag="a" to="/"><img src="../assets/images/logo.png"/></router-link>
        <span class="line"></span>
        <a href="javascript:;">绑定手机</a>
      </div>

      <div class="form">
        <div class="row">
          <input type="text" placeholder="请输入您的手机号" v-model="mobile"/>
        </div>

        <div class="row f0">
          <input type="text" class="input-small" maxlength="6" placeholder="验证码" v-model="code.text"/>
          <button class="btn btn-small" @click="onSendCode" :class="{disabled:code.state}" :disabled="code.state == 1">{{code.btn}}</button>
        </div>

        <div class="row">
          <button class="btn btn-block" @click="onNextPage">下一步</button>
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
      existStatus:"", //是否注册 0未注册 1已注册
      mobile:"",
      code:{
        text:"",
        state:0,
        btn:"发送验证码"
      }
    }
  },
  mounted(){
    this.openid = util.GetQueryString("openid");

    if(!this.openid){
      this.$router.push("/login");
      return;
    }


  },
  methods:{
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
          "type":"3",
          "bindType": 0
        }
      };

      API.userInfo(params).then((re) => {
        if (re.status.code !== 200) {
          alert(re.status.message);
          return;
        }

        this.existStatus = re.result.existStatus;
      });
    },
    onNextPage(){
      if(!reg.phone.test(this.mobile)){
        alert("请输入正确的手机号");
        return;
      }
      if(!reg.code.test(this.code.text)){
        alert("验证码必须是6位整数");
        return;
      }
      if(this.existStatus === ""){
        alert("请获取验证码");
        return;
      }

      if(this.existStatus == 0){
        this.$router.push('/otherReset?openid='+this.openid+"&phone="+this.mobile+"&code="+this.code.text);
      } else {
        this.toBind();
      }


    },
    toBind(){
      var params = {
        "method": "thirdBindPhone",
        "userid": "",
        "token": "",
        "params": {
          "uniqueId": this.openid,
          "phone": this.mobile,
          "type": 0,
          "code": this.code.text
        }
      };
      API.userInfo(params).then((re) => {
        if (re.status.code !== 200) {
          alert(re.status.message);
          return;
        }

        //绑定成功跳转首页
        auth.setUserInfo(re.result);
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
  .form .input-small{ margin-right: .1rem; width: 3.2rem;}
  .form .btn-small.disabled{ background: #999999;}
</style>

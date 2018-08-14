<template>
  <div class="main">
    <div class="container">
      <div class="title">
        <router-link tag="a" to="/"><img src="../assets/images/logo.png"/></router-link>
        <span class="line"></span>
        <a href="javascript:;">密码找回</a>
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
  import reg from '@/util/reg';

export default {
  data () {
    return {
      mobile:"",
      code:{
        text:"",
        state:0,
        btn:"发送验证码"
      }
    }
  },
  mounted(){

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
          "type":"2"
        }
      };

      API.userInfo(params).then((re) => {
        if (re.status.code !== 200) {
          alert(re.status.message);
          return;
        }
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

      var params = {
        "method": "validateCode",
        "userid": "",
        "token": "",
        "params": {
          "phone": this.mobile,
          "type":"2",
          "code": this.code.text
        }
      };
      API.userInfo(params).then((re) => {
        if (re.status.code !== 200) {
          alert(re.status.message);
          return;
        }

        this.$router.push({name: 'reset', params: {mobile: this.mobile,code:this.code.text}});
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

<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="container">
        <div class="form">
          <p><input type="password" placeholder="请输入您的旧密码" v-model="password"/></p>
          <p><input type="password" placeholder="请输入您的新密码" v-model="newPassword"/></p>
          <p><input type="password" placeholder="请再次输入您的新密码" v-model="again"/></p>
        </div>
        <div class="btnbox">
          <button class="btn btn-block" @click="onSubmit">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import API from '@/fetch/api';
  import util from '@/util/util';
  import reg from '@/util/reg';
  import auth from '@/util/auth';

  export default {
    components:{
      Header
    },
    data () {
      return {
        user:"",
        password:"",
        newPassword:"",
        again:""
      }
    },
    mounted(){
      this.user = auth.getUserInfo();

      if(!this.user){
        this.$router.push("/");
      }
    },
    methods:{
      onSubmit(){
        if(!this.password){
          alert("请输入旧密码");
          return;
        }
        if(!this.newPassword || !this.again){
          alert("请输入新密码");
          return;
        }
        if(!reg.password.test(this.password) || !reg.password.test(this.newPassword) || !reg.password.test(this.again)){
          alert("密码不能小于6位");
          return;
        }
        if(this.newPassword != this.again){
          alert("两次密码输入不一致");
          return;
        }

        var params = {
          "method": "updatePwd",
          "userid": this.user.id,
          "token": this.user.token,
          "params": {
            "password": this.password,
            "newPassword": this.newPassword
          }
        };
        API.userInfo(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message);
            return;
          }

          alert("修改成功");
          util.Success();
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{ padding: 1.06rem .44rem 0; height: 100%;}
  .form p{ margin-bottom: .6rem;}
  .form p input{ width: 100%;}
</style>

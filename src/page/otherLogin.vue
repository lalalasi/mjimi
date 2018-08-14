<template>
  <div class="main">
  </div>
</template>

<script>
  import API from '@/fetch/api';
  import auth from '@/util/auth';
  import util from '@/util/util';

  export default {
    data() {
      return {
      }
    },
    mounted() {
      let unionId = util.GetQueryString("unionId");

      if(unionId){
        this.toWechat(unionId);
      } else{
        location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx72bfdec50dca542d&response_type=code&scope=snsapi_userinfo&state=index.html/otherLogin&redirect_uri=http://www.geneme.com.cn/weChat!getWeChatUserInfo.action#wechat_redirect';
      }
    },
    methods: {
      toWechat(unionId){
        let params = {
          "userid": "",
          "token": "",
          "method": "thirdLogin",
          "params": {
            "uniqueId": unionId,
            "type": 0
          }
        };

        API.userInfo(params).then((re) => {
          //第一次登录跳转绑定手机号
          if(re.status.code == 313){
            this.$router.push('/otherBind?openid='+unionId);
            return;
          }

          if(re.status.code!=200){
            alert(re.status.message);
            return;
          }

          //不是第一次保存信息跳转首页
          auth.setUserInfo(re.result);
          this.$router.push('/');
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

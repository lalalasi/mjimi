<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="container">
        <h2 class="h1">基因检测流程</h2>
        <p>2mL唾液，收获一份终身健康财富。足不出<br/>户，简易的检测流程，己秘改变您的生活</p>
        <img src="../assets/images/flow.png"/>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import Footer from '@/components/Footer';
  import util from '@/util/util';

  export default {
    components:{
      Header,
      Footer
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      let openId = util.GetQueryString("openId");
      if(openId){
        sessionStorage.setItem("openId",openId)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{ padding: .42rem 0 .8rem;}
  .h1{ line-height: 1.08rem; text-align: center;}

  p{ margin-top: .32rem; line-height: .48rem; font-size: .28rem; color: #718398; text-align: center;}
  img{ margin-top: .6rem;}
</style>

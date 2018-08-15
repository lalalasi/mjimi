<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="banner">
        <div class="container">
          <div class="h1">精准减肥</div>
          <p>肥胖分为先天性肥胖、淀粉型肥胖、脂质型肥<br/>胖和代谢型肥胖。不同类型的肥胖适合不同的<br/>减肥方法，有的人适合节食减肥，有的适合运<br/>动减肥。</p>
          <p><em>己秘</em>——揭开基因秘密，更好了解自己。通过<br/>己秘定制精准减肥方案，让减肥事半功倍。</p>
        </div>
      </div>

      <div class="download">
        <div class="container">
          <img src="../assets/images/dome_computer.png"/>
          <!--<a href="javascript:;" class="btn btn-block"><i></i>查看示例报告</a>-->
          <router-link tag="a" to="reportDomeJianfei" class="btn btn-block"><i></i>查看示例报告</router-link>
        </div>
      </div>

      <div class="project">
        <div class="container">
          <h3 class="h2 xline"><span>检测项目</span></h3>
          <div class="list">
            <ul>
              <li><a href="javascript:;">先天性肥胖风险评估</a></li>
              <li><a href="javascript:;">脂质型肥胖</a></li>
              <li><a href="javascript:;">淀粉型肥胖</a></li>
              <li><a href="javascript:;">代谢型肥胖</a></li>
              <li><a href="javascript:;">控制脂肪摄入对减肥的帮助</a></li>
              <li><a href="javascript:;">味蕾辨识脂肪能力</a></li>
              <li><a href="javascript:;">情绪化饮食倾向</a></li>
              <li><a href="javascript:;">节食减肥的效果</a></li>
              <li><a href="javascript:;">运动减肥的效果</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import Footer from '@/components/Footer';

  export default {
    components:{
      Header,
      Footer
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner{ padding-top: .74rem; padding-left: .2rem; height: 5.6rem; background: url("../assets/images/dome_jf.png") no-repeat scroll center; background-size: 100% 100%;}
  .banner .h1{ line-height: 1.08rem; text-align: left;}
  .banner p{ margin-top: .22rem; line-height: .4rem; color: #718398; font-size: .22rem;}
  .banner p:last-child{ margin-top: .4rem;}
  .banner p em{ color: #4fb1f7; font-style: normal;}

  .download{ padding: .7rem .36rem .8rem; text-align: center;}
  .download .btn{ margin-top: .52rem; width: 5.8rem;}

  .project{ padding-bottom: .8rem;}
  .project .list{ margin-top: .52rem;}
  .project .list ul li{ padding: .15rem 0; text-align: center; color: #999999;}
</style>

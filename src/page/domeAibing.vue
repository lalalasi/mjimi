<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="banner">
        <div class="container">
          <div class="h1">高发癌症患病风险预测</div>
          <p>常说的“癌症发现就是晚期”。步入中年，在环<br/>境污染，工作和家庭的压力下，四大高发癌症<br/>患病风险升高，基因检测可以帮您延缓或者规<br/>避癌症的发生。</p>
          <p><em>己秘</em>——揭开基因秘密，更好了解自己。通过<br/>己秘了解高发癌症风险，指导养成健康生活习<br/>惯，预防疾病发生。</p>
        </div>
      </div>

      <div class="download">
        <div class="container">
          <img src="../assets/images/dome_computer.png"/>
          <!--<a href="javascript:;" class="btn btn-block"><i></i>查看示例报告</a>-->
          <router-link tag="a" to="reportDomeAibing" class="btn btn-block"><i></i>查看示例报告</router-link>
        </div>
      </div>

      <div class="project">
        <div class="container">
          <h3 class="h2 xline"><span>检测项目</span></h3>
          <div class="list">
            <ul>
              <li><a href="javascript:;">肺癌</a></li>
              <li><a href="javascript:;">胃癌</a></li>
              <li><a href="javascript:;">肝癌</a></li>
              <li><a href="javascript:;">食管癌</a></li>
              <li><a href="javascript:;">结直肠癌</a></li>
              <li><a href="javascript:;">脑癌</a></li>
              <li><a href="javascript:;">前列腺癌（男）</a></li>
              <li><a href="javascript:;">膀胱癌</a></li>
              <li><a href="javascript:;">胰腺癌</a></li>
              <li><a href="javascript:;">淋巴瘤</a></li>
              <li><a href="javascript:;">乳腺癌（女）</a></li>
              <li><a href="javascript:;">甲状腺癌</a></li>
              <li><a href="javascript:;">宫颈癌（女）</a></li>
              <li><a href="javascript:;">子宫内膜癌（女）</a></li>
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
  .banner{ padding-top: .74rem; padding-left: .2rem; height: 5.6rem; background: transparent url("../assets/images/dome_ab.png") no-repeat scroll center;}
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

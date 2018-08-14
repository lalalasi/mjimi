<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="banner">
        <div class="container">
          <div class="h1">儿童营养需求</div>
          <p>营养不良会造成儿童体格、智力发育迟缓。儿<br/>童营养需求基因检测可以评估儿童对营养素的<br/>代谢能力，吸收能力及偏好性。</p>
          <p><em>己秘</em>——揭开基因秘密，更好了解自己。通过<br/>己秘为您的孩子定制个性化营养膳食指导方<br/>案，让您的孩子茁壮成长。</p>
        </div>
      </div>

      <div class="download">
        <div class="container">
          <img src="../assets/images/dome_computer.png"/>
          <!--<a href="javascript:;" class="btn btn-block"><i></i>查看示例报告</a>-->
          <router-link tag="a" to="reportDomeYingyang" class="btn btn-block"><i></i>查看示例报告</router-link>
        </div>
      </div>

      <div class="project">
        <div class="container">
          <h3 class="h2 xline"><span>检测项目</span></h3>
          <div class="list">
            <ul>
              <li><a href="javascript:;">钙营养需求</a></li>
              <li><a href="javascript:;">铁营养需求</a></li>
              <li><a href="javascript:;">锌营养需求</a></li>
              <li><a href="javascript:;">硒营养需求</a></li>
              <li><a href="javascript:;">维生素A营养需求</a></li>
              <li><a href="javascript:;">维生素C营养需求</a></li>
              <li><a href="javascript:;">维生素D营养需求</a></li>
              <li><a href="javascript:;">维生素B12营养需求</a></li>
              <li><a href="javascript:;">维生素B6营养需求</a></li>
              <li><a href="javascript:;">维生素E营养需求</a></li>
              <li><a href="javascript:;">叶酸营养需求</a></li>
              <li><a href="javascript:;">DHA营养需求</a></li>
              <li><a href="javascript:;">乳糖代谢能力</a></li>
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
  .banner{ padding-top: .74rem; padding-left: .2rem; height: 5.6rem; background: transparent url("../assets/images/dome_yy.png") no-repeat scroll center;}
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

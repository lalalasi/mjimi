<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="banner">
        <div class="container">
          <div class="h1">精准美颜</div>
          <p>你了解你的皮肤吗？你属于什么类型的皮肤？<br/>如何选择合适的护肤品？如何解决皮肤问题？</p>
          <p><em>己秘</em>——揭开基因秘密，更好了解自己。通过<br/>己秘定制你的精准护肤方案，让护肤的每一分<br/>钱都物超所值。</p>
        </div>
      </div>

      <div class="download">
        <div class="container">
          <img src="../assets/images/dome_computer.png"/>
          <!--<a href="javascript:;" class="btn btn-block"><i></i>查看示例报告</a>-->
          <router-link tag="a" to="reportDomeMeiyan" class="btn btn-block"><i></i>查看示例报告</router-link>
        </div>
      </div>

      <div class="project">
        <div class="container">
          <h3 class="h2 xline"><span>检测项目</span></h3>
          <div class="list">
            <ul>
              <li><a href="javascript:;">皮肤抗皱能力</a></li>
              <li><a href="javascript:;">皮肤再生细胞修复能力</a></li>
              <li><a href="javascript:;">皮肤排毒能力</a></li>
              <li><a href="javascript:;">皮肤保湿能力</a></li>
              <li><a href="javascript:;">皮肤抗氧化能力</a></li>
              <li><a href="javascript:;">皮肤抗光老化能力</a></li>
              <li><a href="javascript:;">皮肤抗衰老能力</a></li>
              <li><a href="javascript:;">疤痕肤质风险</a></li>
              <li><a href="javascript:;">雀斑黑色素生成风险</a></li>
              <li><a href="javascript:;">青春痘风险</a></li>
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
  .banner{ padding-top: .74rem; padding-left: .2rem; height: 5.6rem; background: url("../assets/images/dome_my.png") no-repeat scroll center; background-size: 100% 100%;}
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

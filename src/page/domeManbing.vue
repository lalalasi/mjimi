<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="banner">
        <div class="container">
          <div class="h1">常见慢性病患病风险预测</div>
          <p>在中国，每四个人里就有一名高血压患者，每<br/>十个人里就有一名糖尿病患者。慢性病已成为<br/>一个社会问题，形势已刻不容缓。</p>
          <p><em>己秘</em>——揭开基因秘密，更好了解自己。通过<br/>己秘了解慢病风险，指导健康生活，远离慢性<br/>病。</p>
        </div>
      </div>

      <div class="download">
        <div class="container">
          <img src="../assets/images/dome_computer.png"/>
          <!--<a href="javascript:;" class="btn btn-block"><i></i>查看示例报告</a>-->
          <router-link tag="a" to="reportDomeManbing" class="btn btn-block"><i></i>查看示例报告</router-link>
        </div>
      </div>

      <div class="project">
        <div class="container">
          <h3 class="h2 xline"><span>检测项目</span></h3>
          <div class="list">
            <ul>
              <li><a href="javascript:;">高血压</a></li>
              <li><a href="javascript:;">高血脂</a></li>
              <li><a href="javascript:;">糖尿病</a></li>
              <li><a href="javascript:;">痛风</a></li>
              <li><a href="javascript:;">冠心病</a></li>
              <li><a href="javascript:;">脑卒中</a></li>
              <li><a href="javascript:;">心肌梗死</a></li>
              <li><a href="javascript:;">阿尔兹海默症</a></li>
              <li><a href="javascript:;">帕金森症</a></li>
              <li><a href="javascript:;">哮喘</a></li>
              <li><a href="javascript:;">十二指肠溃疡</a></li>
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
  .banner{ padding-top: .74rem; padding-left: .2rem; height: 5.6rem; background: transparent url("../assets/images/dome_mb.png") no-repeat scroll center;}
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

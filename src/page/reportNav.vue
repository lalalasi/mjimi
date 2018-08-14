<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <h2 class="h1">报告示例</h2>

      <div class="list">
        <router-link tag="a" to="domeMeiyan">
          <dl class="item clearfix">
            <dt>
              <img src="../assets/images/icon_rnav_my.png"/>
            </dt>
            <dd>
              <h3 class="h2">精准美颜指导</h3>
              <div class="desc">
                <p>定制你的精准护肤方案，让护肤的每一分钱都物超所值。</p>
              </div>
            </dd>
          </dl>
        </router-link>

        <router-link tag="a" to="domeYingyang">
          <dl class="item clearfix">
            <dt>
              <img src="../assets/images/icon_rnav_yy.png"/>
            </dt>
            <dd>
              <h3 class="h2">儿童营养需求评估</h3>
              <div class="desc">
                <p>定制个性化营养膳食指导方案，让您的孩子茁壮成长。</p>
              </div>
            </dd>
          </dl>
        </router-link>

        <router-link tag="a" to="domeAibing">
          <dl class="item clearfix">
            <dt>
              <img src="../assets/images/icon_rnav_ab.png"/>
            </dt>
            <dd>
              <h3 class="h2">高发癌症风险预测</h3>
              <div class="desc">
                <p>了解高发癌症风险，指导养成健康生活习惯，预防疾病发生。</p>
              </div>
            </dd>
          </dl>
        </router-link>

        <router-link tag="a" to="domeManbing">
          <dl class="item clearfix">
            <dt>
              <img src="../assets/images/icon_rnav_mb.png"/>
            </dt>
            <dd>
              <h3 class="h2">常见慢病风险评估</h3>
              <div class="desc">
                <p>了解慢病风险，指导健康生活，远离慢性病。</p>
              </div>
            </dd>
          </dl>
        </router-link>

        <router-link tag="a" to="domeJianfei">
          <dl class="item clearfix">
            <dt>
              <img src="../assets/images/icon_rnav_jf.png"/>
            </dt>
            <dd>
              <h3 class="h2">精准减肥指导</h3>
              <div class="desc">
                <p>通过己秘定制精准减肥方案，让减肥事半功倍。</p>
              </div>
            </dd>
          </dl>
        </router-link>
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
  .h2{ color: #333333; font-size: .36rem;}

  .list{ margin-top: .32rem;}
  .list dl{ margin-bottom: .2rem; padding: .16rem .85rem; cursor: pointer;}
  .list dl:active{ background: #F4F7F9;}
  .list dl dt,.list dl dd{ float: left;}
  .list dl dt{ width: 1.28rem; height: 1.28rem;}
  .list dl dd{ padding-left: .38rem; width: 4.52rem;}
  .list dl dd .desc{ margin-top: .12rem; color: #999999; font-size: .22rem;}
</style>

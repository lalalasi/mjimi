<template>
  <div class="footer">
    <div class="webmap">
      <ul>
        <li :class="{active:open==1}">
          <h4 @click="onOpen(1)">关于产品<i class="iconfont icon-xiangshang r" v-if="open==1"></i><i class="iconfont icon-xiangxia r" v-if="open!=1"></i></h4>
          <ul v-show="open == 1">
            <li><router-link tag="a" to="buyNav">购买</router-link></li>
            <li><router-link tag="a" to="flow">检测流程</router-link></li>
            <li><router-link tag="a" to="shequ">基因Club</router-link></li>
            <li><router-link tag="a" to="question">关于基因检测</router-link></li>
          </ul>
        </li>
        <li :class="{active:open==2}">
          <h4 @click="onOpen(2)">报告示例<i class="iconfont icon-xiangshang r" v-if="open==2"></i><i class="iconfont icon-xiangxia r" v-if="open!=2"></i></h4>
          <ul v-show="open == 2">
            <li><router-link tag="a" to="domeMeiyan">精准美颜指导</router-link></li>
            <li><router-link tag="a" to="domeYingyang">儿童营养需求评估</router-link></li>
            <li><router-link tag="a" to="domeAibing">高发癌症风险预测</router-link></li>
            <li><router-link tag="a" to="domeManbing">常见慢病风险评估</router-link></li>
            <li><router-link tag="a" to="domeJianfei">精准减肥指导</router-link></li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="contact clearfix">
      <div class="l qr">
        <dl>
          <dt>微信公众号</dt>
          <dd>
            <img src="../assets/images/qrcode.jpg"/>
          </dd>
        </dl>
      </div>
      <div class="r tel">
        <dl>
          <dt>&nbsp;</dt>
          <dd><img src="../assets/images/logo.png"/></dd>
          <dd>服务热线</dd>
          <dd>027-8720-6915</dd>
        </dl>
      </div>
    </div>

    <div class="copyright">
      <p>2018 GeneMe. All Rights Reserved<br/>鄂ICP备14013250号-2 鄂公网安备 42018502001124 号</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open:0
    }
  },
  methods:{
    onOpen(o){
      if(this.open == o){
        this.open = 0;
        return;
      }
      this.open = o;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{ padding: 0 .4rem; background: #27374D;}
  .footer .webmap{ padding: .18rem 0 .52rem;}
  .footer .webmap>ul>li{ color: #ffffff; font-size: .36rem;}
  .footer .webmap>ul>li h4{ padding: .32rem 0 .46rem; border-bottom: 1px solid #ffffff;}
  .footer .webmap>ul>li h4 i{ font-size: .4rem;}
  .footer .webmap>ul>li.active{ color: #4FB1F7; border-color: #4FB1F7; transition: all .3s;}
  .footer .webmap>ul>li.active h4{ border-color: #4FB1F7;}
  .footer .webmap>ul>li>ul{ padding: .3rem 0;}
  .footer .webmap>ul>li>ul>li{ padding: .1rem 0; font-size: .28rem; color: #718398; }
  .footer .webmap>ul>li>ul>li a{ font-size: .28rem; color: #718398; }

  .footer .contact{ padding-bottom: .4rem;}
  .footer .contact dl dt{ padding: .29rem 0;  font-size: .32rem; color: #ffffff;}
  .footer .contact .qr img{ width: 2.18rem; height: 2.2rem;}
  .footer .contact .tel{ color: #F5F5F5; text-align: right;}
  .footer .contact .tel img{ width: 1.14rem;}
  .footer .contact .tel dl dd:nth-child(2){ margin-bottom: .52rem;}
  .footer .contact .tel dl dd:last-child{ font-size: .36rem; color: #4FB1F7;}

  .footer .copyright{ padding: .2rem 0; font-size: .24rem; color: #718398; text-align: center;}
</style>

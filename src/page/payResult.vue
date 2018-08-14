<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="box">
        <!--<div class="goods clearfix">-->
          <!--<div class="img">-->
            <!--&lt;!&ndash;<img src="../assets/images/silder-3.png"/>&ndash;&gt;-->
          <!--</div>-->
          <!--<div class="info">-->
            <!--<div class="name">常见慢性疾病风险预测</div>-->
            <!--<div class="amount">-->
              <!--<span  class="price">单价:  ¥499</span>-->
              <!--<span class="num">数量: 2</span>-->
            <!--</div>-->
            <!--<div class="total clearfix">-->
              <!--<span>总价:  ¥900</span>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->

        <div class="result">
          <div class="msg">{{order.msg}}</div>
          <div class="ico">
            <i class="iconfont icon-zhengque success" v-if="order.state == 1"></i>
            <i class="iconfont icon-cuowu1 error" v-if="order.state == 2"></i>
          </div>
          <div class="no">您的订单编号为：<em>{{orderCode}}</em></div>
          <div class="see">
            <!--<a href="javascript:;" class="btn">查看订单</a>-->
            <router-link tag="a" to="order" class="btn">查看订单</router-link>
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
  import API from '@/fetch/api';
  import util from '@/util/util';
  import auth from '@/util/auth';

  export default {
    components:{
      Header,
      Footer
    },
    data () {
      return {
        user:"",
        orderCode:"",
        order:{
          msg:"支付中",
          state: 0
        }
      }
    },
    mounted(){
      this.user = auth.getUserInfo();
      this.orderCode = util.GetQueryString("orderCode");

      if(this.orderCode){
        if(this.order.state == 0){
          let count = 20;
          let timer;
          timer = setInterval(()=>{
            if(count == 0 || this.order.state == 1){
              clearInterval(timer);
            } else {
              --count;
              this.watchWxPay();
            }
          },3000)
        }
        this.watchWxPay();
      }
    },
    methods:{
      watchWxPay(){
        var params = {
          "method": "userOrderInfo",
          "userid": this.user.id,
          "token": this.user.token,
          "params": {
            "orderCode": this.orderCode
          }
        };

        API.userOrder(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }

          if(re.result.status == 1){
            this.order.state = 1;
            this.order.msg = "支付成功！";
          } else {
            this.order.state = 2;
            this.order.msg = "支付失败！";
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{ background: #f4f7f9;}
  .box>div{ margin-bottom: .2rem; background: #ffffff;}
  .box>div:last-child{ margin-bottom: 0;}
  .h1{ margin-bottom: .26rem; font-size: .32rem; color: #333333;}
  dl{ margin-bottom: .32rem; font-size: .28rem; color: #666666;}
  dl:last-child{ margin-bottom: 0;}
  dl dt,dl dd{ float: left;}
  dl dt{ padding: .15rem 0; width: 1.4rem; text-align: right;}
  dl dd{ padding-left: .08rem; width: 5.46rem;}
  dl dd input{ width: 100%;}
  dl dd .tips{ margin-top: .32rem; font-size: .24rem; color: #999999;}
  dl dd .tips em{ color: #4FB1F7;}

  .goods{ padding: .4rem .32rem;}
  .goods>div{ float: left; height: 1.92rem;}
  .goods .img{ width: 1.92rem; background: black;}
  .goods .info{ padding-left: .32rem; width: 4.86rem;}
  .goods .info .name{ font-size: .32rem; color: #333333;}
  .goods .info .amount{ margin-top: .2rem; color: #666666;}
  .goods .info .amount .price{ margin-right: .72rem; color: #4FB1F7;}
  .goods .info .total{ margin-top: .38rem; color: #FB8D56;}
  .result{ padding: 1.2rem 0 1.7rem; text-align: center;}
  .result .msg{ line-height: .748rem; font-size: .44rem; color: #27384D;}
  .result .ico{ margin-top: .46rem;}
  .result .ico i{ font-size: 1.2rem;}
  .result .ico i.success{ color: #3dbd7d;}
  .result .ico i.error{ color: #f25484;}
  .result .no{ margin-top: .6rem;}
  .result .no em{ color: #4FB1F7;}
  .result .see{ margin-top: 1.1rem;}
  .result .see .btn{ padding: .19rem 0; width: 2.98rem; font-size: .36rem;}
</style>

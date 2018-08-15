<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="buybox">
        <h2 class="h1">高发癌症风险预测</h2>
        <div>
          <button class="btn" @click="toBuyPage"><span>&yen;{{price}}</span> 购买</button>
        </div>
      </div>

      <div class="imgbox">
        <img src="../assets/images/buy_ab_banner.png"/>
      </div>

      <div class="state">
        <div class="container">
          <div class="h2">中国癌症形势严峻</div>
          <div class="content">
            <div class="h3">癌症形势严峻</div>
            <p class="desc">国家癌症中心2015年统计数据<br/>肿瘤发病数424.9万例；平均每天确诊1.2万例</p>

            <div class="img"><img src="../assets/images/buy_ab_tj.png"/></div>

            <div class="viewpoint clearfix">
              <dl class="error clearfix">
                <dt><img src="../assets/images/icon_buy_error.png"/></dt>
                <dd><em>错误的健康观：</em><br/>我身体没有任何症状，疾病离我远着呢。</dd>
              </dl>

              <dl class="correct clearfix">
                <dt><img src="../assets/images/icon_buy_correct.png"/></dt>
                <dd><em>正确的健康观：</em><br/>癌症有一部分遗传因素，提前预知癌症风险，指导健康生活，降低发病概率。</dd>
              </dl>
            </div>

            <p class="tips">健康问题不容有失！现在和将来都重要！<br/>体检知道现在是否健康，基因检测预测未来患病风险。</p>
          </div>
        </div>
      </div>

      <div class="forecast">
        <div class="container">
          <div class="h2">基因检测预知疾病风险，指导健康生<br/>活，预防疾病发生！</div>

          <div class="content">
            <div class="h3">己秘——高发癌症风险预测</div>

            <table>
              <tr>
                <td>肺癌</td>
                <td>膀胱癌</td>
              </tr>

              <tr>
                <td>胃癌</td>
                <td>胰腺癌</td>
              </tr>

              <tr>
                <td>肝癌</td>
                <td>淋巴瘤</td>
              </tr>

              <tr>
                <td>食管癌</td>
                <td>乳腺癌（女）</td>
              </tr>

              <tr>
                <td>结直肠癌</td>
                <td>甲状腺癌</td>
              </tr>

              <tr>
                <td>脑癌</td>
                <td>宫颈癌（女）</td>
              </tr>

              <tr>
                <td>前列腺癌（男）</td>
                <td>子宫内膜癌（女）</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div class="merit">
        <div class="h2">己秘——疾病风险预测<br/>三大特点</div>
        <div class="content">
          <dl>
            <dt>全面</dt>
            <dd>全面覆盖高发癌症和常见慢性病</dd>
          </dl>

          <dl>
            <dt>科学</dt>
            <dd>美国资深专家团队研发，根据大数据人群统计，精心设计挑选可靠检测位点</dd>
          </dl>

          <dl>
            <dt>精准</dt>
            <dd>基因不会变，不用每年检测，一次检测，受用终生</dd>
          </dl>
        </div>
      </div>

      <div class="story">
        <div class="container">
          <div class="h2">用户故事</div>
          <div class="content">
            <div class="lang">
              <p>父亲抽烟二十几年了，怎么劝吸烟有害都戒不掉，还老说谁谁抽烟抽了一辈子都没事。这次让他做了个癌症风险预测，结果肺癌风险比普通人高，这下让他警醒了，开始主动戒烟了。</p>
              <p>——己秘用户   ZQ123</p>
            </div>
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
        id:"",
        price:"",
      }
    },
    mounted(){
      this.user = auth.getUserInfo();
      this.id = util.GetQueryString("id");

      if(!this.id){
        this.$router.push("/")
        return;
      }

      $(()=>{
        this.getGoodsInfo()
      });
    },
    methods:{
      getGoodsInfo(){
        var params = {
          "method": "goodsInfo",
          "userid": "",
          "token": "",
          "params": {
            "goodsId": this.id
          }
        };

        API.detectionGoods(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }
          this.price = re.result.price;
        });
      },
      toBuyPage(){
        if(!this.user){
          // alert("请先登录");
          this.$router.push("/login");
          return;
        }

        this.$router.push("/pay?id="+this.id);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .h1{ line-height: 1.08rem; text-align: center;}
  .h2{ line-height: .68rem; color: #27384D; font-size: .36rem; text-align: center;}
  .h3{ line-height: .56rem; color: #666666; font-size: .32rem; text-align: center;}

  .buybox{ padding: .74rem 0 .8rem; text-align: center;}
  .buybox .btn{ margin-top: .24rem; width: 5.8rem;}

  .state{ padding-top: .8rem;}
  .state .content{ margin-top: .4rem;}
  .state .content p{ color: #999999; line-height: .4rem; text-align: center;}
  .state .content .desc{ margin-top: .2rem;}
  .state .content .img{ margin-top: .3rem; padding: 0 .3rem;}
  .state .content .viewpoint{ margin-top: .76rem; padding: 0 .46rem;}
  .state .content .viewpoint dl{ float: left;}
  .state .content .viewpoint dl dt,.state .content .viewpoint dl dd{ float: left;}
  .state .content .viewpoint dl.error{ float: left; margin-right: .46rem; width: 2.44rem; color: #F25484;}
  .state .content .viewpoint dl.correct{ float: left; width: 2.88rem; color: #00BFBF;}
  .state .content .viewpoint dl dt img{ margin-top: .45rem; width: .34rem; height: .34rem;}
  .state .content .viewpoint dl dd{ padding-left: .22rem; line-height: .36rem; font-size: .24rem;}
  .state .content .viewpoint dl dd em{ font-size: .2rem;}
  .state .content .viewpoint dl.error dd{ width: 2.1rem;}
  .state .content .viewpoint dl.correct dd{ width: 2.54rem;}
  .state .content .tips{ margin-top: .4rem;}


  .forecast{ margin-top: .8rem;}
  .forecast .content{ padding: 0 .4rem; margin-top: .4rem;}
  .forecast table{ margin-top: .2rem; width: 100%; text-align: center; color: #999999;}

  .merit{ padding-top: .8rem;}
  .merit .content{ padding: 0 1.04rem;}
  .merit dl{ display: table; margin-top: .4rem;}
  .merit dl dt,.merit dl dd{ display: table-cell; vertical-align: middle; }
  .merit dl dt{ width: .64rem; color: #666666; font-size: .32rem;}
  .merit dl dd{ width: 4.78rem; padding-left: .4rem; color: #999999; font-size: .28rem;}

  .story{ padding: .8rem 0;}
  .story .content{ margin-top: .4rem;}
  .story .lang{ padding: .4rem .4rem .6rem; line-height: .44rem; color: #ffffff; background: #4FB1F7;}
  .story .lang:last-child{ margin-top: .2rem;}
  .story .lang p:last-child{ margin-top: .4rem;}
</style>

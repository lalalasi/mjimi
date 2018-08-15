<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="buybox">
        <h2 class="h1">儿童营养需求评估</h2>
        <div>
          <button class="btn" @click="toBuyPage"><span>&yen;{{price}}</span> 购买</button>
        </div>
      </div>

      <div class="imgbox">
        <img src="../assets/images/buy_yy_banner.png"/>
      </div>

      <div class="descbox">
        <div class="h2">儿童营养很关键</div>
        <div class="h3">儿童营养很关键</div>
        <p>儿童处在身体发育的关键时期，一旦营养供给不<br/>足，会对孩子的一生造成不可逆的影响。错过关<br/>键窗口期，将来想补，已来不及。</p>
        <div class="h3">营养过剩</div>
        <p>营养过剩将可能导致肥胖、龋齿、性早熟等症<br/>状，还可能对孩子心理造成消极影响。</p>
      </div>

      <div class="descbox">
        <div class="h2">这些方法你还在用吗？</div>
        <div class="h3">担心营养不足狂进补</div>
        <p>每天进食大量的营养品。然而盲目补充，不仅没<br/>能让孩子吸收，反而会因为营养过剩而影响孩子<br/>的生长发育。</p>
        <div class="h3">少食多餐，饮食清淡</div>
        <p>然而每次吃多少难以衡量，营养补充不全，导致<br/>孩子发育必需的营养素摄入不足，造成营养不<br/>良。</p>
      </div>

      <div class="scheme">
        <div class="h2">己秘——儿童营养需求评估<br/>为孩子定制精准营养方案？</div>
        <p class="h3">怎么补？补多少？基因说了算!</p>
        <div class="content">
          <table>
            <tr>
              <td style="width: 2.94rem;">矿物质营养需求</td>
              <td>钙铁锌硒</td>
            </tr>

            <tr>
              <td>维生素营养需求</td>
              <td>维生素A、B6、B9、B12、C、D、E</td>
            </tr>

            <tr>
              <td>不饱和脂肪酸营养需求</td>
              <td>DHA</td>
            </tr>

            <tr>
              <td>乳糖代谢能力</td>
              <td>乳糖</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="merit">
        <div class="h2">己秘——儿童营养需求评估<br/>三大特点</div>
        <div class="content">
          <dl class="clearfix">
            <dt>全面</dt>
            <dd>全面检测儿童生长发育所需的四大类营养素，十三种营养成分</dd>
          </dl>

          <dl class="clearfix">
            <dt>科学</dt>
            <dd>美国资深专家团队研发，根据大数据人群统计，精心设计挑选可靠检测位点</dd>
          </dl>

          <dl class="clearfix">
            <dt>精准</dt>
            <dd>依据检测结果，结合中国营养学会每日营养膳食摄入量（DRIs标准）精准指导儿童营养补充，从此告别盲目补充。</dd>
          </dl>
        </div>
      </div>

      <div class="story">
        <div class="container">
          <div class="h2">用户故事</div>
          <div class="content">
            <div class="lang">
              <p>孩子老是挑食，深怕他营养补充不均衡。带孩子做了营养需求评估，发现维生素A营养需求高，以后多吃些胡萝卜就行了，再也不用担心了。</p>
              <p>——己秘用户   duoduo2015</p>
            </div>

            <div class="lang">
              <p>孩子老是挑食，深怕他营养补充不均衡。带孩子做了营养需求评估，发现维生素A营养需求高，以后多吃些胡萝卜就行了，再也不用担心了。</p>
              <p>——己秘用户   duoduo2015</p>
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
          alert("请先登录");
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

  .descbox{ padding-top: .8rem; text-align: center;}
  .descbox .h3{ margin-top: .4rem;}
  .descbox p{ margin-top: .2rem; line-height: .56rem; color: #999999;}

  .scheme{ padding-top: .66rem;}
  .scheme .h3{ margin-top: .4rem;}
  .scheme .content{ margin-top: .28rem; padding: 0 .89rem;}
  .scheme table tr td{ padding: .12rem .27rem; font-size: .24rem; color: #999999; text-align: justify;}

  .merit{ padding-top: 1.02rem;}
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

<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="buybox">
        <h2 class="h1">精准美颜指导</h2>
        <div>
          <button class="btn" @click="toBuyPage"><span>&yen;{{price}}</span> 购买</button>
        </div>
      </div>

      <div class="imgbox">
        <img src="../assets/images/buy_my_banner.jpg"/>
      </div>

      <div class="slogan">
        <div class="h2">来自现代科技的冻龄美肤秘籍</div>
        <p>基因是人体最底层的设计图，决定了肤质最根本的特质</p>
        <div class="h2">从基因层面解决和防范肌肤问题<br/>一种<em>革命性</em>的美肤方式</div>
      </div>

      <div class="imgbox">
        <img src="../assets/images/buy_my_question.png"/>
      </div>

      <div class="question">
        <div class="container">
          <dl class="clearfix">
            <dt>38%</dt>
            <dd>的人群皮肤保湿能力弱，皮肤更易缺水出油</dd>
          </dl>

          <dl class="clearfix">
            <dt>60%</dt>
            <dd>的人群皮肤雀斑风险高，日晒下皮肤分泌更多黑色素</dd>
          </dl>

          <dl class="clearfix">
            <dt>69%</dt>
            <dd>的人群皮肤抗光老化能力弱，很难抵御紫外线，易出现皱纹、松弛等问题</dd>
          </dl>

          <dl class="clearfix">
            <dt>34%</dt>
            <dd>的人群皮肤抗氧化能力弱，易出现细纹、暗沉、色斑</dd>
          </dl>

          <dl class="clearfix">
            <dt>35%</dt>
            <dd>的人群皮肤排毒能力若，易受到污染物影响</dd>
          </dl>
        </div>
      </div>

      <div class="imgbox">
        <img src="../assets/images/buy_my_foot.png"/>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import Footer from '@/components/Footer';
  import API from '@/fetch/api';
  import u from '@/util/util';
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
      this.id = u.GetQueryString("id");

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
  .h2{ line-height: .56rem; color: #27384D; font-size: .36rem; text-align: center;}

  .buybox{ padding: .74rem 0 .8rem; text-align: center;}
  .buybox .btn{ margin-top: .24rem; width: 5.8rem;}

  .slogan{ padding: 1.08rem 0 .8rem;}
  .slogan p{ margin-top: .2rem; line-height: .4rem; color: #999999; font-size: .28rem; text-align: center;}
  .slogan .h2:last-child{ margin-top: .8rem;}
  .slogan .h2 em{ color: #4fb1f7;}

  .question{ padding: .8rem .48rem .5rem;}
  .question dl{ margin-bottom: .6rem; color: #999999;}
  .question dl dt{ float: left; width: 1.22rem; font-size: .56rem;}
  .question dl dd{ float: left; padding-left: .2rem; width: 4.52rem; font-size: .28rem;}
</style>

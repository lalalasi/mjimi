<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="buybox">
        <h2 class="h1">精准减肥指导</h2>
        <div>
          <button class="btn" @click="toBuyPage"><span>&yen;{{price}}</span> 购买</button>
        </div>
      </div>

      <div class="imgbox">
        <img src="../assets/images/buy_jf_banner.png"/>
      </div>

      <div class="question">
        <div class="container">
          <div class="h2">精准减肥很关键</div>
          <div class="h3">基因是人体最底层的设计图，<br/>决定了肤质最根本的特质</div>

          <div class="content">
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
      </div>

      <div class="slogan">
        <div class="h2">揭开基因秘密，找到属于自己的纤体<br/>瘦身秘诀，不要人云亦云更不可盲<br/>从，适合自己的才是最有效的</div>
        <div class="h2">揪出易胖因素<br/>轻松享瘦 如何吃不容易胖<br/>私人订制 一生的瘦身秘诀</div>
      </div>

      <div class="imgbox">
        <img src="../assets/images/buy_jf_foot.png"/>
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

  .question{ margin-top: .8rem;}
  .question .h3{ margin-top: .4rem;}
  .question .content{ margin-top: .4rem; padding: 0 .48rem;}
  .question dl{ margin-bottom: .6rem; color: #999999;}
  .question dl dt{ float: left; width: 1.22rem; font-size: .56rem;}
  .question dl dd{ float: left; padding-left: .2rem; width: 4.52rem; font-size: .28rem;}

  .slogan{ padding-bottom: .8rem;}
  .slogan .h2{ margin-top: .8rem;}
</style>

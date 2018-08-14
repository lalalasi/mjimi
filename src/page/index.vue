<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="banner">
        <div class="container">
          <h2>揭开基因秘密<br/>更好了解自己</h2>
          <p>通过基因检测，我们将帮助你为你的健康、你的家人、你的未来做出更明智的选择。</p>
        </div>
      </div>

      <div class="goods box">
        <div class="container">
          <h3 class="box-h xline"><span>我们可以为您提供</span></h3>
          <div class="box-c">
            <ul>
              <li v-for="item in goodsList">
                <img :src="item.phoneImageUrl" v-on:click="toGoodsDetailPage(item.id)"/>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="container">
          <h3 class="box-h xline"><span>来自用户的声音</span></h3>

          <div class="box-c">
            <div class="swiper ">
              <div class="users slider">
                <div class="item-list clearfix">
                  <div class="item">
                    <div class="detail">
                      <div class="inner">
                        <p class="talk">“这是我有生以来最好的生日礼物”</p>
                        <p class="talk">我女儿为我的生日带来了己秘基因测试。因为我从未做过这样的事情，她认为我可能会喜欢。这是我有生以来最好的生日礼物！这件事很简单，只需吐唾沫就行，我甚至不相信我能从我的DNA中了解到如此多的东西。我真的想再做一次测试，但不要以为我可以等到我的下一个生日。真的很好玩。谢谢。</p>
                        <!--<p><small>Jade</small></p>-->
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="detail">
                      <div class="inner">
                        <p class="talk">“我已经向两位朋友推荐了己秘基因检测”</p>
                        <p class="talk">我对己秘基因检测非常印象深刻。我最喜欢的是我不必去某个地方去取血，我所要做的仅仅是吐唾沫，并将样本邮寄到实验室。获取更新电子邮件非常棒，所以我一直都知道我测试的每一步的状态。我已经向两个朋友推荐了这个。谢谢你的一切。</p>
                        <!--<p><small>Simone</small></p>-->
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="detail">
                      <div class="inner">
                        <p class="talk">“我已经计划再做一次其他项目的检测”</p>
                        <p class="talk">在我做了第一次测试之后，我被迷住了。我已经计划再做一次测试！整个过程从头到尾都非常简单：拭子，邮件，查看结果。唯一难的就是等待结果期间，因为我非常兴奋！但是报告按时发布，结果很明显。我发现了一些关于自己的新东西，已经知道的一些事情也得到了证实。 DNA真的令人惊诧。就像我说的，我迷上了！</p>
                        <!--<p><small>Liz</small></p>-->
                      </div>
                    </div>
                  </div>
                  <div class="item" >
                    <div class="detail">
                      <div class="inner">
                        <p class="talk">“该套件非常简单地解释了一切”</p>
                        <p class="talk">购买的东西实际上超出预期的情况并不经常发生，但己秘的测试确实比我预期的要好。该工具包很简单地解释了一切，并告诉我需要多长时间才能获得结果。然后结果是准时的。报告比我想象的要详细得多，这是一个令人惊喜的惊喜。既然是DNA，我认为它会有点复杂，但事实并非如此。</p>
                        <!--<p><small>Joe</small></p>-->
                      </div>
                    </div>
                  </div>
                </div>
                <div class="control">
                  <div class="dot-list">
                    <ul class="clearfix">
                      <li class="dot active">
                        <div class="avatar">
                          <img src="../assets/images/silder-1.png" alt="">
                        </div>
                        <div class="name">Jade</div>
                      </li>
                      <li class="dot">
                        <div class="avatar">
                          <img src="../assets/images/silder-2.png" alt="">
                        </div>
                        <div class="name">Simone</div>
                      </li>
                      <li class="dot">
                        <div class="avatar">
                          <img src="../assets/images/silder-3.png" alt="">
                        </div>
                        <div class="name">Liz</div>
                      </li>
                      <li class="dot">
                        <div class="avatar">
                          <img src="../assets/images/silder-4.png" alt="">
                        </div>
                        <div class="name">Joe</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="box process">
        <div class="container">
          <h3 class="box-h xline"><span>轻松3步即可揭开基因秘密</span></h3>

          <div class="box-c">
            <div>
              <dl class="clearfix">
                <dt><i class="iconfont icon-gouwuche"></i></dt>
                <dd>
                  <h4>1. 注册并绑定唾液采集器</h4>
                  <div>
                    <p>在己秘官网或者微信公众号平台购买检测服务，购买后2个工作日内快递发出采样盒。</p>
                  </div>
                </dd>
              </dl>

              <dl class="clearfix">
                <dt><i class="iconfont icon-caijibangding"></i></dt>
                <dd>
                  <h4>2. 采集唾液并寄回样本</h4>
                  <div>
                    <p>收到采样盒后，绑定采集器上的编码，然后严格按照说明书完成唾液样本采集，然后将采集完成的样本，邮寄到己秘样本检测中心。</p>
                  </div>
                </dd>
              </dl>

              <dl class="clearfix">
                <dt><i class="iconfont icon-chakanjieguo"></i></dt>
                <dd>
                  <h4>3. 查看报告</h4>
                  <div>
                    <p>己秘实验室收到样本20个工作日后，您可以登录己秘官网或者微信查看检测结果内容。</p>
                  </div>
                </dd>
              </dl>
            </div>
            <div class="more">
              <router-link tag="a" to="flow" class="btn">了解更多</router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="box questions">
        <div class="container">
          <h3 class="box-h xline"><span>你可能还想知道</span></h3>

          <div class="box-c">
            <ul>
              <li>
                <h4 @click="onOpen(1)"><a href="javascript:;">什么是己秘？</a><i class="iconfont icon-xiangshang r" v-if="open==1"></i><i class="iconfont icon-xiangxia r" v-if="open!=1"></i></h4>
                <div v-show="open == 1">
                  <p>己秘旨在通过基因检测，让您更了解自己的身体特征，从而帮助指导健康生活。目前主要产品有精准减肥指导、精准护指导、儿童营养需求评估、患病风险预测等。揭开基因秘密，更好了解自己。未来已来！在这个风起云涌，激动人心的时代里己秘将与您一路同行，伴您一生健康!</p>
                </div>
              </li>

              <li>
                <h4 @click="onOpen(2)"><a href="javascript:;">检测准确性如何？</a><i class="iconfont icon-xiangshang r" v-if="open==2"></i><i class="iconfont icon-xiangxia r" v-if="open!=2"></i></h4>
                <div v-show="open == 2">
                  <p>所有的检测结果会经过我们严格的质控程序，我们能够保证超过 99% 的准确率，以保证您获得的原始数据的准确性。</p>
                  <p>在报告解读层面，我们报告中的项目均根据科研文献的结论得出。但是基因只是影响性状的一部分因素，其他可能的因素包括生活环境和生活方式等。结果会随着科研的进展不断优化。</p>
                </div>
              </li>

              <li>
                <h4 @click="onOpen(3)"><a href="javascript:;">如何保障我的隐私？</a><i class="iconfont icon-xiangshang r" v-if="open==3"></i><i class="iconfont icon-xiangxia r" v-if="open!=3"></i></h4>
                <div v-show="open == 3">
                  <p>己秘承诺除非得到用户授权或依据国家法律要求，己秘不会向任何人或组织转移与用户身份信息直接关联的的样品、样品衍生物和遗传信息。</p>
                  <p>在剥离个人信息的前提下，己秘将对包括您的数据在内的整个用户数据库进行分析，从而推进科学研究。</p>
                </div>
              </li>
            </ul>

            <div class="more">
              <router-link class="btn" tag="a" to="question">了解更多</router-link>
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
import auth from '@/util/auth';
import util from '@/util/util';

export default {
  components:{
    Header,
    Footer
  },
  data () {
    return {
      goodsList:[],
      open:0
    }
  },
  mounted(){
    let openId = util.GetQueryString("openId");
    if(openId){
      sessionStorage.setItem("openId",openId)
    }

    $(()=>{
      this.getGoodesList();
    });

    //初始化 swiper
    $(function () {
      const userSlider = new Slider({
        slider: $('.users'),
        duration: 8000,
        height: "5.94rem"
      });
      userSlider.init();
    });
  },
  methods:{
    onOpen(o){
      if(this.open == o){
        this.open = 0;
        return;
      }
      this.open = o;
    },
    getGoodesList(){
      let params = {
        "method": "goodsList",
        "userid": "",
        "token": "",
        "params": {}
      }

      API.detectionGoods(params).then((re) => {
        if (re.status.code !== 200) {
          alert(re.status.message)
          return;
        }

        this.goodsList = re.result;
      });
    },
    toGoodsDetailPage(goodsId){
      if(goodsId==1){
        this.$router.push('/buyMeiyan?id='+goodsId);
      }else if(goodsId==2){
        this.$router.push('/buyManbing?id='+goodsId);
      }else if(goodsId==3){
        this.$router.push('/buyYingyang?id='+goodsId);
      }else if(goodsId==4){
        this.$router.push('/buyAibing?id='+goodsId);
      }else{
        this.$router.push('/buyJianfei?id='+goodsId);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{}

  .box{ padding-top: .8rem;}
  .box-h{ position: relative; font-size: .36rem; color: #27384D; text-align: center;}
  .box-c{ padding-top: .6rem;}
  .more{ text-align: center;}
  .more .btn{ display: inline-block; padding: .15rem 0; width: 4.8rem; font-size: .32rem; color: #ffffff; text-align: center; background: #4FB1F7; box-shadow: 0 0 2px 0 rgba(79,177,247,0.50); border-radius: 100px;}



  .banner{ padding: .86rem .68rem; text-align: center; background: #718398;}
  .banner h2{ margin: 0 auto; width: 4.54rem; height: 1.92rem; line-height: .96rem; color: #ffffff; font-size: .56rem; font-weight: lighter;}
  .banner p{ margin-top: .34rem; color: #FFFFFF; font-size: .28rem; font-weight: 100;}
  .banner{ background: #718398;}
  .banner{ background: #718398;}

  .process dl{ margin-bottom: .8rem;}
  .process dl dt{ float: left; width: 1.52rem; text-align: right;}
  .process dl dt i{ display: inline-block; padding: .1rem .2rem; font-size: .4rem; color: #718398; border: 2px solid #B8C1CB; border-radius: 50%;}
  .process dl dd{ float: left; padding-left: .42rem; width: 3.82rem;}
  .process dl dd h4{ margin-bottom: .12rem; font-size: .28rem; color: #27384D; font-weight: 600;}
  .process dl dd p{ font-size: .24rem; color: #999999;}

  .questions ul li{ padding-bottom: .1rem;}
  .questions ul li h4{ padding: .1rem 0;}
  .questions ul li h4 a{ font-size: .32rem; color: #4FB1F7;}
  .questions ul li h4 i{ font-size: .4rem; color: #cccccc;}
  .questions ul li div{ margin-top: .1rem; padding: .2rem; color: #999999; background: #F5F5F5;}
  .questions .more{ padding: .8rem 0;}


</style>

<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="empty" v-if="!sampleList.length">
        <div class="container">
          <img src="../assets/images/empty_order.png"/>
          <p>暂无报告</p>
        </div>
      </div>

      <div class="list" v-if="sampleList.length">
        <div class="order" v-for="good in sampleList">
          <div class="title"><i :class="{red:good.goodsId==1,blue:good.goodsId==2||good.goodsId==4,green:good.goodsId==3,yellow:good.goodsId==5}"></i>{{good.goodsName}}</div>
          <div class="content">
            <div class="item" v-for="sample in good.sampleList">
              <div class="goods clearfix">
                <div class="img">
                  <img :src="good.goodsImageUrl"/>
                </div>
                <div class="info">
                  <div class="name">{{sample.name}}</div>
                  <div class="gender">{{sample.sex|gender}}</div>
                  <div class="birthday">{{sample.birthday|formatDate}}</div>
                  <div class="nation">{{sample.nation}}</div>
                </div>
                <div class="status fblue">
                  <a href="javascript:;" class="blue" v-if="sample.status != 3">{{sample.status|sampleType}}</a>
                  <router-link class="red" tag="a" :to="'/reportDetails?id='+sample.id" v-if="sample.status == 3">{{sample.status|sampleType}}</router-link>
                </div>
              </div>

              <div class="bread">
                <span class="no">套件码:{{sample.sampleCode}}</span>
                <span class="date r">绑定日期:{{sample.createTime|formatDate}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Header from '@/components/Header';
  import API from '@/fetch/api';
  import auth from '@/util/auth';

  export default {
    components:{
      Header
    },
    data () {
      return {
        user:"",
        sampleList:[]
      }
    },
    mounted(){
      this.user = auth.getUserInfo();
      if(!this.user){
        this.$router.push("/")
        return;
      }

      this.getReportList();
    },
    methods:{
      getReportList(){
        var params = {
          "method": "userSampleList",
          "userid": this.user.id,
          "token": this.user.token,
          "params": {}
        };

        API.userSample(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }

          this.sampleList = re.result;
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{ height: 100%;}
  .empty{ padding: 1.8rem .74rem 0 .76rem;}
  .empty p{ margin-top: .64rem; font-size: .32rem; color: #27384D; text-align: center;}
  .empty .btn{ margin-top: 60px;}

  .list{ padding-top: .12rem; min-height: 100%; background: #f4f7f9;}
  .order{ margin-top: .2rem; padding: 0 .32rem; background: #ffffff;}
  .order .title{ padding: .2rem 0; font-size: .28rem; color: #333333;}
  .order .title i{ display: inline-block; margin-top: -.03rem; margin-right: .14rem; width: .26rem; height: .26rem; vertical-align: middle; }
  .order .item{ padding: .2rem 0; border-bottom: 1px solid #D9D9D9;}
  .order .item:last-child{ margin-bottom: 0; border-bottom: 0px solid #D9D9D9;}
  .order .item .goods{ font-size: .24rem; color: #666666;}
  .order .item .goods>div{ float: left; height: 1.54rem;}
  .order .item .goods .img{ overflow: hidden; width: 2.31rem;}
  .order .item .goods .info{ padding-left: .22rem; width: 2.86rem;}
  .order .item .goods .info>{ font-size: .24rem; color: #666666;}
  .order .item .goods .status{ width: 1.68rem; line-height: 1.54rem; text-align: right; font-size: .32rem;}
  .order .item .bread{ margin-top: .2rem; line-height: .4rem; font-size: .24rem; color: #666666;}

  i.red{ background: #F25484;}
  i.blue{ background: #4FB1F7;}
  i.green{ background: #00BFBF;}
  i.yellow{ background: #FB8D56;}

  a.red{ color: #F25484;}
  a.blue{ color: #8EDEE0;}
</style>

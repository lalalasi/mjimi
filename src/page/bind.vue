<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="empty" v-if="!orderList.length">
        <div class="container">
          <img src="../assets/images/empty_order.png"/>
          <p>暂无订单</p>
          <div><router-link class="btn btn-block" tag="a" to="/">前往购买</router-link></div>
        </div>
      </div>

      <div class="list">
        <div class="order" v-for="goods in orderList">
          <div class="title"><i :class="{red:goods.goodsId==1,blue:goods.goodsId==2||goods.goodsId==4,green:goods.goodsId==3,yellow:goods.goodsId==5}"></i>{{goods.goodsName}}</div>
          <div class="content">
            <div class="goods clearfix" v-for="item in goods.orderList">
              <div class="img">
                <img :src="goods.goodsImageUrl"/>
              </div>
              <div class="info">
                <div class="name">收货人：{{item.name}}</div>
                <div class="phone">联系方式：{{item.phone}}</div>
                <div class="date">{{item.createTime|formatDateCN}}</div>
              </div>
              <div class="operation">
                <span v-if="item.isSmple == 1">已绑定</span>
                <router-link tag="a" :to="'bindStep?id='+item.id" class="btn" v-if="item.isSmple == 0">绑定样本</router-link>
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
        orderList:[]
      }
    },
    mounted(){
      this.user = auth.getUserInfo();
      if(!this.user){
        this.$router.push("/")
        return;
      }

      this.getOrderList();
    },
    methods:{
      getOrderList(){
        var params = {
          "method": "getNoSamoleOrder",
          "userid": this.user.id,
          "token": this.user.token,
          "params": {}
        };

        API.userSample(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }

          this.orderList = re.result;
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{ padding: .3rem 0 .4rem;}
  .empty{ padding: 1.8rem .74rem 0 .76rem;}
  .empty p{ margin-top: .64rem; font-size: .32rem; color: #27384D; text-align: center;}
  .empty .btn{ margin-top: 60px;}

  .order{ margin-bottom: .2rem; background: #FFFFFF;}
  .order .title{ padding: .2rem .32rem 0;}
  .order .title i{ display: inline-block; margin-right: .14rem; width: .26rem; height: .26rem; vertical-align: middle;}
  .order .title i.red{ background: #F25484;}
  .order .title i.blue{ background: #4FB1F7;}
  .order .title i.green{ background: #00BFBF;}
  .order .title i.yellow{ background: #FB8D56;}
  .order .goods{ padding: .2rem .32rem; background: #FAFAFA;}
  .order .goods>div{ float: left; height: 1.54rem;}
  .order .goods .img{ width: 2.32rem; overflow: hidden;}
  .order .goods .info{ padding: .22rem 0 .22rem .22rem; width: 3.1rem; font-size: .24rem; color: #666666;}
  .order .goods .info .date{ margin-top: .1rem; font-size: .22rem; color: #999999;}
  .order .goods .operation{ width: 1.44rem;}
  .order .goods .operation .btn{ margin-top: .47rem; padding: .115rem 0; width: 1.42rem; font-size: .28rem; border-radius: .08rem;}
  .order .goods .operation span{ display: block; margin-top: .6rem; color: #4FB1F7; text-align: center;}
</style>

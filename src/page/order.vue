<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="empty" v-if="!orderList.length">
        <div class="container">
          <img src="../assets/images/empty_order.png"/>
          <p>暂无订单</p>
          <div><a href="javascript:;" class="btn btn-block">前往购买</a></div>
        </div>
      </div>

      <div class="list" v-if="orderList.length">
        <div class="order" v-for="goods in orderList">
          <div class="title"><span>{{goods.goodsName}}</span></div>
          <div class="content">
            <div class="item" v-for="item in goods.orderList">
              <div class="goods clearfix" @click="onShwo(item)">
                <div class="img">
                  <img :src="goods.goodsImageUrl"/>
                </div>
                <div class="info">
                  <div class="name">收货人：{{item.name}}</div>
                  <div class="buyer">联系方式：{{item.phone}}</div>
                  <div class="mobile">{{item.createTime|formatDateCN}}</div>
                </div>
                <div class="amount">
                  <span>x{{item.num}}</span>
                </div>
              </div>

              <div class="bread" v-if="item.active">
                <div class="addr">收货地址：{{item.province+item.city+item.county}}</div>
                <div class="no">订单编号：{{item.orderCode}}</div>
                <div class="ticket">发票信息：{{item.billType?item.billNum:"无"}}</div>
              </div>
            </div>
          </div>
          <div class="total">
            <span>合计：&yen;{{goods.price}}</span>
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
      console.log(!this.user)
      // if(!this.user){
      //   this.$router.push("/")
      //   return;
      // }

      $(()=>{
        this.getOrderList();
      });
    },
    methods:{
      onShwo(item){
        if(item.active){
          item.active = 0;
          return;
        }
        item.active = 1;
      },
      getOrderList(){
        var params = {
          "method": "userOrderList",
          "userid": this.user.id,
          "token": this.user.token,
          "params": {}
        };

        API.userOrder(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }

          re.result.forEach((order)=>{
            let totle = 0;
            order.orderList.forEach((item)=>{
              item.active = 0;

              console.log(0.01*1)
              console.log(0.01+0.09)

              totle = item.price + totle;
            });

            order.price = totle;
          });

          this.orderList = re.result;
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
  .order{ margin-top: .2rem; padding: .2rem .32rem; background: #ffffff;}
  .order .title{ padding-bottom: .08rem; font-size: .22rem; color: #999999;}
  .order .item{ margin-bottom: .2rem; padding-bottom: .2rem; border-bottom: 1px solid #D9D9D9;}
  .order .item:last-child{ margin-bottom: 0; border-bottom: 0px solid #D9D9D9;}
  .order .item .goods{ font-size: .24rem; color: #666666; background: #FAFAFA;}
  .order .item .goods>div{ float: left; height: 1.54rem;}
  .order .item .goods .img{ overflow: hidden; width: 2.31rem;}
  .order .item .goods .info{ padding-left: .22rem; width: 4.03rem;}
  .order .item .goods .info .name{ margin-top: .14rem; font-size: .28rem; color: #333333;}
  .order .item .goods .info .buyer{ margin-top: .18rem; font-size: .24rem;}
  .order .item .goods .info .mobile{ font-size: .24rem;}
  .order .item .goods .amount{ padding-top: .18rem; width: .26rem;}
  .order .item .bread{ margin-top: .08rem; padding: .2rem; font-size: .22rem; color: #999999; background: #EDEFF1;}
  .order .total{ text-align: right; font-size: .22rem; color: #999999;}
</style>

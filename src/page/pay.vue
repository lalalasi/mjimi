<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="box">
        <div class="goods clearfix">
          <div class="img">
            <img :src="goods.goodsImageUrl"/>
          </div>
          <div class="info">
            <div class="name">{{goods.name}}</div>
            <div class="price">单价:  ¥{{goods.price}}</div>
            <div class="num clearfix">
              购买数量:
              <div class="amount-wrap r">
                <span class="reduce" @click="onReduce">-</span>
                <input type="text" maxlength="4" v-model="form.goodsNum" disabled/>
                <span class="increase" @click="onIncrease">+</span>
              </div>
            </div>
          </div>
        </div>

        <div class="buyer">
          <div class="h1">收货信息</div>
          <div class="content">
            <dl class="clearfix">
              <dt>收货人：</dt>
              <dd><input type="text" placeholder="收货人姓名" v-model="form.name" maxlength="20"/></dd>
            </dl>

            <dl  class="clearfix">
              <dt>联系方式：</dt>
              <dd><input type="text" placeholder="收货人的电话，方便联系" v-model="form.phone" maxlength="11"/></dd>
            </dl>

            <dl class="clearfix">
              <dt>所在地区：</dt>
              <dd>
                <select v-model="form.provinceId" @change="onProvinceChange(form.provinceId)" style="width:1.72rem;">
                  <option value="">请选择</option>
                  <option v-for="item in provinceList" :value="item.id" :key="item.id">{{item.name}}</option>
                </select>

                <select v-model="form.cityId" @change="onCityChange(form.cityId)" style="width:1.72rem;">
                  <option value="">请选择</option>
                  <option v-for="item in cityList" :value="item.id" :key="item.id">{{item.name}}</option>
                </select>

                <select v-model="form.countyId" style="width:1.72rem;">
                  <option value="">请选择</option>
                  <option v-for="item in countyList" :value="item.id" :key="item.id">{{item.name}}</option>
                </select>

                <!--<Select v-model="form.provinceId" @on-change="onProvinceChange" style="width:1.72rem;">-->
                  <!--<Option v-for="item in provinceList" :value="item.id" :key="item.id">{{item.name}}</Option>-->
                <!--</Select>-->

                <!--<Select v-model="form.cityId" @on-change="onCityChange" style="width:1.72rem;">-->
                  <!--<Option v-for="item in cityList" :value="item.id" :key="item.id">{{item.name}}</Option>-->
                <!--</Select>-->

                <!--<Select v-model="form.countyId" style="width:1.72rem;">-->
                  <!--<Option v-for="item in countyList" :value="item.id" :key="item.id">{{item.name}}</Option>-->
                <!--</Select>-->
              </dd>
            </dl>

            <dl  class="clearfix">
              <dt>详细地址：</dt>
              <dd><input type="text" placeholder="街道、门牌等详细地址信息" v-model="form.address" maxlength="30"/></dd>
            </dl>
          </div>
        </div>

        <div class="payinfo">
          <div class="h1">支付信息</div>
          <div class="content">
            <dl class="clearfix pay-type">
              <dt>支付方式：</dt>
              <dd>
                <span class="wechat">
                  <img src="../assets/images/wechat2.png"/>
                </span>
              </dd>
            </dl>

            <dl class="clearfix">
              <dt>需要发票：</dt>
              <dd>
                <div class="radio-wraper">
                  <label>
                    <input type="radio" name="ticket" value="0" v-model="form.billType"/>
                    <i><img src="../assets/images/radio1.png"><img src="../assets/images/radio2.png"></i>
                    不需要
                  </label>
                  <label>
                    <input type="radio" name="ticket" value="1" v-model="form.billType"/>
                    <i><img src="../assets/images/radio1.png"><img src="../assets/images/radio2.png"></i>
                    个人
                  </label>
                  <label>
                    <input type="radio" name="ticket" value="2" v-model="form.billType"/>
                    <i><img src="../assets/images/radio1.png"><img src="../assets/images/radio2.png"></i>
                    公司
                  </label>
                </div>
                <div class="tips">购买后您如需补开发票，可在付款后 60天内至 <em>订单页面</em> 进行查询和申请</div>
              </dd>
            </dl>

            <dl class="clearfix" v-if="form.billType == 2">
              <dt>发票抬头：</dt>
              <dd><input type="text" placeholder="发票抬头" v-model="form.billTitle"/></dd>
            </dl>

            <dl class="clearfix" v-if="form.billType == 2">
              <dt>纳税编号：</dt>
              <dd>
                <input type="text" placeholder="纳税人编号" v-model="form.billNum"/>
                <div class="tips">根据《国家税务总局公告2017年第16号》规定，自2017年7月1日起，购买方为企业的，索取增值税普通发票时，应向销售方提供纳税人识别号或统一社会信用代码，不符合规定的发票不得作为税收凭证</div>
              </dd>
            </dl>

            <dl class="clearfix" v-if="form.billType != 0">
              <dt>备注：</dt>
              <dd><input type="text" v-model="form.remark"/></dd>
            </dl>
          </div>
        </div>

        <div class="submit">
          <div>
            <span class="payment l">应付：¥{{total}}</span>
            <!--<a href="javascript:;" class="btn">提交订单</a>-->
            <button class="btn" @click="onSubmit">提交订单</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import Footer from '@/components/Footer';
  import API from '@/fetch/api';
  import util from '@/util/util';
  import auth from '@/util/auth';
  import reg from '@/util/reg';

  export default {
    components:{
      Header,
      Footer
    },
    data () {
      return {
        user:"",
        id:"",
        goods:"",
        form:{
          name:"",
          phone:"",
          goodsId: "",
          goodsNum: 1,
          provinceId:"",
          cityId:"",
          countyId:"",
          address:"",
          payType:1, //0支付宝 1微信
          billType:0, //0不需要 1个人 2公司
          billTitle:"",
          billNum:"",
          remark:""
        },
        provinceList:[],
        cityList:[],
        countyList:[],
        total:0
      }
    },
    mounted(){
      this.user = auth.getUserInfo();
      this.id = util.GetQueryString("id");
      this.form.goodsId = this.id;

      if(!this.id || !this.user){
        this.$router.push("/");
        return;
      }

      $(()=>{
        this.getGoodsInfo();
        this.getProvince();
      });
    },
    methods:{
      isWeiXin(){
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
          return true;
        }else{
          return false;
        }
      },
      toPayWeixin(orderCode,openId){
        var params = {
          "method": "toWXGZGHtmlPage",
          "userid": this.user.id,
          "token": this.user.token,
          "params": {
            "orderCode": orderCode,
            "openId": openId
          }
        };

        API.userOrder(params).then((re) => {
          console.log(re.status.code !== 200)
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }

          WeixinJSBridge.invoke(
            'getBrandWCPayRequest', {
              "appId": re.result.appId,     //公众号名称，由商户传入
              "timeStamp": re.result.timeStamp,         //时间戳，自1970年以来的秒数
              "nonceStr": re.result.nonceStr, //随机串
              "package": re.result.package,
              "signType": re.result.signType,         //微信签名方式：
              "paySign": re.result.paySign //微信签名
            },
            (res)=>{
              // alert(JSON.stringify(res));
              if(res.err_msg == "get_brand_wcpay_request:ok" ){
                // 使用以上方式判断前端返回,微信团队郑重提示：
                //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。

                this.$router.push("/payResult?orderCode="+orderCode);
              }
            });
        });
      },
      toPayHthml(orderCode){
        var params = {
          "method": "toWechatHtmlPage",
          "userid": this.user.id,
          "token": this.user.token,
          "params": {
            "orderCode": orderCode
          }
        };

        API.userOrder(params).then((re) => {
          console.log(re.status.code !== 200)
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }

          location.href = re.result.url;
        });
      },
      onSubmit(){
        if(!this.form.name){
          alert("请输入收货人");
          return;
        }
        if(!this.form.phone){
          alert("请输入手机号");
          return;
        }
        if(!reg.phone.test(this.form.phone)){
          alert("请输入正确的手机号");
          return;
        }
        if(!this.form.provinceId || !this.form.countyId || !this.form.cityId){
          alert("请选择省/市/区");
          return;
        }
        if(!this.form.address){
          alert("请输入详细地址");
          return;
        }
        if(this.form.billType == 2){
          if(!this.form.billTitle){
            alert("请输入发票抬头");
            return;
          }
          if(!this.form.billNum){
            alert("请输入发票编号");
            return;
          }
          if(!reg.number.test(this.form.billNum)){
            alert("请输入正确的发票编号");
            return;
          }
        }

        var params = {
          "method": "addUserOrder",
          "userid": this.user.id,
          "token": this.user.token,
          "params": this.form
        };

        API.userOrder(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }


          if(this.isWeiXin()){
            let openId = sessionStorage.getItem("openId");
            this.toPayWeixin(re.result.orderCode,openId);
          }else {
            this.toPayHthml(re.result.orderCode);
          }
        });
      },
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

          this.goods = re.result;
          this.total = re.result.price;
        });
      },
      getTotalPrice(){
        this.total = (this.goods.price*this.form.goodsNum).toFixed(2);
      },
      onReduce(){
        --this.form.goodsNum;
        if(this.form.goodsNum<1){
          this.form.goodsNum = 1;
        }
        this.getTotalPrice();
      },
      onIncrease(){
        ++this.form.goodsNum;
        if(this.form.goodsNum > 9999){
          return;
        }
        this.getTotalPrice();
      },
      onProvinceChange(v){
        this.form.cityId = "";
        this.form.countyId = "";
        this.getCity(v);
      },
      onCityChange(v){
        this.form.countyId = "";
        this.getCounty(v);
      },
      getProvince(){
        let json = {
          method:"provinceList"
        }
        this.areaHttp(json,(re)=>{
          this.provinceList = re;
        });
      },
      getCity(id){
        let json = {
          method:"cityList",
          params:{
            provinceId: id
          }
        }
        this.areaHttp(json,(re)=>{
          this.cityList = re;
        });
      },
      getCounty(id){
        let json = {
          method:"countyList",
          params:{
            cityId: id
          }
        }
        this.areaHttp(json,(re)=>{
          this.countyList = re;
        });
      },
      areaHttp(json,cb){
        var params = {
          "method": json.method,
          "userid": "",
          "token": "",
          "params": json.params
        };

        API.area(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }

          cb(re.result);
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
  dl dt{ float: left; padding: .15rem 0; width: 1.48rem; text-align: right;}
  dl dd{ float: left; width: 5.38rem;}
  dl dd input{ width: 100%;}
  dl dd .tips{ margin-top: .32rem; font-size: .24rem; color: #999999;}
  dl dd .tips em{ color: #4FB1F7;}

  .goods{ padding: .4rem .32rem;}
  .goods>div{ float: left; height: 1.92rem;}
  .goods .img{ width: 1.92rem; background: black;}
  .goods .info{ padding-left: .32rem; width: 4.86rem;}
  .goods .info .name{ font-size: .32rem; color: #333333;}
  .goods .info .price{ margin-top: .14rem; font-size: .28rem; color: #4FB1F7;}
  .goods .info .num{ margin-top: .26rem; line-height: .62rem; font-size: .28rem; color: #666666;}
  .goods .info .num .amount-wrap{ font-size: 0;}
  .goods .info .num .amount-wrap span{ display: inline-block; width: .62rem; height: .62rem; line-height: .6rem; font-size: .48rem; text-align: center; vertical-align: top; background: #F5F5F5; border: 1px solid #E6E6E6;}
  .goods .info .num .amount-wrap input{ padding: .09rem; width: .9rem; line-height: .42rem; text-align: center; border-radius: 0; border-left: 0; border-right: 0;}
  .goods .info .num .amount-wrap input:focus{ border-top: 1px solid #E6E6E6; border-bottom: 1px solid #E6E6E6;}
  .buyer{ padding: .4rem .32rem;}
  .payinfo{ padding: .4rem .32rem;}
  .payinfo .radio-wraper{ padding: .15rem 0 0;}
  .payinfo .radio-wraper label{ margin-right: .4rem;}
  .payinfo .pay-type .wechat{ display: inline-block; width: 2.24rem; height: 1rem;}
  .submit{ padding: .32rem .4rem .32rem .58rem; text-align: right;}
  .submit .payment{ margin-top: .24rem; font-size: .32rem; color: #FB8D56;}
  .submit .btn{ padding: .19rem 0; width: 3.08rem; font-size: .36rem;}
</style>

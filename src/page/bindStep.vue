<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">

      <div class="stepbox step1" v-if="currPage == 0">
        <div class="stepBar">
          <StepBar on="0"></StepBar>
        </div>

        <div class="content">
          <div class="form">
            <p class="label">输入套件码 (<em>套件码卫浴采集管上，位置如下图所示</em>)：</p>
            <p class="number"><input type="text" v-model="form.sampleCode"/></p>
            <p class="img"><img src="../assets/images/taojian.png"/></p>
          </div>
          <div class="opera"><button class="btn" @click="next1()">下一步</button></div>
        </div>
      </div>

      <div class="stepbox step2" v-if="currPage == 1">
        <div class="stepBar">
          <StepBar on="1"></StepBar>
        </div>

        <div class="content">
          <div class="agree">
            <h3>己秘基因检测服务协议</h3>
            <p>尊敬的先生/女士：</p>
            <p>欢迎您使用己秘基因检测服务，为了保证您在充分知情的情况下参加本次检测，请仔细阅读本协议。参加本次检测项目完全是自愿行为，如果您决定参加本检测项目，视为您已完全阅读、了解并同意本协议所述内容。请您遵守相关条款规定，与己秘一起完成本次项目的合作。如果您未满18周岁，请在法定监护人的陪同下阅读本协议。</p>
            <p>一、协议范围</p>
            <p>本协议由用户与己秘共同缔结，“用户”是指使用己秘相关服务的使用人，在本协议中更多地称为“您”。</p>
            <p>二、用户信息</p>
            <p>在使用本服务时，您应当按表格的提示准确完整地提供您的信息，包括您的姓名、联系电话、联系地址、调查问卷等，以便服务过程中与您联系。您了解并同意，您有义务保持您提供信息的真实性及有效性，并承担由此引发的因信息错误导致无法有效联络的责任。</p>
            <p>三、隐私政策</p>
            <p>1 个人数据的保密</p>
            <p>己秘承诺除非得到用户授权或依据国家法律要求，己秘不会向任何人或组织转移与用户身份信息直接关联的的样品、样品衍生物和遗传信息。</p>
            <p>2个人数据的披露</p>
            <p>在如下情况下，己秘将依据您的个人意愿或法律的规定全部或部分的披露您的个人信息：1. 经您事先同意，向第三方披露；2.根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露；3.其它根据法律、法规认为合适的披露。</p>
            <p>四、授权声明</p>
            <p>您对下列事项予以授权确认：</p>
            <p>1 您同意己秘及其合作机构获得、保存、处理和分析您提供的体液样品、样品衍生物和经分析产生的相关信息并向您提供相关报告。同意己秘将您的个人数据用于基因相关的数据挖掘，用于您的基因报告的更新和发送。</p>
            <p>2 您同意己秘将剥离您个人信息后的相关数据与己秘合作伙伴（包括但不限于科学研究机构，药品研发中心、医疗卫生组织等）进行共享，从而推进科学研究。</p>
            <p>3 您同意在剥离个人信息的前提下，己秘有权对包括您的数据在内的整个用户数据库进行分析并对用户数据库进行商业上的利用。</p>
            <p>免责条款</p>
            <p>1 限于当前行业检测技术及实验室检测普遍存在容错率的客观事实，在己秘提供的检测服务中，存在虽经严谨检测但仍出现误差的可能性，该误差属于不可控误差。己秘只承担严谨检测的责任，对不可控误差不承担任何责任。</p>
            <p>2 己秘可以基于生物遗传原理在一定程度上推知您的家族相关遗传信息。己秘不承担基于遗传信息推定而获得您家族相关信息的非授权责任。</p>
            <p>3 己秘最终为客户所提供的报告和/或分析，仅用于科研目的，在任何情况下不应将其使用于医学临床诊断或分析。己秘仅对用户体液分析数据科学性和准确性提供保证，并不提供诊断结论和治疗建议。</p>
            <p>4 由于非己秘方责任导致的时间延误（包括但不限于用户原因导致的DNA采集失败，物流公司原因导致的投递延迟及其他不可抗拒力导致的时间延误），己秘不承担任何责任。</p>
            <p>争议与仲裁</p>
            <p>本协议之订立、生效、解释、修订、补充、终止、执行与争议解决均适用中华人民共和国大陆地区法律；如法律无相关规定的，参照商业惯例及/或行业惯例。</p>
            <p>您因使用己秘服务所产生有关的争议，由己秘与您协商解决。协商不成时，应以己秘所在地法院作为第一审管辖法院，按照中华人民共和国法律，因级别管辖的规定无权管辖的，以其上级法院作为第一审管辖法院。</p>
          </div>
          <div class="opera"><button class="btn" @click="next2">我同意</button></div>
        </div>
      </div>

      <div class="stepbox step3" v-if="currPage == 2">
        <div class="stepBar">
          <StepBar on="2"></StepBar>
        </div>

        <div class="content">
          <div class="form">
            <dl class="clearfix">
              <dt>姓名：</dt>
              <dd><input type="text" placeholder="请输入姓名" v-model="form.name"/></dd>
            </dl>

            <dl class="clearfix">
              <dt>性别：</dt>
              <dd>
                <Select v-model="form.sex" style="width:1.72rem;">
                  <Option :value="0">男</Option>
                  <Option :value="1">女</Option>
                  <Option :value="2">保密</Option>
                </Select>
              </dd>
            </dl>

            <dl class="clearfix">
              <dt>籍贯：</dt>
              <dd>
                <Select v-model="form.provinceId" @on-change="onProvinceChange" style="width:1.72rem;">
                  <Option v-for="item in provinceList" :value="item.id" :key="item.id">{{item.name}}</Option>
                </Select>

                <Select v-model="form.cityId" @on-change="onCityChange" style="width:1.72rem;">
                  <Option v-for="item in cityList" :value="item.id" :key="item.id">{{item.name}}</Option>
                </Select>

                <Select v-model="form.countyId" style="width:1.72rem;">
                  <Option v-for="item in countyList" :value="item.id" :key="item.id">{{item.name}}</Option>
                </Select>
              </dd>
            </dl>

            <dl class="clearfix">
              <dt>民族：</dt>
              <dd>
                <Select v-model="form.nationId" style="width:1.72rem;">
                  <Option v-for="item in nationList" :value="item.id" :key="item.id">{{item.name}}</Option>
                </Select>
              </dd>
            </dl>

            <dl  class="clearfix">
              <dt>出生年月：</dt>
              <dd>
                <DatePicker type="date" placeholder="请选择出生年月" v-model="form.birthday" @on-change="onDataChange" style="width: 100%; font-size: 14px;"></DatePicker>
              </dd>
            </dl>

            <dl class="clearfix">
              <dt>手机号：</dt>
              <dd><input type="text" placeholder="请输入手机号" v-model="form.phone"/></dd>
            </dl>
          </div>
          <div class="opera">
            <button class="btn" @click="next3">确定</button>
          </div>
        </div>
      </div>

      <div class="stepbox step4" v-if="currPage == 3">
        <div class="stepBar">
          <StepBar on="3"></StepBar>
        </div>

        <div class="content">
          <div class="rebox">
            <p class="state">{{bindResult.text}}！</p>
            <p class="icon-state">
              <i class="iconfont icon-zhengque" v-if="bindResult.state"></i>
              <i class="iconfont icon-cuowu1" v-if="!bindResult.state"></i>
            </p>
            <p class="number" v-if="bindResult.state">您的套件编号为：<em>{{bindResult.code}}</em></p>
            <p class="see" v-if="bindResult.state">可在“<router-link tag="a" to="/report">查看报告</router-link>”中查看样本检测进度。</p>
            <p class="msg" v-if="!bindResult.state">{{bindResult.msg}}</p>
          </div>
          <div class="opera"><button class="btn" @click="next4">确定</button></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import StepBar from '@/components/StepBar';
  import API from '@/fetch/api';
  import reg from '@/util/reg';
  import auth from '@/util/auth';
  import util from '@/util/util';

  export default {
    components:{
      Header,
      StepBar
    },
    data () {
      return {
        form:{
          sampleCode:"",
          name:"",
          sex:0,
          userOrderId:"",
          nationId:"",
          provinceId:"",
          cityId:"",
          countyId:"",
          birthday:"",
          phone:""
        },
        user:"",
        currPage:0,
        provinceList:[],
        cityList:[],
        countyList:[],
        nationList:[],
        bindResult:{
          text:"",
          state:"",
          code:"",
          msg:""
        }
      }
    },
    mounted(){
      this.user = auth.getUserInfo();
      this.form.userOrderId = util.GetQueryString("id");

      if(!this.user || !this.form.userOrderId){
        this.$router.push("/");
        return;
      }

      this.getProvince();
      this.getNation();
    },
    methods:{
      next4(){
        this.$router.push("/report");
      },
      next3(){
        if(this.form.name == ""){
          alert("请输入姓名");
          return;
        }
        if(!this.form.provinceId || !this.form.cityId || !this.form.countyId){
          alert("请选择省/市/区");
          return;
        }
        if(!this.form.nationId){
          alert("请选择民族");
          return;
        }
        if(!reg.date.test(this.form.birthday)){
          alert("出生年月格式不正确");
          return;
        }
        if(!reg.phone.test(this.form.phone)){
          alert("请输入正确的手机号");
          return;
        }

        var params = {
          "method": "addUserSample",
          "userid": this.user.id,
          "token": this.user.token,
          "params": this.form
        };

        API.userSample(params).then((re) => {
          if (re.status.code !== 200) {
            this.bindResult.text = "绑定失败";
            this.bindResult.state = 0;
            this.bindResult.msg = re.status.message;
          } else {
            this.bindResult.text = "绑定成功";
            this.bindResult.state = 1;
            this.bindResult.code = re.result.sampleCode;
          }

          this.currPage = 3
        });
      },
      next2(){
        this.currPage = 2;
      },
      next1(){
        if(!this.form.sampleCode){
          alert("请输入套件码");
          return;
        }

        var params = {
          "method": "getSuiteCod",
          "userid": this.user.id,
          "token": this.user.token,
          "params": {
            "sampleCode": this.form.sampleCode
          }
        };

        API.userSample(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message);
            return;
          }

          this.currPage = 1;
        });
      },
      onDataChange(v){
        this.form.birthday = v;
      },
      getNation(){
        let json = {
          method:"nationList"
        }
        this.areaHttp(json,(re)=>{
          this.nationList = re;
        });
      },
      onProvinceChange(v){
        this.getCity(v);
      },
      onCityChange(v){
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
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .stepbox{ padding: 0 .32rem;}
  .stepbox .content{ padding-top: .4rem;}
  .stepbox .opera{ padding: .4rem 0; text-align: center;}
  .stepbox .opera .btn{ width: 3rem;}

  .step1 .form{ padding-bottom: .4rem; text-align: center;}
  .step1 .form .label em{ color: #4FB1F7;}
  .step1 .form .number{ margin-top: .4rem;}
  .step1 .form .number input{ width: 100%;}
  .step1 .form .img{ margin-top: .8rem; text-align: center;}
  .step1 .form .img img{ width: 3.2rem; height: 4rem;}
  .step2 .agree{ height: 6.78rem; overflow-y: auto;}
  .step3 .form dl{ margin-bottom: .36rem;}
  .step3 .form dl dt{ float: left; padding: .15rem 0; width: 1.48rem; text-align: right;}
  .step3 .form dl dd{ float: left; width: 5.38rem;}
  .step3 .form dl dd input{ width: 100%;}
  .step4{ text-align: center;}
  .step4 .rebox{ padding-bottom: 1.44rem; text-align: center;}
  .step4 .state{ margin-top: .8rem; font-size: .44rem; color: #27384D; line-height: .74rem;}
  .step4 .icon-state{ margin-top: .7rem; line-height: 1;}
  .step4 .icon-state i.icon-zhengque{ color: #3DBD7D; font-size: .8rem;}
  .step4 .icon-state i.icon-cuowu1{ color: #F25484; font-size: .8rem;}
  .step4 .number{ margin-top: 112px;}
  .step4 .see{ margin-top: .16rem;}
</style>

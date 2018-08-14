<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="title">
        <div class="navbar">
          <ul class="clearfix" :style="{width:(menuList.length * 3)+'rem'}">
            <li v-for="item,index in menuList" :class="{on: currPage == index}" @click="onMenu(item,index)"><a href="javascript:;">{{item.name}}</a></li>
          </ul>
        </div>
        <div class="tips">左右滑动类别，点击查看具体内容</div>
      </div>

      <div class="box">
        <div class="section desc">
          <div class="h1"><i class="iconfont icon-zhiyebingbaogaoshangbao"></i>健康管理基因检测报告</div>
          <div class="content">{{currReport.reportInfo}}</div>
        </div>

        <!--<div class="section table-result">-->
          <!--<div class="h1">美颜 -【基因检测结果】</div>-->
          <!--<div class="content">-->
            <!--<table border="0" cellspacing="0" cellpadding="0">-->
              <!--<tr>-->
                <!--<th style="width: 40%;">项目</th>-->
                <!--<th style="width: 20%;">结果</th>-->
                <!--<th style="width: 40%;">基因</th>-->
              <!--</tr>-->
              <!--<tr>-->
                <!--<td>皮肤抗皱能力</td>-->
                <!--<td>cc</td>-->
                <!--<td>MMP1</td>-->
              <!--</tr>-->
              <!--<tr>-->
                <!--<td>皮肤再生细胞修复能力</td>-->
                <!--<td>gg</td>-->
                <!--<td>TERC、TERT、OBFC1、RTEL1、NAF1、ACYP2</td>-->
              <!--</tr>-->
            <!--</table>-->
          <!--</div>-->
        <!--</div>-->

        <div class="section report-reuslt">
          <div class="h1">{{currReport.name}}-【基因检测结果】</div>
          <div class="content">
            <div class="re-box">
              <div class="re-name">{{currReport.name}}</div>
              <div class="re-state" :class="{gao:sampleDetail.itemResult == '高',zhong:sampleDetail.itemResult == '中'}">{{sampleDetail.itemResult}}</div>
            </div>

            <div class="re-list">
              <div class="h2">基因检测列表</div>
              <table>
                <tr>
                  <th style="width: 20%;">基因</th>
                  <th style="width: 20%;">位点</th>
                  <th style="width: 30%;">检测结果</th>
                  <th style="width: 30%;">携带风险位点</th>
                </tr>
                <tr v-for="point in sampleDetail.pointResultList">
                  <td>{{point.geneName}}</td>
                  <td>{{point.name}}</td>
                  <td>{{point.functionInfo}}</td>
                  <td>{{point.detectionResult}}</td>
                </tr>
              </table>
            </div>

            <!--<div class="re-desc">-->
              <!--<p>你的检测反映了这样一个事实，在检测的基因中，你的基因型包括一些不利的基因组合。这意味着与其他没有相同遗传特征的人相比，你可能会觉得美颜更加困难。</p>-->
              <!--<p>好消息是，这并不意味着你不会或不能美颜。记住，这些结果仅仅表明你潜在的美颜，但它们并不能保证你身体对饮食和运动产生的反应。即使你携带的基因型可能会削弱你的美颜能力，你的生活方式和环境选择会影响这些基因是否被表达。总之，你的检测结果表明你需要选择最有效的方案，并且你需要采取行为，帮助你坚持生活方式的变化。</p>-->
            <!--</div>-->

            <div v-html="currReport.describe">
              <!--{{currReport.describe}}-->
            </div>
          </div>
        </div>
      </div>

      <div class="opera">
        <a href="javascript:;" class="btn prev" @click="onPrev">上一项</a>
        <a href="javascript:;" class="btn next" @click="onNext">下一项</a>
      </div>
    </div>

  </div>
</template>

<script>
  import Header from '@/components/Header';
  import API from '@/fetch/api';
  import auth from '@/util/auth';
  import util from '@/util/util';

  export default {
    components:{
      Header
    },
    data () {
      return {
        user:"",
        id:"",
        menuList:[],
        sampleDetail:"",
        currReport:"",
        currPage:0
      }
    },
    mounted(){
      this.id = util.GetQueryString("id");
      this.user = auth.getUserInfo();

      if(!this.user || !this.id){
        this.$router.push("/");
        return;
      }

      this.getMenuList();
    },
    methods:{
      onPrev(){
        --this.currPage;
        if(this.currPage<0){
          return;
        }
        this.onMenu(this.menuList[this.currPage],this.currPage);
      },
      onNext(){
        ++this.currPage;
        if(this.currPage>(this.menuList.length-1)){
          return;
        }
        this.onMenu(this.menuList[this.currPage],this.currPage);
      },
      onMenu(data,i){
        this.currPage = i;
        this.currReport = data;
        this.getReportDetail();
      },
      getMenuList(){
        var params = {
          "method": "getDetectItemList",
          "userid": this.user.id,
          "token": this.user.token,
          "params": {
            userSampleId: this.id
          }
        };

        API.userSample(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }

          this.menuList = re.result;
          this.currReport = re.result[0];
          this.getReportDetail();
        });
      },
      getReportDetail(){
        var params = {
          "method": "getDetectPointList",
          "userid": this.user.id,
          "token": this.user.token,
          "params": {
            userSampleId: this.id,
            detectItemId: this.currReport.id
          }
        };

        API.userSample(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }

          this.sampleDetail = re.result;
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{ padding: .2rem 0 0; background: #F5F5F5;}
  .box{ padding-top: .2rem;}
  .section{ margin-bottom: .32rem; padding: .8rem .32rem; background: #ffffff;}
  .h1{ margin-bottom: .42rem; font-size: .44rem; color: #27384D; text-align: center;}
  p{ margin-bottom: .48rem; line-height: .44rem; font-size: .24rem; color: #27384D;}
  p:last-child{ margin-bottom: 0;}
  table{ width: 100%;}

  .title .navbar{ overflow-y: auto; background: #ffffff;}
  .title .navbar ul{ width: 9rem;}
  .title .navbar ul li{ float: left; padding: 0 .42rem; width: 3rem; line-height: .84rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
  .title .navbar ul li:last-child{ margin-right: 0;}
  .title .navbar ul li a{ font-size: .32rem; color: #676767;}
  .title .navbar ul li.on a{ color: #4FB1F7;}
  .title .tips{ padding: .16rem 0 .14rem; font-size: .2rem; color: #A2A2A2; text-align: center;}

  .desc .h1 i{ display: inline-block; margin-top: -.06rem; margin-right: .2rem; line-height: 1; font-size: .5rem; vertical-align: middle;}
  .table-result table tr th{ padding: .09rem .2rem; font-size: .28rem; color: #27384D; font-weight: 100; text-align: left; background: #F0F0F0;}
  .table-result table tr td{ padding: 0 .2rem; line-height: .48rem; font-size: .24rem; color: #27384D; border-bottom: 1px solid #cccccc;}
  .report-reuslt .re-box{ margin-bottom: .54rem; padding: .54rem 0; text-align: center; background: #27384D; border-radius: 4px 4px 0 0;}
  .report-reuslt .re-box .re-name{ margin-bottom: .28rem; font-size: .28rem; color: #ffffff;}
  .report-reuslt .re-box .re-state{ line-height: .66rem; font-size: .48rem; color: #BFE885;}
  .report-reuslt .re-box .re-state.gao{ color: #F25484;}
  .report-reuslt .re-box .re-state.zhong{ color: #4FB1F7;}
  .report-reuslt .re-list{ margin-bottom: .3rem;}
  .report-reuslt .re-list .h2{ margin-bottom: .2rem; font-size: .32rem; color: #27384D; font-weight: 600;}
  .report-reuslt .re-list table tr th{ padding: .08rem 0 .12rem; line-height: .48rem; font-size: .2rem; font-weight: 100; color: #27384D;  text-align: center; border-bottom: 1px solid #cccccc;}
  .report-reuslt .re-list table tr td{ padding: .14rem 0 .18rem; line-height: .48rem; font-size: .2rem; font-weight: 100; color: #27384D;  text-align: center; border-bottom: 1px solid #cccccc;}

  .opera{ padding: .22rem 0 .54rem; font-size: 0; text-align: center;}
  .opera .btn{ padding: .12rem 0; font-size: .32rem;}
  .opera .prev{ margin-right: .4rem;}
</style>

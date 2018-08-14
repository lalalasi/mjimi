<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div>
        <img src="../assets/images/about.png"/>
      </div>

      <div class="box">
        <div class="tabs">
          <span :class="{active:!type}" @click="onTabs(0)">关于我们</span>
          <span :class="{active:type}" @click="onTabs(1)">用户协议</span>
        </div>

        <div class="content">
          <div class="about" v-if="type == 0">
            <p>己秘是一家致力于将基因检测技术应用于个人健康管理和临床医学疾病筛查和诊断的科技转化型企业。公司特聘在高通量基因测序和临床疾病检测领域资深科学家叶孜博士担任技术总监，并引进多年从事基因芯片和基因检测技术研究的科研机构Primbio Research Institute技术团队作为技术支持，专业从事健康管理和临床疾病相关基因芯片产品的研究、开发和基因检测服务。</p>
            <p>基因信息与健康息息相关，诺贝尔医学奖获得者利根川进博士曾指出：人类除外伤以外的所有疾病都与基因有关！疾病或体质特征是由内因（基因）与外因（环境和习惯）共同作用的结果。</p>
            <p>己秘始终致力于将前沿的生物技术运用于疾病的预防、诊断和治疗，提高全球个性化医疗水平。个人健康管理类基因检测旨在从遗传的角度解读基因数据，预测疾病风险和营养代谢能力等体质特征，从而指导健康的生活方式，提升生活品质。现代科学研究表明人与人之间基因的差异不到0.1%，而正是这不到0.1%的差异造就了你我的与众不同。</p>
            <p>对生命的探索是人类永恒的主题。伟大的古希腊哲学家亚里士多德曾说：智者始于自知。当我的基因密码被破译的时候，当我的巴特农神庙建立起来的时候，我从这遥远的地方也能感受到他的辉煌。</p>
            <p>揭开基因秘密，更好了解自己。未来已来！在这个风起云涌，激动人心的时代里己秘将与您一路同行，伴您一生健康！</p>
          </div>

          <div class="agreement" v-if="type == 1">
            <h2>己秘基因检测服务协议</h2>
            <p>尊敬的先生/女士：</p>
            <p>欢迎您使用己秘基因检测服务，为了保证您在充分知情的情况下参加本次检测，请仔细阅读本协议。参加本次检测项目完全是自愿行为，如果您决定参加本检测项目，视为您已完全阅读、了解并同意本协议所述内容。请您遵守相关条款规定，与己秘一起完成本次项目的合作。如果您未满18周岁，请在法定监护人的陪同下阅读本协议。</p>
            <p>一、协议范围</p>
            <p>本协议由用户与己秘共同缔结，“用户”是指使用己秘相关服务的使用人，在本协议中更多地称为“您”。</p>
            <p>二、用户信息</p>
            <p>在使用本服务时，您应当按表格的提示准确完整地提供您的信息，包括您的姓名、联系电话、联系地址、调查问卷等，以便服务过程中与您联系。您了解并同意，您有义务保持您提供信息的真实性及有效性，并承担由此引发的因信息错误导致无法有效联络的责任。</p>
            <p>三、隐私政策</p>
            <p>1、个人数据的保密</p>
            <p>己秘承诺除非得到用户授权或依据国家法律要求，己秘不会向任何人或组织转移与用户身份信息直接关联的的样品、样品衍生物和遗传信息。</p>
            <p>2、个人数据的披露</p>
            <p>在如下情况下，己秘将依据您的个人意愿或法律的规定全部或部分的披露您的个人信息：1. 经您事先同意，向第三方披露；2.根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露；3.其它根据法律、法规认为合适的披露。</p>
            <p>四、授权声明</p>
            <p>您对下列事项予以授权确认：</p>
            <p>1、您同意己秘及其合作机构获得、保存、处理和分析您提供的体液样品、样品衍生物和经分析产生的相关信息并向您提供相关报告。同意己秘将您的个人数据用于基因相关的数据挖掘，用于您的基因报告的更新和发送。</p>
            <p>2、您同意己秘将剥离您个人信息后的相关数据与己秘合作伙伴（包括但不限于科学研究机构，药品研发中心、医疗卫生组织等）进行共享，从而推进科学研究。</p>
            <p>3、您同意在剥离个人信息的前提下，己秘有权对包括您的数据在内的整个用户数据库进行分析并对用户数据库进行商业上的利用。</p>
            <p>五、免责条款</p>
            <p>1、限于当前行业检测技术及实验室检测普遍存在容错率的客观事实，在己秘提供的检测服务中，存在虽经严谨检测但仍出现误差的可能性，该误差属于不可控误差。己秘只承担严谨检测的责任，对不可控误差不承担任何责任。</p>
            <p>2、己秘可以基于生物遗传原理在一定程度上推知您的家族相关遗传信息。己秘不承担基于遗传信息推定而获得您家族相关信息的非授权责任。</p>
            <p>3、己秘最终为客户所提供的报告和/或分析，仅用于科研目的，在任何情况下不应将其使用于医学临床诊断或分析。己秘仅对用户体液分析数据科学性和准确性提供保证，并不提供诊断结论和治疗建议。</p>
            <p>4、由于非己秘方责任导致的时间延误（包括但不限于用户原因导致的DNA采集失败，物流公司原因导致的投递延迟及其他不可抗拒力导致的时间延误），己秘不承担任何责任。</p>
            <p>六、争议与仲裁</p>
            <p>本协议之订立、生效、解释、修订、补充、终止、执行与争议解决均适用中华人民共和国大陆地区法律；如法律无相关规定的，参照商业惯例及/或行业惯例。</p>
            <p>您因使用己秘服务所产生有关的争议，由己秘与您协商解决。协商不成时，应以己秘所在地法院作为第一审管辖法院，按照中华人民共和国法律，因级别管辖的规定无权管辖的，以其上级法院作为第一审管辖法院。</p>
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
  import util from '@/util/util'

  export default {
    components:{
      Header,
      Footer
    },
    data () {
      return {
        type:0
      }
    },
    mounted(){
      this.type = util.GetQueryString("type");
    },
    methods:{
      onTabs(t){
        this.type = t;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{}
  .box{ margin-top: .34rem; padding: 0 .32rem; border-top: 1px solid #E6E6E6; border-radius: .2rem;}
  .tabs{ margin-top: .8rem; line-height: .74rem; font-size: 0; text-align: center; border-bottom: 1px solid #D9D9D9;}
  .tabs span{ display: inline-block; padding-bottom: .2rem; font-size: .44rem;}
  .tabs span:first-child{ margin-right: .38rem;}
  .tabs span.active{ border-bottom: .12rem solid #4FB1F7;}
  .content{ padding: .58rem 0 .8rem; line-height: .52rem; font-size: .28rem; color: #666666; text-align: justify;}
  .content h2{ margin-bottom: .1rem; font-size: .32rem; text-align: center;}
  .content .about p{ margin-bottom: .48rem;}
  .content .agreement p{ margin-bottom: .1rem;}
</style>

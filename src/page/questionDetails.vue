<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="container">
        <div class="h1">关于基因检测</div>
        <div>
          <div class="h2 qt">Q：{{question.title}}</div>
          <div class="qc">
            <p v-html="question.conten"></p>
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
  import dict from '@/util/dict';
  import util from '@/util/util'

  export default {
    components:{
      Header,
      Footer
    },
    data () {
      return {
        question:""
      }
    },
    mounted(){
      let id = util.GetQueryString("id");
      this.question = dict.question[id-1];
    },
    methods:{
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{ padding: .6rem .4rem 1rem; background: #F4F7F9;}
  .main>div{ padding: .4rem; min-height: 8rem; background: #ffffff;}
  .h1{ padding-bottom: .2rem; text-align: center;}
  .h2{ font-size: .36rem;}
  .qc{ padding: .2rem .3rem; font-size: .28rem;}
</style>

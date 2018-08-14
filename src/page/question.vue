<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="container">
        <div class="h1">关于基因检测</div>
        <ul>
          <li v-for="item in list"><router-link tag="a" :to="'/questionDetails?id='+item.id">{{item.title}}</router-link></li>
        </ul>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import Footer from '@/components/Footer';
  import dict from '@/util/dict'

  export default {
    components:{
      Header,
      Footer
    },
    data () {
      return {
        list: dict.question
      }
    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{ padding: .4rem; background: #F4F7F9;}
  .main>div{ padding: .4rem; background: #ffffff;}
  .h1{ padding-bottom: .2rem; text-align: center;}
  ul li{ margin: .15rem;}
  ul li a{ font-size: .28rem; color: #4FB1F7;}
</style>

<template>
  <div class="popup">
    <div class="alert" :class="{ show: state}">
      <div><i></i></div>
      <div>{{msg}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props:{
    msg:"",
    state: 0
  },
  methods:{
    show(){
      this.state = 1;
      setTimeout(() =>{
        this.state =0;
      },2000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .popup{}
  .alert{ position: fixed; top: 50%; width: 3.58rem; height: 1.96rem; opacity: 0.9; background: #000000; border-radius: 8px; opacity: 0; transition: all .5s;}
  .alert.show{ opacity: 1;}
</style>

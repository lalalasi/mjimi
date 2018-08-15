<template>
  <div class="step">
    <ul class="clearfix">
      <li :class="{active:on >=0}"><i>1</i>输入套件编码</li>
      <li class="line"></li>
      <li :class="{active:on >=1}"><i>2</i>签署知情同意书</li>
      <li :class="{active:on >=2}"><i>3</i>填写其他信息</li>
      <li class="line"></li>
      <li :class="{active:on >=3}"><i>4</i>绑定成功！</li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['on']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .step{ padding: .1rem .6rem; color: #999999; font-size: .24rem; border-bottom: .02rem solid #D9D9D9;}
  .step ul li{ float: left; padding: .15rem 0; width: 2.46rem;}
  .step ul li:nth-child(3n+1){ width: 2.13rem;}
  .step ul li.line{ width: 1rem; text-align: center;}
  .step ul li.line:before{ content: ""; display: inline-block; margin-top: -.05rem; width: .54rem; height: .02rem; vertical-align: middle; background: #D9D9D9;}
  .step ul li i{ display: inline-block; margin-right: .12rem; width: .32rem; height: .32rem; line-height: .32rem; text-align: center; border: .01rem solid #D9D9D9; border-radius: 50%;}
  .step ul li.active{ color: #333333;}
  .step ul li.active i{ color: #ffffff; border: .01rem solid #108EE9; background: #108EE9;}
</style>

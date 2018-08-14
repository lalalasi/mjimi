<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="container">
        <div class="title clearfix">
          <router-link tag="a" to="shequ">社区</router-link>>
          <a href="javascript:;" class="blue">发起讨论</a>
        </div>

        <div class="content">
          <div class="form">
            <div>
              <input type="text" placeholder="讨论标题..." v-model="form.title" maxlength=20/>
            </div>

            <div>
              <Select style="width:3.4rem;" v-model="form.communityId">
                <Option v-for="part in partList" :value="part.id" :key="part.id">{{part.name}}</Option>
              </Select>
            </div>

            <div>
              <Input type="textarea" :rows="6" style="width: 100%;" v-model="form.content" :maxlength="150"></Input>
              <div>允许：jpg, jpeg,png,gif,zip,doc,docx,rar,psd</div>
            </div>

            <div>
              <label class="chek-wrap">
                <input type="checkbox" v-model="form.anonymous"/>
                <i><img src="../assets/images/checkbox1.png"><img src="../assets/images/checkbox2.png"></i>
                匿名发起
              </label>
            </div>

            <div class="submit">
              <a href="javascript:;" class="btn" @click="onSubmit">发起讨论</a>
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
  import reg from '@/util/reg';
  import auth from '@/util/auth';

  export default {
    components:{
      Header
    },
    data () {
      return {
        form:{
          communityId:"",
          title:"",
          content:"",
          anonymous:false
        },
        partList:[]
      }
    },
    mounted(){
      this.user = auth.getUserInfo();

      if(!this.user){
        this.$router.push("/")
        return;
      }

      this.getPartList();
    },
    methods:{
      onSubmit(){
        if(!this.form.title){
          alert("请输入标题");
          return;
        }
        if(!this.form.communityId){
          alert("请选择讨论区");
          return;
        }
        if(!this.form.content){
          alert("请输入内容");
          return;
        }

        this.form.anonymous = this.form.anonymous?1:0;

        var params = {
          "method": "addPost",
          "userid": this.user.id,
          "token": this.user.token,
          "params": this.form
        };

        API.posts(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }

          alert("发布成功");
          // this.$router.push("/shequ");
        });
      },
      getPartList(id){
        var params = {
          "method": "communityList",
          "userid": "",
          "token": "",
          "params": {}
        };

        API.communitys(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }

          this.partList = re.result;
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{ padding: .46rem 0 .1rem;}
  dl dt,dl dd{ float: left;}
  dl dt{ padding: .32rem .32rem .22rem; width: 1.52rem; text-align: center;}
  dl dd{ padding: .32rem 0 .22rem; width: 5.66rem; border-bottom: 1px solid #E6E6E6;}

  .title{ margin-bottom: .3rem;}
  .title a{ color: #666666; font-size: .28rem;}
  .title a.blue{ color: #4FB1F7; font-size: .28rem;}
  .form>div{ margin-bottom: .32rem;}
  .form input{ width: 100%;}
  .form .submit{ text-align: center;}
  .form .submit .btn{ padding: .15rem 0; width: 2.54rem;}
</style>

<template>
  <div class="wrapper">
    <Header></Header>

    <div class="main">
      <div class="box">
        <div class="head">
          <div class="mask" @click="onUpload">
            <img :src="form.headImage">
            <span>点击更换</span>
            <input id="fileupload" name="fileupload" type="file" accept="image/*" style="display: none;"/>
          </div>
        </div>
        <div class="form">
          <dl class="clearfix name">
            <dt>手机号：</dt>
            <dd><span>{{form.mobile}}</span></dd>
          </dl>

          <dl class="clearfix">
            <dt>姓名：</dt>
            <dd><input type="text" placeholder="请输入姓名" v-model="form.name"/></dd>
          </dl>

          <dl class="clearfix">
            <dt>性别：</dt>
            <dd>
              <select v-model="form.sex" style="width:1.72rem;">
                <option value="0">男</option>
                <option value="1">女</option>
                <option value="2">保密</option>
              </select>
              <!--<Select v-model="form.sex" style="width:1.72rem;">-->
                <!--<Option :value="0">男</Option>-->
                <!--<Option :value="1">女</Option>-->
                <!--<Option :value="2">保密</Option>-->
              <!--</Select>-->
            </dd>
          </dl>

          <dl class="clearfix">
            <dt>籍贯：</dt>
            <dd>
              <select v-model="form.provinceId" @change="onProvinceChange(form.provinceId)" style="width:1.72rem;">
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

          <dl class="clearfix">
            <dt>民族：</dt>
            <dd>
              <select v-model="form.nationId" style="width:1.72rem;">
                <option value="">请选择</option>
                <option v-for="item in nationList" :value="item.id" :key="item.id">{{item.name}}</option>
              </select>

              <!--<Select v-model="form.nationId" style="width:1.72rem;">-->
                <!--<Option v-for="item in nationList" :value="item.id" :key="item.id">{{item.name}}</Option>-->
              <!--</Select>-->
            </dd>
          </dl>

          <dl  class="clearfix">
            <dt>出生年月：</dt>
            <dd>
              <DatePicker type="date" placeholder="请选择出生年月" v-model="form.birthday" @on-change="onDataChange" style="width: 100%; font-size: 14px;"></DatePicker>
            </dd>
          </dl>
        </div>

        <div class="opera">
          <button class="btn" @click="onSubmit">确定</button>
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
        user:"",
        form:{
          headImage:"",
          mobile:"",
          name:"",
          sex:0,
          provinceId:"",
          cityId:"",
          countyId:"",
          nationId:"",
          birthday:""
        },
        provinceList:[],
        cityList:[],
        countyList:[],
        nationList:[],
        file:""
      }
    },
    mounted(){
      this.user = auth.getUserInfo();

      if(!this.user){
        this.$router.push("/")
        return;
      }

      this.init();

      $("#fileupload").on("change",()=>{
        this.uploadImg();
      });

      // this.updataImageHead("http://www.geneme.com.cn/upload/1532613163931.png")
    },
    methods:{
      onUpload(){
        $("#fileupload").click();
      },
      uploadImg(){
        var img=$("#fileupload").val();
        if(img==null || img.trim()==""){
          alert("没有图片");
          return;
        }

        $.ajaxFileUpload({
          url : 'http://www.geneme.com.cn/imageupload',// servlet请求路径
          secureuri : false,
          fileElementId : "fileupload",// 上传控件的id
          dataType : 'text',
          success : (data, status)=>{
            data = data.replace(/<pre[^>]*>/, '');
            data = data.replace("</pre>", '');
            data = JSON.parse(data);
            var imgurl =data.result[0];

            //修改头像接口
            this.updataImageHead(imgurl);
          },
          error : function(data) {
            alert("网络繁忙，请稍候重试");
            return;
          }
        });
      },
      updataImageHead(img){
        var params = {
          "method": "updateHeadImage",
          "userid": this.user.id,
          "token": this.user.token,
          "params": {
            "headImage": img
          }
        };

        API.userInfo(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }

          this.user.headImage = img;
          auth.updateUserInfo(this.user);
          location.reload();
        });
      },
      init(){
        this.form.headImage = this.user.headImage;
        this.form.mobile = this.user.phone;
        this.form.name = this.user.name;
        this.form.sex = this.user.sex;
        // this.form.provinceId = [this.user.provinceId.toString()];
        // this.form.cityId = [this.user.cityId.toString()];
        // this.form.countyId = [this.user.countyId.toString()];
        this.form.provinceId = this.user.provinceId;


        this.form.nationId = this.user.nationId.toString();
        this.form.birthday = this.user.birthday;

        this.getProvince();
        this.getNation();
        this.onProvinceChange(this.form.provinceId);
        this.form.cityId = this.user.cityId;
        this.onCityChange(this.form.cityId);
        this.form.countyId = this.user.countyId;
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
      },
      onSubmit(){
        if(this.form.name == ""){
          alert("请输入姓名");
          return;
        }
        if(this.form.provinceId == "" || this.form.countyId == "" || this.form.cityId == ""){
          alert("请选择省/市/区");
          return;
        }
        if(this.form.nationId == ""){
          alert("请选择民族");
          return;
        }
        if(!reg.date.test(this.form.birthday)){
          alert("出生年月格式不正确");
          return;
        }

        var params = {
          "method": "updateUser",
          "userid": this.user.id,
          "token": this.user.token,
          "params": this.form
        };

        API.userInfo(params).then((re) => {
          if (re.status.code !== 200) {
            alert(re.status.message)
            return;
          }
          auth.updateUserInfo(this.form);
          alert("修改成功");
        });

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{ padding: .4rem 0;}
  .box{ padding: 0 .32rem;}
  .mask{ position: relative; overflow: hidden; margin: 0 auto; width: 2rem; height: 2rem; border-radius: 50%;}
  .mask span{ position: absolute; bottom: 0; display: block; width: 100%; line-height: .5rem; font-size: .2rem; color: #ffffff; text-align: center; background: #00A4FF; opacity: 0.9;}
  .form{ margin-top: .6rem;}
  .form dl{ margin-bottom: .36rem;}
  .form dl dt{ float: left; padding: .15rem 0; width: 1.48rem; text-align: right;}
  .form dl dd{ float: left; width: 5.38rem;}
  .form dl dd input{ width: 100%;}
  .opera{ padding: .4rem 0 .36rem; text-align: center;}
  .opera .btn{ width: 5.8rem;}

  .form dl.name dd{ padding: .15rem .24rem;}
</style>

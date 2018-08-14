import router from '@/router'

export default{
  GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var hash = window.location.hash;
    var r = hash.substring(hash.indexOf("?")).substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
  },
  GQS(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
  },
  Success(){
    setTimeout(()=>{
      router.push("/")
    },1000);
  }
};

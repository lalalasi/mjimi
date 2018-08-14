const ft = {
  formatTiem(date) {
    return date.substring(0,date.lastIndexOf(":")).replace(/-/g,"/");
  },
  formatDate(date) {
    if(date.indexOf(" ") == -1){
      return date.replace(/-/g,"/");
    } else{
      return date.substring(0,date.indexOf(" ")).replace(/-/g,"/");
    }
  },
  formatDateCN(date) {
    return date.substring(0,date.indexOf(" ")).replace(/(\d{4})\-(\d{2})\-(\d{2})/,"$1年$2月$3日");
  },
  formatDay(date) {
    return date.substring(5,date.indexOf(" "));
  },
  gender(g){
    if(g == 0){
      return "男"
    }
    if(g == 1){
      return "女"
    }
    if(g == 2){
      return "保密"
    }
  },
  sampleType(s){
    if(s == 0){
      return "套件运送中"
    }
    if(s == 1){
      return "检测中"
    }
    if(s == 2){
      return "检测完成"
    }
    if(s == 3){
      return "报告已出"
    }
  }
}

export default ft;

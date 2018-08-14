let curruser = "";
export default {
  setUserInfo(user) {
    curruser = user;
    localStorage.setItem("userinfo",null);
    localStorage.setItem("userinfo",JSON.stringify(user));
  },
  getUserInfo() {
    if(!curruser){
      var user = localStorage.getItem("userinfo");
      if (user) {
        curruser = JSON.parse(user);
      }
      return curruser;
    } else {
      return curruser;
    }
  },
  updateUserInfo(info){
    curruser.headImage = info.headImage;
    curruser.name = info.name;
    curruser.sex = info.sex;
    curruser.provinceId = info.provinceId;
    curruser.cityId = info.cityId;
    curruser.countyId = info.countyId;
    curruser.nationId = info.nationId;
    curruser.birthday = info.birthday;
    localStorage.setItem("userinfo",null);
    localStorage.setItem("userinfo",JSON.stringify(curruser));
  },
  removeUserInfo(){
    curruser = "";
    localStorage.setItem("userinfo",null);
  }
}

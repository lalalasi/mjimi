import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import login from '@/page/login'
import register from '@/page/register'
import forget from '@/page/forget'
import reportNav from '@/page/reportNav'
import reset from '@/page/reset'
import flow from '@/page/flow'
import domeMeiyan from '@/page/domeMeiyan'
import domeYingyang from '@/page/domeYingyang'
import domeJianfei from '@/page/domeJianfei'
import domeManbing from '@/page/domeManbing'
import domeAibing from '@/page/domeAibing'
import buyNav from '@/page/buyNav'
import buyMeiyan from '@/page/buyMeiyan'
import buyYingyang from '@/page/buyYingyang'
import buyManbing from '@/page/buyManbing'
import buyAibing from '@/page/buyAibing'
import buyJianfei from '@/page/buyJianfei'
import shequ from '@/page/shequ'
import shequPart from '@/page/shequPart'
import shequPublish from '@/page/shequPublish'
import shequDetails from '@/page/shequDetails'
import userInfo from '@/page/userInfo'
import updatePwd from '@/page/updatePwd'
import order from '@/page/order'
import bind from '@/page/bind'
import bindStep from '@/page/bindStep'
import report from '@/page/report'
import reportDetails from '@/page/reportDetails'
import about from '@/page/about'
import pay from '@/page/pay'
import payResult from '@/page/payResult'
import reportDomeAibing from '@/page/reportDomeAibing'
import reportDomeManbing from '@/page/reportDomeManbing'
import reportDomeJianfei from '@/page/reportDomeJianfei'
import reportDomeMeiyan from '@/page/reportDomeMeiyan'
import reportDomeYingyang from '@/page/reportDomeYingyang'
import otherLogin from '@/page/otherLogin'
import otherBind from '@/page/otherBind'
import otherReset from '@/page/otherReset'
import question from '@/page/question'
import questionDetails from '@/page/questionDetails'

Vue.use(Router)

export default new Router({
  // mode: "history",
  // base:'/weixin/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget
    },
    {
      path: '/reportNav',
      name: 'reportNav',
      component: reportNav
    },
    {
      path: '/reset',
      name: 'reset',
      component: reset
    },
    {
      path: '/flow',
      name: 'flow',
      component: flow
    },
    {
      path: '/domeMeiyan',
      name: 'domeMeiyan',
      component: domeMeiyan
    },
    {
      path: '/domeYingyang',
      name: 'domeYingyang',
      component: domeYingyang
    },
    {
      path: '/domeJianfei',
      name: 'domeJianfei',
      component: domeJianfei
    },
    {
      path: '/domeManbing',
      name: 'domeManbing',
      component: domeManbing
    },
    {
      path: '/domeAibing',
      name: 'domeAibing',
      component: domeAibing
    },
    {
      path: '/buyNav',
      name: 'buyNav',
      component: buyNav
    },
    {
      path: '/buyMeiyan',
      name: 'buyMeiyan',
      component: buyMeiyan
    },
    {
      path: '/buyYingyang',
      name: 'buyYingyang',
      component: buyYingyang
    },
    {
      path: '/buyManbing',
      name: 'buyManbing',
      component: buyManbing
    },
    {
      path: '/buyAibing',
      name: 'buyAibing',
      component: buyAibing
    },
    {
      path: '/buyJianfei',
      name: 'buyJianfei',
      component: buyJianfei
    },
    {
      path: '/shequ',
      name: 'shequ',
      component: shequ
    },
    {
      path: '/shequPart',
      name: 'shequPart',
      component: shequPart
    },
    {
      path: '/shequPublish',
      name: 'shequPublish',
      component: shequPublish
    },
    {
      path: '/shequDetails',
      name: 'shequDetails',
      component: shequDetails
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: userInfo
    },
    {
      path: '/updatePwd',
      name: 'updatePwd',
      component: updatePwd
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/bind',
      name: 'bind',
      component: bind
    },
    {
      path: '/bindStep',
      name: 'bindStep',
      component: bindStep
    },
    {
      path: '/report',
      name: 'report',
      component: report
    },
    {
      path: '/reportDetails',
      name: 'reportDetails',
      component: reportDetails
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/pay',
      name: 'pay',
      component: pay
    },
    {
      path: '/payResult',
      name: 'payResult',
      component: payResult
    },
    {
      path: '/reportDomeAibing',
      name: 'reportDomeAibing',
      component: reportDomeAibing
    },
    {
      path: '/reportDomeManbing',
      name: 'reportDomeManbing',
      component: reportDomeManbing
    },
    {
      path: '/reportDomeJianfei',
      name: 'reportDomeJianfei',
      component: reportDomeJianfei
    },
    {
      path: '/reportDomeMeiyan',
      name: 'reportDomeMeiyan',
      component: reportDomeMeiyan
    },
    {
      path: '/reportDomeYingyang',
      name: 'reportDomeYingyang',
      component: reportDomeYingyang
    },
    {
      path: '/otherLogin',
      name: 'otherLogin',
      component: otherLogin
    },
    {
      path: '/otherBind',
      name: 'otherBind',
      component: otherBind
    },
    {
      path: '/otherReset',
      name: 'otherReset',
      component: otherReset
    },
    {
      path: '/question',
      name: 'question',
      component: question
    },
    {
      path: '/questionDetails',
      name: 'questionDetails',
      component: questionDetails
    }
  ]
})

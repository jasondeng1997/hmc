"use strict";(self.webpackChunkHMC=self.webpackChunkHMC||[]).push([[6472],{4243:(e,t,n)=>{n.d(t,{E9:()=>c,MD:()=>r,OY:()=>l,RI:()=>o,XN:()=>a});var r=[{text:"部署成功",value:"deployed"},{text:"部署失败",value:"deploy fail"},{text:"部署中",value:"deploying"},{text:"卸载失败",value:"undeploy fail"},{text:"卸载中",value:"undeploying"}],a=[{text:"更新成功",value:"success"},{text:"更新失败",value:"fail"},{text:"更新中",value:"update"}],l={hosts:["主机集群"],kubernetes:["Kubernetes集群（自建集群）","Kubernetes集群（导入已有集群）"]},o={hosts:{title:"主机安装会经过2个状态：管控安装-主机初始化，若某一步安装失败，请查看具体日志。",filters:[{text:"管控安装成功",value:"管控安装成功"},{text:"管控安装失败",value:"管控安装失败"},{text:"script安装成功",value:"script安装成功"},{text:"script安装失败",value:"script安装失败"},{text:"主机初始化成功",value:"主机初始化成功"},{text:"主机初始化失败",value:"主机初始化失败"}],finalStatus:3},kubernetes:{title:"Kubernetes集群主机安装会经过5个状态：管控安装-主机初始化-K8S Docker初始化-K8S Node初始化-K8S Node部署成功，若某一步安装失败，请查看具体日志",filters:[{text:"管控安装失败",value:"管控安装失败",status:-1},{text:"管控安装成功",value:"管控安装成功",status:1},{text:"主机初始化失败",value:"主机初始化失败",status:-3},{text:"主机初始化成功",value:"主机初始化成功",status:3},{text:"K8S DOCKER初始化失败",value:"K8S DOCKER初始化失败",status:-5},{text:"K8S DOCKER初始化成功",value:"K8S DOCKER初始化成功",status:5},{text:"K8S NODE初始化失败",value:"K8S NODE初始化失败",status:-6},{text:"K8S NODE初始化成功",value:"K8S NODE初始化成功",status:6},{text:"K8S NODE部署失败",value:"K8S NODE部署失败",status:-7},{text:"K8S NODE部署成功",value:"K8S NODE部署成功",status:7}],finalStatus:7}},c={NAMESPACE:"em_current_k8s_namespace"}},187:(e,t,n)=>{n.d(t,{Y:()=>a,v:()=>r});var r={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:12}}},a={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:16}}}},6472:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var r=n(73126),a=n(95266),l=n(28222),o=n.n(l),c=n(86),s=n.n(c),u=n(67294),i=n(69035),m=n(45360),v=n(35247),f=n(58121),_=n(43663),g=n(53825),d=n(187),p=n(82193),h=i.Z.Item;const x=function(e){var t=u.useState([]),n=(0,a.Z)(t,2),l=n[0],c=n[1],x=u.useState({roleName:"",description:"",permissions:[]}),E=(0,a.Z)(x,2),S=E[0],K=E[1],N=function e(t,n){return s()(t).call(t,(function(t){var r=t.selected,a=t.code,l=t.children;t.key=t.code,r&&n.push(a),null!=l&&l.length&&e(l,n)})),n};return u.useEffect((function(){var t;!function(e){_.bS.getAuthorityTree({roleId:e}).then((function(e){if(0===(e=e.data).code&&o()(e.data).length){var t=e.data,n=t.role_name,r=t.description,a=t.permissions.Permissions,l=N(a,[]);K({roleName:n,description:r,permissions:a}),c(l)}else m.Z.error(e.msg)}))}((t=e.location.search,p.Z.getParamsFromUrl(t).id))}),[]),u.createElement("div",{className:"role-manage-page"},u.createElement(v.Z,null,u.createElement(v.Z.Item,null,u.createElement(g.Z,{to:"/usercenter/role"},"角色管理")),u.createElement(v.Z.Item,null,"查看角色")),u.createElement("div",{className:"role-info-content box-shadow-style"},u.createElement(i.Z,null,u.createElement(h,(0,r.Z)({label:"角色名称"},d.v),S.roleName),u.createElement(h,(0,r.Z)({label:"角色描述"},d.v),S.description),u.createElement(h,(0,r.Z)({label:"功能权限"},d.v),u.createElement(f.Z,{checkable:!0,disabled:!0,checkStrictly:!0,checkedKeys:l,treeData:S.permissions,style:{maxHeight:"calc(100vh - 235px)",overflowY:"auto"}})))))}},82193:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(39022),a=n.n(r),l=n(86),o=n.n(l),c=n(11882),s=n.n(c),u=n(97606),i=n.n(u),m=n(28222),v=n.n(m),f=n(2357),_=n.n(f),g=n(45360),d=n(36808),p=n(4243);const h={pageWidth:function(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)},pageHeight:function(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)},getParameterByName:function(e,t){t||(t=window.location.href),e=e.replace(/[[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},getBase64:function(e,t){var n=new FileReader;n.addEventListener("load",(function(){return t(n.result)})),n.readAsDataURL(e)},percent:function(e,t){return e&&e!==1/0?(e>1&&(e=1),t=t||2,t=Math.pow(10,t),Math.round(e*t*100)/t+"%"):"0%"},getCssText:function(e){var t="";for(var n in e)t+=n+":"+e[n]+";";return t},formateDateTime:function(e){var t,n,r,l,o;if(!e)return"";var c=new Date(e),s=c.getFullYear(),u=c.getMonth()+1+"",i=c.getDate()+"",m=c.getHours()+"",v=c.getMinutes()+"",f=c.getSeconds()+"";return 1===u.toString().length&&(u="0".concat(u)),1===i.toString().length&&(i="0".concat(i)),1===m.toString().length&&(m="0".concat(m)),1===v.toString().length&&(v="0".concat(v)),1===f.toString().length&&(f="0".concat(f)),a()(t=a()(n=a()(r=a()(l=a()(o="".concat(s,"-")).call(o,u,"-")).call(l,i," ")).call(r,m,":")).call(n,v,":")).call(t,f)},formateDate:function(e){var t,n;if(!e)return"";var r=new Date(e),l=r.getFullYear(),o=r.getMonth()+1+"",c=r.getDate()+"";return 1===o.toString().length&&(o="0".concat(o)),1===c.toString().length&&(c="0".concat(c)),a()(t=a()(n="".concat(l,"-")).call(n,o,"-")).call(t,c)},trim:function(e){return"string"==typeof e?e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""):e},messageFilter:function(e,t,n,r){1001===e.status.code&&(r||g.Z.success("成功"),t&&t())},getTableParam:function(e){var t={};return o()(e).call(e,(function(e,n){var r=e.split("-");t[r[1]]=r[2]})),t},setAlertControl:function(e){var t={},n=e.alert_control;return"1"===n?t.close=1:(t.close=0,e["alert_num_"+n]&&(t.times_after_close=e["alert_num_"+n]),e["recover_num_"+n]&&(t.close_after_long_time_reset_amount=e["recover_num_"+n],t.close_after_long_time_reset_unit=e["recover_unit_"+n])),t},getAlertControl:function(e){var t={alert_control:""};return 0===e.close&&(0!==e.times_after_close?(t.alert_control="2",t["alert_num_"+t.alert_control]=e.times_after_close):t.alert_control="3",""!==e.close_after_long_time_reset_amount&&("2"===t.alert_control&&(t.alert_control="4"),t["alert_num_"+t.alert_control]=e.times_after_close,t["recover_num_"+t.alert_control]=e.close_after_long_time_reset_amount,t["recover_unit_"+t.alert_control]=e.close_after_long_time_reset_unit)),t},filterOption:function(e,t){var n;return-1!==s()(n=t.props.children).call(n,e)},getParamsFromUrl:function(e){var t={},n=[],r="",a="",l=e.substring(s()(e).call(e,"?")+1,e.length).split("&");for(var o in l)r=(n=l[o].split("="))[0],a=n[1],t[r]=a;return t},jsonToQuery:function(e){var t;return e?function(e){for(var t=[],n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}(i()(t=v()(e)).call(t,(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])}))).join("&"):""},checkNullObj:function(e){return 0===v()(e).length},serviceCallback:function(e,t,n){0===e.data.code?(g.Z.success(t),n&&n()):g.Z.error(e.data.msg)},noAuthorityToDO:function(e,t){return!e[t]&&(g.Z.error("权限不足，请联系管理员!"),!0)},get k8sNamespace(){return d.get(p.E9.NAMESPACE)},setNaviKey:function(e,t){sessionStorage.setItem("firstLevelNav",e),sessionStorage.setItem("siderLevelNav",t)},formatGBUnit:function(e){return s()(e).call(e,"MB")>-1?_()(e.replace("MB",""))/1024:s()(e).call(e,"KB")>-1?_()(e.replace("KB",""))/1024/1024:s()(e).call(e,"GB")>-1?_()(e.replace("GB","")):s()(e).call(e,"TB")>-1?1024*_()(e.replace("TB","")):0}}}}]);
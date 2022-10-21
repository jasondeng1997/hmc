"use strict";(self.webpackChunkHMC=self.webpackChunkHMC||[]).push([[9616],{4243:(e,t,n)=>{n.d(t,{E9:()=>i,MD:()=>a,OY:()=>l,RI:()=>o,XN:()=>r});var a=[{text:"部署成功",value:"deployed"},{text:"部署失败",value:"deploy fail"},{text:"部署中",value:"deploying"},{text:"卸载失败",value:"undeploy fail"},{text:"卸载中",value:"undeploying"}],r=[{text:"更新成功",value:"success"},{text:"更新失败",value:"fail"},{text:"更新中",value:"update"}],l={hosts:["主机集群"],kubernetes:["Kubernetes集群（自建集群）","Kubernetes集群（导入已有集群）"]},o={hosts:{title:"主机安装会经过2个状态：管控安装-主机初始化，若某一步安装失败，请查看具体日志。",filters:[{text:"管控安装成功",value:"管控安装成功"},{text:"管控安装失败",value:"管控安装失败"},{text:"script安装成功",value:"script安装成功"},{text:"script安装失败",value:"script安装失败"},{text:"主机初始化成功",value:"主机初始化成功"},{text:"主机初始化失败",value:"主机初始化失败"}],finalStatus:3},kubernetes:{title:"Kubernetes集群主机安装会经过5个状态：管控安装-主机初始化-K8S Docker初始化-K8S Node初始化-K8S Node部署成功，若某一步安装失败，请查看具体日志",filters:[{text:"管控安装失败",value:"管控安装失败",status:-1},{text:"管控安装成功",value:"管控安装成功",status:1},{text:"主机初始化失败",value:"主机初始化失败",status:-3},{text:"主机初始化成功",value:"主机初始化成功",status:3},{text:"K8S DOCKER初始化失败",value:"K8S DOCKER初始化失败",status:-5},{text:"K8S DOCKER初始化成功",value:"K8S DOCKER初始化成功",status:5},{text:"K8S NODE初始化失败",value:"K8S NODE初始化失败",status:-6},{text:"K8S NODE初始化成功",value:"K8S NODE初始化成功",status:6},{text:"K8S NODE部署失败",value:"K8S NODE部署失败",status:-7},{text:"K8S NODE部署成功",value:"K8S NODE部署成功",status:7}],finalStatus:7}},i={NAMESPACE:"em_current_k8s_namespace"}},59616:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ie});var a=n(28760),r=n.n(a),l=n(80222),o=n.n(l),i=n(14418),c=n.n(i),s=n(8446),u=n.n(s),d=n(86),m=n.n(d),f=n(66870),g=n.n(f),p=n(29747),h=n.n(p),v=n(96718),_=n.n(v),S=n(44930),Z=n(68420),E=n(27344),y=n(5281),x=n(84441),b=n(3020),C=n(3362),w=n(44845),I=n(30222),D=n.n(I),K=n(39022),N=n.n(K),L=n(11189),O=n.n(L),k=n(28222),M=n.n(k),F=n(67294),R=n(29027),B=n(45360),A=n(30258),P=n(67908),$=n(60331),T=n(77268),q=n(8263),j=n(43663),z=n(36808),H=n(73126),U=n(69035),V=n(4107),G=n(31097);function W(e,t){var n=M()(e);if(o()){var a=o()(e);t&&(a=c()(a).call(a,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,a)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n,a,r=null!=arguments[t]?arguments[t]:{};t%2?m()(n=W(Object(r),!0)).call(n,(function(t){(0,w.Z)(e,t,r[t])})):g()?h()(e,g()(r)):m()(a=W(Object(r))).call(a,(function(t){_()(e,t,u()(r,t))}))}return e}function Q(e){var t=function(){if("undefined"==typeof Reflect||!r())return!1;if(r().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,C.Z)(e);if(t){var l=(0,C.Z)(this).constructor;n=r()(a,arguments,l)}else n=a.apply(this,arguments);return(0,b.Z)(this,n)}}var X=U.Z.Item,J={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:15}}},ee=function(e){(0,x.Z)(n,e);var t=Q(n);function n(){var e,a;(0,Z.Z)(this,n);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return a=t.call.apply(t,N()(e=[this]).call(e,l)),(0,w.Z)((0,y.Z)(a),"state",{modalLoading:!1}),(0,w.Z)((0,y.Z)(a),"handleSubmit",(function(){var e=a.props,t=e.form,n=e.clusterId,r=e.isEdit;t.validateFields((function(e,t){if(!e){a.setState({modalLoading:!0});var l=r?"updateImageStore":"createImageStore";j.$v[l](Y(Y({},t),{},{clusterId:n})).then((function(e){e=e.data,a.setState({modalLoading:!1}),0===e.code?(B.Z.success("执行成功"),a.props.getImageStoreList(),a.props.handleCancel()):B.Z.error(e.msg)}))}}))})),a}return(0,E.Z)(n,[{key:"render",value:function(){var e=this.state.modalLoading,t=this.props,n=t.imageStoreInfo,a=t.isEdit,r=t.form.getFieldDecorator;return F.createElement(A.Z,{title:"".concat(a?"编辑":"添加","仓库"),visible:!0,confirmLoading:e,onOk:this.handleSubmit,onCancel:this.props.handleCancel},F.createElement(U.Z,null,F.createElement(X,(0,H.Z)({label:"仓库名称"},J),r("name",{initialValue:a?n.name:"",rules:[{required:!0,message:"仓库名称不能为空"},{pattern:/^\S{1,64}$/,message:"除空格外，支持其他字符，最大长度不超过64"}]})(F.createElement(V.Z,{placeholder:"请输入仓库名称"}))),F.createElement(X,(0,H.Z)({label:"仓库别名"},J),r("alias",{initialValue:a?n.alias:"",rules:[{required:!0,message:"仓库别名不能为空"},{pattern:/^[a-z0-9]([-a-z0-9]{0,62}[a-z0-9])?$/,message:"支持小写字母、数字、中划线，且不以中划线开头或结尾，最大长度不超过64"}]})(F.createElement(V.Z,{placeholder:"请输入仓库别名"}))),F.createElement(X,(0,H.Z)({label:F.createElement("span",null,"仓库地址"," ",F.createElement(G.Z,{title:"http://docker.io"},F.createElement(P.Z,{type:"info-circle"})))},J),r("address",{initialValue:a?n.address:"",rules:[{required:!0,message:"仓库地址不能为空"},{pattern:/^[^\u4e00-\u9fa5\s]+$/,message:"不支持中文、空格"}]})(F.createElement(V.Z,{placeholder:"请输入仓库地址"}))),F.createElement(X,(0,H.Z)({label:"用户名"},J),r("username",{initialValue:a?n.username:"",rules:[{required:!0,message:"用户名不能为空"}]})(F.createElement(V.Z,{placeholder:"请输入用户名"}))),F.createElement(X,(0,H.Z)({label:"密码"},J),r("password",{initialValue:a?n.password:"",rules:[{required:!0,message:"密码不能为空"}]})(F.createElement(V.Z,{type:"password",placeholder:"请输入密码"}))),F.createElement(X,(0,H.Z)({label:"邮箱"},J),r("email",{initialValue:a?n.email:"",rules:[{pattern:/^\S+@\S+$/,message:"请输入正确的邮箱格式"}]})(F.createElement(V.Z,{type:"email",placeholder:"请输入邮箱"}))),F.createElement(X,{style:{display:"none"}},r("id",{initialValue:a?n.id:void 0})(F.createElement(V.Z,null)))))}}]),n}(F.PureComponent);const te=U.Z.create()(ee);var ne,ae=n(82193);function re(e,t){var n=M()(e);if(o()){var a=o()(e);t&&(a=c()(a).call(a,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,a)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n,a,r=null!=arguments[t]?arguments[t]:{};t%2?m()(n=re(Object(r),!0)).call(n,(function(t){(0,w.Z)(e,t,r[t])})):g()?h()(e,g()(r)):m()(a=re(Object(r))).call(a,(function(t){_()(e,t,u()(r,t))}))}return e}function oe(e){var t=function(){if("undefined"==typeof Reflect||!r())return!1;if(r().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,C.Z)(e);if(t){var l=(0,C.Z)(this).constructor;n=r()(a,arguments,l)}else n=a.apply(this,arguments);return(0,b.Z)(this,n)}}var ie=(0,R.$j)((function(e){return{cur_parent_cluster:e.HeaderStore.cur_parent_cluster,authorityList:e.UserCenterStore.authorityList}}),void 0)(ne=function(e){(0,x.Z)(n,e);var t=oe(n);function n(){var e,a;(0,Z.Z)(this,n);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return a=t.call.apply(t,N()(e=[this]).call(e,l)),(0,w.Z)((0,y.Z)(a),"state",{reqParams:{current:1,pageSize:10},imageStores:{list:[],count:0},tableLoading:!1,selectedRowKeys:[],showModal:!1,imageStoreInfo:{}}),(0,w.Z)((0,y.Z)(a),"getImageStoreList",(function(){var e=a.props.cur_parent_cluster;a.setState({tableLoading:!0});var t=(null==e?void 0:e.id)>0?null==e?void 0:e.id:+z.get("em_current_cluster_id");j.$v.getImageStoreList({cluster_id:t}).then((function(e){e=e.data,a.setState({tableLoading:!1}),0===e.code?a.setState({imageStores:e.data}):B.Z.error(e.msg)}))})),(0,w.Z)((0,y.Z)(a),"handleTableChange",(function(e,t,n){var r=le(le({},a.state.reqParams),{},{current:e.current});a.setState({reqParams:r})})),(0,w.Z)((0,y.Z)(a),"authorityControl",(function(e,t,n){var r=a.props.authorityList;if(!ae.Z.noAuthorityToDO(r,t))switch(e){case"add":a.handleShowModal();break;case"delete":a.handleDelete()}})),(0,w.Z)((0,y.Z)(a),"handleShowModal",(function(){var e=a.state,t=e.showModal,n=e.imageStoreInfo;a.setState({showModal:!t,imageStoreInfo:t?{}:n})})),(0,w.Z)((0,y.Z)(a),"editImageStore",(function(e,t){t.preventDefault(),j.$v.getImageStoreInfo({store_id:e.id}).then((function(e){0===(e=e.data).code?a.setState({imageStoreInfo:e.data},(function(){a.handleShowModal()})):B.Z.error(e.msg)}))})),(0,w.Z)((0,y.Z)(a),"selectChange",(function(e){a.setState({selectedRowKeys:e})})),(0,w.Z)((0,y.Z)(a),"handleDelete",(function(){var e,t=a.state.selectedRowKeys,n=void 0===t?[]:t;A.Z.confirm({title:"确定要删除该镜像仓库吗？",icon:F.createElement(P.Z,{type:"exclamation-circle",theme:"filled"}),onOk:(e=(0,S.Z)(D().mark((function e(){var t,r,l,o;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.$v.deleteImageStore({id:n});case 2:t=e.sent,r=t.data,l=r.code,o=r.msg,0===l?(B.Z.success("执行成功"),a.getImageStoreList()):B.Z.error(o);case 5:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)}),onCancel:function(){}})})),(0,w.Z)((0,y.Z)(a),"handleSetDefaultStore",(function(e){var t=a.props.cur_parent_cluster;j.$v.setDefaultStore({clusterId:t.id,id:e.id}).then((function(e){0===(e=e.data).code?(B.Z.success("更改默认仓库成功"),a.getImageStoreList()):B.Z.error("更改默认仓库失败")}))})),(0,w.Z)((0,y.Z)(a),"getColumns",(function(){var e=a.props.authorityList;return[{title:"仓库名称",dataIndex:"name"},{title:"仓库别名",dataIndex:"alias"},{title:"仓库地址",dataIndex:"address",render:function(e,t){return F.createElement("div",null,F.createElement("p",null,t.address),F.createElement("p",{className:"text-gray"},"用户名：",t.username))}},{title:"操作",dataIndex:"func",render:function(t,n){var r;return F.createElement(F.Fragment,null,e.image_store_edit?F.createElement("a",{onClick:O()(r=a.editImageStore).call(r,(0,y.Z)(a),n)},"编辑"):"--")}},{title:"",dataIndex:"is_default",render:function(t,n){var r;return F.createElement("div",{className:"set-default-box"},n.is_default?F.createElement($.Z,{color:"rgba(63, 135, 255, 0.1)"},"默认仓库"):F.createElement(F.Fragment,null,e.image_store_edit?F.createElement(T.Z,{type:"default",onClick:O()(r=a.handleSetDefaultStore).call(r,(0,y.Z)(a),n)},"设为默认仓库"):"--"))}}]})),a}return(0,E.Z)(n,[{key:"componentDidMount",value:function(){this.getImageStoreList()}},{key:"render",value:function(){var e=this,t=this.state,n=t.reqParams,a=t.imageStores,r=t.tableLoading,l=t.selectedRowKeys,o=void 0===l?[]:l,i=t.showModal,c=t.imageStoreInfo,s=this.props.cur_parent_cluster,u=this.getColumns(),d={pageSize:n.pageSize,total:a.count,current:n.current,size:"small",showTotal:function(e){return F.createElement("span",{style:{color:"#666666"}},"共",F.createElement("span",{style:{color:"#3F87FF"}},e),"条数据，每页显示",n.pageSize,"条")}},m={selectedRowKeys:o,onChange:this.selectChange};return F.createElement("div",{className:"cluster-page-body"},F.createElement("div",{className:"page-imagestore-header mb-12"},F.createElement(T.Z,{"data-testid":"add-btn",type:"primary",onClick:function(){return e.authorityControl("add","image_store_edit")}},"添加仓库")),F.createElement(q.Z,{rowKey:"id",className:"dt-table-fixed-contain-footer c-cluster__table",style:{height:"calc(100vh - 230px)"},columns:u,dataSource:a.list,pagination:d,loading:r,scroll:{y:!0},onChange:this.handleTableChange,rowSelection:m,footer:function(){return o.length?F.createElement(T.Z,{type:"danger",onClick:function(){return e.authorityControl("delete","image_store_edit")}},F.createElement("i",{className:"emicon emicon-delete"}),"删除"):F.createElement(T.Z,{disabled:!0},F.createElement("i",{className:"emicon emicon-delete"}),"删除")}}),i&&F.createElement(te,{handleCancel:this.handleShowModal,getImageStoreList:this.getImageStoreList,imageStoreInfo:c,clusterId:s.id,isEdit:!!M()(c).length}))}}]),n}(F.PureComponent))||ne},82193:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(39022),r=n.n(a),l=n(86),o=n.n(l),i=n(11882),c=n.n(i),s=n(97606),u=n.n(s),d=n(28222),m=n.n(d),f=n(2357),g=n.n(f),p=n(45360),h=n(36808),v=n(4243);const _={pageWidth:function(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)},pageHeight:function(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)},getParameterByName:function(e,t){t||(t=window.location.href),e=e.replace(/[[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},getBase64:function(e,t){var n=new FileReader;n.addEventListener("load",(function(){return t(n.result)})),n.readAsDataURL(e)},percent:function(e,t){return e&&e!==1/0?(e>1&&(e=1),t=t||2,t=Math.pow(10,t),Math.round(e*t*100)/t+"%"):"0%"},getCssText:function(e){var t="";for(var n in e)t+=n+":"+e[n]+";";return t},formateDateTime:function(e){var t,n,a,l,o;if(!e)return"";var i=new Date(e),c=i.getFullYear(),s=i.getMonth()+1+"",u=i.getDate()+"",d=i.getHours()+"",m=i.getMinutes()+"",f=i.getSeconds()+"";return 1===s.toString().length&&(s="0".concat(s)),1===u.toString().length&&(u="0".concat(u)),1===d.toString().length&&(d="0".concat(d)),1===m.toString().length&&(m="0".concat(m)),1===f.toString().length&&(f="0".concat(f)),r()(t=r()(n=r()(a=r()(l=r()(o="".concat(c,"-")).call(o,s,"-")).call(l,u," ")).call(a,d,":")).call(n,m,":")).call(t,f)},formateDate:function(e){var t,n;if(!e)return"";var a=new Date(e),l=a.getFullYear(),o=a.getMonth()+1+"",i=a.getDate()+"";return 1===o.toString().length&&(o="0".concat(o)),1===i.toString().length&&(i="0".concat(i)),r()(t=r()(n="".concat(l,"-")).call(n,o,"-")).call(t,i)},trim:function(e){return"string"==typeof e?e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""):e},messageFilter:function(e,t,n,a){1001===e.status.code&&(a||p.Z.success("成功"),t&&t())},getTableParam:function(e){var t={};return o()(e).call(e,(function(e,n){var a=e.split("-");t[a[1]]=a[2]})),t},setAlertControl:function(e){var t={},n=e.alert_control;return"1"===n?t.close=1:(t.close=0,e["alert_num_"+n]&&(t.times_after_close=e["alert_num_"+n]),e["recover_num_"+n]&&(t.close_after_long_time_reset_amount=e["recover_num_"+n],t.close_after_long_time_reset_unit=e["recover_unit_"+n])),t},getAlertControl:function(e){var t={alert_control:""};return 0===e.close&&(0!==e.times_after_close?(t.alert_control="2",t["alert_num_"+t.alert_control]=e.times_after_close):t.alert_control="3",""!==e.close_after_long_time_reset_amount&&("2"===t.alert_control&&(t.alert_control="4"),t["alert_num_"+t.alert_control]=e.times_after_close,t["recover_num_"+t.alert_control]=e.close_after_long_time_reset_amount,t["recover_unit_"+t.alert_control]=e.close_after_long_time_reset_unit)),t},filterOption:function(e,t){var n;return-1!==c()(n=t.props.children).call(n,e)},getParamsFromUrl:function(e){var t={},n=[],a="",r="",l=e.substring(c()(e).call(e,"?")+1,e.length).split("&");for(var o in l)a=(n=l[o].split("="))[0],r=n[1],t[a]=r;return t},jsonToQuery:function(e){var t;return e?function(e){for(var t=[],n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}(u()(t=m()(e)).call(t,(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])}))).join("&"):""},checkNullObj:function(e){return 0===m()(e).length},serviceCallback:function(e,t,n){0===e.data.code?(p.Z.success(t),n&&n()):p.Z.error(e.data.msg)},noAuthorityToDO:function(e,t){return!e[t]&&(p.Z.error("权限不足，请联系管理员!"),!0)},get k8sNamespace(){return h.get(v.E9.NAMESPACE)},setNaviKey:function(e,t){sessionStorage.setItem("firstLevelNav",e),sessionStorage.setItem("siderLevelNav",t)},formatGBUnit:function(e){return c()(e).call(e,"MB")>-1?g()(e.replace("MB",""))/1024:c()(e).call(e,"KB")>-1?g()(e.replace("KB",""))/1024/1024:c()(e).call(e,"GB")>-1?g()(e.replace("GB","")):c()(e).call(e,"TB")>-1?1024*g()(e.replace("TB","")):0}}}}]);
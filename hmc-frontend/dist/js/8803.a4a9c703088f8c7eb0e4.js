"use strict";(self.webpackChunkHMC=self.webpackChunkHMC||[]).push([[8803],{39100:(e,t,n)=>{n.r(t),n.d(t,{addHaRoleToHosts:()=>ae,clearGroupList:()=>Y,disableInstance:()=>ee,getALLProducts:()=>oe,getHealthCheck:()=>F,getHostConfig:()=>$,getHostsList:()=>X,getServiceConfigList:()=>se,getServiceGroup:()=>G,getServiceList:()=>J,modifyMultiAllHosts:()=>pe,modifyMultiSingleField:()=>ge,modifyProductConfigAll:()=>ve,operateExtension:()=>U,refreshProductAndService:()=>me,resetMultiServiceConfig:()=>fe,resetServiceConfig:()=>de,resetServices:()=>he,setConfigFile:()=>ce,setCurrentProduct:()=>ie,setCurrentService:()=>le,setRedService:()=>re,setResartServiceList:()=>W,setServiceConfigModify:()=>ue,setServiceGroupStart:()=>V,setServiceGroupStop:()=>j,setServiceRollRestartState:()=>_e,startInstance:()=>te,startService:()=>q,stopInstance:()=>ne,stopService:()=>z});var r=n(44845),a=n(86),o=n.n(a),i=n(39022),c=n.n(i),s=n(97606),l=n.n(s),u=n(28222),d=n.n(u),f=n(24278),v=n.n(f),p=n(25110),g=n.n(p),m=n(33733),_=n.n(m),h=n(19389),S=n.n(h),E=n(58309),y=n.n(E),Z=n(80222),C=n.n(Z),x=n(14418),T=n.n(x),R=n(8446),N=n.n(R),b=n(66870),L=n.n(b),I=n(29747),O=n.n(I),B=n(96718),D=n.n(B),A=n(45360),M=n(43663),k=n(66058);function H(e,t){var n=d()(e);if(C()){var r=C()(e);t&&(r=T()(r).call(r,(function(t){return N()(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n,a,i=null!=arguments[t]?arguments[t]:{};t%2?o()(n=H(Object(i),!0)).call(n,(function(t){(0,r.Z)(e,t,i[t])})):L()?O()(e,L()(i)):o()(a=H(Object(i))).call(a,(function(t){D()(e,t,N()(i,t))}))}return e}function P(e,t){var n=void 0!==_()&&S()(e)||e["@@iterator"];if(!n){if(y()(e)||(n=function(e,t){var n;if(!e)return;if("string"==typeof e)return w(e,t);var r=v()(n=Object.prototype.toString.call(e)).call(n,8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return g()(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var G=function(e,t,n,r){return function(a){M.BZ.getServiceGroup(e,r).then((function(e){0===(e=e.data).code?function(){var r=0,i="",s=[],u="sub0_0";if(n&&""!==n)for(var f in e.data.groups){var v;o()(v=e.data.groups[f]).call(v,(function(e,t){var a;e.service_name===n&&(i=e,u=c()(a="sub".concat(r,"_")).call(a,t));s.push("f".concat(r))})),r++}else{var p,g=sessionStorage.getItem("service_object");l()(p=d()(e.data.groups)).call(p,(function(t,n){if(0!==n||g||(i=e.data.groups[t][0]),g){var r,a="string"==typeof g?JSON.parse(g):{group:"",objectValue:""};if(t===a.group)l()(r=e.data.groups[t]).call(r,(function(e,t){var r;e.service_name===a.objectValue&&(i=e,u=c()(r="sub".concat(n,"_")).call(r,t))}));sessionStorage.removeItem("service_object")}s.push("f".concat(n))}))}if(!i&&1===s.length&&"f0"===s[0]&&"sub0_0"===u){var m=d()(e.data.groups)[0];i=m&&e.data.groups[m]&&e.data.groups[m][0]||""}t(i,s,u),a({type:k.S9.GET_SERVICE_GROUP,payload:e.data.groups})}():A.Z.error(e.msg)}))}},V=function(e,t){return function(n){M.BZ.setServiceGroupStart(e).then((function(e){Q(e,"",t,(function(){n({type:k.S9.UPDATE_SERVICE_LIST,payload:e.data})}))}))}},F=function(e){return function(t){M.BZ.getHealthCheck(e).then((function(e){var n=e.data;0===n.code?t({type:k.S9.GET_HEALTH_LIST,payload:n.data}):A.Z.error(n.msg)}))}},j=function(e,t){return function(n){M.BZ.setServiceGroupStop(e).then((function(e){Q(e,"",t,(function(){n({type:k.S9.UPDATE_SERVICE_LIST,payload:e.data})}))}))}},U=function(e,t){return function(t){M.BZ.operateExtension(e)}},W=function(e){return function(t){t({type:k.S9.GET_RESART_SERVICE,payload:e})}},Y=function(){return{type:k.S9.CLEAR_SERVICE_LIST}},J=function(e,t){return function(n){M.BZ.getServiceList(e).then((function(e){0===(e=e.data).code?(n({type:k.S9.GET_SERVICES,payload:e.data.services}),t(e.data.services[0])):A.Z.error(e.msg)}))}},X=function(e,t){var n=e.service_name;return function(r){M.BZ.getServiceHostsList(e).then((function(e){0===(e=e.data).code?(r({type:k.S9.GET_HOSTS,payload:{use_cloud:e.data.use_cloud,hosts:e.data.list,service:n}}),t&&t(e.data.use_cloud,e.data.list)):A.Z.error(e.msg)}))}},$=function(e,t){return function(n){M.BZ.getServiceHostConfig(e).then((function(e){0===(e=e.data).code?(n({type:k.S9.GET_HOST_CONFIG,payload:e.data.result}),t()):A.Z.error(e.msg)}))}},q=function(e,t){return function(){M.BZ.startService(e).then((function(e){Q(e,"服务启动成功！",t)}))}},z=function(e,t){return function(){M.BZ.stopService(e).then((function(e){Q(e,"服务关闭成功！",t)}))}};function Q(e,t,n,r){0===(e=e.data).code?(r&&r(),t&&A.Z.success(t)):A.Z.error(e.msg),n&&n()}var ee=function(e){var t=e.instance_index,n=e.service_name;return{type:k.S9.DISABLE_INSTANCE,payload:{instance_index:t,service_name:n}}},te=function(e,t){var n=e.service_name;return function(r){M.BZ.startServiceInstance(e).then((function(a){0===(a=a.data).code?(r({type:k.S9.START_INSTANCE,payload:{instance_index:e.instance_index,service_name:n}}),t&&t()):A.Z.error(a.msg)}))}},ne=function(e,t){var n=e.service_name;return function(r){M.BZ.stopServiceInstance(e).then((function(a){0===(a=a.data).code?(r({type:k.S9.STOP_INSTANCE,payload:{instance_index:e.instance_index,service_name:n}}),t()):A.Z.error(a.msg)}))}},re=function(e){return{type:k.S9.SET_RED_SERVICE,payload:e}},ae=function(e,t){return{type:k.S9.ADD_HA_ROLE,payload:{roles:e,service_name:t}}},oe=function(){return function(e){M.BZ.getProductList({limit:0}).then((function(t){if(0===(t=t.data).code){var n,r=[],a=P(t.data.list);try{for(a.s();!(n=a.n()).done;){var o=n.value;1===o.is_current_version&&r.push(o)}}catch(e){a.e(e)}finally{a.f()}e({type:k.S9.GET_ALL_PRODUCTS,payload:r})}}))}},ie=function(e){return{type:k.S9.SET_CURRENT_PRODUCT,payload:e}},ce=function(e){return{type:k.S9.SET_CONFIG_FILE,payload:e}},se=function(e,t){return function(n,r){var a=r().ServiceStore,i=a.cur_service,c=a.configFile,s=t||i;M.BZ.getServiceConfig(K(K({},e),{},{file:e.file||c})).then((function(e){var t=e.data,r=t.code,a=t.data,i=t.msg;if(0===r){var c={},l=(null==a?void 0:a.list)||[];o()(l).call(l,(function(e){c[e.config]=K(K({},e),{},{iconType:0})})),s.Config=c,n({type:k.S9.SET_CURRENT_SERVICE,payload:s})}else A.Z.error(i)}))}},le=function(e,t){return t?function(n){n(se(t,e))}:{type:k.S9.SET_CURRENT_SERVICE,payload:e}},ue=function(e){return{type:k.S9.SET_CONFIG_MODIFY,payload:{cur_service:e}}},de=function(e){var t=e.product_name,n=e.service_name;return function(r){M.BZ.resetServiceConfig({product_name:t,service_name:n,pid:e.pid,product_version:e.product_version,field_path:e.field_path}).then((function(t){0===(t=t.data).code?r(me(e)):A.Z.error(t.msg)}))}},fe=function(e){var t=e.product_name,n=e.service_name;return function(r){M.BZ.resetMultiServiceConfig({product_name:t,service_name:n,pid:e.pid,product_version:e.product_version,field_path:e.field_path,hosts:e.hosts}).then((function(t){0===(t=t.data).code?r(me(e)):A.Z.error(t.msg)}))}},ve=function(e,t){var n=e.product_name,r=e.service_name;return function(a){M.BZ.modifyProductConfigAll({product_name:n,service_name:r},t).then((function(t){0===(t=t.data).code?(A.Z.success("保存成功"),a(me(e))):A.Z.error(t.msg)}))}},pe=function(e,t){var n=e.product_name,r=e.service_name;return function(a){M.BZ.modifyMultiAllHosts({product_name:n,service_name:r},t).then((function(t){0===(t=t.data).code?(A.Z.success("保存成功"),a(me(e))):A.Z.error(t.msg)}))}},ge=function(e,t){var n=e.product_name,r=e.service_name;return function(a){M.BZ.modifyMultiAllHosts({product_name:n,service_name:r},t).then((function(t){0===(t=t.data).code?(A.Z.success("保存成功"),a(me(e))):A.Z.error(t.msg)}))}},me=function(e){var t=e.product_name,n=e.service_name;return function(r,a){var i=a().ServiceStore.configFile;M.BZ.getProductList({limit:0}).then((function(a){if(0===(a=a.data).code){var c,s=a.data.list,l=null,u=null,d=P(s);try{for(d.s();!(c=d.n()).done;){var f=c.value;if("product_version"in e){var v=e.product_version;f.product_name===t&&f.product_version===v&&(l=f)}else f.product_name===t&&(l=f)}}catch(e){d.e(e)}finally{d.f()}if(l)for(var p in l.product.Service)p===n&&(u=l.product.Service[p]);r({type:k.S9.REFRESH_PROD_SERVICE,payload:{products:s,cur_product:l,cur_service:u}}),M.BZ.getServiceConfig({product_name:t,service_name:n,product_version:l.product_version,file:i}).then((function(e){var t=e.data,n=t.code,a=t.data;if(0===n){var i=(void 0===a?{}:a).list,c=void 0===i?[]:i;o()(c).call(c,(function(e){u.Config[e.config]=e})),r({type:k.S9.SET_CURRENT_SERVICE,payload:u})}}))}else A.Z.error(a.msg)}))}},_e=function(e,t){return{type:k.S9.SWITCH_SERVICE_RESTART,payload:{service_name:e,isRestart:t}}},he=function(){return{type:k.S9.GET_SERVICES,payload:[]}}},97954:(e,t,n)=>{n.d(t,{Z:()=>I});var r=n(28222),a=n.n(r),o=n(80222),i=n.n(o),c=n(14418),s=n.n(c),l=n(8446),u=n.n(l),d=n(86),f=n.n(d),v=n(66870),p=n.n(v),g=n(29747),m=n.n(g),_=n(96718),h=n.n(_),S=n(44845),E=n(95266),y=n(67294),Z=n(97183),C=n(30258),x=n(11382),T=n(87763);n(94199);function R(e,t){var n=a()(e);if(i()){var r=i()(e);t&&(r=s()(r).call(r,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,r)}return n}var N=Z.Z.Sider,b=Z.Z.Content,L=null;const I=function(e){var t=e.visible,n=e.title,r=e.data,a=e.extra,o=e.handleCancle,i=e.handleSubmit,c=(0,y.useState)(!1),s=(0,E.Z)(c,2),l=s[0],d=s[1],v=939+(a?125:0),g=(0,y.useRef)(null),_={language:"yaml",folding:!0,readOnly:!0};return(0,y.useEffect)((function(){if(g.current){d(!0);var e=(0,E.Z)(r,2),t=e[0],n=e[1];L=T.editor.createDiffEditor(g.current,function(e){for(var t=1;t<arguments.length;t++){var n,r,a=null!=arguments[t]?arguments[t]:{};t%2?f()(n=R(Object(a),!0)).call(n,(function(t){(0,S.Z)(e,t,a[t])})):p()?m()(e,p()(a)):f()(r=R(Object(a))).call(r,(function(t){h()(e,t,u()(a,t))}))}return e}({},_)),d(!1);var a=T.editor.createModel(t,"text/plain"),o=T.editor.createModel(n,"text/plain");L.setModel({original:a,modified:o})}}),[g.current]),(0,y.useEffect)((function(){if(L){var e=(0,E.Z)(r,2),t=e[0],n=e[1],a=L.getModel(),o=a.original,i=a.modified;(null==o?void 0:o.getValue())!==t&&(null==o||o.setValue(t||"")),(null==i?void 0:i.getValue())!==n&&(null==i||i.setValue(n||""))}}),[L,r]),y.createElement(C.Z,{className:"code-diff__wrapper",title:n,width:v,visible:t,onCancel:o,onOk:i},y.createElement(Z.Z,null,a&&y.createElement(N,{width:125},a),y.createElement(b,null,y.createElement("div",{className:"ace-title"},y.createElement("div",{className:"title"},"当前版本"),y.createElement("div",{className:"title"},"最新修改")),y.createElement(x.Z,{spinning:l,tip:"正在初始化..."},y.createElement("div",{ref:g,style:{height:500}})))))}},40448:(e,t,n)=>{n.d(t,{Z:()=>D});var r=n(28760),a=n.n(r),o=n(68420),i=n(27344),c=n(5281),s=n(84441),l=n(3020),u=n(3362),d=n(44845),f=n(11882),v=n.n(f),p=n(80040),g=n.n(p),m=n(86),_=n.n(m),h=n(24278),S=n.n(h),E=n(97606),y=n.n(E),Z=n(81607),C=n.n(Z),x=n(67294),T=n(34041),R=n(45360),N=n(31097),b=n(4107),L=n(67908),I=n(98396);function O(e){var t=function(){if("undefined"==typeof Reflect||!a())return!1;if(a().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;n=a()(r,arguments,o)}else n=r.apply(this,arguments);return(0,l.Z)(this,n)}}var B=T.Z.Option,D=function(e){(0,s.Z)(n,e);var t=O(n);function n(e){var r;return(0,o.Z)(this,n),r=t.call(this,e),(0,d.Z)((0,c.Z)(r),"state",{first_logfile:"",second_logfile:"",show_second_select:!1,second_logs:[],log_message:"",lineNum:"200",searchText:"",sourceText:""}),(0,d.Z)((0,c.Z)(r),"handleMenu1Click",(function(e){var t=(0,c.Z)(r),n=r.props.serviceid;v()(e).call(e,"*")>-1?I.get("/api/v2/instance/".concat(n,"/log"),{logfile:e.replace(/\s+/g,""),is_match:!1}).then((function(n){var r,a,o;0===(n=n.data).code?t.setState({first_logfile:e,second_logs:null===(r=n)||void 0===r||null===(a=r.data)||void 0===a||null===(o=a.result)||void 0===o?void 0:o.replace(/\s+/g,"").split(","),show_second_select:!0}):R.Z.error(n.msg)})):I.get("/api/v2/instance/".concat(n,"/log"),{logfile:e,is_match:!0}).then((function(n){0===(n=n.data).code?(t.setState({first_logfile:e,show_second_select:!1,sourceText:n.data.result}),r.setLogMessage(n.data.result,!0)):R.Z.error(n.msg)}))})),(0,d.Z)((0,c.Z)(r),"handleMenu2Click",(function(e){var t=(0,c.Z)(r),n=r.props.serviceid;I.get("/api/v2/instance/".concat(n,"/log"),{logfile:e,is_match:!0,tail_num:r.state.lineNum}).then((function(n){0===(n=n.data).code?(t.setState({second_logfile:e,show_second_select:!0,sourceText:n.data.result}),r.setLogMessage(n.data.result)):R.Z.error(n.msg)}))})),(0,d.Z)((0,c.Z)(r),"handleRefreshLogs",(function(){var e=r.props.serviceid,t=r.state.first_logfile;(g()(r.state.lineNum)>1e3||g()(r.state.lineNum)<0)&&R.Z.error("行数只能位于0-1000之间"),r.state.second_logfile&&(t=r.state.second_logfile),I.get("/api/v2/instance/".concat(e,"/log"),{logfile:t,is_match:!0,tail_num:r.state.lineNum}).then((function(e){0===(e=e.data).code?(r.setState({sourceText:e.data.result}),r.setLogMessage(e.data.result,!0)):R.Z.error(e.msg)}))})),(0,d.Z)((0,c.Z)(r),"handleLineNumChange",(function(e){r.setState({lineNum:e.target.value})})),(0,d.Z)((0,c.Z)(r),"handleSearchChange",(function(e){var t=e.toLowerCase();if(r.setState({searchText:e}),""!==e){var n=r.state.sourceText.toLocaleLowerCase().split(t),a=[];_()(n).call(n,(function(e){a.push(e.length)}));var o=[],i=0;_()(a).call(a,(function(t){o.push(i+t),i+=t+e.length}));for(var c="",s="",l=r.state.sourceText,u=0,d=0;d<o.length;d++)s=S()(l).call(l,o[d],o[d]+e.length),s='<span style="color: red">'.concat(s,"</span>"),c+=S()(l).call(l,u,o[d])+s,u=o[d]+e.length;r.setLogMessage(c)}else r.setLogMessage(r.state.sourceText)})),(0,d.Z)((0,c.Z)(r),"setLogMessage",(function(e,t){document.getElementById("textPre").innerHTML=e,t&&document.getElementsByClassName("log-message-box").length>0&&document.getElementsByClassName("log-message-box")[0].scrollTo(0,document.getElementById("textPre").offsetHeight),r.setState({log_message:e})})),r}return(0,i.Z)(n,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props.logs,t=this.state,n=t.first_logfile,r=t.second_logfile,a=t.second_logs,o=void 0===a?[]:a;return x.createElement("div",{className:"logtail-box"},x.createElement("div",{className:"option-bar",style:{display:"flex"}},x.createElement(T.Z,{style:{height:26,minWidth:150,marginBottom:10},value:n,onChange:this.handleMenu1Click},y()(e).call(e,(function(e,t){return x.createElement(B,{key:t+"",value:e},x.createElement(N.Z,{key:t+"",title:e},e))}))),x.createElement("div",{style:this.state.show_second_select?{display:"inline-block",marginLeft:8}:{display:"none"}},x.createElement(T.Z,{style:{height:26,minWidth:150,maxWidth:300,marginBottom:10},value:r,onChange:this.handleMenu2Click},y()(o).call(o,(function(e,t){return x.createElement(B,{key:t+"",value:e},x.createElement(N.Z,{key:t+"",title:C()(e).call(e)},C()(e).call(e)))})))),x.createElement(b.Z,{placeholder:"输入日志行数，“0-1000”之间",onPressEnter:this.handleRefreshLogs,style:{height:26,width:230,marginLeft:8,marginBottom:10},onChange:this.handleLineNumChange,addonAfter:x.createElement(L.Z,{style:{cursor:"pointer"},onClick:this.handleRefreshLogs,type:"reload"})}),x.createElement(b.Z.Search,{placeholder:"输入关键词",style:{height:26,width:179,marginLeft:10,marginBottom:10},onSearch:this.handleSearchChange})),x.createElement("div",{className:"log-message-box",style:{height:"400px",paddingTop:"10px",overflowY:"auto",backgroundColor:"#F5F5F5",border:"1px dashed #DDDDDD"}},x.createElement("span",null,x.createElement("pre",{id:"textPre",style:{paddingLeft:10}}))))}}]),n}(x.Component)},4243:(e,t,n)=>{n.d(t,{E9:()=>c,MD:()=>r,OY:()=>o,RI:()=>i,XN:()=>a});var r=[{text:"部署成功",value:"deployed"},{text:"部署失败",value:"deploy fail"},{text:"部署中",value:"deploying"},{text:"卸载失败",value:"undeploy fail"},{text:"卸载中",value:"undeploying"}],a=[{text:"更新成功",value:"success"},{text:"更新失败",value:"fail"},{text:"更新中",value:"update"}],o={hosts:["主机集群"],kubernetes:["Kubernetes集群（自建集群）","Kubernetes集群（导入已有集群）"]},i={hosts:{title:"主机安装会经过2个状态：管控安装-主机初始化，若某一步安装失败，请查看具体日志。",filters:[{text:"管控安装成功",value:"管控安装成功"},{text:"管控安装失败",value:"管控安装失败"},{text:"script安装成功",value:"script安装成功"},{text:"script安装失败",value:"script安装失败"},{text:"主机初始化成功",value:"主机初始化成功"},{text:"主机初始化失败",value:"主机初始化失败"}],finalStatus:3},kubernetes:{title:"Kubernetes集群主机安装会经过5个状态：管控安装-主机初始化-K8S Docker初始化-K8S Node初始化-K8S Node部署成功，若某一步安装失败，请查看具体日志",filters:[{text:"管控安装失败",value:"管控安装失败",status:-1},{text:"管控安装成功",value:"管控安装成功",status:1},{text:"主机初始化失败",value:"主机初始化失败",status:-3},{text:"主机初始化成功",value:"主机初始化成功",status:3},{text:"K8S DOCKER初始化失败",value:"K8S DOCKER初始化失败",status:-5},{text:"K8S DOCKER初始化成功",value:"K8S DOCKER初始化成功",status:5},{text:"K8S NODE初始化失败",value:"K8S NODE初始化失败",status:-6},{text:"K8S NODE初始化成功",value:"K8S NODE初始化成功",status:6},{text:"K8S NODE部署失败",value:"K8S NODE部署失败",status:-7},{text:"K8S NODE部署成功",value:"K8S NODE部署成功",status:7}],finalStatus:7}},c={NAMESPACE:"em_current_k8s_namespace"}},8842:(e,t,n)=>{e.exports=n.p+"images/bf61eaa0f9a5e8eb8131.png"}}]);
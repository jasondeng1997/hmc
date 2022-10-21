"use strict";(self.webpackChunkHMC=self.webpackChunkHMC||[]).push([[6471],{62158:(e,t,n)=>{n.r(t),n.d(t,{getClusterList:()=>M,getClusterProductList:()=>I,getInstanceList:()=>H,getParentProductList:()=>L,getProductList:()=>D,getServiceGroupList:()=>O,setCurrentParentCluster:()=>G,setCurrentParentProduct:()=>B,setCurrentProduct:()=>K});var r=n(80040),a=n.n(r),l=n(86),o=n.n(l),c=n(28222),i=n.n(c),s=n(51679),u=n.n(s),d=n(87198),m=n.n(d),p=n(76986),f=n.n(p),v=n(24278),_=n.n(v),h=n(25110),g=n.n(h),y=n(33733),E=n.n(y),S=n(19389),w=n.n(S),C=n(58309),Z=n.n(C),N=n(45360),b=n(43663),x=n(66058),P=n(98396),k=n(36808),F=n(4243),R=n(82193);function A(e,t){var n=void 0!==E()&&w()(e)||e["@@iterator"];if(!n){if(Z()(e)||(n=function(e,t){var n;if(!e)return;if("string"==typeof e)return T(e,t);var r=_()(n=Object.prototype.toString.call(e)).call(n,8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return g()(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,l=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw l}}}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var L=function(e){return function(t){b.t6.getParentProductList({limit:0}).then((function(n){if(0===(n=n.data).code){var r={name:n.data[0],list:n.dsta},l=-1;if(e){for(var o in n.data)n.data[o]===e&&(l=a()(o,10));r.name=l>-1?n.data[l]:n.data[0]}k.set("em_current_parent_product",r.name),t({type:x.kP.GET_PARENT_PROD_LIST,payload:r})}}))}},I=function(){return function(e){b.t6.getClusterProductList({limit:0}).then((function(t){if(0===(t=t.data).code){var n,r,a,l,c,s,d,p=k.get("em_current_parent_product")||"DTinsight",v=k.get("em_current_cluster_id"),_={};if(v){var h,g,y=u()(h=t.data).call(h,(function(e){return+e.clusterId==+v}));if(_=y||t.data[0],!y&&"kubernetes"===(null===(g=_)||void 0===g?void 0:g.clusterType)){var E=N.Z.loading("正在跳转默认集群...",0);m()(E,2500),R.Z.setNaviKey("menu_ops_center","sub_menu_service"),window.location.href="/opscenter/service"}}else _=t.data[0];var S,w,C,Z=function(e,t,n){if(0===n)return k.set(F.E9.NAMESPACE,""),e||t[0];var r,a=!1;if(o()(r=i()(t)).call(r,(function(n){var r;o()(r=t[n]||[]).call(r,(function(t){a||t!==e||k.get(F.E9.NAMESPACE)||(a=!0,k.set(F.E9.NAMESPACE,n))}))})),a||k.get(F.E9.NAMESPACE))return e;var l=i()(t)[0];return k.set(F.E9.NAMESPACE,l),t[i()(t)[0]][0]}(p,(null===(n=_)||void 0===n?void 0:n.subdomain)||{},null===(r=_)||void 0===r?void 0:r.mode);if(null!==(a=_)&&void 0!==a&&a.clusterId)if(k.set("em_current_cluster_id",(null===(S=_)||void 0===S?void 0:S.clusterId)||-1),k.set("em_current_cluster_type",null===(w=_)||void 0===w?void 0:w.clusterType),k.set("em_current_parent_product",Z),"kubernetes"===(null===(C=_)||void 0===C?void 0:C.clusterType)){var b,P=i()(null===(b=_)||void 0===b?void 0:b.subdomain);k.set("em_current_k8s_namespace",P[0])}e({type:x.kP.GET_PARENT_PROD_LIST,payload:f()({},{name:Z||"选择产品",list:t.data,cluster:{id:(null===(l=_)||void 0===l?void 0:l.clusterId)||-1,name:(null===(c=_)||void 0===c?void 0:c.clusterName)||"选择集群",type:(null===(s=_)||void 0===s?void 0:s.clusterType)||"hosts",mode:(null===(d=_)||void 0===d?void 0:d.mode)||0}})})}}))}},D=function(){return function(e){P.get("/api/v2/product",{limit:0}).then((function(t){var n=[];if(0===(t=t.data).code){var r,a=A(t.data.list);try{for(a.s();!(r=a.n()).done;){var l=r.value;1===l.is_current_version&&n.push(l)}}catch(e){a.e(e)}finally{a.f()}e({type:x.kP.SET_PRODUCT_LIST,payload:n})}else N.Z.error(t.msg)}))}},K=function(e){return{type:x.kP.SET_CUR_PRODUCT,payload:e}},B=function(e){return{type:x.kP.SET_CUR_PARENT_PROD,payload:e}},O=function(){return function(e){P.get("/api/container/getCluster",{}).then((function(t){for(var n=(t=t.data).result.data||[],r=0,a=n.length;r<a;r++){for(var l=n[r].services,o=[],c=0,i=l.length;c<i;c++){var s=l[c],u=s.name.toLowerCase();"rabbitmq"!==u&&"mysql"!==u&&o.push(s)}n[r].services=o}e({type:x.kP.GET_S_G_LIST,payload:n})}))}},H=function(){return function(e){P.get("/api/container/queryContainer",{pageSize:200}).then((function(t){t=t.data,e({type:x.kP.GET_INSTANCE_LIST,payload:t.result.data})}))}},M=function(e){return function(e){b.t6.getClusterList({type:void 0,"sort-by":"id","sort-dir":"desc",limit:0,start:0}).then((function(t){if(0===(t=t.data).code){var n;e({type:x.kP.GET_PARENT_CLUSTER_LIST,payload:t.data.clusters});var r=t.data.clusters[0],a=k.get("em_current_cluster_id"),l=a&&u()(n=t.data.clusters).call(n,(function(e){return e.id===+a}))||r;e({type:x.kP.SET_CUR_PARENT_CLUSTER,payload:l}),k.set("em_current_cluster_id",l.id),k.set("em_current_cluster_type",l.type)}else N.Z.error(t.msg)}))}},G=function(e){return{type:x.kP.SET_CUR_PARENT_CLUSTER,payload:e}}},32518:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(95266),a=n(58309),l=n.n(a),o=n(86),c=n.n(o),i=n(24278),s=n.n(i),u=n(97606),d=n.n(u),m=n(67294),p=n(24105),f=n(31097),v=n(60331),_=n(8263),h=n(94184),g=n.n(h),y=n(96486),E=p.Z.Panel;const S=function(e){var t=m.useState({}),n=(0,r.Z)(t,2),a=n[0],o=n[1],i=e.className,u=e.paneKeyName,h=void 0===u?"product_name":u,S=e.activeKey,w=e.onChange,C=e.serviceList,Z=e.serviceGroup;m.useEffect((function(){var e,t,n,r;l()(Z)&&Z.length&&(e=Z,n=["blue","purple","green","magenta","orange","cyan","volcano","lime","gold","geekblue","red"],r={},c()(t=(0,y.uniq)(e)).call(t,(function(e,t){var a=n.length;r[e]=t<a?n[t]:n[t-a]})),o(r))}),[Z]);var N=[{dataIndex:"service_name",key:"service_name",width:"26%",render:e.serviceNameRender||function(e){return m.createElement(f.Z,{placement:"right",title:e},e.length>12?s()(e).call(e,0,10)+"...":e)}},{dataIndex:"status",key:"status",width:70,render:function(e,t){return m.createElement("div",null,"正常"===e?m.createElement(v.Z,{className:"table_avatar",color:"#12BC6A"},t.status_count):m.createElement(v.Z,{className:"table_avatar",color:"#EF5350"},t.status_count),e)}},{dataIndex:"health_state",key:"health_state",width:85,render:function(e,t){var n=e>0||"healthy"===e?{text:"健康",color:"#12BC6A"}:{text:"不健康",color:"#FFB310"};return m.createElement("div",null,m.createElement(v.Z,{className:"table_avatar",color:n.color},t.health_state_count),n.text)}},{dataIndex:"group",width:68,key:"group",render:function(e){return m.createElement(f.Z,{placement:"right",title:e},m.createElement(v.Z,{className:"table_group",color:a[e]},m.createElement("div",{className:"table_group_div"},e)))}}];return m.createElement(p.Z,{className:g()("c-overview__ant-collapse",i),activeKey:S,onChange:w},d()(C).call(C,(function(t,n){return m.createElement(E,{key:t[h],header:m.createElement(m.Fragment,null,m.createElement("i",{className:"emicon emicon-folder-anticon mr-8",style:{color:t.service_count&&"healthy"!==t.service_status?"#FF5F5C":"#12BC6A"}}),t.product_name)},t.service_count?m.createElement(_.Z,{rowKey:"service_name",size:"small",className:"c-overview_ant-table",rowClassName:function(){return"c-overview_row-trigger"},style:{background:"#fff"},columns:N,dataSource:t.service_list,pagination:!1,showHeader:!1,onRow:function(n){return{onClick:function(r){return e.onTableRowClick(n,t)}}}}):m.createElement("div",{className:"service-normal"},m.createElement("i",{className:"emicon emicon-health_service",style:{color:"#12BC6A"}}),m.createElement("p",null,"服务全部正常")))})))}},4243:(e,t,n)=>{n.d(t,{E9:()=>c,MD:()=>r,OY:()=>l,RI:()=>o,XN:()=>a});var r=[{text:"部署成功",value:"deployed"},{text:"部署失败",value:"deploy fail"},{text:"部署中",value:"deploying"},{text:"卸载失败",value:"undeploy fail"},{text:"卸载中",value:"undeploying"}],a=[{text:"更新成功",value:"success"},{text:"更新失败",value:"fail"},{text:"更新中",value:"update"}],l={hosts:["主机集群"],kubernetes:["Kubernetes集群（自建集群）","Kubernetes集群（导入已有集群）"]},o={hosts:{title:"主机安装会经过2个状态：管控安装-主机初始化，若某一步安装失败，请查看具体日志。",filters:[{text:"管控安装成功",value:"管控安装成功"},{text:"管控安装失败",value:"管控安装失败"},{text:"script安装成功",value:"script安装成功"},{text:"script安装失败",value:"script安装失败"},{text:"主机初始化成功",value:"主机初始化成功"},{text:"主机初始化失败",value:"主机初始化失败"}],finalStatus:3},kubernetes:{title:"Kubernetes集群主机安装会经过5个状态：管控安装-主机初始化-K8S Docker初始化-K8S Node初始化-K8S Node部署成功，若某一步安装失败，请查看具体日志",filters:[{text:"管控安装失败",value:"管控安装失败",status:-1},{text:"管控安装成功",value:"管控安装成功",status:1},{text:"主机初始化失败",value:"主机初始化失败",status:-3},{text:"主机初始化成功",value:"主机初始化成功",status:3},{text:"K8S DOCKER初始化失败",value:"K8S DOCKER初始化失败",status:-5},{text:"K8S DOCKER初始化成功",value:"K8S DOCKER初始化成功",status:5},{text:"K8S NODE初始化失败",value:"K8S NODE初始化失败",status:-6},{text:"K8S NODE初始化成功",value:"K8S NODE初始化成功",status:6},{text:"K8S NODE部署失败",value:"K8S NODE部署失败",status:-7},{text:"K8S NODE部署成功",value:"K8S NODE部署成功",status:7}],finalStatus:7}},c={NAMESPACE:"em_current_k8s_namespace"}},46471:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var r=n(28760),a=n.n(r),l=n(68420),o=n(27344),c=n(5281),i=n(84441),s=n(3020),u=n(3362),d=n(44845),m=n(39022),p=n.n(m),f=n(14418),v=n.n(f),_=n(82737),h=n.n(_),g=n(86),y=n.n(g),E=n(25110),S=n.n(E),w=n(58309),C=n.n(w),Z=n(2578),N=n.n(Z),b=n(67294),x=n(30381),P=n.n(x),k=n(97779),F=n(29027),R=n(62158),A=n(43663),T=n(45360),L=n(38272),I=n(72413),D=n(67908);function K(e){var t=function(){if("undefined"==typeof Reflect||!a())return!1;if(a().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var l=(0,u.Z)(this).constructor;n=a()(r,arguments,l)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}const B=function(e){(0,i.Z)(r,e);var t=K(r);function r(){var e,n;(0,l.Z)(this,r);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=t.call.apply(t,p()(e=[this]).call(e,o)),(0,d.Z)((0,c.Z)(n),"state",{isFullScreen:!1}),(0,d.Z)((0,c.Z)(n),"handleFullScreen",(function(){n.state.isFullScreen?(n.setState({isFullScreen:!1}),n.exitFullscreen()):n.requestFullScreen()})),(0,d.Z)((0,c.Z)(n),"requestFullScreen",(function(){n.setState({isFullScreen:!0});var e=document.getElementById(n.props.idName);e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen&&e.webkitRequestFullScreen()})),(0,d.Z)((0,c.Z)(n),"exitFullscreen",(function(){var e=document;e.exitFullscreen?e.exitFullscreen():e.mozCancelFullScreen?e.mozCancelFullScreen():e.webkitCancelFullScreen&&e.webkitCancelFullScreen()})),(0,d.Z)((0,c.Z)(n),"watchFullScreen",(function(){var e=(0,c.Z)(n),t=document;document.addEventListener("fullscreenchange",(function(){e.setState({isFullScreen:t.fullscreen})}),!1),document.addEventListener("webkitfullscreenchange",(function(){e.setState({isFullScreen:t.webkitIsFullScreen})}),!1),document.addEventListener("mozfullscreenchange",(function(){e.setState({isFullScreen:t.mozFullScreen})}),!1)})),n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){this.watchFullScreen()}},{key:"render",value:function(){return this.state.isFullScreen?b.createElement("span",{onClick:this.handleFullScreen},b.createElement("img",{src:n(39542),style:{width:"40px"}})):b.createElement("span",{onClick:this.handleFullScreen},b.createElement("img",{src:n(7138),style:{width:"40px"}}))}}]),r}(b.Component);var O,H=n(32518),M=n(82193);function G(e){var t=function(){if("undefined"==typeof Reflect||!a())return!1;if(a().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var l=(0,u.Z)(this).constructor;n=a()(r,arguments,l)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}const U=(0,F.$j)((function(e){return{HeaderStore:e.HeaderStore}}),(function(e){return{actions:(0,k.DE)(R,e)}}))(O=function(e){(0,i.Z)(r,e);var t=G(r);function r(e){var n;return(0,l.Z)(this,r),n=t.call(this,e),(0,d.Z)((0,c.Z)(n),"state",{homeurl:"-1",playUrl:"",serviceList:[],collapseKey:[],showRight:!1,serviceProduct:[],serviceGroup:[],list:[],cur_tag:0}),(0,d.Z)((0,c.Z)(n),"handlerClickList",(function(e){var t,r,a=n.props.HeaderStore;M.Z.setNaviKey("menu_deploy_center","sub_menu_dashboard"),n.props.history.push(p()(t=p()(r="/deploycenter/monitoring/dashdetail?url=".concat(e.url,"&panelId=")).call(r,e.panelId,"&var-cluster=")).call(t,a.cur_parent_cluster.name))})),(0,d.Z)((0,c.Z)(n),"getProductHomeUrl",(function(e){var t=(0,c.Z)(n);A.BZ.getServiceDashPlaylists().then((function(n){if(n=n.data){var r,a,l,o=v()(n).call(n,(function(t){return t.name==="".concat(e.cur_parent_product,"_index")}))||[];t.setState({homeurl:o.length?p()(r=p()(a=p()(l="".concat(window.location.protocol,"//")).call(l,window.location.hostname,":")).call(a,window.APPCONFIG.GRAFANA_PORT,"/grafana/playlists/play/")).call(r,o[0].id):"-1"})}else t.setState({homeurl:"-1"})})).catch((function(e){T.Z.error(e)}))})),(0,d.Z)((0,c.Z)(n),"handleShow",(function(){var e=n.state.showRight;e?(document.getElementById("container_left").style.display="inline-block",document.getElementById("container_right").className="container_right"):(document.getElementById("container_left").style.display="none",document.getElementById("container_right").className+=" container_right_all"),n.setState({showRight:!e})})),(0,d.Z)((0,c.Z)(n),"getProductComponents",(function(e){var t=n.props.HeaderStore.cur_parent_product,r=new(h());A.BZ.getProductList({limit:0,parentProductName:t}).then((function(e){if(0===(e=e.data).code){var t=e.data.list||[];y()(t).call(t,(function(e){r.add(e.product_name)})),n.setState({serviceProduct:S()(r),cur_tag:0},(function(){n.handleTagsChange(0)}))}else T.Z.error(e.msg)}))})),(0,d.Z)((0,c.Z)(n),"handleTagsChange",(function(e){var t={parentProductName:n.props.HeaderStore.cur_parent_product,limit:0};n.setState({cur_tag:Number(e),serviceList:[]},(function(){A.BZ.getServiceStatus(t).then((function(e){if(0===(e=e.data).code){var t=e.data.list,r=[],a=new(h()),l=[];null!=t&&t!=[]?(y()(t).call(t,(function(e,t){var n;C()(e.service_list)&&y()(n=e.service_list).call(n,(function(e){a.add(e.group)})),e.service_count&&r.push(e.product_name)})),l=S()(a),n.setState({serviceGroup:l}),n.setState({serviceList:e.data.list,collapseKey:r})):n.setState({serviceList:[],serviceGroup:l,collapseKey:[]})}else T.Z.error(e.msg),n.setState({serviceList:[]})}))}))})),(0,d.Z)((0,c.Z)(n),"onTableRowClick",(function(e,t){var r,a;M.Z.setNaviKey("menu_ops_center","sub_menu_service"),n.props.history.push(p()(r=p()(a="/opscenter/service?component=".concat(t.product_name,"&service_group=")).call(a,e.group,"&service=")).call(r,e.service_name))})),(0,d.Z)((0,c.Z)(n),"handleGetAlertRuleList",(function(e){var t=(0,c.Z)(n);A.jN.getAlertsByDashId(e).then((function(e){t.setState({list:C()(e.data)?e.data:[]})}))})),n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){this.getProductHomeUrl(this.props.HeaderStore),this.getProductComponents(),this.handleGetAlertRuleList({state:"not_ok",query:"",dashboardTag:this.props.HeaderStore.cur_parent_product})}},{key:"componentDidUpdate",value:function(e){this.props.HeaderStore.cur_parent_product!==e.HeaderStore.cur_parent_product&&(this.getProductHomeUrl(this.props.HeaderStore),this.getProductComponents(),this.handleGetAlertRuleList({state:"not_ok",query:"",dashboardTag:this.props.HeaderStore.cur_parent_product}))}},{key:"render",value:function(){var e,t,r=this,a=this.state,l=a.showRight,o=a.serviceGroup,c=a.serviceList,i=void 0===c?[]:c,s=a.list,u=a.homeurl;return N()(s).call(s,(function(e,t){return e.newStateDate<t.newStateDate?1:-1})),b.createElement("div",{id:"index_page",className:"index-page-container"},b.createElement("div",{className:"div_fullscreen"},b.createElement(B,{idName:"index_page"})),b.createElement("div",{className:"arrow_container",style:{height:document.body.clientHeight-88}},b.createElement("div",{className:"arrow_left",onClick:this.handleShow},l?b.createElement("img",{src:n(9158),className:"arrow_img"}):b.createElement("img",{src:n(96636),className:"arrow_img"}))),b.createElement("div",{id:"container_left"},b.createElement(H.Z,{className:"c-indexpage__overview ant-collapse-no-border box-shadow-style mb-20",activeKey:this.state.collapseKey,onChange:function(e){return r.setState({collapseKey:e})},serviceList:i,serviceGroup:o,onTableRowClick:this.onTableRowClick}),b.createElement("div",null,b.createElement("p",{className:"text-title-bold"},"Alert"),b.createElement(L.Z,{itemLayout:"horizontal",dataSource:s,className:"page_container_list box-shadow-style",size:"small",renderItem:function(e){return"alerting"===e.state?b.createElement(L.Z.Item,{onClick:function(t){return r.handlerClickList(e)}},b.createElement(L.Z.Item.Meta,{avatar:b.createElement(I.Z,{style:{backgroundColor:"#fff",fontSize:"20px",color:"red"}},b.createElement(D.Z,{type:"bell",theme:"filled"})),title:e.name,description:b.createElement("p",null,b.createElement("span",{style:{color:"red",marginRight:"5px"}},e.state.toUpperCase()),P()(e.newStateDate).fromNow())})):b.createElement(L.Z.Item,{onClick:function(t){return r.handlerClickList(e)}},b.createElement(L.Z.Item.Meta,{avatar:b.createElement(I.Z,{style:{backgroundColor:"#fff",fontSize:"20px",color:"#F5A841"}},b.createElement(D.Z,{type:"exclamation-circle",theme:"filled"})),title:e.name,description:b.createElement("p",null,b.createElement("span",{style:{color:"#F5A841",marginRight:"5px"}},e.state.toUpperCase())," ",P()(e.newStateDate).fromNow())}))}}))),b.createElement("div",{id:"container_right",className:"container_right",style:{height:document.body.clientHeight+108}},"-1"===u?b.createElement("div",{style:{minHeight:document.body.clientHeight-108,position:"relative"}},b.createElement("div",{className:"container_right_content"},b.createElement("p",{style:{textAlign:"center"}},b.createElement("img",{src:n(53549),style:{width:100,height:100}})),b.createElement("p",{className:"holder"},"暂无Dashboard，前往“Playlists-Edit”进行",b.createElement("a",{href:p()(e=p()(t="".concat(window.location.protocol,"//")).call(t,window.location.hostname,":")).call(e,window.APPCONFIG.GRAFANA_PORT,"/grafana/playlists/create")},"设置")))):b.createElement("iframe",{style:{minHeight:"100%",width:"100%"},src:u,frameBorder:"0"})))}}]),r}(b.Component))||O},82193:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(39022),a=n.n(r),l=n(86),o=n.n(l),c=n(11882),i=n.n(c),s=n(97606),u=n.n(s),d=n(28222),m=n.n(d),p=n(2357),f=n.n(p),v=n(45360),_=n(36808),h=n(4243);const g={pageWidth:function(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)},pageHeight:function(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)},getParameterByName:function(e,t){t||(t=window.location.href),e=e.replace(/[[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},getBase64:function(e,t){var n=new FileReader;n.addEventListener("load",(function(){return t(n.result)})),n.readAsDataURL(e)},percent:function(e,t){return e&&e!==1/0?(e>1&&(e=1),t=t||2,t=Math.pow(10,t),Math.round(e*t*100)/t+"%"):"0%"},getCssText:function(e){var t="";for(var n in e)t+=n+":"+e[n]+";";return t},formateDateTime:function(e){var t,n,r,l,o;if(!e)return"";var c=new Date(e),i=c.getFullYear(),s=c.getMonth()+1+"",u=c.getDate()+"",d=c.getHours()+"",m=c.getMinutes()+"",p=c.getSeconds()+"";return 1===s.toString().length&&(s="0".concat(s)),1===u.toString().length&&(u="0".concat(u)),1===d.toString().length&&(d="0".concat(d)),1===m.toString().length&&(m="0".concat(m)),1===p.toString().length&&(p="0".concat(p)),a()(t=a()(n=a()(r=a()(l=a()(o="".concat(i,"-")).call(o,s,"-")).call(l,u," ")).call(r,d,":")).call(n,m,":")).call(t,p)},formateDate:function(e){var t,n;if(!e)return"";var r=new Date(e),l=r.getFullYear(),o=r.getMonth()+1+"",c=r.getDate()+"";return 1===o.toString().length&&(o="0".concat(o)),1===c.toString().length&&(c="0".concat(c)),a()(t=a()(n="".concat(l,"-")).call(n,o,"-")).call(t,c)},trim:function(e){return"string"==typeof e?e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""):e},messageFilter:function(e,t,n,r){1001===e.status.code&&(r||v.Z.success("成功"),t&&t())},getTableParam:function(e){var t={};return o()(e).call(e,(function(e,n){var r=e.split("-");t[r[1]]=r[2]})),t},setAlertControl:function(e){var t={},n=e.alert_control;return"1"===n?t.close=1:(t.close=0,e["alert_num_"+n]&&(t.times_after_close=e["alert_num_"+n]),e["recover_num_"+n]&&(t.close_after_long_time_reset_amount=e["recover_num_"+n],t.close_after_long_time_reset_unit=e["recover_unit_"+n])),t},getAlertControl:function(e){var t={alert_control:""};return 0===e.close&&(0!==e.times_after_close?(t.alert_control="2",t["alert_num_"+t.alert_control]=e.times_after_close):t.alert_control="3",""!==e.close_after_long_time_reset_amount&&("2"===t.alert_control&&(t.alert_control="4"),t["alert_num_"+t.alert_control]=e.times_after_close,t["recover_num_"+t.alert_control]=e.close_after_long_time_reset_amount,t["recover_unit_"+t.alert_control]=e.close_after_long_time_reset_unit)),t},filterOption:function(e,t){var n;return-1!==i()(n=t.props.children).call(n,e)},getParamsFromUrl:function(e){var t={},n=[],r="",a="",l=e.substring(i()(e).call(e,"?")+1,e.length).split("&");for(var o in l)r=(n=l[o].split("="))[0],a=n[1],t[r]=a;return t},jsonToQuery:function(e){var t;return e?function(e){for(var t=[],n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}(u()(t=m()(e)).call(t,(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])}))).join("&"):""},checkNullObj:function(e){return 0===m()(e).length},serviceCallback:function(e,t,n){0===e.data.code?(v.Z.success(t),n&&n()):v.Z.error(e.data.msg)},noAuthorityToDO:function(e,t){return!e[t]&&(v.Z.error("权限不足，请联系管理员!"),!0)},get k8sNamespace(){return _.get(h.E9.NAMESPACE)},setNaviKey:function(e,t){sessionStorage.setItem("firstLevelNav",e),sessionStorage.setItem("siderLevelNav",t)},formatGBUnit:function(e){return i()(e).call(e,"MB")>-1?f()(e.replace("MB",""))/1024:i()(e).call(e,"KB")>-1?f()(e.replace("KB",""))/1024/1024:i()(e).call(e,"GB")>-1?f()(e.replace("GB","")):i()(e).call(e,"TB")>-1?1024*f()(e.replace("TB","")):0}}},7138:(e,t,n)=>{e.exports=n.p+"images/10f3e567caa4c08c5650.png"},39542:(e,t,n)=>{e.exports=n.p+"images/5fc548255abd3e6425ab.png"},53549:(e,t,n)=>{e.exports=n.p+"images/a7965899f74a9be33c01.png"},96636:(e,t,n)=>{e.exports=n.p+"images/a8dcbb7e275de8d055aa.png"},9158:(e,t,n)=>{e.exports=n.p+"images/840815e878d78edf68df.png"}}]);
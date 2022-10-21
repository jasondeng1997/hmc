"use strict";(self.webpackChunkHMC=self.webpackChunkHMC||[]).push([[4033],{44033:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ce});var a=n(28760),l=n.n(a),i=n(68420),r=n(27344),s=n(5281),c=n(84441),o=n(3020),u=n(3362),d=n(44845),m=n(39022),p=n.n(m),f=n(97606),v=n.n(f),h=n(87198),Z=n.n(h),g=n(67294),E=n(4107),x=n(30258),y=n(52553),S=n(45360),b=n(59314),k=n(67908),w=n(77268),C=n(39144),N=n(31097),_=n(8263),T=n(53431),F=3,L=2,I=1,B=0,U=[{text:"正常",value:L},{text:"异常",value:F},{text:"运行中",value:I},{text:"未运行",value:B}],R=[{text:"正常",value:L},{text:"异常",value:F},{text:"运行中",value:I}],H=n(29027),M=n(44930),A=n(95266),O=n(81607),P=n.n(O),V=n(30222),D=n.n(V),K=n(69035),j=n(86),q=n.n(j),W=n(58118),z=n.n(W),$=n(20666),G=n(43663);const J=function(e){var t=e.defaultHosts,n=e.selectHosts,a=(0,g.useState)([]),l=(0,A.Z)(a,2),i=l[0],r=l[1],s=(0,g.useState)(""),c=(0,A.Z)(s,2),o=c[0],u=c[1],d=(0,g.useState)([]),m=(0,A.Z)(d,2),p=m[0],f=m[1],h=(0,g.useState)([]),Z=(0,A.Z)(h,2),E=Z[0],x=Z[1],y=function(){var e=(0,M.Z)(D().mark((function e(){var t,n,a,l;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,G.jy.getInstallClusterList({"sort-by":"id","sort-dir":"desc",type:"hosts",limit:0,start:0});case 3:a=e.sent,(l=a.data).data.counts>0&&q()(t=l.data.clusters).call(t,(function(e){n.push({clusterId:e.id,value:e.name})})),r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=(0,M.Z)(D().mark((function e(){var a,l,i,r;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f([]),e.next=3,G.t6.getClusterHostList({limit:0,start:0,cluster_id:o},"hosts");case 3:i=e.sent,null==(r=null==i||null===(a=i.data)||void 0===a||null===(l=a.data)||void 0===l?void 0:l.hosts)||v()(r).call(r,(function(e){return e.key=e.id,e})),t.length>0&&(q()(t).call(t,(function(e){q()(r).call(r,(function(t){e.ip===t.ip&&(z()(E).call(E,t.id)||E.push(t.id))}))})),n(E)),f(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,g.useEffect)((function(){y()}),[]),(0,g.useEffect)((function(){o&&S()}),[o]),(0,g.useEffect)((function(){var e,n;t.length>0?u(null===(e=t[0])||void 0===e?void 0:e.cluster_id):u(null===(n=i[0])||void 0===n?void 0:n.clusterId)}),[t,i]);return g.createElement("div",{className:"hostSelect"},g.createElement("div",{className:"settingNavTop"},g.createElement("div",{className:"navTopLine"}),g.createElement("div",{className:"navTopTxt"},"下发主机")),g.createElement("div",{className:"hostSelectContent"},g.createElement("div",{className:"hostSelectContent-cluster"},g.createElement("div",{className:"hostSelectContent-cluster-title"},"请选择集群："),i.length>0&&v()(i).call(i,(function(e){var t;return g.createElement("div",{onClick:function(){var t;t=e.clusterId,u(t)},className:"hostSelectContent-cluster-content ".concat((null!==(t=e.clusterId===o)&&void 0!==t?t:i[0].clusterId)?"active":null),key:e.clusterId},e.value)}))),g.createElement("div",{className:"hostSelectContent-host"},g.createElement($.Z,{dataSource:p,showSearch:!0,listStyle:{width:250,height:300},titles:["未选","已选"],targetKeys:E,onChange:function(e){n(e),x(e)},render:function(e){return e.ip}}))))};var Q=K.Z.Item,X=E.Z.TextArea;const Y=K.Z.create()((function(e){var t=e.title,n=e.isTimeSetting,a=e.visible,l=e.close,i=e.spec,r=e.hosts,s=e.id,c=e.sucCall,o=(0,g.useState)(!1),u=(0,A.Z)(o,2),d=u[0],m=u[1],p=(0,g.useState)([]),f=(0,A.Z)(p,2),v=f[0],h=f[1],Z=(0,g.useState)(!0),y=(0,A.Z)(Z,2),b=y[0],k=y[1],C=(0,g.useState)(i),N=(0,A.Z)(C,2),_=N[0],T=N[1],F=(0,g.useState)(""),L=(0,A.Z)(F,2),I=L[0],B=L[1],U=(0,g.useState)([]),R=(0,A.Z)(U,2),H=R[0],O=R[1],V=(0,g.useState)(!1),j=(0,A.Z)(V,2),q=j[0],W=j[1],z=(0,g.useState)(!1),$=(0,A.Z)(z,2),Y=$[0],ee=$[1],te=function(){var e=(0,M.Z)(D().mark((function e(){var t,n,a;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""===_&&(m(!0),B("cron表达式不能为空")),t={id:s,spec:_,next:10},e.next=4,G.gu.checkCronParse(t);case 4:0==(n=e.sent).data.code?(O(null===(a=n.data)||void 0===a?void 0:a.data.next_time),m(!1),k(!1)):(k(!0),m(!0),O([]),B(n.data.msg));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,g.useEffect)((function(){i.length>0&&n&&te()}),[i,n]);var ne=function(){var e=(0,M.Z)(D().mark((function e(){var t,n,a;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.join(","),n={id:s,host_id:t,spec:_},e.next=4,G.gu.getSettingStatus(n);case 4:0==(a=e.sent).data.code?(ee(!1),l(),c(),S.Z.success(a.data.msg)):(ee(!1),S.Z.error(a.data.msg));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=(0,M.Z)(D().mark((function e(){var t,n,a;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.join(","),n={id:s,host_id:t},e.next=4,G.gu.taskRun(n);case 4:0==(a=e.sent).data.code?(ee(!1),l(),c(),S.Z.success(a.data.msg)):(ee(!1),S.Z.error(a.data.msg));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return g.createElement(x.Z,{title:t,visible:a,onOk:function(){0!==v.length?(ee(!0),n?ne():ae()):W(!0)},okButtonProps:{disabled:b&&n},onCancel:function(){l()},width:"750px",confirmLoading:Y},g.createElement(K.Z,null,g.createElement(Q,null,g.createElement(g.Fragment,null,g.createElement(J,{selectHosts:function(e){e.length>0&&W(!1),h(e)},defaultHosts:r}),q&&g.createElement("span",{className:"errorHost"},"请选择下发主机"))),n&&g.createElement(Q,null,g.createElement("div",null,g.createElement("div",{className:"settingNavTop"},g.createElement("div",{className:"navTopLine"}),g.createElement("div",{className:"navTopTxt"},"执行频率")),g.createElement("div",{className:"cronBox"},g.createElement("span",{className:"labelTxt"},"cron表达式："),g.createElement(E.Z,{maxLength:500,placeholder:"请输入cron表达式",style:{width:"599px"},onChange:function(t){var n=t.target.value,a=e.spec;P()(a).call(a)!==P()(n).call(n)?k(!0):k(!1),T(n)},value:_}),d&&g.createElement("span",{className:"error"},I))),g.createElement(Q,null,g.createElement("div",{className:"runBox"},g.createElement("span",{className:"labelTxt"},"近10次运行时间："),g.createElement(X,{value:H.join("\n"),placeholder:"若校验结果有误或为空，请核对 cron 表达式是否正确",style:{width:"599px",height:95}}))))),n&&g.createElement(w.Z,{className:"cronBtn",type:"primary",disabled:i.length>0&&P()(i).call(i)==P()(_).call(_),onClick:function(){te()}},"校验cron表达式"))}));var ee=n(83107),te=n(74981);n(44576),n(68886),n(40049);const ne=function(e){var t=e.title,n=e.visible,a=e.close,l=e.id,i=e.showUploadModal,r=(0,g.useState)(""),s=(0,A.Z)(r,2),c=s[0],o=s[1],u=(0,g.useState)({describe:"",execTimeout:"",logRetention:""}),d=(0,A.Z)(u,2),m=d[0],p=d[1];(0,g.useEffect)((function(){f()}),[e.id]);var f=function(){var e=(0,M.Z)(D().mark((function e(){var t,n,a;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.gu.getTaskContent({id:l});case 2:t=e.sent,n=t.data,0===(a=void 0===n?{}:n).code?(o(a.data.script_content),p({describe:a.data.describe,execTimeout:a.data.exec_timeout,logRetention:a.data.log_retention})):S.Z.error(a.msg);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return g.createElement(ee.Z,{title:t,visible:n,onClose:a,width:"520px",placement:"right"},g.createElement("div",{className:"settingNavTop",style:{marginBottom:20}},g.createElement("div",{className:"navTopLine"}),g.createElement("div",{className:"navTopTxt"},"基本信息",g.createElement(k.Z,{type:"edit",style:{color:"#3F87FF",marginLeft:8},onClick:function(){return i(m,l)}}))),g.createElement("div",{className:"desBox"},g.createElement("div",{className:"desBox-title flex-item"},"脚本描述："),g.createElement("div",{className:"desBox-content flex-item"},null!=m&&m.describe?null==m?void 0:m.describe:"--")),g.createElement("div",{className:"desBox"},g.createElement("div",{className:"desBox-title flex-item"},"超时设置："),g.createElement("div",{className:"desBox-content flex-item"},null==m?void 0:m.execTimeout,"s")),g.createElement("div",{className:"desBox"},g.createElement("div",{className:"desBox-title flex-item",style:{width:108}},"执行历史保存周期："),g.createElement("div",{className:"desBox-content flex-item"},null==m?void 0:m.logRetention,"天")),g.createElement("div",{className:"settingNavTop",style:{marginBottom:20}},g.createElement("div",{className:"navTopLine"}),g.createElement("div",{className:"navTopTxt"},"查看脚本")),g.createElement(te.ZP,{className:"ace-code-portal",mode:"golang",theme:"kuroir",value:c,readOnly:!0,width:"520",showGutter:!1}))};var ae=n(71649),le=n(14418),ie=n.n(le),re=n(6981),se=function(e){switch(e){case L:return g.createElement("span",null,g.createElement(y.Z,{color:"#12BC6A"})," 正常");case F:return g.createElement("span",null,g.createElement(y.Z,{color:"#FF5F5C"})," 异常");case I:return g.createElement("span",null,g.createElement(y.Z,{color:"#3F87FF"})," 运行中");case B:return g.createElement("span",null,g.createElement(y.Z,{color:"#BFBFBF"})," 未运行")}};const ce=function(e){var t=e.title,n=e.visible,a=e.close,l=e.id,i=(0,g.useState)([]),r=(0,A.Z)(i,2),s=r[0],c=r[1],o=(0,g.useState)(0),u=(0,A.Z)(o,2),d=u[0],m=u[1],f=(0,g.useState)(0),h=(0,A.Z)(f,2),Z=h[0],E=h[1],y=(0,g.useState)(""),b=(0,A.Z)(y,2),k=b[0],w=b[1],C=(0,g.useState)([]),N=(0,A.Z)(C,2),F=N[0],L=N[1],I=function(e,t,n,a){var i={id:l,limit:10,start:null!=e?e:d,execStatus:t?n:k};G.gu.getTaskLog(i).then((function(e){var t=[];c([]);var n,l=e.data;0==l.code?(v()(n=l.data.list).call(n,(function(e,n){var i;return e.count=l.data.count-d-n,e.key=e.count,a&&t.push(e.key),null===(i=e.children)||void 0===i||v()(i).call(i,(function(t,n){var a;return t.key=p()(a="".concat(e.key,"-")).call(a,n),t})),e})),L(t),c(l.data.list),E(l.data.count)):S.Z.error(l.data.msg)}))};(0,g.useEffect)((function(){n&&(k?I(d,!0,k,!0):I())}),[l,n,d]),(0,g.useEffect)((function(){k&&I(0,!0,k,!0)}),[k]);return g.createElement(x.Z,{title:t,visible:n,onCancel:a,width:"900px",footer:null},g.createElement(_.Z,{onExpand:function(e,t){if(e){var n;L(p()(n=[]).call(n,(0,ae.Z)(F),[t.key]))}else{var a=ie()(F).call(F,(function(e){return e!==t.key}));L(a)}},expandedRowKeys:F,pagination:!1,columns:[{title:"编号",dataIndex:"count",key:"count",width:80,fixed:"left"},{title:"主机IP",dataIndex:"ip",width:130,key:"ip",fixed:"left",render:function(e){return g.createElement("span",null,e||"--")}},{title:"执行时间",dataIndex:"end_time",key:"end_time",width:150,render:function(e){return g.createElement("span",null,e||"--")}},{title:"执行方式",dataIndex:"exec_type",key:"exec_type",width:100,render:function(e){return 0==e?g.createElement("span",null,"定时执行"):g.createElement("span",null,"手动执行")}},{title:"执行结果",dataIndex:"exec_status",key:"exec_status",filters:R,filterMultiple:!1,render:se,width:100},{title:"详情",dataIndex:"exec_result",key:"exec_result",render:function(e){return g.createElement("div",null,(null==e?void 0:e.length)>20?g.createElement(re.Dd,{value:e,maxWidth:260}):g.createElement("span",null,e||"--"))}}],onChange:function(e,t){var n=t.exec_status;w(n.length>0?n[0]:""),0==n.length&&k&&(m(0),I(0,!0,""))},dataSource:s,scroll:{x:900}}),g.createElement("div",{className:"paginationBox",style:{padding:"13px 20px 13px 0",textAlign:"right"}},g.createElement(T.Z,{current:d/10+1,size:"small",total:Z,onChange:function(e){m(10*(e-1))},showTotal:function(e){return g.createElement("span",null,"共",g.createElement("span",{style:{color:"#3F87FF"}},e),"条数据，每页显示",g.createElement("span",{style:{color:"#3F87FF"}},"10"),"条")}})))};var oe=n(73126),ue=n(87558),de=n(21888),me=n(9669),pe=n.n(me);function fe(e){var t=function(){if("undefined"==typeof Reflect||!l())return!1;if(l().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(l()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,u.Z)(e);if(t){var i=(0,u.Z)(this).constructor;n=l()(a,arguments,i)}else n=a.apply(this,arguments);return(0,o.Z)(this,n)}}var ve=K.Z.Item,he=E.Z.TextArea,Ze={},ge=function(e){(0,c.Z)(n,e);var t=fe(n);function n(){var e,a,l,r,c,o,u,m,f;(0,i.Z)(this,n);for(var v=arguments.length,h=new Array(v),Z=0;Z<v;Z++)h[Z]=arguments[Z];return f=t.call.apply(t,p()(e=[this]).call(e,h)),(0,d.Z)((0,s.Z)(f),"state",{visible:f.props.showVisible,uploadFile:null,fileList:[],describe:null===(a=f.props)||void 0===a||null===(l=a.detailInfo)||void 0===l?void 0:l.describe,exec_timeout:null!==(r=f.props)&&void 0!==r&&r.detailInfo?null===(c=f.props)||void 0===c?void 0:c.detailInfo.execTimeout:60,log_retention:null!==(o=f.props)&&void 0!==o&&o.detailInfo?null===(u=f.props)||void 0===u||null===(m=u.detailInfo)||void 0===m?void 0:m.logRetention:3}),(0,d.Z)((0,s.Z)(f),"handleCancle",(function(){f.setState({visible:!1}),f.props.onClose()})),(0,d.Z)((0,s.Z)(f),"doUploadScript",(function(){var e=f.state,t=e.uploadFile,n=e.describe,a=e.exec_timeout,l=e.log_retention,i=new FormData;i.append("file",t),i.append("describe",null!=n?n:""),i.append("exec_timeout",a.toString()),i.append("log_retention",l.toString());var r=pe().CancelToken.source();pe().post("/api/v2/task/upload",i,{}).then((function(e){var t=e.data;if(0!==(null==t?void 0:t.code))return S.Z.error(t.msg);f.props.onOk()})).catch((function(e){})),Ze[t.uid]={abort:function(){r.cancel()}}})),(0,d.Z)((0,s.Z)(f),"editScriptInfo",(function(){var e=f.props.id,t=f.state,n={id:e,describe:t.describe,exec_timeout:t.exec_timeout,log_retention:t.log_retention};G.gu.editScript(n).then((function(e){var t=e.data;if(0!==(null==t?void 0:t.code))return S.Z.error(t.msg);f.props.onOk()}))})),(0,d.Z)((0,s.Z)(f),"handleSubmit",(function(e){f.props.form.validateFieldsAndScroll((function(t,n){t?(e.preventDefault(),n.exec_timeout.toString||f.props.form.setFieldsValue({exec_timeout:60}),n.log_retention.toString||f.props.form.setFieldsValue({log_retention:3})):f.props.detailInfo?f.editScriptInfo():f.doUploadScript()}))})),(0,d.Z)((0,s.Z)(f),"handleUploadFile",(function(e){if(e&&!("text/x-sh"===e.type||"text/x-python-script"===e.type))return void S.Z.error("仅支持 .py，.sh 格式文件!")})),(0,d.Z)((0,s.Z)(f),"customRequest",(function(e){"text/x-sh"===e.file.type||"text/x-python-script"===e.file.type?f.setState({fileList:[e.file],uploadFile:e.file}):f.setState({fileList:[],uploadFile:null})})),(0,d.Z)((0,s.Z)(f),"onRemove",(function(e){f.setState({fileList:[],uploadFile:null})})),(0,d.Z)((0,s.Z)(f),"changeExecTime",(function(e){f.setState({exec_timeout:e})})),(0,d.Z)((0,s.Z)(f),"changeDescribe",(function(e){f.setState({describe:e.target.value})})),(0,d.Z)((0,s.Z)(f),"changeLog",(function(e){f.setState({log_retention:e})})),f}return(0,r.Z)(n,[{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,n=this.props,a=n.title,l=n.detailInfo,i=this.state,r=i.visible,s=i.fileList,c=i.describe,o=i.exec_timeout,u=i.log_retention,d={labelCol:{xs:{span:12},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:15}}},m={name:"file",customRequest:function(t){return e.customRequest(t)},beforeUpload:function(t){e.handleUploadFile(t)},onRemove:function(t){return e.onRemove(t)},fileList:[]};return g.createElement("div",{className:"uploadScript"},g.createElement(x.Z,{className:"uploadScriptBox",title:a,width:520,visible:r,onCancel:this.handleCancle,onOk:this.handleSubmit},g.createElement(K.Z,null,!l&&g.createElement(ve,(0,oe.Z)({label:"上传文件 "},d),g.createElement(ue.Z,(0,oe.Z)({},m,{fileList:s}),g.createElement(w.Z,null,g.createElement(k.Z,{type:"upload"})," 上传脚本"),g.createElement("span",{className:"noticeTxt"},"仅支持.py，.sh 格式文件"))),g.createElement(ve,(0,oe.Z)({label:"脚本描述 "},d),g.createElement(he,{value:c,maxLength:200,onChange:this.changeDescribe,placeholder:"请输入脚本描述，长度限制在200个字符以内",style:{width:"280px",height:56}})),g.createElement(ve,(0,oe.Z)({label:"超时设置 "},d),t("exec_timeout",{initialValue:o,rules:[{required:!0,message:"请输入超时时间"},{pattern:/^[1-9]*[1-9][0-9]*$/,message:"请输入大于0的正整数"}]})(g.createElement("div",null,g.createElement(de.Z,{value:o,step:1,onChange:this.changeExecTime})," ","s"))),g.createElement(ve,(0,oe.Z)({label:"执行历史保存周期 "},d),t("log_retention",{initialValue:u,rules:[{required:!0,message:"请输入保存周期"},{pattern:/^[1-7]$/,message:"请输入7以内正整数"}]})(g.createElement("div",null,g.createElement(de.Z,{value:u,step:1,onChange:this.changeLog})," ","天 ",g.createElement("span",{className:"noticeTxt"},"最长不超过7天")))))))}}]),n}(g.Component);const Ee=K.Z.create()(ge);var xe;function ye(e){var t=function(){if("undefined"==typeof Reflect||!l())return!1;if(l().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(l()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,u.Z)(e);if(t){var i=(0,u.Z)(this).constructor;n=l()(a,arguments,i)}else n=a.apply(this,arguments);return(0,o.Z)(this,n)}}var Se=E.Z.Search,be=x.Z.confirm,ke=null,we=function(e){switch(e){case L:return g.createElement("span",null,g.createElement(y.Z,{color:"#12BC6A"})," 正常");case F:return g.createElement("span",null,g.createElement(y.Z,{color:"#FF5F5C"})," 异常");case I:return g.createElement("span",null,g.createElement(y.Z,{color:"#3F87FF"})," 运行中");case B:return g.createElement("span",null,g.createElement(y.Z,{color:"#BFBFBF"})," 未运行")}},Ce=(0,H.$j)((function(e){return{authorityList:e.UserCenterStore.authorityList}}))(xe=function(e){(0,c.Z)(n,e);var t=ye(n);function n(){var e,a;(0,i.Z)(this,n);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return a=t.call.apply(t,p()(e=[this]).call(e,r)),(0,d.Z)((0,s.Z)(a),"state",{searchName:"",selectedRowKeys:[],data:[],total:0,visible:!1,isTimeSetting:!1,previewVisible:!1,previewContent:"",scriptName:"",visibleHistory:!1,spec:"",hosts:[],taskId:0,tableLoading:!1,start:0,execStatus:"",times:0,limit:10,showUploadScript:!1,uploadTitle:"上传脚本",detailInfo:null}),(0,d.Z)((0,s.Z)(a),"getScriptList",(function(){var e=a.state,t=e.searchName,n=e.start,l=e.execStatus,i=e.times,r=e.limit;a.setState({tableLoading:!0});var s={name:t,"sort-by":"create_time","sort-dir":"desc",limit:r,start:n,"exec-status":l};G.gu.getList(s).then((function(e){var t,n=e=e.data,l=n.code,r=n.data,s=void 0===r?{}:r,c=n.msg;0===l?(null===(t=s.list)||void 0===t||v()(t).call(t,(function(e){return e.key=e.id,e})),a.setState({tableLoading:!1,data:s.list||[],times:i+1,total:s.count})):(a.setState({tableLoading:!1}),S.Z.error(c))}))})),(0,d.Z)((0,s.Z)(a),"handleUploadFile",(function(e){e?a.setState({showUploadScript:!0}):S.Z.error("权限不足，请联系管理员！")})),(0,d.Z)((0,s.Z)(a),"doSearch",(function(e){a.setState({searchName:e,start:0,execStatus:""},(function(){a.getScriptList()}))})),(0,d.Z)((0,s.Z)(a),"onChangePage",(function(e){a.setState({start:10*(e-1),tableLoading:!0},(function(){a.getScriptList()}))})),(0,d.Z)((0,s.Z)(a),"clickName",(function(e){a.setState({taskId:e.id,previewVisible:!0,scriptName:e.name})})),(0,d.Z)((0,s.Z)(a),"previewHistory",(function(e,t){t?a.setState({taskId:e.id,scriptName:e.name,visibleHistory:!0}):S.Z.error("权限不足，请联系管理员！")})),(0,d.Z)((0,s.Z)(a),"initColumns",(function(){return[{title:"脚本名称",dataIndex:"name",key:"name",render:function(e,t){return g.createElement("div",{onClick:function(){a.clickName(t)},style:{cursor:"pointer",color:"#0091FF"}},e.length>20?g.createElement(re.Dd,{value:e,maxWidth:200}):g.createElement("span",null,e))}},{title:"脚本描述",dataIndex:"describe",key:"describe",width:200,render:function(e){return g.createElement("div",null,e.length>20?g.createElement(re.Dd,{value:e,maxWidth:200}):g.createElement("span",null,e||"--"))}},{title:"上传时间",dataIndex:"create_time",key:"create_time",width:150},{title:"最近执行时间",dataIndex:"end_time",key:"end_time",width:150,render:function(e){return e||"--"}},{title:"最近一次执行结果",dataIndex:"exec_status",key:"exec_status",width:135,filters:U,filterMultiple:!1,render:we},{title:"定时状态",dataIndex:"status",key:"status",render:function(e,t){return g.createElement(b.Z,{checked:1===e,defaultChecked:1===e,onChange:function(){a.changeSwitch(t)}})}},{title:"操作",dataIndex:"operator",width:"280px",render:a.renderOperator}]})),(0,d.Z)((0,s.Z)(a),"handleSelectChange",(function(e){a.setState({selectedRowKeys:e})})),(0,d.Z)((0,s.Z)(a),"handleChangeTable",(function(e,t){var n=t.exec_status;a.setState({execStatus:n[0]},(function(){a.getScriptList()}))})),(0,d.Z)((0,s.Z)(a),"changeSwitch",(function(e){a.changeStatus(String(e.id),1===e.status?0:1)})),(0,d.Z)((0,s.Z)(a),"switchAll",(function(e,t){if(t){var n=a.state.selectedRowKeys;if(0!==n.length){var l=n.join(",");a.changeStatus(l,e)}else S.Z.error("请先选择脚本")}else S.Z.error("权限不足，请联系管理员！")})),(0,d.Z)((0,s.Z)(a),"changeStatus",(function(e,t){var n={task_id:e,status:t};G.gu.getTaskStatus(n).then((function(e){0==e.data.code?(a.getScriptList(),a.setState({selectedRowKeys:[]})):S.Z.error(e.data.msg)}))})),(0,d.Z)((0,s.Z)(a),"close",(function(){a.setState({visible:!1})})),(0,d.Z)((0,s.Z)(a),"settingTime",(function(e,t){t?a.setState({visible:!0,taskId:e.id,hosts:null==e?void 0:e.hosts,spec:null==e?void 0:e.spec,isTimeSetting:!0}):S.Z.error("权限不足，请联系管理员！")})),(0,d.Z)((0,s.Z)(a),"handleSetting",(function(e,t){t?a.setState({visible:!0,isTimeSetting:!1,hosts:null==e?void 0:e.hosts,spec:null==e?void 0:e.spec,taskId:e.id}):S.Z.error("权限不足，请联系管理员！")})),(0,d.Z)((0,s.Z)(a),"closePreviewScript",(function(){a.setState({previewVisible:!1})})),(0,d.Z)((0,s.Z)(a),"closeTaskHistory",(function(){a.setState({visibleHistory:!1})})),(0,d.Z)((0,s.Z)(a),"deleteTask",(function(e){G.gu.deleteTask({id:e}).then((function(e){0==e.data.code?(S.Z.success(e.data.msg),a.getScriptList()):S.Z.error(e.data.msg)}))})),(0,d.Z)((0,s.Z)(a),"deleteScript",(function(e,t){t?be({title:"确认删除脚本 ".concat(e.name,"？"),icon:g.createElement(k.Z,{type:"close-circle",theme:"filled",style:{color:"#FF5F5C"}}),content:"删除脚本将同时清除执行历史。",okText:"删除",cancelText:"取消",onOk:function(){a.deleteTask(e.id)},onCancel:function(){}}):S.Z.error("权限不足，请联系管理员！")})),(0,d.Z)((0,s.Z)(a),"closeUpload",(function(){a.setState({showUploadScript:!1,detailInfo:null,uploadTitle:"上传脚本"})})),(0,d.Z)((0,s.Z)(a),"callUpload",(function(){a.closeUpload(),a.getScriptList()})),(0,d.Z)((0,s.Z)(a),"showUploadModal",(function(e,t){a.setState({detailInfo:e,previewVisible:!1},(function(){a.setState({uploadTitle:"编辑",showUploadScript:!0,taskId:t})}))})),(0,d.Z)((0,s.Z)(a),"renderOperator",(function(e,t){var n=a.props.authorityList,l=n.sub_menu_platform_manager_scriptManager_view,i=n.sub_menu_configuration_platformsecurity_edit;return l?g.createElement("div",{className:"btnList"},g.createElement(w.Z,{type:"link",onClick:function(){a.settingTime(t,i)}},"定时设置"),g.createElement("div",{className:"tableLine"},g.createElement("span",null)),g.createElement(w.Z,{type:"link",disabled:1===(null==t?void 0:t.run_status),onClick:function(){a.handleSetting(t,i)}},"手动执行"),g.createElement("div",{className:"tableLine"},g.createElement("span",null)),g.createElement(w.Z,{type:"link",onClick:function(){a.previewHistory(t,i)}},"执行历史"),g.createElement("div",{className:"tableLine"},g.createElement("span",null)),g.createElement(w.Z,{type:"link",onClick:function(){a.deleteScript(t,i)}},"删除")):g.createElement(g.Fragment,null)})),a}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){this.getScriptList()}},{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.times!==t.times&&(clearTimeout(ke),ke=Z()((function(){n.getScriptList()}),5e3))}},{key:"componentWillUnmount",value:function(){clearTimeout(ke)}},{key:"render",value:function(){var e=this,t=this.props.authorityList,n=t.sub_menu_platform_manager_scriptManager_view,a=!!t.sub_menu_configuration_platformsecurity_edit,l=this.state,i=l.tableLoading,r=l.previewVisible,s=l.previewContent,c=l.selectedRowKeys,o=l.visibleHistory,u=l.data,d=l.total,m=l.visible,p=l.scriptName,f=l.limit,v=l.spec,h=l.hosts,Z=l.taskId,E=l.isTimeSetting,x=l.start,y=l.showUploadScript,S=l.uploadTitle,b=l.detailInfo,F={selectedRowKeys:c,onChange:this.handleSelectChange},L=x/f+1;return g.createElement("div",{className:"scriptManager"},y&&g.createElement(Ee,{id:Z,onClose:this.closeUpload,onOk:this.callUpload,title:S,showVisible:y,detailInfo:b}),m&&g.createElement(Y,{title:E?"定时设置":"手动执行",visible:m,isTimeSetting:E,close:this.close,spec:v,hosts:h,id:Z,sucCall:this.getScriptList}),r&&g.createElement(ne,{showUploadModal:this.showUploadModal,id:Z,title:"脚本查看/".concat(p),visible:r,content:s,close:this.closePreviewScript}),o&&g.createElement(ce,{title:"执行历史/".concat(p),visible:o,id:Z,close:this.closeTaskHistory}),g.createElement(C.Z,{bordered:!1,className:"card-box"},g.createElement("div",{className:"card-content"},g.createElement("div",{className:"scriptManager-nav"},g.createElement("div",{className:"scriptManage-searchBox"},g.createElement(Se,{placeholder:"请输入脚本名称/描述",onSearch:this.doSearch,style:{width:340,boxShadow:"0px 2px 6px 0px rgba(0, 0, 0, 0.08)"}})),g.createElement("div",{className:"scriptManage-uploadBox"},n&&g.createElement(w.Z,{type:"primary",onClick:function(){return e.handleUploadFile(a)}},"上传脚本"),g.createElement(N.Z,{placement:"topRight",title:"仅支持 .py，.sh 格式文件"},g.createElement("div",{style:{width:35,paddingLeft:"7px",marginTop:8}},g.createElement(k.Z,{type:"question-circle",style:{fontSize:16,color:"#999"}}))))),g.createElement("div",{className:"tabList"},g.createElement(_.Z,{scroll:{y:"calc(100vh - 274px)"},style:{height:"calc(100vh - 230px)"},loading:i,rowSelection:F,columns:this.initColumns(),dataSource:u,onChange:this.handleChangeTable,pagination:!1})),g.createElement("div",{className:"tabFooter"},n&&g.createElement("div",{className:"tabFooter-btnList"},g.createElement(w.Z,{type:"primary",style:{marginRight:10},onClick:function(){return e.switchAll(1,a)}},"开启"),g.createElement(w.Z,{onClick:function(){return e.switchAll(0,a)}},"关闭")),g.createElement("div",null,g.createElement(T.Z,{current:L,size:"small",total:d,onChange:this.onChangePage,showTotal:function(e){return g.createElement("span",null,"共",g.createElement("span",{style:{color:"#3F87FF"}},e),"条数据，每页显示",g.createElement("span",{style:{color:"#3F87FF"}},"10"),"条")}}))))))}}]),n}(g.PureComponent))||xe}}]);
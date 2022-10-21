"use strict";(self.webpackChunkHMC=self.webpackChunkHMC||[]).push([[3125],{23125:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Fe});var n=r(28760),a=r.n(n),i=r(68420),o=r(27344),l=r(5281),c=r(84441),s=r(3020),u=r(3362),m=r(44845),p=r(39022),d=r.n(p),v=r(67294),f=r(45360),h=r(71230),y=r(15746),g=r(29027),Z=r(80222),E=r.n(Z),b=r(14418),x=r.n(b),w=r(8446),_=r.n(w),C=r(86),N=r.n(C),P=r(66870),k=r.n(P),O=r(29747),A=r.n(O),S=r(96718),L=r.n(S),F=r(73126),H=r(97606),z=r.n(H),B=r(11189),T=r.n(B),D=r(28222),I=r.n(D),R=r(2357),M=r.n(R),W=r(77268),U=r(67908),G=r(14277),K=r(94184),j=r.n(K),Y=r(96486),$=r(70596),q=r(30381),J=r.n(q),Q={series:[{type:"pie",hoverAnimation:!1,radius:["72%","80%"],startAngle:210,labelLine:{show:!1},label:{position:"center"},data:[{value:window.APPCONFIG.ALARM_HEALTH,itemStyle:{color:"#12BC6A"}},{value:window.APPCONFIG.ALARM_WARN-window.APPCONFIG.ALARM_HEALTH,itemStyle:{color:"#FFB310"}},{value:100-window.APPCONFIG.ALARM_WARN,itemStyle:{color:"#FF5F5C"}},{value:50,itemStyle:{color:"rgba(0,0,0,0)",borderWidth:0}}]},{type:"pie",hoverAnimation:!1,radius:["52%","70%"],startAngle:210,labelLine:{show:!1},label:{position:"center"},data:[{value:75,itemStyle:{color:"#FF5F5C"},label:{formatter:"{c}%",position:"center",show:!0,textStyle:{fontSize:"12",fontWeight:"600",color:"#333333"}}},{value:75,itemStyle:{color:"rgba(0,0,0,0)",borderWidth:0}}]}]},V={color:"#3f87ff",tooltip:{trigger:"axis",formatter:function(e){var t=e[0].value;return'<div style="font-size:12px"><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#3f87ff;"></span><span>'+t.date+"</span></br><span>"+e[0].seriesName+": "+Number(t.value.toFixed(2))+"%</span></div>"}},grid:{top:"60px",left:"36px",right:"24px",bottom:"22px",containLabel:!0},dataset:{dimensions:["date","value"],source:[]},xAxis:{type:"category",min:function(e){return e.min-1},max:function(e){return e.max+1},axisLine:{lineStyle:{color:"#e8e8e8"}},axisLabel:{color:"rgba(0,0,0,0.45)",margin:12}},yAxis:{name:"CPU使用情况（%）",nameTextStyle:{fontSize:14,padding:[0,0,12,50]},axisLine:{show:!1},axisLabel:{color:"rgba(0,0,0,0.45)",borderWidth:0},axisTick:{show:!1},splitLine:{lineStyle:{type:"dashed"}}},series:[{name:"使用率",type:"line",lineStyle:{color:"#3f87ff"},areaStyle:{color:new $.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(63, 135, 255, 1)"},{offset:1,color:"rgba(115, 188, 255, 0)"}],!1)}}]},X=[[{value:"2d",text:"Last 2 days",times:[J()().subtract("2","days"),J()()]},{value:"7d",text:"Last 7 days",times:[J()().subtract("7","days"),J()()]}],[{value:"today",text:"Today",times:[J()().startOf("day"),J()()]}],[{value:"15m",text:"Last 15 minutes",times:[J()().subtract("15","minutes"),J()()]},{value:"30m",text:"Last 30 minutes",times:[J()().subtract("30","minutes"),J()()]},{value:"1h",text:"Last 1 hour",times:[J()().subtract("1","hour"),J()()]},{value:"3h",text:"Last 3 hours",times:[J()().subtract("3","hours"),J()()]},{value:"6h",text:"Last 6 hours",times:[J()().subtract("6","hours"),J()()]},{value:"12h",text:"Last 12 hours",times:[J()().subtract("12","hours"),J()()]},{value:"24h",text:"Last 24 hours",times:[J()().subtract("24","hours"),J()()]}]],ee=r(7333),te=r(94037),re=r(98396),ne=te.Z.clusterIndex;const ae={getHostsClusterOverview:function(e){return re[ne.getHostsClusterOverview(e).method](ne.getHostsClusterOverview(e).url)},getKubernetesClusterOverview:function(e){return re[ne.getKubernetesClusterOverview(e).method](ne.getKubernetesClusterOverview(e).url)},getHostsClusterPerformance:function(e,t){return re[ne.getHostsClusterPerformance(e).method](ne.getHostsClusterPerformance(e).url,t)},getKubernetesClusterPerformance:function(e,t){return re[ne.getKubernetesClusterPerformance(e).method](ne.getKubernetesClusterPerformance(e).url,t)},getClusterPerformance:function(e,t,r){return"hosts"===r?this.getHostsClusterPerformance(e,t):this.getKubernetesClusterPerformance(e,t)},getClusterOverview:function(e,t){return"hosts"===t?this.getHostsClusterOverview(e):this.getKubernetesClusterOverview(e)}};function ie(e,t){var r=I()(e);if(E()){var n=E()(e);t&&(n=x()(n).call(n,(function(t){return _()(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r,n,a=null!=arguments[t]?arguments[t]:{};t%2?N()(r=ie(Object(a),!0)).call(r,(function(t){(0,m.Z)(e,t,a[t])})):k()?A()(e,k()(a)):N()(n=ie(Object(a))).call(n,(function(t){L()(e,t,_()(a,t))}))}return e}function le(e){var t=function(){if("undefined"==typeof Reflect||!a())return!1;if(a().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var i=(0,u.Z)(this).constructor;r=a()(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var ce=function(e){(0,c.Z)(r,e);var t=le(r);function r(){var e,n;(0,i.Z)(this,r);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=t.call.apply(t,d()(e=[this]).call(e,o)),(0,m.Z)((0,l.Z)(n),"state",{metric:"cpu",performanceOption:{},timePicker:!1,selectTime:{value:"15m",text:"Last 15 minutes",times:[J()().subtract("15","minutes"),J()()]}}),(0,m.Z)((0,l.Z)(n),"handleClick",(function(e){n.setState({metric:e,performanceOption:"pod"!==e?n.state.performanceOption:{}},(function(){"pod"!==e&&n.getPerformance()}))})),(0,m.Z)((0,l.Z)(n),"getPerformance",(function(){var e=n.props.cur_parent_cluster,t=n.state,r=t.metric,a=t.selectTime.times,i={cpu:"CPU",memory:"内存",disk:"磁盘",pod:"容器量"};ae.getClusterPerformance(e.id,{metric:r,from:Math.floor(a[0].valueOf()/1e3),to:Math.floor(a[1].valueOf()/1e3)},e.type).then((function(e){if(0===(e=e.data).code){if(e.data.lists.length){var t=(0,Y.cloneDeep)(V);t.yAxis.name="".concat(i[r],"使用情况（%）"),t.dataset={dimensions:["date","value"],source:e.data.lists},n.setState({performanceOption:t})}}else f.Z.error(e.msg)}))})),(0,m.Z)((0,l.Z)(n),"handleTimePickerShow",(function(){n.setState({timePicker:!n.state.timePicker})})),(0,m.Z)((0,l.Z)(n),"handleTimeChange",(function(e){n.setState({selectTime:e,timePicker:!1},(function(){n.getPerformance()}))})),n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){this.getPerformance()}},{key:"componentDidUpdate",value:function(e){e.cur_parent_cluster.id!==this.props.cur_parent_cluster.id&&this.getPerformance()}},{key:"render",value:function(){var e=this,t=this.props,r=t.overview,n=t.cur_parent_cluster,a=this.state,i=a.metric,o=a.performanceOption,l={metric:i,handleClick:this.handleClick};return v.createElement("div",{className:"resource-usage-page"},v.createElement("div",{className:"pg-l"},v.createElement(se,(0,F.Z)({},l,{type:"cpu",title:"CPU",usage:r.cpu_used_display,size:r.cpu_size_display})),v.createElement(se,(0,F.Z)({},l,{type:"memory",title:"內存",usage:r.mem_used_display,size:r.mem_size_display})),"hosts"===n.type?v.createElement(se,(0,F.Z)({},l,{type:"disk",title:"磁盘",usage:r.disk_used_display,size:r.disk_size_display})):v.createElement(se,(0,F.Z)({},l,{type:"pod",title:"容量",usage:r.pod_used_display,size:r.pod_size_display}))),v.createElement("div",{className:"pg-r"},v.createElement("div",{className:"component-timer-absolute"},v.createElement(W.Z,{type:"default",onClick:this.handleTimePickerShow},v.createElement(U.Z,{type:"clock-circle"})," ",this.state.selectTime.text),this.state.timePicker&&v.createElement("div",{className:"timer-picker box-shadow-style"},z()(X).call(X,(function(t,r){return v.createElement("ul",{key:r},z()(t).call(t,(function(t){var r;return v.createElement("li",{key:t.value,className:j()({active:e.state.selectTime.value===t.value}),onClick:T()(r=e.handleTimeChange).call(r,e,t)},t.text)})))})))),I()(o).length?v.createElement(ee.Z,{option:o,height:"100%"}):v.createElement(G.Z,{className:"c-ant_empty-center"})))}}]),r}(v.PureComponent),se=function(e){function t(e){var t=M()(e);return void 0===t||isNaN(t)?0:t}var r=e.type,n=e.title,a=t(e.usage),i=t(e.size),o=function(e,t){var r=(0,Y.cloneDeep)(Q),n=0===t?0:Number((e/t*100).toFixed(2));return r.series[1].data=[oe(oe({},r.series[1].data[0]),{},{itemStyle:{color:n>=window.APPCONFIG.ALARM_WARN?"#FF5F5C":n>=window.APPCONFIG.ALARM_HEALTH?"#FFB310":"#12BC6A"},value:n}),oe(oe({},r.series[1].data[1]),{},{value:150-n})],r}(a,i);return v.createElement("div",{className:j()("resource-usage-card",{"card-focus":e.metric===r}),onClick:function(){return e.handleClick(r)}},v.createElement("div",{className:"card-content"},v.createElement(ee.Z,{option:o,width:110,height:110}),v.createElement("div",{className:"card-info"},v.createElement("p",null,n,e.size&&"（".concat(e.size.replace(/[\d.]+/g,""),"）")),v.createElement("p",{className:"mt-10"},v.createElement("span",{className:"info-usage"},a)," / ",i))))},ue=r(51679),me=r.n(ue),pe={title:[{text:"{value|5}\n{name|总量 (个)}",top:"center",left:"center",padding:[0,10],textStyle:{rich:{value:{fontSize:48,fontWeight:600,color:"#333333",padding:[10,0]},name:{fontSize:12,color:"#666666"}}}}],legend:{icon:"circle",orient:"vertical",top:"center",right:"0%",itemGap:50,itemHeight:9,itemWidth:9,textStyle:{fontSize:20,rich:{name:{width:60,color:"#666"},value:{color:"#333",fontWeight:600}}},formatter:function(e){return"{name|".concat(e,"}{value|1132}")},data:["正常","异常"]},color:["#12BC6A","#FF5F5C"],series:[{type:"pie",radius:["55%","70%"],hoverAnimation:!1,label:{show:!1},data:[{name:"正常",value:5},{name:"异常",value:1}]}]},de={tooltip:{trigger:"axis"},grid:{top:"26px",left:"10px",right:"4px",bottom:"18px",containLabel:!0},dataset:{dimensions:["date","value"],source:[]},xAxis:[{type:"category",axisLine:{lineStyle:{color:"#e8e8e8"}},axisLabel:{color:"rgba(0,0,0,0.45)"}}],yAxis:[{type:"value",axisLine:{show:!1},axisLabel:{color:"rgba(0,0,0,0.45)",borderWidth:0,formatter:"{value}%"},axisTick:{show:!1},splitLine:{lineStyle:{type:"dashed"}}}],color:["#3F87FF"],series:[{name:"CPU usage",type:"bar",barWidth:"20"}]};function ve(e){var t=function(){if("undefined"==typeof Reflect||!a())return!1;if(a().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var i=(0,u.Z)(this).constructor;r=a()(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var fe=function(e){(0,c.Z)(r,e);var t=ve(r);function r(){var e,n;(0,i.Z)(this,r);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=t.call.apply(t,d()(e=[this]).call(e,o)),(0,m.Z)((0,l.Z)(n),"setOption",(function(){var e=n.props.overview,t=void 0===e?{}:e,r=t.nodes,a=void 0===r?0:r,i=t.error_nodes,o=void 0===i?0:i,l=(0,Y.cloneDeep)(pe),c=[{name:"正常",value:a-o},{name:"异常",value:o}];return 0===a&&(l.color=["#C9D0D4"]),l.title[0].text="{value|".concat(a,"}\n{name|总量 (个)}"),l.legend.formatter=function(e){var t,r=me()(c).call(c,(function(t){return t.name===e}))||{};return d()(t="{name|".concat(e,"}{value|")).call(t,r.value,"}")},l.series[0].data=c,l})),n}return(0,o.Z)(r,[{key:"render",value:function(){var e=this.setOption();return v.createElement("div",{className:"index-view-card"},v.createElement("p",{className:"title"},"节点"),v.createElement(ee.Z,{style:{marginLeft:"-20%"},option:e,width:"100%",height:"100%"}))}}]),r}(v.PureComponent),he=r(58309),ye=r.n(he),ge=r(31097);function Ze(e){var t=function(){if("undefined"==typeof Reflect||!a())return!1;if(a().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var i=(0,u.Z)(this).constructor;r=a()(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var Ee=function(e){(0,c.Z)(r,e);var t=Ze(r);function r(){return(0,i.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"render",value:function(){var e,t=this.props.overview,r=void 0===t?{}:t;return v.createElement("div",{className:"index-view-card"},v.createElement("p",{className:"title"},"组件状态"),v.createElement("div",{style:{padding:38}},ye()(r.component)&&r.component.length?z()(e=r.component).call(e,(function(e){return v.createElement("div",{key:e.role,className:"component-status-item "+(0===e.status?"item-success":"item-error")},v.createElement("div",{className:"item-icon"},v.createElement(U.Z,{type:0===e.status?"check":"exclamation",style:{color:"#fff"}})),v.createElement("div",{className:"item-content"},e.role),1===e.status&&v.createElement(ge.Z,{title:e.errors.join(",")},v.createElement(U.Z,{className:"tooltip-error",type:"exclamation-circle",style:{color:"#999",alignSelf:"center"}})))})):v.createElement(G.Z,{className:"c-ant_empty-center"})))}}]),r}(v.PureComponent),be=r(87589),xe=r(4243);function we(e){var t=function(){if("undefined"==typeof Reflect||!a())return!1;if(a().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var i=(0,u.Z)(this).constructor;r=a()(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var _e=function(e){(0,c.Z)(r,e);var t=we(r);function r(){return(0,i.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.cur_parent_cluster,r=void 0===t?{}:t,n=e.overview,a=void 0===n?{}:n,i=r.type,o=void 0===i?"hosts":i,l=r.mode;return v.createElement("div",{className:"index-view-card"},v.createElement("p",{className:"title"},"集群信息"),v.createElement(be.Z,{className:"c-cluster__description",column:1,bordered:!0},v.createElement(be.Z.Item,{label:"集群模式"},xe.OY[o]?xe.OY[o][l]:""),"kubernetes"===o&&v.createElement(be.Z.Item,{label:"kubernetes版本"},a.version||"--"),v.createElement(be.Z.Item,{label:"节点数"},a.nodes),v.createElement(be.Z.Item,{label:"CPU"},a.cpu_size_display),v.createElement(be.Z.Item,{label:"内存"},a.mem_size_display),"kubernetes"===o?v.createElement(be.Z.Item,{label:"PODS"},a.pod_size_display):v.createElement(be.Z.Item,{label:"磁盘"},a.disk_size_display),v.createElement(be.Z.Item,{label:"创建人"},a.create_user),v.createElement(be.Z.Item,{label:"创建时间"},J()(a.create_time).format("YYYY-MM-DD HH:mm:ss"))))}}]),r}(v.PureComponent);function Ce(e,t){var r=I()(e);if(E()){var n=E()(e);t&&(n=x()(n).call(n,(function(t){return _()(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ne(e){for(var t=1;t<arguments.length;t++){var r,n,a=null!=arguments[t]?arguments[t]:{};t%2?N()(r=Ce(Object(a),!0)).call(r,(function(t){(0,m.Z)(e,t,a[t])})):k()?A()(e,k()(a)):N()(n=Ce(Object(a))).call(n,(function(t){L()(e,t,_()(a,t))}))}return e}function Pe(e){var t=function(){if("undefined"==typeof Reflect||!a())return!1;if(a().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var i=(0,u.Z)(this).constructor;r=a()(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var ke=function(e){(0,c.Z)(r,e);var t=Pe(r);function r(){var e,n;(0,i.Z)(this,r);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=t.call.apply(t,d()(e=[this]).call(e,o)),(0,m.Z)((0,l.Z)(n),"setOption",(function(e){var t,r,n=(0,Y.cloneDeep)(pe),a=0===e.capacity?0:Number((e.load/e.capacity*100).toFixed(2));return n.title[0]=Ne(Ne({},n.title[0]),{},{text:d()(t=d()(r="{value|".concat(a,"}%\n{name|")).call(r,e.load,"/")).call(t,e.capacity,"}"),textStyle:{rich:{value:{fontSize:20,fontWeight:600,color:"#333333",padding:[5,0]},name:{fontSize:12,color:"#666666"}}}}),n.legend=void 0,n.series[0]=Ne(Ne({},n.series[0]),{},{data:[{name:"load",value:e.load},{name:"unload",value:e.capacity-e.load}]}),0===e.load&&(n.color=["#C9D0D4"]),n})),n}return(0,o.Z)(r,[{key:"render",value:function(){var e,t=this,r=this.props.overview,n=void 0===r?{}:r;return v.createElement("div",{className:"index-view-card work-load-page"},v.createElement("p",{className:"title"},"工作负载"),v.createElement("div",{className:"work-load-content"},n.workload&&z()(e=I()(n.workload)).call(e,(function(e){var r=n.workload[e],a=t.setOption(r);return v.createElement("div",{key:e},v.createElement(ee.Z,{option:a,width:150,height:150}),v.createElement("p",null,e))}))))}}]),r}(v.PureComponent);function Oe(e){var t=function(){if("undefined"==typeof Reflect||!a())return!1;if(a().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var i=(0,u.Z)(this).constructor;r=a()(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var Ae,Se=function(e){(0,c.Z)(r,e);var t=Oe(r);function r(){var e,n;(0,i.Z)(this,r);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=t.call.apply(t,d()(e=[this]).call(e,o)),(0,m.Z)((0,l.Z)(n),"setOption",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=(0,Y.cloneDeep)(de);return r.dataset={dimensions:["ip","usage"],source:e},r.series[0].name="".concat(t," Usage"),r.tooltip={trigger:"axis",formatter:function(e){var t=e[0].value;return'<div style="font-size:12px"><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#3f87ff;"></span><span>'+t.ip+"</span></br><span>"+e[0].seriesName+": "+Number(M()(t.usage).toFixed(2))+"%</span></div>"}},r})),n}return(0,o.Z)(r,[{key:"render",value:function(){var e=this.props.overview.metrics,t=void 0===e?{}:e;return v.createElement("div",{className:"top-five-usage-page"},v.createElement("div",{className:"index-view-card mb-20"},v.createElement("p",{className:"title"},"节点使用率TOP5")),v.createElement(h.Z,{gutter:20},v.createElement(y.Z,{span:12},v.createElement("div",{className:"index-view-card",style:{height:379}},v.createElement("p",{className:"title"},"CPU"),ye()(t.cpu_top5)&&t.cpu_top5.length?v.createElement(ee.Z,{option:this.setOption(t.cpu_top5,"CPU"),width:"100%",height:"100%"}):v.createElement(G.Z,{className:"c-ant_empty-center"}))),v.createElement(y.Z,{span:12},v.createElement("div",{className:"index-view-card",style:{height:379}},v.createElement("p",{className:"title"},"內存"),ye()(t.mem_top5)&&t.mem_top5.length?v.createElement(ee.Z,{option:this.setOption(t.mem_top5,"Memory"),width:"100%",height:"100%"}):v.createElement(G.Z,{className:"c-ant_empty-center"})))))}}]),r}(v.PureComponent);function Le(e){var t=function(){if("undefined"==typeof Reflect||!a())return!1;if(a().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var i=(0,u.Z)(this).constructor;r=a()(n,arguments,i)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var Fe=(0,g.$j)((function(e){return{HeaderStore:e.HeaderStore}}),void 0)(Ae=function(e){(0,c.Z)(r,e);var t=Le(r);function r(){var e,n;(0,i.Z)(this,r);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=t.call.apply(t,d()(e=[this]).call(e,o)),(0,m.Z)((0,l.Z)(n),"state",{overview:{}}),(0,m.Z)((0,l.Z)(n),"getClusterOverview",(function(){var e=n.props.HeaderStore.cur_parent_cluster;ae.getClusterOverview({cluster_id:e.id},e.type).then((function(e){0===(e=e.data).code?n.setState({overview:e.data}):f.Z.error(e.msg)}))})),n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){this.getClusterOverview()}},{key:"componentDidUpdate",value:function(e){e.HeaderStore.cur_parent_cluster.id!==this.props.HeaderStore.cur_parent_cluster.id&&this.getClusterOverview()}},{key:"render",value:function(){var e=this.state.overview,t=void 0===e?{}:e,r=this.props.HeaderStore.cur_parent_cluster,n="kubernetes"===r.type;return v.createElement("div",{className:"cluster-page-body cluster-overflow"},v.createElement(ce,{overview:t,cur_parent_cluster:r}),n?v.createElement(h.Z,{className:"mt-20",gutter:20},v.createElement(y.Z,{span:8},v.createElement(fe,{overview:t})),v.createElement(y.Z,{span:8},v.createElement(Ee,{overview:t})),v.createElement(y.Z,{span:8},v.createElement(_e,{overview:t,cur_parent_cluster:r}))):v.createElement(h.Z,{className:"mt-20",gutter:20},v.createElement(y.Z,{span:12},v.createElement(fe,{overview:t})),v.createElement(y.Z,{span:12},v.createElement(_e,{overview:t,cur_parent_cluster:r}))),n&&v.createElement("div",{className:"mt-20"},v.createElement(ke,{overview:t})),v.createElement("div",{className:"mt-20"},v.createElement(Se,{overview:t})))}}]),r}(v.PureComponent))||Ae}}]);
(self.webpackChunkHMC=self.webpackChunkHMC||[]).push([[2054],{99337:(e,t,i)=>{var o=i(76172),n=o.getLayoutRect,r=o.box,s=o.positionElement,a=i(78988),l=i(51177);t.layout=function(e,t,i){var o=t.getBoxLayoutParams(),a=t.get("padding"),l={width:i.getWidth(),height:i.getHeight()},h=n(o,l,a);r(t.get("orient"),e,t.get("itemGap"),h.width,h.height),s(e,o,l,a)},t.makeBackground=function(e,t){var i=a.normalizeCssArray(t.get("padding")),o=t.getItemStyle(["color","opacity"]);return o.fill=t.get("backgroundColor"),e=new l.Rect({shape:{x:e.x-i[3],y:e.y-i[0],width:e.width+i[1]+i[3],height:e.height+i[0]+i[2],r:t.get("borderRadius")},style:o,silent:!0,z2:-1})}},78511:(e,t,i)=>{var o=i(70492);i(73650),i(13174),i(13134);var n=i(3391),r=i(98071);o.registerProcessor(o.PRIORITY.PROCESSOR.SERIES_FILTER,n),r.registerSubTypeDefaulter("legend",(function(){return"plain"}))},73650:(e,t,i)=>{var o=i(70492),n=i(33051),r=i(4272),s=i(32234).isNameSpecified,a=i(40292).legend.selector,l={all:{type:"all",title:n.clone(a.all)},inverse:{type:"inverse",title:n.clone(a.inverse)}},h=o.extendComponentModel({type:"legend.plain",dependencies:["series"],layoutMode:{type:"box",ignoreSize:!0},init:function(e,t,i){this.mergeDefaultAndTheme(e,i),e.selected=e.selected||{},this._updateSelector(e)},mergeOption:function(e){h.superCall(this,"mergeOption",e),this._updateSelector(e)},_updateSelector:function(e){var t=e.selector;!0===t&&(t=e.selector=["all","inverse"]),n.isArray(t)&&n.each(t,(function(e,i){n.isString(e)&&(e={type:e}),t[i]=n.merge(e,l[e.type])}))},optionUpdated:function(){this._updateData(this.ecModel);var e=this._data;if(e[0]&&"single"===this.get("selectedMode")){for(var t=!1,i=0;i<e.length;i++){var o=e[i].get("name");if(this.isSelected(o)){this.select(o),t=!0;break}}!t&&this.select(e[0].get("name"))}},_updateData:function(e){var t=[],i=[];e.eachRawSeries((function(o){var n,r=o.name;if(i.push(r),o.legendVisualProvider){var a=o.legendVisualProvider.getAllNames();e.isSeriesFiltered(o)||(i=i.concat(a)),a.length?t=t.concat(a):n=!0}else n=!0;n&&s(o)&&t.push(o.name)})),this._availableNames=i;var o=this.get("data")||t,a=n.map(o,(function(e){return"string"!=typeof e&&"number"!=typeof e||(e={name:e}),new r(e,this,this.ecModel)}),this);this._data=a},getData:function(){return this._data},select:function(e){var t=this.option.selected;if("single"===this.get("selectedMode")){var i=this._data;n.each(i,(function(e){t[e.get("name")]=!1}))}t[e]=!0},unSelect:function(e){"single"!==this.get("selectedMode")&&(this.option.selected[e]=!1)},toggleSelected:function(e){var t=this.option.selected;t.hasOwnProperty(e)||(t[e]=!0),this[t[e]?"unSelect":"select"](e)},allSelect:function(){var e=this._data,t=this.option.selected;n.each(e,(function(e){t[e.get("name",!0)]=!0}))},inverseSelect:function(){var e=this._data,t=this.option.selected;n.each(e,(function(e){var i=e.get("name",!0);t.hasOwnProperty(i)||(t[i]=!0),t[i]=!t[i]}))},isSelected:function(e){var t=this.option.selected;return!(t.hasOwnProperty(e)&&!t[e])&&n.indexOf(this._availableNames,e)>=0},getOrient:function(){return"vertical"===this.get("orient")?{index:1,name:"vertical"}:{index:0,name:"horizontal"}},defaultOption:{zlevel:0,z:4,show:!0,orient:"horizontal",left:"center",top:0,align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,inactiveColor:"#ccc",inactiveBorderColor:"#ccc",itemStyle:{borderWidth:0},textStyle:{color:"#333"},selectedMode:!0,selector:!1,selectorLabel:{show:!0,borderRadius:10,padding:[3,5,3,5],fontSize:12,fontFamily:" sans-serif",color:"#666",borderWidth:1,borderColor:"#666"},emphasis:{selectorLabel:{show:!0,color:"#eee",backgroundColor:"#666"}},selectorPosition:"auto",selectorItemGap:7,selectorButtonGap:10,tooltip:{show:!1}}}),d=h;e.exports=d},13134:(e,t,i)=>{i(38175).__DEV__;var o=i(70492),n=i(33051),r=i(41525).createSymbol,s=i(51177),a=i(99337).makeBackground,l=i(76172),h=n.curry,d=n.each,u=s.Group,c=o.extendComponentView({type:"legend.plain",newlineDisabled:!1,init:function(){this.group.add(this._contentGroup=new u),this._backgroundEl,this.group.add(this._selectorGroup=new u),this._isFirstRender=!0},getContentGroup:function(){return this._contentGroup},getSelectorGroup:function(){return this._selectorGroup},render:function(e,t,i){var o=this._isFirstRender;if(this._isFirstRender=!1,this.resetInner(),e.get("show",!0)){var r=e.get("align"),s=e.get("orient");r&&"auto"!==r||(r="right"===e.get("left")&&"vertical"===s?"right":"left");var h=e.get("selector",!0),d=e.get("selectorPosition",!0);!h||d&&"auto"!==d||(d="horizontal"===s?"end":"start"),this.renderInner(r,e,t,i,h,s,d);var u=e.getBoxLayoutParams(),c={width:i.getWidth(),height:i.getHeight()},g=e.get("padding"),p=l.getLayoutRect(u,c,g),f=this.layoutInner(e,r,p,o,h,d),m=l.getLayoutRect(n.defaults({width:f.width,height:f.height},u),c,g);this.group.attr("position",[m.x-f.x,m.y-f.y]),this.group.add(this._backgroundEl=a(f,e))}},resetInner:function(){this.getContentGroup().removeAll(),this._backgroundEl&&this.group.remove(this._backgroundEl),this.getSelectorGroup().removeAll()},renderInner:function(e,t,i,o,r,s,a){var l=this.getContentGroup(),c=n.createHashMap(),g=t.get("selectedMode"),y=[];i.eachRawSeries((function(e){!e.get("legendHoverLink")&&y.push(e.id)})),d(t.getData(),(function(n,r){var s=n.get("name");if(this.newlineDisabled||""!==s&&"\n"!==s){var a=i.getSeriesByName(s)[0];if(!c.get(s))if(a){var d=a.getData(),v=d.getVisual("color"),_=d.getVisual("borderColor");"function"==typeof v&&(v=v(a.getDataParams(0))),"function"==typeof _&&(_=_(a.getDataParams(0)));var x=d.getVisual("legendSymbol")||"roundRect",w=d.getVisual("symbol");this._createItem(s,r,n,t,x,w,e,v,_,g).on("click",h(p,s,null,o,y)).on("mouseover",h(f,a.name,null,o,y)).on("mouseout",h(m,a.name,null,o,y)),c.set(s,!0)}else i.eachRawSeries((function(i){if(!c.get(s)&&i.legendVisualProvider){var a=i.legendVisualProvider;if(!a.containName(s))return;var l=a.indexOfName(s),d=a.getItemVisual(l,"color"),u=a.getItemVisual(l,"borderColor");this._createItem(s,r,n,t,"roundRect",null,e,d,u,g).on("click",h(p,null,s,o,y)).on("mouseover",h(f,null,s,o,y)).on("mouseout",h(m,null,s,o,y)),c.set(s,!0)}}),this)}else l.add(new u({newline:!0}))}),this),r&&this._createSelector(r,t,o,s,a)},_createSelector:function(e,t,i,o,n){var r=this.getSelectorGroup();d(e,(function(e){!function(e){var o=e.type,n=new s.Text({style:{x:0,y:0,align:"center",verticalAlign:"middle"},onclick:function(){i.dispatchAction({type:"all"===o?"legendAllSelect":"legendInverseSelect"})}});r.add(n);var a=t.getModel("selectorLabel"),l=t.getModel("emphasis.selectorLabel");s.setLabelStyle(n.style,n.hoverStyle={},a,l,{defaultText:e.title,isRectText:!1}),s.setHoverStyle(n)}(e)}))},_createItem:function(e,t,i,o,a,l,h,d,c,p){var f=o.get("itemWidth"),m=o.get("itemHeight"),y=o.get("inactiveColor"),v=o.get("inactiveBorderColor"),_=o.get("symbolKeepAspect"),x=o.getModel("itemStyle"),w=o.isSelected(e),S=new u,b=i.getModel("textStyle"),C=i.get("icon"),T=i.getModel("tooltip"),I=T.parentModel,M=r(a=C||a,0,0,f,m,w?d:y,null==_||_);if(S.add(g(M,a,x,c,v,w)),!C&&l&&(l!==a||"none"===l)){var k=.8*m;"none"===l&&(l="circle");var z=r(l,(f-k)/2,(m-k)/2,k,k,w?d:y,null==_||_);S.add(g(z,l,x,c,v,w))}var R="left"===h?f+5:-5,B=h,A=o.get("formatter"),D=e;"string"==typeof A&&A?D=A.replace("{name}",null!=e?e:""):"function"==typeof A&&(D=A(e)),S.add(new s.Text({style:s.setTextStyle({},b,{text:D,x:R,y:m/2,textFill:w?b.getTextColor():y,textAlign:B,textVerticalAlign:"middle"})}));var O=new s.Rect({shape:S.getBoundingRect(),invisible:!0,tooltip:T.get("show")?n.extend({content:e,formatter:I.get("formatter",!0)||function(){return e},formatterParams:{componentType:"legend",legendIndex:o.componentIndex,name:e,$vars:["name"]}},T.option):null});return S.add(O),S.eachChild((function(e){e.silent=!0})),O.silent=!p,this.getContentGroup().add(S),s.setHoverStyle(S),S.__legendDataIndex=t,S},layoutInner:function(e,t,i,o,n,r){var s=this.getContentGroup(),a=this.getSelectorGroup();l.box(e.get("orient"),s,e.get("itemGap"),i.width,i.height);var h=s.getBoundingRect(),d=[-h.x,-h.y];if(n){l.box("horizontal",a,e.get("selectorItemGap",!0));var u=a.getBoundingRect(),c=[-u.x,-u.y],g=e.get("selectorButtonGap",!0),p=e.getOrient().index,f=0===p?"width":"height",m=0===p?"height":"width",y=0===p?"y":"x";"end"===r?c[p]+=h[f]+g:d[p]+=u[f]+g,c[1-p]+=h[m]/2-u[m]/2,a.attr("position",c),s.attr("position",d);var v={x:0,y:0};return v[f]=h[f]+g+u[f],v[m]=Math.max(h[m],u[m]),v[y]=Math.min(0,u[y]+c[1-p]),v}return s.attr("position",d),this.group.getBoundingRect()},remove:function(){this.getContentGroup().removeAll(),this._isFirstRender=!0}});function g(e,t,i,o,n,r){var s;return"line"!==t&&t.indexOf("empty")<0?(s=i.getItemStyle(),e.style.stroke=o,r||(s.stroke=n)):s=i.getItemStyle(["borderWidth","borderColor"]),e.setStyle(s)}function p(e,t,i,o){m(e,t,i,o),i.dispatchAction({type:"legendToggleSelect",name:null!=e?e:t}),f(e,t,i,o)}function f(e,t,i,o){var n=i.getZr().storage.getDisplayList()[0];n&&n.useHoverLayer||i.dispatchAction({type:"highlight",seriesName:e,name:t,excludeSeriesId:o})}function m(e,t,i,o){var n=i.getZr().storage.getDisplayList()[0];n&&n.useHoverLayer||i.dispatchAction({type:"downplay",seriesName:e,name:t,excludeSeriesId:o})}e.exports=c},13174:(e,t,i)=>{var o=i(70492),n=i(33051);function r(e,t,i){var o,r={},s="toggleSelected"===e;return i.eachComponent("legend",(function(i){s&&null!=o?i[o?"select":"unSelect"](t.name):"allSelect"===e||"inverseSelect"===e?i[e]():(i[e](t.name),o=i.isSelected(t.name));var a=i.getData();n.each(a,(function(e){var t=e.get("name");if("\n"!==t&&""!==t){var o=i.isSelected(t);r.hasOwnProperty(t)?r[t]=r[t]&&o:r[t]=o}}))})),"allSelect"===e||"inverseSelect"===e?{selected:r}:{name:t.name,selected:r}}o.registerAction("legendToggleSelect","legendselectchanged",n.curry(r,"toggleSelected")),o.registerAction("legendAllSelect","legendselectall",n.curry(r,"allSelect")),o.registerAction("legendInverseSelect","legendinverseselect",n.curry(r,"inverseSelect")),o.registerAction("legendSelect","legendselected",n.curry(r,"select")),o.registerAction("legendUnSelect","legendunselected",n.curry(r,"unSelect"))},3391:e=>{e.exports=function(e){var t=e.findComponents({mainType:"legend"});t&&t.length&&e.filterSeries((function(e){for(var i=0;i<t.length;i++)if(!t[i].isSelected(e.name))return!1;return!0}))}},21865:(e,t,i)=>{var o=i(33051),n=i(70492),r=i(51177),s=i(76172).getLayoutRect,a=i(78988).windowOpen;n.extendComponentModel({type:"title",layoutMode:{type:"box",ignoreSize:!0},defaultOption:{zlevel:0,z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:0,top:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bolder",color:"#333"},subtextStyle:{color:"#aaa"}}}),n.extendComponentView({type:"title",render:function(e,t,i){if(this.group.removeAll(),e.get("show")){var n=this.group,l=e.getModel("textStyle"),h=e.getModel("subtextStyle"),d=e.get("textAlign"),u=o.retrieve2(e.get("textBaseline"),e.get("textVerticalAlign")),c=new r.Text({style:r.setTextStyle({},l,{text:e.get("text"),textFill:l.getTextColor()},{disableBox:!0}),z2:10}),g=c.getBoundingRect(),p=e.get("subtext"),f=new r.Text({style:r.setTextStyle({},h,{text:p,textFill:h.getTextColor(),y:g.height+e.get("itemGap"),textVerticalAlign:"top"},{disableBox:!0}),z2:10}),m=e.get("link"),y=e.get("sublink"),v=e.get("triggerEvent",!0);c.silent=!m&&!v,f.silent=!y&&!v,m&&c.on("click",(function(){a(m,"_"+e.get("target"))})),y&&f.on("click",(function(){a(y,"_"+e.get("subtarget"))})),c.eventData=f.eventData=v?{componentType:"title",componentIndex:e.componentIndex}:null,n.add(c),p&&n.add(f);var _=n.getBoundingRect(),x=e.getBoxLayoutParams();x.width=_.width,x.height=_.height;var w=s(x,{width:i.getWidth(),height:i.getHeight()},e.get("padding"));d||("middle"===(d=e.get("left")||e.get("right"))&&(d="center"),"right"===d?w.x+=w.width:"center"===d&&(w.x+=w.width/2)),u||("center"===(u=e.get("top")||e.get("bottom"))&&(u="middle"),"bottom"===u?w.y+=w.height:"middle"===u&&(w.y+=w.height/2),u=u||"top"),n.attr("position",[w.x,w.y]);var S={textAlign:d,textVerticalAlign:u};c.setStyle(S),f.setStyle(S),_=n.getBoundingRect();var b=w.margin,C=e.getItemStyle(["color","opacity"]);C.fill=e.get("backgroundColor");var T=new r.Rect({shape:{x:_.x-b[3],y:_.y-b[0],width:_.width+b[1]+b[3],height:_.height+b[0]+b[2],r:e.get("borderRadius")},style:C,subPixelOptimize:!0,silent:!0});n.add(T)}}})},83062:(e,t,i)=>{var o=i(70492);i(52528),i(16470),i(88085),o.registerAction({type:"showTip",event:"showTip",update:"tooltip:manuallyShowTip"},(function(){})),o.registerAction({type:"hideTip",event:"hideTip",update:"tooltip:manuallyHideTip"},(function(){}))},36333:(e,t,i)=>{var o=i(33051),n=i(21092),r=i(61158),s=i(18553),a=i(66387),l=i(78988),h=o.each,d=l.toCamelCase,u=["","-webkit-","-moz-","-o-"];function c(e){var t,i,r=[],s=e.get("transitionDuration"),c=e.get("backgroundColor"),g=e.getModel("textStyle"),p=e.get("padding");return s&&r.push((i="left "+(t=s)+"s cubic-bezier(0.23, 1, 0.32, 1),top "+t+"s cubic-bezier(0.23, 1, 0.32, 1)",o.map(u,(function(e){return e+"transition:"+i})).join(";"))),c&&(a.canvasSupported?r.push("background-Color:"+c):(r.push("background-Color:#"+n.toHex(c)),r.push("filter:alpha(opacity=70)"))),h(["width","color","radius"],(function(t){var i="border-"+t,o=d(i),n=e.get(o);null!=n&&r.push(i+":"+n+("color"===t?"":"px"))})),r.push(function(e){var t=[],i=e.get("fontSize"),o=e.getTextColor();o&&t.push("color:"+o),t.push("font:"+e.getFont());var n=e.get("lineHeight");null==n&&(n=Math.round(3*i/2)),i&&t.push("line-height:"+n+"px");var r=e.get("textShadowColor"),s=e.get("textShadowBlur")||0,a=e.get("textShadowOffsetX")||0,l=e.get("textShadowOffsetY")||0;return s&&t.push("text-shadow:"+a+"px "+l+"px "+s+"px "+r),h(["decoration","align"],(function(i){var o=e.get(i);o&&t.push("text-"+i+":"+o)})),t.join(";")}(g)),null!=p&&r.push("padding:"+l.normalizeCssArray(p).join("px ")+"px"),r.join(";")+";"}function g(e,t,i,o,n){var r=t&&t.painter;if(i){var a=r&&r.getViewportRoot();a&&s.transformLocalCoord(e,a,document.body,o,n)}else{e[0]=o,e[1]=n;var l=r&&r.getViewportRootOffset();l&&(e[0]+=l.offsetLeft,e[1]+=l.offsetTop)}e[2]=e[0]/t.getWidth(),e[3]=e[1]/t.getHeight()}function p(e,t,i){if(a.wxa)return null;var o=document.createElement("div");o.domBelongToZr=!0,this.el=o;var n=this._zr=t.getZr(),s=this._appendToBody=i&&i.appendToBody;this._styleCoord=[0,0,0,0],g(this._styleCoord,n,s,t.getWidth()/2,t.getHeight()/2),s?document.body.appendChild(o):e.appendChild(o),this._container=e,this._show=!1,this._hideTimeout;var l=this;o.onmouseenter=function(){l._enterable&&(clearTimeout(l._hideTimeout),l._show=!0),l._inContent=!0},o.onmousemove=function(e){if(e=e||window.event,!l._enterable){var t=n.handler,i=n.painter.getViewportRoot();r.normalizeEvent(i,e,!0),t.dispatch("mousemove",e)}},o.onmouseleave=function(){l._enterable&&l._show&&l.hideLater(l._hideDelay),l._inContent=!1}}p.prototype={constructor:p,_enterable:!0,update:function(e){var t=this._container,i=t.currentStyle||document.defaultView.getComputedStyle(t),o=t.style;"absolute"!==o.position&&"absolute"!==i.position&&(o.position="relative"),e.get("alwaysShowContent")&&this._moveTooltipIfResized()},_moveTooltipIfResized:function(){var e=this._styleCoord[2],t=this._styleCoord[3],i=e*this._zr.getWidth(),o=t*this._zr.getHeight();this.moveTo(i,o)},show:function(e){clearTimeout(this._hideTimeout);var t=this.el,i=this._styleCoord;t.style.cssText="position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;"+c(e)+";left:"+i[0]+"px;top:"+i[1]+"px;"+(e.get("extraCssText")||""),t.style.display=t.innerHTML?"block":"none",t.style.pointerEvents=this._enterable?"auto":"none",this._show=!0},setContent:function(e){this.el.innerHTML=null==e?"":e},setEnterable:function(e){this._enterable=e},getSize:function(){var e=this.el;return[e.clientWidth,e.clientHeight]},moveTo:function(e,t){var i=this._styleCoord;g(i,this._zr,this._appendToBody,e,t);var o=this.el.style;o.left=i[0]+"px",o.top=i[1]+"px"},hide:function(){this.el.style.display="none",this._show=!1},hideLater:function(e){!this._show||this._inContent&&this._enterable||(e?(this._hideDelay=e,this._show=!1,this._hideTimeout=setTimeout(o.bind(this.hide,this),e)):this.hide())},isShow:function(){return this._show},dispose:function(){this.el.parentNode.removeChild(this.el)},getOuterSize:function(){var e=this.el.clientWidth,t=this.el.clientHeight;if(document.defaultView&&document.defaultView.getComputedStyle){var i=document.defaultView.getComputedStyle(this.el);i&&(e+=parseInt(i.borderLeftWidth,10)+parseInt(i.borderRightWidth,10),t+=parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10))}return{width:e,height:t}}};var f=p;e.exports=f},16470:(e,t,i)=>{var o=i(70492).extendComponentModel({type:"tooltip",dependencies:["axisPointer"],defaultOption:{zlevel:0,z:60,show:!0,showContent:!0,trigger:"item",triggerOn:"mousemove|click",alwaysShowContent:!1,displayMode:"single",renderMode:"auto",confine:!1,showDelay:0,hideDelay:100,transitionDuration:.4,enterable:!1,backgroundColor:"rgba(50,50,50,0.7)",borderColor:"#333",borderRadius:4,borderWidth:0,padding:5,extraCssText:"",axisPointer:{type:"line",axis:"auto",animation:"auto",animationDurationUpdate:200,animationEasingUpdate:"exponentialOut",crossStyle:{color:"#999",width:1,type:"dashed",textStyle:{}}},textStyle:{color:"#fff",fontSize:14}}});e.exports=o},97634:(e,t,i)=>{var o=i(33051),n=i(96498),r=i(51177);function s(e,t,i,o){e[0]=i,e[1]=o,e[2]=e[0]/t.getWidth(),e[3]=e[1]/t.getHeight()}function a(e){var t=this._zr=e.getZr();this._styleCoord=[0,0,0,0],s(this._styleCoord,t,e.getWidth()/2,e.getHeight()/2),this._show=!1,this._hideTimeout}a.prototype={constructor:a,_enterable:!0,update:function(e){e.get("alwaysShowContent")&&this._moveTooltipIfResized()},_moveTooltipIfResized:function(){var e=this._styleCoord[2],t=this._styleCoord[3],i=e*this._zr.getWidth(),o=t*this._zr.getHeight();this.moveTo(i,o)},show:function(e){this._hideTimeout&&clearTimeout(this._hideTimeout),this.el.attr("show",!0),this._show=!0},setContent:function(e,t,i){this.el&&this._zr.remove(this.el);for(var o={},s=e,a=s.indexOf("{marker");a>=0;){var l=s.indexOf("|}"),h=s.substr(a+"{marker".length,l-a-"{marker".length);h.indexOf("sub")>-1?o["marker"+h]={textWidth:4,textHeight:4,textBorderRadius:2,textBackgroundColor:t[h],textOffset:[3,0]}:o["marker"+h]={textWidth:10,textHeight:10,textBorderRadius:5,textBackgroundColor:t[h]},a=(s=s.substr(l+1)).indexOf("{marker")}var d=i.getModel("textStyle"),u=d.get("fontSize"),c=i.get("textLineHeight");null==c&&(c=Math.round(3*u/2)),this.el=new n({style:r.setTextStyle({},d,{rich:o,text:e,textBackgroundColor:i.get("backgroundColor"),textBorderRadius:i.get("borderRadius"),textFill:i.get("textStyle.color"),textPadding:i.get("padding"),textLineHeight:c}),z:i.get("z")}),this._zr.add(this.el);var g=this;this.el.on("mouseover",(function(){g._enterable&&(clearTimeout(g._hideTimeout),g._show=!0),g._inContent=!0})),this.el.on("mouseout",(function(){g._enterable&&g._show&&g.hideLater(g._hideDelay),g._inContent=!1}))},setEnterable:function(e){this._enterable=e},getSize:function(){var e=this.el.getBoundingRect();return[e.width,e.height]},moveTo:function(e,t){if(this.el){var i=this._styleCoord;s(i,this._zr,e,t),this.el.attr("position",[i[0],i[1]])}},hide:function(){this.el&&this.el.hide(),this._show=!1},hideLater:function(e){!this._show||this._inContent&&this._enterable||(e?(this._hideDelay=e,this._show=!1,this._hideTimeout=setTimeout(o.bind(this.hide,this),e)):this.hide())},isShow:function(){return this._show},dispose:function(){clearTimeout(this._hideTimeout),this.el&&this._zr.remove(this.el)},getOuterSize:function(){var e=this.getSize();return{width:e[0],height:e[1]}}};var l=a;e.exports=l},88085:(e,t,i)=>{var o=i(70492),n=i(33051),r=i(66387),s=i(36333),a=i(97634),l=i(78988),h=i(85669),d=i(51177),u=i(92448),c=i(76172),g=i(4272),p=i(56996),f=i(97980),m=i(75539),y=i(32234).getTooltipRenderMode,v=n.bind,_=n.each,x=h.parsePercent,w=new d.Rect({shape:{x:-1,y:-1,width:2,height:2}}),S=o.extendComponentView({type:"tooltip",init:function(e,t){if(!r.node){var i,o=e.getComponent("tooltip"),n=o.get("renderMode");this._renderMode=y(n),"html"===this._renderMode?(i=new s(t.getDom(),t,{appendToBody:o.get("appendToBody",!0)}),this._newLine="<br/>"):(i=new a(t),this._newLine="\n"),this._tooltipContent=i}},render:function(e,t,i){if(!r.node){this.group.removeAll(),this._tooltipModel=e,this._ecModel=t,this._api=i,this._lastDataByCoordSys=null,this._alwaysShowContent=e.get("alwaysShowContent");var o=this._tooltipContent;o.update(e),o.setEnterable(e.get("enterable")),this._initGlobalListener(),this._keepShow()}},_initGlobalListener:function(){var e=this._tooltipModel.get("triggerOn");p.register("itemTooltip",this._api,v((function(t,i,o){"none"!==e&&(e.indexOf(t)>=0?this._tryShow(i,o):"leave"===t&&this._hide(o))}),this))},_keepShow:function(){var e=this._tooltipModel,t=this._ecModel,i=this._api;if(null!=this._lastX&&null!=this._lastY&&"none"!==e.get("triggerOn")){var o=this;clearTimeout(this._refreshUpdateTimeout),this._refreshUpdateTimeout=setTimeout((function(){!i.isDisposed()&&o.manuallyShowTip(e,t,i,{x:o._lastX,y:o._lastY})}))}},manuallyShowTip:function(e,t,i,o){if(o.from!==this.uid&&!r.node){var n=C(o,i);this._ticket="";var s=o.dataByCoordSys;if(o.tooltip&&null!=o.x&&null!=o.y){var a=w;a.position=[o.x,o.y],a.update(),a.tooltip=o.tooltip,this._tryShow({offsetX:o.x,offsetY:o.y,target:a},n)}else if(s)this._tryShow({offsetX:o.x,offsetY:o.y,position:o.position,dataByCoordSys:o.dataByCoordSys,tooltipOption:o.tooltipOption},n);else if(null!=o.seriesIndex){if(this._manuallyAxisShowTip(e,t,i,o))return;var l=u(o,t),h=l.point[0],d=l.point[1];null!=h&&null!=d&&this._tryShow({offsetX:h,offsetY:d,position:o.position,target:l.el},n)}else null!=o.x&&null!=o.y&&(i.dispatchAction({type:"updateAxisPointer",x:o.x,y:o.y}),this._tryShow({offsetX:o.x,offsetY:o.y,position:o.position,target:i.getZr().findHover(o.x,o.y).target},n))}},manuallyHideTip:function(e,t,i,o){var n=this._tooltipContent;!this._alwaysShowContent&&this._tooltipModel&&n.hideLater(this._tooltipModel.get("hideDelay")),this._lastX=this._lastY=null,o.from!==this.uid&&this._hide(C(o,i))},_manuallyAxisShowTip:function(e,t,i,o){var n=o.seriesIndex,r=o.dataIndex,s=t.getComponent("axisPointer").coordSysAxesInfo;if(null!=n&&null!=r&&null!=s){var a=t.getSeriesByIndex(n);if(a)if("axis"===(e=b([a.getData().getItemModel(r),a,(a.coordinateSystem||{}).model,e])).get("trigger"))return i.dispatchAction({type:"updateAxisPointer",seriesIndex:n,dataIndex:r,position:o.position}),!0}},_tryShow:function(e,t){var i=e.target;if(this._tooltipModel){this._lastX=e.offsetX,this._lastY=e.offsetY;var o=e.dataByCoordSys;o&&o.length?this._showAxisTooltip(o,e):i&&null!=i.dataIndex?(this._lastDataByCoordSys=null,this._showSeriesItemTooltip(e,i,t)):i&&i.tooltip?(this._lastDataByCoordSys=null,this._showComponentItemTooltip(e,i,t)):(this._lastDataByCoordSys=null,this._hide(t))}},_showOrMove:function(e,t){var i=e.get("showDelay");t=n.bind(t,this),clearTimeout(this._showTimout),i>0?this._showTimout=setTimeout(t,i):t()},_showAxisTooltip:function(e,t){var i=this._ecModel,o=this._tooltipModel,r=[t.offsetX,t.offsetY],s=[],a=[],h=b([t.tooltipOption,o]),d=this._renderMode,u=this._newLine,c={};_(e,(function(e){_(e.dataByAxis,(function(e){var t=i.getComponent(e.axisDim+"Axis",e.axisIndex),o=e.value,r=[];if(t&&null!=o){var h=m.getValueLabel(o,t.axis,i,e.seriesDataIndices,e.valueLabelOpt);n.each(e.seriesDataIndices,(function(s){var l=i.getSeriesByIndex(s.seriesIndex),u=s.dataIndexInside,g=l&&l.getDataParams(u);if(g.axisDim=e.axisDim,g.axisIndex=e.axisIndex,g.axisType=e.axisType,g.axisId=e.axisId,g.axisValue=f.getAxisRawValue(t.axis,o),g.axisValueLabel=h,g){a.push(g);var p,m=l.formatTooltip(u,!0,null,d);if(n.isObject(m)){p=m.html;var y=m.markers;n.merge(c,y)}else p=m;r.push(p)}}));var g=h;"html"!==d?s.push(r.join(u)):s.push((g?l.encodeHTML(g)+u:"")+r.join(u))}}))}),this),s.reverse(),s=s.join(this._newLine+this._newLine);var g=t.position;this._showOrMove(h,(function(){this._updateContentNotChangedOnAxis(e)?this._updatePosition(h,g,r[0],r[1],this._tooltipContent,a):this._showTooltipContent(h,s,a,Math.random(),r[0],r[1],g,void 0,c)}))},_showSeriesItemTooltip:function(e,t,i){var o=this._ecModel,r=t.seriesIndex,s=o.getSeriesByIndex(r),a=t.dataModel||s,l=t.dataIndex,h=t.dataType,d=a.getData(h),u=b([d.getItemModel(l),a,s&&(s.coordinateSystem||{}).model,this._tooltipModel]),c=u.get("trigger");if(null==c||"item"===c){var g,p,f=a.getDataParams(l,h),m=a.formatTooltip(l,!1,h,this._renderMode);n.isObject(m)?(g=m.html,p=m.markers):(g=m,p=null);var y="item_"+a.name+"_"+l;this._showOrMove(u,(function(){this._showTooltipContent(u,g,f,y,e.offsetX,e.offsetY,e.position,e.target,p)})),i({type:"showTip",dataIndexInside:l,dataIndex:d.getRawIndex(l),seriesIndex:r,from:this.uid})}},_showComponentItemTooltip:function(e,t,i){var o=t.tooltip;if("string"==typeof o){o={content:o,formatter:o}}var n=new g(o,this._tooltipModel,this._ecModel),r=n.get("content"),s=Math.random();this._showOrMove(n,(function(){this._showTooltipContent(n,r,n.get("formatterParams")||{},s,e.offsetX,e.offsetY,e.position,t)})),i({type:"showTip",from:this.uid})},_showTooltipContent:function(e,t,i,o,n,r,s,a,h){if(this._ticket="",e.get("showContent")&&e.get("show")){var d=this._tooltipContent,u=e.get("formatter");s=s||e.get("position");var c=t;if(u&&"string"==typeof u)c=l.formatTpl(u,i,!0);else if("function"==typeof u){var g=v((function(t,o){t===this._ticket&&(d.setContent(o,h,e),this._updatePosition(e,s,n,r,d,i,a))}),this);this._ticket=o,c=u(i,o,g)}d.setContent(c,h,e),d.show(e),this._updatePosition(e,s,n,r,d,i,a)}},_updatePosition:function(e,t,i,o,r,s,a){var l=this._api.getWidth(),h=this._api.getHeight();t=t||e.get("position");var d=r.getSize(),u=e.get("align"),g=e.get("verticalAlign"),p=a&&a.getBoundingRect().clone();if(a&&p.applyTransform(a.transform),"function"==typeof t&&(t=t([i,o],s,r.el,p,{viewSize:[l,h],contentSize:d.slice()})),n.isArray(t))i=x(t[0],l),o=x(t[1],h);else if(n.isObject(t)){t.width=d[0],t.height=d[1];var f=c.getLayoutRect(t,{width:l,height:h});i=f.x,o=f.y,u=null,g=null}else if("string"==typeof t&&a){var m=function(e,t,i){var o=i[0],n=i[1],r=0,s=0,a=t.width,l=t.height;switch(e){case"inside":r=t.x+a/2-o/2,s=t.y+l/2-n/2;break;case"top":r=t.x+a/2-o/2,s=t.y-n-5;break;case"bottom":r=t.x+a/2-o/2,s=t.y+l+5;break;case"left":r=t.x-o-5,s=t.y+l/2-n/2;break;case"right":r=t.x+a+5,s=t.y+l/2-n/2}return[r,s]}(t,p,d);i=m[0],o=m[1]}else{m=function(e,t,i,o,n,r,s){var a=i.getOuterSize(),l=a.width,h=a.height;null!=r&&(e+l+r>o?e-=l+r:e+=r);null!=s&&(t+h+s>n?t-=h+s:t+=s);return[e,t]}(i,o,r,l,h,u?null:20,g?null:20);i=m[0],o=m[1]}if(u&&(i-=T(u)?d[0]/2:"right"===u?d[0]:0),g&&(o-=T(g)?d[1]/2:"bottom"===g?d[1]:0),e.get("confine")){m=function(e,t,i,o,n){var r=i.getOuterSize(),s=r.width,a=r.height;return e=Math.min(e+s,o)-s,t=Math.min(t+a,n)-a,e=Math.max(e,0),t=Math.max(t,0),[e,t]}(i,o,r,l,h);i=m[0],o=m[1]}r.moveTo(i,o)},_updateContentNotChangedOnAxis:function(e){var t=this._lastDataByCoordSys,i=!!t&&t.length===e.length;return i&&_(t,(function(t,o){var n=t.dataByAxis||{},r=(e[o]||{}).dataByAxis||[];(i&=n.length===r.length)&&_(n,(function(e,t){var o=r[t]||{},n=e.seriesDataIndices||[],s=o.seriesDataIndices||[];(i&=e.value===o.value&&e.axisType===o.axisType&&e.axisId===o.axisId&&n.length===s.length)&&_(n,(function(e,t){var o=s[t];i&=e.seriesIndex===o.seriesIndex&&e.dataIndex===o.dataIndex}))}))})),this._lastDataByCoordSys=e,!!i},_hide:function(e){this._lastDataByCoordSys=null,e({type:"hideTip",from:this.uid})},dispose:function(e,t){r.node||(this._tooltipContent.dispose(),p.unregister("itemTooltip",t))}});function b(e){for(var t=e.pop();e.length;){var i=e.pop();i&&(g.isInstance(i)&&(i=i.get("tooltip",!0)),"string"==typeof i&&(i={formatter:i}),t=new g(i,t,t.ecModel))}return t}function C(e,t){return e.dispatchAction||n.bind(t.dispatchAction,t)}function T(e){return"center"===e||"middle"===e}e.exports=S},38175:(e,t,i)=>{var o;"undefined"!=typeof window?o=window.__DEV__:void 0!==i.g&&(o=i.g.__DEV__),void 0===o&&(o=!0);var n=o;t.__DEV__=n}}]);
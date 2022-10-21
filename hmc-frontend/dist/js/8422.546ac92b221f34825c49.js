"use strict";(self.webpackChunkHMC=self.webpackChunkHMC||[]).push([[8422,5228],{65520:(e,t,o)=>{o.d(t,{CL:()=>i});var r=o(96518);function i(e){return!(!e||"function"!=typeof e.getEditorType)&&e.getEditorType()===r.g.ICodeEditor}},29994:(e,t,o)=>{o.d(t,{N5:()=>m,YN:()=>u,gy:()=>p,iB:()=>g,kG:()=>h,rU:()=>l,t7:()=>_,tC:()=>f});var r=o(65321),i=o(57974),n=o(23938),s=o(15393),d=o(9917),c=o(73910);class u{constructor(e,t){this.x=e,this.y=t,this._pageCoordinatesBrand=void 0}toClientCoordinates(){return new l(this.x-r.DI.scrollX,this.y-r.DI.scrollY)}}class l{constructor(e,t){this.clientX=e,this.clientY=t,this._clientCoordinatesBrand=void 0}toPageCoordinates(){return new u(this.clientX+r.DI.scrollX,this.clientY+r.DI.scrollY)}}class a{constructor(e,t,o,r){this.x=e,this.y=t,this.width=o,this.height=r,this._editorPagePositionBrand=void 0}}function h(e){const t=r.i(e);return new a(t.left,t.top,t.width,t.height)}class p extends n.n{constructor(e,t){super(e),this._editorMouseEventBrand=void 0,this.pos=new u(this.posx,this.posy),this.editorPos=h(t)}}class m{constructor(e){this._editorViewDomNode=e}_create(e){return new p(e,this._editorViewDomNode)}onContextMenu(e,t){return r.nm(e,"contextmenu",e=>{t(this._create(e))})}onMouseUp(e,t){return r.nm(e,"mouseup",e=>{t(this._create(e))})}onMouseDown(e,t){return r.nm(e,"mousedown",e=>{t(this._create(e))})}onMouseLeave(e,t){return r.j_(e,e=>{t(this._create(e))})}onMouseMoveThrottled(e,t,o,i){return r.Y_(e,"mousemove",t,(e,t)=>o(e,this._create(t)),i)}}class f{constructor(e){this._editorViewDomNode=e}_create(e){return new p(e,this._editorViewDomNode)}onPointerUp(e,t){return r.nm(e,"pointerup",e=>{t(this._create(e))})}onPointerDown(e,t){return r.nm(e,"pointerdown",e=>{t(this._create(e))})}onPointerLeave(e,t){return r.RE(e,e=>{t(this._create(e))})}onPointerMoveThrottled(e,t,o,i){return r.Y_(e,"pointermove",t,(e,t)=>o(e,this._create(t)),i)}}class g extends d.JT{constructor(e){super(),this._editorViewDomNode=e,this._globalMouseMoveMonitor=this._register(new i.Z),this._keydownListener=null}startMonitoring(e,t,o,i,n){this._keydownListener=r.mu(document,"keydown",e=>{e.toKeybinding().isModifierKey()||this._globalMouseMoveMonitor.stopMonitoring(!0,e.browserEvent)},!0);this._globalMouseMoveMonitor.startMonitoring(e,t,(e,t)=>o(e,new p(t,this._editorViewDomNode)),i,e=>{this._keydownListener.dispose(),n(e)})}stopMonitoring(){this._globalMouseMoveMonitor.stopMonitoring(!0)}}class _{constructor(e){this._editor=e,this._counter=0,this._rules=new Map,this._garbageCollectionScheduler=new s.pY(()=>this.garbageCollect(),1e3)}createClassNameRef(e){const t=this.getOrCreateRule(e);return t.increaseRefCount(),{className:t.className,dispose:()=>{t.decreaseRefCount(),this._garbageCollectionScheduler.schedule()}}}getOrCreateRule(e){const t=this.computeUniqueKey(e);let o=this._rules.get(t);if(!o){const i=this._counter++;o=new v(t,"dyn-rule-"+i,r.OO(this._editor.getContainerDomNode())?this._editor.getContainerDomNode():void 0,e),this._rules.set(t,o)}return o}computeUniqueKey(e){return JSON.stringify(e)}garbageCollect(){for(const e of this._rules.values())e.hasReferences()||(this._rules.delete(e.key),e.dispose())}}class v{constructor(e,t,o,i){this.key=e,this.className=t,this.properties=i,this._referenceCount=0,this._styleElement=r.dS(o),this._styleElement.textContent=this.getCssText(this.className,this.properties)}getCssText(e,t){let o=`.${e} {`;for(const e in t){const r=t[e];let i;i="object"==typeof r?`var(${(0,c.QO2)(r.id)})`:r;o+=`\n\t${C(e)}: ${i};`}return o+="\n}",o}dispose(){this._styleElement.remove()}increaseRefCount(){this._referenceCount++}decreaseRefCount(){this._referenceCount--}hasReferences(){return this._referenceCount>0}}function C(e){return e.replace(/(^[A-Z])/,([e])=>e.toLowerCase()).replace(/([A-Z])/g,([e])=>"-"+e.toLowerCase())}},16830:(e,t,o)=>{o.d(t,{QG:()=>M,Qr:()=>x,R6:()=>w,Sq:()=>k,Uc:()=>r,_K:()=>A,_l:()=>y,fK:()=>O,kz:()=>R,mY:()=>v,n_:()=>S,sb:()=>b});var r,i=o(63580),n=o(70666),s=o(11640),d=o(50187),c=o(51200),u=o(88216),l=o(84144),a=o(94565),h=o(38819),p=o(49989),m=o(89872),f=o(10829),g=o(98401),_=o(43557);class v{constructor(e){this.id=e.id,this.precondition=e.precondition,this._kbOpts=e.kbOpts,this._menuOpts=e.menuOpts,this._description=e.description}register(){if(Array.isArray(this._menuOpts)?this._menuOpts.forEach(this._registerMenuItem,this):this._menuOpts&&this._registerMenuItem(this._menuOpts),this._kbOpts){const e=Array.isArray(this._kbOpts)?this._kbOpts:[this._kbOpts];for(const t of e){let e=t.kbExpr;this.precondition&&(e=e?h.Ao.and(e,this.precondition):this.precondition);const o={id:this.id,weight:t.weight,args:t.args,when:e,primary:t.primary,secondary:t.secondary,win:t.win,linux:t.linux,mac:t.mac};p.W.registerKeybindingRule(o)}}a.P0.registerCommand({id:this.id,handler:(e,t)=>this.runCommand(e,t),description:this._description})}_registerMenuItem(e){l.BH.appendMenuItem(e.menuId,{group:e.group,command:{id:this.id,title:e.title,icon:e.icon,precondition:this.precondition},when:e.when,order:e.order})}}class C extends v{constructor(){super(...arguments),this._implementations=[]}addImplementation(e,t,o){return this._implementations.push({priority:e,name:t,implementation:o}),this._implementations.sort((e,t)=>t.priority-e.priority),{dispose:()=>{for(let e=0;e<this._implementations.length;e++)if(this._implementations[e].implementation===o)return void this._implementations.splice(e,1)}}}runCommand(e,t){const o=e.get(_.VZ);o.trace(`Executing Command '${this.id}' which has ${this._implementations.length} bound.`);for(const r of this._implementations){const i=r.implementation(e,t);if(i){if(o.trace(`Command '${this.id}' was handled by '${r.name}'.`),"boolean"==typeof i)return;return i}}o.trace(`The Command '${this.id}' was not handled by any implementation.`)}}class E extends v{constructor(e,t){super(t),this.command=e}runCommand(e,t){return this.command.runCommand(e,t)}}class y extends v{static bindToContribution(e){return class extends y{constructor(e){super(e),this._callback=e.handler}runEditorCommand(t,o,r){e(o)&&this._callback(e(o),r)}}}runCommand(e,t){const o=e.get(s.$),r=o.getFocusedCodeEditor()||o.getActiveCodeEditor();if(r)return r.invokeWithinContext(e=>{if(e.get(h.i6).contextMatchesRules((0,g.f6)(this.precondition)))return this.runEditorCommand(e,r,t)})}}class w extends y{constructor(e){super(w.convertOptions(e)),this.label=e.label,this.alias=e.alias}static convertOptions(e){let t;function o(t){return t.menuId||(t.menuId=l.eH.EditorContext),t.title||(t.title=e.label),t.when=h.Ao.and(e.precondition,t.when),t}return t=Array.isArray(e.menuOpts)?e.menuOpts:e.menuOpts?[e.menuOpts]:[],Array.isArray(e.contextMenuOpts)?t.push(...e.contextMenuOpts.map(o)):e.contextMenuOpts&&t.push(o(e.contextMenuOpts)),e.menuOpts=t,e}runEditorCommand(e,t,o){return this.reportTelemetry(e,t),this.run(e,t,o||{})}reportTelemetry(e,t){e.get(f.b).publicLog2("editorActionInvoked",{name:this.label,id:this.id})}}function b(e,t){a.P0.registerCommand(e,(function(e,...o){const[r,i]=o;(0,g.p_)(n.o.isUri(r)),(0,g.p_)(d.L.isIPosition(i));const s=e.get(c.q).getModel(r);if(s){const e=d.L.lift(i);return t(s,e,...o.slice(2))}return e.get(u.S).createModelReference(r).then(e=>new Promise((r,n)=>{try{r(t(e.object.textEditorModel,d.L.lift(i),o.slice(2)))}catch(e){n(e)}}).finally(()=>{e.dispose()}))}))}function O(e){return I.INSTANCE.registerEditorCommand(e),e}function x(e){const t=new e;return I.INSTANCE.registerEditorAction(t),t}function M(e){I.INSTANCE.registerEditorAction(e)}function A(e,t){I.INSTANCE.registerEditorContribution(e,t)}!function(e){e.getEditorCommand=function(e){return I.INSTANCE.getEditorCommand(e)},e.getEditorActions=function(){return I.INSTANCE.getEditorActions()},e.getEditorContributions=function(){return I.INSTANCE.getEditorContributions()},e.getSomeEditorContributions=function(e){return I.INSTANCE.getEditorContributions().filter(t=>e.indexOf(t.id)>=0)},e.getDiffEditorContributions=function(){return I.INSTANCE.getDiffEditorContributions()}}(r||(r={}));class I{constructor(){this.editorContributions=[],this.diffEditorContributions=[],this.editorActions=[],this.editorCommands=Object.create(null)}registerEditorContribution(e,t){this.editorContributions.push({id:e,ctor:t})}getEditorContributions(){return this.editorContributions.slice(0)}getDiffEditorContributions(){return this.diffEditorContributions.slice(0)}registerEditorAction(e){e.register(),this.editorActions.push(e)}getEditorActions(){return this.editorActions.slice(0)}registerEditorCommand(e){e.register(),this.editorCommands[e.id]=e}getEditorCommand(e){return this.editorCommands[e]||null}}function N(e){return e.register(),e}I.INSTANCE=new I,m.B.add("editor.contributions",I.INSTANCE);const S=N(new C({id:"undo",precondition:void 0,kbOpts:{weight:0,primary:2104},menuOpts:[{menuId:l.eH.MenubarEditMenu,group:"1_do",title:i.N({key:"miUndo",comment:["&& denotes a mnemonic"]},"&&Undo"),order:1},{menuId:l.eH.CommandPalette,group:"",title:i.N("undo","Undo"),order:1}]}));N(new E(S,{id:"default:undo",precondition:void 0}));const R=N(new C({id:"redo",precondition:void 0,kbOpts:{weight:0,primary:2103,secondary:[3128],mac:{primary:3128}},menuOpts:[{menuId:l.eH.MenubarEditMenu,group:"1_do",title:i.N({key:"miRedo",comment:["&& denotes a mnemonic"]},"&&Redo"),order:2},{menuId:l.eH.CommandPalette,group:"",title:i.N("redo","Redo"),order:1}]}));N(new E(R,{id:"default:redo",precondition:void 0}));const k=N(new C({id:"editor.action.selectAll",precondition:void 0,kbOpts:{weight:0,kbExpr:null,primary:2079},menuOpts:[{menuId:l.eH.MenubarSelectionMenu,group:"1_basic",title:i.N({key:"miSelectAll",comment:["&& denotes a mnemonic"]},"&&Select All"),order:1},{menuId:l.eH.CommandPalette,group:"",title:i.N("selectAll","Select All"),order:1}]}))},66007:(e,t,o)=>{o.d(t,{Gl:()=>c,fo:()=>d,vu:()=>s});var r=o(72065),i=o(70666),n=o(98401);const s=(0,r.yh)("IWorkspaceEditService");class d{constructor(e){this.metadata=e}static convert(e){return e.edits.map(e=>{if(t=e,(0,n.Kn)(t)&&i.o.isUri(t.resource)&&(0,n.Kn)(t.edit))return new c(e.resource,e.edit,e.modelVersionId,e.metadata);var t;if(function(e){return(0,n.Kn)(e)&&(Boolean(e.newUri)||Boolean(e.oldUri))}(e))return new u(e.oldUri,e.newUri,e.options,e.metadata);throw new Error("Unsupported edit")})}}class c extends d{constructor(e,t,o,r){super(r),this.resource=e,this.textEdit=t,this.versionId=o}}class u extends d{constructor(e,t,o,r){super(r),this.oldResource=e,this.newResource=t,this.options=o}}},11640:(e,t,o)=>{o.d(t,{$:()=>r});const r=(0,o(72065).yh)("codeEditorService")},33912:(e,t,o)=>{o.d(t,{w:()=>u});var r=o(4669),i=o(9917);class n extends i.JT{constructor(){super(),this._onCodeEditorAdd=this._register(new r.Q5),this.onCodeEditorAdd=this._onCodeEditorAdd.event,this._onCodeEditorRemove=this._register(new r.Q5),this.onCodeEditorRemove=this._onCodeEditorRemove.event,this._onDiffEditorAdd=this._register(new r.Q5),this._onDiffEditorRemove=this._register(new r.Q5),this._modelProperties=new Map,this._codeEditors=Object.create(null),this._diffEditors=Object.create(null)}addCodeEditor(e){this._codeEditors[e.getId()]=e,this._onCodeEditorAdd.fire(e)}removeCodeEditor(e){delete this._codeEditors[e.getId()]&&this._onCodeEditorRemove.fire(e)}listCodeEditors(){return Object.keys(this._codeEditors).map(e=>this._codeEditors[e])}addDiffEditor(e){this._diffEditors[e.getId()]=e,this._onDiffEditorAdd.fire(e)}removeDiffEditor(e){delete this._diffEditors[e.getId()]&&this._onDiffEditorRemove.fire(e)}listDiffEditors(){return Object.keys(this._diffEditors).map(e=>this._diffEditors[e])}getFocusedCodeEditor(){let e=null;const t=this.listCodeEditors();for(const o of t){if(o.hasTextFocus())return o;o.hasWidgetFocus()&&(e=o)}return e}setModelProperty(e,t,o){const r=e.toString();let i;this._modelProperties.has(r)?i=this._modelProperties.get(r):(i=new Map,this._modelProperties.set(r,i)),i.set(t,o)}getModelProperty(e,t){const o=e.toString();if(this._modelProperties.has(o)){return this._modelProperties.get(o).get(t)}}}var s=o(97781),d=function(e,t,o,r){var i,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(s=(n<3?i(s):n>3?i(t,o,s):i(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s},c=function(e,t){return function(o,r){t(o,r,e)}};let u=class extends n{constructor(e,t){super(),this._decorationOptionProviders=new Map,this._globalStyleSheet=e||null,this._themeService=t}removeDecorationType(e){const t=this._decorationOptionProviders.get(e);t&&(t.refCount--,t.refCount<=0&&(this._decorationOptionProviders.delete(e),t.dispose(),this.listCodeEditors().forEach(t=>t.removeDecorations(e))))}};u=d([c(1,s.XE)],u)},33085:(e,t,o)=>{var r=o(26479),i=o(16830),n=function(e,t,o,r){var i,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(s=(n<3?i(s):n>3?i(t,o,s):i(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s},s=function(e,t){return function(o,r){t(o,r,e)}};let d=class{constructor(e,t){}dispose(){}};d.ID="editor.contrib.markerDecorations",d=n([s(1,r.i)],d),(0,i._K)(d.ID,d)},25074:(e,t,o)=>{o.d(t,{B:()=>E});var r=o(65321),i=o(71050),n=o(91741),s=o(43702),d=o(23897),c=o(66663),u=o(95935),l=o(70666),a=o(11640),h=o(94565),p=o(22844),m=o(50988),f=function(e,t,o,r){var i,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(s=(n<3?i(s):n>3?i(t,o,s):i(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s},g=function(e,t){return function(o,r){t(o,r,e)}},_=function(e,t,o,r){return new(o||(o=Promise))((function(i,n){function s(e){try{c(r.next(e))}catch(e){n(e)}}function d(e){try{c(r.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,d)}c((r=r.apply(e,t||[])).next())}))};let v=class{constructor(e){this._commandService=e}open(e,t){return _(this,void 0,void 0,(function*(){if(!(0,m.xn)(e,c.lg.command))return!1;if(!(null==t?void 0:t.allowCommands))return!0;"string"==typeof e&&(e=l.o.parse(e));let o=[];try{o=(0,d.Q)(decodeURIComponent(e.query))}catch(t){try{o=(0,d.Q)(e.query)}catch(e){}}return Array.isArray(o)||(o=[o]),yield this._commandService.executeCommand(e.path,...o),!0}))}};v=f([g(0,h.Hy)],v);let C=class{constructor(e){this._editorService=e}open(e,t){return _(this,void 0,void 0,(function*(){"string"==typeof e&&(e=l.o.parse(e));let o=void 0;const r=/^L?(\d+)(?:,(\d+))?/.exec(e.fragment);return r&&(o={startLineNumber:parseInt(r[1]),startColumn:r[2]?parseInt(r[2]):1},e=e.with({fragment:""})),e.scheme===c.lg.file&&(e=(0,u.AH)(e)),yield this._editorService.openCodeEditor({resource:e,options:Object.assign({selection:o,context:(null==t?void 0:t.fromUserGesture)?p.Y.USER:p.Y.API},null==t?void 0:t.editorOptions)},this._editorService.getFocusedCodeEditor(),null==t?void 0:t.openToSide),!0}))}};C=f([g(0,a.$)],C);let E=class{constructor(e,t){this._openers=new n.S,this._validators=new n.S,this._resolvers=new n.S,this._resolvedUriTargets=new s.Y9(e=>e.with({path:null,fragment:null,query:null}).toString()),this._externalOpeners=new n.S,this._defaultExternalOpener={openExternal:e=>_(this,void 0,void 0,(function*(){return(0,m.Gs)(e,c.lg.http,c.lg.https)?r.V3(e):window.location.href=e,!0}))},this._openers.push({open:(e,t)=>_(this,void 0,void 0,(function*(){return!(!(null==t?void 0:t.openExternal)&&!(0,m.Gs)(e,c.lg.mailto,c.lg.http,c.lg.https,c.lg.vsls))&&(yield this._doOpenExternal(e,t),!0)}))}),this._openers.push(new v(t)),this._openers.push(new C(e))}registerOpener(e){return{dispose:this._openers.unshift(e)}}registerValidator(e){return{dispose:this._validators.push(e)}}registerExternalUriResolver(e){return{dispose:this._resolvers.push(e)}}setDefaultExternalOpener(e){this._defaultExternalOpener=e}registerExternalOpener(e){return{dispose:this._externalOpeners.push(e)}}open(e,t){var o;return _(this,void 0,void 0,(function*(){const r="string"==typeof e?l.o.parse(e):e,i=null!==(o=this._resolvedUriTargets.get(r))&&void 0!==o?o:e;for(const e of this._validators)if(!(yield e.shouldOpen(i)))return!1;for(const o of this._openers){if(yield o.open(e,t))return!0}return!1}))}resolveExternalUri(e,t){return _(this,void 0,void 0,(function*(){for(const o of this._resolvers)try{const r=yield o.resolveExternalUri(e,t);if(r)return this._resolvedUriTargets.has(r.resolved)||this._resolvedUriTargets.set(r.resolved,e),r}catch(e){}throw new Error("Could not resolve external URI: "+e.toString())}))}_doOpenExternal(e,t){return _(this,void 0,void 0,(function*(){const o="string"==typeof e?l.o.parse(e):e;let r,n;try{r=(yield this.resolveExternalUri(o,t)).resolved}catch(e){r=o}if(n="string"==typeof e&&o.toString()===r.toString()?e:encodeURI(r.toString(!0)),null==t?void 0:t.allowContributedOpeners){const e="string"==typeof(null==t?void 0:t.allowContributedOpeners)?null==t?void 0:t.allowContributedOpeners:void 0;for(const t of this._externalOpeners){if(yield t.openExternal(n,{sourceUri:o,preferredOpenerId:e},i.T.None))return!0}}return this._defaultExternalOpener.openExternal(n,{sourceUri:o},i.T.None)}))}dispose(){this._validators.clear()}};E=f([g(0,a.$),g(1,h.Hy)],E)}}]);
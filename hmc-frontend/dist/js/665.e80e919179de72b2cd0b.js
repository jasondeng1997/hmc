"use strict";(self.webpackChunkHMC=self.webpackChunkHMC||[]).push([[665],{90665:(e,t,n)=>{n.r(t),n.d(t,{setupMode:()=>Mt});var r=n(87763),i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,c={};
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/i(c,"__esModule",{value:!0}),((e,t,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of a(t))s.call(e,r)||"default"===r||i(e,r,{get:()=>t[r],enumerable:!(n=o(t,r))||n.enumerable})})(c,r);var u,d,l,g,h,f,p,m,v,k,b,C,_,w,y,E,A,x,I,S,T,j,L,M,O,R,P,F,D,N,U,W,V,B,K,z,H,q,X,$,Q,G,J,Y,Z,ee,te,ne,re;(d=u||(u={})).MIN_VALUE=-2147483648,d.MAX_VALUE=2147483647,(g=l||(l={})).MIN_VALUE=0,g.MAX_VALUE=2147483647,(f=h||(h={})).create=function(e,t){return e===Number.MAX_VALUE&&(e=l.MAX_VALUE),t===Number.MAX_VALUE&&(t=l.MAX_VALUE),{line:e,character:t}},f.is=function(e){var t=e;return it.objectLiteral(t)&&it.uinteger(t.line)&&it.uinteger(t.character)},(m=p||(p={})).create=function(e,t,n,r){if(it.uinteger(e)&&it.uinteger(t)&&it.uinteger(n)&&it.uinteger(r))return{start:h.create(e,t),end:h.create(n,r)};if(h.is(e)&&h.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},m.is=function(e){var t=e;return it.objectLiteral(t)&&h.is(t.start)&&h.is(t.end)},(k=v||(v={})).create=function(e,t){return{uri:e,range:t}},k.is=function(e){var t=e;return it.defined(t)&&p.is(t.range)&&(it.string(t.uri)||it.undefined(t.uri))},(C=b||(b={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},C.is=function(e){var t=e;return it.defined(t)&&p.is(t.targetRange)&&it.string(t.targetUri)&&(p.is(t.targetSelectionRange)||it.undefined(t.targetSelectionRange))&&(p.is(t.originSelectionRange)||it.undefined(t.originSelectionRange))},(w=_||(_={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},w.is=function(e){var t=e;return it.numberRange(t.red,0,1)&&it.numberRange(t.green,0,1)&&it.numberRange(t.blue,0,1)&&it.numberRange(t.alpha,0,1)},(E=y||(y={})).create=function(e,t){return{range:e,color:t}},E.is=function(e){var t=e;return p.is(t.range)&&_.is(t.color)},(x=A||(A={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},x.is=function(e){var t=e;return it.string(t.label)&&(it.undefined(t.textEdit)||B.is(t))&&(it.undefined(t.additionalTextEdits)||it.typedArray(t.additionalTextEdits,B.is))},(S=I||(I={})).Comment="comment",S.Imports="imports",S.Region="region",(j=T||(T={})).create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return it.defined(n)&&(o.startCharacter=n),it.defined(r)&&(o.endCharacter=r),it.defined(i)&&(o.kind=i),o},j.is=function(e){var t=e;return it.uinteger(t.startLine)&&it.uinteger(t.startLine)&&(it.undefined(t.startCharacter)||it.uinteger(t.startCharacter))&&(it.undefined(t.endCharacter)||it.uinteger(t.endCharacter))&&(it.undefined(t.kind)||it.string(t.kind))},(M=L||(L={})).create=function(e,t){return{location:e,message:t}},M.is=function(e){var t=e;return it.defined(t)&&v.is(t.location)&&it.string(t.message)},(R=O||(O={})).Error=1,R.Warning=2,R.Information=3,R.Hint=4,(F=P||(P={})).Unnecessary=1,F.Deprecated=2,(D||(D={})).is=function(e){var t=e;return null!=t&&it.string(t.href)},(U=N||(N={})).create=function(e,t,n,r,i,o){var a={range:e,message:t};return it.defined(n)&&(a.severity=n),it.defined(r)&&(a.code=r),it.defined(i)&&(a.source=i),it.defined(o)&&(a.relatedInformation=o),a},U.is=function(e){var t,n=e;return it.defined(n)&&p.is(n.range)&&it.string(n.message)&&(it.number(n.severity)||it.undefined(n.severity))&&(it.integer(n.code)||it.string(n.code)||it.undefined(n.code))&&(it.undefined(n.codeDescription)||it.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(it.string(n.source)||it.undefined(n.source))&&(it.undefined(n.relatedInformation)||it.typedArray(n.relatedInformation,L.is))},(V=W||(W={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return it.defined(n)&&n.length>0&&(i.arguments=n),i},V.is=function(e){var t=e;return it.defined(t)&&it.string(t.title)&&it.string(t.command)},(K=B||(B={})).replace=function(e,t){return{range:e,newText:t}},K.insert=function(e,t){return{range:{start:e,end:e},newText:t}},K.del=function(e){return{range:e,newText:""}},K.is=function(e){var t=e;return it.objectLiteral(t)&&it.string(t.newText)&&p.is(t.range)},(H=z||(z={})).create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},H.is=function(e){var t=e;return void 0!==t&&it.objectLiteral(t)&&it.string(t.label)&&(it.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(it.string(t.description)||void 0===t.description)},(q||(q={})).is=function(e){return"string"==typeof e},($=X||(X={})).replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},$.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},$.del=function(e,t){return{range:e,newText:"",annotationId:t}},$.is=function(e){var t=e;return B.is(t)&&(z.is(t.annotationId)||q.is(t.annotationId))},(G=Q||(Q={})).create=function(e,t){return{textDocument:e,edits:t}},G.is=function(e){var t=e;return it.defined(t)&&ce.is(t.textDocument)&&Array.isArray(t.edits)},(Y=J||(J={})).create=function(e,t,n){var r={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},Y.is=function(e){var t=e;return t&&"create"===t.kind&&it.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||it.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||it.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||q.is(t.annotationId))},(ee=Z||(Z={})).create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(i.options=n),void 0!==r&&(i.annotationId=r),i},ee.is=function(e){var t=e;return t&&"rename"===t.kind&&it.string(t.oldUri)&&it.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||it.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||it.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||q.is(t.annotationId))},(ne=te||(te={})).create=function(e,t,n){var r={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},ne.is=function(e){var t=e;return t&&"delete"===t.kind&&it.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||it.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||it.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||q.is(t.annotationId))},(re||(re={})).is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return it.string(e.kind)?J.is(e)||Z.is(e)||te.is(e):Q.is(e)})))};var ie,oe,ae,se,ce,ue,de,le,ge,he,fe,pe,me,ve,ke,be,Ce,_e,we,ye,Ee,Ae,xe,Ie,Se,Te,je,Le,Me,Oe,Re,Pe,Fe,De,Ne,Ue,We,Ve,Be,Ke,ze,He,qe,Xe,$e,Qe,Ge,Je,Ye,Ze,et,tt,nt=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=B.insert(e,t):q.is(n)?(i=n,r=X.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=X.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=B.replace(e,t):q.is(n)?(i=n,r=X.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=X.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=B.del(e):q.is(t)?(r=t,n=X.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=X.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),rt=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(q.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new rt(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(Q.is(e)){var n=new nt(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new nt(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(ce.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new nt(i,this._changeAnnotations),this._textEditChanges[t.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new nt(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new rt,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(z.is(t)||q.is(t)?r=t:n=t,void 0===r?i=J.create(e,n):(o=q.is(r)?r:this._changeAnnotations.manage(r),i=J.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(z.is(n)||q.is(n)?i=n:r=n,void 0===i?o=Z.create(e,t,r):(a=q.is(i)?i:this._changeAnnotations.manage(i),o=Z.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(z.is(t)||q.is(t)?r=t:n=t,void 0===r?i=te.create(e,n):(o=q.is(r)?r:this._changeAnnotations.manage(r),i=te.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}();(oe=ie||(ie={})).create=function(e){return{uri:e}},oe.is=function(e){var t=e;return it.defined(t)&&it.string(t.uri)},(se=ae||(ae={})).create=function(e,t){return{uri:e,version:t}},se.is=function(e){var t=e;return it.defined(t)&&it.string(t.uri)&&it.integer(t.version)},(ue=ce||(ce={})).create=function(e,t){return{uri:e,version:t}},ue.is=function(e){var t=e;return it.defined(t)&&it.string(t.uri)&&(null===t.version||it.integer(t.version))},(le=de||(de={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},le.is=function(e){var t=e;return it.defined(t)&&it.string(t.uri)&&it.string(t.languageId)&&it.integer(t.version)&&it.string(t.text)},(he=ge||(ge={})).PlainText="plaintext",he.Markdown="markdown",function(e){e.is=function(t){var n=t;return n===e.PlainText||n===e.Markdown}}(ge||(ge={})),(fe||(fe={})).is=function(e){var t=e;return it.objectLiteral(e)&&ge.is(t.kind)&&it.string(t.value)},(me=pe||(pe={})).Text=1,me.Method=2,me.Function=3,me.Constructor=4,me.Field=5,me.Variable=6,me.Class=7,me.Interface=8,me.Module=9,me.Property=10,me.Unit=11,me.Value=12,me.Enum=13,me.Keyword=14,me.Snippet=15,me.Color=16,me.File=17,me.Reference=18,me.Folder=19,me.EnumMember=20,me.Constant=21,me.Struct=22,me.Event=23,me.Operator=24,me.TypeParameter=25,(ke=ve||(ve={})).PlainText=1,ke.Snippet=2,(be||(be={})).Deprecated=1,(_e=Ce||(Ce={})).create=function(e,t,n){return{newText:e,insert:t,replace:n}},_e.is=function(e){var t=e;return t&&it.string(t.newText)&&p.is(t.insert)&&p.is(t.replace)},(ye=we||(we={})).asIs=1,ye.adjustIndentation=2,(Ee||(Ee={})).create=function(e){return{label:e}},(Ae||(Ae={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(Ie=xe||(xe={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},Ie.is=function(e){var t=e;return it.string(t)||it.objectLiteral(t)&&it.string(t.language)&&it.string(t.value)},(Se||(Se={})).is=function(e){var t=e;return!!t&&it.objectLiteral(t)&&(fe.is(t.contents)||xe.is(t.contents)||it.typedArray(t.contents,xe.is))&&(void 0===e.range||p.is(e.range))},(Te||(Te={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(je||(je={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return it.defined(t)&&(i.documentation=t),it.defined(n)?i.parameters=n:i.parameters=[],i},(Me=Le||(Le={})).Text=1,Me.Read=2,Me.Write=3,(Oe||(Oe={})).create=function(e,t){var n={range:e};return it.number(t)&&(n.kind=t),n},(Pe=Re||(Re={})).File=1,Pe.Module=2,Pe.Namespace=3,Pe.Package=4,Pe.Class=5,Pe.Method=6,Pe.Property=7,Pe.Field=8,Pe.Constructor=9,Pe.Enum=10,Pe.Interface=11,Pe.Function=12,Pe.Variable=13,Pe.Constant=14,Pe.String=15,Pe.Number=16,Pe.Boolean=17,Pe.Array=18,Pe.Object=19,Pe.Key=20,Pe.Null=21,Pe.EnumMember=22,Pe.Struct=23,Pe.Event=24,Pe.Operator=25,Pe.TypeParameter=26,(Fe||(Fe={})).Deprecated=1,(De||(De={})).create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},(Ue=Ne||(Ne={})).create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},Ue.is=function(e){var t=e;return t&&it.string(t.name)&&it.number(t.kind)&&p.is(t.range)&&p.is(t.selectionRange)&&(void 0===t.detail||it.string(t.detail))&&(void 0===t.deprecated||it.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))},(Ve=We||(We={})).Empty="",Ve.QuickFix="quickfix",Ve.Refactor="refactor",Ve.RefactorExtract="refactor.extract",Ve.RefactorInline="refactor.inline",Ve.RefactorRewrite="refactor.rewrite",Ve.Source="source",Ve.SourceOrganizeImports="source.organizeImports",Ve.SourceFixAll="source.fixAll",(Ke=Be||(Be={})).create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},Ke.is=function(e){var t=e;return it.defined(t)&&it.typedArray(t.diagnostics,N.is)&&(void 0===t.only||it.typedArray(t.only,it.string))},(He=ze||(ze={})).create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):W.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},He.is=function(e){var t=e;return t&&it.string(t.title)&&(void 0===t.diagnostics||it.typedArray(t.diagnostics,N.is))&&(void 0===t.kind||it.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||W.is(t.command))&&(void 0===t.isPreferred||it.boolean(t.isPreferred))&&(void 0===t.edit||re.is(t.edit))},(Xe=qe||(qe={})).create=function(e,t){var n={range:e};return it.defined(t)&&(n.data=t),n},Xe.is=function(e){var t=e;return it.defined(t)&&p.is(t.range)&&(it.undefined(t.command)||W.is(t.command))},(Qe=$e||($e={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},Qe.is=function(e){var t=e;return it.defined(t)&&it.uinteger(t.tabSize)&&it.boolean(t.insertSpaces)},(Je=Ge||(Ge={})).create=function(e,t,n){return{range:e,target:t,data:n}},Je.is=function(e){var t=e;return it.defined(t)&&p.is(t.range)&&(it.undefined(t.target)||it.string(t.target))},(Ze=Ye||(Ye={})).create=function(e,t){return{range:e,parent:t}},Ze.is=function(e){var t=e;return void 0!==t&&p.is(t.range)&&(void 0===t.parent||Ze.is(t.parent))},(tt=et||(et={})).create=function(e,t,n,r){return new st(e,t,n,r)},tt.is=function(e){var t=e;return!!(it.defined(t)&&it.string(t.uri)&&(it.undefined(t.languageId)||it.string(t.languageId))&&it.uinteger(t.lineCount)&&it.func(t.getText)&&it.func(t.positionAt)&&it.func(t.offsetAt))},tt.applyEdits=function(e,t){for(var n=e.getText(),r=function e(t,n){if(t.length<=1)return t;var r=t.length/2|0,i=t.slice(0,r),o=t.slice(r);e(i,n),e(o,n);for(var a=0,s=0,c=0;a<i.length&&s<o.length;){var u=n(i[a],o[s]);t[c++]=u<=0?i[a++]:o[s++]}for(;a<i.length;)t[c++]=i[a++];for(;s<o.length;)t[c++]=o[s++];return t}(t,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),i=n.length,o=r.length-1;o>=0;o--){var a=r[o],s=e.offsetAt(a.range.start),c=e.offsetAt(a.range.end);if(!(c<=i))throw new Error("Overlapping edit");n=n.substring(0,s)+a.newText+n.substring(c,n.length),i=s}return n};var it,ot,at,st=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return h.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return h.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();ot=it||(it={}),at=Object.prototype.toString,ot.defined=function(e){return void 0!==e},ot.undefined=function(e){return void 0===e},ot.boolean=function(e){return!0===e||!1===e},ot.string=function(e){return"[object String]"===at.call(e)},ot.number=function(e){return"[object Number]"===at.call(e)},ot.numberRange=function(e,t,n){return"[object Number]"===at.call(e)&&t<=e&&e<=n},ot.integer=function(e){return"[object Number]"===at.call(e)&&-2147483648<=e&&e<=2147483647},ot.uinteger=function(e){return"[object Number]"===at.call(e)&&0<=e&&e<=2147483647},ot.func=function(e){return"[object Function]"===at.call(e)},ot.objectLiteral=function(e){return null!==e&&"object"==typeof e},ot.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)};function ct(e){switch(e){case O.Error:return c.MarkerSeverity.Error;case O.Warning:return c.MarkerSeverity.Warning;case O.Information:return c.MarkerSeverity.Info;case O.Hint:return c.MarkerSeverity.Hint;default:return c.MarkerSeverity.Info}}function ut(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function dt(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function lt(e){if(e)return new c.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function gt(e){const t=c.languages.CompletionItemKind;switch(e){case pe.Text:return t.Text;case pe.Method:return t.Method;case pe.Function:return t.Function;case pe.Constructor:return t.Constructor;case pe.Field:return t.Field;case pe.Variable:return t.Variable;case pe.Class:return t.Class;case pe.Interface:return t.Interface;case pe.Module:return t.Module;case pe.Property:return t.Property;case pe.Unit:return t.Unit;case pe.Value:return t.Value;case pe.Enum:return t.Enum;case pe.Keyword:return t.Keyword;case pe.Snippet:return t.Snippet;case pe.Color:return t.Color;case pe.File:return t.File;case pe.Reference:return t.Reference}return t.Property}function ht(e){if(e)return{range:lt(e.range),text:e.newText}}function ft(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function pt(e){if(e)return Array.isArray(e)?e.map(ft):[ft(e)]}function mt(e){let t=c.languages.SymbolKind;switch(e){case Re.File:return t.Array;case Re.Module:return t.Module;case Re.Namespace:return t.Namespace;case Re.Package:return t.Package;case Re.Class:return t.Class;case Re.Method:return t.Method;case Re.Property:return t.Property;case Re.Field:return t.Field;case Re.Constructor:return t.Constructor;case Re.Enum:return t.Enum;case Re.Interface:return t.Interface;case Re.Function:return t.Function;case Re.Variable:return t.Variable;case Re.Constant:return t.Constant;case Re.String:return t.String;case Re.Number:return t.Number;case Re.Boolean:return t.Boolean;case Re.Array:return t.Array}return t.Function}function vt(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var kt;function bt(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function Ct(e){return 10===e||13===e||8232===e||8233===e}function _t(e){return e>=48&&e<=57}(kt||(kt={})).DEFAULT={allowTrailingComma:!1};var wt=function(e,t){void 0===t&&(t=!1);var n=e.length,r=0,i="",o=0,a=16,s=0,c=0,u=0,d=0,l=0;function g(t,n){for(var i=0,o=0;i<t||!n;){var a=e.charCodeAt(r);if(a>=48&&a<=57)o=16*o+a-48;else if(a>=65&&a<=70)o=16*o+a-65+10;else{if(!(a>=97&&a<=102))break;o=16*o+a-97+10}r++,i++}return i<t&&(o=-1),o}function h(){if(i="",l=0,o=r,c=s,d=u,r>=n)return o=n,a=17;var t=e.charCodeAt(r);if(bt(t)){do{r++,i+=String.fromCharCode(t),t=e.charCodeAt(r)}while(bt(t));return a=15}if(Ct(t))return r++,i+=String.fromCharCode(t),13===t&&10===e.charCodeAt(r)&&(r++,i+="\n"),s++,u=r,a=14;switch(t){case 123:return r++,a=1;case 125:return r++,a=2;case 91:return r++,a=3;case 93:return r++,a=4;case 58:return r++,a=6;case 44:return r++,a=5;case 34:return r++,i=function(){for(var t="",i=r;;){if(r>=n){t+=e.substring(i,r),l=2;break}var o=e.charCodeAt(r);if(34===o){t+=e.substring(i,r),r++;break}if(92!==o){if(o>=0&&o<=31){if(Ct(o)){t+=e.substring(i,r),l=2;break}l=6}r++}else{if(t+=e.substring(i,r),++r>=n){l=2;break}switch(e.charCodeAt(r++)){case 34:t+='"';break;case 92:t+="\\";break;case 47:t+="/";break;case 98:t+="\b";break;case 102:t+="\f";break;case 110:t+="\n";break;case 114:t+="\r";break;case 116:t+="\t";break;case 117:var a=g(4,!0);a>=0?t+=String.fromCharCode(a):l=4;break;default:l=5}i=r}}return t}(),a=10;case 47:var h=r-1;if(47===e.charCodeAt(r+1)){for(r+=2;r<n&&!Ct(e.charCodeAt(r));)r++;return i=e.substring(h,r),a=12}if(42===e.charCodeAt(r+1)){r+=2;for(var p=n-1,m=!1;r<p;){var v=e.charCodeAt(r);if(42===v&&47===e.charCodeAt(r+1)){r+=2,m=!0;break}r++,Ct(v)&&(13===v&&10===e.charCodeAt(r)&&r++,s++,u=r)}return m||(r++,l=1),i=e.substring(h,r),a=13}return i+=String.fromCharCode(t),r++,a=16;case 45:if(i+=String.fromCharCode(t),++r===n||!_t(e.charCodeAt(r)))return a=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return i+=function(){var t=r;if(48===e.charCodeAt(r))r++;else for(r++;r<e.length&&_t(e.charCodeAt(r));)r++;if(r<e.length&&46===e.charCodeAt(r)){if(!(++r<e.length&&_t(e.charCodeAt(r))))return l=3,e.substring(t,r);for(r++;r<e.length&&_t(e.charCodeAt(r));)r++}var n=r;if(r<e.length&&(69===e.charCodeAt(r)||101===e.charCodeAt(r)))if((++r<e.length&&43===e.charCodeAt(r)||45===e.charCodeAt(r))&&r++,r<e.length&&_t(e.charCodeAt(r))){for(r++;r<e.length&&_t(e.charCodeAt(r));)r++;n=r}else l=3;return e.substring(t,n)}(),a=11;default:for(;r<n&&f(t);)r++,t=e.charCodeAt(r);if(o!==r){switch(i=e.substring(o,r)){case"true":return a=8;case"false":return a=9;case"null":return a=7}return a=16}return i+=String.fromCharCode(t),r++,a=16}}function f(e){if(bt(e)||Ct(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){r=e,i="",o=0,a=16,l=0},getPosition:function(){return r},scan:t?function(){var e;do{e=h()}while(e>=12&&e<=15);return e}:h,getToken:function(){return a},getTokenValue:function(){return i},getTokenOffset:function(){return o},getTokenLength:function(){return r-o},getTokenStartLine:function(){return c},getTokenStartCharacter:function(){return o-d},getTokenError:function(){return l}}};function yt(e){return{getInitialState:()=>new Lt(null,null,!1,null),tokenize:(t,n)=>function(e,t,n,r=0){let i=0,o=!1;switch(n.scanError){case 2:t='"'+t,i=1;break;case 1:t="/*"+t,i=2}const a=wt(t);let s=n.lastWasColon,c=n.parents;const u={tokens:[],endState:n.clone()};for(;;){let d=r+a.getPosition(),l="";const g=a.scan();if(17===g)break;if(d===r+a.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+t.substr(a.getPosition(),3));switch(o&&(d-=i),o=i>0,g){case 1:c=jt.push(c,0),l="delimiter.bracket.json",s=!1;break;case 2:c=jt.pop(c),l="delimiter.bracket.json",s=!1;break;case 3:c=jt.push(c,1),l="delimiter.array.json",s=!1;break;case 4:c=jt.pop(c),l="delimiter.array.json",s=!1;break;case 6:l="delimiter.colon.json",s=!0;break;case 5:l="delimiter.comma.json",s=!1;break;case 8:case 9:case 7:l="keyword.json",s=!1;break;case 10:const e=1===(c?c.type:0);l=s||e?"string.value.json":"string.key.json",s=!1;break;case 11:l="number.json",s=!1}if(e)switch(g){case 12:l="comment.line.json";break;case 13:l="comment.block.json"}u.endState=new Lt(n.getStateData(),a.getTokenError(),s,c),u.tokens.push({startIndex:d,scopes:l})}return u}(e,t,n)}}var Et,At;(At=Et||(Et={}))[At.Object=0]="Object",At[At.Array=1]="Array";var xt,It,St,Tt,jt=class{constructor(e,t){this.parent=e,this.type=t}static pop(e){return e?e.parent:null}static push(e,t){return new jt(e,t)}static equals(e,t){if(!e&&!t)return!0;if(!e||!t)return!1;for(;e&&t;){if(e===t)return!0;if(e.type!==t.type)return!1;e=e.parent,t=t.parent}return!0}},Lt=class{constructor(e,t,n,r){this._state=e,this.scanError=t,this.lastWasColon=n,this.parents=r}clone(){return new Lt(this._state,this.scanError,this.lastWasColon,this.parents)}equals(e){return e===this||!!(e&&e instanceof Lt)&&(this.scanError===e.scanError&&this.lastWasColon===e.lastWasColon&&jt.equals(this.parents,e.parents))}getStateData(){return this._state}setStateData(e){this._state=e}};(It=xt||(xt={}))[It.None=0]="None",It[It.UnexpectedEndOfComment=1]="UnexpectedEndOfComment",It[It.UnexpectedEndOfString=2]="UnexpectedEndOfString",It[It.UnexpectedEndOfNumber=3]="UnexpectedEndOfNumber",It[It.InvalidUnicode=4]="InvalidUnicode",It[It.InvalidEscapeCharacter=5]="InvalidEscapeCharacter",It[It.InvalidCharacter=6]="InvalidCharacter",(Tt=St||(St={}))[Tt.OpenBraceToken=1]="OpenBraceToken",Tt[Tt.CloseBraceToken=2]="CloseBraceToken",Tt[Tt.OpenBracketToken=3]="OpenBracketToken",Tt[Tt.CloseBracketToken=4]="CloseBracketToken",Tt[Tt.CommaToken=5]="CommaToken",Tt[Tt.ColonToken=6]="ColonToken",Tt[Tt.NullKeyword=7]="NullKeyword",Tt[Tt.TrueKeyword=8]="TrueKeyword",Tt[Tt.FalseKeyword=9]="FalseKeyword",Tt[Tt.StringLiteral=10]="StringLiteral",Tt[Tt.NumericLiteral=11]="NumericLiteral",Tt[Tt.LineCommentTrivia=12]="LineCommentTrivia",Tt[Tt.BlockCommentTrivia=13]="BlockCommentTrivia",Tt[Tt.LineBreakTrivia=14]="LineBreakTrivia",Tt[Tt.Trivia=15]="Trivia",Tt[Tt.Unknown=16]="Unknown",Tt[Tt.EOF=17]="EOF";function Mt(e){const t=[],n=[],r=new class{constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!this._worker)return;Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=c.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then(e=>{t=e}).then(t=>{if(this._worker)return this._worker.withSyncedResources(e)}).then(e=>t)}}(e);t.push(r);const i=(...e)=>r.getLanguageServiceWorker(...e);function o(){const{languageId:t,modeConfiguration:r}=e;Rt(n),r.documentFormattingEdits&&n.push(c.languages.registerDocumentFormattingEditProvider(t,new class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){const r=e.uri;return this._worker(r).then(e=>e.format(r.toString(),null,vt(t)).then(e=>{if(e&&0!==e.length)return e.map(ht)}))}}(i))),r.documentRangeFormattingEdits&&n.push(c.languages.registerDocumentRangeFormattingEditProvider(t,new class{constructor(e){this._worker=e}provideDocumentRangeFormattingEdits(e,t,n,r){const i=e.uri;return this._worker(i).then(e=>e.format(i.toString(),dt(t),vt(n)).then(e=>{if(e&&0!==e.length)return e.map(ht)}))}}(i))),r.completionItems&&n.push(c.languages.registerCompletionItemProvider(t,new class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){const i=e.uri;return this._worker(i).then(e=>e.doComplete(i.toString(),ut(t))).then(n=>{if(!n)return;const r=e.getWordUntilPosition(t),i=new c.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map(e=>{const t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(n=e.command,n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0),range:i,kind:gt(e.kind)};var n,r;return e.textEdit&&(void 0!==(r=e.textEdit).insert&&void 0!==r.replace?t.range={insert:lt(e.textEdit.insert),replace:lt(e.textEdit.replace)}:t.range=lt(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(ht)),e.insertTextFormat===ve.Snippet&&(t.insertTextRules=c.languages.CompletionItemInsertTextRule.InsertAsSnippet),t});return{isIncomplete:n.isIncomplete,suggestions:o}})}}(i,[" ",":",'"']))),r.hovers&&n.push(c.languages.registerHoverProvider(t,new class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.doHover(r.toString(),ut(t))).then(e=>{if(e)return{range:lt(e.range),contents:pt(e.contents)}})}}(i))),r.documentSymbols&&n.push(c.languages.registerDocumentSymbolProvider(t,new class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){const n=e.uri;return this._worker(n).then(e=>e.findDocumentSymbols(n.toString())).then(e=>{if(e)return e.map(e=>({name:e.name,detail:"",containerName:e.containerName,kind:mt(e.kind),range:lt(e.location.range),selectionRange:lt(e.location.range),tags:[]}))})}}(i))),r.tokens&&n.push(c.languages.setTokensProvider(t,yt(!0))),r.colors&&n.push(c.languages.registerColorProvider(t,new class{constructor(e){this._worker=e}provideDocumentColors(e,t){const n=e.uri;return this._worker(n).then(e=>e.findDocumentColors(n.toString())).then(e=>{if(e)return e.map(e=>({color:e.color,range:lt(e.range)}))})}provideColorPresentations(e,t,n){const r=e.uri;return this._worker(r).then(e=>e.getColorPresentations(r.toString(),t.color,dt(t.range))).then(e=>{if(e)return e.map(e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=ht(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(ht)),t})})}}(i))),r.foldingRanges&&n.push(c.languages.registerFoldingRangeProvider(t,new class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){const r=e.uri;return this._worker(r).then(e=>e.getFoldingRanges(r.toString(),t)).then(e=>{if(e)return e.map(e=>{const t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case I.Comment:return c.languages.FoldingRangeKind.Comment;case I.Imports:return c.languages.FoldingRangeKind.Imports;case I.Region:return c.languages.FoldingRangeKind.Region}return}(e.kind)),t})})}}(i))),r.diagnostics&&n.push(new class extends class{constructor(e,t,n){this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);const r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent(()=>{window.clearTimeout(t),t=window.setTimeout(()=>this._doValidate(e.uri,n),500)}),this._doValidate(e.uri,n))},i=e=>{c.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(c.editor.onDidCreateModel(r)),this._disposables.push(c.editor.onWillDisposeModel(i)),this._disposables.push(c.editor.onDidChangeModelLanguage(e=>{i(e.model),r(e.model)})),this._disposables.push(n(e=>{c.editor.getModels().forEach(e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))})})),this._disposables.push({dispose:()=>{c.editor.getModels().forEach(i);for(let e in this._listener)this._listener[e].dispose()}}),c.editor.getModels().forEach(r)}dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables.length=0}_doValidate(e,t){this._worker(e).then(t=>t.doValidation(e.toString())).then(n=>{const r=n.map(e=>function(e,t){let n="number"==typeof t.code?String(t.code):t.code;return{severity:ct(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}(0,e));let i=c.editor.getModel(e);i&&i.getLanguageId()===t&&c.editor.setModelMarkers(i,t,r)}).then(void 0,e=>{})}}{constructor(e,t,n){super(e,t,n.onDidChange),this._disposables.push(c.editor.onWillDisposeModel(e=>{this._resetSchema(e.uri)})),this._disposables.push(c.editor.onDidChangeModelLanguage(e=>{this._resetSchema(e.model.uri)}))}_resetSchema(e){this._worker().then(t=>{t.resetSchema(e.toString())})}}(t,i,e)),r.selectionRanges&&n.push(c.languages.registerSelectionRangeProvider(t,new class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){const r=e.uri;return this._worker(r).then(e=>e.getSelectionRanges(r.toString(),t.map(ut))).then(e=>{if(e)return e.map(e=>{const t=[];for(;e;)t.push({range:lt(e.range)}),e=e.parent;return t})})}}(i)))}o(),t.push(c.languages.setLanguageConfiguration(e.languageId,Pt));let a=e.modeConfiguration;return e.onDidChange(e=>{e.modeConfiguration!==a&&(a=e.modeConfiguration,o())}),t.push(Ot(n)),Ot(t)}function Ot(e){return{dispose:()=>Rt(e)}}function Rt(e){for(;e.length;)e.pop().dispose()}var Pt={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}}}]);
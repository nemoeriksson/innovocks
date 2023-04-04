var z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function F(u){if(u.__esModule)return u;var x=u.default;if(typeof x=="function"){var v=function a(){if(this instanceof a){var h=[null];h.push.apply(h,arguments);var f=Function.bind.apply(x,h);return new f}return x.apply(this,arguments)};v.prototype=x.prototype}else v={};return Object.defineProperty(v,"__esModule",{value:!0}),Object.keys(u).forEach(function(a){var h=Object.getOwnPropertyDescriptor(u,a);Object.defineProperty(v,a,h.get?h:{enumerable:!0,get:function(){return u[a]}})}),v}var O={},L={get exports(){return O},set exports(u){O=u}};function $(u){throw new Error('Could not dynamically require "'+u+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var A={},D={get exports(){return A},set exports(u){A=u}};const U={},V=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),G=F(V);var q;function K(){return q||(q=1,function(u,x){(function(v,a){u.exports=a()})(z,function(){var v=v||function(a,h){var f;if(typeof window<"u"&&window.crypto&&(f=window.crypto),typeof self<"u"&&self.crypto&&(f=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(f=globalThis.crypto),!f&&typeof window<"u"&&window.msCrypto&&(f=window.msCrypto),!f&&typeof z<"u"&&z.crypto&&(f=z.crypto),!f&&typeof $=="function")try{f=G}catch{}var P=function(){if(f){if(typeof f.getRandomValues=="function")try{return f.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof f.randomBytes=="function")try{return f.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},m=Object.create||function(){function t(){}return function(r){var e;return t.prototype=r,e=new t,t.prototype=null,e}}(),S={},b=S.lib={},_=b.Base=function(){return{extend:function(t){var r=m(this);return t&&r.mixIn(t),(!r.hasOwnProperty("init")||this.init===r.init)&&(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var r in t)t.hasOwnProperty(r)&&(this[r]=t[r]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),p=b.WordArray=_.extend({init:function(t,r){t=this.words=t||[],r!=h?this.sigBytes=r:this.sigBytes=t.length*4},toString:function(t){return(t||g).stringify(this)},concat:function(t){var r=this.words,e=t.words,o=this.sigBytes,s=t.sigBytes;if(this.clamp(),o%4)for(var c=0;c<s;c++){var l=e[c>>>2]>>>24-c%4*8&255;r[o+c>>>2]|=l<<24-(o+c)%4*8}else for(var d=0;d<s;d+=4)r[o+d>>>2]=e[d>>>2];return this.sigBytes+=s,this},clamp:function(){var t=this.words,r=this.sigBytes;t[r>>>2]&=4294967295<<32-r%4*8,t.length=a.ceil(r/4)},clone:function(){var t=_.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var r=[],e=0;e<t;e+=4)r.push(P());return new p.init(r,t)}}),C=S.enc={},g=C.Hex={stringify:function(t){for(var r=t.words,e=t.sigBytes,o=[],s=0;s<e;s++){var c=r[s>>>2]>>>24-s%4*8&255;o.push((c>>>4).toString(16)),o.push((c&15).toString(16))}return o.join("")},parse:function(t){for(var r=t.length,e=[],o=0;o<r;o+=2)e[o>>>3]|=parseInt(t.substr(o,2),16)<<24-o%8*4;return new p.init(e,r/2)}},w=C.Latin1={stringify:function(t){for(var r=t.words,e=t.sigBytes,o=[],s=0;s<e;s++){var c=r[s>>>2]>>>24-s%4*8&255;o.push(String.fromCharCode(c))}return o.join("")},parse:function(t){for(var r=t.length,e=[],o=0;o<r;o++)e[o>>>2]|=(t.charCodeAt(o)&255)<<24-o%4*8;return new p.init(e,r)}},n=C.Utf8={stringify:function(t){try{return decodeURIComponent(escape(w.stringify(t)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(t){return w.parse(unescape(encodeURIComponent(t)))}},i=b.BufferedBlockAlgorithm=_.extend({reset:function(){this._data=new p.init,this._nDataBytes=0},_append:function(t){typeof t=="string"&&(t=n.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(t){var r,e=this._data,o=e.words,s=e.sigBytes,c=this.blockSize,l=c*4,d=s/l;t?d=a.ceil(d):d=a.max((d|0)-this._minBufferSize,0);var H=d*c,B=a.min(H*4,s);if(H){for(var R=0;R<H;R+=c)this._doProcessBlock(o,R);r=o.splice(0,H),e.sigBytes-=B}return new p.init(r,B)},clone:function(){var t=_.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});b.Hasher=i.extend({cfg:_.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){i.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var r=this._doFinalize();return r},blockSize:16,_createHelper:function(t){return function(r,e){return new t.init(e).finalize(r)}},_createHmacHelper:function(t){return function(r,e){return new y.HMAC.init(t,e).finalize(r)}}});var y=S.algo={};return S}(Math);return v})}(D)),A}(function(u,x){(function(v,a){u.exports=a(K())})(z,function(v){return function(a){var h=v,f=h.lib,P=f.WordArray,m=f.Hasher,S=h.algo,b=[],_=[];(function(){function g(y){for(var t=a.sqrt(y),r=2;r<=t;r++)if(!(y%r))return!1;return!0}function w(y){return(y-(y|0))*4294967296|0}for(var n=2,i=0;i<64;)g(n)&&(i<8&&(b[i]=w(a.pow(n,1/2))),_[i]=w(a.pow(n,1/3)),i++),n++})();var p=[],C=S.SHA256=m.extend({_doReset:function(){this._hash=new P.init(b.slice(0))},_doProcessBlock:function(g,w){for(var n=this._hash.words,i=n[0],y=n[1],t=n[2],r=n[3],e=n[4],o=n[5],s=n[6],c=n[7],l=0;l<64;l++){if(l<16)p[l]=g[w+l]|0;else{var d=p[l-15],H=(d<<25|d>>>7)^(d<<14|d>>>18)^d>>>3,B=p[l-2],R=(B<<15|B>>>17)^(B<<13|B>>>19)^B>>>10;p[l]=H+p[l-7]+R+p[l-16]}var j=e&o^~e&s,k=i&y^i&t^y&t,E=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),T=(e<<26|e>>>6)^(e<<21|e>>>11)^(e<<7|e>>>25),W=c+T+j+_[l]+p[l],I=E+k;c=s,s=o,o=e,e=r+W|0,r=t,t=y,y=i,i=W+I|0}n[0]=n[0]+i|0,n[1]=n[1]+y|0,n[2]=n[2]+t|0,n[3]=n[3]+r|0,n[4]=n[4]+e|0,n[5]=n[5]+o|0,n[6]=n[6]+s|0,n[7]=n[7]+c|0},_doFinalize:function(){var g=this._data,w=g.words,n=this._nDataBytes*8,i=g.sigBytes*8;return w[i>>>5]|=128<<24-i%32,w[(i+64>>>9<<4)+14]=a.floor(n/4294967296),w[(i+64>>>9<<4)+15]=n,g.sigBytes=w.length*4,this._process(),this._hash},clone:function(){var g=m.clone.call(this);return g._hash=this._hash.clone(),g}});h.SHA256=m._createHelper(C),h.HmacSHA256=m._createHmacHelper(C)}(Math),v.SHA256})})(L);const M=O;export{M as s};

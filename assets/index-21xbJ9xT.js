var H_=Object.defineProperty;var k_=(n,e,t)=>e in n?H_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var at=(n,e,t)=>(k_(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();class z_{constructor(){at(this,"container");const e=document.getElementById("container");e.style.width=`${window.innerWidth}px`,e.style.height=`${window.innerHeight}px`,e.style.position="relative",this.container=e}requestAnimationFrame(e){window.requestAnimationFrame(e)}async loadVideo(){return new Promise(async(e,t)=>{const i=document.createElement("video"),r=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user"}});i.srcObject=r,i.onloadedmetadata=()=>e(i),i.onerror=t})}createCanvas(){return document.createElement("canvas")}getContext(e){return e.getContext("2d")}createStartButton(){const e=document.createElement("button");return e.textContent="カメラ読み込み開始",e.style.position="absolute",e.style.top="10px",e.style.left="10px",e}clearRect(e,t,i){e.clearRect(0,0,t,i)}drawVideo(e,t,i,r){e.save(),e.scale(-1,1),e.drawImage(t,0,0,-i,r),e.restore()}appendContainer(e){this.container.appendChild(e)}}class V_{constructor(e){at(this,"game");at(this,"browser");at(this,"cameraCanvas");at(this,"startButton");at(this,"lastVideoTime",-1);const t=new z_,i=t.createCanvas();i.style.position="absolute",i.style.bottom="0",i.style.right="0",this.cameraCanvas=i;const r=t.createStartButton();this.startButton=r,t.appendContainer(e.getDomElement()),t.appendContainer(i),t.appendContainer(r),this.browser=t,this.game=e}getStartButton(){return this.startButton}async start(){const e=await this.browser.loadVideo();e.play();const t=window.innerWidth<=640?2:4;this.cameraCanvas.width=e.videoWidth/t,this.cameraCanvas.height=e.videoHeight/e.videoWidth*this.cameraCanvas.width;const i=this.browser.getContext(this.cameraCanvas),r=async s=>{this.browser.requestAnimationFrame(r),e.currentTime!==this.lastVideoTime&&(await this.game.update(e,s),this.lastVideoTime=e.currentTime),this.browser.clearRect(i,this.cameraCanvas.width,this.cameraCanvas.height),this.browser.drawVideo(i,e,this.cameraCanvas.width,this.cameraCanvas.height),this.game.render()};await r(0)}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ci="159",ns={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},G_=0,Yh=1,W_=2,vm=1,X_=2,Vi=3,Yi=0,gn=1,Xn=2,hr=0,Is=1,Kh=2,$h=3,Zh=4,j_=5,Fr=100,q_=101,Y_=102,Qh=103,Jh=104,K_=200,$_=201,Z_=202,Q_=203,ru=204,su=205,J_=206,ev=207,tv=208,nv=209,iv=210,rv=211,sv=212,ov=213,av=214,lv=0,cv=1,uv=2,ol=3,hv=4,dv=5,fv=6,pv=7,xm=0,mv=1,gv=2,dr=0,_v=1,vv=2,xv=3,yv=4,Mv=5,ed="attached",Ev="detached",ym=300,Os=301,Fs=302,ou=303,au=304,wl=306,Bs=1e3,jn=1001,al=1002,Jt=1003,lu=1004,qa=1005,En=1006,Mm=1007,qr=1008,fr=1009,Tv=1010,Sv=1011,Vu=1012,Em=1013,ur=1014,Wi=1015,Oo=1016,Tm=1017,Sm=1018,Vr=1020,Av=1021,qn=1023,wv=1024,bv=1025,Gr=1026,Hs=1027,Rv=1028,Am=1029,Lv=1030,wm=1031,bm=1033,rc=33776,sc=33777,oc=33778,ac=33779,td=35840,nd=35841,id=35842,rd=35843,Rm=36196,sd=37492,od=37496,ad=37808,ld=37809,cd=37810,ud=37811,hd=37812,dd=37813,fd=37814,pd=37815,md=37816,gd=37817,_d=37818,vd=37819,xd=37820,yd=37821,lc=36492,Md=36494,Ed=36495,Pv=36283,Td=36284,Sd=36285,Ad=36286,Fo=2300,ks=2301,cc=2302,wd=2400,bd=2401,Rd=2402,Cv=2500,Iv=0,Lm=1,cu=2,Pm=3e3,Wr=3001,Dv=3200,Uv=3201,Gu=0,Nv=1,Yn="",Dt="srgb",ln="srgb-linear",Wu="display-p3",bl="display-p3-linear",ll="linear",gt="srgb",cl="rec709",ul="p3",rs=7680,Ld=519,Ov=512,Fv=513,Bv=514,Cm=515,Hv=516,kv=517,zv=518,Vv=519,uu=35044,Gv=35048,Pd="300 es",hu=1035,Xi=2e3,hl=2001;class Jr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cd=1234567;const Ro=Math.PI/180,zs=180/Math.PI;function ui(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function sn(n,e,t){return Math.max(e,Math.min(t,n))}function Xu(n,e){return(n%e+e)%e}function Wv(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Xv(n,e,t){return n!==e?(t-n)/(e-n):0}function Lo(n,e,t){return(1-t)*n+t*e}function jv(n,e,t,i){return Lo(n,e,1-Math.exp(-t*i))}function qv(n,e=1){return e-Math.abs(Xu(n,e*2)-e)}function Yv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Kv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $v(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Zv(n,e){return n+Math.random()*(e-n)}function Qv(n){return n*(.5-Math.random())}function Jv(n){n!==void 0&&(Cd=n);let e=Cd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function e1(n){return n*Ro}function t1(n){return n*zs}function du(n){return(n&n-1)===0&&n!==0}function n1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function dl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function i1(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ht={DEG2RAD:Ro,RAD2DEG:zs,generateUUID:ui,clamp:sn,euclideanModulo:Xu,mapLinear:Wv,inverseLerp:Xv,lerp:Lo,damp:jv,pingpong:qv,smoothstep:Yv,smootherstep:Kv,randInt:$v,randFloat:Zv,randFloatSpread:Qv,seededRandom:Jv,degToRad:e1,radToDeg:t1,isPowerOfTwo:du,ceilPowerOfTwo:n1,floorPowerOfTwo:dl,setQuaternionFromProperEuler:i1,normalize:ut,denormalize:Ti};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,i,r,s,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],E=r[1],v=r[4],M=r[7],T=r[2],R=r[5],A=r[8];return s[0]=o*_+a*E+l*T,s[3]=o*m+a*v+l*R,s[6]=o*p+a*M+l*A,s[1]=c*_+u*E+h*T,s[4]=c*m+u*v+h*R,s[7]=c*p+u*M+h*A,s[2]=d*_+f*E+g*T,s[5]=d*m+f*v+g*R,s[8]=d*p+f*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(uc.makeScale(e,t)),this}rotate(e){return this.premultiply(uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uc=new Oe;function Im(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function r1(){const n=Bo("canvas");return n.style.display="block",n}const Id={};function Po(n){n in Id||(Id[n]=!0,console.warn(n))}const Dd=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ud=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ca={[ln]:{transfer:ll,primaries:cl,toReference:n=>n,fromReference:n=>n},[Dt]:{transfer:gt,primaries:cl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[bl]:{transfer:ll,primaries:ul,toReference:n=>n.applyMatrix3(Ud),fromReference:n=>n.applyMatrix3(Dd)},[Wu]:{transfer:gt,primaries:ul,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ud),fromReference:n=>n.applyMatrix3(Dd).convertLinearToSRGB()}},s1=new Set([ln,bl]),ot={enabled:!0,_workingColorSpace:ln,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!s1.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ca[e].toReference,r=ca[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ca[n].primaries},getTransfer:function(n){return n===Yn?ll:ca[n].transfer}};function Ds(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ss;class Dm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ss===void 0&&(ss=Bo("canvas")),ss.width=e.width,ss.height=e.height;const i=ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ds(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ds(t[i]/255)*255):t[i]=Ds(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o1=0;class Um{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(dc(r[o].image)):s.push(dc(r[o]))}else s=dc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function dc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a1=0;class an extends Jr{constructor(e=an.DEFAULT_IMAGE,t=an.DEFAULT_MAPPING,i=jn,r=jn,s=En,o=qr,a=qn,l=fr,c=an.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=ui(),this.name="",this.source=new Um(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Po("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Wr?Dt:Yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ym)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Po("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?Wr:Pm}set encoding(e){Po("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wr?Dt:Yn}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=ym;an.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(f+1)/2,T=(p+1)/2,R=(u+d)/4,A=(h+_)/4,F=(g+m)/4;return v>M&&v>T?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=A/i):M>T?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=F/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=F/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class l1 extends Jr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Po("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Wr?Dt:Yn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Um(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends l1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Nm extends an{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class c1 extends an{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ke{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*_,E=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const T=Math.sqrt(v),R=Math.atan2(T,p*E);m=Math.sin(m*R)/T,a=Math.sin(a*R)/T}const M=a*E;if(l=l*m+d*M,c=c*m+f*M,u=u*m+g*M,h=h*m+_*M,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fc.copy(this).projectOnVector(e),this.sub(fc)}reflect(e){return this.sub(fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fc=new L,Nd=new ke;class $i{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ho),ha.subVectors(this.max,ho),os.subVectors(e.a,ho),as.subVectors(e.b,ho),ls.subVectors(e.c,ho),er.subVectors(as,os),tr.subVectors(ls,as),wr.subVectors(os,ls);let t=[0,-er.z,er.y,0,-tr.z,tr.y,0,-wr.z,wr.y,er.z,0,-er.x,tr.z,0,-tr.x,wr.z,0,-wr.x,-er.y,er.x,0,-tr.y,tr.x,0,-wr.y,wr.x,0];return!pc(t,os,as,ls,ha)||(t=[1,0,0,0,1,0,0,0,1],!pc(t,os,as,ls,ha))?!1:(da.crossVectors(er,tr),t=[da.x,da.y,da.z],pc(t,os,as,ls,ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new L,new L,new L,new L,new L,new L,new L,new L],ri=new L,ua=new $i,os=new L,as=new L,ls=new L,er=new L,tr=new L,wr=new L,ho=new L,ha=new L,da=new L,br=new L;function pc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){br.fromArray(n,s);const a=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),l=e.dot(br),c=t.dot(br),u=i.dot(br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const u1=new $i,fo=new L,mc=new L;class Pi{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):u1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);const t=fo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(fo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(mc)),this.expandByPoint(fo.copy(e.center).sub(mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new L,gc=new L,fa=new L,nr=new L,_c=new L,pa=new L,vc=new L;class Zo{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){gc.copy(e).add(t).multiplyScalar(.5),fa.copy(t).sub(e).normalize(),nr.copy(this.origin).sub(gc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(fa),a=nr.dot(this.direction),l=-nr.dot(fa),c=nr.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(gc).addScaledVector(fa,d),f}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,r,s){_c.subVectors(t,e),pa.subVectors(i,e),vc.crossVectors(_c,pa);let o=this.direction.dot(vc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;nr.subVectors(this.origin,e);const l=a*this.direction.dot(pa.crossVectors(nr,pa));if(l<0)return null;const c=a*this.direction.dot(_c.cross(nr));if(c<0||l+c>o)return null;const u=-a*nr.dot(vc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,i,r,s,o,a,l,c,u,h,d,f,g,_,m){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,d,f,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h1,e,d1)}lookAt(e,t,i){const r=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),ir.crossVectors(i,Ln),ir.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),ir.crossVectors(i,Ln)),ir.normalize(),ma.crossVectors(Ln,ir),r[0]=ir.x,r[4]=ma.x,r[8]=Ln.x,r[1]=ir.y,r[5]=ma.y,r[9]=Ln.y,r[2]=ir.z,r[6]=ma.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],E=i[3],v=i[7],M=i[11],T=i[15],R=r[0],A=r[4],F=r[8],x=r[12],b=r[1],z=r[5],G=r[9],Q=r[13],I=r[2],V=r[6],Y=r[10],j=r[14],ie=r[3],$=r[7],K=r[11],oe=r[15];return s[0]=o*R+a*b+l*I+c*ie,s[4]=o*A+a*z+l*V+c*$,s[8]=o*F+a*G+l*Y+c*K,s[12]=o*x+a*Q+l*j+c*oe,s[1]=u*R+h*b+d*I+f*ie,s[5]=u*A+h*z+d*V+f*$,s[9]=u*F+h*G+d*Y+f*K,s[13]=u*x+h*Q+d*j+f*oe,s[2]=g*R+_*b+m*I+p*ie,s[6]=g*A+_*z+m*V+p*$,s[10]=g*F+_*G+m*Y+p*K,s[14]=g*x+_*Q+m*j+p*oe,s[3]=E*R+v*b+M*I+T*ie,s[7]=E*A+v*z+M*V+T*$,s[11]=E*F+v*G+M*Y+T*K,s[15]=E*x+v*Q+M*j+T*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*f-i*l*f)+_*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*u-s*l*u)+m*(+t*c*h-t*a*f-s*o*h+i*o*f+s*a*u-i*c*u)+p*(-r*a*u-t*l*h+t*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,v=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,M=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,T=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,R=t*E+i*v+r*M+s*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=E*A,e[1]=(_*d*s-h*m*s-_*r*f+i*m*f+h*r*p-i*d*p)*A,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*A,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*f-i*l*f)*A,e[4]=v*A,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*A,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*f+t*l*f)*A,e[8]=M*A,e[9]=(g*h*s-u*_*s-g*i*f+t*_*f+u*i*p-t*h*p)*A,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*p+t*a*p)*A,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*f-t*a*f)*A,e[12]=T*A,e[13]=(u*_*r-g*h*r+g*i*d-t*_*d-u*i*m+t*h*m)*A,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*A,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,g=s*h,_=o*u,m=o*h,p=a*h,E=l*c,v=l*u,M=l*h,T=i.x,R=i.y,A=i.z;return r[0]=(1-(_+p))*T,r[1]=(f+M)*T,r[2]=(g-v)*T,r[3]=0,r[4]=(f-M)*R,r[5]=(1-(d+p))*R,r[6]=(m+E)*R,r[7]=0,r[8]=(g+v)*A,r[9]=(m-E)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=cs.set(r[0],r[1],r[2]).length();const o=cs.set(r[4],r[5],r[6]).length(),a=cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const c=1/s,u=1/o,h=1/a;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,t.setFromRotationMatrix(si),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Xi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,g;if(a===Xi)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===hl)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Xi){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),d=(t+e)*c,f=(i+r)*u;let g,_;if(a===Xi)g=(o+s)*h,_=-2*h;else if(a===hl)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const cs=new L,si=new ze,h1=new L(0,0,0),d1=new L(1,1,1),ir=new L,ma=new L,Ln=new L,Od=new ze,Fd=new ke;let Kr=class Om{constructor(e=0,t=0,i=0,r=Om.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Od,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fd.setFromEuler(this),this.setFromQuaternion(Fd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kr.DEFAULT_ORDER="XYZ";class Fm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let f1=0;const Bd=new L,us=new ke,Oi=new ze,ga=new L,po=new L,p1=new L,m1=new ke,Hd=new L(1,0,0),kd=new L(0,1,0),zd=new L(0,0,1),g1={type:"added"},_1={type:"removed"};class ft extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new L,t=new Kr,i=new ke,r=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ze},normalMatrix:{value:new Oe}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Hd,e)}rotateY(e){return this.rotateOnAxis(kd,e)}rotateZ(e){return this.rotateOnAxis(zd,e)}translateOnAxis(e,t){return Bd.copy(e).applyQuaternion(this.quaternion),this.position.add(Bd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hd,e)}translateY(e){return this.translateOnAxis(kd,e)}translateZ(e){return this.translateOnAxis(zd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ga.copy(e):ga.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(po,ga,this.up):Oi.lookAt(ga,po,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),us.setFromRotationMatrix(Oi),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(g1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,p1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,m1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ft.DEFAULT_UP=new L(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new L,Fi=new L,xc=new L,Bi=new L,hs=new L,ds=new L,Vd=new L,yc=new L,Mc=new L,Ec=new L;let _a=!1;class li{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),oi.subVectors(e,t),r.cross(oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){oi.subVectors(r,t),Fi.subVectors(i,t),xc.subVectors(e,t);const o=oi.dot(oi),a=oi.dot(Fi),l=oi.dot(xc),c=Fi.dot(Fi),u=Fi.dot(xc),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bi),Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getUV(e,t,i,r,s,o,a,l){return _a===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_a=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Bi),l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l}static isFrontFacing(e,t,i,r){return oi.subVectors(i,t),Fi.subVectors(e,t),oi.cross(Fi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),oi.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return _a===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_a=!0),li.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return li.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;hs.subVectors(r,i),ds.subVectors(s,i),yc.subVectors(e,i);const l=hs.dot(yc),c=ds.dot(yc);if(l<=0&&c<=0)return t.copy(i);Mc.subVectors(e,r);const u=hs.dot(Mc),h=ds.dot(Mc);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(hs,o);Ec.subVectors(e,s);const f=hs.dot(Ec),g=ds.dot(Ec);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ds,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Vd.subVectors(s,r),a=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(Vd,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(hs,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},va={h:0,s:0,l:0};function Tc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Me{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=Xu(e,1),t=sn(t,0,1),i=sn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Tc(o,s,e+1/3),this.g=Tc(o,s,e),this.b=Tc(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,t=Dt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const i=Bm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=hc(e.r),this.g=hc(e.g),this.b=hc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return ot.fromWorkingColorSpace(dn.copy(this),e),Math.round(sn(dn.r*255,0,255))*65536+Math.round(sn(dn.g*255,0,255))*256+Math.round(sn(dn.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(dn.copy(this),t);const i=dn.r,r=dn.g,s=dn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Dt){ot.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,i=dn.g,r=dn.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL(va);const i=Lo(rr.h,va.h,t),r=Lo(rr.s,va.s,t),s=Lo(rr.l,va.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Me;Me.NAMES=Bm;let v1=0;class Ai extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=Is,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ru,this.blendDst=su,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=ol,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ru&&(i.blendSrc=this.blendSrc),this.blendDst!==su&&(i.blendDst=this.blendDst),this.blendEquation!==Fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ol&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ld&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ji extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new L,xa=new Le;class mt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uu&&(e.usage=this.usage),e}}class Hm extends mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class km extends mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Un extends mt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let x1=0;const Bn=new ze,Sc=new ft,fs=new L,Pn=new $i,mo=new $i,$t=new L;class en extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Im(e)?km:Hm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,i){return Bn.makeTranslation(e,t,i),this.applyMatrix4(Bn),this}scale(e,t,i){return Bn.makeScale(e,t,i),this.applyMatrix4(Bn),this}lookAt(e){return Sc.lookAt(e),Sc.updateMatrix(),this.applyMatrix4(Sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];mo.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Pn.min,mo.min),Pn.expandByPoint($t),$t.addVectors(Pn.max,mo.max),Pn.expandByPoint($t)):(Pn.expandByPoint(mo.min),Pn.expandByPoint(mo.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$t.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(e,c),$t.add(fs)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new L,u[b]=new L;const h=new L,d=new L,f=new L,g=new Le,_=new Le,m=new Le,p=new L,E=new L;function v(b,z,G){h.fromArray(r,b*3),d.fromArray(r,z*3),f.fromArray(r,G*3),g.fromArray(o,b*2),_.fromArray(o,z*2),m.fromArray(o,G*2),d.sub(h),f.sub(h),_.sub(g),m.sub(g);const Q=1/(_.x*m.y-m.x*_.y);isFinite(Q)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(Q),E.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(Q),c[b].add(p),c[z].add(p),c[G].add(p),u[b].add(E),u[z].add(E),u[G].add(E))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let b=0,z=M.length;b<z;++b){const G=M[b],Q=G.start,I=G.count;for(let V=Q,Y=Q+I;V<Y;V+=3)v(i[V+0],i[V+1],i[V+2])}const T=new L,R=new L,A=new L,F=new L;function x(b){A.fromArray(s,b*3),F.copy(A);const z=c[b];T.copy(z),T.sub(A.multiplyScalar(A.dot(z))).normalize(),R.crossVectors(F,z);const Q=R.dot(u[b])<0?-1:1;l[b*4]=T.x,l[b*4+1]=T.y,l[b*4+2]=T.z,l[b*4+3]=Q}for(let b=0,z=M.length;b<z;++b){const G=M[b],Q=G.start,I=G.count;for(let V=Q,Y=Q+I;V<Y;V+=3)x(i[V+0]),x(i[V+1]),x(i[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new mt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gd=new ze,Rr=new Zo,ya=new Pi,Wd=new L,ps=new L,ms=new L,gs=new L,Ac=new L,Ma=new L,Ea=new Le,Ta=new Le,Sa=new Le,Xd=new L,jd=new L,qd=new L,Aa=new L,wa=new L;class Tn extends ft{constructor(e=new en,t=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ma.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ac.fromBufferAttribute(h,e),o?Ma.addScaledVector(Ac,u):Ma.addScaledVector(Ac.sub(t),u))}t.add(Ma)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(ya.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(ya,Wd)===null||Rr.origin.distanceToSquared(Wd)>(e.far-e.near)**2))&&(Gd.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Gd),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=E,T=v;M<T;M+=3){const R=a.getX(M),A=a.getX(M+1),F=a.getX(M+2);r=ba(this,p,e,i,c,u,h,R,A,F),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);r=ba(this,o,e,i,c,u,h,E,v,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=E,T=v;M<T;M+=3){const R=M,A=M+1,F=M+2;r=ba(this,p,e,i,c,u,h,R,A,F),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=m,v=m+1,M=m+2;r=ba(this,o,e,i,c,u,h,E,v,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function y1(n,e,t,i,r,s,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Yi,a),l===null)return null;wa.copy(a),wa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(wa);return c<t.near||c>t.far?null:{distance:c,point:wa.clone(),object:n}}function ba(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ps),n.getVertexPosition(l,ms),n.getVertexPosition(c,gs);const u=y1(n,e,t,i,ps,ms,gs,Aa);if(u){r&&(Ea.fromBufferAttribute(r,a),Ta.fromBufferAttribute(r,l),Sa.fromBufferAttribute(r,c),u.uv=li.getInterpolation(Aa,ps,ms,gs,Ea,Ta,Sa,new Le)),s&&(Ea.fromBufferAttribute(s,a),Ta.fromBufferAttribute(s,l),Sa.fromBufferAttribute(s,c),u.uv1=li.getInterpolation(Aa,ps,ms,gs,Ea,Ta,Sa,new Le),u.uv2=u.uv1),o&&(Xd.fromBufferAttribute(o,a),jd.fromBufferAttribute(o,l),qd.fromBufferAttribute(o,c),u.normal=li.getInterpolation(Aa,ps,ms,gs,Xd,jd,qd,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new L,materialIndex:0};li.getNormal(ps,ms,gs,h.normal),u.face=h}return u}class Qo extends en{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Un(c,3)),this.setAttribute("normal",new Un(u,3)),this.setAttribute("uv",new Un(h,2));function g(_,m,p,E,v,M,T,R,A,F,x){const b=M/A,z=T/F,G=M/2,Q=T/2,I=R/2,V=A+1,Y=F+1;let j=0,ie=0;const $=new L;for(let K=0;K<Y;K++){const oe=K*z-Q;for(let ce=0;ce<V;ce++){const W=ce*b-G;$[_]=W*E,$[m]=oe*v,$[p]=I,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=R>0?1:-1,u.push($.x,$.y,$.z),h.push(ce/A),h.push(1-K/F),j+=1}}for(let K=0;K<F;K++)for(let oe=0;oe<A;oe++){const ce=d+oe+V*K,W=d+oe+V*(K+1),Z=d+(oe+1)+V*(K+1),de=d+(oe+1)+V*K;l.push(ce,W,de),l.push(W,Z,de),ie+=6}a.addGroup(f,ie,x),f+=ie,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function pn(n){const e={};for(let t=0;t<n.length;t++){const i=Vs(n[t]);for(const r in i)e[r]=i[r]}return e}function M1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zm(n){return n.getRenderTarget()===null?n.outputColorSpace:ot.workingColorSpace}const Vm={clone:Vs,merge:pn};var E1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E1,this.fragmentShader=T1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=M1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gm extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class mn extends Gm{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ro*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _s=-90,vs=1;class S1 extends ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(_s,vs,e,t);r.layers=this.layers,this.add(r);const s=new mn(_s,vs,e,t);s.layers=this.layers,this.add(s);const o=new mn(_s,vs,e,t);o.layers=this.layers,this.add(o);const a=new mn(_s,vs,e,t);a.layers=this.layers,this.add(a);const l=new mn(_s,vs,e,t);l.layers=this.layers,this.add(l);const c=new mn(_s,vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Wm extends an{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Os,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class A1 extends Yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Po("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wr?Dt:Yn),this.texture=new Wm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:En}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qo(5,5,5),s=new gr({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:hr});s.uniforms.tEquirect.value=t;const o=new Tn(r,s),a=t.minFilter;return t.minFilter===qr&&(t.minFilter=En),new S1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const wc=new L,w1=new L,b1=new Oe;class ar{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=wc.subVectors(i,t).cross(w1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||b1.getNormalMatrix(e),r=this.coplanarPoint(wc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new Pi,Ra=new L;class ju{constructor(e=new ar,t=new ar,i=new ar,r=new ar,s=new ar,o=new ar){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],E=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,m-f,M-p).normalize(),i[1].setComponents(l+s,d+c,m+f,M+p).normalize(),i[2].setComponents(l+o,d+u,m+g,M+E).normalize(),i[3].setComponents(l-o,d-u,m-g,M-E).normalize(),i[4].setComponents(l-a,d-h,m-_,M-v).normalize(),t===Xi)i[5].setComponents(l+a,d+h,m+_,M+v).normalize();else if(t===hl)i[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ra.x=r.normal.x>0?e.max.x:e.min.x,Ra.y=r.normal.y>0?e.max.y:e.min.y,Ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xm(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function R1(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,d=c.usage,f=h.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,h){const d=u.array,f=u._updateRange,g=u.updateRanges;if(n.bindBuffer(h,c),f.count===-1&&g.length===0&&n.bufferSubData(h,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];t?n.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class qu extends en{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*d-o;for(let v=0;v<c;v++){const M=v*h-s;g.push(M,-E,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const v=E+c*p,M=E+c*(p+1),T=E+1+c*(p+1),R=E+1+c*p;f.push(v,M,R),f.push(M,T,R)}this.setIndex(f),this.setAttribute("position",new Un(g,3)),this.setAttribute("normal",new Un(_,3)),this.setAttribute("uv",new Un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qu(e.width,e.height,e.widthSegments,e.heightSegments)}}var L1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,C1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,U1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,O1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,B1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,H1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,V1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,G1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Q1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,J1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ex=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ox=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ax=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_x=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ex=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Px=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ix=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Wx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ty=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,py=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,my=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_y=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,My=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ey=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ty=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,by=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ry=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ly=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ny=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Oy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ky=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ky=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$y=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:L1,alphahash_pars_fragment:P1,alphamap_fragment:C1,alphamap_pars_fragment:I1,alphatest_fragment:D1,alphatest_pars_fragment:U1,aomap_fragment:N1,aomap_pars_fragment:O1,batching_pars_vertex:F1,batching_vertex:B1,begin_vertex:H1,beginnormal_vertex:k1,bsdfs:z1,iridescence_fragment:V1,bumpmap_pars_fragment:G1,clipping_planes_fragment:W1,clipping_planes_pars_fragment:X1,clipping_planes_pars_vertex:j1,clipping_planes_vertex:q1,color_fragment:Y1,color_pars_fragment:K1,color_pars_vertex:$1,color_vertex:Z1,common:Q1,cube_uv_reflection_fragment:J1,defaultnormal_vertex:ex,displacementmap_pars_vertex:tx,displacementmap_vertex:nx,emissivemap_fragment:ix,emissivemap_pars_fragment:rx,colorspace_fragment:sx,colorspace_pars_fragment:ox,envmap_fragment:ax,envmap_common_pars_fragment:lx,envmap_pars_fragment:cx,envmap_pars_vertex:ux,envmap_physical_pars_fragment:Ex,envmap_vertex:hx,fog_vertex:dx,fog_pars_vertex:fx,fog_fragment:px,fog_pars_fragment:mx,gradientmap_pars_fragment:gx,lightmap_fragment:_x,lightmap_pars_fragment:vx,lights_lambert_fragment:xx,lights_lambert_pars_fragment:yx,lights_pars_begin:Mx,lights_toon_fragment:Tx,lights_toon_pars_fragment:Sx,lights_phong_fragment:Ax,lights_phong_pars_fragment:wx,lights_physical_fragment:bx,lights_physical_pars_fragment:Rx,lights_fragment_begin:Lx,lights_fragment_maps:Px,lights_fragment_end:Cx,logdepthbuf_fragment:Ix,logdepthbuf_pars_fragment:Dx,logdepthbuf_pars_vertex:Ux,logdepthbuf_vertex:Nx,map_fragment:Ox,map_pars_fragment:Fx,map_particle_fragment:Bx,map_particle_pars_fragment:Hx,metalnessmap_fragment:kx,metalnessmap_pars_fragment:zx,morphcolor_vertex:Vx,morphnormal_vertex:Gx,morphtarget_pars_vertex:Wx,morphtarget_vertex:Xx,normal_fragment_begin:jx,normal_fragment_maps:qx,normal_pars_fragment:Yx,normal_pars_vertex:Kx,normal_vertex:$x,normalmap_pars_fragment:Zx,clearcoat_normal_fragment_begin:Qx,clearcoat_normal_fragment_maps:Jx,clearcoat_pars_fragment:ey,iridescence_pars_fragment:ty,opaque_fragment:ny,packing:iy,premultiplied_alpha_fragment:ry,project_vertex:sy,dithering_fragment:oy,dithering_pars_fragment:ay,roughnessmap_fragment:ly,roughnessmap_pars_fragment:cy,shadowmap_pars_fragment:uy,shadowmap_pars_vertex:hy,shadowmap_vertex:dy,shadowmask_pars_fragment:fy,skinbase_vertex:py,skinning_pars_vertex:my,skinning_vertex:gy,skinnormal_vertex:_y,specularmap_fragment:vy,specularmap_pars_fragment:xy,tonemapping_fragment:yy,tonemapping_pars_fragment:My,transmission_fragment:Ey,transmission_pars_fragment:Ty,uv_pars_fragment:Sy,uv_pars_vertex:Ay,uv_vertex:wy,worldpos_vertex:by,background_vert:Ry,background_frag:Ly,backgroundCube_vert:Py,backgroundCube_frag:Cy,cube_vert:Iy,cube_frag:Dy,depth_vert:Uy,depth_frag:Ny,distanceRGBA_vert:Oy,distanceRGBA_frag:Fy,equirect_vert:By,equirect_frag:Hy,linedashed_vert:ky,linedashed_frag:zy,meshbasic_vert:Vy,meshbasic_frag:Gy,meshlambert_vert:Wy,meshlambert_frag:Xy,meshmatcap_vert:jy,meshmatcap_frag:qy,meshnormal_vert:Yy,meshnormal_frag:Ky,meshphong_vert:$y,meshphong_frag:Zy,meshphysical_vert:Qy,meshphysical_frag:Jy,meshtoon_vert:eM,meshtoon_frag:tM,points_vert:nM,points_frag:iM,shadow_vert:rM,shadow_frag:sM,sprite_vert:oM,sprite_frag:aM},le={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Mi={basic:{uniforms:pn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:pn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Me(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:pn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:pn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:pn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Me(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:pn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:pn([le.points,le.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:pn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:pn([le.common,le.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:pn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:pn([le.sprite,le.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:pn([le.common,le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:pn([le.lights,le.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Mi.physical={uniforms:pn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const La={r:0,b:0,g:0};function lM(n,e,t,i,r,s,o){const a=new Me(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(m,p){let E=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),E=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===wl)?(u===void 0&&(u=new Tn(new Qo(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:Vs(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=ot.getTransfer(v.colorSpace)!==gt,(h!==v||d!==v.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Tn(new qu(2,2),new gr({name:"BackgroundMaterial",uniforms:Vs(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ot.getTransfer(v.colorSpace)!==gt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(La,zm(n)),i.buffers.color.setClear(La.r,La.g,La.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function cM(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(I,V,Y,j,ie){let $=!1;if(o){const K=_(j,Y,V);c!==K&&(c=K,f(c.object)),$=p(I,j,Y,ie),$&&E(I,j,Y,ie)}else{const K=V.wireframe===!0;(c.geometry!==j.id||c.program!==Y.id||c.wireframe!==K)&&(c.geometry=j.id,c.program=Y.id,c.wireframe=K,$=!0)}ie!==null&&t.update(ie,n.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,F(I,V,Y,j),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function f(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,V,Y){const j=Y.wireframe===!0;let ie=a[I.id];ie===void 0&&(ie={},a[I.id]=ie);let $=ie[V.id];$===void 0&&($={},ie[V.id]=$);let K=$[j];return K===void 0&&(K=m(d()),$[j]=K),K}function m(I){const V=[],Y=[],j=[];for(let ie=0;ie<r;ie++)V[ie]=0,Y[ie]=0,j[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:j,object:I,attributes:{},index:null}}function p(I,V,Y,j){const ie=c.attributes,$=V.attributes;let K=0;const oe=Y.getAttributes();for(const ce in oe)if(oe[ce].location>=0){const Z=ie[ce];let de=$[ce];if(de===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(de=I.instanceColor)),Z===void 0||Z.attribute!==de||de&&Z.data!==de.data)return!0;K++}return c.attributesNum!==K||c.index!==j}function E(I,V,Y,j){const ie={},$=V.attributes;let K=0;const oe=Y.getAttributes();for(const ce in oe)if(oe[ce].location>=0){let Z=$[ce];Z===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));const de={};de.attribute=Z,Z&&Z.data&&(de.data=Z.data),ie[ce]=de,K++}c.attributes=ie,c.attributesNum=K,c.index=j}function v(){const I=c.newAttributes;for(let V=0,Y=I.length;V<Y;V++)I[V]=0}function M(I){T(I,0)}function T(I,V){const Y=c.newAttributes,j=c.enabledAttributes,ie=c.attributeDivisors;Y[I]=1,j[I]===0&&(n.enableVertexAttribArray(I),j[I]=1),ie[I]!==V&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,V),ie[I]=V)}function R(){const I=c.newAttributes,V=c.enabledAttributes;for(let Y=0,j=V.length;Y<j;Y++)V[Y]!==I[Y]&&(n.disableVertexAttribArray(Y),V[Y]=0)}function A(I,V,Y,j,ie,$,K){K===!0?n.vertexAttribIPointer(I,V,Y,ie,$):n.vertexAttribPointer(I,V,Y,j,ie,$)}function F(I,V,Y,j){if(i.isWebGL2===!1&&(I.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const ie=j.attributes,$=Y.getAttributes(),K=V.defaultAttributeValues;for(const oe in $){const ce=$[oe];if(ce.location>=0){let W=ie[oe];if(W===void 0&&(oe==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),oe==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){const Z=W.normalized,de=W.itemSize,ge=t.get(W);if(ge===void 0)continue;const ve=ge.buffer,Ue=ge.type,Pe=ge.bytesPerElement,we=i.isWebGL2===!0&&(Ue===n.INT||Ue===n.UNSIGNED_INT||W.gpuType===Em);if(W.isInterleavedBufferAttribute){const Ve=W.data,N=Ve.stride,zt=W.offset;if(Ve.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ce.locationSize;Ee++)T(ce.location+Ee,Ve.meshPerAttribute);I.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let Ee=0;Ee<ce.locationSize;Ee++)M(ce.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Ee=0;Ee<ce.locationSize;Ee++)A(ce.location+Ee,de/ce.locationSize,Ue,Z,N*Pe,(zt+de/ce.locationSize*Ee)*Pe,we)}else{if(W.isInstancedBufferAttribute){for(let Ve=0;Ve<ce.locationSize;Ve++)T(ce.location+Ve,W.meshPerAttribute);I.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ve=0;Ve<ce.locationSize;Ve++)M(ce.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Ve=0;Ve<ce.locationSize;Ve++)A(ce.location+Ve,de/ce.locationSize,Ue,Z,de*Pe,de/ce.locationSize*Ve*Pe,we)}}else if(K!==void 0){const Z=K[oe];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(ce.location,Z);break;case 3:n.vertexAttrib3fv(ce.location,Z);break;case 4:n.vertexAttrib4fv(ce.location,Z);break;default:n.vertexAttrib1fv(ce.location,Z)}}}}R()}function x(){G();for(const I in a){const V=a[I];for(const Y in V){const j=V[Y];for(const ie in j)g(j[ie].object),delete j[ie];delete V[Y]}delete a[I]}}function b(I){if(a[I.id]===void 0)return;const V=a[I.id];for(const Y in V){const j=V[Y];for(const ie in j)g(j[ie].object),delete j[ie];delete V[Y]}delete a[I.id]}function z(I){for(const V in a){const Y=a[V];if(Y[I.id]===void 0)continue;const j=Y[I.id];for(const ie in j)g(j[ie].object),delete j[ie];delete Y[I.id]}}function G(){Q(),u=!0,c!==l&&(c=l,f(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:Q,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:M,disableUnusedAttributes:R}}function uM(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){n.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let f,g;if(r)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function hM(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,M=o||e.has("OES_texture_float"),T=v&&M,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:T,maxSamples:R}}function dM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ar,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,v=E*4;let M=p.clippingState||null;l.value=M,M=u(g,d,v,f);for(let T=0;T!==v;++T)M[T]=t[T];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=f;v!==_;++v,M+=4)o.copy(h[v]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function fM(n){let e=new WeakMap;function t(o,a){return a===ou?o.mapping=Os:a===au&&(o.mapping=Fs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ou||a===au)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new A1(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Yu extends Gm{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ls=4,Yd=[.125,.215,.35,.446,.526,.582],Br=20,bc=new Yu,Kd=new Me;let Rc=null,Lc=0,Pc=0;const Or=(1+Math.sqrt(5))/2,xs=1/Or,$d=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Or,xs),new L(0,Or,-xs),new L(xs,0,Or),new L(-xs,0,Or),new L(Or,xs,0),new L(-Or,xs,0)];class Zd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Rc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rc,Lc,Pc),e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:Oo,format:qn,colorSpace:ln,depthBuffer:!1},r=Qd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pM(s)),this._blurMaterial=mM(s,e,t)}return r}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,bc)}_sceneToCubeUV(e,t,i,r){const a=new mn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Kd),u.toneMapping=dr,u.autoClear=!1;const f=new ji({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new Tn(new Qo,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Kd),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Pa(r,E*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Os||e.mapping===Fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Pa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,bc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$d[(r-1)%$d.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Tn(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Br-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Br;m>Br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Br}`);const p=[];let E=0;for(let A=0;A<Br;++A){const F=A/_,x=Math.exp(-F*F/2);p.push(x),A===0?E+=x:A<m&&(E+=2*x)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const M=this._sizeLods[r],T=3*M*(r>v-Ls?r-v+Ls:0),R=4*(this._cubeSize-M);Pa(t,T,R,3*M,2*M),l.setRenderTarget(t),l.render(h,bc)}}function pM(n){const e=[],t=[],i=[];let r=n;const s=n-Ls+1+Yd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ls?l=Yd[o-n+Ls-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),v=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,F=R>2?0:-1,x=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];E.set(x,_*g*R),v.set(d,m*g*R);const b=[R,R,R,R,R,R];M.set(b,p*g*R)}const T=new en;T.setAttribute("position",new mt(E,_)),T.setAttribute("uv",new mt(v,m)),T.setAttribute("faceIndex",new mt(M,p)),e.push(T),r>Ls&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qd(n,e,t){const i=new Yr(n,e,t);return i.texture.mapping=wl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function mM(n,e,t){const i=new Float32Array(Br),r=new L(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Jd(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function ef(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Ku(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ou||l===au,u=l===Os||l===Fs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Zd(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Zd(n));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function _M(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vM(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let v=0,M=E.length;v<M;v+=3){const T=E[v+0],R=E[v+1],A=E[v+2];d.push(T,R,R,A,A,T)}}else if(g!==void 0){const E=g.array;_=g.version;for(let v=0,M=E.length/3-1;v<M;v+=3){const T=v+0,R=v+1,A=v+2;d.push(T,R,R,A,A,T)}}else return;const m=new(Im(d)?km:Hm)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function xM(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,g){n.drawElements(s,g,a,f*l),t.update(g,s,1)}function h(f,g,_){if(_===0)return;let m,p;if(r)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,f*l,_),t.update(g,s,_)}function d(f,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,f,0,_);let p=0;for(let E=0;E<_;E++)p+=g[E];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function yM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function MM(n,e){return n[0]-e[0]}function EM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function TM(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new dt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let V=function(){Q.dispose(),s.delete(u),u.removeEventListener("dispose",V)};var f=V;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let x=0;v===!0&&(x=1),M===!0&&(x=2),T===!0&&(x=3);let b=u.attributes.position.count*x,z=1;b>e.maxTextureSize&&(z=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const G=new Float32Array(b*z*4*_),Q=new Nm(G,b,z,_);Q.type=Wi,Q.needsUpdate=!0;const I=x*4;for(let Y=0;Y<_;Y++){const j=R[Y],ie=A[Y],$=F[Y],K=b*z*4*Y;for(let oe=0;oe<j.count;oe++){const ce=oe*I;v===!0&&(o.fromBufferAttribute(j,oe),G[K+ce+0]=o.x,G[K+ce+1]=o.y,G[K+ce+2]=o.z,G[K+ce+3]=0),M===!0&&(o.fromBufferAttribute(ie,oe),G[K+ce+4]=o.x,G[K+ce+5]=o.y,G[K+ce+6]=o.z,G[K+ce+7]=0),T===!0&&(o.fromBufferAttribute($,oe),G[K+ce+8]=o.x,G[K+ce+9]=o.y,G[K+ce+10]=o.z,G[K+ce+11]=$.itemSize===4?o.w:1)}}m={count:_,texture:Q,size:new Le(b,z)},s.set(u,m),u.addEventListener("dispose",V)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];const E=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];i[u.id]=_}for(let M=0;M<g;M++){const T=_[M];T[0]=M,T[1]=d[M]}_.sort(EM);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(MM);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let E=0;for(let M=0;M<8;M++){const T=a[M],R=T[0],A=T[1];R!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+M)!==m[R]&&u.setAttribute("morphTarget"+M,m[R]),p&&u.getAttribute("morphNormal"+M)!==p[R]&&u.setAttribute("morphNormal"+M,p[R]),r[M]=A,E+=A):(m&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),p&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const v=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function SM(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class jm extends an{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Gr,u!==Gr&&u!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Gr&&(i=ur),i===void 0&&u===Hs&&(i=Vr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const qm=new an,Ym=new jm(1,1);Ym.compareFunction=Cm;const Km=new Nm,$m=new c1,Zm=new Wm,tf=[],nf=[],rf=new Float32Array(16),sf=new Float32Array(9),of=new Float32Array(4);function Qs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=tf[r];if(s===void 0&&(s=new Float32Array(r),tf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rl(n,e){let t=nf[e];t===void 0&&(t=new Int32Array(e),nf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function AM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function RM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function LM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,i))return;of.set(i),n.uniformMatrix2fv(this.addr,!1,of),jt(t,i)}}function PM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,i))return;sf.set(i),n.uniformMatrix3fv(this.addr,!1,sf),jt(t,i)}}function CM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,i))return;rf.set(i),n.uniformMatrix4fv(this.addr,!1,rf),jt(t,i)}}function IM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function DM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),jt(t,e)}}function UM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),jt(t,e)}}function NM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),jt(t,e)}}function OM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function FM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),jt(t,e)}}function BM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),jt(t,e)}}function HM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),jt(t,e)}}function kM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Ym:qm;t.setTexture2D(e||s,r)}function zM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||$m,r)}function VM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Zm,r)}function GM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Km,r)}function WM(n){switch(n){case 5126:return AM;case 35664:return wM;case 35665:return bM;case 35666:return RM;case 35674:return LM;case 35675:return PM;case 35676:return CM;case 5124:case 35670:return IM;case 35667:case 35671:return DM;case 35668:case 35672:return UM;case 35669:case 35673:return NM;case 5125:return OM;case 36294:return FM;case 36295:return BM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return GM}}function XM(n,e){n.uniform1fv(this.addr,e)}function jM(n,e){const t=Qs(e,this.size,2);n.uniform2fv(this.addr,t)}function qM(n,e){const t=Qs(e,this.size,3);n.uniform3fv(this.addr,t)}function YM(n,e){const t=Qs(e,this.size,4);n.uniform4fv(this.addr,t)}function KM(n,e){const t=Qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $M(n,e){const t=Qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ZM(n,e){const t=Qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function QM(n,e){n.uniform1iv(this.addr,e)}function JM(n,e){n.uniform2iv(this.addr,e)}function e2(n,e){n.uniform3iv(this.addr,e)}function t2(n,e){n.uniform4iv(this.addr,e)}function n2(n,e){n.uniform1uiv(this.addr,e)}function i2(n,e){n.uniform2uiv(this.addr,e)}function r2(n,e){n.uniform3uiv(this.addr,e)}function s2(n,e){n.uniform4uiv(this.addr,e)}function o2(n,e,t){const i=this.cache,r=e.length,s=Rl(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||qm,s[o])}function a2(n,e,t){const i=this.cache,r=e.length,s=Rl(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||$m,s[o])}function l2(n,e,t){const i=this.cache,r=e.length,s=Rl(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Zm,s[o])}function c2(n,e,t){const i=this.cache,r=e.length,s=Rl(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Km,s[o])}function u2(n){switch(n){case 5126:return XM;case 35664:return jM;case 35665:return qM;case 35666:return YM;case 35674:return KM;case 35675:return $M;case 35676:return ZM;case 5124:case 35670:return QM;case 35667:case 35671:return JM;case 35668:case 35672:return e2;case 35669:case 35673:return t2;case 5125:return n2;case 36294:return i2;case 36295:return r2;case 36296:return s2;case 35678:case 36198:case 36298:case 36306:case 35682:return o2;case 35679:case 36299:case 36307:return a2;case 35680:case 36300:case 36308:case 36293:return l2;case 36289:case 36303:case 36311:case 36292:return c2}}class h2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=WM(t.type)}}class d2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u2(t.type)}}class f2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Cc=/(\w+)(\])?(\[|\.)?/g;function af(n,e){n.seq.push(e),n.map[e.id]=e}function p2(n,e,t){const i=n.name,r=i.length;for(Cc.lastIndex=0;;){const s=Cc.exec(i),o=Cc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){af(t,c===void 0?new h2(a,n,e):new d2(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new f2(a),af(t,h)),t=h}}}class Ya{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);p2(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function lf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const m2=37297;let g2=0;function _2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function v2(n){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(n);let i;switch(e===t?i="":e===ul&&t===cl?i="LinearDisplayP3ToLinearSRGB":e===cl&&t===ul&&(i="LinearSRGBToLinearDisplayP3"),n){case ln:case bl:return[i,"LinearTransferOETF"];case Dt:case Wu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function cf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+_2(n.getShaderSource(e),o)}else return r}function x2(n,e){const t=v2(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function y2(n,e){let t;switch(e){case _v:t="Linear";break;case vv:t="Reinhard";break;case xv:t="OptimizedCineon";break;case yv:t="ACESFilmic";break;case Mv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function M2(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(So).join(`
`)}function E2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function T2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function So(n){return n!==""}function uf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S2=/^[ \t]*#include +<([\w\d./]+)>/gm;function fu(n){return n.replace(S2,w2)}const A2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function w2(n,e){let t=$e[e];if(t===void 0){const i=A2.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fu(t)}const b2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(n){return n.replace(b2,R2)}function R2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ff(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function L2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===X_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function P2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Os:case Fs:e="ENVMAP_TYPE_CUBE";break;case wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function I2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xm:e="ENVMAP_BLENDING_MULTIPLY";break;case mv:e="ENVMAP_BLENDING_MIX";break;case gv:e="ENVMAP_BLENDING_ADD";break}return e}function D2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function U2(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=L2(t),c=P2(t),u=C2(t),h=I2(t),d=D2(t),f=t.isWebGL2?"":M2(t),g=E2(s),_=r.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(So).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(So).join(`
`),p.length>0&&(p+=`
`)):(m=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),p=[f,ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dr?"#define TONE_MAPPING":"",t.toneMapping!==dr?$e.tonemapping_pars_fragment:"",t.toneMapping!==dr?y2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,x2("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(So).join(`
`)),o=fu(o),o=uf(o,t),o=hf(o,t),a=fu(a),a=uf(a,t),a=hf(a,t),o=df(o),a=df(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=E+m+o,M=E+p+a,T=lf(r,r.VERTEX_SHADER,v),R=lf(r,r.FRAGMENT_SHADER,M);r.attachShader(_,T),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(z){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(_).trim(),Q=r.getShaderInfoLog(T).trim(),I=r.getShaderInfoLog(R).trim();let V=!0,Y=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,T,R);else{const j=cf(r,T,"vertex"),ie=cf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+G+`
`+j+`
`+ie)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(Q===""||I==="")&&(Y=!1);Y&&(z.diagnostics={runnable:V,programLog:G,vertexShader:{log:Q,prefix:m},fragmentShader:{log:I,prefix:p}})}r.deleteShader(T),r.deleteShader(R),F=new Ya(r,_),x=T2(r,_)}let F;this.getUniforms=function(){return F===void 0&&A(this),F};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,m2)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=R,this}let N2=0;class O2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new F2(e),t.set(e,i)),i}}class F2{constructor(e){this.id=N2++,this.code=e,this.usedTimes=0}}function B2(n,e,t,i,r,s,o){const a=new Fm,l=new O2,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,b,z,G,Q){const I=G.fog,V=Q.geometry,Y=x.isMeshStandardMaterial?G.environment:null,j=(x.isMeshStandardMaterial?t:e).get(x.envMap||Y),ie=j&&j.mapping===wl?j.image.height:null,$=g[x.type];x.precision!==null&&(f=r.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const K=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,oe=K!==void 0?K.length:0;let ce=0;V.morphAttributes.position!==void 0&&(ce=1),V.morphAttributes.normal!==void 0&&(ce=2),V.morphAttributes.color!==void 0&&(ce=3);let W,Z,de,ge;if($){const tn=Mi[$];W=tn.vertexShader,Z=tn.fragmentShader}else W=x.vertexShader,Z=x.fragmentShader,l.update(x),de=l.getVertexShaderID(x),ge=l.getFragmentShaderID(x);const ve=n.getRenderTarget(),Ue=Q.isInstancedMesh===!0,Pe=Q.isBatchedMesh===!0,we=!!x.map,Ve=!!x.matcap,N=!!j,zt=!!x.aoMap,Ee=!!x.lightMap,Ge=!!x.bumpMap,Ce=!!x.normalMap,ht=!!x.displacementMap,We=!!x.emissiveMap,Ne=!!x.metalnessMap,Xe=!!x.roughnessMap,Ot=x.anisotropy>0,Pt=x.clearcoat>0,w=x.iridescence>0,y=x.sheen>0,O=x.transmission>0,re=Ot&&!!x.anisotropyMap,ee=Pt&&!!x.clearcoatMap,ne=Pt&&!!x.clearcoatNormalMap,_e=Pt&&!!x.clearcoatRoughnessMap,ae=w&&!!x.iridescenceMap,he=w&&!!x.iridescenceThicknessMap,P=y&&!!x.sheenColorMap,te=y&&!!x.sheenRoughnessMap,q=!!x.specularMap,be=!!x.specularColorMap,xe=!!x.specularIntensityMap,Te=O&&!!x.transmissionMap,me=O&&!!x.thicknessMap,pe=!!x.gradientMap,Ke=!!x.alphaMap,C=x.alphaTest>0,ue=!!x.alphaHash,J=!!x.extensions,X=!!V.attributes.uv1,se=!!V.attributes.uv2,Se=!!V.attributes.uv3;let je=dr;return x.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(je=n.toneMapping),{isWebGL2:u,shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:Z,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:ge,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Pe,instancing:Ue,instancingColor:Ue&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ln,map:we,matcap:Ve,envMap:N,envMapMode:N&&j.mapping,envMapCubeUVHeight:ie,aoMap:zt,lightMap:Ee,bumpMap:Ge,normalMap:Ce,displacementMap:d&&ht,emissiveMap:We,normalMapObjectSpace:Ce&&x.normalMapType===Nv,normalMapTangentSpace:Ce&&x.normalMapType===Gu,metalnessMap:Ne,roughnessMap:Xe,anisotropy:Ot,anisotropyMap:re,clearcoat:Pt,clearcoatMap:ee,clearcoatNormalMap:ne,clearcoatRoughnessMap:_e,iridescence:w,iridescenceMap:ae,iridescenceThicknessMap:he,sheen:y,sheenColorMap:P,sheenRoughnessMap:te,specularMap:q,specularColorMap:be,specularIntensityMap:xe,transmission:O,transmissionMap:Te,thicknessMap:me,gradientMap:pe,opaque:x.transparent===!1&&x.blending===Is,alphaMap:Ke,alphaTest:C,alphaHash:ue,combine:x.combine,mapUv:we&&_(x.map.channel),aoMapUv:zt&&_(x.aoMap.channel),lightMapUv:Ee&&_(x.lightMap.channel),bumpMapUv:Ge&&_(x.bumpMap.channel),normalMapUv:Ce&&_(x.normalMap.channel),displacementMapUv:ht&&_(x.displacementMap.channel),emissiveMapUv:We&&_(x.emissiveMap.channel),metalnessMapUv:Ne&&_(x.metalnessMap.channel),roughnessMapUv:Xe&&_(x.roughnessMap.channel),anisotropyMapUv:re&&_(x.anisotropyMap.channel),clearcoatMapUv:ee&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:P&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:te&&_(x.sheenRoughnessMap.channel),specularMapUv:q&&_(x.specularMap.channel),specularColorMapUv:be&&_(x.specularColorMap.channel),specularIntensityMapUv:xe&&_(x.specularIntensityMap.channel),transmissionMapUv:Te&&_(x.transmissionMap.channel),thicknessMapUv:me&&_(x.thicknessMap.channel),alphaMapUv:Ke&&_(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ce||Ot),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:X,vertexUv2s:se,vertexUv3s:Se,pointsUvs:Q.isPoints===!0&&!!V.attributes.uv&&(we||Ke),fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:je,useLegacyLights:n._useLegacyLights,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Xn,flipSided:x.side===gn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:J&&x.extensions.derivatives===!0,extensionFragDepth:J&&x.extensions.fragDepth===!0,extensionDrawBuffers:J&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:J&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)b.push(z),b.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(E(b,x),v(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function E(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function v(x,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function M(x){const b=g[x.type];let z;if(b){const G=Mi[b];z=Vm.clone(G.uniforms)}else z=x.uniforms;return z}function T(x,b){let z;for(let G=0,Q=c.length;G<Q;G++){const I=c[G];if(I.cacheKey===b){z=I,++z.usedTimes;break}}return z===void 0&&(z=new U2(n,b,x,s),c.push(z)),z}function R(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:T,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:F}}function H2(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function k2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||k2),i.length>1&&i.sort(d||pf),r.length>1&&r.sort(d||pf)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function z2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new mf,n.set(i,[o])):r>=s.length?(o=new mf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function V2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Me};break;case"SpotLight":t={position:new L,direction:new L,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function G2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let W2=0;function X2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function j2(n,e){const t=new V2,i=G2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new L);const s=new L,o=new ze,a=new ze;function l(u,h){let d=0,f=0,g=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let _=0,m=0,p=0,E=0,v=0,M=0,T=0,R=0,A=0,F=0,x=0;u.sort(X2);const b=h===!0?Math.PI:1;for(let G=0,Q=u.length;G<Q;G++){const I=u[G],V=I.color,Y=I.intensity,j=I.distance,ie=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=V.r*Y*b,f+=V.g*Y*b,g+=V.b*Y*b;else if(I.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(I.sh.coefficients[$],Y);x++}else if(I.isDirectionalLight){const $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity*b),I.castShadow){const K=I.shadow,oe=i.get(I);oe.shadowBias=K.bias,oe.shadowNormalBias=K.normalBias,oe.shadowRadius=K.radius,oe.shadowMapSize=K.mapSize,r.directionalShadow[_]=oe,r.directionalShadowMap[_]=ie,r.directionalShadowMatrix[_]=I.shadow.matrix,M++}r.directional[_]=$,_++}else if(I.isSpotLight){const $=t.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(V).multiplyScalar(Y*b),$.distance=j,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,r.spot[p]=$;const K=I.shadow;if(I.map&&(r.spotLightMap[A]=I.map,A++,K.updateMatrices(I),I.castShadow&&F++),r.spotLightMatrix[p]=K.matrix,I.castShadow){const oe=i.get(I);oe.shadowBias=K.bias,oe.shadowNormalBias=K.normalBias,oe.shadowRadius=K.radius,oe.shadowMapSize=K.mapSize,r.spotShadow[p]=oe,r.spotShadowMap[p]=ie,R++}p++}else if(I.isRectAreaLight){const $=t.get(I);$.color.copy(V).multiplyScalar(Y),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),r.rectArea[E]=$,E++}else if(I.isPointLight){const $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity*b),$.distance=I.distance,$.decay=I.decay,I.castShadow){const K=I.shadow,oe=i.get(I);oe.shadowBias=K.bias,oe.shadowNormalBias=K.normalBias,oe.shadowRadius=K.radius,oe.shadowMapSize=K.mapSize,oe.shadowCameraNear=K.camera.near,oe.shadowCameraFar=K.camera.far,r.pointShadow[m]=oe,r.pointShadowMap[m]=ie,r.pointShadowMatrix[m]=I.shadow.matrix,T++}r.point[m]=$,m++}else if(I.isHemisphereLight){const $=t.get(I);$.skyColor.copy(I.color).multiplyScalar(Y*b),$.groundColor.copy(I.groundColor).multiplyScalar(Y*b),r.hemi[v]=$,v++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=g;const z=r.hash;(z.directionalLength!==_||z.pointLength!==m||z.spotLength!==p||z.rectAreaLength!==E||z.hemiLength!==v||z.numDirectionalShadows!==M||z.numPointShadows!==T||z.numSpotShadows!==R||z.numSpotMaps!==A||z.numLightProbes!==x)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=E,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=R+A-F,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=x,z.directionalLength=_,z.pointLength=m,z.spotLength=p,z.rectAreaLength=E,z.hemiLength=v,z.numDirectionalShadows=M,z.numPointShadows=T,z.numSpotShadows=R,z.numSpotMaps=A,z.numLightProbes=x,r.version=W2++)}function c(u,h){let d=0,f=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let E=0,v=u.length;E<v;E++){const M=u[E];if(M.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),d++}else if(M.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const T=r.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function gf(n,e){const t=new j2(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function q2(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new gf(n,e),t.set(s,[l])):o>=a.length?(l=new gf(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Y2 extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class K2 extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Q2(n,e,t){let i=new ju;const r=new Le,s=new Le,o=new dt,a=new Y2({depthPacking:Uv}),l=new K2,c={},u=t.maxTextureSize,h={[Yi]:gn,[gn]:Yi,[Xn]:Xn},d=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:$2,fragmentShader:Z2}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new en;g.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vm;let p=this.type;this.render=function(T,R,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const F=n.getRenderTarget(),x=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),z=n.state;z.setBlending(hr),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=p!==Vi&&this.type===Vi,Q=p===Vi&&this.type!==Vi;for(let I=0,V=T.length;I<V;I++){const Y=T[I],j=Y.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const ie=j.getFrameExtents();if(r.multiply(ie),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,j.mapSize.y=s.y)),j.map===null||G===!0||Q===!0){const K=this.type!==Vi?{minFilter:Jt,magFilter:Jt}:{};j.map!==null&&j.map.dispose(),j.map=new Yr(r.x,r.y,K),j.map.texture.name=Y.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const $=j.getViewportCount();for(let K=0;K<$;K++){const oe=j.getViewport(K);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),z.viewport(o),j.updateMatrices(Y,K),i=j.getFrustum(),M(R,A,j.camera,Y,this.type)}j.isPointLightShadow!==!0&&this.type===Vi&&E(j,A),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(F,x,b)};function E(T,R){const A=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Yr(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,A,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,A,f,_,null)}function v(T,R,A,F){let x=null;const b=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)x=b;else if(x=A.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=x.uuid,G=R.uuid;let Q=c[z];Q===void 0&&(Q={},c[z]=Q);let I=Q[G];I===void 0&&(I=x.clone(),Q[G]=I),x=I}if(x.visible=R.visible,x.wireframe=R.wireframe,F===Vi?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:h[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=n.properties.get(x);z.light=A}return x}function M(T,R,A,F,x){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Vi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const G=e.update(T),Q=T.material;if(Array.isArray(Q)){const I=G.groups;for(let V=0,Y=I.length;V<Y;V++){const j=I[V],ie=Q[j.materialIndex];if(ie&&ie.visible){const $=v(T,ie,F,x);T.onBeforeShadow(n,T,R,A,G,$,j),n.renderBufferDirect(A,null,G,$,T,j),T.onAfterShadow(n,T,R,A,G,$,j)}}}else if(Q.visible){const I=v(T,Q,F,x);T.onBeforeShadow(n,T,R,A,G,I,null),n.renderBufferDirect(A,null,G,I,T,null),T.onAfterShadow(n,T,R,A,G,I,null)}}const z=T.children;for(let G=0,Q=z.length;G<Q;G++)M(z[G],R,A,F,x)}}function J2(n,e,t){const i=t.isWebGL2;function r(){let C=!1;const ue=new dt;let J=null;const X=new dt(0,0,0,0);return{setMask:function(se){J!==se&&!C&&(n.colorMask(se,se,se,se),J=se)},setLocked:function(se){C=se},setClear:function(se,Se,je,Ft,tn){tn===!0&&(se*=Ft,Se*=Ft,je*=Ft),ue.set(se,Se,je,Ft),X.equals(ue)===!1&&(n.clearColor(se,Se,je,Ft),X.copy(ue))},reset:function(){C=!1,J=null,X.set(-1,0,0,0)}}}function s(){let C=!1,ue=null,J=null,X=null;return{setTest:function(se){se?Pe(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(se){ue!==se&&!C&&(n.depthMask(se),ue=se)},setFunc:function(se){if(J!==se){switch(se){case lv:n.depthFunc(n.NEVER);break;case cv:n.depthFunc(n.ALWAYS);break;case uv:n.depthFunc(n.LESS);break;case ol:n.depthFunc(n.LEQUAL);break;case hv:n.depthFunc(n.EQUAL);break;case dv:n.depthFunc(n.GEQUAL);break;case fv:n.depthFunc(n.GREATER);break;case pv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=se}},setLocked:function(se){C=se},setClear:function(se){X!==se&&(n.clearDepth(se),X=se)},reset:function(){C=!1,ue=null,J=null,X=null}}}function o(){let C=!1,ue=null,J=null,X=null,se=null,Se=null,je=null,Ft=null,tn=null;return{setTest:function(ct){C||(ct?Pe(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(ct){ue!==ct&&!C&&(n.stencilMask(ct),ue=ct)},setFunc:function(ct,cn,On){(J!==ct||X!==cn||se!==On)&&(n.stencilFunc(ct,cn,On),J=ct,X=cn,se=On)},setOp:function(ct,cn,On){(Se!==ct||je!==cn||Ft!==On)&&(n.stencilOp(ct,cn,On),Se=ct,je=cn,Ft=On)},setLocked:function(ct){C=ct},setClear:function(ct){tn!==ct&&(n.clearStencil(ct),tn=ct)},reset:function(){C=!1,ue=null,J=null,X=null,se=null,Se=null,je=null,Ft=null,tn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,_=[],m=null,p=!1,E=null,v=null,M=null,T=null,R=null,A=null,F=null,x=new Me(0,0,0),b=0,z=!1,G=null,Q=null,I=null,V=null,Y=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,$=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(K)[1]),ie=$>=1):K.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),ie=$>=2);let oe=null,ce={};const W=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),de=new dt().fromArray(W),ge=new dt().fromArray(Z);function ve(C,ue,J,X){const se=new Uint8Array(4),Se=n.createTexture();n.bindTexture(C,Se),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<J;je++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(ue,0,n.RGBA,1,1,X,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(ue+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return Se}const Ue={};Ue[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(n.DEPTH_TEST),l.setFunc(ol),We(!1),Ne(Yh),Pe(n.CULL_FACE),Ce(hr);function Pe(C){d[C]!==!0&&(n.enable(C),d[C]=!0)}function we(C){d[C]!==!1&&(n.disable(C),d[C]=!1)}function Ve(C,ue){return f[C]!==ue?(n.bindFramebuffer(C,ue),f[C]=ue,i&&(C===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ue),C===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ue)),!0):!1}function N(C,ue){let J=_,X=!1;if(C)if(J=g.get(ue),J===void 0&&(J=[],g.set(ue,J)),C.isWebGLMultipleRenderTargets){const se=C.texture;if(J.length!==se.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,je=se.length;Se<je;Se++)J[Se]=n.COLOR_ATTACHMENT0+Se;J.length=se.length,X=!0}}else J[0]!==n.COLOR_ATTACHMENT0&&(J[0]=n.COLOR_ATTACHMENT0,X=!0);else J[0]!==n.BACK&&(J[0]=n.BACK,X=!0);X&&(t.isWebGL2?n.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function zt(C){return m!==C?(n.useProgram(C),m=C,!0):!1}const Ee={[Fr]:n.FUNC_ADD,[q_]:n.FUNC_SUBTRACT,[Y_]:n.FUNC_REVERSE_SUBTRACT};if(i)Ee[Qh]=n.MIN,Ee[Jh]=n.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(Ee[Qh]=C.MIN_EXT,Ee[Jh]=C.MAX_EXT)}const Ge={[K_]:n.ZERO,[$_]:n.ONE,[Z_]:n.SRC_COLOR,[ru]:n.SRC_ALPHA,[iv]:n.SRC_ALPHA_SATURATE,[tv]:n.DST_COLOR,[J_]:n.DST_ALPHA,[Q_]:n.ONE_MINUS_SRC_COLOR,[su]:n.ONE_MINUS_SRC_ALPHA,[nv]:n.ONE_MINUS_DST_COLOR,[ev]:n.ONE_MINUS_DST_ALPHA,[rv]:n.CONSTANT_COLOR,[sv]:n.ONE_MINUS_CONSTANT_COLOR,[ov]:n.CONSTANT_ALPHA,[av]:n.ONE_MINUS_CONSTANT_ALPHA};function Ce(C,ue,J,X,se,Se,je,Ft,tn,ct){if(C===hr){p===!0&&(we(n.BLEND),p=!1);return}if(p===!1&&(Pe(n.BLEND),p=!0),C!==j_){if(C!==E||ct!==z){if((v!==Fr||R!==Fr)&&(n.blendEquation(n.FUNC_ADD),v=Fr,R=Fr),ct)switch(C){case Is:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kh:n.blendFunc(n.ONE,n.ONE);break;case $h:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Is:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $h:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}M=null,T=null,A=null,F=null,x.set(0,0,0),b=0,E=C,z=ct}return}se=se||ue,Se=Se||J,je=je||X,(ue!==v||se!==R)&&(n.blendEquationSeparate(Ee[ue],Ee[se]),v=ue,R=se),(J!==M||X!==T||Se!==A||je!==F)&&(n.blendFuncSeparate(Ge[J],Ge[X],Ge[Se],Ge[je]),M=J,T=X,A=Se,F=je),(Ft.equals(x)===!1||tn!==b)&&(n.blendColor(Ft.r,Ft.g,Ft.b,tn),x.copy(Ft),b=tn),E=C,z=!1}function ht(C,ue){C.side===Xn?we(n.CULL_FACE):Pe(n.CULL_FACE);let J=C.side===gn;ue&&(J=!J),We(J),C.blending===Is&&C.transparent===!1?Ce(hr):Ce(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const X=C.stencilWrite;c.setTest(X),X&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ot(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Pe(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(C){G!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),G=C)}function Ne(C){C!==G_?(Pe(n.CULL_FACE),C!==Q&&(C===Yh?n.cullFace(n.BACK):C===W_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),Q=C}function Xe(C){C!==I&&(ie&&n.lineWidth(C),I=C)}function Ot(C,ue,J){C?(Pe(n.POLYGON_OFFSET_FILL),(V!==ue||Y!==J)&&(n.polygonOffset(ue,J),V=ue,Y=J)):we(n.POLYGON_OFFSET_FILL)}function Pt(C){C?Pe(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function w(C){C===void 0&&(C=n.TEXTURE0+j-1),oe!==C&&(n.activeTexture(C),oe=C)}function y(C,ue,J){J===void 0&&(oe===null?J=n.TEXTURE0+j-1:J=oe);let X=ce[J];X===void 0&&(X={type:void 0,texture:void 0},ce[J]=X),(X.type!==C||X.texture!==ue)&&(oe!==J&&(n.activeTexture(J),oe=J),n.bindTexture(C,ue||Ue[C]),X.type=C,X.texture=ue)}function O(){const C=ce[oe];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function P(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function q(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(C){de.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),de.copy(C))}function Te(C){ge.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),ge.copy(C))}function me(C,ue){let J=h.get(ue);J===void 0&&(J=new WeakMap,h.set(ue,J));let X=J.get(C);X===void 0&&(X=n.getUniformBlockIndex(ue,C.name),J.set(C,X))}function pe(C,ue){const X=h.get(ue).get(C);u.get(ue)!==X&&(n.uniformBlockBinding(ue,X,C.__bindingPointIndex),u.set(ue,X))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},oe=null,ce={},f={},g=new WeakMap,_=[],m=null,p=!1,E=null,v=null,M=null,T=null,R=null,A=null,F=null,x=new Me(0,0,0),b=0,z=!1,G=null,Q=null,I=null,V=null,Y=null,de.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:we,bindFramebuffer:Ve,drawBuffers:N,useProgram:zt,setBlending:Ce,setMaterial:ht,setFlipSided:We,setCullFace:Ne,setLineWidth:Xe,setPolygonOffset:Ot,setScissorTest:Pt,activeTexture:w,bindTexture:y,unbindTexture:O,compressedTexImage2D:re,compressedTexImage3D:ee,texImage2D:q,texImage3D:be,updateUBOMapping:me,uniformBlockBinding:pe,texStorage2D:P,texStorage3D:te,texSubImage2D:ne,texSubImage3D:_e,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:xe,viewport:Te,reset:Ke}}function eE(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(w,y){return p?new OffscreenCanvas(w,y):Bo("canvas")}function v(w,y,O,re){let ee=1;if((w.width>re||w.height>re)&&(ee=re/Math.max(w.width,w.height)),ee<1||y===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ne=y?dl:Math.floor,_e=ne(ee*w.width),ae=ne(ee*w.height);_===void 0&&(_=E(_e,ae));const he=O?E(_e,ae):_;return he.width=_e,he.height=ae,he.getContext("2d").drawImage(w,0,0,_e,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+_e+"x"+ae+")."),he}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function M(w){return du(w.width)&&du(w.height)}function T(w){return a?!1:w.wrapS!==jn||w.wrapT!==jn||w.minFilter!==Jt&&w.minFilter!==En}function R(w,y){return w.generateMipmaps&&y&&w.minFilter!==Jt&&w.minFilter!==En}function A(w){n.generateMipmap(w)}function F(w,y,O,re,ee=!1){if(a===!1)return y;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ne=y;if(y===n.RED&&(O===n.FLOAT&&(ne=n.R32F),O===n.HALF_FLOAT&&(ne=n.R16F),O===n.UNSIGNED_BYTE&&(ne=n.R8)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(ne=n.R8UI),O===n.UNSIGNED_SHORT&&(ne=n.R16UI),O===n.UNSIGNED_INT&&(ne=n.R32UI),O===n.BYTE&&(ne=n.R8I),O===n.SHORT&&(ne=n.R16I),O===n.INT&&(ne=n.R32I)),y===n.RG&&(O===n.FLOAT&&(ne=n.RG32F),O===n.HALF_FLOAT&&(ne=n.RG16F),O===n.UNSIGNED_BYTE&&(ne=n.RG8)),y===n.RGBA){const _e=ee?ll:ot.getTransfer(re);O===n.FLOAT&&(ne=n.RGBA32F),O===n.HALF_FLOAT&&(ne=n.RGBA16F),O===n.UNSIGNED_BYTE&&(ne=_e===gt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(w,y,O){return R(w,O)===!0||w.isFramebufferTexture&&w.minFilter!==Jt&&w.minFilter!==En?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function b(w){return w===Jt||w===lu||w===qa?n.NEAREST:n.LINEAR}function z(w){const y=w.target;y.removeEventListener("dispose",z),Q(y),y.isVideoTexture&&g.delete(y)}function G(w){const y=w.target;y.removeEventListener("dispose",G),V(y)}function Q(w){const y=i.get(w);if(y.__webglInit===void 0)return;const O=w.source,re=m.get(O);if(re){const ee=re[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&I(w),Object.keys(re).length===0&&m.delete(O)}i.remove(w)}function I(w){const y=i.get(w);n.deleteTexture(y.__webglTexture);const O=w.source,re=m.get(O);delete re[y.__cacheKey],o.memory.textures--}function V(w){const y=w.texture,O=i.get(w),re=i.get(y);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(O.__webglFramebuffer[ee]))for(let ne=0;ne<O.__webglFramebuffer[ee].length;ne++)n.deleteFramebuffer(O.__webglFramebuffer[ee][ne]);else n.deleteFramebuffer(O.__webglFramebuffer[ee]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[ee])}else{if(Array.isArray(O.__webglFramebuffer))for(let ee=0;ee<O.__webglFramebuffer.length;ee++)n.deleteFramebuffer(O.__webglFramebuffer[ee]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ee=0;ee<O.__webglColorRenderbuffer.length;ee++)O.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[ee]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ee=0,ne=y.length;ee<ne;ee++){const _e=i.get(y[ee]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(y[ee])}i.remove(y),i.remove(w)}let Y=0;function j(){Y=0}function ie(){const w=Y;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),Y+=1,w}function $(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function K(w,y){const O=i.get(w);if(w.isVideoTexture&&Ot(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const re=w.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(O,w,y);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function oe(w,y){const O=i.get(w);if(w.version>0&&O.__version!==w.version){Pe(O,w,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function ce(w,y){const O=i.get(w);if(w.version>0&&O.__version!==w.version){Pe(O,w,y);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function W(w,y){const O=i.get(w);if(w.version>0&&O.__version!==w.version){we(O,w,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}const Z={[Bs]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[al]:n.MIRRORED_REPEAT},de={[Jt]:n.NEAREST,[lu]:n.NEAREST_MIPMAP_NEAREST,[qa]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[Mm]:n.LINEAR_MIPMAP_NEAREST,[qr]:n.LINEAR_MIPMAP_LINEAR},ge={[Ov]:n.NEVER,[Vv]:n.ALWAYS,[Fv]:n.LESS,[Cm]:n.LEQUAL,[Bv]:n.EQUAL,[zv]:n.GEQUAL,[Hv]:n.GREATER,[kv]:n.NOTEQUAL};function ve(w,y,O){if(O?(n.texParameteri(w,n.TEXTURE_WRAP_S,Z[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Z[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Z[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,de[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,de[y.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==jn||y.wrapT!==jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,b(y.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,b(y.minFilter)),y.minFilter!==Jt&&y.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ge[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Jt||y.minFilter!==qa&&y.minFilter!==qr||y.type===Wi&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Oo&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(w,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function Ue(w,y){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",z));const re=y.source;let ee=m.get(re);ee===void 0&&(ee={},m.set(re,ee));const ne=$(y);if(ne!==w.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ee[ne].usedTimes++;const _e=ee[w.__cacheKey];_e!==void 0&&(ee[w.__cacheKey].usedTimes--,_e.usedTimes===0&&I(y)),w.__cacheKey=ne,w.__webglTexture=ee[ne].texture}return O}function Pe(w,y,O){let re=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(re=n.TEXTURE_3D);const ee=Ue(w,y),ne=y.source;t.bindTexture(re,w.__webglTexture,n.TEXTURE0+O);const _e=i.get(ne);if(ne.version!==_e.__version||ee===!0){t.activeTexture(n.TEXTURE0+O);const ae=ot.getPrimaries(ot.workingColorSpace),he=y.colorSpace===Yn?null:ot.getPrimaries(y.colorSpace),P=y.colorSpace===Yn||ae===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);const te=T(y)&&M(y.image)===!1;let q=v(y.image,te,!1,u);q=Pt(y,q);const be=M(q)||a,xe=s.convert(y.format,y.colorSpace);let Te=s.convert(y.type),me=F(y.internalFormat,xe,Te,y.colorSpace,y.isVideoTexture);ve(re,y,be);let pe;const Ke=y.mipmaps,C=a&&y.isVideoTexture!==!0&&me!==Rm,ue=_e.__version===void 0||ee===!0,J=x(y,q,be);if(y.isDepthTexture)me=n.DEPTH_COMPONENT,a?y.type===Wi?me=n.DEPTH_COMPONENT32F:y.type===ur?me=n.DEPTH_COMPONENT24:y.type===Vr?me=n.DEPTH24_STENCIL8:me=n.DEPTH_COMPONENT16:y.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Gr&&me===n.DEPTH_COMPONENT&&y.type!==Vu&&y.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ur,Te=s.convert(y.type)),y.format===Hs&&me===n.DEPTH_COMPONENT&&(me=n.DEPTH_STENCIL,y.type!==Vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Vr,Te=s.convert(y.type))),ue&&(C?t.texStorage2D(n.TEXTURE_2D,1,me,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,me,q.width,q.height,0,xe,Te,null));else if(y.isDataTexture)if(Ke.length>0&&be){C&&ue&&t.texStorage2D(n.TEXTURE_2D,J,me,Ke[0].width,Ke[0].height);for(let X=0,se=Ke.length;X<se;X++)pe=Ke[X],C?t.texSubImage2D(n.TEXTURE_2D,X,0,0,pe.width,pe.height,xe,Te,pe.data):t.texImage2D(n.TEXTURE_2D,X,me,pe.width,pe.height,0,xe,Te,pe.data);y.generateMipmaps=!1}else C?(ue&&t.texStorage2D(n.TEXTURE_2D,J,me,q.width,q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,q.width,q.height,xe,Te,q.data)):t.texImage2D(n.TEXTURE_2D,0,me,q.width,q.height,0,xe,Te,q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){C&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,me,Ke[0].width,Ke[0].height,q.depth);for(let X=0,se=Ke.length;X<se;X++)pe=Ke[X],y.format!==qn?xe!==null?C?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,pe.width,pe.height,q.depth,xe,pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,me,pe.width,pe.height,q.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,pe.width,pe.height,q.depth,xe,Te,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,me,pe.width,pe.height,q.depth,0,xe,Te,pe.data)}else{C&&ue&&t.texStorage2D(n.TEXTURE_2D,J,me,Ke[0].width,Ke[0].height);for(let X=0,se=Ke.length;X<se;X++)pe=Ke[X],y.format!==qn?xe!==null?C?t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,pe.width,pe.height,xe,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,X,me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?t.texSubImage2D(n.TEXTURE_2D,X,0,0,pe.width,pe.height,xe,Te,pe.data):t.texImage2D(n.TEXTURE_2D,X,me,pe.width,pe.height,0,xe,Te,pe.data)}else if(y.isDataArrayTexture)C?(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,me,q.width,q.height,q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,xe,Te,q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,q.width,q.height,q.depth,0,xe,Te,q.data);else if(y.isData3DTexture)C?(ue&&t.texStorage3D(n.TEXTURE_3D,J,me,q.width,q.height,q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,xe,Te,q.data)):t.texImage3D(n.TEXTURE_3D,0,me,q.width,q.height,q.depth,0,xe,Te,q.data);else if(y.isFramebufferTexture){if(ue)if(C)t.texStorage2D(n.TEXTURE_2D,J,me,q.width,q.height);else{let X=q.width,se=q.height;for(let Se=0;Se<J;Se++)t.texImage2D(n.TEXTURE_2D,Se,me,X,se,0,xe,Te,null),X>>=1,se>>=1}}else if(Ke.length>0&&be){C&&ue&&t.texStorage2D(n.TEXTURE_2D,J,me,Ke[0].width,Ke[0].height);for(let X=0,se=Ke.length;X<se;X++)pe=Ke[X],C?t.texSubImage2D(n.TEXTURE_2D,X,0,0,xe,Te,pe):t.texImage2D(n.TEXTURE_2D,X,me,xe,Te,pe);y.generateMipmaps=!1}else C?(ue&&t.texStorage2D(n.TEXTURE_2D,J,me,q.width,q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Te,q)):t.texImage2D(n.TEXTURE_2D,0,me,xe,Te,q);R(y,be)&&A(re),_e.__version=ne.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function we(w,y,O){if(y.image.length!==6)return;const re=Ue(w,y),ee=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);const ne=i.get(ee);if(ee.version!==ne.__version||re===!0){t.activeTexture(n.TEXTURE0+O);const _e=ot.getPrimaries(ot.workingColorSpace),ae=y.colorSpace===Yn?null:ot.getPrimaries(y.colorSpace),he=y.colorSpace===Yn||_e===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const P=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,q=[];for(let X=0;X<6;X++)!P&&!te?q[X]=v(y.image[X],!1,!0,c):q[X]=te?y.image[X].image:y.image[X],q[X]=Pt(y,q[X]);const be=q[0],xe=M(be)||a,Te=s.convert(y.format,y.colorSpace),me=s.convert(y.type),pe=F(y.internalFormat,Te,me,y.colorSpace),Ke=a&&y.isVideoTexture!==!0,C=ne.__version===void 0||re===!0;let ue=x(y,be,xe);ve(n.TEXTURE_CUBE_MAP,y,xe);let J;if(P){Ke&&C&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,pe,be.width,be.height);for(let X=0;X<6;X++){J=q[X].mipmaps;for(let se=0;se<J.length;se++){const Se=J[se];y.format!==qn?Te!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,0,0,Se.width,Se.height,Te,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,pe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,0,0,Se.width,Se.height,Te,me,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,pe,Se.width,Se.height,0,Te,me,Se.data)}}}else{J=y.mipmaps,Ke&&C&&(J.length>0&&ue++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,pe,q[0].width,q[0].height));for(let X=0;X<6;X++)if(te){Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,q[X].width,q[X].height,Te,me,q[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,pe,q[X].width,q[X].height,0,Te,me,q[X].data);for(let se=0;se<J.length;se++){const je=J[se].image[X].image;Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,0,0,je.width,je.height,Te,me,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,pe,je.width,je.height,0,Te,me,je.data)}}else{Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Te,me,q[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,pe,Te,me,q[X]);for(let se=0;se<J.length;se++){const Se=J[se];Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,0,0,Te,me,Se.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,pe,Te,me,Se.image[X])}}}R(y,xe)&&A(n.TEXTURE_CUBE_MAP),ne.__version=ee.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Ve(w,y,O,re,ee,ne){const _e=s.convert(O.format,O.colorSpace),ae=s.convert(O.type),he=F(O.internalFormat,_e,ae,O.colorSpace);if(!i.get(y).__hasExternalTextures){const te=Math.max(1,y.width>>ne),q=Math.max(1,y.height>>ne);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ne,he,te,q,y.depth,0,_e,ae,null):t.texImage2D(ee,ne,he,te,q,0,_e,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Xe(y)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ee,i.get(O).__webglTexture,0,Ne(y)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,ee,i.get(O).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function N(w,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer&&!y.stencilBuffer){let re=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||Xe(y)){const ee=y.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Wi?re=n.DEPTH_COMPONENT32F:ee.type===ur&&(re=n.DEPTH_COMPONENT24));const ne=Ne(y);Xe(y)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,re,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,re,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(y.depthBuffer&&y.stencilBuffer){const re=Ne(y);O&&Xe(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,y.width,y.height):Xe(y)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{const re=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ee=0;ee<re.length;ee++){const ne=re[ee],_e=s.convert(ne.format,ne.colorSpace),ae=s.convert(ne.type),he=F(ne.internalFormat,_e,ae,ne.colorSpace),P=Ne(y);O&&Xe(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,P,he,y.width,y.height):Xe(y)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P,he,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,he,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function zt(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);const re=i.get(y.depthTexture).__webglTexture,ee=Ne(y);if(y.depthTexture.format===Gr)Xe(y)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(y.depthTexture.format===Hs)Xe(y)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ee(w){const y=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");zt(y.__webglFramebuffer,w)}else if(O){y.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[re]),y.__webglDepthbuffer[re]=n.createRenderbuffer(),N(y.__webglDepthbuffer[re],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),N(y.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(w,y,O){const re=i.get(w);y!==void 0&&Ve(re.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ee(w)}function Ce(w){const y=w.texture,O=i.get(w),re=i.get(y);w.addEventListener("dispose",G),w.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=y.version,o.memory.textures++);const ee=w.isWebGLCubeRenderTarget===!0,ne=w.isWebGLMultipleRenderTargets===!0,_e=M(w)||a;if(ee){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let he=0;he<y.mipmaps.length;he++)O.__webglFramebuffer[ae][he]=n.createFramebuffer()}else O.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)O.__webglFramebuffer[ae]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ne)if(r.drawBuffers){const ae=w.texture;for(let he=0,P=ae.length;he<P;he++){const te=i.get(ae[he]);te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Xe(w)===!1){const ae=ne?y:[y];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<ae.length;he++){const P=ae[he];O.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[he]);const te=s.convert(P.format,P.colorSpace),q=s.convert(P.type),be=F(P.internalFormat,te,q,P.colorSpace,w.isXRRenderTarget===!0),xe=Ne(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,be,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,O.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),N(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),ve(n.TEXTURE_CUBE_MAP,y,_e);for(let ae=0;ae<6;ae++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)Ve(O.__webglFramebuffer[ae][he],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else Ve(O.__webglFramebuffer[ae],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);R(y,_e)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const ae=w.texture;for(let he=0,P=ae.length;he<P;he++){const te=ae[he],q=i.get(te);t.bindTexture(n.TEXTURE_2D,q.__webglTexture),ve(n.TEXTURE_2D,te,_e),Ve(O.__webglFramebuffer,w,te,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),R(te,_e)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ae=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,re.__webglTexture),ve(ae,y,_e),a&&y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)Ve(O.__webglFramebuffer[he],w,y,n.COLOR_ATTACHMENT0,ae,he);else Ve(O.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,ae,0);R(y,_e)&&A(ae),t.unbindTexture()}w.depthBuffer&&Ee(w)}function ht(w){const y=M(w)||a,O=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0,ee=O.length;re<ee;re++){const ne=O[re];if(R(ne,y)){const _e=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ae=i.get(ne).__webglTexture;t.bindTexture(_e,ae),A(_e),t.unbindTexture()}}}function We(w){if(a&&w.samples>0&&Xe(w)===!1){const y=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],O=w.width,re=w.height;let ee=n.COLOR_BUFFER_BIT;const ne=[],_e=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(w),he=w.isWebGLMultipleRenderTargets===!0;if(he)for(let P=0;P<y.length;P++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let P=0;P<y.length;P++){ne.push(n.COLOR_ATTACHMENT0+P),w.depthBuffer&&ne.push(_e);const te=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(te===!1&&(w.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),he&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[P]),te===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),he){const q=i.get(y[P]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,q,0)}n.blitFramebuffer(0,0,O,re,0,0,O,re,ee,n.NEAREST),f&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let P=0;P<y.length;P++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.RENDERBUFFER,ae.__webglColorRenderbuffer[P]);const te=i.get(y[P]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ne(w){return Math.min(h,w.samples)}function Xe(w){const y=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ot(w){const y=o.render.frame;g.get(w)!==y&&(g.set(w,y),w.update())}function Pt(w,y){const O=w.colorSpace,re=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===hu||O!==ln&&O!==Yn&&(ot.getTransfer(O)===gt?a===!1?e.has("EXT_sRGB")===!0&&re===qn?(w.format=hu,w.minFilter=En,w.generateMipmaps=!1):y=Dm.sRGBToLinear(y):(re!==qn||ee!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}this.allocateTextureUnit=ie,this.resetTextureUnits=j,this.setTexture2D=K,this.setTexture2DArray=oe,this.setTexture3D=ce,this.setTextureCube=W,this.rebindTextures=Ge,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=Xe}function tE(n,e,t){const i=t.isWebGL2;function r(s,o=Yn){let a;const l=ot.getTransfer(o);if(s===fr)return n.UNSIGNED_BYTE;if(s===Tm)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Sm)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Tv)return n.BYTE;if(s===Sv)return n.SHORT;if(s===Vu)return n.UNSIGNED_SHORT;if(s===Em)return n.INT;if(s===ur)return n.UNSIGNED_INT;if(s===Wi)return n.FLOAT;if(s===Oo)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Av)return n.ALPHA;if(s===qn)return n.RGBA;if(s===wv)return n.LUMINANCE;if(s===bv)return n.LUMINANCE_ALPHA;if(s===Gr)return n.DEPTH_COMPONENT;if(s===Hs)return n.DEPTH_STENCIL;if(s===hu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Rv)return n.RED;if(s===Am)return n.RED_INTEGER;if(s===Lv)return n.RG;if(s===wm)return n.RG_INTEGER;if(s===bm)return n.RGBA_INTEGER;if(s===rc||s===sc||s===oc||s===ac)if(l===gt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===rc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===rc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===sc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===oc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ac)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===td||s===nd||s===id||s===rd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===td)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===id)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rm)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===sd||s===od)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===sd)return l===gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===od)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ad||s===ld||s===cd||s===ud||s===hd||s===dd||s===fd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===yd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ad)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ld)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cd)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ud)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hd)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dd)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fd)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pd)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===md)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gd)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_d)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vd)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xd)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yd)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lc||s===Md||s===Ed)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===lc)return l===gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Md)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ed)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Pv||s===Td||s===Sd||s===Ad)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===lc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Td)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Sd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ad)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class nE extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dn extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iE={type:"move"};class Ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Dn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class rE extends Jr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const E=[],v=[],M=new Le;let T=null;const R=new mn;R.layers.enable(1),R.viewport=new dt;const A=new mn;A.layers.enable(2),A.viewport=new dt;const F=[R,A],x=new nE;x.layers.enable(1),x.layers.enable(2);let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=E[W];return Z===void 0&&(Z=new Ic,E[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=E[W];return Z===void 0&&(Z=new Ic,E[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=E[W];return Z===void 0&&(Z=new Ic,E[W]=Z),Z.getHandSpace()};function G(W){const Z=v.indexOf(W.inputSource);if(Z===-1)return;const de=E[Z];de!==void 0&&(de.update(W.inputSource,W.frame,c||o),de.dispatchEvent({type:W.type,data:W.inputSource}))}function Q(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",I);for(let W=0;W<E.length;W++){const Z=v[W];Z!==null&&(v[W]=null,E[W].disconnect(Z))}b=null,z=null,e.setRenderTarget(m),f=null,d=null,h=null,r=null,p=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Yr(f.framebufferWidth,f.framebufferHeight,{format:qn,type:fr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,de=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?Hs:Gr,de=_.stencil?Vr:ur);const ve={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Yr(d.textureWidth,d.textureHeight,{format:qn,type:fr,depthTexture:new jm(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ue=e.properties.get(p);Ue.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(W){for(let Z=0;Z<W.removed.length;Z++){const de=W.removed[Z],ge=v.indexOf(de);ge>=0&&(v[ge]=null,E[ge].disconnect(de))}for(let Z=0;Z<W.added.length;Z++){const de=W.added[Z];let ge=v.indexOf(de);if(ge===-1){for(let Ue=0;Ue<E.length;Ue++)if(Ue>=v.length){v.push(de),ge=Ue;break}else if(v[Ue]===null){v[Ue]=de,ge=Ue;break}if(ge===-1)break}const ve=E[ge];ve&&ve.connect(de)}}const V=new L,Y=new L;function j(W,Z,de){V.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(de.matrixWorld);const ge=V.distanceTo(Y),ve=Z.projectionMatrix.elements,Ue=de.projectionMatrix.elements,Pe=ve[14]/(ve[10]-1),we=ve[14]/(ve[10]+1),Ve=(ve[9]+1)/ve[5],N=(ve[9]-1)/ve[5],zt=(ve[8]-1)/ve[0],Ee=(Ue[8]+1)/Ue[0],Ge=Pe*zt,Ce=Pe*Ee,ht=ge/(-zt+Ee),We=ht*-zt;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(We),W.translateZ(ht),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Ne=Pe+ht,Xe=we+ht,Ot=Ge-We,Pt=Ce+(ge-We),w=Ve*we/Xe*Ne,y=N*we/Xe*Ne;W.projectionMatrix.makePerspective(Ot,Pt,w,y,Ne,Xe),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ie(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;x.near=A.near=R.near=W.near,x.far=A.far=R.far=W.far,(b!==x.near||z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,z=x.far);const Z=W.parent,de=x.cameras;ie(x,Z);for(let ge=0;ge<de.length;ge++)ie(de[ge],Z);de.length===2?j(x,R,A):x.projectionMatrix.copy(R.projectionMatrix),$(W,x,Z)};function $(W,Z,de){de===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(de.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=zs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let K=null;function oe(W,Z){if(u=Z.getViewerPose(c||o),g=Z,u!==null){const de=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ge=!1;de.length!==x.cameras.length&&(x.cameras.length=0,ge=!0);for(let ve=0;ve<de.length;ve++){const Ue=de[ve];let Pe=null;if(f!==null)Pe=f.getViewport(Ue);else{const Ve=h.getViewSubImage(d,Ue);Pe=Ve.viewport,ve===0&&(e.setRenderTargetTextures(p,Ve.colorTexture,d.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(p))}let we=F[ve];we===void 0&&(we=new mn,we.layers.enable(ve),we.viewport=new dt,F[ve]=we),we.matrix.fromArray(Ue.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ue.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ve===0&&(x.matrix.copy(we.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ge===!0&&x.cameras.push(we)}}for(let de=0;de<E.length;de++){const ge=v[de],ve=E[de];ge!==null&&ve!==void 0&&ve.update(ge,Z,c||o)}K&&K(W,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ce=new Xm;ce.setAnimationLoop(oe),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}}function sE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,zm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function oE(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,v){const M=v.program;i.uniformBlockBinding(E,M)}function c(E,v){let M=r[E.id];M===void 0&&(g(E),M=u(E),r[E.id]=M,E.addEventListener("dispose",m));const T=v.program;i.updateUBOMapping(E,T);const R=e.render.frame;s[E.id]!==R&&(d(E),s[E.id]=R)}function u(E){const v=h();E.__bindingPointIndex=v;const M=n.createBuffer(),T=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,T,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const v=r[E.id],M=E.uniforms,T=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,A=M.length;R<A;R++){const F=M[R];if(f(F,R,T)===!0){const x=F.__offset,b=Array.isArray(F.value)?F.value:[F.value];let z=0;for(let G=0;G<b.length;G++){const Q=b[G],I=_(Q);typeof Q=="number"?(F.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,x+z,F.__data)):Q.isMatrix3?(F.__data[0]=Q.elements[0],F.__data[1]=Q.elements[1],F.__data[2]=Q.elements[2],F.__data[3]=Q.elements[0],F.__data[4]=Q.elements[3],F.__data[5]=Q.elements[4],F.__data[6]=Q.elements[5],F.__data[7]=Q.elements[0],F.__data[8]=Q.elements[6],F.__data[9]=Q.elements[7],F.__data[10]=Q.elements[8],F.__data[11]=Q.elements[0]):(Q.toArray(F.__data,z),z+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,x,F.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,v,M){const T=E.value;if(M[v]===void 0){if(typeof T=="number")M[v]=T;else{const R=Array.isArray(T)?T:[T],A=[];for(let F=0;F<R.length;F++)A.push(R[F].clone());M[v]=A}return!0}else if(typeof T=="number"){if(M[v]!==T)return M[v]=T,!0}else{const R=Array.isArray(M[v])?M[v]:[M[v]],A=Array.isArray(T)?T:[T];for(let F=0;F<R.length;F++){const x=R[F];if(x.equals(A[F])===!1)return x.copy(A[F]),!0}}return!1}function g(E){const v=E.uniforms;let M=0;const T=16;let R=0;for(let A=0,F=v.length;A<F;A++){const x=v[A],b={boundary:0,storage:0},z=Array.isArray(x.value)?x.value:[x.value];for(let G=0,Q=z.length;G<Q;G++){const I=z[G],V=_(I);b.boundary+=V.boundary,b.storage+=V.storage}if(x.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=M,A>0){R=M%T;const G=T-R;R!==0&&G-b.boundary<0&&(M+=T-R,x.__offset=M)}M+=b.storage}return R=M%T,R>0&&(M+=T-R),E.__size=M,E.__cache={},this}function _(E){const v={boundary:0,storage:0};return typeof E=="number"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){const v=E.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Qm{constructor(e={}){const{canvas:t=r1(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this._useLegacyLights=!1,this.toneMapping=dr,this.toneMappingExposure=1;const v=this;let M=!1,T=0,R=0,A=null,F=-1,x=null;const b=new dt,z=new dt;let G=null;const Q=new Me(0);let I=0,V=t.width,Y=t.height,j=1,ie=null,$=null;const K=new dt(0,0,V,Y),oe=new dt(0,0,V,Y);let ce=!1;const W=new ju;let Z=!1,de=!1,ge=null;const ve=new ze,Ue=new Le,Pe=new L,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return A===null?j:1}let N=i;function zt(S,D){for(let H=0;H<S.length;H++){const k=S[H],B=t.getContext(k,D);if(B!==null)return B}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ci}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",ue,!1),N===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),N=zt(D,S),N===null)throw zt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ee,Ge,Ce,ht,We,Ne,Xe,Ot,Pt,w,y,O,re,ee,ne,_e,ae,he,P,te,q,be,xe,Te;function me(){Ee=new _M(N),Ge=new hM(N,Ee,e),Ee.init(Ge),be=new tE(N,Ee,Ge),Ce=new J2(N,Ee,Ge),ht=new yM(N),We=new H2,Ne=new eE(N,Ee,Ce,We,Ge,be,ht),Xe=new fM(v),Ot=new gM(v),Pt=new R1(N,Ge),xe=new cM(N,Ee,Pt,Ge),w=new vM(N,Pt,ht,xe),y=new SM(N,w,Pt,ht),P=new TM(N,Ge,Ne),_e=new dM(We),O=new B2(v,Xe,Ot,Ee,Ge,xe,_e),re=new sE(v,We),ee=new z2,ne=new q2(Ee,Ge),he=new lM(v,Xe,Ot,Ce,y,d,l),ae=new Q2(v,y,Ge),Te=new oE(N,ht,Ge,Ce),te=new uM(N,Ee,ht,Ge),q=new xM(N,Ee,ht,Ge),ht.programs=O.programs,v.capabilities=Ge,v.extensions=Ee,v.properties=We,v.renderLists=ee,v.shadowMap=ae,v.state=Ce,v.info=ht}me();const pe=new rE(v,N);this.xr=pe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=Ee.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ee.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(V,Y,!1))},this.getSize=function(S){return S.set(V,Y)},this.setSize=function(S,D,H=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,Y=D,t.width=Math.floor(S*j),t.height=Math.floor(D*j),H===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(V*j,Y*j).floor()},this.setDrawingBufferSize=function(S,D,H){V=S,Y=D,j=H,t.width=Math.floor(S*H),t.height=Math.floor(D*H),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(K)},this.setViewport=function(S,D,H,k){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,D,H,k),Ce.viewport(b.copy(K).multiplyScalar(j).floor())},this.getScissor=function(S){return S.copy(oe)},this.setScissor=function(S,D,H,k){S.isVector4?oe.set(S.x,S.y,S.z,S.w):oe.set(S,D,H,k),Ce.scissor(z.copy(oe).multiplyScalar(j).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(S){Ce.setScissorTest(ce=S)},this.setOpaqueSort=function(S){ie=S},this.setTransparentSort=function(S){$=S},this.getClearColor=function(S){return S.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(S=!0,D=!0,H=!0){let k=0;if(S){let B=!1;if(A!==null){const fe=A.texture.format;B=fe===bm||fe===wm||fe===Am}if(B){const fe=A.texture.type,Ae=fe===fr||fe===ur||fe===Vu||fe===Vr||fe===Tm||fe===Sm,Ie=he.getClearColor(),Be=he.getClearAlpha(),Ze=Ie.r,qe=Ie.g,Ye=Ie.b;Ae?(f[0]=Ze,f[1]=qe,f[2]=Ye,f[3]=Be,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=Ze,g[1]=qe,g[2]=Ye,g[3]=Be,N.clearBufferiv(N.COLOR,0,g))}else k|=N.COLOR_BUFFER_BIT}D&&(k|=N.DEPTH_BUFFER_BIT),H&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ee.dispose(),ne.dispose(),We.dispose(),Xe.dispose(),Ot.dispose(),y.dispose(),xe.dispose(),Te.dispose(),O.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",tn),pe.removeEventListener("sessionend",ct),ge&&(ge.dispose(),ge=null),cn.stop()};function Ke(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const S=ht.autoReset,D=ae.enabled,H=ae.autoUpdate,k=ae.needsUpdate,B=ae.type;me(),ht.autoReset=S,ae.enabled=D,ae.autoUpdate=H,ae.needsUpdate=k,ae.type=B}function ue(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function J(S){const D=S.target;D.removeEventListener("dispose",J),X(D)}function X(S){se(S),We.remove(S)}function se(S){const D=We.get(S).programs;D!==void 0&&(D.forEach(function(H){O.releaseProgram(H)}),S.isShaderMaterial&&O.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,H,k,B,fe){D===null&&(D=we);const Ae=B.isMesh&&B.matrixWorld.determinant()<0,Ie=Jl(S,D,H,k,B);Ce.setMaterial(k,Ae);let Be=H.index,Ze=1;if(k.wireframe===!0){if(Be=w.getWireframeAttribute(H),Be===void 0)return;Ze=2}const qe=H.drawRange,Ye=H.attributes.position;let Bt=qe.start*Ze,Rn=(qe.start+qe.count)*Ze;fe!==null&&(Bt=Math.max(Bt,fe.start*Ze),Rn=Math.min(Rn,(fe.start+fe.count)*Ze)),Be!==null?(Bt=Math.max(Bt,0),Rn=Math.min(Rn,Be.count)):Ye!=null&&(Bt=Math.max(Bt,0),Rn=Math.min(Rn,Ye.count));const Kt=Rn-Bt;if(Kt<0||Kt===1/0)return;xe.setup(B,k,Ie,H,Be);let Di,Rt=te;if(Be!==null&&(Di=Pt.get(Be),Rt=q,Rt.setIndex(Di)),B.isMesh)k.wireframe===!0?(Ce.setLineWidth(k.wireframeLinewidth*Ve()),Rt.setMode(N.LINES)):Rt.setMode(N.TRIANGLES);else if(B.isLine){let Qe=k.linewidth;Qe===void 0&&(Qe=1),Ce.setLineWidth(Qe*Ve()),B.isLineSegments?Rt.setMode(N.LINES):B.isLineLoop?Rt.setMode(N.LINE_LOOP):Rt.setMode(N.LINE_STRIP)}else B.isPoints?Rt.setMode(N.POINTS):B.isSprite&&Rt.setMode(N.TRIANGLES);if(B.isBatchedMesh)Rt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)Rt.renderInstances(Bt,Kt,B.count);else if(H.isInstancedBufferGeometry){const Qe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ec=Math.min(H.instanceCount,Qe);Rt.renderInstances(Bt,Kt,ec)}else Rt.render(Bt,Kt)};function Se(S,D,H){S.transparent===!0&&S.side===Xn&&S.forceSinglePass===!1?(S.side=gn,S.needsUpdate=!0,ts(S,D,H),S.side=Yi,S.needsUpdate=!0,ts(S,D,H),S.side=Xn):ts(S,D,H)}this.compile=function(S,D,H=null){H===null&&(H=S),m=ne.get(H),m.init(),E.push(m),H.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),S!==H&&S.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(v._useLegacyLights);const k=new Set;return S.traverse(function(B){const fe=B.material;if(fe)if(Array.isArray(fe))for(let Ae=0;Ae<fe.length;Ae++){const Ie=fe[Ae];Se(Ie,H,B),k.add(Ie)}else Se(fe,H,B),k.add(fe)}),E.pop(),m=null,k},this.compileAsync=function(S,D,H=null){const k=this.compile(S,D,H);return new Promise(B=>{function fe(){if(k.forEach(function(Ae){We.get(Ae).currentProgram.isReady()&&k.delete(Ae)}),k.size===0){B(S);return}setTimeout(fe,10)}Ee.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let je=null;function Ft(S){je&&je(S)}function tn(){cn.stop()}function ct(){cn.start()}const cn=new Xm;cn.setAnimationLoop(Ft),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(S){je=S,pe.setAnimationLoop(S),S===null?cn.stop():cn.start()},pe.addEventListener("sessionstart",tn),pe.addEventListener("sessionend",ct),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(D),D=pe.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,D,A),m=ne.get(S,E.length),m.init(),E.push(m),ve.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(ve),de=this.localClippingEnabled,Z=_e.init(this.clippingPlanes,de),_=ee.get(S,p.length),_.init(),p.push(_),On(S,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(ie,$),this.info.render.frame++,Z===!0&&_e.beginShadows();const H=m.state.shadowsArray;if(ae.render(H,S,D),Z===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(_,S),m.setupLights(v._useLegacyLights),D.isArrayCamera){const k=D.cameras;for(let B=0,fe=k.length;B<fe;B++){const Ae=k[B];lo(_,S,Ae,Ae.viewport)}}else lo(_,S,D);A!==null&&(Ne.updateMultisampleRenderTarget(A),Ne.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(v,S,D),xe.resetDefaultState(),F=-1,x=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function On(S,D,H,k){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||W.intersectsSprite(S)){k&&Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);const Ae=y.update(S),Ie=S.material;Ie.visible&&_.push(S,Ae,Ie,H,Pe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||W.intersectsObject(S))){const Ae=y.update(S),Ie=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pe.copy(S.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Pe.copy(Ae.boundingSphere.center)),Pe.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(Ie)){const Be=Ae.groups;for(let Ze=0,qe=Be.length;Ze<qe;Ze++){const Ye=Be[Ze],Bt=Ie[Ye.materialIndex];Bt&&Bt.visible&&_.push(S,Ae,Bt,H,Pe.z,Ye)}}else Ie.visible&&_.push(S,Ae,Ie,H,Pe.z,null)}}const fe=S.children;for(let Ae=0,Ie=fe.length;Ae<Ie;Ae++)On(fe[Ae],D,H,k)}function lo(S,D,H,k){const B=S.opaque,fe=S.transmissive,Ae=S.transparent;m.setupLightsView(H),Z===!0&&_e.setGlobalState(v.clippingPlanes,H),fe.length>0&&Ql(B,fe,D,H),k&&Ce.viewport(b.copy(k)),B.length>0&&es(B,D,H),fe.length>0&&es(fe,D,H),Ae.length>0&&es(Ae,D,H),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Ql(S,D,H,k){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const fe=Ge.isWebGL2;ge===null&&(ge=new Yr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Oo:fr,minFilter:qr,samples:fe?4:0})),v.getDrawingBufferSize(Ue),fe?ge.setSize(Ue.x,Ue.y):ge.setSize(dl(Ue.x),dl(Ue.y));const Ae=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(Q),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const Ie=v.toneMapping;v.toneMapping=dr,es(S,H,k),Ne.updateMultisampleRenderTarget(ge),Ne.updateRenderTargetMipmap(ge);let Be=!1;for(let Ze=0,qe=D.length;Ze<qe;Ze++){const Ye=D[Ze],Bt=Ye.object,Rn=Ye.geometry,Kt=Ye.material,Di=Ye.group;if(Kt.side===Xn&&Bt.layers.test(k.layers)){const Rt=Kt.side;Kt.side=gn,Kt.needsUpdate=!0,Tr(Bt,H,k,Rn,Kt,Di),Kt.side=Rt,Kt.needsUpdate=!0,Be=!0}}Be===!0&&(Ne.updateMultisampleRenderTarget(ge),Ne.updateRenderTargetMipmap(ge)),v.setRenderTarget(Ae),v.setClearColor(Q,I),v.toneMapping=Ie}function es(S,D,H){const k=D.isScene===!0?D.overrideMaterial:null;for(let B=0,fe=S.length;B<fe;B++){const Ae=S[B],Ie=Ae.object,Be=Ae.geometry,Ze=k===null?Ae.material:k,qe=Ae.group;Ie.layers.test(H.layers)&&Tr(Ie,D,H,Be,Ze,qe)}}function Tr(S,D,H,k,B,fe){S.onBeforeRender(v,D,H,k,B,fe),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(v,D,H,k,S,fe),B.transparent===!0&&B.side===Xn&&B.forceSinglePass===!1?(B.side=gn,B.needsUpdate=!0,v.renderBufferDirect(H,D,k,B,S,fe),B.side=Yi,B.needsUpdate=!0,v.renderBufferDirect(H,D,k,B,S,fe),B.side=Xn):v.renderBufferDirect(H,D,k,B,S,fe),S.onAfterRender(v,D,H,k,B,fe)}function ts(S,D,H){D.isScene!==!0&&(D=we);const k=We.get(S),B=m.state.lights,fe=m.state.shadowsArray,Ae=B.state.version,Ie=O.getParameters(S,B.state,fe,D,H),Be=O.getProgramCacheKey(Ie);let Ze=k.programs;k.environment=S.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(S.isMeshStandardMaterial?Ot:Xe).get(S.envMap||k.environment),Ze===void 0&&(S.addEventListener("dispose",J),Ze=new Map,k.programs=Ze);let qe=Ze.get(Be);if(qe!==void 0){if(k.currentProgram===qe&&k.lightsStateVersion===Ae)return co(S,Ie),qe}else Ie.uniforms=O.getUniforms(S),S.onBuild(H,Ie,v),S.onBeforeCompile(Ie,v),qe=O.acquireProgram(Ie,Be),Ze.set(Be,qe),k.uniforms=Ie.uniforms;const Ye=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ye.clippingPlanes=_e.uniform),co(S,Ie),k.needsLights=F_(S),k.lightsStateVersion=Ae,k.needsLights&&(Ye.ambientLightColor.value=B.state.ambient,Ye.lightProbe.value=B.state.probe,Ye.directionalLights.value=B.state.directional,Ye.directionalLightShadows.value=B.state.directionalShadow,Ye.spotLights.value=B.state.spot,Ye.spotLightShadows.value=B.state.spotShadow,Ye.rectAreaLights.value=B.state.rectArea,Ye.ltc_1.value=B.state.rectAreaLTC1,Ye.ltc_2.value=B.state.rectAreaLTC2,Ye.pointLights.value=B.state.point,Ye.pointLightShadows.value=B.state.pointShadow,Ye.hemisphereLights.value=B.state.hemi,Ye.directionalShadowMap.value=B.state.directionalShadowMap,Ye.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ye.spotShadowMap.value=B.state.spotShadowMap,Ye.spotLightMatrix.value=B.state.spotLightMatrix,Ye.spotLightMap.value=B.state.spotLightMap,Ye.pointShadowMap.value=B.state.pointShadowMap,Ye.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=qe,k.uniformsList=null,qe}function la(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Ya.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function co(S,D){const H=We.get(S);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function Jl(S,D,H,k,B){D.isScene!==!0&&(D=we),Ne.resetTextureUnits();const fe=D.fog,Ae=k.isMeshStandardMaterial?D.environment:null,Ie=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ln,Be=(k.isMeshStandardMaterial?Ot:Xe).get(k.envMap||Ae),Ze=k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,qe=!!H.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ye=!!H.morphAttributes.position,Bt=!!H.morphAttributes.normal,Rn=!!H.morphAttributes.color;let Kt=dr;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Kt=v.toneMapping);const Di=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Rt=Di!==void 0?Di.length:0,Qe=We.get(k),ec=m.state.lights;if(Z===!0&&(de===!0||S!==x)){const Fn=S===x&&k.id===F;_e.setState(k,S,Fn)}let Ct=!1;k.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ec.state.version||Qe.outputColorSpace!==Ie||B.isBatchedMesh&&Qe.batching===!1||!B.isBatchedMesh&&Qe.batching===!0||B.isInstancedMesh&&Qe.instancing===!1||!B.isInstancedMesh&&Qe.instancing===!0||B.isSkinnedMesh&&Qe.skinning===!1||!B.isSkinnedMesh&&Qe.skinning===!0||B.isInstancedMesh&&Qe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Qe.instancingColor===!1&&B.instanceColor!==null||Qe.envMap!==Be||k.fog===!0&&Qe.fog!==fe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==_e.numPlanes||Qe.numIntersection!==_e.numIntersection)||Qe.vertexAlphas!==Ze||Qe.vertexTangents!==qe||Qe.morphTargets!==Ye||Qe.morphNormals!==Bt||Qe.morphColors!==Rn||Qe.toneMapping!==Kt||Ge.isWebGL2===!0&&Qe.morphTargetsCount!==Rt)&&(Ct=!0):(Ct=!0,Qe.__version=k.version);let Sr=Qe.currentProgram;Ct===!0&&(Sr=ts(k,D,B));let jh=!1,uo=!1,tc=!1;const un=Sr.getUniforms(),Ar=Qe.uniforms;if(Ce.useProgram(Sr.program)&&(jh=!0,uo=!0,tc=!0),k.id!==F&&(F=k.id,uo=!0),jh||x!==S){un.setValue(N,"projectionMatrix",S.projectionMatrix),un.setValue(N,"viewMatrix",S.matrixWorldInverse);const Fn=un.map.cameraPosition;Fn!==void 0&&Fn.setValue(N,Pe.setFromMatrixPosition(S.matrixWorld)),Ge.logarithmicDepthBuffer&&un.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&un.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,uo=!0,tc=!0)}if(B.isSkinnedMesh){un.setOptional(N,B,"bindMatrix"),un.setOptional(N,B,"bindMatrixInverse");const Fn=B.skeleton;Fn&&(Ge.floatVertexTextures?(Fn.boneTexture===null&&Fn.computeBoneTexture(),un.setValue(N,"boneTexture",Fn.boneTexture,Ne)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(un.setOptional(N,B,"batchingTexture"),un.setValue(N,"batchingTexture",B._matricesTexture,Ne));const nc=H.morphAttributes;if((nc.position!==void 0||nc.normal!==void 0||nc.color!==void 0&&Ge.isWebGL2===!0)&&P.update(B,H,Sr),(uo||Qe.receiveShadow!==B.receiveShadow)&&(Qe.receiveShadow=B.receiveShadow,un.setValue(N,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ar.envMap.value=Be,Ar.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),uo&&(un.setValue(N,"toneMappingExposure",v.toneMappingExposure),Qe.needsLights&&O_(Ar,tc),fe&&k.fog===!0&&re.refreshFogUniforms(Ar,fe),re.refreshMaterialUniforms(Ar,k,j,Y,ge),Ya.upload(N,la(Qe),Ar,Ne)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ya.upload(N,la(Qe),Ar,Ne),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&un.setValue(N,"center",B.center),un.setValue(N,"modelViewMatrix",B.modelViewMatrix),un.setValue(N,"normalMatrix",B.normalMatrix),un.setValue(N,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Fn=k.uniformsGroups;for(let ic=0,B_=Fn.length;ic<B_;ic++)if(Ge.isWebGL2){const qh=Fn[ic];Te.update(qh,Sr),Te.bind(qh,Sr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sr}function O_(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function F_(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,D,H){We.get(S.texture).__webglTexture=D,We.get(S.depthTexture).__webglTexture=H;const k=We.get(S);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=H===void 0,k.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,D){const H=We.get(S);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,H=0){A=S,T=D,R=H;let k=!0,B=null,fe=!1,Ae=!1;if(S){const Be=We.get(S);Be.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(N.FRAMEBUFFER,null),k=!1):Be.__webglFramebuffer===void 0?Ne.setupRenderTarget(S):Be.__hasExternalTextures&&Ne.rebindTextures(S,We.get(S.texture).__webglTexture,We.get(S.depthTexture).__webglTexture);const Ze=S.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ae=!0);const qe=We.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qe[D])?B=qe[D][H]:B=qe[D],fe=!0):Ge.isWebGL2&&S.samples>0&&Ne.useMultisampledRTT(S)===!1?B=We.get(S).__webglMultisampledFramebuffer:Array.isArray(qe)?B=qe[H]:B=qe,b.copy(S.viewport),z.copy(S.scissor),G=S.scissorTest}else b.copy(K).multiplyScalar(j).floor(),z.copy(oe).multiplyScalar(j).floor(),G=ce;if(Ce.bindFramebuffer(N.FRAMEBUFFER,B)&&Ge.drawBuffers&&k&&Ce.drawBuffers(S,B),Ce.viewport(b),Ce.scissor(z),Ce.setScissorTest(G),fe){const Be=We.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,Be.__webglTexture,H)}else if(Ae){const Be=We.get(S.texture),Ze=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.__webglTexture,H||0,Ze)}F=-1},this.readRenderTargetPixels=function(S,D,H,k,B,fe,Ae){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=We.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){Ce.bindFramebuffer(N.FRAMEBUFFER,Ie);try{const Be=S.texture,Ze=Be.format,qe=Be.type;if(Ze!==qn&&be.convert(Ze)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=qe===Oo&&(Ee.has("EXT_color_buffer_half_float")||Ge.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(qe!==fr&&be.convert(qe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===Wi&&(Ge.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-k&&H>=0&&H<=S.height-B&&N.readPixels(D,H,k,B,be.convert(Ze),be.convert(qe),fe)}finally{const Be=A!==null?We.get(A).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(S,D,H=0){const k=Math.pow(2,-H),B=Math.floor(D.image.width*k),fe=Math.floor(D.image.height*k);Ne.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,S.x,S.y,B,fe),Ce.unbindTexture()},this.copyTextureToTexture=function(S,D,H,k=0){const B=D.image.width,fe=D.image.height,Ae=be.convert(H.format),Ie=be.convert(H.type);Ne.setTexture2D(H,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment),D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,k,S.x,S.y,B,fe,Ae,Ie,D.image.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,k,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,Ae,D.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,k,S.x,S.y,Ae,Ie,D.image),k===0&&H.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(S,D,H,k,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=S.max.x-S.min.x+1,Ae=S.max.y-S.min.y+1,Ie=S.max.z-S.min.z+1,Be=be.convert(k.format),Ze=be.convert(k.type);let qe;if(k.isData3DTexture)Ne.setTexture3D(k,0),qe=N.TEXTURE_3D;else if(k.isDataArrayTexture)Ne.setTexture2DArray(k,0),qe=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const Ye=N.getParameter(N.UNPACK_ROW_LENGTH),Bt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Rn=N.getParameter(N.UNPACK_SKIP_PIXELS),Kt=N.getParameter(N.UNPACK_SKIP_ROWS),Di=N.getParameter(N.UNPACK_SKIP_IMAGES),Rt=H.isCompressedTexture?H.mipmaps[0]:H.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Rt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Rt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,S.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,S.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,S.min.z),H.isDataTexture||H.isData3DTexture?N.texSubImage3D(qe,B,D.x,D.y,D.z,fe,Ae,Ie,Be,Ze,Rt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(qe,B,D.x,D.y,D.z,fe,Ae,Ie,Be,Rt.data)):N.texSubImage3D(qe,B,D.x,D.y,D.z,fe,Ae,Ie,Be,Ze,Rt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ye),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Bt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Rn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Kt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Di),B===0&&k.generateMipmaps&&N.generateMipmap(qe),Ce.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Ne.setTextureCube(S,0):S.isData3DTexture?Ne.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ne.setTexture2DArray(S,0):Ne.setTexture2D(S,0),Ce.unbindTexture()},this.resetState=function(){T=0,R=0,A=null,Ce.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Wu?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===bl?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dt?Wr:Pm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wr?Dt:ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class aE extends Qm{}aE.prototype.isWebGL1Renderer=!0;class lE extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class cE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.InterleavedBuffer: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fn=new L;class $u{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $u(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const _f=new L,vf=new dt,xf=new dt,uE=new L,yf=new ze,Ca=new L,Dc=new Pi,Mf=new ze,Uc=new Zo;class Jm extends Tn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ed,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $i),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ca),this.boundingBox.expandByPoint(Ca)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ca),this.boundingSphere.expandByPoint(Ca)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dc.copy(this.boundingSphere),Dc.applyMatrix4(r),e.ray.intersectsSphere(Dc)!==!1&&(Mf.copy(r).invert(),Uc.copy(e.ray).applyMatrix4(Mf),!(this.boundingBox!==null&&Uc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Uc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ed?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ev?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;vf.fromBufferAttribute(r.attributes.skinIndex,e),xf.fromBufferAttribute(r.attributes.skinWeight,e),_f.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=xf.getComponent(s);if(o!==0){const a=vf.getComponent(s);yf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(uE.copy(_f).applyMatrix4(yf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class eg extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hE extends an{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Jt,u=Jt,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ef=new ze,dE=new ze;class Ll{constructor(e=[],t=[]){this.uuid=ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ze;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:dE;Ef.multiplyMatrices(a,t[s]),Ef.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Ll(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new hE(t,e,e,qn,Wi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new eg),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class pu extends mt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ys=new ze,Tf=new ze,Ia=[],Sf=new $i,fE=new ze,go=new Tn,_o=new Pi;class pE extends Tn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pu(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,fE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ys),Sf.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(Sf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ys),_o.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(_o)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(go.geometry=this.geometry,go.material=this.material,go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_o.copy(this.boundingSphere),_o.applyMatrix4(i),e.ray.intersectsSphere(_o)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ys),Tf.multiplyMatrices(i,ys),go.matrixWorld=Tf,go.raycast(e,Ia);for(let o=0,a=Ia.length;o<a;o++){const l=Ia[o];l.instanceId=s,l.object=this,t.push(l)}Ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Af=new L,wf=new L,bf=new ze,Nc=new Zo,Da=new Pi;class Pl extends ft{constructor(e=new en,t=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Af.fromBufferAttribute(t,r-1),wf.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Af.distanceTo(wf);e.setAttribute("lineDistance",new Un(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(r),Da.radius+=s,e.ray.intersectsSphere(Da)===!1)return;bf.copy(r).invert(),Nc.copy(e.ray).applyMatrix4(bf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,h=new L,d=new L,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const p=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let v=p,M=E-1;v<M;v+=f){const T=g.getX(v),R=g.getX(v+1);if(c.fromBufferAttribute(m,T),u.fromBufferAttribute(m,R),Nc.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(d);F<e.near||F>e.far||t.push({distance:F,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),E=Math.min(m.count,o.start+o.count);for(let v=p,M=E-1;v<M;v+=f){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Nc.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Rf=new L,Lf=new L;class Js extends Pl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Rf.fromBufferAttribute(t,r),Lf.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Rf.distanceTo(Lf);e.setAttribute("lineDistance",new Un(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mE extends Pl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class tg extends Ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pf=new ze,mu=new Zo,Ua=new Pi,Na=new L;class gE extends ft{constructor(e=new en,t=new tg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(r),Ua.radius+=s,e.ray.intersectsSphere(Ua)===!1)return;Pf.copy(r).invert(),mu.copy(e.ray).applyMatrix4(Pf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Na.fromBufferAttribute(h,m),Cf(Na,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Na.fromBufferAttribute(h,g),Cf(Na,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Cf(n,e,t,i,r,s,o){const a=mu.distanceSqToPoint(n);if(a<t){const l=new L;mu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Zu extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gu,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zi extends Zu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Oa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function _E(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function vE(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function If(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function ng(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class Jo{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class xE extends Jo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wd,endingEnd:wd}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case bd:s=e,a=2*t-i;break;case Rd:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case bd:o=e,l=2*i-t;break;case Rd:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,E=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let T=0;T!==a;++T)s[T]=p*o[u+T]+E*o[c+T]+v*o[l+T]+M*o[h+T];return s}}class yE extends Jo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class ME extends Jo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ci{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oa(t,this.TimeBufferType),this.values=Oa(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Oa(e.times,Array),values:Oa(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ME(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fo:t=this.InterpolantFactoryMethodDiscrete;break;case ks:t=this.InterpolantFactoryMethodLinear;break;case cc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fo;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return cc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&_E(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===cc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*i,d=h-i,f=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=ks;class eo extends Ci{}eo.prototype.ValueTypeName="bool";eo.prototype.ValueBufferType=Array;eo.prototype.DefaultInterpolation=Fo;eo.prototype.InterpolantFactoryMethodLinear=void 0;eo.prototype.InterpolantFactoryMethodSmooth=void 0;class ig extends Ci{}ig.prototype.ValueTypeName="color";class Gs extends Ci{}Gs.prototype.ValueTypeName="number";class EE extends Jo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ke.slerpFlat(s,0,o,c-a,o,c,l);return s}}class $r extends Ci{InterpolantFactoryMethodLinear(e){return new EE(this.times,this.values,this.getValueSize(),e)}}$r.prototype.ValueTypeName="quaternion";$r.prototype.DefaultInterpolation=ks;$r.prototype.InterpolantFactoryMethodSmooth=void 0;class to extends Ci{}to.prototype.ValueTypeName="string";to.prototype.ValueBufferType=Array;to.prototype.DefaultInterpolation=Fo;to.prototype.InterpolantFactoryMethodLinear=void 0;to.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends Ci{}Ws.prototype.ValueTypeName="vector";class TE{constructor(e,t=-1,i,r=Cv){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ui(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(AE(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Ci.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=vE(l);l=If(l,1,u),c=If(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Gs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];ng(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let E=0;E!==d[g].morphTargets.length;++E){const v=d[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}r.push(new Gs(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";i(Ws,f+".position",d,"pos",r),i($r,f+".quaternion",d,"rot",r),i(Ws,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function SE(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gs;case"vector":case"vector2":case"vector3":case"vector4":return Ws;case"color":return ig;case"quaternion":return $r;case"bool":case"boolean":return eo;case"string":return to}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function AE(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=SE(n.type);if(n.times===void 0){const t=[],i=[];ng(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Xs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class wE{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const bE=new wE;class no{constructor(e){this.manager=e!==void 0?e:bE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}no.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hi={};class RE extends Error{constructor(e,t){super(e),this.response=t}}class rg extends no{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Xs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:i,onError:r});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Hi[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){E();function E(){h.read().then(({done:v,value:M})=>{if(v)p.close();else{_+=M.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,A=u.length;R<A;R++){const F=u[R];F.onProgress&&F.onProgress(T)}p.enqueue(M),E()}})}}});return new Response(m)}else throw new RE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Xs.add(e,c);const u=Hi[e];delete Hi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Hi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Hi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class sg extends no{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Bo("img");function l(){u(),Xs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class LE extends no{constructor(e){super(e)}load(e,t,i,r){const s=new an,o=new sg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Qu extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Oc=new ze,Df=new L,Uf=new L;class Ju{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ju,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Df.setFromMatrixPosition(e.matrixWorld),t.position.copy(Df),Uf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uf),t.updateMatrixWorld(),Oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class PE extends Ju{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=zs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class CE extends Qu{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new PE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Nf=new ze,vo=new L,Fc=new L;class IE extends Ju{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),vo.setFromMatrixPosition(e.matrixWorld),i.position.copy(vo),Fc.copy(i.position),Fc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Fc),i.updateMatrixWorld(),r.makeTranslation(-vo.x,-vo.y,-vo.z),Nf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nf)}}class DE extends Qu{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new IE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class UE extends Ju{constructor(){super(new Yu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class og extends Qu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new UE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Co{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class NE extends no{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Xs.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class OE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Of(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Of();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Of(){return(typeof performance>"u"?Date:performance).now()}const eh="\\[\\]\\.:\\/",FE=new RegExp("["+eh+"]","g"),th="[^"+eh+"]",BE="[^"+eh.replace("\\.","")+"]",HE=/((?:WC+[\/:])*)/.source.replace("WC",th),kE=/(WCOD+)?/.source.replace("WCOD",BE),zE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),VE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),GE=new RegExp("^"+HE+kE+zE+VE+"$"),WE=["material","materials","bones","map"];class XE{constructor(e,t,i){const r=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class lt{constructor(e,t,i){this.path=t,this.parsedPath=i||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,i):new lt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(FE,"")}static parseTrackName(e){const t=GE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);WE.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=XE;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ff{constructor(e,t,i,r,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class Bf{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(sn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jE extends Js{constructor(e=10,t=10,i=4473924,r=8947848){i=new Me(i),r=new Me(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===s?i:r;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const u=new en;u.setAttribute("position",new Un(l,3)),u.setAttribute("color",new Un(c,3));const h=new xr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class qE extends Js{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new en;r.setAttribute("position",new Un(t,3)),r.setAttribute("color",new Un(i,3));const s=new xr({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Me,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ci}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ci);const Hf={type:"change"},Bc={type:"start"},kf={type:"end"},Fa=new Zo,zf=new ar,YE=Math.cos(70*Ht.DEG2RAD);class KE extends Jr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ns.ROTATE,MIDDLE:ns.DOLLY,RIGHT:ns.PAN},this.touches={ONE:is.ROTATE,TWO:is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",y),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",y),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Hf),i.update(),s=r.NONE},this.update=function(){const P=new L,te=new ke().setFromUnitVectors(e.up,new L(0,1,0)),q=te.clone().invert(),be=new L,xe=new ke,Te=new L,me=2*Math.PI;return function(Ke=null){const C=i.object.position;P.copy(C).sub(i.target),P.applyQuaternion(te),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&z(x(Ke)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ue=i.minAzimuthAngle,J=i.maxAzimuthAngle;isFinite(ue)&&isFinite(J)&&(ue<-Math.PI?ue+=me:ue>Math.PI&&(ue-=me),J<-Math.PI?J+=me:J>Math.PI&&(J-=me),ue<=J?a.theta=Math.max(ue,Math.min(J,a.theta)):a.theta=a.theta>(ue+J)/2?Math.max(ue,a.theta):Math.min(J,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?a.radius=$(a.radius):a.radius=$(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(q),C.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let X=!1;if(i.zoomToCursor&&R){let se=null;if(i.object.isPerspectiveCamera){const Se=P.length();se=$(Se*c);const je=Se-se;i.object.position.addScaledVector(M,je),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Se=new L(T.x,T.y,0);Se.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),X=!0;const je=new L(T.x,T.y,0);je.unproject(i.object),i.object.position.sub(je).add(Se),i.object.updateMatrixWorld(),se=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;se!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(se).add(i.object.position):(Fa.origin.copy(i.object.position),Fa.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Fa.direction))<YE?e.lookAt(i.target):(zf.setFromNormalAndCoplanarPoint(i.object.up,i.target),Fa.intersectPlane(zf,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),X=!0);return c=1,R=!1,X||be.distanceToSquared(i.object.position)>o||8*(1-xe.dot(i.object.quaternion))>o||Te.distanceToSquared(i.target)>0?(i.dispatchEvent(Hf),be.copy(i.object.position),xe.copy(i.object.quaternion),Te.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ee),i.domElement.removeEventListener("pointerdown",We),i.domElement.removeEventListener("pointercancel",Xe),i.domElement.removeEventListener("wheel",w),i.domElement.removeEventListener("pointermove",Ne),i.domElement.removeEventListener("pointerup",Xe),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",y),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Bf,l=new Bf;let c=1;const u=new L,h=new Le,d=new Le,f=new Le,g=new Le,_=new Le,m=new Le,p=new Le,E=new Le,v=new Le,M=new L,T=new Le;let R=!1;const A=[],F={};function x(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function b(){return Math.pow(.95,i.zoomSpeed)}function z(P){l.theta-=P}function G(P){l.phi-=P}const Q=function(){const P=new L;return function(q,be){P.setFromMatrixColumn(be,0),P.multiplyScalar(-q),u.add(P)}}(),I=function(){const P=new L;return function(q,be){i.screenSpacePanning===!0?P.setFromMatrixColumn(be,1):(P.setFromMatrixColumn(be,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(q),u.add(P)}}(),V=function(){const P=new L;return function(q,be){const xe=i.domElement;if(i.object.isPerspectiveCamera){const Te=i.object.position;P.copy(Te).sub(i.target);let me=P.length();me*=Math.tan(i.object.fov/2*Math.PI/180),Q(2*q*me/xe.clientHeight,i.object.matrix),I(2*be*me/xe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Q(q*(i.object.right-i.object.left)/i.object.zoom/xe.clientWidth,i.object.matrix),I(be*(i.object.top-i.object.bottom)/i.object.zoom/xe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Y(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(P){if(!i.zoomToCursor)return;R=!0;const te=i.domElement.getBoundingClientRect(),q=P.clientX-te.left,be=P.clientY-te.top,xe=te.width,Te=te.height;T.x=q/xe*2-1,T.y=-(be/Te)*2+1,M.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function $(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function K(P){h.set(P.clientX,P.clientY)}function oe(P){ie(P),p.set(P.clientX,P.clientY)}function ce(P){g.set(P.clientX,P.clientY)}function W(P){d.set(P.clientX,P.clientY),f.subVectors(d,h).multiplyScalar(i.rotateSpeed);const te=i.domElement;z(2*Math.PI*f.x/te.clientHeight),G(2*Math.PI*f.y/te.clientHeight),h.copy(d),i.update()}function Z(P){E.set(P.clientX,P.clientY),v.subVectors(E,p),v.y>0?Y(b()):v.y<0&&j(b()),p.copy(E),i.update()}function de(P){_.set(P.clientX,P.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),V(m.x,m.y),g.copy(_),i.update()}function ge(P){ie(P),P.deltaY<0?j(b()):P.deltaY>0&&Y(b()),i.update()}function ve(P){let te=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,i.keyPanSpeed),te=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,-i.keyPanSpeed),te=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(i.keyPanSpeed,0),te=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(-i.keyPanSpeed,0),te=!0;break}te&&(P.preventDefault(),i.update())}function Ue(){if(A.length===1)h.set(A[0].pageX,A[0].pageY);else{const P=.5*(A[0].pageX+A[1].pageX),te=.5*(A[0].pageY+A[1].pageY);h.set(P,te)}}function Pe(){if(A.length===1)g.set(A[0].pageX,A[0].pageY);else{const P=.5*(A[0].pageX+A[1].pageX),te=.5*(A[0].pageY+A[1].pageY);g.set(P,te)}}function we(){const P=A[0].pageX-A[1].pageX,te=A[0].pageY-A[1].pageY,q=Math.sqrt(P*P+te*te);p.set(0,q)}function Ve(){i.enableZoom&&we(),i.enablePan&&Pe()}function N(){i.enableZoom&&we(),i.enableRotate&&Ue()}function zt(P){if(A.length==1)d.set(P.pageX,P.pageY);else{const q=he(P),be=.5*(P.pageX+q.x),xe=.5*(P.pageY+q.y);d.set(be,xe)}f.subVectors(d,h).multiplyScalar(i.rotateSpeed);const te=i.domElement;z(2*Math.PI*f.x/te.clientHeight),G(2*Math.PI*f.y/te.clientHeight),h.copy(d)}function Ee(P){if(A.length===1)_.set(P.pageX,P.pageY);else{const te=he(P),q=.5*(P.pageX+te.x),be=.5*(P.pageY+te.y);_.set(q,be)}m.subVectors(_,g).multiplyScalar(i.panSpeed),V(m.x,m.y),g.copy(_)}function Ge(P){const te=he(P),q=P.pageX-te.x,be=P.pageY-te.y,xe=Math.sqrt(q*q+be*be);E.set(0,xe),v.set(0,Math.pow(E.y/p.y,i.zoomSpeed)),Y(v.y),p.copy(E)}function Ce(P){i.enableZoom&&Ge(P),i.enablePan&&Ee(P)}function ht(P){i.enableZoom&&Ge(P),i.enableRotate&&zt(P)}function We(P){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",Ne),i.domElement.addEventListener("pointerup",Xe)),ne(P),P.pointerType==="touch"?O(P):Ot(P))}function Ne(P){i.enabled!==!1&&(P.pointerType==="touch"?re(P):Pt(P))}function Xe(P){_e(P),A.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",Ne),i.domElement.removeEventListener("pointerup",Xe)),i.dispatchEvent(kf),s=r.NONE}function Ot(P){let te;switch(P.button){case 0:te=i.mouseButtons.LEFT;break;case 1:te=i.mouseButtons.MIDDLE;break;case 2:te=i.mouseButtons.RIGHT;break;default:te=-1}switch(te){case ns.DOLLY:if(i.enableZoom===!1)return;oe(P),s=r.DOLLY;break;case ns.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;ce(P),s=r.PAN}else{if(i.enableRotate===!1)return;K(P),s=r.ROTATE}break;case ns.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;K(P),s=r.ROTATE}else{if(i.enablePan===!1)return;ce(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Bc)}function Pt(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;W(P);break;case r.DOLLY:if(i.enableZoom===!1)return;Z(P);break;case r.PAN:if(i.enablePan===!1)return;de(P);break}}function w(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(Bc),ge(P),i.dispatchEvent(kf))}function y(P){i.enabled===!1||i.enablePan===!1||ve(P)}function O(P){switch(ae(P),A.length){case 1:switch(i.touches.ONE){case is.ROTATE:if(i.enableRotate===!1)return;Ue(),s=r.TOUCH_ROTATE;break;case is.PAN:if(i.enablePan===!1)return;Pe(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case is.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ve(),s=r.TOUCH_DOLLY_PAN;break;case is.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;N(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Bc)}function re(P){switch(ae(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;zt(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ee(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ce(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ht(P),i.update();break;default:s=r.NONE}}function ee(P){i.enabled!==!1&&P.preventDefault()}function ne(P){A.push(P)}function _e(P){delete F[P.pointerId];for(let te=0;te<A.length;te++)if(A[te].pointerId==P.pointerId){A.splice(te,1);return}}function ae(P){let te=F[P.pointerId];te===void 0&&(te=new Le,F[P.pointerId]=te),te.set(P.pageX,P.pageY)}function he(P){const te=P.pointerId===A[0].pointerId?A[1]:A[0];return F[te.pointerId]}i.domElement.addEventListener("contextmenu",ee),i.domElement.addEventListener("pointerdown",We),i.domElement.addEventListener("pointercancel",Xe),i.domElement.addEventListener("wheel",w,{passive:!1}),this.update()}}function Vf(n,e){if(e===Iv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===cu||e===Lm){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===cu)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class $E extends no{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new tT(t)}),this.register(function(t){return new uT(t)}),this.register(function(t){return new hT(t)}),this.register(function(t){return new dT(t)}),this.register(function(t){return new iT(t)}),this.register(function(t){return new rT(t)}),this.register(function(t){return new sT(t)}),this.register(function(t){return new oT(t)}),this.register(function(t){return new eT(t)}),this.register(function(t){return new aT(t)}),this.register(function(t){return new nT(t)}),this.register(function(t){return new cT(t)}),this.register(function(t){return new lT(t)}),this.register(function(t){return new QE(t)}),this.register(function(t){return new fT(t)}),this.register(function(t){return new pT(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Co.extractUrlBase(e);o=Co.resolveURL(c,this.path)}else o=Co.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new rg(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ag){try{o[et.KHR_BINARY_GLTF]=new mT(e)}catch(h){r&&r(h);return}s=JSON.parse(o[et.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new RT(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case et.KHR_MATERIALS_UNLIT:o[h]=new JE;break;case et.KHR_DRACO_MESH_COMPRESSION:o[h]=new gT(s,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:o[h]=new _T;break;case et.KHR_MESH_QUANTIZATION:o[h]=new vT;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function ZE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class QE{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Me(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],ln);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new og(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new DE(u),c.distance=h;break;case"spot":c=new CE(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,lr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class JE{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return ji}extendParams(e,t,i){const r=[];e.color=new Me(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ln),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Dt))}return Promise.all(r)}}class eT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class tT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Le(a,a)}return Promise.all(s)}}class nT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class iT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],ln)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Dt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class rT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class sT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(a[0],a[1],a[2],ln),Promise.all(s)}}class oT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class aT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(a[0],a[1],a[2],ln),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Dt)),Promise.all(s)}}class lT{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class cT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class uT{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class hT{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class dT{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class fT{constructor(e){this.name=et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,r.mode,r.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,r.mode,r.filter),f})})}else return null}}class pT{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Gn.TRIANGLES&&c.mode!==Gn.TRIANGLE_STRIP&&c.mode!==Gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const _=new ze,m=new L,p=new ke,E=new L(1,1,1),v=new pE(g.geometry,g.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&E.fromBufferAttribute(l.SCALE,M),v.setMatrixAt(M,_.compose(m,p,E));for(const M in l)if(M==="_COLOR_0"){const T=l[M];v.instanceColor=new pu(T.array,T.itemSize,T.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);ft.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const ag="glTF",xo=12,Gf={JSON:1313821514,BIN:5130562};class mT{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,xo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ag)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-xo,s=new DataView(e,xo);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Gf.JSON){const c=new Uint8Array(e,xo+o,a);this.content=i.decode(c)}else if(l===Gf.BIN){const c=xo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class gT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=gu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=gu[u]||u.toLowerCase();if(o[u]!==void 0){const d=i.accessors[e.attributes[u]],f=Us[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){r.decodeDracoFile(u,function(d){for(const f in d.attributes){const g=d.attributes[f],_=l[f];_!==void 0&&(g.normalized=_)}h(d)},a,c)})})}}class _T{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class vT{constructor(){this.name=et.KHR_MESH_QUANTIZATION}}class lg extends Jo{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(i-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,E=1-m,v=p-d+h;for(let M=0;M!==a;M++){const T=o[_+M+a],R=o[_+M+l]*u,A=o[g+M+a],F=o[g+M]*u;s[M]=E*T+v*R+m*A+p*F}return s}}const xT=new ke;class yT extends lg{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return xT.fromArray(s).normalize().toArray(s),s}}const Gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Us={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wf={9728:Jt,9729:En,9984:lu,9985:Mm,9986:qa,9987:qr},Xf={33071:jn,33648:al,10497:Bs},Hc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},sr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},MT={CUBICSPLINE:void 0,LINEAR:ks,STEP:Fo},kc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ET(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Zu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yi})),n.DefaultMaterial}function Pr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function lr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function TT(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(d)}if(r){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function ST(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function AT(n){let e;const t=n.extensions&&n.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+zc(t.attributes):e=n.indices+":"+zc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+zc(n.targets[i]);return e}function zc(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function _u(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wT(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const bT=new ze;class RT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ZE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new LE(this.options.manager):this.textureLoader=new NE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Pr(s,a,r),lr(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Co.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Hc[r.type],a=Us[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new mt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Hc[r.type],c=Us[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=r.byteOffset||0,f=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),E="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let v=t.cache.get(E);v||(_=new c(a,p*f,r.count*f/u),v=new cE(_,f/u),t.cache.add(E,v)),m=new $u(v,l,d%f/u,g)}else a===null?_=new c(r.count*l):_=new c(a,d,r.count*l),m=new mt(_,l,g);if(r.sparse!==void 0){const p=Hc.SCALAR,E=Us[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,T=new E(o[1],v,r.sparse.count*p),R=new c(o[2],M,r.sparse.count*l);a!==null&&(m=new mt(m.array.slice(),m.itemSize,m.normalized));for(let A=0,F=T.length;A<F;A++){const x=T[A];if(m.setX(x,R[A*l]),l>=2&&m.setY(x,R[A*l+1]),l>=3&&m.setZ(x,R[A*l+2]),l>=4&&m.setW(x,R[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Wf[d.magFilter]||En,u.minFilter=Wf[d.minFilter]||qr,u.wrapS=Xf[d.wrapS]||Bs,u.wrapT=Xf[d.wrapT]||Bs,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new an(_);m.needsUpdate=!0,d(m)}),t.load(Co.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||wT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[et.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new tg,Ai.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new xr,Ai.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Zu}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[et.KHR_MATERIALS_UNLIT]){const h=r[et.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Me(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],ln),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Dt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Xn);const u=s.alphaMode||kc.OPAQUE;if(u===kc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===kc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ji&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Le(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==ji&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ji){const h=s.emissiveFactor;a.emissive=new Me().setRGB(h[0],h[1],h[2],ln)}return s.emissiveTexture!==void 0&&o!==ji&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Dt)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),lr(h,s),t.associations.set(h,{materials:e}),s.extensions&&Pr(r,h,s),h})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return jf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=AT(c),h=r[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[et.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=jf(new en,c,t),r[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?ET(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const E=c[f];if(m.mode===Gn.TRIANGLES||m.mode===Gn.TRIANGLE_STRIP||m.mode===Gn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Jm(_,E):new Tn(_,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Gn.TRIANGLE_STRIP?p.geometry=Vf(p.geometry,Lm):m.mode===Gn.TRIANGLE_FAN&&(p.geometry=Vf(p.geometry,cu));else if(m.mode===Gn.LINES)p=new Js(_,E);else if(m.mode===Gn.LINE_STRIP)p=new Pl(_,E);else if(m.mode===Gn.LINE_LOOP)p=new mE(_,E);else if(m.mode===Gn.POINTS)p=new gE(_,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ST(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),lr(p,s),m.extensions&&Pr(r,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&Pr(r,h[0],s),h[0];const d=new Dn;s.extensions&&Pr(r,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new mn(Ht.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Yu(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),lr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new ze;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ll(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=r.channels.length;h<d;h++){const f=r.channels[h],g=r.samplers[f.sampler],_=f.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,E=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",E)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let E=0,v=d.length;E<v;E++){const M=d[E],T=f[E],R=g[E],A=_[E],F=m[E];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const x=i._createAnimationTracks(M,T,R,A,F);if(x)for(let b=0;b<x.length;b++)p.push(x[b])}return new TE(s,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,bT)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new eg:c.length>1?u=new Dn:c.length===1?u=c[0]:u=new ft,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),lr(u,s),s.extensions&&Pr(i,u,s),s.matrix!==void 0){const h=new ze;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Dn;i.name&&(s.name=r.createUniqueName(i.name)),lr(s,i),i.extensions&&Pr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of r.associations)(d instanceof Ai||d instanceof an)&&h.set(d,f);return u.traverse(d=>{const f=r.associations.get(d);f!=null&&h.set(d,f)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];sr[s.path]===sr.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(sr[s.path]){case sr.weights:c=Gs;break;case sr.rotation:c=$r;break;case sr.position:case sr.scale:c=Ws;break;default:switch(i.itemSize){case 1:c=Gs;break;case 2:case 3:default:c=Ws;break}break}const u=r.interpolation!==void 0?MT[r.interpolation]:ks,h=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+sr[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=_u(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof $r?yT:lg;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function LT(n,e,t){const i=e.attributes,r=new $i;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const u=_u(Us[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new L,l=new L;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=_u(Us[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Pi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function jf(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=gu[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return ot.workingColorSpace!==ln&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),lr(n,e),LT(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?TT(n,e.targets,t):n})}var Cl=typeof self<"u"?self:{};function vu(n,e){e:{for(var t=["CLOSURE_FLAGS"],i=Cl,r=0;r<t.length;r++)if((i=i[t[r]])==null){t=null;break e}t=i}return(n=t&&t[n])!=null?n:e}function Cr(){throw Error("Invalid UTF8")}function qf(n,e){return e=String.fromCharCode.apply(null,e),n==null?e:n+e}let Ba,Vc;const PT=typeof TextDecoder<"u";let CT;const IT=typeof TextEncoder<"u";function cg(n){if(IT)n=(CT||(CT=new TextEncoder)).encode(n);else{let t=0;const i=new Uint8Array(3*n.length);for(let r=0;r<n.length;r++){var e=n.charCodeAt(r);if(128>e)i[t++]=e;else{if(2048>e)i[t++]=e>>6|192;else{if(55296<=e&&57343>=e){if(56319>=e&&r<n.length){const s=n.charCodeAt(++r);if(56320<=s&&57343>=s){e=1024*(e-55296)+s-56320+65536,i[t++]=e>>18|240,i[t++]=e>>12&63|128,i[t++]=e>>6&63|128,i[t++]=63&e|128;continue}r--}e=65533}i[t++]=e>>12|224,i[t++]=e>>6&63|128}i[t++]=63&e|128}}n=t===i.length?i:i.subarray(0,t)}return n}var Ho,ug=vu(610401301,!1),nh=vu(572417392,vu(1,!0));const Yf=Cl.navigator;function xu(n){return!!ug&&!!Ho&&Ho.brands.some(({brand:e})=>e&&e.indexOf(n)!=-1)}function Wn(n){var e;return(e=Cl.navigator)&&(e=e.userAgent)||(e=""),e.indexOf(n)!=-1}function cr(){return!!ug&&!!Ho&&0<Ho.brands.length}function Gc(){return cr()?xu("Chromium"):(Wn("Chrome")||Wn("CriOS"))&&!(!cr()&&Wn("Edge"))||Wn("Silk")}Ho=Yf&&Yf.userAgentData||null;var DT=!cr()&&(Wn("Trident")||Wn("MSIE"));!Wn("Android")||Gc(),Gc(),Wn("Safari")&&(Gc()||!cr()&&Wn("Coast")||!cr()&&Wn("Opera")||!cr()&&Wn("Edge")||(cr()?xu("Microsoft Edge"):Wn("Edg/"))||cr()&&xu("Opera"));var hg={},Ao=null;function UT(n){var e=n.length,t=3*e/4;t%3?t=Math.floor(t):"=.".indexOf(n[e-1])!=-1&&(t="=.".indexOf(n[e-2])!=-1?t-2:t-1);var i=new Uint8Array(t),r=0;return function(s,o){function a(f){for(;l<s.length;){var g=s.charAt(l++),_=Ao[g];if(_!=null)return _;if(!/^[\s\xa0]*$/.test(g))throw Error("Unknown base64 encoding at char: "+g)}return f}dg();for(var l=0;;){var c=a(-1),u=a(0),h=a(64),d=a(64);if(d===64&&c===-1)break;o(c<<2|u>>4),h!=64&&(o(u<<4&240|h>>2),d!=64&&o(h<<6&192|d))}}(n,function(s){i[r++]=s}),r!==t?i.subarray(0,r):i}function dg(){if(!Ao){Ao={};for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],t=0;5>t;t++){var i=n.concat(e[t].split(""));hg[t]=i;for(var r=0;r<i.length;r++){var s=i[r];Ao[s]===void 0&&(Ao[s]=r)}}}}var fg=typeof Uint8Array<"u",pg=!DT&&typeof btoa=="function";function Kf(n){if(!pg){var e;e===void 0&&(e=0),dg(),e=hg[e];var t=Array(Math.floor(n.length/3)),i=e[64]||"";let l=0,c=0;for(;l<n.length-2;l+=3){var r=n[l],s=n[l+1],o=n[l+2],a=e[r>>2];r=e[(3&r)<<4|s>>4],s=e[(15&s)<<2|o>>6],o=e[63&o],t[c++]=a+r+s+o}switch(a=0,o=i,n.length-l){case 2:o=e[(15&(a=n[l+1]))<<2]||i;case 1:n=n[l],t[c]=e[n>>2]+e[(3&n)<<4|a>>4]+o+i}return t.join("")}for(e="",t=0,i=n.length-10240;t<i;)e+=String.fromCharCode.apply(null,n.subarray(t,t+=10240));return e+=String.fromCharCode.apply(null,t?n.subarray(t):n),btoa(e)}const $f=/[-_.]/g,NT={"-":"+",_:"/",".":"="};function OT(n){return NT[n]||""}function mg(n){if(!pg)return UT(n);$f.test(n)&&(n=n.replace($f,OT)),n=atob(n);const e=new Uint8Array(n.length);for(let t=0;t<n.length;t++)e[t]=n.charCodeAt(t);return e}function Il(n){return fg&&n!=null&&n instanceof Uint8Array}let FT;function Dl(){return FT||(FT=new Uint8Array(0))}var js={};let BT;function gg(n){if(n!==js)throw Error("illegal external caller")}function qs(){return BT||(BT=new pr(null,js))}function ih(n){gg(js);var e=n.T;return(e=e==null||Il(e)?e:typeof e=="string"?mg(e):null)==null?e:n.T=e}var pr=class{constructor(n,e){if(gg(e),this.T=n,n!=null&&n.length===0)throw Error("ByteString should be constructed with non-empty values")}qa(){const n=ih(this);return n?new Uint8Array(n):Dl()}};function _g(n,e){return Error(`Invalid wire type: ${n} (at position ${e})`)}function rh(){return Error("Failed to read varint, encoding is invalid.")}function vg(n,e){return Error(`Tried to read past the end of the data ${e} > ${n}`)}function xg(n){return n.length==0?qs():new pr(n,js)}function sh(n){if(typeof n=="string")return{buffer:mg(n),H:!1};if(Array.isArray(n))return{buffer:new Uint8Array(n),H:!1};if(n.constructor===Uint8Array)return{buffer:n,H:!1};if(n.constructor===ArrayBuffer)return{buffer:new Uint8Array(n),H:!1};if(n.constructor===pr)return{buffer:ih(n)||Dl(),H:!0};if(n instanceof Uint8Array)return{buffer:new Uint8Array(n.buffer,n.byteOffset,n.byteLength),H:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function oh(){return typeof BigInt=="function"}var yu=!nh;let Zf=!nh;const HT=typeof Uint8Array.prototype.slice=="function";let yg,It=0,rn=0;function Ul(n){const e=0>n;let t=(n=Math.abs(n))>>>0;if(n=Math.floor((n-t)/4294967296),e){const[i,r]=lh(t,n);n=r,t=i}It=t>>>0,rn=n>>>0}function ah(n){const e=yg||(yg=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+n,!0),rn=0,It=e.getUint32(0,!0)}function Mg(n,e){return 4294967296*e+(n>>>0)}function Eg(n,e){const t=2147483648&e;return t&&(e=~e>>>0,(n=1+~n>>>0)==0&&(e=e+1>>>0)),n=Mg(n,e),t?-n:n}function Mu(n,e){if(n>>>=0,2097151>=(e>>>=0))var t=""+(4294967296*e+n);else oh()?t=""+(BigInt(e)<<BigInt(32)|BigInt(n)):(n=(16777215&n)+6777216*(t=16777215&(n>>>24|e<<8))+6710656*(e=e>>16&65535),t+=8147497*e,e*=2,1e7<=n&&(t+=Math.floor(n/1e7),n%=1e7),1e7<=t&&(e+=Math.floor(t/1e7),t%=1e7),t=e+Qf(t)+Qf(n));return t}function Qf(n){return n=String(n),"0000000".slice(n.length)+n}function Tg(){var n=It,e=rn;if(2147483648&e)if(oh())n=""+(BigInt(0|e)<<BigInt(32)|BigInt(n>>>0));else{const[t,i]=lh(n,e);n="-"+Mu(t,i)}else n=Mu(n,e);return n}function Nl(n){if(16>n.length)Ul(Number(n));else if(oh())n=BigInt(n),It=Number(n&BigInt(4294967295))>>>0,rn=Number(n>>BigInt(32)&BigInt(4294967295));else{const e=+(n[0]==="-");rn=It=0;const t=n.length;for(let i=e,r=(t-e)%6+e;r<=t;i=r,r+=6){const s=Number(n.slice(i,r));rn*=1e6,It=1e6*It+s,4294967296<=It&&(rn+=Math.trunc(It/4294967296),rn>>>=0,It>>>=0)}if(e){const[i,r]=lh(It,rn);It=i,rn=r}}}function lh(n,e){return e=~e,n?n=1+~n:e+=1,[n,e]}function Eu(n,e,{W:t=!1}={}){n.W=t,e&&(e=sh(e),n.h=e.buffer,n.u=e.H,n.v=0,n.l=n.h.length,n.g=n.v)}function Xr(n,e){if(n.g=e,e>n.l)throw vg(n.l,e)}function ch(n,e){let t,i=0,r=0,s=0;const o=n.h;let a=n.g;do t=o[a++],i|=(127&t)<<s,s+=7;while(32>s&&128&t);for(32<s&&(r|=(127&t)>>4),s=3;32>s&&128&t;s+=7)t=o[a++],r|=(127&t)<<s;if(Xr(n,a),128>t)return e(i>>>0,r>>>0);throw rh()}function uh(n){let e=0,t=n.g;const i=t+10,r=n.h;for(;t<i;){const s=r[t++];if(e|=s,(128&s)==0)return Xr(n,t),!!(127&e)}throw rh()}function Tu(n){var e=n.h;const t=n.g,i=e[t],r=e[t+1],s=e[t+2];return e=e[t+3],Xr(n,n.g+4),(i<<0|r<<8|s<<16|e<<24)>>>0}function Sg(n,e){if(0>e)throw Error(`Tried to read a negative byte length: ${e}`);const t=n.g,i=t+e;if(i>n.l)throw vg(e,n.l-t);return n.g=i,t}function Ag(n,e){if(e==0)return qs();var t=Sg(n,e);return n.W&&n.u?t=n.h.subarray(t,t+e):(n=n.h,t=t===(e=t+e)?Dl():HT?n.slice(t,e):new Uint8Array(n.subarray(t,e))),xg(t)}var ea=class{constructor(n,e){this.h=null,this.u=!1,this.g=this.l=this.v=0,Eu(this,n,e)}clear(){this.h=null,this.u=!1,this.g=this.l=this.v=0,this.W=!1}m(){const n=this.h;let e=this.g,t=n[e++],i=127&t;if(128&t&&(t=n[e++],i|=(127&t)<<7,128&t&&(t=n[e++],i|=(127&t)<<14,128&t&&(t=n[e++],i|=(127&t)<<21,128&t&&(t=n[e++],i|=t<<28,128&t&&128&n[e++]&&128&n[e++]&&128&n[e++]&&128&n[e++]&&128&n[e++])))))throw rh();return Xr(this,e),i}j(){return this.m()>>>0}B(){var n=Tu(this);const e=2*(n>>31)+1,t=n>>>23&255;return n&=8388607,t==255?n?NaN:1/0*e:t==0?e*Math.pow(2,-149)*n:e*Math.pow(2,t-150)*(n+Math.pow(2,23))}C(){return this.m()}},Jf=[];function wg(n){var e=n.g;if(e.g==e.l)return!1;n.l=n.g.g;var t=n.g.j();if(e=t>>>3,!(0<=(t&=7)&&5>=t))throw _g(t,n.l);if(1>e)throw Error(`Invalid field number: ${e} (at position ${n.l})`);return n.m=e,n.h=t,!0}function Ka(n){switch(n.h){case 0:n.h!=0?Ka(n):uh(n.g);break;case 1:Xr(n=n.g,n.g+8);break;case 2:if(n.h!=2)Ka(n);else{var e=n.g.j();Xr(n=n.g,n.g+e)}break;case 5:Xr(n=n.g,n.g+4);break;case 3:for(e=n.m;;){if(!wg(n))throw Error("Unmatched start-group tag: stream EOF");if(n.h==4){if(n.m!=e)throw Error("Unmatched end-group tag");break}Ka(n)}break;default:throw _g(n.h,n.l)}}function ta(n,e,t){const i=n.g.l,r=n.g.j(),s=n.g.g+r;let o=s-i;if(0>=o&&(n.g.l=s,t(e,n,void 0,void 0,void 0),o=s-n.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return n.g.g=s,n.g.l=i,e}function hh(n){var e=n.g.j(),t=Sg(n=n.g,e);if(n=n.h,PT){var i,r=n;(i=Vc)||(i=Vc=new TextDecoder("utf-8",{fatal:!0})),n=t+e,r=t===0&&n===r.length?r:r.subarray(t,n);try{var s=i.decode(r)}catch(a){if(Ba===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Ba=!0}catch{Ba=!1}}throw!Ba&&(Vc=void 0),a}}else{e=(s=t)+e,t=[];let a,l=null;for(;s<e;){var o=n[s++];128>o?t.push(o):224>o?s>=e?Cr():(a=n[s++],194>o||(192&a)!=128?(s--,Cr()):t.push((31&o)<<6|63&a)):240>o?s>=e-1?Cr():(a=n[s++],(192&a)!=128||o===224&&160>a||o===237&&160<=a||(192&(r=n[s++]))!=128?(s--,Cr()):t.push((15&o)<<12|(63&a)<<6|63&r)):244>=o?s>=e-2?Cr():(a=n[s++],(192&a)!=128||a-144+(o<<28)>>30||(192&(r=n[s++]))!=128||(192&(i=n[s++]))!=128?(s--,Cr()):(o=(7&o)<<18|(63&a)<<12|(63&r)<<6|63&i,o-=65536,t.push(55296+(o>>10&1023),56320+(1023&o)))):Cr(),8192<=t.length&&(l=qf(l,t),t.length=0)}s=qf(l,t)}return s}function bg(n){const e=n.g.j();return Ag(n.g,e)}function Ol(n,e,t){var i=n.g.j();for(i=n.g.g+i;n.g.g<i;)t.push(e.call(n.g))}var Ha=[];function ep(n){return n?/^\d+$/.test(n)?(Nl(n),new tp(It,rn)):null:kT||(kT=new tp(0,0))}var tp=class{constructor(n,e){this.h=n>>>0,this.g=e>>>0}};let kT;function np(n){return n?/^-?\d+$/.test(n)?(Nl(n),new ip(It,rn)):null:zT||(zT=new ip(0,0))}var ip=class{constructor(n,e){this.h=n>>>0,this.g=e>>>0}};let zT;function fl(n,e,t){for(;0<t||127<e;)n.g.push(127&e|128),e=(e>>>7|t<<25)>>>0,t>>>=7;n.g.push(e)}function na(n,e){for(;127<e;)n.g.push(127&e|128),e>>>=7;n.g.push(e)}function Fl(n,e){if(0<=e)na(n,e);else{for(let t=0;9>t;t++)n.g.push(127&e|128),e>>=7;n.g.push(1)}}function ko(n,e){n.g.push(e>>>0&255),n.g.push(e>>>8&255),n.g.push(e>>>16&255),n.g.push(e>>>24&255)}function Ys(n,e){e.length!==0&&(n.l.push(e),n.h+=e.length)}function ti(n,e,t){na(n.g,8*e+t)}function dh(n,e){return ti(n,e,2),e=n.g.end(),Ys(n,e),e.push(n.h),e}function fh(n,e){var t=e.pop();for(t=n.h+n.g.length()-t;127<t;)e.push(127&t|128),t>>>=7,n.h++;e.push(t),n.h++}function Bl(n,e,t){ti(n,e,2),na(n.g,t.length),Ys(n,n.g.end()),Ys(n,t)}function Su(n,e,t,i){t!=null&&(e=dh(n,e),i(t,n),fh(n,e))}class io{constructor(e,t,i,r){this.g=e,this.h=t,this.l=i,this.la=r}}function Sn(n){return Array.prototype.slice.call(n)}const wi=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;var Hl=wi?(n,e)=>{n[wi]|=e}:(n,e)=>{n.D!==void 0?n.D|=e:Object.defineProperties(n,{D:{value:e,configurable:!0,writable:!0,enumerable:!1}})};function rp(n){const e=bt(n);(1&e)!=1&&(Object.isFrozen(n)&&(n=Sn(n)),kt(n,1|e))}var pl=wi?(n,e)=>{n[wi]&=~e}:(n,e)=>{n.D!==void 0&&(n.D&=~e)};function nn(n,e,t){return t?n|e:n&~e}var bt=wi?n=>0|n[wi]:n=>0|n.D,nt=wi?n=>n[wi]:n=>n.D,kt=wi?(n,e)=>{n[wi]=e}:(n,e)=>{n.D!==void 0?n.D=e:Object.defineProperties(n,{D:{value:e,configurable:!0,writable:!0,enumerable:!1}})};function sp(){var n=[];return Hl(n,1),n}function ro(n){return Hl(n,34),n}function VT(n,e){kt(e,-14591&(0|n))}function Au(n,e){kt(e,-14557&(34|n))}function ml(n){return(n=n>>14&1023)===0?536870912:n}var ia={},Rg={};function op(n){return!(!n||typeof n!="object"||n.Ia!==Rg)}function Io(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)&&n.constructor===Object}let Lg=!nh;function Pg(n,e,t){if(n!=null){if(typeof n=="string")n=n?new pr(n,js):qs();else if(n.constructor!==pr)if(Il(n))n=t?xg(n):n.length?new pr(new Uint8Array(n),js):qs();else{if(!e)throw Error();n=void 0}}return n}function wu(n,e,t){if(!Array.isArray(n)||n.length)return!1;const i=bt(n);return!!(1&i)||!(!e||!(Array.isArray(e)?e.includes(t):e.has(t)))&&(kt(n,1|i),!0)}var Ps;const ap=[];function Ii(n){if(2&n)throw Error()}kt(ap,55),Ps=Object.freeze(ap);class gl{constructor(e,t,i){this.l=0,this.g=e,this.h=t,this.m=i}next(){if(this.l<this.g.length){const e=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,e):e}}return{done:!0,value:void 0}}[Symbol.iterator](){return new gl(this.g,this.h,this.m)}}var GT={};let mr,zo;function Cg(n,e){(e=mr?e[mr]:void 0)&&(n[mr]=Sn(e))}function Ig(n,e){n.__closure__error__context__984382||(n.__closure__error__context__984382={}),n.__closure__error__context__984382.severity=e}function Dg(n){return Ig(n=Error(n),"warning"),n}function yr(n){return n==null?n:typeof n=="number"||n==="NaN"||n==="Infinity"||n==="-Infinity"?Number(n):void 0}function Ug(n){return n==null?n:typeof n=="boolean"||typeof n=="number"?!!n:void 0}const WT=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function kl(n){const e=typeof n;return e==="number"?Number.isFinite(n):e==="string"&&WT.test(n)}function so(n){if(n==null)return n;if(typeof n=="string"){if(!n)return;n=+n}return typeof n=="number"?n:void 0}function XT(n){if(n==null)return n;if(typeof n=="string"){if(!n)return;n=+n}return typeof n=="number"?n:void 0}function ph(n){return Math.trunc(n)}function mh(n,e){var t=Math.trunc(Number(n));return Number.isSafeInteger(t)?String(t):((t=n.indexOf("."))!==-1&&(n=n.substring(0,t)),e&&(Nl(n),n=Tg()),n)}function _l(n){return n==null?n:kl(n)?typeof n=="number"?ph(n):mh(n,!1):void 0}function ra(n){if(typeof n!="string")throw Error();return n}function sa(n){if(n!=null&&typeof n!="string")throw Error();return n}function Vo(n){return n==null||typeof n=="string"?n:void 0}function gh(n,e,t,i){if(n!=null&&typeof n=="object"&&n.P===ia)return n;if(!Array.isArray(n))return t?2&i?(n=e[lp])?e=n:(ro((n=new e).s),e=e[lp]=n):e=new e:e=void 0,e;let r=t=bt(n);return r===0&&(r|=32&i),r|=2&i,r!==t&&kt(n,r),new e(n)}const lp=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():"di";function ka(n){return n}function jT(n,e,t){if(e){var i=!!i;if(!kl(e=n))throw Dg("int64");typeof e=="string"?i=mh(e,i):i?(e=Math.trunc(e),!i||Number.isSafeInteger(e)?i=String(e):(Ul(e),i=Tg())):i=ph(e)}else i=_l(n);return typeof(t=(n=i)==null?t?0:void 0:n)=="string"&&(i=+t,Number.isSafeInteger(i))?i:t}let vl,_h,qT;function xl(n){switch(typeof n){case"boolean":return _h||(_h=[0,void 0,!0]);case"number":return 0<n?void 0:n===0?qT||(qT=[0,void 0]):[-n,void 0];case"string":return[0,n];case"object":return n}}function jr(n,e){return Ng(n,e[0],e[1])}function Ng(n,e,t){if(n==null&&(n=vl),vl=void 0,n==null){var i=96;t?(n=[t],i|=512):n=[],e&&(i=-16760833&i|(1023&e)<<14)}else{if(!Array.isArray(n))throw Error();if(64&(i=bt(n)))return zo&&delete n[zo],n;if(i|=64,t&&(i|=512,t!==n[0]))throw Error();e:{if(t=i,i=n.length){const r=i-1;if(Io(n[r])){if(1024<=(e=r-(+!!(512&(t|=256))-1)))throw Error();i=-16760833&t|(1023&e)<<14;break e}}if(e){if(1024<(e=Math.max(e,i-(+!!(512&t)-1))))throw Error();i=-16760833&t|(1023&e)<<14}else i=t}}return kt(n,i),n}let YT=function(){try{return new class extends Map{constructor(){super()}},!1}catch{return!0}}();class Wc{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,t){return this.g.set(e,t),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,t){return this.g.forEach(e,t)}[Symbol.iterator](){return this.entries()}}const KT=YT?(Object.setPrototypeOf(Wc.prototype,Map.prototype),Object.defineProperties(Wc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Wc):class extends Map{constructor(){super()}};function Xc(n){if(2&n.I)throw Error("Cannot mutate an immutable Map")}var Qn=class extends KT{constructor(n,e,t=ka,i=ka){super();let r=bt(n);r|=64,kt(n,r),this.I=r,this.O=e,this.J=t||ka,this.S=this.O?$T:i||ka;for(let s=0;s<n.length;s++){const o=n[s],a=t(o[0],!1,!0);let l=o[1];e?l===void 0&&(l=null):l=i(o[1],!1,!0,void 0,void 0,r),super.set(a,l)}}ka(n=cp){return this.R(n)}R(n=cp){const e=[],t=super.entries();for(var i;!(i=t.next()).done;)(i=i.value)[0]=n(i[0]),i[1]=n(i[1]),e.push(i);return e}clear(){Xc(this),super.clear()}delete(n){return Xc(this),super.delete(this.J(n,!0,!1))}entries(){var n=this.ha();return new gl(n,ZT,this)}keys(){return this.Ha()}values(){var n=this.ha();return new gl(n,Qn.prototype.get,this)}forEach(n,e){super.forEach((t,i)=>{n.call(e,this.get(i),i,this)})}set(n,e){return Xc(this),(n=this.J(n,!0,!1))==null?this:e==null?(super.delete(n),this):super.set(n,this.S(e,!0,!0,this.O,!1,this.I))}Oa(n){const e=this.J(n[0],!1,!0);n=n[1],n=this.O?n===void 0?null:n:this.S(n,!1,!0,void 0,!1,this.I),super.set(e,n)}has(n){return super.has(this.J(n,!1,!1))}get(n){n=this.J(n,!1,!1);const e=super.get(n);if(e!==void 0){var t=this.O;return t?((t=this.S(e,!1,!0,t,this.ra,this.I))!==e&&super.set(n,t),t):e}}ha(){return Array.from(super.keys())}Ha(){return super.keys()}[Symbol.iterator](){return this.entries()}};function $T(n,e,t,i,r,s){return n=gh(n,i,t,s),r&&(n=zl(n)),n}function cp(n){return n}function ZT(n){return[n,this.get(n)]}function vh(n,e,t,i,r,s){if(n!=null){if(Array.isArray(n))n=r&&n.length==0&&1&bt(n)?void 0:s&&2&bt(n)?n:xh(n,e,t,i!==void 0,r,s);else if(Io(n)){const o={};for(let a in n)o[a]=vh(n[a],e,t,i,r,s);n=o}else n=e(n,i);return n}}function xh(n,e,t,i,r,s){const o=i||t?bt(n):0;i=i?!!(32&o):void 0;const a=Sn(n);for(let l=0;l<a.length;l++)a[l]=vh(a[l],e,t,i,r,s);return t&&(Cg(a,n),t(o,a)),a}function QT(n){return vh(n,Og,void 0,void 0,!1,!1)}function Og(n){return n.P===ia?n.toJSON():n instanceof Qn?n.ka(QT):function(e){switch(typeof e){case"number":return isFinite(e)?e:String(e);case"boolean":return e?1:0;case"object":if(e){if(Array.isArray(e))return Lg||!wu(e,void 0,9999)?e:void 0;if(Il(e))return Kf(e);if(e instanceof pr){const t=e.T;return t==null?"":typeof t=="string"?t:e.T=Kf(t)}if(e instanceof Qn)return e=e.ka(),yu||e.length!==0?e:void 0}}return e}(n)}function bu(n,e,t=Au){if(n!=null){if(fg&&n instanceof Uint8Array)return e?n:new Uint8Array(n);if(Array.isArray(n)){var i=bt(n);return 2&i?n:(e&&(e=i===0||!!(32&i)&&!(64&i||!(16&i))),e?(kt(n,-12293&(34|i)),n):xh(n,bu,4&i?Au:t,!0,!1,!0))}return n.P===ia?(t=n.s,n=2&(i=nt(t))?n:yh(n,t,i,!0)):n instanceof Qn&&(t=ro(n.R(bu)),n=new Qn(t,n.O,n.J,n.S)),n}}function yh(n,e,t,i){return n=n.constructor,vl=e=Fg(e,t,i),e=new n(e),vl=void 0,e}function Fg(n,e,t){const i=t||2&e?Au:VT,r=!!(32&e);return n=function(s,o,a){const l=Sn(s);var c=l.length;const u=256&o?l[c-1]:void 0;for(c+=u?-1:0,o=512&o?1:0;o<c;o++)l[o]=a(l[o]);if(u){o=l[o]={};for(const h in u)o[h]=a(u[h])}return Cg(l,s),l}(n,e,s=>bu(s,r,i)),Hl(n,32|(t?2:0)),n}function zl(n){const e=n.s,t=nt(e);return 2&t?yh(n,e,t,!1):n}function Ks(n,e){return Qi(n=n.s,nt(n),e)}function Qi(n,e,t,i){if(t===-1)return null;if(t>=ml(e)){if(256&e)return n[n.length-1][t]}else{var r=n.length;if(i&&256&e&&(i=n[r-1][t])!=null)return i;if((e=t+(+!!(512&e)-1))<r)return n[e]}}function xt(n,e,t,i){const r=n.s;let s=nt(r);return Ii(s),yt(r,s,e,t,i),n}function yt(n,e,t,i,r){var s=ml(e);if(t>=s||r){if(r=e,256&e)s=n[n.length-1];else{if(i==null)return r;s=n[s+(+!!(512&e)-1)]={},r|=256}return s[t]=i,r!==e&&kt(n,r),r}return n[t+(+!!(512&e)-1)]=i,256&e&&t in(n=n[n.length-1])&&delete n[t],e}function Mr(n,e,t,i,r){var s=2&e;let o=Qi(n,e,t,r);Array.isArray(o)||(o=Ps);const a=!(2&i);i=!(1&i);const l=!!(32&e);let c=bt(o);return c!==0||!l||s||a?1&c||(c|=1,kt(o,c)):(c|=33,kt(o,c)),s?(n=!1,2&c||(ro(o),n=!!(4&c)),(i||n)&&Object.freeze(o)):(s=!!(2&c)||!!(2048&c),i&&s?(o=Sn(o),i=1,l&&!a&&(i|=32),kt(o,i),yt(n,e,t,o,r)):a&&32&c&&!s&&pl(o,32)),o}function $a(n,e){n=n.s;let t=nt(n);const i=Qi(n,t,e),r=yr(i);return r!=null&&r!==i&&yt(n,t,e,r),r}function Bg(n){n=n.s;let e=nt(n);const t=Qi(n,e,1),i=Pg(t,!0,!!(34&e));return i!=null&&i!==t&&yt(n,e,1,i),i}function Cs(n,e,t){var i=2;n=n.s;let r=nt(n);2&r&&(i=1);let s=Mr(n,r,e,1);r=nt(n);var o=bt(s);let a=o,l=!!(2&o);const c=l&&!!(4&o);if(!(4&o)){Object.isFrozen(s)&&(s=Sn(s),a=0,l=!!(2&(o=Go(o,r,!1))),r=yt(n,r,e,s)),o=nn(o,4,!1),o=nn(o,4096,!1),o=nn(o,8192,!1);let u=0,h=0;for(;u<s.length;u++){const d=t(s[u]);d!=null&&(s[h++]=d)}h<u&&(s.length=h),o=nn(o,20,!0)}return c||((t=i===1)&&(o=nn(o,2,!0)),o!==a&&kt(s,o),(t||l)&&Object.freeze(s)),i===2&&l&&(s=Sn(s),o=Go(o,r,!1),kt(s,o),yt(n,r,e,s)),s}let JT;function up(){return JT??(JT=new Qn(ro([]),void 0,void 0,void 0,GT))}function Hg(n){n=Sn(n);for(let e=0;e<n.length;e++){const t=n[e]=Sn(n[e]);Array.isArray(t[1])&&(t[1]=ro(t[1]))}return n}function yl(n,e,t){{const o=n.s;let a=nt(o);if(Ii(a),t==null)yt(o,a,e);else{var i=n=bt(t),r=!!(2&n)||Object.isFrozen(t),s=!r&&!1;if(!(4&n)){n=21,r&&(t=Sn(t),i=0,n=Go(n,a,!0)),r=!!(4&n)&&!!(4096&n);for(let l=0;l<t.length;l++)t[l]=ra(t[l])}s&&(n=nn(n,2,!0)),n!==i&&kt(t,n),s&&Object.freeze(t),yt(o,a,e,t)}}}function oa(n,e,t,i){const r=nt(n);Ii(r),n=Mr(n,r,e,2),i=t(i,!!(4&(e=bt(n)))&&!!(4096&e)),n.push(i)}function eS(n){return n}function jc(n,e){return Mh(n=n.s,nt(n),T0)===e?e:-1}function Mh(n,e,t){let i=0;for(let r=0;r<t.length;r++){const s=t[r];Qi(n,e,s)!=null&&(i!==0&&(e=yt(n,e,i)),i=s)}return i}function Eh(n,e,t,i){let r=nt(n);Ii(r);const s=Qi(n,r,t,i);let o;if(s!=null&&s.P===ia)return(e=zl(s))!==s&&yt(n,r,t,e,i),e.s;if(Array.isArray(s)){const a=bt(s);o=2&a?Fg(s,a,!1):s,o=jr(o,e)}else o=jr(void 0,e);return o!==s&&yt(n,r,t,o,i),o}function kg(n,e,t,i){n=n.s;let r=nt(n);const s=Qi(n,r,t,i);return(e=gh(s,e,!1,r))!==s&&e!=null&&yt(n,r,t,e,i),e}function st(n,e,t,i=!1){if((e=kg(n,e,t,i))==null)return e;n=n.s;let r=nt(n);if(!(2&r)){const s=zl(e);s!==e&&yt(n,r,t,e=s,i)}return e}function zg(n,e,t,i,r,s,o){const a=r===1;r=r===2,s=!!s;var l=!!(2&e)&&r;let c=Mr(n,e,i,3);e=nt(n);var u=bt(c),h=!!(2&u);const d=!!(4&u),f=!!(32&u);let g=h&&d||!!(2048&u);if(!d){var _=c,m=e;const p=!!(2&u);p&&(m=nn(m,2,!0));let E=!p,v=!0,M=0,T=0;for(;M<_.length;M++){const R=gh(_[M],t,!1,m);if(R instanceof t){if(!p){const A=!!(2&bt(R.s));E&&(E=!A),v&&(v=A)}_[T++]=R}}T<M&&(_.length=T),u=nn(u,4,!0),u=nn(u,16,v),u=nn(u,8,E),kt(_,u),h&&!l&&(Object.freeze(c),g=!0)}if(t=u,l=!!(8&u)||a&&!c.length,o&&!l){for(g&&(c=Sn(c),g=!1,t=0,u=Go(u,e,s),e=yt(n,e,i,c)),o=c,l=u,h=0;h<o.length;h++)(_=o[h])!==(u=zl(_))&&(o[h]=u);l=nn(l,8,!0),u=l=nn(l,16,!o.length)}return g||(a?u=nn(u,!c.length||16&u&&(!d||f)?2:2048,!0):s||(u=nn(u,32,!1)),u!==t&&kt(c,u),a&&(Object.freeze(c),g=!0)),r&&g&&(c=Sn(c),u=Go(u,e,s),kt(c,u),yt(n,e,i,c)),c}function Ki(n,e,t){n=n.s;const i=nt(n),r=!!(2&i);return zg(n,i,e,t,r?1:2,!1,!r)}function Fe(n,e,t,i,r){return i==null&&(i=void 0),xt(n,t,i,r)}function Do(n,e,t,i){i==null&&(i=void 0),n=n.s;let r=nt(n);Ii(r),(t=Mh(n,r,t))&&t!==e&&i!=null&&(r=yt(n,r,t)),yt(n,r,e,i)}function Go(n,e,t){return n=nn(n,2,!!(2&e)),n=nn(n,32,!!(32&e)&&t),nn(n,2048,!1)}function Ru(n,e,t){n=n.s;const i=nt(n);Ii(i),n=zg(n,i,e,1,2),e=t??new e,n.push(e),2&bt(e.s)?pl(n,8):pl(n,16)}function Kn(n,e){return so(Ks(n,e))}function Jn(n,e){return Vo(Ks(n,e))}function bi(n){return n??0}function on(n,e){return bi($a(n,e))}function Wo(n,e,t){if(t!=null){if(typeof t!="boolean")throw n=typeof t,Error(`Expected boolean but got ${n!="object"?n:t?Array.isArray(t)?"array":n:"null"}: ${t}`);t=!!t}xt(n,e,t)}function Ri(n,e,t){if(t!=null){if(typeof t!="number")throw Dg("int32");if(!Number.isFinite(t)){const i=Error();Ig(i,"incident"),function(r){Cl.setTimeout(()=>{throw r},0)}(i)}}xt(n,e,t)}function He(n,e,t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);xt(n,e,t)}function hi(n,e,t){e.g?e.m(n,e.g,e.h,t,!0):e.m(n,e.h,t,!0)}Qn.prototype.toJSON=void 0,Qn.prototype.Ia=Rg;var ye=class{constructor(n,e){this.s=Ng(n,e)}toJSON(){return Vg(this,xh(this.s,Og,void 0,void 0,!1,!1),!0)}l(){var n=sA;return n.g?n.l(this,n.g,n.h,!0,2):n.l(this,n.h,n.defaultValue,!0)}clone(){const n=this.s;return yh(this,n,nt(n),!1)}H(){return!!(2&bt(this.s))}};function Vg(n,e,t){const i=n.constructor.A;var r=nt(t?n.s:e),s=ml(r),o=!1;if(i&&Lg){if(!t){var a;if((e=Sn(e)).length&&Io(a=e[e.length-1])){for(o=0;o<i.length;o++)if(i[o]>=s){Object.assign(e[e.length-1]={},a);break}}o=!0}var l;s=e,t=!t,n=ml(a=nt(n.s)),a=+!!(512&a)-1;for(let m=0;m<i.length;m++){var c=i[m];if(c<n){var u=s[c+=a];u==null?s[c]=t?Ps:sp():t&&u!==Ps&&rp(u)}else{if(!l){var h=void 0;s.length&&Io(h=s[s.length-1])?l=h:s.push(l={})}u=l[c],l[c]==null?l[c]=t?Ps:sp():t&&u!==Ps&&rp(u)}}}if(!(l=e.length))return e;let d,f;if(Io(h=e[l-1])){e:{var g=h;for(var _ in s={},t=!1,g)n=g[_],Array.isArray(n)&&(a=n,(!Zf&&wu(n,i,+_)||!yu&&op(n)&&n.size===0)&&(n=null),n!=a&&(t=!0)),n!=null?s[_]=n:t=!0;if(t){for(let m in s){g=s;break e}g=null}}g!=h&&(d=!0),l--}for(r=+!!(512&r)-1;0<l&&((h=e[_=l-1])==null||!Zf&&wu(h,i,_-r)||!yu&&op(h)&&h.size===0);l--)f=!0;return(d||f)&&(e=o?e:Array.prototype.slice.call(e,0,l),o&&(e.length=l),g&&e.push(g)),e}function Gg(n){return Array.isArray(n)?n[0]instanceof io?n:[hS,n]:[n,void 0]}function oo(n,e){if(Array.isArray(e)){var t=bt(e);if(4&t)return e;for(var i=0,r=0;i<e.length;i++){const s=n(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),kt(e,-12289&(5|t)),2&t&&Object.freeze(e),e}}ye.prototype.P=ia,ye.prototype.toString=function(){return Vg(this,this.s,!1).toString()};const hp=Symbol();function Th(n){let e=n[hp];if(!e){const t=jg(n),i=Ah(n),r=i.g;e=r?(s,o)=>r(s,o,i):(s,o)=>{for(;wg(o)&&o.h!=4;){var a=o.m,l=i[a];if(!l){var c=i.fa;c&&(c=c[a])&&(l=i[a]=tS(c))}l&&l(o,s,a)||(a=(l=o).l,Ka(l),l.ea?l=void 0:(c=l.g.g-a,l.g.g=a,l=Ag(l.g,c)),a=s,l&&(mr||(mr=Symbol()),(c=a[mr])?c.push(l):a[mr]=[l]))}t===Wg||t===Xg||t.Ja||(s[zo||(zo=Symbol())]=t)},n[hp]=e}return e}function tS(n){const e=(n=Gg(n))[0].g;if(n=n[1]){const t=Th(n),i=Ah(n).K;return(r,s,o)=>e(r,s,o,i,t)}return e}let Wg,Xg;const Za=Symbol();function nS(n,e,t){const i=t[1];let r;if(i){const s=i[Za];r=s?s.K:xl(i[0]),n[e]=s??i}r&&r===_h?(n.ia||(n.ia=[])).push(e):t[0]&&(n.ja||(n.ja=[])).push(e)}function dp(n,e){return[n.l,!e||0<e[0]?void 0:e]}function jg(n){var e=n[Za];if(e)return e;if(!(e=Sh(n,n[Za]={},dp,dp,nS)).ja&&!e.ia){let t=!0;for(let i in e){isNaN(i)||(t=!1);break}t?(e=xl(n[0])===_h,e=n[Za]=e?Xg||(Xg={K:xl(!0)}):Wg||(Wg={})):e.Ja=!0}return e}function iS(n,e,t){n[e]=t}function Sh(n,e,t,i,r=iS){e.K=xl(n[0]);let s=0;var o=n[++s];o&&o.constructor===Object&&(e.fa=o,typeof(o=n[++s])=="function"&&(e.g=o,e.h=n[++s],o=n[++s]));const a={};for(;Array.isArray(o)&&typeof o[0]=="number"&&0<o[0];){for(var l=0;l<o.length;l++)a[o[l]]=o;o=n[++s]}for(l=1;o!==void 0;){let h;typeof o=="number"&&(l+=o,o=n[++s]);var c=void 0;if(o instanceof io?h=o:(h=dS,s--),h.la){o=n[++s],c=n;var u=s;typeof o=="function"&&(o=o(),c[u]=o),c=o}for(u=l+1,typeof(o=n[++s])=="number"&&0>o&&(u-=o,o=n[++s]);l<u;l++){const d=a[l];r(e,l,c?i(h,c,d):t(h,d))}}return e}const fp=Symbol();function qg(n){let e=n[fp];if(!e){const t=Vl(n);e=(i,r)=>Yg(i,r,t),n[fp]=e}return e}const Qa=Symbol();function rS(n){return n.h}function sS(n,e){let t,i;const r=n.h;return(s,o,a)=>r(s,o,a,i||(i=Vl(e).K),t||(t=qg(e)))}function Vl(n){let e=n[Qa];return e||(e=Sh(n,n[Qa]={},rS,sS),Ja in n&&Qa in n&&(n.length=0),e)}const Ja=Symbol();function oS(n,e){const t=n.g;return e?(i,r,s)=>t(i,r,s,e):t}function aS(n,e,t){const i=n.g;let r,s;return(o,a,l)=>i(o,a,l,s||(s=Ah(e).K),r||(r=Th(e)),t)}function Ah(n){let e=n[Ja];return e||(jg(n),e=Sh(n,n[Ja]={},oS,aS),Ja in n&&Qa in n&&(n.length=0),e)}function pp(n,e){var t=n[e];if(t)return t;if((t=n.fa)&&(t=t[e])){var i=(t=Gg(t))[0].h;if(t=t[1]){const r=qg(t),s=Vl(t).K;t=(t=n.h)?t(s,r):(o,a,l)=>i(o,a,l,s,r)}else t=i;return n[e]=t}}function Yg(n,e,t){for(var i=nt(n),r=+!!(512&i)-1,s=n.length,o=512&i?1:0,a=s+(256&i?-1:0);o<a;o++){const l=n[o];if(l==null)continue;const c=o-r,u=pp(t,c);u&&u(e,l,c)}if(256&i){i=n[s-1];for(let l in i)r=+l,Number.isNaN(r)||(s=i[l])!=null&&(a=pp(t,r))&&a(e,s,r)}if(n=mr?n[mr]:void 0)for(Ys(e,e.g.end()),t=0;t<n.length;t++)Ys(e,ih(n[t])||Dl())}function An(n,e){return new io(n,e,!1,!1)}function ao(n,e){return new io(n,e,!0,!1)}function Gl(n,e){return new io(n,e,!1,!0)}function wn(n,e,t){yt(n,nt(n),e,t)}var lS=Gl(function(n,e,t,i,r){return n.h===2&&(n=ta(n,jr([void 0,void 0],i),r),Ii(i=nt(e)),(r=Qi(e,i,t))instanceof Qn?2&r.I?((r=r.R()).push(n),yt(e,i,t,r)):r.Oa(n):Array.isArray(r)?(2&bt(r)&&yt(e,i,t,r=Hg(r)),r.push(n)):yt(e,i,t,[n]),!0)},function(n,e,t,i,r){if(e instanceof Qn)e.forEach((s,o)=>{Su(n,t,jr([o,s],i),r)});else if(Array.isArray(e))for(let s=0;s<e.length;s++){const o=e[s];Array.isArray(o)&&Su(n,t,jr(o,i),r)}});function Kg(n,e,t){e:if(e!=null){if(kl(e)){if(typeof e=="string"){e=mh(e,!1);break e}if(typeof e=="number"){e=ph(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&np(e),e!=null&&(ti(n,t,0),typeof e=="number"?(n=n.g,Ul(e),fl(n,It,rn)):(t=np(e),fl(n.g,t.h,t.g))))}function $g(n,e,t){(e=so(e))!=null&&e!=null&&(ti(n,t,0),Fl(n.g,e))}function Zg(n,e,t){(e=Ug(e))!=null&&(ti(n,t,0),n.g.g.push(e?1:0))}function Qg(n,e,t){(e=Vo(e))!=null&&Bl(n,t,cg(e))}function Wl(n,e,t,i,r){Su(n,t,e instanceof ye?e.s:Array.isArray(e)?jr(e,i):void 0,r)}function Jg(n,e,t){(e=e==null||typeof e=="string"||Il(e)||e instanceof pr?e:void 0)!=null&&Bl(n,t,sh(e).buffer)}function e0(n,e,t){return(n.h===5||n.h===2)&&(e=Mr(e,nt(e),t,2,!1),n.h==2?Ol(n,ea.prototype.B,e):e.push(n.g.B()),!0)}var Wt,qi=An(function(n,e,t){if(n.h!==1)return!1;var i=n.g;n=Tu(i);const r=Tu(i);i=2*(r>>31)+1;const s=r>>>20&2047;return n=4294967296*(1048575&r)+n,wn(e,t,s==2047?n?NaN:1/0*i:s==0?i*Math.pow(2,-1074)*n:i*Math.pow(2,s-1075)*(n+4503599627370496)),!0},function(n,e,t){(e=yr(e))!=null&&(ti(n,t,1),n=n.g,(t=yg||(yg=new DataView(new ArrayBuffer(8)))).setFloat64(0,+e,!0),It=t.getUint32(0,!0),rn=t.getUint32(4,!0),ko(n,It),ko(n,rn))}),qt=An(function(n,e,t){return n.h===5&&(wn(e,t,n.g.B()),!0)},function(n,e,t){(e=yr(e))!=null&&(ti(n,t,5),n=n.g,ah(e),ko(n,It))}),cS=ao(e0,function(n,e,t){if((e=oo(yr,e))!=null)for(let s=0;s<e.length;s++){var i=n,r=e[s];r!=null&&(ti(i,t,5),i=i.g,ah(r),ko(i,It))}}),wh=ao(e0,function(n,e,t){if((e=oo(yr,e))!=null&&e.length){ti(n,t,2),na(n.g,4*e.length);for(let i=0;i<e.length;i++)t=n.g,ah(e[i]),ko(t,It)}}),_r=An(function(n,e,t){return n.h===0&&(wn(e,t,ch(n.g,Eg)),!0)},Kg),qc=An(function(n,e,t){return n.h===0&&(wn(e,t,(n=ch(n.g,Eg))===0?void 0:n),!0)},Kg),uS=An(function(n,e,t){return n.h===0&&(wn(e,t,ch(n.g,Mg)),!0)},function(n,e,t){e:if(e!=null){if(kl(e)){if(typeof e=="string"){var i=Math.trunc(Number(e));Number.isSafeInteger(i)?e=String(i):((i=e.indexOf("."))!==-1&&(e=e.substring(0,i)),Nl(e),e=Mu(It,rn));break e}if(typeof e=="number"){e=Math.trunc(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&ep(e),e!=null&&(ti(n,t,0),typeof e=="number"?(n=n.g,Ul(e),fl(n,It,rn)):(t=ep(e),fl(n.g,t.h,t.g))))}),Nt=An(function(n,e,t){return n.h===0&&(wn(e,t,n.g.m()),!0)},$g),bh=ao(function(n,e,t){return(n.h===0||n.h===2)&&(e=Mr(e,nt(e),t,2,!1),n.h==2?Ol(n,ea.prototype.m,e):e.push(n.g.m()),!0)},function(n,e,t){if((e=oo(so,e))!=null&&e.length){t=dh(n,t);for(let i=0;i<e.length;i++)Fl(n.g,e[i]);fh(n,t)}}),$s=An(function(n,e,t){return n.h===0&&(wn(e,t,(n=n.g.m())===0?void 0:n),!0)},$g),Gt=An(function(n,e,t){return n.h===0&&(wn(e,t,uh(n.g)),!0)},Zg),Uo=An(function(n,e,t){return n.h===0&&(wn(e,t,(n=uh(n.g))===!1?void 0:n),!0)},Zg),_n=ao(function(n,e,t){return n.h===2&&(oa(e,t,eS,n=hh(n)),!0)},function(n,e,t){if((e=oo(Vo,e))!=null)for(let r=0;r<e.length;r++){var i=e[r];i!=null&&Bl(n,t,cg(i))}}),vr=An(function(n,e,t){return n.h===2&&(wn(e,t,(n=hh(n))===""?void 0:n),!0)},Qg),Et=An(function(n,e,t){return n.h===2&&(wn(e,t,hh(n)),!0)},Qg),hS=Gl(function(n,e,t,i,r){return n.h===2&&(ta(n,Eh(e,i,t,!0),r),!0)},Wl),dS=Gl(function(n,e,t,i,r){return n.h===2&&(ta(n,Eh(e,i,t),r),!0)},Wl);Wt=new io(function(n,e,t,i,r){if(n.h!==2)return!1;i=jr(void 0,i);let s=nt(e);Ii(s);let o=Mr(e,s,t,3);return s=nt(e),4&bt(o)&&(o=Sn(o),kt(o,-2079&(1|bt(o))),yt(e,s,t,o)),o.push(i),ta(n,i,r),!0},function(n,e,t,i,r){if(Array.isArray(e))for(let s=0;s<e.length;s++)Wl(n,e[s],t,i,r)},!0,!0);var Tt=Gl(function(n,e,t,i,r,s){if(n.h!==2)return!1;let o=nt(e);return Ii(o),(s=Mh(e,o,s))&&t!==s&&yt(e,o,s),ta(n,e=Eh(e,i,t),r),!0},Wl),t0=An(function(n,e,t){return n.h===2&&(wn(e,t,bg(n)),!0)},Jg),fS=ao(function(n,e,t){return(n.h===0||n.h===2)&&(e=Mr(e,nt(e),t,2,!1),n.h==2?Ol(n,ea.prototype.j,e):e.push(n.g.j()),!0)},function(n,e,t){if((e=oo(XT,e))!=null)for(let s=0;s<e.length;s++){var i=n,r=e[s];r!=null&&(ti(i,t,0),na(i.g,r))}}),Li=An(function(n,e,t){return n.h===0&&(wn(e,t,n.g.m()),!0)},function(n,e,t){(e=so(e))!=null&&(e=parseInt(e,10),ti(n,t,0),Fl(n.g,e))}),pS=ao(function(n,e,t){return(n.h===0||n.h===2)&&(e=Mr(e,nt(e),t,2,!1),n.h==2?Ol(n,ea.prototype.C,e):e.push(n.g.m()),!0)},function(n,e,t){if((e=oo(so,e))!=null&&e.length){t=dh(n,t);for(let i=0;i<e.length;i++)Fl(n.g,e[i]);fh(n,t)}});class mS{constructor(e,t){this.h=e,this.g=t,this.l=st,this.m=Fe,this.defaultValue=void 0}}function di(n,e){return new mS(n,e)}function Er(n,e){return(t,i)=>{e:{if(Ha.length){const s=Ha.pop();s.o(i),Eu(s.g,t,i),t=s}else t=new class{constructor(s,o){if(Jf.length){const a=Jf.pop();Eu(a,s,o),s=a}else s=new ea(s,o);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({ea:s=!1}={}){this.ea=s}}(t,i);try{const s=new n,o=s.s;Th(e)(o,t),zo&&delete o[zo];var r=s;break e}finally{t.g.clear(),t.m=-1,t.h=-1,100>Ha.length&&Ha.push(t)}r=void 0}return r}}function Rh(n){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};Yg(this.s,e,Vl(n)),Ys(e,e.g.end());const t=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let o=0;o<r;o++){const a=i[o];t.set(a,s),s+=a.length}return e.l=[t],t}}var n0=[0,vr,An(function(n,e,t){return n.h===2&&(wn(e,t,(n=bg(n))===qs()?void 0:n),!0)},function(n,e,t){if(e!=null){if(e instanceof ye){const i=e.Qa;return void(i&&(e=i(e),e!=null&&Bl(n,t,sh(e).buffer)))}if(Array.isArray(e))return}Jg(n,e,t)})],gS=[0,Et],i0=[0,Nt,Li,Gt,-1,bh,Li,-1],_S=[0,Gt,-1],r0=class extends ye{constructor(){super()}};r0.A=[6];var s0=[0,Gt,Et,Gt,Li,-1,pS,Et,-1,_S,Li],o0=[0,Et,-2],mp=class extends ye{constructor(){super()}},a0=[0],l0=[0,Nt,Gt,-2],ei=class extends ye{constructor(n){super(n,2)}},At={},vS=[-2,At,Gt];At[336783863]=[0,Et,Gt,-1,Nt,[0,[1,2,3,4,5],Tt,a0,Tt,s0,Tt,o0,Tt,l0,Tt,i0],gS];var xS=[0,vr,Uo],c0=[0,qc,-1,Uo,-3,qc,bh,vr,$s,qc,-1,Uo,$s,Uo,-2,vr],aa=[-1,{}],u0=[0,Et,1,aa],h0=[0,Et,_n,aa];function ni(n,e){e=sa(e),n=n.s;let t=nt(n);Ii(t),yt(n,t,2,e===""?void 0:e)}function Mt(n,e){oa(n.s,3,ra,e)}function pt(n,e){oa(n.s,4,ra,e)}var vn=class extends ye{constructor(n){super(n,500)}o(n){return Fe(this,0,7,n)}};vn.A=[3,4,5,6,8,13,17,1005];var yS=[-500,vr,-1,_n,-3,vS,Wt,n0,$s,-1,u0,h0,Wt,xS,vr,c0,$s,_n,987,_n],MS=[0,vr,-1,aa],ES=[-500,Et,-1,[-1,{}],998,Et],TS=[-500,Et,_n,-1,[-2,{},Gt],997,_n,-1],SS=[-500,Et,_n,aa,998,_n];function ii(n,e){Ru(n,vn,e)}function wt(n,e){oa(n.s,10,ra,e)}function St(n,e){oa(n.s,15,ra,e)}var bn=class extends ye{constructor(n){super(n,500)}o(n){return Fe(this,0,1001,n)}};bn.A=[1,6,7,9,10,15,16,17,14,1002];var d0=[-500,Wt,yS,4,Wt,ES,Wt,TS,$s,Wt,SS,_n,$s,u0,h0,Wt,MS,_n,-2,c0,vr,-1,Uo,979,aa,Wt,n0],AS=Er(bn,d0);bn.prototype.g=Rh(d0);var wS=[0,Wt,[0,Nt,-2]],bS=class extends ye{constructor(n){super(n)}},RS=[0,Nt,qt,Et,-1],Lh=class extends ye{constructor(n){super(n)}g(){return Ki(this,bS,1)}};Lh.A=[1];var f0=[0,Wt,RS],Ph=Er(Lh,f0),LS=[0,Nt,qt],PS=[0,Nt,-1,wS],CS=class extends ye{constructor(n){super(n)}},IS=[0,Nt,-3],DS=[0,qt,-3],US=class extends ye{constructor(n){super(n)}},NS=[0,qt,-1,Et,qt],el=class extends ye{constructor(n){super(n)}h(){return st(this,CS,2)}g(){return Ki(this,US,5)}};el.A=[5];var OS=[0,Li,IS,DS,PS,Wt,NS],p0=class extends ye{constructor(n){super(n)}};p0.A=[1,2,3,8,9];var m0=Er(p0,[0,_n,bh,wh,OS,Et,-1,_r,Wt,LS,_n,_r]),g0=class extends ye{constructor(n){super(n)}},FS=[0,qt,-4],_0=class extends ye{constructor(n){super(n)}};_0.A=[1];var Ch=Er(_0,[0,Wt,FS]),v0=class extends ye{constructor(n){super(n)}},BS=[0,qt,-4],x0=class extends ye{constructor(n){super(n)}};x0.A=[1];var Xl=Er(x0,[0,Wt,BS]),y0=class extends ye{constructor(n){super(n)}};y0.A=[3];var HS=[0,Nt,-1,wh,Li],M0=class extends ye{constructor(){super()}};M0.prototype.g=Rh([0,qt,-4,_r]);var kS=class extends ye{constructor(n){super(n)}},zS=[0,1,Nt,Et,f0],E0=class extends ye{constructor(n){super(n)}};E0.A=[1];var VS=Er(E0,[0,Wt,zS,_r]),Lu=class extends ye{constructor(n){super(n)}};Lu.A=[1];var GS=class extends ye{constructor(n){super(n)}oa(){const n=Bg(this);return n??qs()}},WS=class extends ye{constructor(n){super(n)}},T0=[1,2],XS=[0,T0,Tt,[0,wh],Tt,[0,t0],Nt,Et],S0=class extends ye{constructor(n){super(n)}};S0.A=[1];var jS=Er(S0,[0,Wt,XS,_r]),jl=class extends ye{constructor(n){super(n)}};jl.A=[4,5];var A0=[0,Et,Nt,qt,_n,-1],gp=class extends ye{constructor(n){super(n)}},qS=[0,Gt,-1],_p=class extends ye{constructor(n){super(n)}},tl=[1,2,3,4,5],Ml=class extends ye{constructor(n){super(n)}g(){return Bg(this)!=null}h(){return Jn(this,2)!=null}},w0=[0,t0,Et,[0,Nt,_r,-1],[0,uS,_r]],Ut=class extends ye{constructor(n){super(n)}g(){return Ug(Ks(this,2))??!1}},Yt=[0,w0,Gt,[0,tl,Tt,l0,Tt,s0,Tt,i0,Tt,a0,Tt,o0],Li],Ih=class extends ye{constructor(n){super(n)}},b0=[0,Yt,qt,-1,Nt],YS=di(502141897,Ih);At[502141897]=b0;var R0=[0,w0];At[512499200]=R0;var L0=[0,R0];At[515723506]=L0;var KS=Er(class extends ye{constructor(n){super(n)}},[0,[0,Li,-1,cS,fS],HS]),P0=[0,Yt];At[508981768]=P0;var $S=class extends ye{constructor(n){super(n)}},C0=[0,Yt,qt,P0,Gt],I0=class extends ye{constructor(n){super(n)}},D0=[0,Yt,b0,C0,qt,L0];At[508968149]=C0;var ZS=di(508968150,I0);At[508968150]=D0;var U0=class extends ye{constructor(n){super(n)}},QS=di(513916220,U0);At[513916220]=[0,Yt,D0,Nt];var Ms=class extends ye{constructor(n){super(n)}h(){return st(this,jl,2)}g(){xt(this,2)}},N0=[0,Yt,A0];At[478825465]=N0;var O0=[0,Yt];At[478825422]=O0;var JS=class extends ye{constructor(n){super(n)}},F0=[0,Yt,O0,N0,-1],B0=class extends ye{constructor(n){super(n)}},H0=[0,Yt,qt,Nt],k0=class extends ye{constructor(n){super(n)}},z0=[0,Yt,qt],Dh=class extends ye{constructor(n){super(n)}},V0=[0,Yt,H0,z0,qt],G0=class extends ye{constructor(n){super(n)}},eA=[0,Yt,V0,F0];At[463370452]=F0,At[464864288]=H0,At[474472470]=z0;var tA=di(462713202,Dh);At[462713202]=V0;var nA=di(479097054,G0);At[479097054]=eA;var W0=class extends ye{constructor(n){super(n)}},iA=di(456383383,W0);At[456383383]=[0,Yt,A0];var X0=class extends ye{constructor(n){super(n)}},rA=di(476348187,X0);At[476348187]=[0,Yt,qS];var j0=class extends ye{constructor(n){super(n)}},q0=[0,Li,-1],Pu=class extends ye{constructor(n){super(n)}};Pu.A=[3];var sA=di(458105876,class extends ye{constructor(n){super(n)}g(){var n=this.s;const e=nt(n);var t=2&e;return n=function(i,r,s){var o=Pu;const a=2&r;let l=!1;if(s==null){if(a)return up();s=[]}else if(s.constructor===Qn){if(!(2&s.I)||a)return s;s=s.R()}else Array.isArray(s)?l=!!(2&bt(s)):s=[];if(a){if(!s.length)return up();l||(l=!0,ro(s))}else l&&(l=!1,s=Hg(s));return l||(64&bt(s)?pl(s,32):32&r&&Hl(s,32)),yt(i,r,2,o=new Qn(s,o,jT,void 0),!1),o}(n,e,Qi(n,e,2)),n==null||!t&&Pu&&(n.ra=!0),t=n}});At[458105876]=[0,q0,lS,[!0,_r,[0,Et,-1,_n]]];var Uh=class extends ye{constructor(n){super(n)}},Y0=di(458105758,Uh);At[458105758]=[0,Yt,Et,q0];var Nh=class extends ye{constructor(n){super(n)}};Nh.A=[5,6];var oA=di(443442058,Nh);At[443442058]=[0,Yt,Et,Nt,qt,_n,-1];var aA=class extends ye{constructor(n){super(n)}},K0=[0,Yt,qt,-1,Nt];At[514774813]=K0;var lA=class extends ye{constructor(n){super(n)}},$0=[0,Yt,qt,Gt],Z0=class extends ye{constructor(n){super(n)}},cA=[0,Yt,K0,$0,qt];At[518928384]=$0;var uA=di(516587230,Z0);function Cu(n,e){return e=e?e.clone():new jl,n.displayNamesLocale!==void 0?xt(e,1,sa(n.displayNamesLocale)):n.displayNamesLocale===void 0&&xt(e,1),n.maxResults!==void 0?Ri(e,2,n.maxResults):"maxResults"in n&&xt(e,2),n.scoreThreshold!==void 0?He(e,3,n.scoreThreshold):"scoreThreshold"in n&&xt(e,3),n.categoryAllowlist!==void 0?yl(e,4,n.categoryAllowlist):"categoryAllowlist"in n&&xt(e,4),n.categoryDenylist!==void 0?yl(e,5,n.categoryDenylist):"categoryDenylist"in n&&xt(e,5),e}function Q0(n,e=-1,t=""){return{categories:n.map(i=>({index:bi(Kn(i,1))??-1,score:on(i,2)??0,categoryName:Jn(i,3)??""??"",displayName:Jn(i,4)??""??""})),headIndex:e,headName:t}}function J0(n){var o,a;var e=Cs(n,3,yr),t=Cs(n,2,so);const i=Cs(n,1,Vo),r=Cs(n,9,Vo),s={categories:[],keypoints:[]};for(let l=0;l<e.length;l++)s.categories.push({score:e[l],index:t[l]??-1,categoryName:i[l]??"",displayName:r[l]??""});if((e=(o=st(n,el,4))==null?void 0:o.h())&&(s.boundingBox={originX:Kn(e,1)??0,originY:Kn(e,2)??0,width:Kn(e,3)??0,height:Kn(e,4)??0,angle:0}),(a=st(n,el,4))==null?void 0:a.g().length)for(const l of st(n,el,4).g())s.keypoints.push({x:$a(l,1)??0,y:$a(l,2)??0,score:$a(l,4)??0,label:Jn(l,3)??""});return s}function Oh(n){const e=[];for(const t of Ki(n,v0,1))e.push({x:on(t,1)??0,y:on(t,2)??0,z:on(t,3)??0});return e}function e_(n){const e=[];for(const t of Ki(n,g0,1))e.push({x:on(t,1)??0,y:on(t,2)??0,z:on(t,3)??0});return e}function vp(n){return Array.from(n,e=>127<e?e-256:e)}function xp(n,e){if(n.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${n.length} vs. ${e.length}).`);let t=0,i=0,r=0;for(let s=0;s<n.length;s++)t+=n[s]*e[s],i+=n[s]*n[s],r+=e[s]*e[s];if(0>=i||0>=r)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return t/Math.sqrt(i*r)}let za;At[516587230]=cA;const hA=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function t_(){if(za===void 0)try{await WebAssembly.instantiate(hA),za=!0}catch{za=!1}return za}async function Yc(n,e=""){const t=await t_()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${n}_${t}.js`,wasmBinaryPath:`${e}/${n}_${t}.wasm`}}var wo=class{};function n_(){const n=navigator.userAgent;return n.includes("Safari")&&!n.includes("Chrome")}async function yp(n){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=n.toString(),e.crossOrigin="anonymous",new Promise((t,i)=>{e.addEventListener("load",()=>{t()},!1),e.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(e)})}importScripts(n.toString())}function Re(n,e,t){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),t(e=n.i.stringToNewUTF8(e)),n.i._free(e)}function Mp(n,e,t){if(!n.i.canvas)throw Error("No OpenGL canvas configured.");if(t?n.i._bindTextureToStream(t):n.i._bindTextureToCanvas(),!(t=n.i.canvas.getContext("webgl2")||n.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");return n.i.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),n.i.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),e.videoWidth?(t=e.videoWidth,e=e.videoHeight):e.naturalWidth?(t=e.naturalWidth,e=e.naturalHeight):(t=e.width,e=e.height),!n.l||t===n.i.canvas.width&&e===n.i.canvas.height||(n.i.canvas.width=t,n.i.canvas.height=e),[t,e]}function Ep(n,e,t){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=n.i.stringToNewUTF8(e[r]);e=n.i._malloc(4*i.length),n.i.HEAPU32.set(i,e>>2),t(e);for(const r of i)n.i._free(r);n.i._free(e)}function ki(n,e,t){n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[e]=t}function Ir(n,e,t){let i=[];n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[e]=(r,s,o)=>{s?(t(i,o),i=[]):i.push(r)}}wo.forVisionTasks=function(n){return Yc("vision",n)},wo.forTextTasks=function(n){return Yc("text",n)},wo.forAudioTasks=function(n){return Yc("audio",n)},wo.isSimdSupported=function(){return t_()};async function dA(n,e,t,i){return n=await(async(r,s,o,a,l)=>{if(s&&await yp(s),!self.ModuleFactory||o&&(await yp(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((s=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new r(l,a)})(n,t.wasmLoaderPath,t.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?t.wasmBinaryPath.toString():t.assetBinaryPath&&r.endsWith(".data")?t.assetBinaryPath.toString():r}),await n.o(i),n}function Tp(n,e){const t=st(n.baseOptions,Ml,1)||new Ml;typeof e=="string"?(xt(t,2,sa(e)),xt(t,1)):e instanceof Uint8Array&&(xt(t,1,Pg(e,!1,!1)),xt(t,2)),Fe(n.baseOptions,0,1,t)}function Sp(n){try{const e=n.L.length;if(e===1)throw Error(n.L[0].message);if(1<e)throw Error("Encountered multiple errors: "+n.L.map(t=>t.message).join(", "))}finally{n.L=[]}}function De(n,e){n.N=Math.max(n.N,e)}function Fh(n,e){n.B=new vn,ni(n.B,"PassThroughCalculator"),Mt(n.B,"free_memory"),pt(n.B,"free_memory_unused_out"),wt(e,"free_memory"),ii(e,n.B)}function Xo(n,e){Mt(n.B,e),pt(n.B,e+"_unused_out")}function Bh(n){n.g.addBoolToStream(!0,"free_memory",n.N)}var Iu=class{constructor(n){this.g=n,this.L=[],this.N=0,this.g.setAutoRenderToScreen(!1)}l(n,e=!0){var t,i,r,s,o,a;if(e){const l=n.baseOptions||{};if((t=n.baseOptions)!=null&&t.modelAssetBuffer&&((i=n.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=st(this.baseOptions,Ml,1))!=null&&r.g()||(s=st(this.baseOptions,Ml,1))!=null&&s.h()||(o=n.baseOptions)!=null&&o.modelAssetBuffer||(a=n.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(c,u){let h=st(c.baseOptions,_p,3);if(!h){var d=h=new _p,f=new mp;Do(d,4,tl,f)}"delegate"in u&&(u.delegate==="GPU"?(u=h,d=new r0,Do(u,2,tl,d)):(u=h,d=new mp,Do(u,4,tl,d))),Fe(c.baseOptions,0,3,h)}(this,l),l.modelAssetPath)return fetch(l.modelAssetPath.toString()).then(c=>{if(c.ok)return c.arrayBuffer();throw Error(`Failed to fetch model: ${l.modelAssetPath} (${c.status})`)}).then(c=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(c),!0,!1,!1),Tp(this,"/model.dat"),this.m(),this.V()});Tp(this,l.modelAssetBuffer)}return this.m(),this.V(),Promise.resolve()}V(){}aa(){let n;if(this.g.aa(e=>{n=AS(e)}),!n)throw Error("Failed to retrieve CalculatorGraphConfig");return n}setGraph(n,e){this.g.attachErrorListener((t,i)=>{this.L.push(Error(i))}),this.g.Ma(),this.g.setGraph(n,e),this.B=void 0,Sp(this)}finishProcessing(){this.g.finishProcessing(),Sp(this)}close(){this.B=void 0,this.g.closeGraph()}};function $n(n,e){if(n===null)throw Error(`Unable to obtain required WebGL resource: ${e}`);return n}Iu.prototype.close=Iu.prototype.close;class fA{constructor(e,t,i,r){this.g=e,this.h=t,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Ap(n,e,t){const i=n.h;if(t=$n(i.createShader(t),"Failed to create WebGL shader"),i.shaderSource(t,e),i.compileShader(t),!i.getShaderParameter(t,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(t)}`);return i.attachShader(n.g,t),t}function wp(n,e){const t=n.h,i=$n(t.createVertexArray(),"Failed to create vertex array");t.bindVertexArray(i);const r=$n(t.createBuffer(),"Failed to create buffer");t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(n.u),t.vertexAttribPointer(n.u,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const s=$n(t.createBuffer(),"Failed to create buffer");return t.bindBuffer(t.ARRAY_BUFFER,s),t.enableVertexAttribArray(n.B),t.vertexAttribPointer(n.B,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindVertexArray(null),new fA(t,i,r,s)}function i_(n,e){if(n.h){if(e!==n.h)throw Error("Cannot change GL context once initialized")}else n.h=e}function Hh(n,e,t,i){if(i_(n,e),!n.g){const r=n.h;if(n.g=$n(r.createProgram(),"Failed to create WebGL program"),n.C=Ap(n,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,r.VERTEX_SHADER),n.v=Ap(n,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `,r.FRAGMENT_SHADER),r.linkProgram(n.g),!r.getProgramParameter(n.g,r.LINK_STATUS))throw Error(`Error during program linking: ${r.getProgramInfoLog(n.g)}`);n.u=r.getAttribLocation(n.g,"aVertex"),n.B=r.getAttribLocation(n.g,"aTex")}return t?(n.m||(n.m=wp(n,!0)),t=n.m):(n.j||(n.j=wp(n,!1)),t=n.j),e.useProgram(n.g),t.bind(),n=i(),t.g.bindVertexArray(null),n}function ql(n,e,t){i_(n,e),n.l||(n.l=$n(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,n.l),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}function kh(n){var e;(e=n.h)==null||e.bindFramebuffer(n.h.FRAMEBUFFER,null)}var zh=class{close(){if(this.g){const n=this.h;n.deleteProgram(this.g),n.deleteShader(this.C),n.deleteShader(this.v)}this.l&&this.h.deleteFramebuffer(this.l),this.j&&this.j.close(),this.m&&this.m.close()}};function Gi(n,e){switch(e){case 0:return n.g.find(t=>t instanceof Uint8Array);case 1:return n.g.find(t=>t instanceof Float32Array);case 2:return n.g.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Du(n){var e=Gi(n,1);if(!e){if(e=Gi(n,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(n.width*n.height);const i=Zr(n);var t=o_(n);if(ql(t,i,r_(n)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in self.document){t=new Float32Array(n.width*n.height*4),i.readPixels(0,0,n.width,n.height,i.RGBA,i.FLOAT,t);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=t[s]}else i.readPixels(0,0,n.width,n.height,i.RED,i.FLOAT,e)}n.g.push(e)}return e}function r_(n){let e=Gi(n,2);if(!e){const t=Zr(n);e=l_(n);const i=Du(n),r=s_(n);t.texImage2D(t.TEXTURE_2D,0,r,n.width,n.height,0,t.RED,t.FLOAT,i),Uu(n)}return e}function Zr(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.h||(n.h=$n(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function s_(n){if(n=Zr(n),!Va)if(n.getExtension("EXT_color_buffer_float")&&n.getExtension("OES_texture_float_linear")&&n.getExtension("EXT_float_blend"))Va=n.R32F;else{if(!n.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Va=n.R16F}return Va}function o_(n){return n.l||(n.l=new zh),n.l}function a_(n){(n=Zr(n)).texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST)}function l_(n){const e=Zr(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);let t=Gi(n,2);return t?e.bindTexture(e.TEXTURE_2D,t):(t=$n(e.createTexture(),"Failed to create texture"),n.g.push(t),n.m=!0,e.bindTexture(e.TEXTURE_2D,t),a_(n)),t}function Uu(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}var Va,Zt=class{constructor(n,e,t,i,r,s){this.g=n,this.m=e,this.canvas=t,this.l=i,this.width=r,this.height=s,this.m&&--bp===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ga(){return!!Gi(this,0)}Ea(){return!!Gi(this,1)}M(){return!!Gi(this,2)}Ca(){return(e=Gi(n=this,0))||(e=Du(n),e=new Uint8Array(e.map(t=>255*t)),n.g.push(e)),e;var n,e}za(){return Du(this)}Z(){return r_(this)}clone(){const n=[];for(const e of this.g){let t;if(e instanceof Uint8Array)t=new Uint8Array(e);else if(e instanceof Float32Array)t=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=Zr(this),r=o_(this);i.activeTexture(i.TEXTURE1),t=$n(i.createTexture(),"Failed to create texture"),i.bindTexture(i.TEXTURE_2D,t),a_(this);const s=s_(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),ql(r,i,t),Hh(r,i,!1,()=>{l_(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Uu(this)}),kh(r),Uu(this)}}n.push(t)}return new Zt(n,this.M(),this.canvas,this.l,this.width,this.height)}close(){this.m&&Zr(this).deleteTexture(Gi(this,2)),bp=-1}};Zt.prototype.close=Zt.prototype.close,Zt.prototype.clone=Zt.prototype.clone,Zt.prototype.getAsWebGLTexture=Zt.prototype.Z,Zt.prototype.getAsFloat32Array=Zt.prototype.za,Zt.prototype.getAsUint8Array=Zt.prototype.Ca,Zt.prototype.hasWebGLTexture=Zt.prototype.M,Zt.prototype.hasFloat32Array=Zt.prototype.Ea,Zt.prototype.hasUint8Array=Zt.prototype.Ga;var bp=250;function Ei(n,e){switch(e){case 0:return n.g.find(t=>t instanceof ImageData);case 1:return n.g.find(t=>typeof ImageBitmap<"u"&&t instanceof ImageBitmap);case 2:return n.g.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function c_(n){var e=Ei(n,0);if(!e){e=Qr(n);const t=Vh(n),i=new Uint8Array(n.width*n.height*4);ql(t,e,nl(n)),e.readPixels(0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,i),kh(t),e=new ImageData(new Uint8ClampedArray(i.buffer),n.width,n.height),n.g.push(e)}return e}function nl(n){let e=Ei(n,2);if(!e){const t=Qr(n);e=il(n);const i=Ei(n,1)||c_(n);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i),bo(n)}return e}function Qr(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return n.h||(n.h=$n(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function Vh(n){return n.l||(n.l=new zh),n.l}function u_(n){(n=Qr(n)).texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR)}function il(n){const e=Qr(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);let t=Ei(n,2);return t?e.bindTexture(e.TEXTURE_2D,t):(t=$n(e.createTexture(),"Failed to create texture"),n.g.push(t),n.m=!0,e.bindTexture(e.TEXTURE_2D,t),u_(n)),t}function bo(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}function Rp(n){const e=Qr(n);return Hh(Vh(n),e,!0,()=>function(t,i){const r=t.canvas;if(r.width===t.width&&r.height===t.height)return i();const s=r.width,o=r.height;return r.width=t.width,r.height=t.height,t=i(),r.width=s,r.height=o,t}(n,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(n.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return n.canvas.transferToImageBitmap()}))}var Qt=class{constructor(n,e,t,i,r,s,o){this.g=n,this.j=e,this.m=t,this.canvas=i,this.l=r,this.width=s,this.height=o,(this.j||this.m)&&--Lp===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Fa(){return!!Ei(this,0)}ga(){return!!Ei(this,1)}M(){return!!Ei(this,2)}Ba(){return c_(this)}Aa(){var n=Ei(this,1);return n||(nl(this),il(this),n=Rp(this),bo(this),this.g.push(n),this.j=!0),n}Z(){return nl(this)}clone(){const n=[];for(const e of this.g){let t;if(e instanceof ImageData)t=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){const i=Qr(this),r=Vh(this);i.activeTexture(i.TEXTURE1),t=$n(i.createTexture(),"Failed to create texture"),i.bindTexture(i.TEXTURE_2D,t),u_(this),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),ql(r,i,t),Hh(r,i,!1,()=>{il(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),bo(this)}),kh(r),bo(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);nl(this),il(this),t=Rp(this),bo(this)}n.push(t)}return new Qt(n,this.ga(),this.M(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ei(this,1).close(),this.m&&Qr(this).deleteTexture(Ei(this,2)),Lp=-1}};Qt.prototype.close=Qt.prototype.close,Qt.prototype.clone=Qt.prototype.clone,Qt.prototype.getAsWebGLTexture=Qt.prototype.Z,Qt.prototype.getAsImageBitmap=Qt.prototype.Aa,Qt.prototype.getAsImageData=Qt.prototype.Ba,Qt.prototype.hasWebGLTexture=Qt.prototype.M,Qt.prototype.hasImageBitmap=Qt.prototype.ga,Qt.prototype.hasImageData=Qt.prototype.Fa;var Lp=250;function fi(...n){return n.map(([e,t])=>({start:e,end:t}))}const pA=function(n){return class extends n{Ma(){this.i._registerModelResourcesGraphService()}}}((Pp=class{constructor(n,e){this.l=!0,this.i=n,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:typeof OffscreenCanvas>"u"||n_()?(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas")):this.i.canvas=new OffscreenCanvas(1,1)}async initializeGraph(n){const e=await(await fetch(n)).arrayBuffer();n=!(n.endsWith(".pbtxt")||n.endsWith(".textproto")),this.setGraph(new Uint8Array(e),n)}setGraphFromString(n){this.setGraph(new TextEncoder().encode(n),!1)}setGraph(n,e){const t=n.length,i=this.i._malloc(t);this.i.HEAPU8.set(n,i),e?this.i._changeBinaryGraph(t,i):this.i._changeTextGraph(t,i),this.i._free(i)}configureAudio(n,e,t,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Re(this,i||"input_audio",s=>{Re(this,r=r||"audio_header",o=>{this.i._configureAudio(s,o,n,e,t)})})}setAutoResizeCanvas(n){this.l=n}setAutoRenderToScreen(n){this.i._setAutoRenderToScreen(n)}setGpuBufferVerticalFlip(n){this.i.gpuOriginForWebTexturesIsBottomLeft=n}aa(n){ki(this,"__graph_config__",e=>{n(e)}),Re(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(n){this.i.errorListener=n}attachEmptyPacketListener(n,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[n]=e}addAudioToStream(n,e,t){this.addAudioToStreamWithShape(n,0,0,e,t)}addAudioToStreamWithShape(n,e,t,i,r){const s=4*n.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(n,this.g/4),Re(this,i,o=>{this.i._addAudioToInputStream(this.g,e,t,o,r)})}addGpuBufferToStream(n,e,t){Re(this,e,i=>{const[r,s]=Mp(this,n,i);this.i._addBoundTextureToStream(i,r,s,t)})}addBoolToStream(n,e,t){Re(this,e,i=>{this.i._addBoolToInputStream(n,i,t)})}addDoubleToStream(n,e,t){Re(this,e,i=>{this.i._addDoubleToInputStream(n,i,t)})}addFloatToStream(n,e,t){Re(this,e,i=>{this.i._addFloatToInputStream(n,i,t)})}addIntToStream(n,e,t){Re(this,e,i=>{this.i._addIntToInputStream(n,i,t)})}addStringToStream(n,e,t){Re(this,e,i=>{Re(this,n,r=>{this.i._addStringToInputStream(r,i,t)})})}addStringRecordToStream(n,e,t){Re(this,e,i=>{Ep(this,Object.keys(n),r=>{Ep(this,Object.values(n),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(n).length,i,t)})})})}addProtoToStream(n,e,t,i){Re(this,t,r=>{Re(this,e,s=>{const o=this.i._malloc(n.length);this.i.HEAPU8.set(n,o),this.i._addProtoToInputStream(o,n.length,s,r,i),this.i._free(o)})})}addEmptyPacketToStream(n,e){Re(this,n,t=>{this.i._addEmptyPacketToInputStream(t,e)})}addBoolVectorToStream(n,e,t){Re(this,e,i=>{const r=this.i._allocateBoolVector(n.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of n)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,t)})}addDoubleVectorToStream(n,e,t){Re(this,e,i=>{const r=this.i._allocateDoubleVector(n.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of n)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,t)})}addFloatVectorToStream(n,e,t){Re(this,e,i=>{const r=this.i._allocateFloatVector(n.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of n)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,t)})}addIntVectorToStream(n,e,t){Re(this,e,i=>{const r=this.i._allocateIntVector(n.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of n)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,t)})}addStringVectorToStream(n,e,t){Re(this,e,i=>{const r=this.i._allocateStringVector(n.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of n)Re(this,s,o=>{this.i._addStringVectorEntry(r,o)});this.i._addStringVectorToInputStream(r,i,t)})}addBoolToInputSidePacket(n,e){Re(this,e,t=>{this.i._addBoolToInputSidePacket(n,t)})}addDoubleToInputSidePacket(n,e){Re(this,e,t=>{this.i._addDoubleToInputSidePacket(n,t)})}addFloatToInputSidePacket(n,e){Re(this,e,t=>{this.i._addFloatToInputSidePacket(n,t)})}addIntToInputSidePacket(n,e){Re(this,e,t=>{this.i._addIntToInputSidePacket(n,t)})}addStringToInputSidePacket(n,e){Re(this,e,t=>{Re(this,n,i=>{this.i._addStringToInputSidePacket(i,t)})})}addProtoToInputSidePacket(n,e,t){Re(this,t,i=>{Re(this,e,r=>{const s=this.i._malloc(n.length);this.i.HEAPU8.set(n,s),this.i._addProtoToInputSidePacket(s,n.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(n,e){Re(this,e,t=>{const i=this.i._allocateBoolVector(n.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of n)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,t)})}addDoubleVectorToInputSidePacket(n,e){Re(this,e,t=>{const i=this.i._allocateDoubleVector(n.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of n)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,t)})}addFloatVectorToInputSidePacket(n,e){Re(this,e,t=>{const i=this.i._allocateFloatVector(n.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of n)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,t)})}addIntVectorToInputSidePacket(n,e){Re(this,e,t=>{const i=this.i._allocateIntVector(n.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of n)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,t)})}addStringVectorToInputSidePacket(n,e){Re(this,e,t=>{const i=this.i._allocateStringVector(n.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of n)Re(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,t)})}attachBoolListener(n,e){ki(this,n,e),Re(this,n,t=>{this.i._attachBoolListener(t)})}attachBoolVectorListener(n,e){Ir(this,n,e),Re(this,n,t=>{this.i._attachBoolVectorListener(t)})}attachIntListener(n,e){ki(this,n,e),Re(this,n,t=>{this.i._attachIntListener(t)})}attachIntVectorListener(n,e){Ir(this,n,e),Re(this,n,t=>{this.i._attachIntVectorListener(t)})}attachDoubleListener(n,e){ki(this,n,e),Re(this,n,t=>{this.i._attachDoubleListener(t)})}attachDoubleVectorListener(n,e){Ir(this,n,e),Re(this,n,t=>{this.i._attachDoubleVectorListener(t)})}attachFloatListener(n,e){ki(this,n,e),Re(this,n,t=>{this.i._attachFloatListener(t)})}attachFloatVectorListener(n,e){Ir(this,n,e),Re(this,n,t=>{this.i._attachFloatVectorListener(t)})}attachStringListener(n,e){ki(this,n,e),Re(this,n,t=>{this.i._attachStringListener(t)})}attachStringVectorListener(n,e){Ir(this,n,e),Re(this,n,t=>{this.i._attachStringVectorListener(t)})}attachProtoListener(n,e,t){ki(this,n,e),Re(this,n,i=>{this.i._attachProtoListener(i,t||!1)})}attachProtoVectorListener(n,e,t){Ir(this,n,e),Re(this,n,i=>{this.i._attachProtoVectorListener(i,t||!1)})}attachAudioListener(n,e,t){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),ki(this,n,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)}),Re(this,n,i=>{this.i._attachAudioListener(i,t||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Pp{get ca(){return this.i}pa(n,e,t){Re(this,e,i=>{const[r,s]=Mp(this,n,i);this.ca._addBoundTextureAsImageToStream(i,r,s,t)})}X(n,e){ki(this,n,e),Re(this,n,t=>{this.ca._attachImageListener(t)})}Y(n,e){Ir(this,n,e),Re(this,n,t=>{this.ca._attachImageVectorListener(t)})}}));var Pp,pi=class extends pA{};async function tt(n,e,t){return async function(i,r,s,o){return dA(i,r,s,o)}(n,t.canvas??(typeof OffscreenCanvas>"u"||n_()?document.createElement("canvas"):void 0),e,t)}function h_(n,e,t,i){if(n.da){const s=new M0;if(t!=null&&t.regionOfInterest){if(!n.na)throw Error("This task doesn't support region-of-interest.");var r=t.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(0>r.left||0>r.top||1<r.right||1<r.bottom)throw Error("Expected RectF values to be in [0,1].");He(s,1,(r.left+r.right)/2),He(s,2,(r.top+r.bottom)/2),He(s,4,r.right-r.left),He(s,3,r.bottom-r.top)}else He(s,1,.5),He(s,2,.5),He(s,4,1),He(s,3,1);if(t!=null&&t.rotationDegrees){if((t==null?void 0:t.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(He(s,5,-Math.PI*t.rotationDegrees/180),(t==null?void 0:t.rotationDegrees)%180!=0){const[o,a]=e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:[e.width,e.height];t=on(s,3)*a/o,r=on(s,4)*o/a,He(s,4,t),He(s,3,r)}}n.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",n.da,i)}n.g.pa(e,n.ma,i??performance.now()),n.finishProcessing()}function mi(n,e,t){var i;if((i=n.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");h_(n,e,t,n.N+1)}function Ji(n,e,t,i){var r;if(!((r=n.baseOptions)!=null&&r.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");h_(n,e,t,i)}function jo(n,e,t){var i=e.data;const r=e.width,s=r*(e=e.height);if((i instanceof Uint8Array||i instanceof Float32Array)&&i.length!==s)throw Error("Unsupported channel count: "+i.length/s);return n=new Zt([i],!1,n.g.i.canvas,n.U,r,e),t?n.clone():n}var Nn=class extends Iu{constructor(n,e,t,i){super(n),this.g=n,this.ma=e,this.da=t,this.na=i,this.U=new zh}l(n,e=!0){if("runningMode"in n&&Wo(this.baseOptions,2,!!n.runningMode&&n.runningMode!=="IMAGE"),n.canvas!==void 0&&this.g.i.canvas!==n.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(n,e)}close(){this.U.close(),super.close()}};Nn.prototype.close=Nn.prototype.close;var Hn=class extends Nn{constructor(n,e){super(new pi(n,e),"image_in","norm_rect_in",!1),this.j={detections:[]},this.h=new Ih,n=new Ut,Fe(this.h,0,1,n),He(this.h,2,.5),He(this.h,3,.3)}get baseOptions(){return st(this.h,Ut,1)}set baseOptions(n){Fe(this.h,0,1,n)}o(n){return"minDetectionConfidence"in n&&He(this.h,2,n.minDetectionConfidence??.5),"minSuppressionThreshold"in n&&He(this.h,3,n.minSuppressionThreshold??.3),this.l(n)}F(n,e){return this.j={detections:[]},mi(this,n,e),this.j}G(n,e,t){return this.j={detections:[]},Ji(this,n,t,e),this.j}m(){var n=new bn;wt(n,"image_in"),wt(n,"norm_rect_in"),St(n,"detections");const e=new ei;hi(e,YS,this.h);const t=new vn;ni(t,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Mt(t,"IMAGE:image_in"),Mt(t,"NORM_RECT:norm_rect_in"),pt(t,"DETECTIONS:detections"),t.o(e),ii(n,t),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=m0(s),this.j.detections.push(J0(i));De(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{De(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Hn.prototype.detectForVideo=Hn.prototype.G,Hn.prototype.detect=Hn.prototype.F,Hn.prototype.setOptions=Hn.prototype.o,Hn.createFromModelPath=async function(n,e){return tt(Hn,n,{baseOptions:{modelAssetPath:e}})},Hn.createFromModelBuffer=function(n,e){return tt(Hn,n,{baseOptions:{modelAssetBuffer:e}})},Hn.createFromOptions=function(n,e){return tt(Hn,n,e)};var d_=fi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),f_=fi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),p_=fi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),mA=fi([474,475],[475,476],[476,477],[477,474]),m_=fi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),g_=fi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),gA=fi([469,470],[470,471],[471,472],[472,469]),__=fi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),_A=[...d_,...f_,...p_,...m_,...g_,...__],vA=fi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Cp(n){n.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Lt=class extends Nn{constructor(n,e){super(new pi(n,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,this.h=new I0,n=new Ut,Fe(this.h,0,1,n),this.v=new $S,Fe(this.h,0,3,this.v),this.u=new Ih,Fe(this.h,0,2,this.u),Ri(this.u,4,1),He(this.u,2,.5),He(this.v,2,.5),He(this.h,4,.5)}get baseOptions(){return st(this.h,Ut,1)}set baseOptions(n){Fe(this.h,0,1,n)}o(n){return"numFaces"in n&&Ri(this.u,4,n.numFaces??1),"minFaceDetectionConfidence"in n&&He(this.u,2,n.minFaceDetectionConfidence??.5),"minTrackingConfidence"in n&&He(this.h,4,n.minTrackingConfidence??.5),"minFacePresenceConfidence"in n&&He(this.v,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in n&&(this.outputFacialTransformationMatrixes=!!n.outputFacialTransformationMatrixes),this.l(n)}F(n,e){return Cp(this),mi(this,n,e),this.j}G(n,e,t){return Cp(this),Ji(this,n,t,e),this.j}m(){var n=new bn;wt(n,"image_in"),wt(n,"norm_rect"),St(n,"face_landmarks");const e=new ei;hi(e,ZS,this.h);const t=new vn;ni(t,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Mt(t,"IMAGE:image_in"),Mt(t,"NORM_RECT:norm_rect"),pt(t,"NORM_LANDMARKS:face_landmarks"),t.o(e),ii(n,t),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(const s of i)i=Xl(s),this.j.faceLandmarks.push(Oh(i));De(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{De(this,i)}),this.outputFaceBlendshapes&&(St(n,"blendshapes"),pt(t,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Ph(s),this.j.faceBlendshapes.push(Q0(i.g()??[]));De(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{De(this,i)})),this.outputFacialTransformationMatrixes&&(St(n,"face_geometry"),pt(t,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=st(KS(s),y0,2))&&this.j.facialTransformationMatrixes.push({rows:bi(Kn(i,1))??0,columns:bi(Kn(i,2))??0,data:Cs(i,3,yr)??[]});De(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{De(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Lt.prototype.detectForVideo=Lt.prototype.G,Lt.prototype.detect=Lt.prototype.F,Lt.prototype.setOptions=Lt.prototype.o,Lt.createFromModelPath=function(n,e){return tt(Lt,n,{baseOptions:{modelAssetPath:e}})},Lt.createFromModelBuffer=function(n,e){return tt(Lt,n,{baseOptions:{modelAssetBuffer:e}})},Lt.createFromOptions=function(n,e){return tt(Lt,n,e)},Lt.FACE_LANDMARKS_LIPS=d_,Lt.FACE_LANDMARKS_LEFT_EYE=f_,Lt.FACE_LANDMARKS_LEFT_EYEBROW=p_,Lt.FACE_LANDMARKS_LEFT_IRIS=mA,Lt.FACE_LANDMARKS_RIGHT_EYE=m_,Lt.FACE_LANDMARKS_RIGHT_EYEBROW=g_,Lt.FACE_LANDMARKS_RIGHT_IRIS=gA,Lt.FACE_LANDMARKS_FACE_OVAL=__,Lt.FACE_LANDMARKS_CONTOURS=_A,Lt.FACE_LANDMARKS_TESSELATION=vA;var gi=class extends Nn{constructor(n,e){super(new pi(n,e),"image_in","norm_rect",!0),this.j=new U0,n=new Ut,Fe(this.j,0,1,n)}get baseOptions(){return st(this.j,Ut,1)}set baseOptions(n){Fe(this.j,0,1,n)}o(n){return super.l(n)}Pa(n,e,t){const i=typeof e!="function"?e:{};if(this.h=typeof e=="function"?e:t,mi(this,n,i??{}),!this.h)return this.u}m(){var n=new bn;wt(n,"image_in"),wt(n,"norm_rect"),St(n,"stylized_image");const e=new ei;hi(e,QS,this.j);const t=new vn;ni(t,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),Mt(t,"IMAGE:image_in"),Mt(t,"NORM_RECT:norm_rect"),pt(t,"STYLIZED_IMAGE:stylized_image"),t.o(e),ii(n,t),this.g.X("stylized_image",(i,r)=>{var s=!this.h,o=i.data,a=i.width;const l=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*l){const c=new Uint8ClampedArray(4*l);for(let u=0;u<l;++u)c[4*u]=o[3*u],c[4*u+1]=o[3*u+1],c[4*u+2]=o[3*u+2],c[4*u+3]=255;o=new ImageData(c,a,i)}else{if(o.length!==4*l)throw Error("Unsupported channel count: "+o.length/l);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new Qt([o],!1,!1,this.g.i.canvas,this.U,a,i),this.u=s=s?a.clone():a,this.h&&this.h(s),De(this,r)}),this.g.attachEmptyPacketListener("stylized_image",i=>{this.u=null,this.h&&this.h(null),De(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};gi.prototype.stylize=gi.prototype.Pa,gi.prototype.setOptions=gi.prototype.o,gi.createFromModelPath=function(n,e){return tt(gi,n,{baseOptions:{modelAssetPath:e}})},gi.createFromModelBuffer=function(n,e){return tt(gi,n,{baseOptions:{modelAssetBuffer:e}})},gi.createFromOptions=function(n,e){return tt(gi,n,e)};var v_=fi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Ip(n){n.gestures=[],n.landmarks=[],n.worldLandmarks=[],n.handedness=[]}function Dp(n){return n.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:n.gestures,landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handedness:n.handedness,handednesses:n.handedness}}function Up(n,e=!0){const t=[];for(const r of n){var i=Ph(r);n=[];for(const s of i.g())i=e&&Kn(s,1)!=null?bi(Kn(s,1)):-1,n.push({score:on(s,2)??0,index:i,categoryName:Jn(s,3)??""??"",displayName:Jn(s,4)??""??""});t.push(n)}return t}var Cn=class extends Nn{constructor(n,e){super(new pi(n,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],this.v=new G0,n=new Ut,Fe(this.v,0,1,n),this.C=new Dh,Fe(this.v,0,2,this.C),this.u=new k0,Fe(this.C,0,3,this.u),this.h=new B0,Fe(this.C,0,2,this.h),this.j=new JS,Fe(this.v,0,3,this.j),He(this.h,2,.5),He(this.C,4,.5),He(this.u,2,.5)}get baseOptions(){return st(this.v,Ut,1)}set baseOptions(n){Fe(this.v,0,1,n)}o(n){var i,r,s,o;if(Ri(this.h,3,n.numHands??1),"minHandDetectionConfidence"in n&&He(this.h,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&He(this.C,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&He(this.u,2,n.minHandPresenceConfidence??.5),n.cannedGesturesClassifierOptions){var e=new Ms,t=Cu(n.cannedGesturesClassifierOptions,(i=st(this.j,Ms,3))==null?void 0:i.h());Fe(e,0,2,t),Fe(this.j,0,3,e)}else n.cannedGesturesClassifierOptions===void 0&&((r=st(this.j,Ms,3))==null||r.g());return n.customGesturesClassifierOptions?(Fe(e=new Ms,0,2,t=Cu(n.customGesturesClassifierOptions,(s=st(this.j,Ms,4))==null?void 0:s.h())),Fe(this.j,0,4,e)):n.customGesturesClassifierOptions===void 0&&((o=st(this.j,Ms,4))==null||o.g()),this.l(n)}Ka(n,e){return Ip(this),mi(this,n,e),Dp(this)}La(n,e,t){return Ip(this),Ji(this,n,t,e),Dp(this)}m(){var n=new bn;wt(n,"image_in"),wt(n,"norm_rect"),St(n,"hand_gestures"),St(n,"hand_landmarks"),St(n,"world_hand_landmarks"),St(n,"handedness");const e=new ei;hi(e,nA,this.v);const t=new vn;ni(t,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Mt(t,"IMAGE:image_in"),Mt(t,"NORM_RECT:norm_rect"),pt(t,"HAND_GESTURES:hand_gestures"),pt(t,"LANDMARKS:hand_landmarks"),pt(t,"WORLD_LANDMARKS:world_hand_landmarks"),pt(t,"HANDEDNESS:handedness"),t.o(e),ii(n,t),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i){i=Xl(s);const o=[];for(const a of Ki(i,v0,1))o.push({x:on(a,1)??0,y:on(a,2)??0,z:on(a,3)??0});this.landmarks.push(o)}De(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{De(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i){i=Ch(s);const o=[];for(const a of Ki(i,g0,1))o.push({x:on(a,1)??0,y:on(a,2)??0,z:on(a,3)??0});this.worldLandmarks.push(o)}De(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{De(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...Up(i,!1)),De(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{De(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...Up(i)),De(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{De(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};function Np(n){return{landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handednesses:n.handedness,handedness:n.handedness}}Cn.prototype.recognizeForVideo=Cn.prototype.La,Cn.prototype.recognize=Cn.prototype.Ka,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(n,e){return tt(Cn,n,{baseOptions:{modelAssetPath:e}})},Cn.createFromModelBuffer=function(n,e){return tt(Cn,n,{baseOptions:{modelAssetBuffer:e}})},Cn.createFromOptions=function(n,e){return tt(Cn,n,e)},Cn.HAND_CONNECTIONS=v_;var yn=class extends Nn{constructor(n,e){super(new pi(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],this.j=new Dh,n=new Ut,Fe(this.j,0,1,n),this.u=new k0,Fe(this.j,0,3,this.u),this.h=new B0,Fe(this.j,0,2,this.h),Ri(this.h,3,1),He(this.h,2,.5),He(this.u,2,.5),He(this.j,4,.5)}get baseOptions(){return st(this.j,Ut,1)}set baseOptions(n){Fe(this.j,0,1,n)}o(n){return"numHands"in n&&Ri(this.h,3,n.numHands??1),"minHandDetectionConfidence"in n&&He(this.h,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&He(this.j,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&He(this.u,2,n.minHandPresenceConfidence??.5),this.l(n)}F(n,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],mi(this,n,e),Np(this)}G(n,e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ji(this,n,t,e),Np(this)}m(){var n=new bn;wt(n,"image_in"),wt(n,"norm_rect"),St(n,"hand_landmarks"),St(n,"world_hand_landmarks"),St(n,"handedness");const e=new ei;hi(e,tA,this.j);const t=new vn;ni(t,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Mt(t,"IMAGE:image_in"),Mt(t,"NORM_RECT:norm_rect"),pt(t,"LANDMARKS:hand_landmarks"),pt(t,"WORLD_LANDMARKS:world_hand_landmarks"),pt(t,"HANDEDNESS:handedness"),t.o(e),ii(n,t),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i)i=Xl(s),this.landmarks.push(Oh(i));De(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{De(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i)i=Ch(s),this.worldLandmarks.push(e_(i));De(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{De(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,o=s.push;const a=[];for(const l of i){i=Ph(l);const c=[];for(const u of i.g())c.push({score:on(u,2)??0,index:bi(Kn(u,1))??-1,categoryName:Jn(u,3)??""??"",displayName:Jn(u,4)??""??""});a.push(c)}o.call(s,...a),De(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{De(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};yn.prototype.detectForVideo=yn.prototype.G,yn.prototype.detect=yn.prototype.F,yn.prototype.setOptions=yn.prototype.o,yn.createFromModelPath=function(n,e){return tt(yn,n,{baseOptions:{modelAssetPath:e}})},yn.createFromModelBuffer=function(n,e){return tt(yn,n,{baseOptions:{modelAssetBuffer:e}})},yn.createFromOptions=function(n,e){return tt(yn,n,e)},yn.HAND_CONNECTIONS=v_;var kn=class extends Nn{constructor(n,e){super(new pi(n,e),"input_image","norm_rect",!0),this.j={classifications:[]},this.h=new W0,n=new Ut,Fe(this.h,0,1,n)}get baseOptions(){return st(this.h,Ut,1)}set baseOptions(n){Fe(this.h,0,1,n)}o(n){var e=Cu(n,st(this.h,jl,2));return Fe(this.h,0,2,e),this.l(n)}sa(n,e){return this.j={classifications:[]},mi(this,n,e),this.j}ta(n,e,t){return this.j={classifications:[]},Ji(this,n,t,e),this.j}m(){var n=new bn;wt(n,"input_image"),wt(n,"norm_rect"),St(n,"classifications");const e=new ei;hi(e,iA,this.h);const t=new vn;ni(t,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Mt(t,"IMAGE:input_image"),Mt(t,"NORM_RECT:norm_rect"),pt(t,"CLASSIFICATIONS:classifications"),t.o(e),ii(n,t),this.g.attachProtoListener("classifications",(i,r)=>{this.j=function(s){const o={classifications:Ki(s,kS,1).map(a=>{var l;return Q0(((l=st(a,Lh,4))==null?void 0:l.g())??[],bi(Kn(a,2)),Jn(a,3)??"")})};return _l(Ks(s,2))!=null&&(o.timestampMs=bi(_l(Ks(s,2)))),o}(VS(i)),De(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{De(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};kn.prototype.classifyForVideo=kn.prototype.ta,kn.prototype.classify=kn.prototype.sa,kn.prototype.setOptions=kn.prototype.o,kn.createFromModelPath=function(n,e){return tt(kn,n,{baseOptions:{modelAssetPath:e}})},kn.createFromModelBuffer=function(n,e){return tt(kn,n,{baseOptions:{modelAssetBuffer:e}})},kn.createFromOptions=function(n,e){return tt(kn,n,e)};var In=class extends Nn{constructor(n,e){super(new pi(n,e),"image_in","norm_rect",!0),this.h=new X0,this.embeddings={embeddings:[]},n=new Ut,Fe(this.h,0,1,n)}get baseOptions(){return st(this.h,Ut,1)}set baseOptions(n){Fe(this.h,0,1,n)}o(n){var e=this.h,t=st(this.h,gp,2);return t=t?t.clone():new gp,n.l2Normalize!==void 0?Wo(t,1,n.l2Normalize):"l2Normalize"in n&&xt(t,1),n.quantize!==void 0?Wo(t,2,n.quantize):"quantize"in n&&xt(t,2),Fe(e,0,2,t),this.l(n)}xa(n,e){return mi(this,n,e),this.embeddings}ya(n,e,t){return Ji(this,n,t,e),this.embeddings}m(){var n=new bn;wt(n,"image_in"),wt(n,"norm_rect"),St(n,"embeddings_out");const e=new ei;hi(e,rA,this.h);const t=new vn;ni(t,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Mt(t,"IMAGE:image_in"),Mt(t,"NORM_RECT:norm_rect"),pt(t,"EMBEDDINGS:embeddings_out"),t.o(e),ii(n,t),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=jS(i),this.embeddings=function(s){return{embeddings:Ki(s,WS,1).map(o=>{var l,c;const a={headIndex:bi(Kn(o,3))??-1,headName:Jn(o,4)??""??""};if(kg(o,Lu,jc(o,1))!==void 0)o=Cs(o=st(o,Lu,jc(o,1)),1,yr),a.floatEmbedding=o;else{const u=new Uint8Array(0);a.quantizedEmbedding=((c=(l=st(o,GS,jc(o,2)))==null?void 0:l.oa())==null?void 0:c.qa())??u}return a}),timestampMs:bi(_l(Ks(s,2)))}}(i),De(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{De(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};In.cosineSimilarity=function(n,e){if(n.floatEmbedding&&e.floatEmbedding)n=xp(n.floatEmbedding,e.floatEmbedding);else{if(!n.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");n=xp(vp(n.quantizedEmbedding),vp(e.quantizedEmbedding))}return n},In.prototype.embedForVideo=In.prototype.ya,In.prototype.embed=In.prototype.xa,In.prototype.setOptions=In.prototype.o,In.createFromModelPath=function(n,e){return tt(In,n,{baseOptions:{modelAssetPath:e}})},In.createFromModelBuffer=function(n,e){return tt(In,n,{baseOptions:{modelAssetBuffer:e}})},In.createFromOptions=function(n,e){return tt(In,n,e)};var Nu=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){var n,e;(n=this.confidenceMasks)==null||n.forEach(t=>{t.close()}),(e=this.categoryMask)==null||e.close()}};function Op(n){n.categoryMask=void 0,n.confidenceMasks=void 0,n.qualityScores=void 0}function Fp(n){try{const e=new Nu(n.confidenceMasks,n.categoryMask,n.qualityScores);if(!n.j)return e;n.j(e)}finally{Bh(n)}}Nu.prototype.close=Nu.prototype.close;var xn=class extends Nn{constructor(n,e){super(new pi(n,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Uh,this.v=new j0,Fe(this.h,0,3,this.v),n=new Ut,Fe(this.h,0,1,n)}get baseOptions(){return st(this.h,Ut,1)}set baseOptions(n){Fe(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?xt(this.h,2,sa(n.displayNamesLocale)):"displayNamesLocale"in n&&xt(this.h,2),"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}V(){(function(n){var t,i;const e=Ki(n.aa(),vn,1).filter(r=>(Jn(r,1)??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(n.u=[],1<e.length)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((i=(t=st(e[0],ei,7))==null?void 0:t.l())==null?void 0:i.g())??new Map).forEach((r,s)=>{n.u[Number(s)]=Jn(r,1)??""})})(this)}ba(n,e,t){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:t,Op(this),mi(this,n,i),Fp(this)}Na(n,e,t,i){const r=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:i,Op(this),Ji(this,n,r,e),Fp(this)}Da(){return this.u}m(){var n=new bn;wt(n,"image_in"),wt(n,"norm_rect");const e=new ei;hi(e,Y0,this.h);const t=new vn;ni(t,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Mt(t,"IMAGE:image_in"),Mt(t,"NORM_RECT:norm_rect"),t.o(e),ii(n,t),Fh(this,n),this.outputConfidenceMasks&&(St(n,"confidence_masks"),pt(t,"CONFIDENCE_MASKS:confidence_masks"),Xo(this,"confidence_masks"),this.g.Y("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>jo(this,s,!this.j)),De(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],De(this,i)})),this.outputCategoryMask&&(St(n,"category_mask"),pt(t,"CATEGORY_MASK:category_mask"),Xo(this,"category_mask"),this.g.X("category_mask",(i,r)=>{this.categoryMask=jo(this,i,!this.j),De(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,De(this,i)})),St(n,"quality_scores"),pt(t,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,De(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,De(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};xn.prototype.getLabels=xn.prototype.Da,xn.prototype.segmentForVideo=xn.prototype.Na,xn.prototype.segment=xn.prototype.ba,xn.prototype.setOptions=xn.prototype.o,xn.createFromModelPath=function(n,e){return tt(xn,n,{baseOptions:{modelAssetPath:e}})},xn.createFromModelBuffer=function(n,e){return tt(xn,n,{baseOptions:{modelAssetBuffer:e}})},xn.createFromOptions=function(n,e){return tt(xn,n,e)};var Ou=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){var n,e;(n=this.confidenceMasks)==null||n.forEach(t=>{t.close()}),(e=this.categoryMask)==null||e.close()}};Ou.prototype.close=Ou.prototype.close;var xA=class extends ye{constructor(n){super(n)}},Zs=[0,Nt,-2],yA=[0,qi,-3,Gt],Yl=[0,qi,-3,Gt,qi,-1],x_=[0,Yl],MA=[0,x_,Zs],EA=[0,Yl,Zs],y_=[0,Yl,Nt,-1],TA=[0,y_,Zs],SA=[0,qi,-3,Gt,Zs,-1],AA=[0,qi,-3,Gt,Li],Kc=class extends ye{constructor(n){super(n)}},Bp=[0,qi,-1,Gt],M_=class extends ye{constructor(){super()}};M_.A=[1];var Hp=class extends ye{constructor(n){super(n)}},Fu=[1,2,3,4,5,6,7,8,9,10,14,15],wA=[0,Fu,Tt,Yl,Tt,EA,Tt,x_,Tt,MA,Tt,Bp,Tt,AA,Tt,yA,Tt,[0,Et,qi,-2,Gt,Nt,Gt,-1,2,qi,Zs],Tt,y_,Tt,TA,qi,Zs,Et,Tt,SA,Tt,[0,Wt,Bp]],bA=[0,Et,Nt,-1,Gt],Bu=class extends ye{constructor(){super()}};Bu.A=[1],Bu.prototype.g=Rh([0,Wt,wA,Et,bA]);var _i=class extends Nn{constructor(n,e){super(new pi(n,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Uh,this.v=new j0,Fe(this.h,0,3,this.v),n=new Ut,Fe(this.h,0,1,n)}get baseOptions(){return st(this.h,Ut,1)}set baseOptions(n){Fe(this.h,0,1,n)}o(n){return"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}ba(n,e,t,i){const r=typeof t!="function"?t:{};this.j=typeof t=="function"?t:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,t=this.N+1,i=new Bu;const s=new Hp;var o=new xA;if(Ri(o,1,255),Fe(s,0,12,o),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var a=new Kc;Wo(a,3,!0),He(a,1,e.keypoint.x),He(a,2,e.keypoint.y),Do(s,5,Fu,a)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new M_,e.scribble))Wo(e=new Kc,3,!0),He(e,1,a.x),He(e,2,a.y),Ru(o,Kc,e);Do(s,15,Fu,o)}Ru(i,Hp,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",t),mi(this,n,r);e:{try{const c=new Ou(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var l=c;break e}this.j(c)}finally{Bh(this)}l=void 0}return l}m(){var n=new bn;wt(n,"image_in"),wt(n,"roi_in"),wt(n,"norm_rect_in");const e=new ei;hi(e,Y0,this.h);const t=new vn;ni(t,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),Mt(t,"IMAGE:image_in"),Mt(t,"ROI:roi_in"),Mt(t,"NORM_RECT:norm_rect_in"),t.o(e),ii(n,t),Fh(this,n),this.outputConfidenceMasks&&(St(n,"confidence_masks"),pt(t,"CONFIDENCE_MASKS:confidence_masks"),Xo(this,"confidence_masks"),this.g.Y("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>jo(this,s,!this.j)),De(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],De(this,i)})),this.outputCategoryMask&&(St(n,"category_mask"),pt(t,"CATEGORY_MASK:category_mask"),Xo(this,"category_mask"),this.g.X("category_mask",(i,r)=>{this.categoryMask=jo(this,i,!this.j),De(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,De(this,i)})),St(n,"quality_scores"),pt(t,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,De(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,De(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};_i.prototype.segment=_i.prototype.ba,_i.prototype.setOptions=_i.prototype.o,_i.createFromModelPath=function(n,e){return tt(_i,n,{baseOptions:{modelAssetPath:e}})},_i.createFromModelBuffer=function(n,e){return tt(_i,n,{baseOptions:{modelAssetBuffer:e}})},_i.createFromOptions=function(n,e){return tt(_i,n,e)};var zn=class extends Nn{constructor(n,e){super(new pi(n,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},this.h=new Nh,n=new Ut,Fe(this.h,0,1,n)}get baseOptions(){return st(this.h,Ut,1)}set baseOptions(n){Fe(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?xt(this.h,2,sa(n.displayNamesLocale)):"displayNamesLocale"in n&&xt(this.h,2),n.maxResults!==void 0?Ri(this.h,3,n.maxResults):"maxResults"in n&&xt(this.h,3),n.scoreThreshold!==void 0?He(this.h,4,n.scoreThreshold):"scoreThreshold"in n&&xt(this.h,4),n.categoryAllowlist!==void 0?yl(this.h,5,n.categoryAllowlist):"categoryAllowlist"in n&&xt(this.h,5),n.categoryDenylist!==void 0?yl(this.h,6,n.categoryDenylist):"categoryDenylist"in n&&xt(this.h,6),this.l(n)}F(n,e){return this.j={detections:[]},mi(this,n,e),this.j}G(n,e,t){return this.j={detections:[]},Ji(this,n,t,e),this.j}m(){var n=new bn;wt(n,"input_frame_gpu"),wt(n,"norm_rect"),St(n,"detections");const e=new ei;hi(e,oA,this.h);const t=new vn;ni(t,"mediapipe.tasks.vision.ObjectDetectorGraph"),Mt(t,"IMAGE:input_frame_gpu"),Mt(t,"NORM_RECT:norm_rect"),pt(t,"DETECTIONS:detections"),t.o(e),ii(n,t),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=m0(s),this.j.detections.push(J0(i));De(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{De(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};zn.prototype.detectForVideo=zn.prototype.G,zn.prototype.detect=zn.prototype.F,zn.prototype.setOptions=zn.prototype.o,zn.createFromModelPath=async function(n,e){return tt(zn,n,{baseOptions:{modelAssetPath:e}})},zn.createFromModelBuffer=function(n,e){return tt(zn,n,{baseOptions:{modelAssetBuffer:e}})},zn.createFromOptions=function(n,e){return tt(zn,n,e)};function kp(n){n.landmarks=[],n.worldLandmarks=[],n.v=void 0}function zp(n){try{const e=new class{constructor(t,i,r){this.landmarks=t,this.worldLandmarks=i,this.g=r}close(){var t;(t=this.g)==null||t.forEach(i=>{i.close()})}}(n.landmarks,n.worldLandmarks,n.v);if(!n.u)return e;n.u(e)}finally{Bh(n)}}var Mn=class extends Nn{constructor(n,e){super(new pi(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,this.h=new Z0,n=new Ut,Fe(this.h,0,1,n),this.C=new lA,Fe(this.h,0,3,this.C),this.j=new aA,Fe(this.h,0,2,this.j),Ri(this.j,4,1),He(this.j,2,.5),He(this.C,2,.5),He(this.h,4,.5)}get baseOptions(){return st(this.h,Ut,1)}set baseOptions(n){Fe(this.h,0,1,n)}o(n){return"numPoses"in n&&Ri(this.j,4,n.numPoses??1),"minPoseDetectionConfidence"in n&&He(this.j,2,n.minPoseDetectionConfidence??.5),"minTrackingConfidence"in n&&He(this.h,4,n.minTrackingConfidence??.5),"minPosePresenceConfidence"in n&&He(this.C,2,n.minPosePresenceConfidence??.5),"outputSegmentationMasks"in n&&(this.outputSegmentationMasks=n.outputSegmentationMasks??!1),this.l(n)}F(n,e,t){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:t,kp(this),mi(this,n,i),zp(this)}G(n,e,t,i){const r=typeof t!="function"?t:{};return this.u=typeof t=="function"?t:i,kp(this),Ji(this,n,r,e),zp(this)}m(){var n=new bn;wt(n,"image_in"),wt(n,"norm_rect"),St(n,"normalized_landmarks"),St(n,"world_landmarks"),St(n,"segmentation_masks");const e=new ei;hi(e,uA,this.h);const t=new vn;ni(t,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Mt(t,"IMAGE:image_in"),Mt(t,"NORM_RECT:norm_rect"),pt(t,"NORM_LANDMARKS:normalized_landmarks"),pt(t,"WORLD_LANDMARKS:world_landmarks"),t.o(e),ii(n,t),Fh(this,n),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(const s of i)i=Xl(s),this.landmarks.push(Oh(i));De(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],De(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(const s of i)i=Ch(s),this.worldLandmarks.push(e_(i));De(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],De(this,i)}),this.outputSegmentationMasks&&(pt(t,"SEGMENTATION_MASK:segmentation_masks"),Xo(this,"segmentation_masks"),this.g.Y("segmentation_masks",(i,r)=>{this.v=i.map(s=>jo(this,s,!this.u)),De(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.v=[],De(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Mn.prototype.detectForVideo=Mn.prototype.G,Mn.prototype.detect=Mn.prototype.F,Mn.prototype.setOptions=Mn.prototype.o,Mn.createFromModelPath=function(n,e){return tt(Mn,n,{baseOptions:{modelAssetPath:e}})},Mn.createFromModelBuffer=function(n,e){return tt(Mn,n,{baseOptions:{modelAssetBuffer:e}})},Mn.createFromOptions=function(n,e){return tt(Mn,n,e)},Mn.POSE_CONNECTIONS=fi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);class Gh{constructor(){at(this,"vision");at(this,"visionTaskBasePath","https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm");at(this,"faceLandmakerModelAssetPath","https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task");at(this,"poseLandmakerModelAssetPath","https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task");at(this,"handLandmakerModelAssetPath","https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task")}static async build(){const e=new Gh;return e.vision=await e.loadVision(),e}async loadVision(){return await wo.forVisionTasks(this.visionTaskBasePath)}async getFaceLandmarker(){return await Lt.createFromOptions(this.vision,{baseOptions:{modelAssetPath:this.faceLandmakerModelAssetPath,delegate:"GPU"},outputFaceBlendshapes:!0,minFaceDetectionConfidence:.5,minFacePresenceConfidence:.5,minTrackingConfidence:1,runningMode:"VIDEO",numFaces:1})}async getPoseLandmarker(){return await Mn.createFromOptions(this.vision,{baseOptions:{modelAssetPath:this.poseLandmakerModelAssetPath,delegate:"GPU"},minPoseDetectionConfidence:.5,minPosePresenceConfidence:.5,minTrackingConfidence:1,runningMode:"VIDEO",numPoses:1})}async getHandLandmarker(){return await yn.createFromOptions(this.vision,{baseOptions:{modelAssetPath:this.handLandmakerModelAssetPath,delegate:"GPU"},minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:1,runningMode:"VIDEO",numHands:2})}}/*!
 * @pixiv/three-vrm v2.0.7
 * VRM file loader for three.js.
 *
 * Copyright (c) 2019-2023 pixiv Inc.
 * @pixiv/three-vrm is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-core v2.0.7
 * The implementation of core features of VRM, for @pixiv/three-vrm
 *
 * Copyright (c) 2020-2023 pixiv Inc.
 * @pixiv/three-vrm-core is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */class Vp extends ft{get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.weight?1:0:this.overrideBlink==="blend"?this.weight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.weight?1:0:this.overrideLookAt==="blend"?this.weight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.weight?1:0:this.overrideMouth==="blend"?this.weight:0}constructor(e){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${e}`,this.expressionName=e,this.type="VRMExpression",this.visible=!1}addBind(e){this._binds.push(e)}applyWeight(e){var t;let i=this.isBinary?this.weight<=.5?0:1:this.weight;i*=(t=e==null?void 0:e.multiplier)!==null&&t!==void 0?t:1,this._binds.forEach(r=>r.applyWeight(i))}clearAppliedWeight(){this._binds.forEach(e=>e.clearAppliedWeight())}}function it(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(i.next(u))}catch(h){o(h)}}function l(u){try{c(i.throw(u))}catch(h){o(h)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((i=i.apply(n,e||[])).next())})}function E_(n,e,t){var i,r;const s=n.parser.json,o=(i=s.nodes)===null||i===void 0?void 0:i[e];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;const a=o.mesh;if(a==null)return null;const l=(r=s.meshes)===null||r===void 0?void 0:r[a];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;const c=l.primitives.length,u=[];return t.traverse(h=>{u.length<c&&h.isMesh&&u.push(h)}),u}function Gp(n,e){return it(this,void 0,void 0,function*(){const t=yield n.parser.getDependency("node",e);return E_(n,e,t)})}function Wp(n){return it(this,void 0,void 0,function*(){const e=yield n.parser.getDependencies("node"),t=new Map;return e.forEach((i,r)=>{const s=E_(n,r,i);s!=null&&t.set(r,s)}),t})}function Xp(n,e){var t,i;const r=parseInt(ci,10);let s=null;if(r>=133)s=(i=(t=n.associations.get(e))===null||t===void 0?void 0:t.materials)!==null&&i!==void 0?i:null;else{const a=n.associations.get(e);(a==null?void 0:a.type)==="materials"&&(s=a.index)}return s}const yi={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function T_(n){return Math.max(Math.min(n,1),0)}class El{get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){const e={},t=new Set(Object.values(yi));return Object.entries(this._expressionMap).forEach(([i,r])=>{t.has(i)&&(e[i]=r)}),e}get customExpressionMap(){const e={},t=new Set(Object.values(yi));return Object.entries(this._expressionMap).forEach(([i,r])=>{t.has(i)||(e[i]=r)}),e}constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}copy(e){return this._expressions.concat().forEach(i=>{this.unregisterExpression(i)}),e._expressions.forEach(i=>{this.registerExpression(i)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new El().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!==null&&t!==void 0?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){const t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;const i=this.getExpression(e);return(t=i==null?void 0:i.weight)!==null&&t!==void 0?t:null}setValue(e,t){const i=this.getExpression(e);i&&(i.weight=T_(t))}getExpressionTrackName(e){const t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){const e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let i=1;const r=t.expressionName;this.blinkExpressionNames.indexOf(r)!==-1&&(i*=e.blink),this.lookAtExpressionNames.indexOf(r)!==-1&&(i*=e.lookAt),this.mouthExpressionNames.indexOf(r)!==-1&&(i*=e.mouth),t.applyWeight({multiplier:i})})}_calculateWeightMultipliers(){let e=1,t=1,i=1;return this._expressions.forEach(r=>{e-=r.overrideBlinkAmount,t-=r.overrideLookAtAmount,i-=r.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),i=Math.max(0,i),{blink:e,lookAt:t,mouth:i}}}const yo={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",MatcapColor:"matcapColor",RimColor:"rimColor",OutlineColor:"outlineColor"},RA={_Color:yo.Color,_EmissionColor:yo.EmissionColor,_ShadeColor:yo.ShadeColor,_RimColor:yo.RimColor,_OutlineColor:yo.OutlineColor},LA=new Me;class qo{constructor({material:e,type:t,targetValue:i,targetAlpha:r}){this.material=e,this.type=t,this.targetValue=i,this.targetAlpha=r??1;const s=this._initColorBindState(),o=this._initAlphaBindState();this._state={color:s,alpha:o}}applyWeight(e){const{color:t,alpha:i}=this._state;if(t!=null){const{propertyName:r,deltaValue:s}=t,o=this.material[r];o!=null&&o.add(LA.copy(s).multiplyScalar(e))}if(i!=null){const{propertyName:r,deltaValue:s}=i;this.material[r]!=null&&(this.material[r]+=s*e)}}clearAppliedWeight(){const{color:e,alpha:t}=this._state;if(e!=null){const{propertyName:i,initialValue:r}=e,s=this.material[i];s!=null&&s.copy(r)}if(t!=null){const{propertyName:i,initialValue:r}=t;this.material[i]!=null&&(this.material[i]=r)}}_initColorBindState(){var e,t,i;const{material:r,type:s,targetValue:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a==null?void 0:a[s])===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:null;if(l==null)return console.warn(`Tried to add a material color bind to the material ${(i=r.name)!==null&&i!==void 0?i:"(no name)"}, the type ${s} but the material or the type is not supported.`),null;const u=r[l].clone(),h=new Me(o.r-u.r,o.g-u.g,o.b-u.b);return{propertyName:l,initialValue:u,deltaValue:h}}_initAlphaBindState(){var e,t,i;const{material:r,type:s,targetAlpha:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a==null?void 0:a[s])===null||e===void 0?void 0:e[1])!==null&&t!==void 0?t:null;if(l==null&&o!==1)return console.warn(`Tried to add a material alpha bind to the material ${(i=r.name)!==null&&i!==void 0?i:"(no name)"}, the type ${s} but the material or the type does not support alpha.`),null;if(l==null)return null;const c=r[l],u=o-c;return{propertyName:l,initialValue:c,deltaValue:u}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(qo._propertyNameMapMap).find(([i])=>this.material[i]===!0))===null||e===void 0?void 0:e[1])!==null&&t!==void 0?t:null}}qo._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};class jp{constructor({primitives:e,index:t,weight:i}){this.primitives=e,this.index=t,this.weight=i}applyWeight(e){this.primitives.forEach(t=>{var i;((i=t.morphTargetInfluences)===null||i===void 0?void 0:i[this.index])!=null&&(t.morphTargetInfluences[this.index]+=this.weight*e)})}clearAppliedWeight(){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)===null||t===void 0?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]=0)})}}const qp=new Le;class Yo{constructor({material:e,scale:t,offset:i}){var r,s;this.material=e,this.scale=t,this.offset=i;const o=(r=Object.entries(Yo._propertyNamesMap).find(([a])=>e[a]===!0))===null||r===void 0?void 0:r[1];o==null?(console.warn(`Tried to add a texture transform bind to the material ${(s=e.name)!==null&&s!==void 0?s:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],o.forEach(a=>{var l;const c=(l=e[a])===null||l===void 0?void 0:l.clone();if(!c)return null;e[a]=c;const u=c.offset.clone(),h=c.repeat.clone(),d=i.clone().sub(u),f=t.clone().sub(h);this._properties.push({name:a,initialOffset:u,deltaOffset:d,initialScale:h,deltaScale:f})}))}applyWeight(e){this._properties.forEach(t=>{const i=this.material[t.name];i!==void 0&&(i.offset.add(qp.copy(t.deltaOffset).multiplyScalar(e)),i.repeat.add(qp.copy(t.deltaScale).multiplyScalar(e)),i.needsUpdate=!0)})}clearAppliedWeight(){this._properties.forEach(e=>{const t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale),t.needsUpdate=!0)})}}Yo._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};const PA=new Set(["1.0","1.0-beta"]);class Kl{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return it(this,void 0,void 0,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return it(this,void 0,void 0,function*(){const t=yield this._v1Import(e);if(t)return t;const i=yield this._v0Import(e);return i||null})}_v1Import(e){var t,i;return it(this,void 0,void 0,function*(){const r=this.parser.json;if(!(((t=r.extensionsUsed)===null||t===void 0?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(i=r.extensions)===null||i===void 0?void 0:i.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!PA.has(a))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.expressions;if(!l)return null;const c=new Set(Object.values(yi)),u=new Map;l.preset!=null&&Object.entries(l.preset).forEach(([d,f])=>{if(f!=null){if(!c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${d}" detected. Ignoring the expression`);return}u.set(d,f)}}),l.custom!=null&&Object.entries(l.custom).forEach(([d,f])=>{if(c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${d}". Ignoring the expression`);return}u.set(d,f)});const h=new El;return yield Promise.all(Array.from(u.entries()).map(([d,f])=>it(this,void 0,void 0,function*(){var g,_,m,p,E,v,M;const T=new Vp(d);if(e.scene.add(T),T.isBinary=(g=f.isBinary)!==null&&g!==void 0?g:!1,T.overrideBlink=(_=f.overrideBlink)!==null&&_!==void 0?_:"none",T.overrideLookAt=(m=f.overrideLookAt)!==null&&m!==void 0?m:"none",T.overrideMouth=(p=f.overrideMouth)!==null&&p!==void 0?p:"none",(E=f.morphTargetBinds)===null||E===void 0||E.forEach(R=>it(this,void 0,void 0,function*(){var A;if(R.node===void 0||R.index===void 0)return;const F=yield Gp(e,R.node),x=R.index;if(!F.every(b=>Array.isArray(b.morphTargetInfluences)&&x<b.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${f.name} attempts to index morph #${x} but not found.`);return}T.addBind(new jp({primitives:F,index:x,weight:(A=R.weight)!==null&&A!==void 0?A:1}))})),f.materialColorBinds||f.textureTransformBinds){const R=[];e.scene.traverse(A=>{const F=A.material;F&&R.push(F)}),(v=f.materialColorBinds)===null||v===void 0||v.forEach(A=>it(this,void 0,void 0,function*(){R.filter(x=>{const b=Xp(this.parser,x);return A.material===b}).forEach(x=>{T.addBind(new qo({material:x,type:A.type,targetValue:new Me().fromArray(A.targetValue),targetAlpha:A.targetValue[3]}))})})),(M=f.textureTransformBinds)===null||M===void 0||M.forEach(A=>it(this,void 0,void 0,function*(){R.filter(x=>{const b=Xp(this.parser,x);return A.material===b}).forEach(x=>{var b,z;T.addBind(new Yo({material:x,offset:new Le().fromArray((b=A.offset)!==null&&b!==void 0?b:[0,0]),scale:new Le().fromArray((z=A.scale)!==null&&z!==void 0?z:[1,1])}))})}))}h.registerExpression(T)}))),h})}_v0Import(e){var t;return it(this,void 0,void 0,function*(){const i=this.parser.json,r=(t=i.extensions)===null||t===void 0?void 0:t.VRM;if(!r)return null;const s=r.blendShapeMaster;if(!s)return null;const o=new El,a=s.blendShapeGroups;if(!a)return o;const l=new Set;return yield Promise.all(a.map(c=>it(this,void 0,void 0,function*(){var u;const h=c.presetName,d=h!=null&&Kl.v0v1PresetNameMap[h]||null,f=d??c.name;if(f==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(l.has(f)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${h} has duplicated entries. Ignoring the expression`);return}l.add(f);const g=new Vp(f);e.scene.add(g),g.isBinary=(u=c.isBinary)!==null&&u!==void 0?u:!1,c.binds&&c.binds.forEach(m=>it(this,void 0,void 0,function*(){var p;if(m.mesh===void 0||m.index===void 0)return;const E=[];(p=i.nodes)===null||p===void 0||p.forEach((M,T)=>{M.mesh===m.mesh&&E.push(T)});const v=m.index;yield Promise.all(E.map(M=>it(this,void 0,void 0,function*(){var T;const R=yield Gp(e,M);if(!R.every(A=>Array.isArray(A.morphTargetInfluences)&&v<A.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to index ${v}th morph but not found.`);return}g.addBind(new jp({primitives:R,index:v,weight:.01*((T=m.weight)!==null&&T!==void 0?T:100)}))})))}));const _=c.materialValues;_&&_.length!==0&&_.forEach(m=>{if(m.materialName===void 0||m.propertyName===void 0||m.targetValue===void 0)return;const p=[];e.scene.traverse(v=>{if(v.material){const M=v.material;Array.isArray(M)?p.push(...M.filter(T=>(T.name===m.materialName||T.name===m.materialName+" (Outline)")&&p.indexOf(T)===-1)):M.name===m.materialName&&p.indexOf(M)===-1&&p.push(M)}});const E=m.propertyName;p.forEach(v=>{if(E==="_MainTex_ST"){const T=new Le(m.targetValue[0],m.targetValue[1]),R=new Le(m.targetValue[2],m.targetValue[3]);R.y=1-R.y-T.y,g.addBind(new Yo({material:v,scale:T,offset:R}));return}const M=RA[E];if(M){g.addBind(new qo({material:v,type:M,targetValue:new Me().fromArray(m.targetValue),targetAlpha:m.targetValue[3]}));return}console.warn(E+" is not supported")})}),o.registerExpression(g)}))),o})}}Kl.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};class Si{constructor(e,t){this._firstPersonOnlyLayer=Si.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=Si.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new Si(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=Si.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=Si.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(i=>{i.meshes.forEach(r=>{i.type==="firstPersonOnly"?(r.layers.set(this._firstPersonOnlyLayer),r.traverse(s=>s.layers.set(this._firstPersonOnlyLayer))):i.type==="thirdPersonOnly"?(r.layers.set(this._thirdPersonOnlyLayer),r.traverse(s=>s.layers.set(this._thirdPersonOnlyLayer))):i.type==="auto"&&this._createHeadlessModel(r)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,i,r){let s=0;if(t!=null&&t.length>0)for(let o=0;o<e.length;o+=3){const a=e[o],l=e[o+1],c=e[o+2],u=t[a],h=i[a];if(u[0]>0&&r.includes(h[0])||u[1]>0&&r.includes(h[1])||u[2]>0&&r.includes(h[2])||u[3]>0&&r.includes(h[3]))continue;const d=t[l],f=i[l];if(d[0]>0&&r.includes(f[0])||d[1]>0&&r.includes(f[1])||d[2]>0&&r.includes(f[2])||d[3]>0&&r.includes(f[3]))continue;const g=t[c],_=i[c];g[0]>0&&r.includes(_[0])||g[1]>0&&r.includes(_[1])||g[2]>0&&r.includes(_[2])||g[3]>0&&r.includes(_[3])||(e[s++]=a,e[s++]=l,e[s++]=c)}return s}_createErasedMesh(e,t){const i=new Jm(e.geometry.clone(),e.material);i.name=`${e.name}(erase)`,i.frustumCulled=e.frustumCulled,i.layers.set(this._firstPersonOnlyLayer);const r=i.geometry,s=r.getAttribute("skinIndex"),o=s instanceof Ff?[]:s.array,a=[];for(let _=0;_<o.length;_+=4)a.push([o[_],o[_+1],o[_+2],o[_+3]]);const l=r.getAttribute("skinWeight"),c=l instanceof Ff?[]:l.array,u=[];for(let _=0;_<c.length;_+=4)u.push([c[_],c[_+1],c[_+2],c[_+3]]);const h=r.getIndex();if(!h)throw new Error("The geometry doesn't have an index buffer");const d=Array.from(h.array),f=this._excludeTriangles(d,u,a,t),g=[];for(let _=0;_<f;_++)g[_]=d[_];return r.setIndex(g),e.onBeforeRender&&(i.onBeforeRender=e.onBeforeRender),i.bind(new Ll(e.skeleton.bones,e.skeleton.boneInverses),new ze),i}_createHeadlessModelForSkinnedMesh(e,t){const i=[];if(t.skeleton.bones.forEach((s,o)=>{this._isEraseTarget(s)&&i.push(o)}),!i.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);const r=this._createErasedMesh(t,i);e.add(r)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{const t=new Dn;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(i=>i.type==="SkinnedMesh").forEach(i=>{const r=i;this._createHeadlessModelForSkinnedMesh(t,r)})}else if(e.type==="SkinnedMesh"){const t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}}Si.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;Si.DEFAULT_THIRDPERSON_ONLY_LAYER=10;const CA=new Set(["1.0","1.0-beta"]);class IA{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return it(this,void 0,void 0,function*(){const t=e.userData.vrmHumanoid;if(t!==null){if(t===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");e.userData.vrmFirstPerson=yield this._import(e,t)}})}_import(e,t){return it(this,void 0,void 0,function*(){if(t==null)return null;const i=yield this._v1Import(e,t);if(i)return i;const r=yield this._v0Import(e,t);return r||null})}_v1Import(e,t){var i,r;return it(this,void 0,void 0,function*(){const s=this.parser.json;if(!(((i=s.extensionsUsed)===null||i===void 0?void 0:i.indexOf("VRMC_vrm"))!==-1))return null;const a=(r=s.extensions)===null||r===void 0?void 0:r.VRMC_vrm;if(!a)return null;const l=a.specVersion;if(!CA.has(l))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${l}"`),null;const c=a.firstPerson;if(!c)return null;const u=[],h=yield Wp(e);return Array.from(h.entries()).forEach(([d,f])=>{var g;const _=c.meshAnnotations?c.meshAnnotations.find(m=>m.node===d):void 0;u.push({meshes:f,type:(g=_==null?void 0:_.type)!==null&&g!==void 0?g:"both"})}),new Si(t,u)})}_v0Import(e,t){var i;return it(this,void 0,void 0,function*(){const r=this.parser.json,s=(i=r.extensions)===null||i===void 0?void 0:i.VRM;if(!s)return null;const o=s.firstPerson;if(!o)return null;const a=[],l=yield Wp(e);return Array.from(l.entries()).forEach(([c,u])=>{const h=r.nodes[c],d=o.meshAnnotations?o.meshAnnotations.find(f=>f.mesh===h.mesh):void 0;a.push({meshes:u,type:this._convertV0FlagToV1Type(d==null?void 0:d.firstPersonFlag)})}),new Si(t,a)})}_convertV0FlagToV1Type(e){return e==="FirstPersonOnly"?"firstPersonOnly":e==="ThirdPersonOnly"?"thirdPersonOnly":e==="Auto"?"auto":"both"}}const Yp=new L,Kp=new L,DA=new ke;class $p extends Dn{constructor(e){super(),this.vrmHumanoid=e,this._boneAxesMap=new Map,Object.values(e.humanBones).forEach(t=>{const i=new qE(1);i.matrixAutoUpdate=!1,i.material.depthTest=!1,i.material.depthWrite=!1,this.add(i),this._boneAxesMap.set(t,i)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(e=>{e.geometry.dispose(),e.material.dispose()})}updateMatrixWorld(e){Array.from(this._boneAxesMap.entries()).forEach(([t,i])=>{t.node.updateWorldMatrix(!0,!1),t.node.matrixWorld.decompose(Yp,DA,Kp);const r=Yp.set(.1,.1,.1).divide(Kp);i.matrix.copy(t.node.matrixWorld).scale(r)}),super.updateMatrixWorld(e)}}const $c=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"],Je={Hips:"hips",Spine:"spine",Chest:"chest",UpperChest:"upperChest",Neck:"neck",Head:"head",LeftEye:"leftEye",RightEye:"rightEye",Jaw:"jaw",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",LeftToes:"leftToes",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",RightToes:"rightToes",LeftShoulder:"leftShoulder",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightShoulder:"rightShoulder",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand",LeftThumbMetacarpal:"leftThumbMetacarpal",LeftThumbProximal:"leftThumbProximal",LeftThumbDistal:"leftThumbDistal",LeftIndexProximal:"leftIndexProximal",LeftIndexIntermediate:"leftIndexIntermediate",LeftIndexDistal:"leftIndexDistal",LeftMiddleProximal:"leftMiddleProximal",LeftMiddleIntermediate:"leftMiddleIntermediate",LeftMiddleDistal:"leftMiddleDistal",LeftRingProximal:"leftRingProximal",LeftRingIntermediate:"leftRingIntermediate",LeftRingDistal:"leftRingDistal",LeftLittleProximal:"leftLittleProximal",LeftLittleIntermediate:"leftLittleIntermediate",LeftLittleDistal:"leftLittleDistal",RightThumbMetacarpal:"rightThumbMetacarpal",RightThumbProximal:"rightThumbProximal",RightThumbDistal:"rightThumbDistal",RightIndexProximal:"rightIndexProximal",RightIndexIntermediate:"rightIndexIntermediate",RightIndexDistal:"rightIndexDistal",RightMiddleProximal:"rightMiddleProximal",RightMiddleIntermediate:"rightMiddleIntermediate",RightMiddleDistal:"rightMiddleDistal",RightRingProximal:"rightRingProximal",RightRingIntermediate:"rightRingIntermediate",RightRingDistal:"rightRingDistal",RightLittleProximal:"rightLittleProximal",RightLittleIntermediate:"rightLittleIntermediate",RightLittleDistal:"rightLittleDistal"},UA={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function S_(n){return n.invert?n.invert():n.inverse(),n}const Dr=new L,Ur=new ke;class Hu{constructor(e){this.humanBones=e,this.restPose=this.getAbsolutePose()}getAbsolutePose(){const e={};return Object.keys(this.humanBones).forEach(t=>{const i=t,r=this.getBoneNode(i);r&&(Dr.copy(r.position),Ur.copy(r.quaternion),e[i]={position:Dr.toArray(),rotation:Ur.toArray()})}),e}getPose(){const e={};return Object.keys(this.humanBones).forEach(t=>{const i=t,r=this.getBoneNode(i);if(!r)return;Dr.set(0,0,0),Ur.identity();const s=this.restPose[i];s!=null&&s.position&&Dr.fromArray(s.position).negate(),s!=null&&s.rotation&&S_(Ur.fromArray(s.rotation)),Dr.add(r.position),Ur.premultiply(r.quaternion),e[i]={position:Dr.toArray(),rotation:Ur.toArray()}}),e}setPose(e){Object.entries(e).forEach(([t,i])=>{const r=t,s=this.getBoneNode(r);if(!s)return;const o=this.restPose[r];o&&(i!=null&&i.position&&(s.position.fromArray(i.position),o.position&&s.position.add(Dr.fromArray(o.position))),i!=null&&i.rotation&&(s.quaternion.fromArray(i.rotation),o.rotation&&s.quaternion.multiply(Ur.fromArray(o.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([e,t])=>{const i=this.getBoneNode(e);i&&(t!=null&&t.position&&i.position.fromArray(t.position),t!=null&&t.rotation&&i.quaternion.fromArray(t.rotation))})}getBone(e){var t;return(t=this.humanBones[e])!==null&&t!==void 0?t:void 0}getBoneNode(e){var t,i;return(i=(t=this.humanBones[e])===null||t===void 0?void 0:t.node)!==null&&i!==void 0?i:null}}const NA=new L,OA=new ke,FA=new L;class Tl extends Hu{static _setupTransforms(e){const t=new ft;t.name="VRMHumanoidRig";const i={},r={},s={};$c.forEach(l=>{const c=e.getBoneNode(l);if(c){const u=new L,h=new ke;c.updateWorldMatrix(!0,!1),c.matrixWorld.decompose(u,h,NA),i[l]=u,r[l]=h,s[l]=c.quaternion.clone()}});const o={},a={};return $c.forEach(l=>{var c;const u=e.getBoneNode(l);if(u){const h=i[l];let d=l,f,g;for(;f==null&&(d=UA[d],d!=null);)f=i[d],g=r[d];const _=new ft;_.name="Normalized_"+u.name,(d?(c=a[d])===null||c===void 0?void 0:c.node:t).add(_),_.position.copy(h),f&&_.position.sub(f),a[l]={node:_},o[l]=g??new ke}}),{rigBones:a,root:t,parentWorldRotations:o,boneRotations:s}}constructor(e){const{rigBones:t,root:i,parentWorldRotations:r,boneRotations:s}=Tl._setupTransforms(e);super(t),this.original=e,this.root=i,this._parentWorldRotations=r,this._boneRotations=s}update(){$c.forEach(e=>{const t=this.original.getBoneNode(e);if(t!=null){const i=this.getBoneNode(e),r=this._parentWorldRotations[e],s=OA.copy(r).invert(),o=this._boneRotations[e];if(t.quaternion.copy(i.quaternion).multiply(r).premultiply(s).multiply(o),e==="hips"){const a=i.getWorldPosition(FA);t.parent.updateWorldMatrix(!0,!1);const l=t.parent.matrixWorld,c=a.applyMatrix4(l.invert());t.position.copy(c)}}})}}class Sl{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var i;this.autoUpdateHumanBones=(i=t==null?void 0:t.autoUpdateHumanBones)!==null&&i!==void 0?i:!0,this._rawHumanBones=new Hu(e),this._normalizedHumanBones=new Tl(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new Hu(e.humanBones),this._normalizedHumanBones=new Tl(this._rawHumanBones),this}clone(){return new Sl(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}}const BA={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},HA=new Set(["1.0","1.0-beta"]),Zp={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"};class kA{get name(){return"VRMHumanoidLoaderPlugin"}constructor(e,t){this.parser=e,this.helperRoot=t==null?void 0:t.helperRoot,this.autoUpdateHumanBones=t==null?void 0:t.autoUpdateHumanBones}afterRoot(e){return it(this,void 0,void 0,function*(){e.userData.vrmHumanoid=yield this._import(e)})}_import(e){return it(this,void 0,void 0,function*(){const t=yield this._v1Import(e);if(t)return t;const i=yield this._v0Import(e);return i||null})}_v1Import(e){var t,i;return it(this,void 0,void 0,function*(){const r=this.parser.json;if(!(((t=r.extensionsUsed)===null||t===void 0?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(i=r.extensions)===null||i===void 0?void 0:i.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!HA.has(a))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.humanoid;if(!l)return null;const c=l.humanBones.leftThumbIntermediate!=null||l.humanBones.rightThumbIntermediate!=null,u={};l.humanBones!=null&&(yield Promise.all(Object.entries(l.humanBones).map(([d,f])=>it(this,void 0,void 0,function*(){let g=d;const _=f.node;if(c){const p=Zp[g];p!=null&&(g=p)}const m=yield this.parser.getDependency("node",_);if(m==null){console.warn(`A glTF node bound to the humanoid bone ${g} (index = ${_}) does not exist`);return}u[g]={node:m}}))));const h=new Sl(this._ensureRequiredBonesExist(u),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(e.scene.add(h.normalizedHumanBonesRoot),this.helperRoot){const d=new $p(h);this.helperRoot.add(d),d.renderOrder=this.helperRoot.renderOrder}return h})}_v0Import(e){var t;return it(this,void 0,void 0,function*(){const r=(t=this.parser.json.extensions)===null||t===void 0?void 0:t.VRM;if(!r)return null;const s=r.humanoid;if(!s)return null;const o={};s.humanBones!=null&&(yield Promise.all(s.humanBones.map(l=>it(this,void 0,void 0,function*(){const c=l.bone,u=l.node;if(c==null||u==null)return;const h=yield this.parser.getDependency("node",u);if(h==null){console.warn(`A glTF node bound to the humanoid bone ${c} (index = ${u}) does not exist`);return}const d=Zp[c],f=d??c;if(o[f]!=null){console.warn(`Multiple bone entries for ${f} detected (index = ${u}), ignoring duplicated entries.`);return}o[f]={node:h}}))));const a=new Sl(this._ensureRequiredBonesExist(o),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(e.scene.add(a.normalizedHumanBonesRoot),this.helperRoot){const l=new $p(a);this.helperRoot.add(l),l.renderOrder=this.helperRoot.renderOrder}return a})}_ensureRequiredBonesExist(e){const t=Object.values(BA).filter(i=>e[i]==null);if(t.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${t.join(", ")}`);return e}}class Qp extends en{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new mt(new Float32Array(65*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new mt(new Uint16Array(3*63),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,e=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,e=!0),e&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let e=0;e<64;e++){const t=e/63*this._currentTheta;this._attrPos.setXYZ(e+1,this._currentRadius*Math.sin(t),0,this._currentRadius*Math.cos(t))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<63;e++)this._attrIndex.setXYZ(e*3,0,e+1,e+2);this._attrIndex.needsUpdate=!0}}class zA extends en{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new L,this._currentTail=new L,this._attrPos=new mt(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new mt(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,e=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),e=!0),e&&this._buildPosition()}_buildPosition(){for(let e=0;e<32;e++){const t=e/16*Math.PI;this._attrPos.setXYZ(e,Math.cos(t),Math.sin(t),0),this._attrPos.setXYZ(32+e,0,Math.cos(t),Math.sin(t)),this._attrPos.setXYZ(64+e,Math.sin(t),0,Math.cos(t))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<32;e++){const t=(e+1)%32;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(64+e*2,32+e,32+t),this._attrIndex.setXY(128+e*2,64+e,64+t)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}}const Ga=new ke,Jp=new ke,Mo=new L,em=new L,tm=Math.sqrt(2)/2,VA=new ke(0,0,-tm,tm),GA=new L(0,1,0);class WA extends Dn{constructor(e){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=e;{const t=new Qp;t.radius=.5;const i=new ji({color:65280,transparent:!0,opacity:.5,side:Xn,depthTest:!1,depthWrite:!1});this._meshPitch=new Tn(t,i),this.add(this._meshPitch)}{const t=new Qp;t.radius=.5;const i=new ji({color:16711680,transparent:!0,opacity:.5,side:Xn,depthTest:!1,depthWrite:!1});this._meshYaw=new Tn(t,i),this.add(this._meshYaw)}{const t=new zA;t.radius=.1;const i=new xr({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new Js(t,i),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(e){const t=Ht.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=t,this._meshYaw.geometry.update();const i=Ht.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=i,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(Mo),this.vrmLookAt.getLookAtWorldQuaternion(Ga),Ga.multiply(this.vrmLookAt.getFaceFrontQuaternion(Jp)),this._meshYaw.position.copy(Mo),this._meshYaw.quaternion.copy(Ga),this._meshPitch.position.copy(Mo),this._meshPitch.quaternion.copy(Ga),this._meshPitch.quaternion.multiply(Jp.setFromAxisAngle(GA,t)),this._meshPitch.quaternion.multiply(VA);const{target:r,autoUpdate:s}=this.vrmLookAt;r!=null&&s&&(r.getWorldPosition(em).sub(Mo),this._lineTarget.geometry.tail.copy(em),this._lineTarget.geometry.update(),this._lineTarget.position.copy(Mo)),super.updateMatrixWorld(e)}}const XA=new L,jA=new L;function ku(n,e){return n.matrixWorld.decompose(XA,e,jA),e}function rl(n){return[Math.atan2(-n.z,n.x),Math.atan2(n.y,Math.sqrt(n.x*n.x+n.z*n.z))]}function nm(n){const e=Math.round(n/2/Math.PI);return n-2*Math.PI*e}const im=new L(0,0,1),qA=new L,YA=new L,KA=new L,$A=new ke,Zc=new ke,rm=new ke,ZA=new ke,Qc=new Kr;class $l{get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new Kr)}constructor(e,t){this.offsetFromHeadBone=new L,this.autoUpdate=!0,this.faceFront=new L(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new ke)}getEuler(e){return e.set(Ht.DEG2RAD*this._pitch,Ht.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new $l(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){const t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){const t=this.humanoid.getRawBoneNode("head");return ku(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(im)<.01)return e.copy(this._restHeadWorldQuaternion).invert();const[t,i]=rl(this.faceFront);return Qc.set(0,.5*Math.PI+t,i,"YZX"),e.setFromEuler(Qc).premultiply(ZA.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(Zc),this.getFaceFrontQuaternion(rm),e.copy(im).applyQuaternion(Zc).applyQuaternion(rm).applyEuler(this.getEuler(Qc))}lookAt(e){const t=$A.copy(this._restHeadWorldQuaternion).multiply(S_(this.getLookAtWorldQuaternion(Zc))),i=this.getLookAtWorldPosition(YA),r=KA.copy(e).sub(i).applyQuaternion(t).normalize(),[s,o]=rl(this.faceFront),[a,l]=rl(r),c=nm(a-s),u=nm(o-l);this._yaw=Ht.RAD2DEG*c,this._pitch=Ht.RAD2DEG*u,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(qA)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}}$l.EULER_ORDER="YXZ";const QA=new L(0,0,1),vi=new ke,Es=new ke,Vn=new Kr(0,0,0,"YXZ");class sl{constructor(e,t,i,r,s){this.humanoid=e,this.rangeMapHorizontalInner=t,this.rangeMapHorizontalOuter=i,this.rangeMapVerticalDown=r,this.rangeMapVerticalUp=s,this.faceFront=new L(0,0,1),this._restQuatLeftEye=new ke,this._restQuatRightEye=new ke,this._restLeftEyeParentWorldQuat=new ke,this._restRightEyeParentWorldQuat=new ke;const o=this.humanoid.getRawBoneNode("leftEye"),a=this.humanoid.getRawBoneNode("rightEye");o&&(this._restQuatLeftEye.copy(o.quaternion),ku(o.parent,this._restLeftEyeParentWorldQuat)),a&&(this._restQuatRightEye.copy(a.quaternion),ku(a.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(e,t){const i=this.humanoid.getRawBoneNode("leftEye"),r=this.humanoid.getRawBoneNode("rightEye"),s=this.humanoid.getNormalizedBoneNode("leftEye"),o=this.humanoid.getNormalizedBoneNode("rightEye");i&&(t<0?Vn.x=-Ht.DEG2RAD*this.rangeMapVerticalDown.map(-t):Vn.x=Ht.DEG2RAD*this.rangeMapVerticalUp.map(t),e<0?Vn.y=-Ht.DEG2RAD*this.rangeMapHorizontalInner.map(-e):Vn.y=Ht.DEG2RAD*this.rangeMapHorizontalOuter.map(e),vi.setFromEuler(Vn),this._getWorldFaceFrontQuat(Es),s.quaternion.copy(Es).multiply(vi).multiply(Es.invert()),vi.copy(this._restLeftEyeParentWorldQuat),i.quaternion.copy(s.quaternion).multiply(vi).premultiply(vi.invert()).multiply(this._restQuatLeftEye)),r&&(t<0?Vn.x=-Ht.DEG2RAD*this.rangeMapVerticalDown.map(-t):Vn.x=Ht.DEG2RAD*this.rangeMapVerticalUp.map(t),e<0?Vn.y=-Ht.DEG2RAD*this.rangeMapHorizontalOuter.map(-e):Vn.y=Ht.DEG2RAD*this.rangeMapHorizontalInner.map(e),vi.setFromEuler(Vn),this._getWorldFaceFrontQuat(Es),o.quaternion.copy(Es).multiply(vi).multiply(Es.invert()),vi.copy(this._restRightEyeParentWorldQuat),r.quaternion.copy(o.quaternion).multiply(vi).premultiply(vi.invert()).multiply(this._restQuatRightEye))}lookAt(e){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const t=Ht.RAD2DEG*e.y,i=Ht.RAD2DEG*e.x;this.applyYawPitch(t,i)}_getWorldFaceFrontQuat(e){if(this.faceFront.distanceToSquared(QA)<.01)return e.identity();const[t,i]=rl(this.faceFront);return Vn.set(0,.5*Math.PI+t,i,"YZX"),e.setFromEuler(Vn)}}sl.type="bone";class zu{constructor(e,t,i,r,s){this.expressions=e,this.rangeMapHorizontalInner=t,this.rangeMapHorizontalOuter=i,this.rangeMapVerticalDown=r,this.rangeMapVerticalUp=s}applyYawPitch(e,t){t<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-t))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(t))),e<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-e))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(e)))}lookAt(e){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const t=Ht.RAD2DEG*e.y,i=Ht.RAD2DEG*e.x;this.applyYawPitch(t,i)}}zu.type="expression";class sm{constructor(e,t){this.inputMaxValue=e,this.outputScale=t}map(e){return this.outputScale*T_(e/this.inputMaxValue)}}const JA=new Set(["1.0","1.0-beta"]),Wa=.01;class e3{get name(){return"VRMLookAtLoaderPlugin"}constructor(e,t){this.parser=e,this.helperRoot=t==null?void 0:t.helperRoot}afterRoot(e){return it(this,void 0,void 0,function*(){const t=e.userData.vrmHumanoid;if(t===null)return;if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");const i=e.userData.vrmExpressionManager;if(i!==null){if(i===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");e.userData.vrmLookAt=yield this._import(e,t,i)}})}_import(e,t,i){return it(this,void 0,void 0,function*(){if(t==null||i==null)return null;const r=yield this._v1Import(e,t,i);if(r)return r;const s=yield this._v0Import(e,t,i);return s||null})}_v1Import(e,t,i){var r,s,o;return it(this,void 0,void 0,function*(){const a=this.parser.json;if(!(((r=a.extensionsUsed)===null||r===void 0?void 0:r.indexOf("VRMC_vrm"))!==-1))return null;const c=(s=a.extensions)===null||s===void 0?void 0:s.VRMC_vrm;if(!c)return null;const u=c.specVersion;if(!JA.has(u))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${u}"`),null;const h=c.lookAt;if(!h)return null;const d=h.type==="expression"?1:10,f=this._v1ImportRangeMap(h.rangeMapHorizontalInner,d),g=this._v1ImportRangeMap(h.rangeMapHorizontalOuter,d),_=this._v1ImportRangeMap(h.rangeMapVerticalDown,d),m=this._v1ImportRangeMap(h.rangeMapVerticalUp,d);let p;h.type==="expression"?p=new zu(i,f,g,_,m):p=new sl(t,f,g,_,m);const E=this._importLookAt(t,p);return E.offsetFromHeadBone.fromArray((o=h.offsetFromHeadBone)!==null&&o!==void 0?o:[0,.06,0]),E})}_v1ImportRangeMap(e,t){var i,r;let s=(i=e==null?void 0:e.inputMaxValue)!==null&&i!==void 0?i:90;const o=(r=e==null?void 0:e.outputScale)!==null&&r!==void 0?r:t;return s<Wa&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),s=Wa),new sm(s,o)}_v0Import(e,t,i){var r,s,o,a;return it(this,void 0,void 0,function*(){const c=(r=this.parser.json.extensions)===null||r===void 0?void 0:r.VRM;if(!c)return null;const u=c.firstPerson;if(!u)return null;const h=u.lookAtTypeName==="BlendShape"?1:10,d=this._v0ImportDegreeMap(u.lookAtHorizontalInner,h),f=this._v0ImportDegreeMap(u.lookAtHorizontalOuter,h),g=this._v0ImportDegreeMap(u.lookAtVerticalDown,h),_=this._v0ImportDegreeMap(u.lookAtVerticalUp,h);let m;u.lookAtTypeName==="BlendShape"?m=new zu(i,d,f,g,_):m=new sl(t,d,f,g,_);const p=this._importLookAt(t,m);return u.firstPersonBoneOffset?p.offsetFromHeadBone.set((s=u.firstPersonBoneOffset.x)!==null&&s!==void 0?s:0,(o=u.firstPersonBoneOffset.y)!==null&&o!==void 0?o:.06,-((a=u.firstPersonBoneOffset.z)!==null&&a!==void 0?a:0)):p.offsetFromHeadBone.set(0,.06,0),p.faceFront.set(0,0,-1),m instanceof sl&&m.faceFront.set(0,0,-1),p})}_v0ImportDegreeMap(e,t){var i,r;const s=e==null?void 0:e.curve;JSON.stringify(s)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let o=(i=e==null?void 0:e.xRange)!==null&&i!==void 0?i:90;const a=(r=e==null?void 0:e.yRange)!==null&&r!==void 0?r:t;return o<Wa&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),o=Wa),new sm(o,a)}_importLookAt(e,t){const i=new $l(e,t);if(this.helperRoot){const r=new WA(i);this.helperRoot.add(r),r.renderOrder=this.helperRoot.renderOrder}return i}}function t3(n,e){return typeof n!="string"||n===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(n)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(n)||/^data:.*,.*$/i.test(n)||/^blob:.*$/i.test(n)?n:e+n)}const n3=new Set(["1.0","1.0-beta"]);class i3{get name(){return"VRMMetaLoaderPlugin"}constructor(e,t){var i,r,s;this.parser=e,this.needThumbnailImage=(i=t==null?void 0:t.needThumbnailImage)!==null&&i!==void 0?i:!0,this.acceptLicenseUrls=(r=t==null?void 0:t.acceptLicenseUrls)!==null&&r!==void 0?r:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(s=t==null?void 0:t.acceptV0Meta)!==null&&s!==void 0?s:!0}afterRoot(e){return it(this,void 0,void 0,function*(){e.userData.vrmMeta=yield this._import(e)})}_import(e){return it(this,void 0,void 0,function*(){const t=yield this._v1Import(e);if(t!=null)return t;const i=yield this._v0Import(e);return i??null})}_v1Import(e){var t,i,r;return it(this,void 0,void 0,function*(){const s=this.parser.json;if(!(((t=s.extensionsUsed)===null||t===void 0?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const a=(i=s.extensions)===null||i===void 0?void 0:i.VRMC_vrm;if(a==null)return null;const l=a.specVersion;if(!n3.has(l))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${l}"`),null;const c=a.meta;if(!c)return null;const u=c.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(u))throw new Error(`VRMMetaLoaderPlugin: The license url "${u}" is not accepted`);let d;return this.needThumbnailImage&&c.thumbnailImage!=null&&(d=(r=yield this._extractGLTFImage(c.thumbnailImage))!==null&&r!==void 0?r:void 0),{metaVersion:"1",name:c.name,version:c.version,authors:c.authors,copyrightInformation:c.copyrightInformation,contactInformation:c.contactInformation,references:c.references,thirdPartyLicenses:c.thirdPartyLicenses,thumbnailImage:d,licenseUrl:c.licenseUrl,avatarPermission:c.avatarPermission,allowExcessivelyViolentUsage:c.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:c.allowExcessivelySexualUsage,commercialUsage:c.commercialUsage,allowPoliticalOrReligiousUsage:c.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:c.allowAntisocialOrHateUsage,creditNotation:c.creditNotation,allowRedistribution:c.allowRedistribution,modification:c.modification,otherLicenseUrl:c.otherLicenseUrl}})}_v0Import(e){var t;return it(this,void 0,void 0,function*(){const r=(t=this.parser.json.extensions)===null||t===void 0?void 0:t.VRM;if(!r)return null;const s=r.meta;if(!s)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let o;return this.needThumbnailImage&&s.texture!=null&&s.texture!==-1&&(o=yield this.parser.getDependency("texture",s.texture)),{metaVersion:"0",allowedUserName:s.allowedUserName,author:s.author,commercialUssageName:s.commercialUssageName,contactInformation:s.contactInformation,licenseName:s.licenseName,otherLicenseUrl:s.otherLicenseUrl,otherPermissionUrl:s.otherPermissionUrl,reference:s.reference,sexualUssageName:s.sexualUssageName,texture:o??void 0,title:s.title,version:s.version,violentUssageName:s.violentUssageName}})}_extractGLTFImage(e){var t;return it(this,void 0,void 0,function*(){const r=(t=this.parser.json.images)===null||t===void 0?void 0:t[e];if(r==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${e}] of glTF as a thumbnail but the image doesn't exist`),null;let s=r.uri;if(r.bufferView!=null){const a=yield this.parser.getDependency("bufferView",r.bufferView),l=new Blob([a],{type:r.mimeType});s=URL.createObjectURL(l)}return s==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${e}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new sg().loadAsync(t3(s,this.parser.options.path)).catch(a=>(console.error(a),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}}class r3{constructor(e){this.scene=e.scene,this.meta=e.meta,this.humanoid=e.humanoid,this.expressionManager=e.expressionManager,this.firstPerson=e.firstPerson,this.lookAt=e.lookAt}update(e){this.humanoid.update(),this.lookAt&&this.lookAt.update(e),this.expressionManager&&this.expressionManager.update()}}class s3 extends r3{constructor(e){super(e),this.materials=e.materials,this.springBoneManager=e.springBoneManager,this.nodeConstraintManager=e.nodeConstraintManager}update(e){super.update(e),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(e),this.materials&&this.materials.forEach(t=>{t.update&&t.update(e)})}}function Xa(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(i.next(u))}catch(h){o(h)}}function l(u){try{c(i.throw(u))}catch(h){o(h)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((i=i.apply(n,e||[])).next())})}/*!
 * @pixiv/three-vrm-materials-mtoon v2.0.7
 * MToon (toon material) module for @pixiv/three-vrm
 *
 * Copyright (c) 2020-2023 pixiv Inc.
 * @pixiv/three-vrm-materials-mtoon is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */function Hr(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(i.next(u))}catch(h){o(h)}}function l(u){try{c(i.throw(u))}catch(h){o(h)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((i=i.apply(n,e||[])).next())})}var o3=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;

  // COMPAT: pre-r151 uses a common uvTransform
  #if THREE_VRM_THREE_REVISION < 151
    uniform mat3 uvTransform;
  #endif
#endif

// #include <uv2_pars_vertex>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
  #endif
#endif

// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    // COMPAT: pre-r151 uses a common uvTransform
    #if THREE_VRM_THREE_REVISION >= 151
      vUv = uv;
    #else
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif
  #endif

  // #include <uv2_vertex>
  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap
  #if THREE_VRM_THREE_REVISION < 151
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif
  #endif

  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  float outlineTex = 1.0;

  #ifdef OUTLINE
    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
    #endif

    #ifdef OUTLINE_WIDTH_WORLD
      float worldNormalLength = length( transformedNormal );
      vec3 outlineOffset = outlineWidthFactor * outlineTex * worldNormalLength * objectNormal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      vec3 clipNormal = ( projectionMatrix * modelViewMatrix * vec4( objectNormal, 0.0 ) ).xyz;
      vec2 projectedNormal = normalize( clipNormal.xy );
      projectedNormal.x *= projectionMatrix[ 0 ].x / projectionMatrix[ 1 ].y;
      gl_Position.xy += 2.0 * outlineWidthFactor * outlineTex * projectedNormal.xy;
    #endif

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,a3=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

// #include <uv2_pars_fragment>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
  #endif
#endif

#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#if THREE_VRM_THREE_REVISION >= 132
  #include <alphatest_pars_fragment>
#endif

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>
#if THREE_VRM_THREE_REVISION < 151
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
  }
#endif

#include <lights_pars_begin>

#if THREE_VRM_THREE_REVISION >= 132
  #include <normal_pars_fragment>
#endif

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

#if THREE_VRM_THREE_REVISION < 132
  #ifndef FLAT_SHADED
    varying vec3 vNormal;
  #endif
#endif

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  #if THREE_VRM_THREE_REVISION < 132
    #ifndef PHYSICALLY_CORRECT_LIGHTS
      lightColor *= PI;
    #endif
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

#if THREE_VRM_THREE_REVISION >= 157
  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    #if THREE_VRM_THREE_REVISION < 132
      #ifndef PHYSICALLY_CORRECT_LIGHTS
        irradiance *= PI;
      #endif
    #endif

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#else
  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    #if THREE_VRM_THREE_REVISION < 132
      #ifndef PHYSICALLY_CORRECT_LIGHTS
        irradiance *= PI;
      #endif
    #endif

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#endif

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

// COMPAT: USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

  uniform mat3 normalMatrix;

#endif

// COMPAT: USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126, r151
  #if THREE_VRM_THREE_REVISION >= 151

    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

      vec3 q0 = dFdx( eye_pos.xyz );
      vec3 q1 = dFdy( eye_pos.xyz );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = surf_norm;

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

      return mat3( T * scale, B * scale, N );

    }

  #elif THREE_VRM_THREE_REVISION >= 126

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {

      // Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      float scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude

      vec3 S = ( q0 * st1.t - q1 * st0.t ) * scale;
      vec3 T = ( - q0 * st1.s + q1 * st0.s ) * scale;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?

      if ( length( S ) == 0.0 || length( T ) == 0.0 ) {
        return surf_norm;
      }

      S = normalize( S );
      T = normalize( T );
      vec3 N = normalize( surf_norm );

      #ifdef DOUBLE_SIDED

        // Workaround for Adreno GPUs gl_FrontFacing bug. See #15850 and #10331

        bool frontFacing = dot( cross( S, T ), N ) > 0.0;

        mapN.xy *= ( float( frontFacing ) * 2.0 - 1.0 );

      #else

        mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

      #endif

      mat3 tsn = mat3( S, T, N );
      return normalize( tsn * mapN );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    vec4 sampledDiffuseColor = texture2D( map, mapUv );
    #ifdef DECODE_VIDEO_TEXTURE
      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>

  // #include <normal_fragment_begin>
  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

  #ifdef FLAT_SHADED

    vec3 fdx = dFdx( vViewPosition );
    vec3 fdy = dFdy( vViewPosition );
    vec3 normal = normalize( cross( fdx, fdy ) );

  #else

    vec3 normal = normalize( vNormal );

    #ifdef DOUBLE_SIDED

      normal *= faceDirection;

    #endif

  #endif

  #ifdef USE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

  #endif

  #ifdef USE_NORMALMAP_TANGENTSPACE

    #ifdef USE_TANGENT

      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn[0] *= faceDirection;
      tbn[1] *= faceDirection;

    #endif

  #endif

  #ifdef USE_CLEARCOAT_NORMALMAP

    #ifdef USE_TANGENT

      mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn2[0] *= faceDirection;
      tbn2[1] *= faceDirection;

    #endif

  #endif

  // non perturbed normal for clearcoat among others

  vec3 nonPerturbedNormal = normal;

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  // COMPAT: USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      // Temporary compat against shader change @ Three.js r126
      // See: #21205, #21307, #21299
      #if THREE_VRM_THREE_REVISION >= 126

        normal = normal * faceDirection;

      #else

        normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

      #endif

    #endif

    normal = normalize( normalMatrix * normal );

  // COMPAT: USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    // COMPAT: pre-r151
    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )

      normal = normalize( tbn * mapN );

    #else

      // pre-r126
      #if THREE_VRM_THREE_REVISION >= 126

        normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

      #else

        normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN );

      #endif

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  #if THREE_VRM_THREE_REVISION >= 157
    vec3 geometryPosition = - vViewPosition;
    vec3 geometryNormal = normal;
    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
    
    vec3 geometryClearcoatNormal;

    #ifdef USE_CLEARCOAT

      geometryClearcoatNormal = clearcoatNormal;

    #endif
  #else
    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    #ifdef USE_CLEARCOAT

      geometry.clearcoatNormal = clearcoatNormal;

    #endif
  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      #if THREE_VRM_THREE_REVISION >= 157
        getPointLightInfo( pointLight, geometryPosition, directLight );
      #elif THREE_VRM_THREE_REVISION >= 132
        getPointLightInfo( pointLight, geometry, directLight );
      #else
        getPointDirectLightIrradiance( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif

      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      #if THREE_VRM_THREE_REVISION >= 157
        getSpotLightInfo( spotLight, geometryPosition, directLight );
      #elif THREE_VRM_THREE_REVISION >= 132
        getSpotLightInfo( spotLight, geometry, directLight );
      #else
        getSpotDirectLightIrradiance( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif

      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

    DirectionalLight directionalLight;
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

      directionalLight = directionalLights[ i ];

      #if THREE_VRM_THREE_REVISION >= 157
        getDirectionalLightInfo( directionalLight, directLight );
      #elif THREE_VRM_THREE_REVISION >= 132
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #else
        getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif

      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    #if THREE_VRM_THREE_REVISION >= 157
      #if defined( USE_LIGHT_PROBES )
        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
      #endif
    #elif THREE_VRM_THREE_REVISION >= 133
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        #if THREE_VRM_THREE_REVISION >= 157
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
        #elif THREE_VRM_THREE_REVISION >= 133
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, 1.0 );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`;const l3={None:"none",Normal:"normal",LitShadeRate:"litShadeRate",UV:"uv"},Jc={None:"none",WorldCoordinates:"worldCoordinates",ScreenCoordinates:"screenCoordinates"},c3={3e3:"",3001:"srgb"};function eu(n){return parseInt(ci,10)>=152?n.colorSpace:c3[n.encoding]}class tu extends gr{get color(){return this.uniforms.litFactor.value}set color(e){this.uniforms.litFactor.value=e}get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}get normalMap(){return this.uniforms.normalMap.value}set normalMap(e){this.uniforms.normalMap.value=e}get normalScale(){return this.uniforms.normalScale.value}set normalScale(e){this.uniforms.normalScale.value=e}get emissive(){return this.uniforms.emissive.value}set emissive(e){this.uniforms.emissive.value=e}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(e){this.uniforms.emissiveIntensity.value=e}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(e){this.uniforms.emissiveMap.value=e}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(e){this.uniforms.shadeColorFactor.value=e}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(e){this.uniforms.shadeMultiplyTexture.value=e}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(e){this.uniforms.shadingShiftFactor.value=e}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(e){this.uniforms.shadingShiftTexture.value=e}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(e){this.uniforms.shadingShiftTextureScale.value=e}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(e){this.uniforms.shadingToonyFactor.value=e}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(e){this.uniforms.giEqualizationFactor.value=e}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(e){this.uniforms.matcapFactor.value=e}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(e){this.uniforms.matcapTexture.value=e}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(e){this.uniforms.parametricRimColorFactor.value=e}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(e){this.uniforms.rimMultiplyTexture.value=e}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(e){this.uniforms.rimLightingMixFactor.value=e}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(e){this.uniforms.parametricRimFresnelPowerFactor.value=e}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(e){this.uniforms.parametricRimLiftFactor.value=e}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(e){this.uniforms.outlineWidthMultiplyTexture.value=e}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(e){this.uniforms.outlineWidthFactor.value=e}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(e){this.uniforms.outlineColorFactor.value=e}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(e){this.uniforms.outlineLightingMixFactor.value=e}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(e){this.uniforms.uvAnimationMaskTexture.value=e}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(e){this.uniforms.uvAnimationScrollXOffset.value=e}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(e){this.uniforms.uvAnimationScrollYOffset.value=e}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(e){this.uniforms.uvAnimationRotationPhase.value=e}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(e){this._ignoreVertexColor=e,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(e){this._v0CompatShade=e,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(e){this._debugMode=e,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(e){this._outlineWidthMode=e,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(e){this._isOutline=e,this.needsUpdate=!0}get isMToonMaterial(){return!0}constructor(e={}){super({vertexShader:o3,fragmentShader:a3}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=Gu,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=l3.None,this._outlineWidthMode=Jc.None,this._isOutline=!1,e.transparentWithZWrite&&(e.depthWrite=!0),delete e.transparentWithZWrite,e.fog=!0,e.lights=!0,e.clipping=!0,parseInt(ci,10)<129&&(e.skinning=e.skinning||!1),parseInt(ci,10)<131&&(e.morphTargets=e.morphTargets||!1,e.morphNormals=e.morphNormals||!1),this.uniforms=Vm.merge([le.common,le.normalmap,le.emissivemap,le.fog,le.lights,{litFactor:{value:new Me(1,1,1)},mapUvTransform:{value:new Oe},colorAlpha:{value:1},normalMapUvTransform:{value:new Oe},shadeColorFactor:{value:new Me(.97,.81,.86)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new Oe},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new Oe},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new Me(0,0,0)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new Oe},parametricRimColorFactor:{value:new Me(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new Oe},rimLightingMixFactor:{value:0},parametricRimFresnelPowerFactor:{value:1},parametricRimLiftFactor:{value:0},emissive:{value:new Me(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new Oe},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new Oe},outlineWidthFactor:{value:.5},outlineColorFactor:{value:new Me(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new Oe},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},e.uniforms]),this.setValues(e),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,i])=>`${t}:${i}`),this.matcapTexture?`matcapTextureColorSpace:${eu(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${eu(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${eu(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{const i=parseInt(ci,10),r=Object.entries(Object.assign(Object.assign({},this._generateDefines()),this.defines)).filter(([s,o])=>!!o).map(([s,o])=>`#define ${s} ${o}`).join(`
`)+`
`;t.vertexShader=r+t.vertexShader,t.fragmentShader=r+t.fragmentShader,i<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>")),i<132&&(t.fragmentShader=t.fragmentShader.replace("#include <normal_pars_fragment>",""),t.fragmentShader=t.fragmentShader.replace("#include <alphatest_pars_fragment>",""))}}update(e){this._uploadUniformsWorkaround(),this._updateUVAnimation(e)}copy(e){return super.copy(e),this.map=e.map,this.normalMap=e.normalMap,this.emissiveMap=e.emissiveMap,this.shadeMultiplyTexture=e.shadeMultiplyTexture,this.shadingShiftTexture=e.shadingShiftTexture,this.matcapTexture=e.matcapTexture,this.rimMultiplyTexture=e.rimMultiplyTexture,this.outlineWidthMultiplyTexture=e.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=e.uvAnimationMaskTexture,this.normalMapType=e.normalMapType,this.uvAnimationScrollXSpeedFactor=e.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=e.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=e.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=e.ignoreVertexColor,this.v0CompatShade=e.v0CompatShade,this.debugMode=e.debugMode,this.outlineWidthMode=e.outlineWidthMode,this.isOutline=e.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(e){this.uniforms.uvAnimationScrollXOffset.value+=e*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=e*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=e*this.uvAnimationRotationSpeedFactor,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),parseInt(ci,10)>=132&&(this.uniforms.alphaTest.value=this.alphaTest),this.uniformsNeedUpdate=!0}_generateDefines(){const e=parseInt(ci,10),t=this.outlineWidthMultiplyTexture!==null,i=this.map!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:e,OUTLINE:this._isOutline,MTOON_USE_UV:t||i,MTOON_UVS_VERTEX_ONLY:t&&!i,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_WORLD:this._isOutline&&this._outlineWidthMode===Jc.WorldCoordinates,OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===Jc.ScreenCoordinates}}_updateTextureMatrix(e,t){e.value&&(e.value.matrixAutoUpdate&&e.value.updateMatrix(),t.value.copy(e.value.matrix))}}const u3={"":3e3,srgb:3001};function h3(n,e){parseInt(ci,10)>=152?n.colorSpace=e:n.encoding=u3[e]}class d3{get pending(){return Promise.all(this._pendings)}constructor(e,t){this._parser=e,this._materialParams=t,this._pendings=[]}assignPrimitive(e,t){t!=null&&(this._materialParams[e]=t)}assignColor(e,t,i){t!=null&&(this._materialParams[e]=new Me().fromArray(t),i&&this._materialParams[e].convertSRGBToLinear())}assignTexture(e,t,i){return Hr(this,void 0,void 0,function*(){const r=Hr(this,void 0,void 0,function*(){t!=null&&(yield this._parser.assignTexture(this._materialParams,e,t),i&&h3(this._materialParams[e],"srgb"))});return this._pendings.push(r),r})}assignTextureByIndex(e,t,i){return Hr(this,void 0,void 0,function*(){return this.assignTexture(e,t!=null?{index:t}:void 0,i)})}}const f3=new Set(["1.0","1.0-beta"]);class Ns{get name(){return Ns.EXTENSION_NAME}constructor(e,t={}){var i,r,s;this.parser=e,this.renderOrderOffset=(i=t.renderOrderOffset)!==null&&i!==void 0?i:0,this.v0CompatShade=(r=t.v0CompatShade)!==null&&r!==void 0?r:!1,this.debugMode=(s=t.debugMode)!==null&&s!==void 0?s:"none",this._mToonMaterialSet=new Set}beforeRoot(){return Hr(this,void 0,void 0,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return Hr(this,void 0,void 0,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?tu:null}extendMaterialParams(e,t){const i=this._getMToonExtension(e);return i?this._extendMaterialParams(i,t):null}loadMesh(e){var t;return Hr(this,void 0,void 0,function*(){const i=this.parser,s=(t=i.json.meshes)===null||t===void 0?void 0:t[e];if(s==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);const o=s.primitives,a=yield i.loadMesh(e);if(o.length===1){const l=a,c=o[0].material;c!=null&&this._setupPrimitive(l,c)}else{const l=a;for(let c=0;c<o.length;c++){const u=l.children[c],h=o[c].material;h!=null&&this._setupPrimitive(u,h)}}return a})}_removeUnlitExtensionIfMToonExists(){const i=this.parser.json.materials;i==null||i.map((r,s)=>{var o;this._getMToonExtension(s)&&(!((o=r.extensions)===null||o===void 0)&&o.KHR_materials_unlit)&&delete r.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,i;const o=(t=this.parser.json.materials)===null||t===void 0?void 0:t[e];if(o==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(i=o.extensions)===null||i===void 0?void 0:i[Ns.EXTENSION_NAME];if(a==null)return;const l=a.specVersion;if(!f3.has(l)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${Ns.EXTENSION_NAME} specVersion "${l}"`);return}return a}_extendMaterialParams(e,t){var i;return Hr(this,void 0,void 0,function*(){delete t.metalness,delete t.roughness;const r=new d3(this.parser,t);r.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),r.assignColor("shadeColorFactor",e.shadeColorFactor),r.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),r.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),r.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),r.assignPrimitive("shadingShiftTextureScale",(i=e.shadingShiftTexture)===null||i===void 0?void 0:i.scale),r.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),r.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),r.assignColor("matcapFactor",e.matcapFactor),r.assignTexture("matcapTexture",e.matcapTexture,!0),r.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),r.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),r.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),r.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),r.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),r.assignPrimitive("outlineWidthMode",e.outlineWidthMode),r.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),r.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),r.assignColor("outlineColorFactor",e.outlineColorFactor),r.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),r.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),r.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),r.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),r.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),r.assignPrimitive("v0CompatShade",this.v0CompatShade),r.assignPrimitive("debugMode",this.debugMode),yield r.pending})}_setupPrimitive(e,t){const i=this._getMToonExtension(t);if(i){const r=this._parseRenderOrder(i);e.renderOrder=r+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_generateOutline(e){const t=e.material;if(!(t instanceof tu)||t.outlineWidthMode==="none"||t.outlineWidthFactor<=0)return;e.material=[t];const i=t.clone();i.name+=" (Outline)",i.isOutline=!0,i.side=gn,e.material.push(i);const r=e.geometry,s=r.index?r.index.count:r.attributes.position.count/3;r.addGroup(0,s,0),r.addGroup(0,s,1)}_addToMaterialSet(e){const t=e.material,i=new Set;Array.isArray(t)?t.forEach(r=>i.add(r)):i.add(t);for(const r of i)r instanceof tu&&this._mToonMaterialSet.add(r)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!==null&&t!==void 0?t:0)}}Ns.EXTENSION_NAME="VRMC_materials_mtoon";/*!
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier v2.0.7
 * Support VRMC_hdr_emissiveMultiplier for @pixiv/three-vrm
 *
 * Copyright (c) 2020-2023 pixiv Inc.
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */function p3(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(i.next(u))}catch(h){o(h)}}function l(u){try{c(i.throw(u))}catch(h){o(h)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((i=i.apply(n,e||[])).next())})}class Ko{get name(){return Ko.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return p3(this,void 0,void 0,function*(){const i=this._getHDREmissiveMultiplierExtension(e);if(i==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");const r=i.emissiveMultiplier;t.emissiveIntensity=r})}_getHDREmissiveMultiplierExtension(e){var t,i;const o=(t=this.parser.json.materials)===null||t===void 0?void 0:t[e];if(o==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(i=o.extensions)===null||i===void 0?void 0:i[Ko.EXTENSION_NAME];if(a!=null)return a}}Ko.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";/*!
 * @pixiv/three-vrm-materials-v0compat v2.0.7
 * VRM0.0 materials compatibility layer plugin for @pixiv/three-vrm
 *
 * Copyright (c) 2020-2023 pixiv Inc.
 * @pixiv/three-vrm-materials-v0compat is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */function m3(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(i.next(u))}catch(h){o(h)}}function l(u){try{c(i.throw(u))}catch(h){o(h)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((i=i.apply(n,e||[])).next())})}function Ts(n){return Math.pow(n,2.2)}class g3{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(e){var t;this.parser=e,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;const i=this.parser.json;i.extensionsUsed=(t=i.extensionsUsed)!==null&&t!==void 0?t:[],i.extensionsUsed.indexOf("KHR_texture_transform")===-1&&i.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){var e;return m3(this,void 0,void 0,function*(){const t=this.parser.json,i=(e=t.extensions)===null||e===void 0?void 0:e.VRM,r=i==null?void 0:i.materialProperties;r&&(this._populateRenderQueueMap(r),r.forEach((s,o)=>{var a,l;const c=(a=t.materials)===null||a===void 0?void 0:a[o];if(c==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${o}] of glTF but the material doesn't exist`);return}if(s.shader==="VRM/MToon"){const u=this._parseV0MToonProperties(s,c);t.materials[o]=u}else if(!((l=s.shader)===null||l===void 0)&&l.startsWith("VRM/Unlit")){const u=this._parseV0UnlitProperties(s,c);t.materials[o]=u}else s.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${s.shader}`)}))})}_parseV0MToonProperties(e,t){var i,r,s,o,a,l,c,u,h,d,f,g,_,m,p,E,v,M,T,R,A,F,x,b,z,G,Q,I,V,Y,j,ie,$,K,oe,ce,W,Z,de,ge,ve,Ue,Pe,we;const Ve=(r=(i=e.keywordMap)===null||i===void 0?void 0:i._ALPHABLEND_ON)!==null&&r!==void 0?r:!1,zt=((s=e.floatProperties)===null||s===void 0?void 0:s._ZWrite)===1&&Ve,Ee=this._v0ParseRenderQueue(e),Ge=(a=(o=e.keywordMap)===null||o===void 0?void 0:o._ALPHATEST_ON)!==null&&a!==void 0?a:!1,Ce=Ve?"BLEND":Ge?"MASK":"OPAQUE",ht=Ge?(l=e.floatProperties)===null||l===void 0?void 0:l._Cutoff:void 0,Ne=((u=(c=e.floatProperties)===null||c===void 0?void 0:c._CullMode)!==null&&u!==void 0?u:2)===0,Xe=this._portTextureTransform(e),Ot=(d=(h=e.vectorProperties)===null||h===void 0?void 0:h._Color)===null||d===void 0?void 0:d.map((co,Jl)=>Jl===3?co:Ts(co)),Pt=(f=e.textureProperties)===null||f===void 0?void 0:f._MainTex,w=Pt!=null?{index:Pt,extensions:Object.assign({},Xe)}:void 0,y=(g=e.floatProperties)===null||g===void 0?void 0:g._BumpScale,O=(_=e.textureProperties)===null||_===void 0?void 0:_._BumpMap,re=O!=null?{index:O,scale:y,extensions:Object.assign({},Xe)}:void 0,ee=(p=(m=e.vectorProperties)===null||m===void 0?void 0:m._EmissionColor)===null||p===void 0?void 0:p.map(Ts),ne=(E=e.textureProperties)===null||E===void 0?void 0:E._EmissionMap,_e=ne!=null?{index:ne,extensions:Object.assign({},Xe)}:void 0,ae=(M=(v=e.vectorProperties)===null||v===void 0?void 0:v._ShadeColor)===null||M===void 0?void 0:M.map(Ts),he=(T=e.textureProperties)===null||T===void 0?void 0:T._ShadeTexture,P=he!=null?{index:he,extensions:Object.assign({},Xe)}:void 0;let te=(A=(R=e.floatProperties)===null||R===void 0?void 0:R._ShadeShift)!==null&&A!==void 0?A:0,q=(x=(F=e.floatProperties)===null||F===void 0?void 0:F._ShadeToony)!==null&&x!==void 0?x:.9;q=Ht.lerp(q,1,.5+.5*te),te=-te-(1-q);const be=(b=e.floatProperties)===null||b===void 0?void 0:b._IndirectLightIntensity,xe=be?1-be:void 0,Te=(z=e.textureProperties)===null||z===void 0?void 0:z._SphereAdd,me=Te!=null?[1,1,1]:void 0,pe=Te!=null?{index:Te}:void 0,Ke=(G=e.floatProperties)===null||G===void 0?void 0:G._RimLightingMix,C=(Q=e.textureProperties)===null||Q===void 0?void 0:Q._RimTexture,ue=C!=null?{index:C,extensions:Object.assign({},Xe)}:void 0,J=(V=(I=e.vectorProperties)===null||I===void 0?void 0:I._RimColor)===null||V===void 0?void 0:V.map(Ts),X=(Y=e.floatProperties)===null||Y===void 0?void 0:Y._RimFresnelPower,se=(j=e.floatProperties)===null||j===void 0?void 0:j._RimLift,Se=["none","worldCoordinates","screenCoordinates"][($=(ie=e.floatProperties)===null||ie===void 0?void 0:ie._OutlineWidthMode)!==null&&$!==void 0?$:0];let je=(oe=(K=e.floatProperties)===null||K===void 0?void 0:K._OutlineWidth)!==null&&oe!==void 0?oe:0;je=.01*je;const Ft=(ce=e.textureProperties)===null||ce===void 0?void 0:ce._OutlineWidthTexture,tn=Ft!=null?{index:Ft,extensions:Object.assign({},Xe)}:void 0,ct=(Z=(W=e.vectorProperties)===null||W===void 0?void 0:W._OutlineColor)===null||Z===void 0?void 0:Z.map(Ts),On=((de=e.floatProperties)===null||de===void 0?void 0:de._OutlineColorMode)===1?(ge=e.floatProperties)===null||ge===void 0?void 0:ge._OutlineLightingMix:0,lo=(ve=e.textureProperties)===null||ve===void 0?void 0:ve._UvAnimMaskTexture,Ql=lo!=null?{index:lo,extensions:Object.assign({},Xe)}:void 0,es=(Ue=e.floatProperties)===null||Ue===void 0?void 0:Ue._UvAnimScrollX;let Tr=(Pe=e.floatProperties)===null||Pe===void 0?void 0:Pe._UvAnimScrollY;Tr!=null&&(Tr=-Tr);const ts=(we=e.floatProperties)===null||we===void 0?void 0:we._UvAnimRotation,la={specVersion:"1.0",transparentWithZWrite:zt,renderQueueOffsetNumber:Ee,shadeColorFactor:ae,shadeMultiplyTexture:P,shadingShiftFactor:te,shadingToonyFactor:q,giEqualizationFactor:xe,matcapFactor:me,matcapTexture:pe,rimLightingMixFactor:Ke,rimMultiplyTexture:ue,parametricRimColorFactor:J,parametricRimFresnelPowerFactor:X,parametricRimLiftFactor:se,outlineWidthMode:Se,outlineWidthFactor:je,outlineWidthMultiplyTexture:tn,outlineColorFactor:ct,outlineLightingMixFactor:On,uvAnimationMaskTexture:Ql,uvAnimationScrollXSpeedFactor:es,uvAnimationScrollYSpeedFactor:Tr,uvAnimationRotationSpeedFactor:ts};return Object.assign(Object.assign({},t),{pbrMetallicRoughness:{baseColorFactor:Ot,baseColorTexture:w},normalTexture:re,emissiveTexture:_e,emissiveFactor:ee,alphaMode:Ce,alphaCutoff:ht,doubleSided:Ne,extensions:{VRMC_materials_mtoon:la}})}_parseV0UnlitProperties(e,t){var i,r,s,o;const a=e.shader==="VRM/UnlitTransparentZWrite",l=e.shader==="VRM/UnlitTransparent"||a,c=this._v0ParseRenderQueue(e),u=e.shader==="VRM/UnlitCutout",h=l?"BLEND":u?"MASK":"OPAQUE",d=u?(i=e.floatProperties)===null||i===void 0?void 0:i._Cutoff:void 0,f=this._portTextureTransform(e),g=(s=(r=e.vectorProperties)===null||r===void 0?void 0:r._Color)===null||s===void 0?void 0:s.map(Ts),_=(o=e.textureProperties)===null||o===void 0?void 0:o._MainTex,m=_!=null?{index:_,extensions:Object.assign({},f)}:void 0,p={specVersion:"1.0",transparentWithZWrite:a,renderQueueOffsetNumber:c,shadeColorFactor:g,shadeMultiplyTexture:m};return Object.assign(Object.assign({},t),{pbrMetallicRoughness:{baseColorFactor:g,baseColorTexture:m},alphaMode:h,alphaCutoff:d,extensions:{VRMC_materials_mtoon:p}})}_portTextureTransform(e){var t,i,r,s,o;const a=(t=e.vectorProperties)===null||t===void 0?void 0:t._MainTex;if(a==null)return{};const l=[(i=a==null?void 0:a[0])!==null&&i!==void 0?i:0,(r=a==null?void 0:a[1])!==null&&r!==void 0?r:0],c=[(s=a==null?void 0:a[2])!==null&&s!==void 0?s:1,(o=a==null?void 0:a[3])!==null&&o!==void 0?o:1];return l[1]=1-c[1]-l[1],{KHR_texture_transform:{offset:l,scale:c}}}_v0ParseRenderQueue(e){var t,i,r;const s=(i=(t=e.keywordMap)===null||t===void 0?void 0:t._ALPHABLEND_ON)!==null&&i!==void 0?i:!1,o=((r=e.floatProperties)===null||r===void 0?void 0:r._ZWrite)===1;let a=0;if(s){const l=e.renderQueue;l!=null&&(o?a=this._renderQueueMapTransparentZWrite.get(l):a=this._renderQueueMapTransparent.get(l))}return a}_populateRenderQueueMap(e){const t=new Set,i=new Set;e.forEach(r=>{var s,o,a;const l=(o=(s=r.keywordMap)===null||s===void 0?void 0:s._ALPHABLEND_ON)!==null&&o!==void 0?o:!1,c=((a=r.floatProperties)===null||a===void 0?void 0:a._ZWrite)===1;if(l){const u=r.renderQueue;u!=null&&(c?i.add(u):t.add(u))}}),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),i.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${i.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(t).sort().forEach((r,s)=>{const o=Math.min(Math.max(s-t.size+1,-9),0);this._renderQueueMapTransparent.set(r,o)}),Array.from(i).sort().forEach((r,s)=>{const o=Math.min(Math.max(s,0),9);this._renderQueueMapTransparentZWrite.set(r,o)})}}/*!
 * @pixiv/three-vrm-node-constraint v2.0.7
 * Node constraint module for @pixiv/three-vrm
 *
 * Copyright (c) 2020-2023 pixiv Inc.
 * @pixiv/three-vrm-node-constraint is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */const or=new L;class nu extends Dn{constructor(e){super(),this._attrPosition=new mt(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(Gv);const t=new en;t.setAttribute("position",this._attrPosition);const i=new xr({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Pl(t,i),this.add(this._line),this.constraint=e}updateMatrixWorld(e){or.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,or.x,or.y,or.z),this.constraint.source&&or.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,or.x,or.y,or.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(e)}}function om(n,e){return e.set(n.elements[12],n.elements[13],n.elements[14])}const _3=new L,v3=new L;function x3(n,e){return n.decompose(_3,e,v3),e}function Al(n){return n.invert?n.invert():n.inverse(),n}class Wh{constructor(e,t){this.destination=e,this.source=t,this.weight=1}}const y3=new L,M3=new L,E3=new L,T3=new ke,S3=new ke,A3=new ke;class w3 extends Wh{get aimAxis(){return this._aimAxis}set aimAxis(e){this._aimAxis=e,this._v3AimAxis.set(e==="PositiveX"?1:e==="NegativeX"?-1:0,e==="PositiveY"?1:e==="NegativeY"?-1:0,e==="PositiveZ"?1:e==="NegativeZ"?-1:0)}get dependencies(){const e=new Set([this.source]);return this.destination.parent&&e.add(this.destination.parent),e}constructor(e,t){super(e,t),this._aimAxis="PositiveX",this._v3AimAxis=new L(1,0,0),this._dstRestQuat=new ke}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);const e=T3.identity(),t=S3.identity();this.destination.parent&&(x3(this.destination.parent.matrixWorld,e),Al(t.copy(e)));const i=y3.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(e),r=om(this.source.matrixWorld,M3).sub(om(this.destination.matrixWorld,E3)).normalize(),s=A3.setFromUnitVectors(i,r).premultiply(t).multiply(e).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(s,this.weight)}}function am(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(i.next(u))}catch(h){o(h)}}function l(u){try{c(i.throw(u))}catch(h){o(h)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((i=i.apply(n,e||[])).next())})}function b3(n,e){const t=[n];let i=n.parent;for(;i!==null;)t.unshift(i),i=i.parent;t.forEach(r=>{e(r)})}class R3{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(e){this._constraints.add(e);let t=this._objectConstraintsMap.get(e.destination);t==null&&(t=new Set,this._objectConstraintsMap.set(e.destination,t)),t.add(e)}deleteConstraint(e){this._constraints.delete(e),this._objectConstraintsMap.get(e.destination).delete(e)}setInitState(){const e=new Set,t=new Set;for(const i of this._constraints)this._processConstraint(i,e,t,r=>r.setInitState())}update(){const e=new Set,t=new Set;for(const i of this._constraints)this._processConstraint(i,e,t,r=>r.update())}_processConstraint(e,t,i,r){if(i.has(e))return;if(t.has(e))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");t.add(e);const s=e.dependencies;for(const o of s)b3(o,a=>{const l=this._objectConstraintsMap.get(a);if(l)for(const c of l)this._processConstraint(c,t,i,r)});r(e),i.add(e)}}const L3=new ke,P3=new ke;class C3 extends Wh{get dependencies(){return new Set([this.source])}constructor(e,t){super(e,t),this._dstRestQuat=new ke,this._invSrcRestQuat=new ke}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),Al(this._invSrcRestQuat.copy(this.source.quaternion))}update(){const e=L3.copy(this._invSrcRestQuat).multiply(this.source.quaternion),t=P3.copy(this._dstRestQuat).multiply(e);this.destination.quaternion.copy(this._dstRestQuat).slerp(t,this.weight)}}const I3=new L,D3=new ke,U3=new ke;class N3 extends Wh{get rollAxis(){return this._rollAxis}set rollAxis(e){this._rollAxis=e,this._v3RollAxis.set(e==="X"?1:0,e==="Y"?1:0,e==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(e,t){super(e,t),this._rollAxis="X",this._v3RollAxis=new L(1,0,0),this._dstRestQuat=new ke,this._invDstRestQuat=new ke,this._invSrcRestQuatMulDstRestQuat=new ke}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),Al(this._invDstRestQuat.copy(this._dstRestQuat)),Al(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){const e=D3.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),t=I3.copy(this._v3RollAxis).applyQuaternion(e),r=U3.setFromUnitVectors(t,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(e);this.destination.quaternion.copy(this._dstRestQuat).slerp(r,this.weight)}}const O3=new Set(["1.0","1.0-beta"]);class kr{get name(){return kr.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t==null?void 0:t.helperRoot}afterRoot(e){return am(this,void 0,void 0,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){var t;return am(this,void 0,void 0,function*(){const i=this.parser.json;if(!(((t=i.extensionsUsed)===null||t===void 0?void 0:t.indexOf(kr.EXTENSION_NAME))!==-1))return null;const s=new R3,o=yield this.parser.getDependencies("node");return o.forEach((a,l)=>{var c;const u=i.nodes[l],h=(c=u==null?void 0:u.extensions)===null||c===void 0?void 0:c[kr.EXTENSION_NAME];if(h==null)return;const d=h.specVersion;if(!O3.has(d)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${kr.EXTENSION_NAME} specVersion "${d}"`);return}const f=h.constraint;if(f.roll!=null){const g=this._importRollConstraint(a,o,f.roll);s.addConstraint(g)}else if(f.aim!=null){const g=this._importAimConstraint(a,o,f.aim);s.addConstraint(g)}else if(f.rotation!=null){const g=this._importRotationConstraint(a,o,f.rotation);s.addConstraint(g)}}),e.scene.updateMatrixWorld(),s.setInitState(),s})}_importRollConstraint(e,t,i){const{source:r,rollAxis:s,weight:o}=i,a=t[r],l=new N3(e,a);if(s!=null&&(l.rollAxis=s),o!=null&&(l.weight=o),this.helperRoot){const c=new nu(l);this.helperRoot.add(c)}return l}_importAimConstraint(e,t,i){const{source:r,aimAxis:s,weight:o}=i,a=t[r],l=new w3(e,a);if(s!=null&&(l.aimAxis=s),o!=null&&(l.weight=o),this.helperRoot){const c=new nu(l);this.helperRoot.add(c)}return l}_importRotationConstraint(e,t,i){const{source:r,weight:s}=i,o=t[r],a=new C3(e,o);if(s!=null&&(a.weight=s),this.helperRoot){const l=new nu(a);this.helperRoot.add(l)}return a}}kr.EXTENSION_NAME="VRMC_node_constraint";/*!
 * @pixiv/three-vrm-springbone v2.0.7
 * Spring bone module for @pixiv/three-vrm
 *
 * Copyright (c) 2020-2023 pixiv Inc.
 * @pixiv/three-vrm-springbone is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */class A_{}const iu=new L,Nr=new L;class w_ extends A_{get type(){return"capsule"}constructor(e){var t,i,r;super(),this.offset=(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:new L(0,0,0),this.tail=(i=e==null?void 0:e.tail)!==null&&i!==void 0?i:new L(0,0,0),this.radius=(r=e==null?void 0:e.radius)!==null&&r!==void 0?r:0}calculateCollision(e,t,i,r){iu.copy(this.offset).applyMatrix4(e),Nr.copy(this.tail).applyMatrix4(e),Nr.sub(iu);const s=Nr.lengthSq();r.copy(t).sub(iu);const o=Nr.dot(r);o<=0||(s<=o||Nr.multiplyScalar(o/s),r.sub(Nr));const a=i+this.radius,l=r.length()-a;return r.normalize(),l}}class b_ extends A_{get type(){return"sphere"}constructor(e){var t,i;super(),this.offset=(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:new L(0,0,0),this.radius=(i=e==null?void 0:e.radius)!==null&&i!==void 0?i:0}calculateCollision(e,t,i,r){r.copy(this.offset).applyMatrix4(e),r.negate().add(t);const s=i+this.radius,o=r.length()-s;return r.normalize(),o}}const xi=new L;class F3 extends en{constructor(e){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new L,this._currentTail=new L,this._shape=e,this._attrPos=new mt(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new mt(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;const t=this._shape.radius/this.worldScale;this._currentRadius!==t&&(this._currentRadius=t,e=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),e=!0);const i=xi.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(i)>1e-10&&(this._currentTail.copy(i),e=!0),e&&this._buildPosition()}_buildPosition(){xi.copy(this._currentTail).sub(this._currentOffset);const e=xi.length()/this._currentRadius;for(let r=0;r<=16;r++){const s=r/16*Math.PI;this._attrPos.setXYZ(r,-Math.sin(s),-Math.cos(s),0),this._attrPos.setXYZ(17+r,e+Math.sin(s),Math.cos(s),0),this._attrPos.setXYZ(34+r,-Math.sin(s),0,-Math.cos(s)),this._attrPos.setXYZ(51+r,e+Math.sin(s),0,Math.cos(s))}for(let r=0;r<32;r++){const s=r/16*Math.PI;this._attrPos.setXYZ(68+r,0,Math.sin(s),Math.cos(s)),this._attrPos.setXYZ(100+r,e,Math.sin(s),Math.cos(s))}const t=Math.atan2(xi.y,Math.sqrt(xi.x*xi.x+xi.z*xi.z)),i=-Math.atan2(xi.z,xi.x);this.rotateZ(t),this.rotateY(i),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<34;e++){const t=(e+1)%34;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(68+e*2,34+e,34+t)}for(let e=0;e<32;e++){const t=(e+1)%32;this._attrIndex.setXY(136+e*2,68+e,68+t),this._attrIndex.setXY(200+e*2,100+e,100+t)}this._attrIndex.needsUpdate=!0}}class B3 extends en{constructor(e){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new L,this._shape=e,this._attrPos=new mt(new Float32Array(32*3*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new mt(new Uint16Array(64*3),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;const t=this._shape.radius/this.worldScale;this._currentRadius!==t&&(this._currentRadius=t,e=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),e=!0),e&&this._buildPosition()}_buildPosition(){for(let e=0;e<32;e++){const t=e/16*Math.PI;this._attrPos.setXYZ(e,Math.cos(t),Math.sin(t),0),this._attrPos.setXYZ(32+e,0,Math.cos(t),Math.sin(t)),this._attrPos.setXYZ(64+e,Math.sin(t),0,Math.cos(t))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<32;e++){const t=(e+1)%32;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(64+e*2,32+e,32+t),this._attrIndex.setXY(128+e*2,64+e,64+t)}this._attrIndex.needsUpdate=!0}}const H3=new L;class lm extends Dn{constructor(e){if(super(),this.matrixAutoUpdate=!1,this.collider=e,this.collider.shape instanceof b_)this._geometry=new B3(this.collider.shape);else if(this.collider.shape instanceof w_)this._geometry=new F3(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");const t=new xr({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Js(this._geometry,t),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(e){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);const t=this.matrix.elements;this._geometry.worldScale=H3.set(t[0],t[1],t[2]).length(),this._geometry.update(),super.updateMatrixWorld(e)}}class k3 extends en{constructor(e){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new L,this._springBone=e,this._attrPos=new mt(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new mt(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;const t=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==t&&(this._currentRadius=t,e=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),e=!0),e&&this._buildPosition()}_buildPosition(){for(let e=0;e<32;e++){const t=e/16*Math.PI;this._attrPos.setXYZ(e,Math.cos(t),Math.sin(t),0),this._attrPos.setXYZ(32+e,0,Math.cos(t),Math.sin(t)),this._attrPos.setXYZ(64+e,Math.sin(t),0,Math.cos(t))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<32;e++){const t=(e+1)%32;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(64+e*2,32+e,32+t),this._attrIndex.setXY(128+e*2,64+e,64+t)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}}const z3=new L;class V3 extends Dn{constructor(e){super(),this.matrixAutoUpdate=!1,this.springBone=e,this._geometry=new k3(this.springBone);const t=new xr({color:16776960,depthTest:!1,depthWrite:!1});this._line=new Js(this._geometry,t),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(e){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);const t=this.matrix.elements;this._geometry.worldScale=z3.set(t[0],t[1],t[2]).length(),this._geometry.update(),super.updateMatrixWorld(e)}}class cm extends ft{constructor(e){super(),this.shape=e}}const G3=new ze;function R_(n){return n.invert?n.invert():n.getInverse(G3.copy(n)),n}class W3{get inverse(){return this._shouldUpdateInverse&&(this._inverseCache.copy(this.matrix),R_(this._inverseCache),this._shouldUpdateInverse=!1),this._inverseCache}constructor(e){this._inverseCache=new ze,this._shouldUpdateInverse=!0,this.matrix=e;const t={set:(i,r,s)=>(this._shouldUpdateInverse=!0,i[r]=s,!0)};this._originalElements=e.elements,e.elements=new Proxy(e.elements,t)}revert(){this.matrix.elements=this._originalElements}}const X3=new ze,zi=new L,Eo=new L,j3=new L,Ss=new L,um=new L,To=new L,hm=new ke,As=new ze,q3=new ze;class Y3{get center(){return this._center}set center(e){var t;!((t=this._center)===null||t===void 0)&&t.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=e,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new W3(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:X3}constructor(e,t,i={},r=[]){var s,o,a,l,c,u;this._currentTail=new L,this._prevTail=new L,this._boneAxis=new L,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new ze,this._initialLocalRotation=new ke,this._initialLocalChildPosition=new L,this.bone=e,this.bone.matrixAutoUpdate=!1,this.child=t,this.settings={hitRadius:(s=i.hitRadius)!==null&&s!==void 0?s:0,stiffness:(o=i.stiffness)!==null&&o!==void 0?o:1,gravityPower:(a=i.gravityPower)!==null&&a!==void 0?a:0,gravityDir:(c=(l=i.gravityDir)===null||l===void 0?void 0:l.clone())!==null&&c!==void 0?c:new L(0,-1,0),dragForce:(u=i.dragForce)!==null&&u!==void 0?u:.4},this.colliderGroups=r}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);const e=this._getMatrixWorldToCenter(As);this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(e),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);const e=this._getMatrixWorldToCenter(As);this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(e),this._prevTail.copy(this._currentTail)}update(e){if(e<=0)return;this._calcWorldSpaceBoneLength(),Ss.setFromMatrixPosition(this.bone.matrixWorld);let t=this._getMatrixWorldToCenter(As);um.copy(Ss).applyMatrix4(t);const i=hm.setFromRotationMatrix(t),r=q3.copy(t).multiply(this._parentMatrixWorld),s=Eo.copy(this._boneAxis).applyMatrix4(this._initialLocalMatrix).applyMatrix4(r).sub(um).normalize(),o=j3.copy(this.settings.gravityDir).applyQuaternion(i).normalize(),a=this._getMatrixCenterToWorld(As);To.copy(this._currentTail).add(zi.copy(this._currentTail).sub(this._prevTail).multiplyScalar(1-this.settings.dragForce)).add(zi.copy(s).multiplyScalar(this.settings.stiffness*e)).add(zi.copy(o).multiplyScalar(this.settings.gravityPower*e)).applyMatrix4(a),To.sub(Ss).normalize().multiplyScalar(this._worldSpaceBoneLength).add(Ss),this._collision(To),t=this._getMatrixWorldToCenter(As),this._prevTail.copy(this._currentTail),this._currentTail.copy(zi.copy(To).applyMatrix4(t));const l=R_(As.copy(this._parentMatrixWorld).multiply(this._initialLocalMatrix)),c=hm.setFromUnitVectors(this._boneAxis,zi.copy(To).applyMatrix4(l).normalize());this.bone.quaternion.copy(this._initialLocalRotation).multiply(c),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(e){this.colliderGroups.forEach(t=>{t.colliders.forEach(i=>{const r=i.shape.calculateCollision(i.matrixWorld,e,this.settings.hitRadius,zi);r<0&&(e.add(zi.multiplyScalar(-r)),e.sub(Ss).normalize().multiplyScalar(this._worldSpaceBoneLength).add(Ss))})})}_calcWorldSpaceBoneLength(){zi.setFromMatrixPosition(this.bone.matrixWorld),this.child?Eo.setFromMatrixPosition(this.child.matrixWorld):(Eo.copy(this._initialLocalChildPosition),Eo.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=zi.sub(Eo).length()}_getMatrixCenterToWorld(e){return this._center?e.copy(this._center.matrixWorld):e.identity(),e}_getMatrixWorldToCenter(e){return this._center?e.copy(this._center.userData.inverseCacheProxy.inverse):e.identity(),e}}function ja(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(i.next(u))}catch(h){o(h)}}function l(u){try{c(i.throw(u))}catch(h){o(h)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((i=i.apply(n,e||[])).next())})}function K3(n,e){const t=[];let i=n;for(;i!==null;)t.unshift(i),i=i.parent;t.forEach(r=>{e(r)})}function L_(n,e){n.children.forEach(t=>{e(t)||L_(t,e)})}class dm{constructor(){this._joints=new Set,this._objectSpringBonesMap=new Map}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){const e=new Set;return this._joints.forEach(t=>{t.colliderGroups.forEach(i=>{e.add(i)})}),Array.from(e)}get colliders(){const e=new Set;return this.colliderGroups.forEach(t=>{t.colliders.forEach(i=>{e.add(i)})}),Array.from(e)}addJoint(e){this._joints.add(e);let t=this._objectSpringBonesMap.get(e.bone);t==null&&(t=new Set,this._objectSpringBonesMap.set(e.bone,t)),t.add(e)}addSpringBone(e){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(e)}deleteJoint(e){this._joints.delete(e),this._objectSpringBonesMap.get(e.bone).delete(e)}deleteSpringBone(e){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(e)}setInitState(){const e=new Set,t=new Set,i=new Set;for(const r of this._joints)this._processSpringBone(r,e,t,i,s=>s.setInitState())}reset(){const e=new Set,t=new Set,i=new Set;for(const r of this._joints)this._processSpringBone(r,e,t,i,s=>s.reset())}update(e){const t=new Set,i=new Set,r=new Set;for(const s of this._joints)this._processSpringBone(s,t,i,r,o=>o.update(e)),L_(s.bone,o=>{var a,l;return((l=(a=this._objectSpringBonesMap.get(o))===null||a===void 0?void 0:a.size)!==null&&l!==void 0?l:0)>0?!0:(o.updateWorldMatrix(!1,!1),!1)})}_processSpringBone(e,t,i,r,s){if(i.has(e))return;if(t.has(e))throw new Error("VRMSpringBoneManager: Circular dependency detected while updating springbones");t.add(e);const o=this._getDependencies(e);for(const a of o)K3(a,l=>{const c=this._objectSpringBonesMap.get(l);if(c)for(const u of c)this._processSpringBone(u,t,i,r,s);else r.has(l)||(l.updateWorldMatrix(!1,!1),r.add(l))});e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),s(e),r.add(e.bone),i.add(e)}_getDependencies(e){const t=new Set,i=e.bone.parent;return i&&t.add(i),e.colliderGroups.forEach(r=>{r.colliders.forEach(s=>{t.add(s)})}),t}}const $3=new Set(["1.0","1.0-beta"]);class zr{get name(){return zr.EXTENSION_NAME}constructor(e,t){this.parser=e,this.jointHelperRoot=t==null?void 0:t.jointHelperRoot,this.colliderHelperRoot=t==null?void 0:t.colliderHelperRoot}afterRoot(e){return ja(this,void 0,void 0,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return ja(this,void 0,void 0,function*(){const t=yield this._v1Import(e);if(t!=null)return t;const i=yield this._v0Import(e);return i??null})}_v1Import(e){var t,i,r,s,o;return ja(this,void 0,void 0,function*(){const a=e.parser.json;if(!(((t=a.extensionsUsed)===null||t===void 0?void 0:t.indexOf(zr.EXTENSION_NAME))!==-1))return null;const c=new dm,u=yield e.parser.getDependencies("node"),h=(i=a.extensions)===null||i===void 0?void 0:i[zr.EXTENSION_NAME];if(!h)return null;const d=h.specVersion;if(!$3.has(d))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${zr.EXTENSION_NAME} specVersion "${d}"`),null;const f=(r=h.colliders)===null||r===void 0?void 0:r.map((_,m)=>{var p,E,v,M,T;const R=u[_.node],A=_.shape;if(A.sphere)return this._importSphereCollider(R,{offset:new L().fromArray((p=A.sphere.offset)!==null&&p!==void 0?p:[0,0,0]),radius:(E=A.sphere.radius)!==null&&E!==void 0?E:0});if(A.capsule)return this._importCapsuleCollider(R,{offset:new L().fromArray((v=A.capsule.offset)!==null&&v!==void 0?v:[0,0,0]),radius:(M=A.capsule.radius)!==null&&M!==void 0?M:0,tail:new L().fromArray((T=A.capsule.tail)!==null&&T!==void 0?T:[0,0,0])});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${m} has no valid shape`)}),g=(s=h.colliderGroups)===null||s===void 0?void 0:s.map((_,m)=>{var p;return{colliders:((p=_.colliders)!==null&&p!==void 0?p:[]).map(v=>{const M=f==null?void 0:f[v];if(M==null)throw new Error(`VRMSpringBoneLoaderPlugin: The colliderGroup #${m} attempted to use a collider #${v} but not found`);return M}),name:_.name}});return(o=h.springs)===null||o===void 0||o.forEach((_,m)=>{var p;const E=_.joints,v=(p=_.colliderGroups)===null||p===void 0?void 0:p.map(R=>{const A=g==null?void 0:g[R];if(A==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${m} attempted to use a colliderGroup ${R} but not found`);return A}),M=_.center!=null?u[_.center]:void 0;let T;E.forEach(R=>{if(T){const A=T.node,F=u[A],x=R.node,b=u[x],z={hitRadius:T.hitRadius,dragForce:T.dragForce,gravityPower:T.gravityPower,stiffness:T.stiffness,gravityDir:T.gravityDir!=null?new L().fromArray(T.gravityDir):void 0},G=this._importJoint(F,b,z,v);M&&(G.center=M),c.addJoint(G)}T=R})}),c.setInitState(),c})}_v0Import(e){var t,i,r;return ja(this,void 0,void 0,function*(){const s=e.parser.json;if(!(((t=s.extensionsUsed)===null||t===void 0?void 0:t.indexOf("VRM"))!==-1))return null;const a=(i=s.extensions)===null||i===void 0?void 0:i.VRM,l=a==null?void 0:a.secondaryAnimation;if(!l)return null;const c=l==null?void 0:l.boneGroups;if(!c)return null;const u=new dm,h=yield e.parser.getDependencies("node"),d=(r=l.colliderGroups)===null||r===void 0?void 0:r.map(f=>{var g;const _=h[f.node];return{colliders:((g=f.colliders)!==null&&g!==void 0?g:[]).map((p,E)=>{var v,M,T;const R=new L(0,0,0);return p.offset&&R.set((v=p.offset.x)!==null&&v!==void 0?v:0,(M=p.offset.y)!==null&&M!==void 0?M:0,p.offset.z?-p.offset.z:0),this._importSphereCollider(_,{offset:R,radius:(T=p.radius)!==null&&T!==void 0?T:0})})}});return c==null||c.forEach((f,g)=>{const _=f.bones;_&&_.forEach(m=>{var p,E,v,M;const T=h[m],R=new L;f.gravityDir?R.set((p=f.gravityDir.x)!==null&&p!==void 0?p:0,(E=f.gravityDir.y)!==null&&E!==void 0?E:0,(v=f.gravityDir.z)!==null&&v!==void 0?v:0):R.set(0,-1,0);const A=f.center!=null?h[f.center]:void 0,F={hitRadius:f.hitRadius,dragForce:f.dragForce,gravityPower:f.gravityPower,stiffness:f.stiffiness,gravityDir:R},x=(M=f.colliderGroups)===null||M===void 0?void 0:M.map(b=>{const z=d==null?void 0:d[b];if(z==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${g} attempted to use a colliderGroup ${b} but not found`);return z});T.traverse(b=>{var z;const G=(z=b.children[0])!==null&&z!==void 0?z:null,Q=this._importJoint(b,G,F,x);A&&(Q.center=A),u.addJoint(Q)})})}),e.scene.updateMatrixWorld(),u.setInitState(),u})}_importJoint(e,t,i,r){const s=new Y3(e,t,i,r);if(this.jointHelperRoot){const o=new V3(s);this.jointHelperRoot.add(o),o.renderOrder=this.jointHelperRoot.renderOrder}return s}_importSphereCollider(e,t){const{offset:i,radius:r}=t,s=new b_({offset:i,radius:r}),o=new cm(s);if(e.add(o),this.colliderHelperRoot){const a=new lm(o);this.colliderHelperRoot.add(a),a.renderOrder=this.colliderHelperRoot.renderOrder}return o}_importCapsuleCollider(e,t){const{offset:i,radius:r,tail:s}=t,o=new w_({offset:i,radius:r,tail:s}),a=new cm(o);if(e.add(a),this.colliderHelperRoot){const l=new lm(a);this.colliderHelperRoot.add(l),l.renderOrder=this.colliderHelperRoot.renderOrder}return a}}zr.EXTENSION_NAME="VRMC_springBone";class Z3{get name(){return"VRMLoaderPlugin"}constructor(e,t){var i,r,s,o,a,l,c,u,h,d;this.parser=e;const f=t==null?void 0:t.helperRoot,g=t==null?void 0:t.autoUpdateHumanBones;this.expressionPlugin=(i=t==null?void 0:t.expressionPlugin)!==null&&i!==void 0?i:new Kl(e),this.firstPersonPlugin=(r=t==null?void 0:t.firstPersonPlugin)!==null&&r!==void 0?r:new IA(e),this.humanoidPlugin=(s=t==null?void 0:t.humanoidPlugin)!==null&&s!==void 0?s:new kA(e,{helperRoot:f,autoUpdateHumanBones:g}),this.lookAtPlugin=(o=t==null?void 0:t.lookAtPlugin)!==null&&o!==void 0?o:new e3(e,{helperRoot:f}),this.metaPlugin=(a=t==null?void 0:t.metaPlugin)!==null&&a!==void 0?a:new i3(e),this.mtoonMaterialPlugin=(l=t==null?void 0:t.mtoonMaterialPlugin)!==null&&l!==void 0?l:new Ns(e),this.materialsHDREmissiveMultiplierPlugin=(c=t==null?void 0:t.materialsHDREmissiveMultiplierPlugin)!==null&&c!==void 0?c:new Ko(e),this.materialsV0CompatPlugin=(u=t==null?void 0:t.materialsV0CompatPlugin)!==null&&u!==void 0?u:new g3(e),this.springBonePlugin=(h=t==null?void 0:t.springBonePlugin)!==null&&h!==void 0?h:new zr(e,{colliderHelperRoot:f,jointHelperRoot:f}),this.nodeConstraintPlugin=(d=t==null?void 0:t.nodeConstraintPlugin)!==null&&d!==void 0?d:new kr(e,{helperRoot:f})}beforeRoot(){return Xa(this,void 0,void 0,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(e){return Xa(this,void 0,void 0,function*(){return yield this.mtoonMaterialPlugin.loadMesh(e)})}getMaterialType(e){const t=this.mtoonMaterialPlugin.getMaterialType(e);return t??null}extendMaterialParams(e,t){return Xa(this,void 0,void 0,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(e,t),yield this.mtoonMaterialPlugin.extendMaterialParams(e,t)})}afterRoot(e){return Xa(this,void 0,void 0,function*(){yield this.metaPlugin.afterRoot(e),yield this.humanoidPlugin.afterRoot(e),yield this.expressionPlugin.afterRoot(e),yield this.lookAtPlugin.afterRoot(e),yield this.firstPersonPlugin.afterRoot(e),yield this.springBonePlugin.afterRoot(e),yield this.nodeConstraintPlugin.afterRoot(e),yield this.mtoonMaterialPlugin.afterRoot(e);const t=e.userData.vrmMeta,i=e.userData.vrmHumanoid;if(t&&i){const r=new s3({scene:e.scene,expressionManager:e.userData.vrmExpressionManager,firstPerson:e.userData.vrmFirstPerson,humanoid:i,lookAt:e.userData.vrmLookAt,meta:t,materials:e.userData.vrmMToonMaterials,springBoneManager:e.userData.vrmSpringBoneManager,nodeConstraintManager:e.userData.vrmNodeConstraintManager});e.userData.vrm=r}})}}class Q3{constructor(){at(this,"loader");const e=new $E;e.register(t=>new Z3(t)),this.loader=e}async load(e){return new Promise((t,i)=>{this.loader.load(e,r=>t(r.userData.vrm),r=>console.info("Loading model...",100*(r.loaded/r.total),"%"),i)})}}const vt=(n,e,t)=>Math.max(Math.min(n,t),e),ai=(n,e,t)=>(vt(n,e,t)-e)/(t-e),ws={Face:{eye:{l:1,r:1},mouth:{x:0,y:0,shape:{A:0,E:0,I:0,O:0,U:0}},head:{x:0,y:0,z:0,width:.3,height:.6,position:{x:.5,y:.5,z:0}},brow:0,pupil:{x:0,y:0}},Pose:{RightUpperArm:{x:0,y:0,z:-1.25},LeftUpperArm:{x:0,y:0,z:1.25},RightLowerArm:{x:0,y:0,z:0},LeftLowerArm:{x:0,y:0,z:0},LeftUpperLeg:{x:0,y:0,z:0},RightUpperLeg:{x:0,y:0,z:0},RightLowerLeg:{x:0,y:0,z:0},LeftLowerLeg:{x:0,y:0,z:0},LeftHand:{x:0,y:0,z:0},RightHand:{x:0,y:0,z:0},Spine:{x:0,y:0,z:0},Hips:{position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0}}},RightHand:{RightWrist:{x:-.13,y:-.07,z:-1.04},RightRingProximal:{x:0,y:0,z:-.13},RightRingIntermediate:{x:0,y:0,z:-.4},RightRingDistal:{x:0,y:0,z:-.04},RightIndexProximal:{x:0,y:0,z:-.24},RightIndexIntermediate:{x:0,y:0,z:-.25},RightIndexDistal:{x:0,y:0,z:-.06},RightMiddleProximal:{x:0,y:0,z:-.09},RightMiddleIntermediate:{x:0,y:0,z:-.44},RightMiddleDistal:{x:0,y:0,z:-.06},RightThumbProximal:{x:-.23,y:-.33,z:-.12},RightThumbIntermediate:{x:-.2,y:-.199,z:-.0139},RightThumbDistal:{x:-.2,y:.002,z:.15},RightLittleProximal:{x:0,y:0,z:-.09},RightLittleIntermediate:{x:0,y:0,z:-.225},RightLittleDistal:{x:0,y:0,z:-.1}},LeftHand:{LeftWrist:{x:-.13,y:-.07,z:-1.04},LeftRingProximal:{x:0,y:0,z:.13},LeftRingIntermediate:{x:0,y:0,z:.4},LeftRingDistal:{x:0,y:0,z:.049},LeftIndexProximal:{x:0,y:0,z:.24},LeftIndexIntermediate:{x:0,y:0,z:.25},LeftIndexDistal:{x:0,y:0,z:.06},LeftMiddleProximal:{x:0,y:0,z:.09},LeftMiddleIntermediate:{x:0,y:0,z:.44},LeftMiddleDistal:{x:0,y:0,z:.066},LeftThumbProximal:{x:-.23,y:.33,z:.12},LeftThumbIntermediate:{x:-.2,y:.25,z:.05},LeftThumbDistal:{x:-.2,y:.17,z:-.06},LeftLittleProximal:{x:0,y:0,z:.17},LeftLittleIntermediate:{x:0,y:0,z:.4},LeftLittleDistal:{x:0,y:0,z:.1}}},_t="Right",Zn="Left",rt=Math.PI,bs=Math.PI*2;class U{constructor(e,t,i){var r,s,o,a,l,c;if(Array.isArray(e)){this.x=(r=e[0])!==null&&r!==void 0?r:0,this.y=(s=e[1])!==null&&s!==void 0?s:0,this.z=(o=e[2])!==null&&o!==void 0?o:0;return}if(e&&typeof e=="object"){this.x=(a=e.x)!==null&&a!==void 0?a:0,this.y=(l=e.y)!==null&&l!==void 0?l:0,this.z=(c=e.z)!==null&&c!==void 0?c:0;return}this.x=e??0,this.y=t??0,this.z=i??0}negative(){return new U(-this.x,-this.y,-this.z)}add(e){return e instanceof U?new U(this.x+e.x,this.y+e.y,this.z+e.z):new U(this.x+e,this.y+e,this.z+e)}subtract(e){return e instanceof U?new U(this.x-e.x,this.y-e.y,this.z-e.z):new U(this.x-e,this.y-e,this.z-e)}multiply(e){return e instanceof U?new U(this.x*e.x,this.y*e.y,this.z*e.z):new U(this.x*e,this.y*e,this.z*e)}divide(e){return e instanceof U?new U(this.x/e.x,this.y/e.y,this.z/e.z):new U(this.x/e,this.y/e,this.z/e)}equals(e){return this.x==e.x&&this.y==e.y&&this.z==e.z}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}cross(e){return new U(this.y*e.z-this.z*e.y,this.z*e.x-this.x*e.z,this.x*e.y-this.y*e.x)}length(){return Math.sqrt(this.dot(this))}distance(e,t=3){return Math.sqrt(t===2?Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2):Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2)+Math.pow(this.z-e.z,2))}lerp(e,t){return e.subtract(this).multiply(t).add(this)}unit(){return this.divide(this.length())}min(){return Math.min(Math.min(this.x,this.y),this.z)}max(){return Math.max(Math.max(this.x,this.y),this.z)}toSphericalCoords(e={x:"x",y:"y",z:"z"}){return{theta:Math.atan2(this[e.y],this[e.x]),phi:Math.acos(this[e.z]/this.length())}}angleTo(e){return Math.acos(this.dot(e)/(this.length()*e.length()))}toArray(e){return[this.x,this.y,this.z].slice(0,e||3)}clone(){return new U(this.x,this.y,this.z)}init(e,t,i){return this.x=e,this.y=t,this.z=i,this}static negative(e,t=new U){return t.x=-e.x,t.y=-e.y,t.z=-e.z,t}static add(e,t,i=new U){return t instanceof U?(i.x=e.x+t.x,i.y=e.y+t.y,i.z=e.z+t.z):(i.x=e.x+t,i.y=e.y+t,i.z=e.z+t),i}static subtract(e,t,i=new U){return t instanceof U?(i.x=e.x-t.x,i.y=e.y-t.y,i.z=e.z-t.z):(i.x=e.x-t,i.y=e.y-t,i.z=e.z-t),i}static multiply(e,t,i=new U){return t instanceof U?(i.x=e.x*t.x,i.y=e.y*t.y,i.z=e.z*t.z):(i.x=e.x*t,i.y=e.y*t,i.z=e.z*t),i}static divide(e,t,i=new U){return t instanceof U?(i.x=e.x/t.x,i.y=e.y/t.y,i.z=e.z/t.z):(i.x=e.x/t,i.y=e.y/t,i.z=e.z/t),i}static cross(e,t,i=new U){return i.x=e.y*t.z-e.z*t.y,i.y=e.z*t.x-e.x*t.z,i.z=e.x*t.y-e.y*t.x,i}static unit(e,t){const i=e.length();return t.x=e.x/i,t.y=e.y/i,t.z=e.z/i,t}static fromAngles(e,t){return new U(Math.cos(e)*Math.cos(t),Math.sin(t),Math.sin(e)*Math.cos(t))}static randomDirection(){return U.fromAngles(Math.random()*bs,Math.asin(Math.random()*2-1))}static min(e,t){return new U(Math.min(e.x,t.x),Math.min(e.y,t.y),Math.min(e.z,t.z))}static max(e,t){return new U(Math.max(e.x,t.x),Math.max(e.y,t.y),Math.max(e.z,t.z))}static lerp(e,t,i){return t instanceof U?t.subtract(e).multiply(i).add(e):(t-e)*i+e}static fromArray(e){return Array.isArray(e)?new U(e[0],e[1],e[2]):new U(e.x,e.y,e.z)}static angleBetween(e,t){return e.angleTo(t)}static distance(e,t,i){return Math.sqrt(i===2?Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2):Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)+Math.pow(e.z-t.z,2))}static toDegrees(e){return e*(180/rt)}static normalizeAngle(e){let t=e%bs;return t=t>rt?t-bs:t<-rt?bs+t:t,t/rt}static normalizeRadians(e){return e>=rt/2&&(e-=bs),e<=-rt/2&&(e+=bs,e=rt-e),e/rt}static find2DAngle(e,t,i,r){const s=r-t,o=i-e;return Math.atan2(s,o)}static findRotation(e,t,i=!0){return i?new U(U.normalizeRadians(U.find2DAngle(e.z,e.x,t.z,t.x)),U.normalizeRadians(U.find2DAngle(e.z,e.y,t.z,t.y)),U.normalizeRadians(U.find2DAngle(e.x,e.y,t.x,t.y))):new U(U.find2DAngle(e.z,e.x,t.z,t.x),U.find2DAngle(e.z,e.y,t.z,t.y),U.find2DAngle(e.x,e.y,t.x,t.y))}static rollPitchYaw(e,t,i){if(!i)return new U(U.normalizeAngle(U.find2DAngle(e.z,e.y,t.z,t.y)),U.normalizeAngle(U.find2DAngle(e.z,e.x,t.z,t.x)),U.normalizeAngle(U.find2DAngle(e.x,e.y,t.x,t.y)));const r=t.subtract(e),s=i.subtract(e),a=r.cross(s).unit(),l=r.unit(),c=a.cross(l),u=Math.asin(a.x)||0,h=Math.atan2(-a.y,a.z)||0,d=Math.atan2(-c.x,l.x)||0;return new U(U.normalizeAngle(h),U.normalizeAngle(u),U.normalizeAngle(d))}static angleBetween3DCoords(e,t,i){e instanceof U||(e=new U(e),t=new U(t),i=new U(i));const r=e.subtract(t),s=i.subtract(t),o=r.unit(),a=s.unit(),l=o.dot(a),c=Math.acos(l);return U.normalizeRadians(c)}static getRelativeSphericalCoords(e,t,i,r){e instanceof U||(e=new U(e),t=new U(t),i=new U(i));const s=t.subtract(e),o=i.subtract(t),a=s.unit(),l=o.unit(),{theta:c,phi:u}=a.toSphericalCoords(r),{theta:h,phi:d}=l.toSphericalCoords(r),f=c-h,g=u-d;return{theta:U.normalizeAngle(f),phi:U.normalizeAngle(g)}}static getSphericalCoords(e,t,i={x:"x",y:"y",z:"z"}){e instanceof U||(e=new U(e),t=new U(t));const s=t.subtract(e).unit(),{theta:o,phi:a}=s.toSphericalCoords(i);return{theta:U.normalizeAngle(-o),phi:U.normalizeAngle(rt/2-a)}}}const P_=n=>{const e={r:U.findRotation(n[11],n[13]),l:U.findRotation(n[12],n[14])};e.r.y=U.angleBetween3DCoords(n[12],n[11],n[13]),e.l.y=U.angleBetween3DCoords(n[11],n[12],n[14]);const t={r:U.findRotation(n[13],n[15]),l:U.findRotation(n[14],n[16])};t.r.y=U.angleBetween3DCoords(n[11],n[13],n[15]),t.l.y=U.angleBetween3DCoords(n[12],n[14],n[16]),t.r.z=vt(t.r.z,-2.14,0),t.l.z=vt(t.l.z,-2.14,0);const i={r:U.findRotation(U.fromArray(n[15]),U.lerp(U.fromArray(n[17]),U.fromArray(n[19]),.5)),l:U.findRotation(U.fromArray(n[16]),U.lerp(U.fromArray(n[18]),U.fromArray(n[20]),.5))},r=fm(e.r,t.r,i.r,_t),s=fm(e.l,t.l,i.l,Zn);return{UpperArm:{r:r.UpperArm,l:s.UpperArm},LowerArm:{r:r.LowerArm,l:s.LowerArm},Hand:{r:r.Hand,l:s.Hand},Unscaled:{UpperArm:e,LowerArm:t,Hand:i}}},fm=(n,e,t,i=_t)=>{const r=i===_t?1:-1;return n.z*=-2.3*r,n.y*=rt*r,n.y-=Math.max(e.x),n.y-=-r*Math.max(e.z,0),n.x-=.3*r,e.z*=-2.14*r,e.y*=2.14*r,e.x*=2.14*r,n.x=vt(n.x,-.5,rt),e.x=vt(e.x,-.3,.3),t.y=vt(t.z*2,-.6,.6),t.z=t.z*-2.3*r,{UpperArm:n,LowerArm:e,Hand:t}},C_=(n,e)=>{const t=U.fromArray(e[23]),i=U.fromArray(e[24]),r=U.fromArray(e[11]),s=U.fromArray(e[12]),o=t.lerp(i,1),a=r.lerp(s,1),l=o.distance(a),c={position:{x:vt(o.x-.4,-1,1),y:0,z:vt(l-1,-2,0)}};c.worldPosition={x:c.position.x,y:0,z:c.position.z*Math.pow(c.position.z*-2,2)},c.worldPosition.x*=c.worldPosition.z,c.rotation=U.rollPitchYaw(n[23],n[24]),c.rotation.y>.5&&(c.rotation.y-=2),c.rotation.y+=.5,c.rotation.z>0&&(c.rotation.z=1-c.rotation.z),c.rotation.z<0&&(c.rotation.z=-1-c.rotation.z);const u=ai(Math.abs(c.rotation.y),.2,.4);c.rotation.z*=1-u,c.rotation.x=0;const h=U.rollPitchYaw(n[11],n[12]);h.y>.5&&(h.y-=2),h.y+=.5,h.z>0&&(h.z=1-h.z),h.z<0&&(h.z=-1-h.z);const d=ai(Math.abs(h.y),.2,.4);return h.z*=1-d,h.x=0,J3(c,h)},J3=(n,e)=>(n.rotation&&(n.rotation.x*=Math.PI,n.rotation.y*=Math.PI,n.rotation.z*=Math.PI),e.x*=rt,e.y*=rt,e.z*=rt,{Hips:n,Spine:e});class $o{constructor(e,t,i,r){var s,o,a,l;if(e&&typeof e=="object"){this.x=(s=e.x)!==null&&s!==void 0?s:0,this.y=(o=e.y)!==null&&o!==void 0?o:0,this.z=(a=e.z)!==null&&a!==void 0?a:0,this.rotationOrder=(l=e.rotationOrder)!==null&&l!==void 0?l:"XYZ";return}this.x=e??0,this.y=t??0,this.z=i??0,this.rotationOrder=r??"XYZ"}multiply(e){return new $o(this.x*e,this.y*e,this.z*e,this.rotationOrder)}}const ew={upperLeg:{z:.1}},I_=n=>{const e=U.getSphericalCoords(n[23],n[25],{x:"y",y:"z",z:"x"}),t=U.getSphericalCoords(n[24],n[26],{x:"y",y:"z",z:"x"}),i=U.getRelativeSphericalCoords(n[23],n[25],n[27],{x:"y",y:"z",z:"x"}),r=U.getRelativeSphericalCoords(n[24],n[26],n[28],{x:"y",y:"z",z:"x"}),s=U.findRotation(n[23],n[24]),o={r:new U({x:e.theta,y:i.phi,z:e.phi-s.z}),l:new U({x:t.theta,y:r.phi,z:t.phi-s.z})},a={r:new U({x:-Math.abs(i.theta),y:0,z:0}),l:new U({x:-Math.abs(r.theta),y:0,z:0})},l=pm(o.r,a.r,_t),c=pm(o.l,a.l,Zn);return{UpperLeg:{r:l.UpperLeg,l:c.UpperLeg},LowerLeg:{r:l.LowerLeg,l:c.LowerLeg},Unscaled:{UpperLeg:o,LowerLeg:a}}},pm=(n,e,t=_t)=>{const i=t===_t?1:-1,r=new $o({x:vt(n.x,0,.5)*rt,y:vt(n.y,-.25,.25)*rt,z:vt(n.z,-.5,.5)*rt+i*ew.upperLeg.z,rotationOrder:"XYZ"}),s=new $o({x:e.x*rt,y:e.y*rt,z:e.z*rt});return{UpperLeg:r,LowerLeg:s}};class Zl{static solve(e,t,{runtime:i="mediapipe",video:r=null,imageSize:s=null,enableLegs:o=!0}={}){var a,l,c,u;if(!e&&!t){console.error("Need both World Pose and Pose Landmarks");return}if(r){const E=typeof r=="string"?document.querySelector(r):r;s={width:E.videoWidth,height:E.videoHeight}}if(i==="tfjs"&&s){for(const E of e)E.visibility=E.score;for(const E of t)E.x/=s.width,E.y/=s.height,E.z=0,E.visibility=E.score}const h=P_(e),d=C_(e,t),f=o?I_(e):null,g=e[15].y>.1||((a=e[15].visibility)!==null&&a!==void 0?a:0)<.23||.995<t[15].y,_=e[16].y>.1||((l=e[16].visibility)!==null&&l!==void 0?l:0)<.23||.995<t[16].y,m=e[23].y>.1||((c=e[23].visibility)!==null&&c!==void 0?c:0)<.63||d.Hips.position.z>-.4,p=e[24].y>.1||((u=e[24].visibility)!==null&&u!==void 0?u:0)<.63||d.Hips.position.z>-.4;return h.UpperArm.l=h.UpperArm.l.multiply(_?0:1),h.UpperArm.l.z=_?ws.Pose.LeftUpperArm.z:h.UpperArm.l.z,h.UpperArm.r=h.UpperArm.r.multiply(g?0:1),h.UpperArm.r.z=g?ws.Pose.RightUpperArm.z:h.UpperArm.r.z,h.LowerArm.l=h.LowerArm.l.multiply(_?0:1),h.LowerArm.r=h.LowerArm.r.multiply(g?0:1),h.Hand.l=h.Hand.l.multiply(_?0:1),h.Hand.r=h.Hand.r.multiply(g?0:1),f&&(f.UpperLeg.l=f.UpperLeg.l.multiply(p?0:1),f.UpperLeg.r=f.UpperLeg.r.multiply(m?0:1),f.LowerLeg.l=f.LowerLeg.l.multiply(p?0:1),f.LowerLeg.r=f.LowerLeg.r.multiply(m?0:1)),{RightUpperArm:h.UpperArm.r,RightLowerArm:h.LowerArm.r,LeftUpperArm:h.UpperArm.l,LeftLowerArm:h.LowerArm.l,RightHand:h.Hand.r,LeftHand:h.Hand.l,RightUpperLeg:f?f.UpperLeg.r:ws.Pose.RightUpperLeg,RightLowerLeg:f?f.LowerLeg.r:ws.Pose.RightLowerLeg,LeftUpperLeg:f?f.UpperLeg.l:ws.Pose.LeftUpperLeg,LeftLowerLeg:f?f.LowerLeg.l:ws.Pose.LeftLowerLeg,Hips:d.Hips,Spine:d.Spine}}}Zl.calcArms=P_;Zl.calcHips=C_;Zl.calcLegs=I_;class tw{static solve(e,t=_t){if(!e){console.error("Need Hand Landmarks");return}const i=[new U(e[0]),new U(e[t===_t?17:5]),new U(e[t===_t?5:17])],r=U.rollPitchYaw(i[0],i[1],i[2]);r.y=r.z,r.y-=.4;let s={};return s[t+"Wrist"]={x:r.x,y:r.y,z:r.z},s[t+"RingProximal"]={x:0,y:0,z:U.angleBetween3DCoords(e[0],e[13],e[14])},s[t+"RingIntermediate"]={x:0,y:0,z:U.angleBetween3DCoords(e[13],e[14],e[15])},s[t+"RingDistal"]={x:0,y:0,z:U.angleBetween3DCoords(e[14],e[15],e[16])},s[t+"IndexProximal"]={x:0,y:0,z:U.angleBetween3DCoords(e[0],e[5],e[6])},s[t+"IndexIntermediate"]={x:0,y:0,z:U.angleBetween3DCoords(e[5],e[6],e[7])},s[t+"IndexDistal"]={x:0,y:0,z:U.angleBetween3DCoords(e[6],e[7],e[8])},s[t+"MiddleProximal"]={x:0,y:0,z:U.angleBetween3DCoords(e[0],e[9],e[10])},s[t+"MiddleIntermediate"]={x:0,y:0,z:U.angleBetween3DCoords(e[9],e[10],e[11])},s[t+"MiddleDistal"]={x:0,y:0,z:U.angleBetween3DCoords(e[10],e[11],e[12])},s[t+"ThumbProximal"]={x:0,y:0,z:U.angleBetween3DCoords(e[0],e[1],e[2])},s[t+"ThumbIntermediate"]={x:0,y:0,z:U.angleBetween3DCoords(e[1],e[2],e[3])},s[t+"ThumbDistal"]={x:0,y:0,z:U.angleBetween3DCoords(e[2],e[3],e[4])},s[t+"LittleProximal"]={x:0,y:0,z:U.angleBetween3DCoords(e[0],e[17],e[18])},s[t+"LittleIntermediate"]={x:0,y:0,z:U.angleBetween3DCoords(e[17],e[18],e[19])},s[t+"LittleDistal"]={x:0,y:0,z:U.angleBetween3DCoords(e[18],e[19],e[20])},s=nw(s,t),s}}const nw=(n,e=_t)=>{const t=e===_t?1:-1,i=["Ring","Index","Little","Thumb","Middle"],r=["Proximal","Intermediate","Distal"];return n[e+"Wrist"].x=vt(n[e+"Wrist"].x*2*t,-.3,.3),n[e+"Wrist"].y=vt(n[e+"Wrist"].y*2.3,e===_t?-1.2:-.6,e===_t?.6:1.6),n[e+"Wrist"].z=n[e+"Wrist"].z*-2.3*t,i.forEach(s=>{r.forEach(o=>{const a=n[e+s+o];if(s==="Thumb"){const l={x:o==="Proximal"?2.2:0,y:o==="Proximal"?2.2:o==="Intermediate"?.7:1,z:.5},c={x:o==="Proximal"?1.2:-.2,y:o==="Proximal"?1.1*t:.1*t,z:.2*t},u={x:0,y:0,z:0};o==="Proximal"?(u.z=vt(c.z+a.z*-rt*l.z*t,e===_t?-.6:-.3,e===_t?.3:.6),u.x=vt(c.x+a.z*-rt*l.x,-.6,.3),u.y=vt(c.y+a.z*-rt*l.y*t,e===_t?-1:-.3,e===_t?.3:1)):(u.z=vt(c.z+a.z*-rt*l.z*t,-2,2),u.x=vt(c.x+a.z*-rt*l.x,-2,2),u.y=vt(c.y+a.z*-rt*l.y*t,-2,2)),a.x=u.x,a.y=u.y,a.z=u.z}else a.z=vt(a.z*-rt*t,e===_t?-rt:0,e===_t?0:rt)})}),n},iw=n=>{const e=new U(n[21]),t=new U(n[251]),i=new U(n[397]),r=new U(n[172]),s=i.lerp(r,.5);return{vector:[e,t,s],points:[e,t,i,r]}},rw=n=>{const e=iw(n).vector,t=U.rollPitchYaw(e[0],e[1],e[2]),i=e[0].lerp(e[1],.5),r=e[0].distance(e[1]),s=i.distance(e[2]);return t.x*=-1,t.z*=-1,{y:t.y*rt,x:t.x*rt,z:t.z*rt,width:r,height:s,position:i.lerp(e[2],.5),normalized:{y:t.y,x:t.x,z:t.z},degrees:{y:t.y*180,x:t.x*180,z:t.z*180}}},No={eye:{[Zn]:[130,133,160,159,158,144,145,153],[_t]:[263,362,387,386,385,373,374,380]},brow:{[Zn]:[35,244,63,105,66,229,230,231],[_t]:[265,464,293,334,296,449,450,451]},pupil:{[Zn]:[468,469,470,471,472],[_t]:[473,474,475,476,477]}},mm=(n,e=Zn,{high:t=.85,low:i=.55}={})=>{const r=No.eye[e],s=D_(n[r[0]],n[r[1]],n[r[2]],n[r[3]],n[r[4]],n[r[5]],n[r[6]],n[r[7]]),a=vt(s/.285,0,2);return{norm:ai(a,i,t),raw:a}},D_=(n,e,t,i,r,s,o,a)=>{n=new U(n),e=new U(e),t=new U(t),i=new U(i),r=new U(r),s=new U(s),o=new U(o),a=new U(a);const l=n.distance(e,2),c=t.distance(s,2),u=i.distance(o,2),h=r.distance(a,2);return(c+u+h)/3/l},gm=(n,e=Zn)=>{const t=new U(n[No.eye[e][0]]),i=new U(n[No.eye[e][1]]),r=t.distance(i,2),s=t.lerp(i,.5),o=new U(n[No.pupil[e][0]]),a=s.x-o.x,l=s.y-r*.075-o.y;let c=a/(r/2),u=l/(r/4);return c*=4,u*=4,{x:c,y:u}},U_=(n,e,{enableWink:t=!0,maxRot:i=.5}={})=>{n.r=vt(n.r,0,1),n.l=vt(n.l,0,1);const r=Math.abs(n.l-n.r),s=t?.8:1.2,o=n.l<.3&&n.r<.3,a=n.l>.6&&n.r>.6;return e>i?{l:n.r,r:n.r}:e<-i?{l:n.l,r:n.l}:{l:r>=s&&!o&&!a?n.l:n.r>n.l?U.lerp(n.r,n.l,.95):U.lerp(n.r,n.l,.05),r:r>=s&&!o&&!a?n.r:n.r>n.l?U.lerp(n.r,n.l,.95):U.lerp(n.r,n.l,.05)}},sw=(n,{high:e=.85,low:t=.55}={})=>{if(n.length!==478)return{l:1,r:1};const i=mm(n,Zn,{high:e,low:t}),r=mm(n,_t,{high:e,low:t});return{l:i.norm||0,r:r.norm||0}},ow=n=>{if(n.length!==478)return{x:0,y:0};{const e=gm(n,Zn),t=gm(n,_t);return{x:(e.x+t.x)*.5||0,y:(e.y+t.y)*.5||0}}},_m=(n,e=Zn)=>{const t=No.brow[e],i=D_(n[t[0]],n[t[1]],n[t[2]],n[t[3]],n[t[4]],n[t[5]],n[t[6]],n[t[7]]),r=1.15,s=.125,o=.07,a=i/r-1;return(vt(a,o,s)-o)/(s-o)},aw=n=>{if(n.length!==478)return 0;{const e=_m(n,Zn),t=_m(n,_t);return(e+t)/2||0}},lw=n=>{const e=new U(n[133]),t=new U(n[362]),i=new U(n[130]),r=new U(n[263]),s=e.distance(t),o=i.distance(r),a=new U(n[13]),l=new U(n[14]),c=new U(n[61]),u=new U(n[291]),h=a.distance(l),d=c.distance(u);let f=h/s,g=d/o;f=ai(f,.15,.7),g=ai(g,.45,.9),g=(g-.3)*2;const _=g,m=ai(h/s,.17,.5),p=vt(ai(_,0,1)*2*ai(m,.2,.7),0,1),E=m*.4+m*(1-p)*.6,v=m*ai(1-p,0,.3)*.1,M=ai(v,.2,1)*(1-p)*.3,T=(1-p)*ai(m,.3,1)*.4;return{x:g||0,y:f||0,shape:{A:E||0,E:M||0,I:p||0,O:T||0,U:v||0}}};class N_{static solve(e,{runtime:t="tfjs",video:i=null,imageSize:r=null,smoothBlink:s=!1,blinkSettings:o=[]}={}){if(!e){console.error("Need Face Landmarks");return}if(i){const d=typeof i=="string"?document.querySelector(i):i;r={width:d.videoWidth,height:d.videoHeight}}if(t==="mediapipe"&&r)for(const d of e)d.x*=r.width,d.y*=r.height,d.z*=r.width;const a=rw(e),l=lw(e);o=o.length>0?o:t==="tfjs"?[.55,.85]:[.35,.5];let c=sw(e,{high:o[1],low:o[0]});s&&(c=U_(c,a.y));const u=ow(e),h=aw(e);return{head:a,eye:c,brow:h,pupil:u,mouth:l}}}N_.stabilizeBlink=U_;class cw{constructor(){at(this,"threshold",50)}getScore(e,t){var i;return((i=e.faceBlendshapes[0])==null?void 0:i.categories.filter(r=>r.categoryName===t)[0].score)??0}getEye(e){const t=this.getScore(e,"eyeLookInRight"),i=this.getScore(e,"eyeLookInLeft"),r=this.getScore(e,"eyeLookOutRight"),s=this.getScore(e,"eyeLookOutLeft"),o=this.getScore(e,"eyeLookUpRight"),a=this.getScore(e,"eyeLookUpLeft"),l=this.getScore(e,"eyeLookDownRight"),c=this.getScore(e,"eyeLookDownLeft");return{left:-this.threshold*((t+s)/2),right:this.threshold*((r+i)/2),top:-this.threshold*((o+a)/2),bottom:this.threshold*((l+c)/2)}}}let Rs;class uw{getQuaternionFromEuler(e){if(!e)return;let t=new Kr(e.x,e.y,e.z);return e instanceof $o&&(t=new Kr(e.x,e.y,e.z,e.rotationOrder)),new ke().setFromEuler(t)}getRotationByQuaternion(e){return[(e==null?void 0:e.x)??0,(e==null?void 0:e.y)??0,(e==null?void 0:e.z)??0,(e==null?void 0:e.w)??0]}getPose(e,t){var r;const i={rotation:this.getRotationByQuaternion(this.getQuaternionFromEuler(e))};if(t){if(Rs&&((r=Rs[t.name])==null?void 0:r.rotation.length)>0)for(let s=0;s<4;s++)Math.abs(Rs[t.name].rotation[s]-i.rotation[s])<t.threshold&&(i.rotation[s]=Rs[t.name].rotation[s]);Rs={...Rs,[t.name]:i}}return i}}class hw{constructor(e,t,i,r){at(this,"faceLandmarkerResult");at(this,"faceRig");at(this,"poseRig");at(this,"rightHandRig");at(this,"leftHandRig");at(this,"calcEye");at(this,"calcHumanoid");this.faceLandmarkerResult=t,this.faceRig=this.getFaceRig(t,e),this.poseRig=this.getPoseRig(i,e);const s=this.getHandRigs(r);this.rightHandRig=s.find(o=>(o==null?void 0:o.RightWrist)!==void 0),this.leftHandRig=s.find(o=>(o==null?void 0:o.LeftWrist)!==void 0),this.calcEye=new cw,this.calcHumanoid=new uw}getFaceRig(e,t){if(e.faceLandmarks[0])return N_.solve(e.faceLandmarks[0],{runtime:"mediapipe",video:t,smoothBlink:!0,blinkSettings:[.25,.75]})}getPoseRig(e,t){if(!(!e.worldLandmarks[0]||!e.landmarks[0]))return Zl.solve(e.worldLandmarks[0].map(i=>({...i,visibility:1})),e.landmarks[0],{runtime:"mediapipe",video:t,enableLegs:!0})}getHandRigs(e){return e.handedness.map((t,i)=>tw.solve(e.landmarks[i],t[0].categoryName))}getExpressions(){return this.faceRig?[{name:yi.BlinkRight,weight:1-this.faceRig.eye.r},{name:yi.BlinkLeft,weight:1-this.faceRig.eye.l},{name:yi.Aa,weight:this.faceRig.mouth.shape.A},{name:yi.Ih,weight:this.faceRig.mouth.shape.I},{name:yi.Ou,weight:this.faceRig.mouth.shape.U},{name:yi.Ee,weight:this.faceRig.mouth.shape.E},{name:yi.Ou,weight:this.faceRig.mouth.shape.O}]:[]}getLookAt(){const{left:e,right:t,top:i,bottom:r}=this.calcEye.getEye(this.faceLandmarkerResult);return{yaw:e+t,pitch:i+r}}getHumanoid(){var e,t,i,r,s,o,a,l,c,u,h,d,f,g,_,m,p,E,v,M,T,R,A,F,x,b,z,G,Q,I;return this.faceRig?this.poseRig?{[Je.Head]:this.calcHumanoid.getPose(this.faceRig.head.normalized),[Je.Spine]:this.calcHumanoid.getPose(this.poseRig.Spine,{threshold:.05,name:"Spine"}),[Je.LeftUpperArm]:this.calcHumanoid.getPose(this.poseRig.LeftUpperArm,{threshold:.01,name:"LeftUpperArm"}),[Je.LeftLowerArm]:this.calcHumanoid.getPose(this.poseRig.LeftLowerArm,{threshold:.01,name:"LeftLowerArm"}),[Je.RightUpperArm]:this.calcHumanoid.getPose(this.poseRig.RightUpperArm,{threshold:.01,name:"RightUpperArm"}),[Je.RightLowerArm]:this.calcHumanoid.getPose(this.poseRig.RightLowerArm,{threshold:.01,name:"RightLowerArm"}),[Je.RightHand]:this.calcHumanoid.getPose(this.poseRig.RightHand),[Je.RightLittleDistal]:this.calcHumanoid.getPose((e=this.rightHandRig)==null?void 0:e.RightLittleDistal),[Je.RightLittleIntermediate]:this.calcHumanoid.getPose((t=this.rightHandRig)==null?void 0:t.RightLittleIntermediate),[Je.RightLittleProximal]:this.calcHumanoid.getPose((i=this.rightHandRig)==null?void 0:i.RightLittleProximal),[Je.RightRingDistal]:this.calcHumanoid.getPose((r=this.rightHandRig)==null?void 0:r.RightRingDistal),[Je.RightRingIntermediate]:this.calcHumanoid.getPose((s=this.rightHandRig)==null?void 0:s.RightRingIntermediate),[Je.RightRingProximal]:this.calcHumanoid.getPose((o=this.rightHandRig)==null?void 0:o.RightRingProximal),[Je.RightMiddleDistal]:this.calcHumanoid.getPose((a=this.rightHandRig)==null?void 0:a.RightMiddleDistal),[Je.RightMiddleIntermediate]:this.calcHumanoid.getPose((l=this.rightHandRig)==null?void 0:l.RightMiddleIntermediate),[Je.RightMiddleProximal]:this.calcHumanoid.getPose((c=this.rightHandRig)==null?void 0:c.RightMiddleProximal),[Je.RightIndexDistal]:this.calcHumanoid.getPose((u=this.rightHandRig)==null?void 0:u.RightIndexDistal),[Je.RightIndexIntermediate]:this.calcHumanoid.getPose((h=this.rightHandRig)==null?void 0:h.RightIndexIntermediate),[Je.RightIndexProximal]:this.calcHumanoid.getPose((d=this.rightHandRig)==null?void 0:d.RightIndexProximal),[Je.RightThumbDistal]:this.calcHumanoid.getPose((f=this.rightHandRig)==null?void 0:f.RightThumbDistal),[Je.RightThumbMetacarpal]:this.calcHumanoid.getPose((g=this.rightHandRig)==null?void 0:g.RightThumbIntermediate),[Je.RightThumbProximal]:this.calcHumanoid.getPose((_=this.rightHandRig)==null?void 0:_.RightThumbProximal),[Je.LeftHand]:this.calcHumanoid.getPose(this.poseRig.LeftHand),[Je.LeftLittleDistal]:this.calcHumanoid.getPose((m=this.leftHandRig)==null?void 0:m.LeftLittleDistal),[Je.LeftLittleIntermediate]:this.calcHumanoid.getPose((p=this.leftHandRig)==null?void 0:p.LeftLittleIntermediate),[Je.LeftLittleProximal]:this.calcHumanoid.getPose((E=this.leftHandRig)==null?void 0:E.LeftLittleProximal),[Je.LeftRingDistal]:this.calcHumanoid.getPose((v=this.leftHandRig)==null?void 0:v.LeftRingDistal),[Je.LeftRingIntermediate]:this.calcHumanoid.getPose((M=this.leftHandRig)==null?void 0:M.LeftRingIntermediate),[Je.LeftRingProximal]:this.calcHumanoid.getPose((T=this.leftHandRig)==null?void 0:T.LeftRingProximal),[Je.LeftMiddleDistal]:this.calcHumanoid.getPose((R=this.leftHandRig)==null?void 0:R.LeftMiddleDistal),[Je.LeftMiddleIntermediate]:this.calcHumanoid.getPose((A=this.leftHandRig)==null?void 0:A.LeftMiddleIntermediate),[Je.LeftMiddleProximal]:this.calcHumanoid.getPose((F=this.leftHandRig)==null?void 0:F.LeftMiddleProximal),[Je.LeftIndexDistal]:this.calcHumanoid.getPose((x=this.leftHandRig)==null?void 0:x.LeftIndexDistal),[Je.LeftIndexIntermediate]:this.calcHumanoid.getPose((b=this.leftHandRig)==null?void 0:b.LeftIndexIntermediate),[Je.LeftIndexProximal]:this.calcHumanoid.getPose((z=this.leftHandRig)==null?void 0:z.LeftIndexProximal),[Je.LeftThumbDistal]:this.calcHumanoid.getPose((G=this.leftHandRig)==null?void 0:G.LeftThumbDistal),[Je.LeftThumbMetacarpal]:this.calcHumanoid.getPose((Q=this.leftHandRig)==null?void 0:Q.LeftThumbIntermediate),[Je.LeftThumbProximal]:this.calcHumanoid.getPose((I=this.leftHandRig)==null?void 0:I.LeftThumbProximal)}:{}:{}}}class Xh{constructor(){at(this,"scene");at(this,"camera");at(this,"renderer");at(this,"vrm");at(this,"clock");at(this,"faceLandmarker");at(this,"poseLandmarker");at(this,"handLandmarker");this.scene=new lE,this.camera=new mn(50,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,1.45,-.8),this.camera.rotation.set(0,Math.PI,0),this.renderer=new Qm,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(8372223,1);const e=new KE(this.camera,this.renderer.domElement);e.target.set(0,1.3,0),e.screenSpacePanning=!0,e.update();const t=new og(16777215);t.position.set(-1,1,-1).normalize(),this.scene.add(t);const i=new jE(10,10);this.scene.add(i),i.visible=!0,this.clock=new OE}static async create(e){const i=await new Q3().load(e),r=new Xh;r.scene.add(i.scene),r.vrm=i;const s=await Gh.build();return r.faceLandmarker=await s.getFaceLandmarker(),r.poseLandmarker=await s.getPoseLandmarker(),r.handLandmarker=await s.getHandLandmarker(),r}async update(e,t){var r;if(!this.faceLandmarker||!this.poseLandmarker||!this.handLandmarker||!this.vrm)return;const i=new hw(e,this.faceLandmarker.detectForVideo(e,t),this.poseLandmarker.detectForVideo(e,t),this.handLandmarker.detectForVideo(e,t));if(i.getExpressions().forEach(s=>{var o,a;(a=(o=this.vrm)==null?void 0:o.expressionManager)==null||a.setValue(s.name,s.weight)}),(r=this.vrm.expressionManager)==null||r.update(),this.vrm.lookAt){const{yaw:s,pitch:o}=i.getLookAt();this.vrm.lookAt.yaw=s,this.vrm.lookAt.pitch=o,this.vrm.lookAt.update(this.clock.getDelta())}this.vrm.humanoid.setNormalizedPose(i.getHumanoid()),this.vrm.humanoid.update()}render(){this.renderer.render(this.scene,this.camera)}getDomElement(){return this.renderer.domElement}}async function dw(){try{const n=await Xh.create("./models/test.vrm"),e=new V_(n),t=e.getStartButton();t.onclick=async()=>{await e.start()}}catch(n){console.error(n)}}window.onload=dw;

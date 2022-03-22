"use strict";(self["webpackChunkhw6"]=self["webpackChunkhw6"]||[]).push([[616],{6616:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z}});var s=a(3396),l=a(9242),r=a(7139);const d={class:"container"},i=(0,s._)("h2",null,"購物車",-1),o={class:"text-end"},n=["disabled"],c={class:"table align-middle"},u=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th"),(0,s._)("th",null,"品名"),(0,s._)("th",{style:{width:"150px"}},"數量/單位"),(0,s._)("th",null,"單價")])],-1),m=["onClick"],p={class:"fas fa-spinner fa-pulse"},h=(0,s.Uk)("x "),f={key:0,class:"text-success"},b={class:"input-group input-group-sm"},_={class:"input-group mb-3"},g=["onUpdate:modelValue","onBlur","disabled"],v={class:"input-group-text",id:"basic-addon2"},x={class:"text-end"},y=(0,s._)("small",{class:"text-success"},"折扣價：",-1),D=(0,s._)("td",{colspan:"3",class:"text-end"},"總計",-1),k={class:"text-end"},C={key:0},w=(0,s._)("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),V={class:"text-end text-success"},q={class:"my-5 row justify-content-center"},U={class:"mb-3"},W=(0,s._)("label",{for:"email",class:"form-label"},"Email",-1),I={class:"mb-3"},L=(0,s._)("label",{for:"name",class:"form-label"},"收件人姓名",-1),$={class:"mb-3"},z=(0,s._)("label",{for:"tel",class:"form-label"},"收件人電話",-1),A={class:"mb-3"},F=(0,s._)("label",{for:"address",class:"form-label"},"收件人地址",-1),O={class:"mb-3"},j=(0,s._)("label",{for:"message",class:"form-label"},"留言",-1),B={class:"text-end"},E=["disabled"];function S(e,t,a,S,H,K){const Y=(0,s.up)("v-Field"),Z=(0,s.up)("error-message"),G=(0,s.up)("v-field"),J=(0,s.up)("v-form");return(0,s.wg)(),(0,s.iD)("div",d,[i,(0,s._)("div",o,[(0,s._)("button",{class:"btn btn-outline-danger",type:"button",onClick:t[0]||(t[0]=(...e)=>K.deleteAllCart&&K.deleteAllCart(...e)),disabled:0===H.cartData.carts.length}," 清空購物車 ",8,n)]),(0,s._)("table",c,[u,(0,s._)("tbody",null,[H.cartData.carts?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:0},(0,s.Ko)(H.cartData.carts,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.id},[(0,s._)("td",null,[(0,s._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:t=>K.deleteCart(e.id)},[(0,s.wy)((0,s._)("i",p,null,512),[[l.F8,H.isLoadingID===e.id]]),h],8,m)]),(0,s._)("td",null,[(0,s.Uk)((0,r.zw)(e.product.title)+" ",1),e.coupon?((0,s.wg)(),(0,s.iD)("div",f,"已套用優惠券")):(0,s.kq)("",!0)]),(0,s._)("td",null,[(0,s._)("div",b,[(0,s._)("div",_,[(0,s.wy)((0,s._)("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":t=>e.qty=t,onBlur:t=>K.updateCart(e),disabled:H.isLoadingID===e.id},null,40,g),[[l.nr,e.qty,void 0,{number:!0}]]),(0,s._)("span",v,(0,r.zw)(e.product.unit),1)])])]),(0,s._)("td",x,[y,(0,s.Uk)((0,r.zw)(e.product.price),1)])])))),128)):(0,s.kq)("",!0)]),(0,s._)("tfoot",null,[(0,s._)("tr",null,[D,(0,s._)("td",k,(0,r.zw)(H.cartData.total),1)]),H.cartData.final_total!==H.cartData.total?((0,s.wg)(),(0,s.iD)("tr",C,[w,(0,s._)("td",V,(0,r.zw)(H.cartData.final_total),1)])):(0,s.kq)("",!0)])]),(0,s._)("div",q,[(0,s.Wm)(J,{ref:"form",class:"col-md-6",onSubmit:K.createOrder},{default:(0,s.w5)((({errors:e})=>[(0,s._)("div",U,[W,(0,s.Wm)(Y,{id:"email",name:"email",type:"email",class:(0,r.C_)(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:H.form.user.email,"onUpdate:modelValue":t[1]||(t[1]=e=>H.form.user.email=e)},null,8,["class","modelValue"]),(0,s.Wm)(Z,{name:"email",class:"invalid-feedback"})]),(0,s._)("div",I,[L,(0,s.Wm)(G,{id:"name",name:"姓名",type:"text",class:(0,r.C_)(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:H.form.user.name,"onUpdate:modelValue":t[2]||(t[2]=e=>H.form.user.name=e)},null,8,["class","modelValue"]),(0,s.Wm)(Z,{name:"姓名",class:"invalid-feedback"})]),(0,s._)("div",$,[z,(0,s.Wm)(G,{id:"tel",name:"電話",type:"text",class:(0,r.C_)(["form-control",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:H.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=e=>H.form.user.tel=e)},null,8,["class","modelValue"]),(0,s.Wm)(Z,{name:"電話",class:"invalid-feedback"})]),(0,s._)("div",A,[F,(0,s.Wm)(G,{id:"address",name:"地址",type:"text",class:(0,r.C_)(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:H.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=e=>H.form.user.address=e)},null,8,["class","modelValue"]),(0,s.Wm)(Z,{name:"地址",class:"invalid-feedback"})]),(0,s._)("div",O,[j,(0,s.wy)((0,s._)("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[5]||(t[5]=e=>H.form.message=e)},null,512),[[l.nr,H.form.message]])]),(0,s._)("div",B,[(0,s._)("button",{type:"submit",class:"btn btn-danger",disabled:Object.keys(e).length>0||0===H.cartData.carts.length},"送出訂單",8,E)])])),_:1},8,["onSubmit"])])])}var H={data(){return{cartData:{carts:[]},isLoadingID:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCarts(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/testpp/cart").then((e=>{this.cartData=e.data.data}))},updateCart(e){const t={product_id:e.id,qty:e.qty};this.$http.put("https://vue3-course-api.hexschool.io/v2/api/testpp/cart/"+e.id,{data:t}).then((e=>{this.getCarts(),this.isLoadingID="",alert(e.data.message)}))},deleteCart(e){this.isLoadingID=e,this.$http.delete("https://vue3-course-api.hexschool.io/v2/api/testpp/cart/"+e).then((e=>{this.getCarts(),this.isLoadingID="",alert(e.data.message)}))},deleteAllCart(){this.$http.delete("https://vue3-course-api.hexschool.io/v2/api/testpp/carts").then((e=>{this.getCarts(),this.isLoadingID="",alert(e.data.message)}))},createOrder(){const e=this.form;this.$http.post("https://vue3-course-api.hexschool.io/v2/api/testpp/order",{data:e}).then((e=>{alert(e.data.message),this.$refs.form.resetForm(),this.getCarts(),this.isLoadingID=""}))}},mounted(){this.getCarts()}},K=a(89);const Y=(0,K.Z)(H,[["render",S]]);var Z=Y}}]);
//# sourceMappingURL=616.250fe1b2.js.map
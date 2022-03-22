"use strict";(self["webpackChunkhw6"]=self["webpackChunkhw6"]||[]).push([[9],{4009:function(t,d,o){o.r(d),o.d(d,{default:function(){return O}});var l=o(3396),a=o(7139),s=o(9242);const i={class:"container"},e=(0,l._)("h1",null,"This is 產品列表",-1),r={class:"table align-middle"},c=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"圖片"),(0,l._)("th",null,"商品名稱"),(0,l._)("th",null,"價格"),(0,l._)("th")])],-1),n={style:{width:"200px"}},u={key:0,class:"h5"},p={key:1},h={class:"h6"},b={class:"h5"},_={class:"btn-group btn-group-sm"},g=["onClick","disabled"],m={class:"fas fa-spinner fa-pulse"},w=(0,l.Uk)("查看更多 "),v=["onClick","disabled"],y={class:"fas fa-spinner fa-pulse"},k=(0,l.Uk)("加到購物車 ");function f(t,d,o,f,M,D){const C=(0,l.up)("ProductModal");return(0,l.wg)(),(0,l.iD)("div",i,[e,(0,l._)("table",r,[c,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(M.products,(d=>((0,l.wg)(),(0,l.iD)("tr",{key:d.id},[(0,l._)("td",n,[(0,l._)("div",{style:(0,a.j5)([{backgroundImage:`url(${d.imageUrl})`},{height:"100px","background-size":"cover","background-position":"center"}])},null,4)]),(0,l._)("td",null,(0,a.zw)(d.title),1),(0,l._)("td",null,[d.price===d.origin_price?((0,l.wg)(),(0,l.iD)("div",u,(0,a.zw)(d.price)+" 元",1)):((0,l.wg)(),(0,l.iD)("div",p,[(0,l._)("del",h,"原價 "+(0,a.zw)(d.origin_price)+" 元",1),(0,l._)("div",b,"現在只要 "+(0,a.zw)(d.price)+" 元",1)]))]),(0,l._)("td",null,[(0,l._)("div",_,[(0,l._)("button",{type:"button",class:"btn btn-outline-secondary",onClick:t=>D.openProductModal(d.id),disabled:t.isLoadingID===d.id},[(0,l.wy)((0,l._)("i",m,null,512),[[s.F8,t.isLoadingID===d.id]]),w],8,g),(0,l._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>D.addToCart(d.id),disabled:t.isLoadingID===d.id},[(0,l.wy)((0,l._)("i",y,null,512),[[s.F8,t.isLoadingID===d.id]]),k],8,v)])])])))),128))])]),(0,l.Wm)(C,{ref:"productModal",product:M.product,onAddCart:D.addToCart},null,8,["product","onAddCart"])])}const M={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},D={class:"modal-dialog modal-xl",role:"document"},C={class:"modal-content border-0"},z={class:"modal-header bg-dark text-white"},x={class:"modal-title",id:"exampleModalLabel"},$=(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),L={class:"modal-body"},I={class:"row"},P={class:"col-sm-6"},q=["src"],U={class:"col-sm-6"},T={class:"badge bg-primary rounded-pill"},A={key:0,class:"h5"},F={key:1},Z={class:"h6"},j={class:"h5"},H={class:"input-group"};function K(t,d,o,i,e,r){return(0,l.wg)(),(0,l.iD)("div",M,[(0,l._)("div",D,[(0,l._)("div",C,[(0,l._)("div",z,[(0,l._)("h5",x,[(0,l._)("span",null,(0,a.zw)(o.product.title),1)]),$]),(0,l._)("div",L,[(0,l._)("div",I,[(0,l._)("div",P,[(0,l._)("img",{class:"img-fluid",src:o.product.imageUrl,alt:""},null,8,q)]),(0,l._)("div",U,[(0,l._)("span",T,(0,a.zw)(o.product.category),1),(0,l._)("p",null,"商品描述："+(0,a.zw)(o.product.description),1),(0,l._)("p",null,"商品內容："+(0,a.zw)(o.product.content),1),o.product.price===o.product.origin_price?((0,l.wg)(),(0,l.iD)("div",A,(0,a.zw)(o.product.price)+" 元",1)):((0,l.wg)(),(0,l.iD)("div",F,[(0,l._)("del",Z,"原價 "+(0,a.zw)(o.product.origin_price)+" 元",1),(0,l._)("div",j,"現在只要 "+(0,a.zw)(o.product.price)+" 元",1)])),(0,l._)("div",H,[(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",min:"1","onUpdate:modelValue":d[0]||(d[0]=t=>e.qty=t)},null,512),[[s.nr,e.qty,void 0,{number:!0}]]),(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:d[1]||(d[1]=d=>t.$emit("add-cart",o.product.id,e.qty))},"加入購物車")])])])])])])],512)}var V=o(7972),W=o.n(V),Y={props:{product:{}},data(){return{productModal:{},qty:1}},methods:{openModal(){this.productModal.show()},closeModal(){this.productModal.hide()}},mounted(){this.productModal=new(W())(this.$refs.modal,{keyboard:!1,backdrop:"static"})}},B=o(89);const E=(0,B.Z)(Y,[["render",K]]);var G=E,J={data(){return{products:[],product:{}}},components:{ProductModal:G},methods:{getProducts(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/testpp/products/all").then((t=>{this.products=t.data.products}))},openProductModal(t){this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/testpp/product/${t}`).then((t=>{this.product=t.data.product})),this.$refs.productModal.openModal()},addToCart(t,d=1){const o={product_id:t,qty:d};this.isLoadingID=t,this.$http.post("https://vue3-course-api.hexschool.io/v2/api/testpp/cart",{data:o}).then((t=>{this.isLoadingID="",this.$refs.productModal.closeModal(),alert(t.data.message)}))}},mounted(){this.getProducts()}};const N=(0,B.Z)(J,[["render",f]]);var O=N}}]);
//# sourceMappingURL=9.f3153a51.js.map
<template>
  <div class="container">
    <h1>This is 產品列表</h1>
    <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td style="width: 200px">
            <div :style="{ backgroundImage: `url(${product.imageUrl})` }" style="height: 100px; background-size: cover; background-position: center;"></div>
          </td>
          <td>{{ product.title }}</td>
          <td>
            <div class="h5" v-if="product.price === product.origin_price">{{ product.price }} 元</div>
            <div v-else>
              <del class="h6">原價 {{ product.origin_price }} 元</del>
              <div class="h5">現在只要 {{ product.price }} 元</div>
            </div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button type="button" class="btn btn-outline-secondary" @click="openProductModal(product.id)" :disabled="isLoadingID === product.id">
                <i class="fas fa-spinner fa-pulse" v-show="isLoadingID === product.id"></i>查看更多
              </button>
              <button type="button" class="btn btn-outline-danger" @click="addToCart(product.id)" :disabled="isLoadingID === product.id">
                <i class="fas fa-spinner fa-pulse" v-show="isLoadingID === product.id" ></i >加到購物車
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <ProductModal ref="productModal" :product="product" @add-cart="addToCart"></ProductModal>
  </div>
</template>
<script>
import ProductModal from '@/components/ProductModal.vue'
export default {
  data () {
    return {
      products: [],
      product: {}
    }
  },
  components: {
    ProductModal
  },
  methods: {
    getProducts () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      ).then((res) => {
        this.products = res.data.products
      })
    },
    openProductModal (id) {
      // this.productID = id
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          // console.dir(res.data);
          this.product = res.data.product
        })
      this.$refs.productModal.openModal()
    },
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      this.isLoadingID = id
      this.$http.post(process.env.VUE_APP_API + '/api/' + process.env.VUE_APP_PATH + '/cart', { data })
        .then((res) => {
          // this.getCarts()
          this.isLoadingID = ''
          this.$refs.productModal.closeModal()
          alert(res.data.message)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

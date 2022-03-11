<template>
  <div class="container">
    <h2>後台產品列表</h2>
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="showModal('new')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td width="120">{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td width="120">{{ item.origin_price }}</td>
          <td width="120">{{ item.price }}</td>
          <td width="100">
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td width="120">
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm" @click="showModal('edit', item)">編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="showModal('delete', item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁元件 -->
    <PaginationComp :pages="pagination" @get-products="getProducts"></PaginationComp>
    <!-- 分頁元件 -->
  </div>
  <!-- Modal -->
  <AddProductModal ref="addProductModal" :product="tempProduct" :is-new="isNew" v-on:get-products="getProducts"></AddProductModal>
  <DelProductModal ref="delProductModal" :product="tempProduct" v-on:get-products="getProducts"></DelProductModal>
  <!-- Modal -->
</template>
<script>
import AddProductModal from '@/components/AdminProductModal.vue'
import DelProductModal from '@/components/DelProductModal.vue'
import PaginationComp from '@/components/PaginationComp.vue'
export default {
  data () {
    return {
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      isNew: false,
      pagination: {}
    }
  },
  components: {
    AddProductModal,
    DelProductModal,
    PaginationComp
  },
  methods: {
    getProducts (page = 1) {
      this.$http.get(process.env.VUE_APP_API + '/api/' + process.env.VUE_APP_PATH + '/admin/products/?page=' + page)
        .then((res) => {
          // console.log(res.data);
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
        .catch((error) => {
          console.dir(error)
        })
    },
    showModal (act, product) {
      if (act === 'new') {
        this.isNew = true
        this.tempProduct = {
          imagesUrl: []
        }
        this.$refs.addProductModal.openModal()
      } else if (act === 'edit') {
        this.isNew = false
        this.tempProduct = { ...product }
        // console.log(this.tempProduct);
        this.$refs.addProductModal.openModal()
      } else if (act === 'delete') {
        this.tempProduct = { ...product }
        this.$refs.delProductModal.openModal()
      }
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

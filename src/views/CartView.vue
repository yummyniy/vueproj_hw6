<template>
  <div class="container">
    <h2>購物車</h2>
    <div class="text-end">
      <button class="btn btn-outline-danger" type="button" @click="deleteAllCart" :disabled="cartData.carts.length === 0" >
        清空購物車
      </button>
    </div>
    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 150px">數量/單位</th>
          <th>單價</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="cartData.carts">
          <tr v-for="item in cartData.carts" :key="item.id">
            <td>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteCart(item.id)">
                <i class="fas fa-spinner fa-pulse" v-show="isLoadingID === item.id"></i>x
              </button>
            </td>
            <td>
              {{ item.product.title }}
              <div class="text-success" v-if="item.coupon">已套用優惠券</div>
            </td>
            <td>
              <div class="input-group input-group-sm">
                <div class="input-group mb-3">
                  <input min="1" type="number" class="form-control" v-model.number="item.qty" @blur="updateCart(item)" :disabled="isLoadingID === item.id"/>
                  <span class="input-group-text" id="basic-addon2">{{item.product.unit}}</span>
                </div>
              </div>
            </td>
            <td class="text-end">
              <small class="text-success">折扣價：</small>{{ item.product.price }}
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td class="text-end">{{ cartData.total }}</td>
        </tr>
        <tr v-if="cartData.final_total !== cartData.total">
          <td colspan="3" class="text-end text-success">折扣價</td>
          <td class="text-end text-success">{{ cartData.final_total }}</td>
        </tr>
      </tfoot>
    </table>
    <div class="my-5 row justify-content-center">
      <v-form ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <v-Field id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required" v-model="form.user.email"></v-Field>
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required" v-model="form.user.name"></v-field>
          <error-message name="姓名" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <v-field id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話" rules="required|min:8|max:10" v-model="form.user.tel"></v-field>
          <error-message name="電話" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <v-field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址" rules="required" v-model="form.user.address"></v-field>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-danger" :disabled="Object.keys(errors).length > 0 || cartData.carts.length === 0">送出訂單</button>
        </div>
      </v-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cartData: {
        carts: []
      },
      isLoadingID: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCarts () {
      this.$http.get(process.env.VUE_APP_API + '/api/' + process.env.VUE_APP_PATH + '/cart')
        .then((res) => {
          this.cartData = res.data.data
        })
    },
    updateCart (item) {
      const data = {
        product_id: item.id,
        qty: item.qty
      }
      this.$http.put(process.env.VUE_APP_API + '/api/' + process.env.VUE_APP_PATH + '/cart/' + item.id, { data })
        .then((res) => {
          this.getCarts()
          this.isLoadingID = ''
          alert(res.data.message)
        })
    },
    deleteCart (id) {
      this.isLoadingID = id
      this.$http.delete(process.env.VUE_APP_API + '/api/' + process.env.VUE_APP_PATH + '/cart/' + id)
        .then((res) => {
          this.getCarts()
          this.isLoadingID = ''
          alert(res.data.message)
        })
    },
    deleteAllCart () {
      this.$http.delete(process.env.VUE_APP_API + '/api/' + process.env.VUE_APP_PATH + '/carts')
        .then((res) => {
          this.getCarts()
          this.isLoadingID = ''
          alert(res.data.message)
        })
    },
    createOrder () {
      const order = this.form
      this.$http.post(process.env.VUE_APP_API + '/api/' + process.env.VUE_APP_PATH + '/order', { data: order })
        .then((res) => {
          alert(res.data.message)
          this.$refs.form.resetForm()
          // this.deleteAllCart();
          this.getCarts()
          this.isLoadingID = ''
        })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>

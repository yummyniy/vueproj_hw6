<template>
  <div id="delOrderModal" class="modal fade" tabindex="-1" aria-labelledby="delOrderModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title"><span>刪除訂單</span></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">是否刪除<strong class="text-danger">{{ tempOrder.id }}</strong> 訂單(刪除後將無法恢復)。</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-danger" @click="delOrder">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: {
    order: {}
  },
  data () {
    return {
      tempOrder: {},
      delOrderModal: {}
    }
  },
  watch: {
    order () {
      this.tempOrder = this.order
    }
  },
  methods: {
    delOrder () {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`)
        .then((res) => {
          this.closeModal()
          alert(res.data.message)
          this.$emit('get-orders')
        }).catch((error) => {
          console.dir(error)
        })
    },
    openModal () {
      this.delOrderModal.show()
    },
    closeModal () {
      this.delOrderModal.hide()
    }
  },
  mounted () {
    this.delOrderModal = new Modal(this.$refs.modal, {
      keyboard: false
    })
  }
}
</script>

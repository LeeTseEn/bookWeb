<template>
  <div class="restaurant page">
    <el-form ref="form" :model="form" style="width: 1000px">
      <div class="book">
        <el-form-item label="大人">
          <el-input v-model="form.name" placeholder="幾位大人" />
        </el-form-item>
        <el-form-item label="小孩">
          <el-input v-model="to.name" placeholder="幾位小孩" />
        </el-form-item>
        <el-form-item label="入住日期">
          <el-col :span="11" style="width: 100%">
            <el-date-picker v-model="form.date" type="date" placeholder="入住日期" style="width: 100%;" />
          </el-col>
        </el-form-item>
        <el-form-item label="退房日期">
          <el-col :span="11" style="width: 100%">
            <el-date-picker v-model="to.date" type="date" placeholder="退房日期" style="width: 100%;" />
          </el-col>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="loadLastData">載入上一次填寫內容</el-button>
        <el-button type="primary" @click="onSubmit">旅館查詢</el-button>
        <el-button @click="handleReset(form);handleReset(to)">重置內容</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Airplane',

  data() {
    return {
      form: {
        name: '',
        prefer: '',
        date: '',
        type: []
      },
      to: {
        name: '',
        prefer: '',
        date: '',
        type: []
      }
    }
  },

  created() {},

  methods: {
    // 表單送出
    onSubmit() {
      const targetForm = this.form
      const targetTo = this.to
      localStorage.setItem('form', JSON.stringify(targetForm))
      localStorage.setItem('to', JSON.stringify(targetTo))
    },
    // 載入前一次成功送出的內容
    loadLastData() {
      const getForm = JSON.parse(localStorage.getItem('form'))
      const getTo = JSON.parse(localStorage.getItem('to'))
      this.form = getForm
      this.to = getTo
    },
    // 重置表單

    handleReset(obj) {
      this.resetForm(obj)
      this.resetTo(obj)
      obj.date = ''
    },
    resetForm(target) {
      const reset = obj => {
        Object.keys(obj).map(key => {
          if (obj[key] === Object(obj[key])) {
            reset(obj[key])
            if (obj[key] instanceof Array) {
              obj[key] = []
            }
            return
          } else {
            obj[key] = ''
          }
        })
      }
      reset(target)
    },
    resetTo(target) {
      const reset = obj => {
        Object.keys(obj).map(key => {
          if (obj[key] === Object(obj[key])) {
            reset(obj[key])
            if (obj[key] instanceof Array) {
              obj[key] = []
            }
            return
          } else {
            obj[key] = ''
          }
        })
      }
      reset(target)
    }
  },

  computed: {
  }
}
</script>

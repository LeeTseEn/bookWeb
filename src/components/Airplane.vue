<template>
  <div class="airplane">
    <div class="page">
      <el-form ref="form" :model="form" style="width: 1000px">
        <div class="book">
          <el-form-item label="出發">
            <el-input v-model="form.name" placeholder="出境國家" />
          </el-form-item>
          <el-form-item label="抵達">
            <el-input v-model="to.name" placeholder="入境國家" />
          </el-form-item>
          <el-form-item label="去程日期">
            <el-col :span="11" style="width: 100%">
              <el-date-picker v-model="form.date" type="date" placeholder="日期" :picker-options="pickerOptions0" style="width: 100%;" />
            </el-col>
          </el-form-item>
          <el-form-item label="回程日期">
            <el-col :span="11" style="width: 100%">
              <el-date-picker v-model="to.date" type="date" placeholder="回程日期" :picker-options="pickerOptions1" style="width: 100%;" />
            </el-col>
          </el-form-item>
        </div>
        <el-form-item>
          <el-button type="primary" @click="loadLastData">載入上一次填寫內容</el-button>
          <el-button type="primary" @click="onSubmit">機票查詢</el-button>
          <el-button @click="handleReset(form);handleReset(to)">重置內容</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="hot">
      <b>熱門景點</b>
      <div class="my-grid wrap" data-row-split="5">
        <div class="grid countryHot">
          <div class="content" />
        </div>
        <div class="grid countryHot">
          <div class="content" />
        </div>
        <div class="grid countryHot">
          <div class="content" />
        </div>
        <div class="grid countryHot">
          <div class="content" />
        </div>
        <div class="grid countryHot">
          <div class="content" />
        </div>
      </div>
    </div>
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

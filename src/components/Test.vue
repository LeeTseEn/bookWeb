<template>
  <div class="test vuex_temp">
    <h1>適合您去旅遊的國家</h1>
    <br>
    <div class="row vertical">
      <p>喜歡哪種動物</p>
      <br>
      <el-radio-group v-model="flagItem.selectA" @change="onRadioChange">
        <el-radio-button
          v-for="(item, index) in flagItem.partA"
          :key="index"
          :label="item.label"
        >{{ item.name }}</el-radio-button>
      </el-radio-group>
      <br>
      <p>喜歡哪種食物</p>
      <br>
      <el-radio-group v-model="flagItem.selectB" @change="onRadioChange">
        <el-radio-button
          v-for="(item, index) in flagItem.partB"
          :key="index"
          :label="item.label"
        >{{ item.name }}</el-radio-button>
      </el-radio-group>
      <br>
      <p>怕冷還怕熱</p>
      <br>
      <el-radio-group v-model="flagItem.selectC" @change="onRadioChange">
        <el-radio-button
          v-for="(item, index) in flagItem.partC"
          :key="index"
          :label="item.label"
        >{{ item.name }}</el-radio-button>
      </el-radio-group>
    </div>
    <br>
    <el-button @click="$router.push({name: 'TestDetail'})">結果</el-button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Test',
  data() {
    return {
      flagItem: {
        selectA: '',
        selectB: '',
        selectC: '',
        partA: [
          { label: 0, name: '羊' },
          { label: 1, name: '貓' },
          { label: 2, name: '狗' },
          { label: 3, name: '豬' },
          { label: 4, name: '熊' }
        ],

        partB: [
          { label: 1, name: '排餐' },
          { label: 8, name: '生魚片' },
          { label: 3, name: '漢堡' },
          { label: 5, name: '咖哩' },
          { label: 2, name: '湯包' }
        ],

        partC: [
          { label: 1, name: '冷' },
          { label: 6, name: '熱' },
          { label: 2, name: '無感' },
          { label: 7, name: '都怕' }
        ]
      }
    };
  },

  computed: {
    ...mapGetters(["mapGetTotal", "mapGetFlag", "mapGetEpilogue"]),

    getTotalScore() {
      let result = this.flagItem.selectA + this.flagItem.selectB + this.flagItem.selectC
      return result
    }
  },

  methods: {
    ...mapActions(["setFlag"]),
    ...mapMutations(["changeTotal", "changeFlag", "changeEpilogue"]),
    onRadioChange() {
      this.changeTotal(this.getTotalScore)
      this.setFlag()
      this.changeEpilogue()
    }
  }
};
</script>

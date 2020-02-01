<template>
  <div class="game el-customize">
    <h2>紅利點數抽獎</h2>
    <p>----------------------------------------</p>
    <br>
    <div class="game_panel">
      <ul class="game_info">
        <li>紅利點數: {{ account.friendShip }} 可抽次數: {{ account.playableCount }}</li>
      </ul>
      <div v-if="beforePick" class="display">
        <el-button class="pickup" :disabled="buttonDisable" @click="handlePickupDisplay(button.one.count)">{{ button.one.msg }}</el-button>
        <el-button v-if="multiPickButton" class="pickup" @click="handlePickupDisplay(button.mult.count)">{{ button.mult.msg }}</el-button>
      </div>
      <div v-if="pickStart" class="pickupBlock">
        <div class="display" data-row-count="5">
          <div v-for="(item, index) in pickPool" :key="index" class="data_row card_obj">
            <span class="card">
              <p>{{ item.name }}</p>
            </span>
          </div>
        </div>
        <div class="btn_outer">
          <el-button class="pickup" @click="handlePickupDisplay(0)">繼續抽獎</el-button>
        </div>
      </div>
    </div>
    <div v-if="buttonDisable" class="row horizontal center" data-space="space-vertical">
      <p>突然有</p>
      <div class="input_inner" data-width="10rem" data-space="space-horizontal">
        <el-input-number v-model="rentCount" type="text" :min="1" placeholder="人數" />
      </div>
      <p>X200點紅利點數</p>
      <el-button type="primary" @click="chargePoint">確認</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  data() {
    return {
      beforePick: true,
      pickStart: false,
      account: {
        friendShip: 2100,
        playableCount: 0, // 初始值 0
      },
      rentCount: 1,
      cost: 200,
      buttonDisable: false,
      multiPickButton: true,
      button: {
        one: {
          msg: '',
          count: 0
        },
        mult: {
          msg: '',
          count: 0
        }
      },

      pickPool: [],
      cardPool: [
        { name: '9折歐洲行程' },
        { name: '7折日本自由行' },
        { name: '5折客運車票' },
        { name: '9折歐洲行程' },
        { name: '7折日本自由行' },
        { name: '5折客運車票' },
        { name: '9折歐洲行程' },
        { name: '7折日本自由行' },
        { name: '5折客運車票' },
        { name: '9折歐洲行程' },
        { name: '7折日本自由行' },
        { name: '5折客運車票' }
      ]
    }
  },

  created() {
    this.buttonMsg
  },

  methods: {
    handlePickupDisplay(val) {
      this.beforePick = !this.beforePick
      this.pickStart = !this.pickStart
      this.buttonMsg
      this.pickCard(val)
      this.account.friendShip = this.account.friendShip - (this.cost * val)
      if (val == 0) {
        this.pickPool = []
      }
    },

    chargePoint() {
      // 出借從者一次+25
      const increase = this.rentCount * 200
      this.account.friendShip += increase
      console.log('購買商品: ' + increase + ' 紅利點數' )
      this.buttonMsg
    },

    pickCard(val) {
      let max = val
      let arrIndex = 0

      for (let i = 0; i < val; i++) {
        if (val < this.cardPool.length) {
          max = this.cardPool.length
        }
        arrIndex = Math.floor(Math.random() * max)
        this.pickPool.push(this.cardPool[arrIndex])
        console.log(arrIndex)
      }

    }
  },

  computed: {
    buttonMsg() {
      let cost = this.cost // cost固定200
      let totalPoint = this.account.friendShip
      let multCount = Math.floor((totalPoint / this.cost))
      let oneCount = 0

      // 別忘了預設值重置
      this.buttonDisable = false
      this.multiPickButton = true
      this.account.playableCount = multCount

      // 判斷點數是否足夠抽一次 (用三元式)
      totalPoint >= cost ? oneCount = 1 : oneCount = 0
      this.button.one.count = oneCount
      this.button.one.msg = `${oneCount + ' 回抽選'}`

      // 假如右側Button不顯示且友情點數不足200則按鈕訊息顯示 "友情點數不足"
      if (totalPoint < cost && oneCount == 0) {
        this.button.one.msg = '紅利點數不足'
        this.buttonDisable = true
      }

      // 判斷點數是否足夠抽十次，如果不夠十次，剩餘次數是否大於兩次?

      if (multCount >= 10) {
        this.button.mult.msg = `${'10 回抽獎'}`
        this.button.mult.count = 10
      } else if (multCount < 2) {
        this.multiPickButton = false
      } else {
        this.button.mult.count = multCount
        this.button.mult.msg = `${multCount + ' 回抽獎'}`
      }

      // 小於兩次時右側按鈕不顯示
      if (multCount < 2) {
        this.multiPickButton = false
      }
    }
  },

  mounted() {

  }
}
</script>

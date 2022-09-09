<template>
  <v-container class="container" fluid>
    <div class="workspace">
      <v-card class="vcard" max-width="512px" color="#5485b4">
        <img alt="Math" src="/math.png" />
        <v-text-field class="text-field" label="First Input" v-model.number="number1"></v-text-field>
        <v-text-field class="text-field" label="Second Input" v-model.number="number2"></v-text-field>

        <v-btn class="btn" rounded color="indigo" @click="add()">Addition</v-btn>
        <v-btn class="btn" rounded color="indigo" dark @click="sub()">Subtraction</v-btn>
        <v-btn class="btn" rounded color="indigo" dark @click="quo()">Division</v-btn>
        <v-btn class="btn" rounded color="indigo" dark @click="mul()">Multiplication</v-btn>
        <v-btn class="btn" rounded color="indigo" dark @click="ave()">Average</v-btn>

        <h1 class="result">TOTAL: {{ result }}</h1>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      number1: '',
      number2: '',
      result: ''
    }
  },

  methods: {
    add() {
      this.result = parseInt(this.number1) + parseInt(this.number2);
    },
    sub() {
      this.result = parseInt(this.number1) - parseInt(this.number2);
    },
    mul() {
      this.result = parseInt(this.number1) * parseInt(this.number2);
    },
    quo() {
      this.result = parseInt(this.number1) / parseInt(this.number2);
    },
    ave() {
      this.result = (parseInt(this.number1) + parseInt(this.number2)) / 2;
    }
  }
}
</script>
<style scoped>
.result {
  font-family: "Gotham Bold", Helvetica, Arial;
  color: white;
}

.container {
  font-family: "Gotham Bold", Helvetica, Arial;
  color: white;
}

.title {
  font-family: "Gotham Bold", Helvetica, Arial;
  font-size: 30px;
  color: white;
}

.workspace {
  font-family: "Gotham Medium", Helvetica, Arial;
  justify-content: center;
  margin-right: 50%;
  padding-left: 5%;
  height: 100%;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
}

.text-field {
  font-family: "Gotham Medium", Helvetica, Arial;
  color: white;
}

.vcard {
  font-family: "Gotham Medium", Helvetica, Arial;
  padding: 25px 25px 25px 25px;
}

.btn {
  margin: 2%;
}
</style>



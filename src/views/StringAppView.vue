<template>
     <v-container class="container" fluid>
          <div class="workspace">
               <v-card class="vcard" max-width="724px" color="#5485b4">
                    <img alt="String" src="/string_manipulator.png" />
                    <v-text-field class="text-field" label="Enter a String" v-model="text1"></v-text-field>

                    <v-btn class="btn" rounded color="indigo" v-on:click="show">
                         COUNT AND CONVERT
                    </v-btn>
                    <h1 class="result">Vowel: {{ vowels }}</h1>
                    <h1 class="result">Number: {{ numbers }}</h1>
                    <h1 class="result">Consonant: {{ consonant }}</h1>
                    <h1 class="result">Vowels Converted into *: {{ convert }}</h1>
               </v-card>
          </div>
     </v-container>
</template>

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
     font-size:30px;
     color: white;
}

.workspace {
     font-family: "Gotham Medium", Helvetica, Arial;
     justify-content: center;
     margin-right: 50%;
     padding-left: 5%;
     height: 100%;
     width: 100%;
     font-size: 15px;
     font-weight: 600;
}

.text-field {
     font-family: "Gotham Medium", Helvetica, Arial;
     color: white;
}

.vcard {
     font-family: "Gotham Bold", Helvetica, Arial;
     padding: 25px 25px 25px 25px;
}

.btn {
     margin: 2%;
}
</style>

<script>
export default {
     data() {
          return {
               vowels: "",
               consonant: "",
               numbers: "",
               text1: "",
          };
     },
     methods: {
          show: function () {
               const numbercount = this.text1.match(/[0-9]/gi).length;
               this.numbers = numbercount
               const vowelcount = this.text1.match(/[aeiou]/gi).length;
               this.vowels = vowelcount;
               const conscount = this.text1.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
               this.consonant = conscount;
               this.convert = this.text1.replace(/[aeiou]/gi, '*')
          },
     },
};
</script>

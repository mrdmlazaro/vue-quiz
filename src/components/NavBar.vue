<template>
  <nav>
    <v-toolbar color="#b3ceec" app>
      <v-app-bar-nav-icon color="white" @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="title-lab">LABORATORY COMPILATION</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- dropdown menu -->

      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn class="menu" color="primary" v-bind="props">
            CHOOSE DESIRED LAB
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" router :to="item.path" :prepend-icon="item.icon">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-navigation-drawer class="nav-drawer" color="#5485b4" app v-model="drawer">
      <v-list-item class="list-item" color="white" v-for="item in items" :key="item.title" router :to="item.path"
        :prepend-icon="item.icon">
        <v-list-item-title color="white">{{ item.title }}</v-list-item-title>

      </v-list-item>

    </v-navigation-drawer>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import vuetify from '../plugins/vuetify';

const drawer = ref(false)

const items = ref([

  { title: 'About Me', icon: 'mdi-account', path: '/' },
  { title: 'Basic Calculator', icon: 'mdi-plus-one', path: '/basicMath' },
  { title: 'String Manipulation', icon: 'mdi-code-string', path: '/stringApp' },
  { title: 'Vuetify Research', icon: 'mdi-vuetify', path: '/vuetify' },
  { title: 'Quiz', icon: 'mdi-note-outline', path: '/quiz' },
  { title: 'About the Project', icon: 'mdi-file-document', path: '/abtquiz' },
])

function toggleDrawer() {
  return drawer.value = !drawer.value
}
</script>

<style scoped>
.menu{
  color: white;
  font-family: "Gotham Bold", Helvetica, Arial;
}
.title-lab {
  color: white;
  font-family: "Gotham Bold", Helvetica, Arial;
}

.list-item {
  font-family: "Gotham Bold", Helvetica, Arial;
}

.nav-drawer {
  background-color: aqua;
}
</style>
<template>
  <nav>
    <v-toolbar color="#b3ceec" app>
      <v-app-bar-nav-icon color="white" @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="title-lab">Laboratory 5</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- dropdown menu -->

      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">
            SELECT
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

  { title: 'Homepage', icon: 'mdi-home', path: '/' },
  { title: 'Math', icon: 'mdi-plus-one', path: '/basicMath' },
  { title: 'String App', icon: 'mdi-code-string', path: '/stringApp' },
  { title: 'Vuetify', icon: 'mdi-vuetify', path: '/vuetify' },
  { title: 'Quiz', icon: 'mdi-note-outline', path: '/quiz' },
])

function toggleDrawer() {
  return drawer.value = !drawer.value
}
</script>

<style scoped>
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
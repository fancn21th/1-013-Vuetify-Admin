<template>
  <v-card>
    <v-layout>
      <!-- drawer -->
      <v-navigation-drawer permanent>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/2.jpg"
          title="Micheal Han"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            v-for="route in staticRoutes"
            :key="route.title"
            :title="route.title"
            :value="route.title"
            :href="route.path"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- app bar -->
      <v-app-bar density="compact">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Admin</v-app-bar-title>

        <v-btn icon @click="toggleTheme">
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>

        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>

      <!-- main -->
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { staticRoutes } from "@/config/router.config";
import { useTheme } from "vuetify";

const theme = useTheme();

const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? "light"
    : "dark");
</script>

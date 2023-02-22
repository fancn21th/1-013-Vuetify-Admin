<template>
  <v-card>
    <v-layout>
      <!-- drawer -->
      <v-navigation-drawer permanent>
        <v-list-item title="产品名称" :prepend-avatar="logo"> </v-list-item>

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
      <v-app-bar prominent extended>
        <template v-slot:prepend>
          <v-breadcrumbs :items="items">
            <template v-slot:prepend>
              <v-icon size="small" icon="mdi-vuetify"></v-icon>
            </template>
          </v-breadcrumbs>
        </template>

        <v-spacer></v-spacer>

        <v-btn icon @click="toggleTheme">
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>

        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>

        <template v-slot:extension>
          <v-tabs v-model="tab" align-tabs="title" color="deep-purple-accent-4">
            <v-tab v-for="item in tabItems" :key="item" :value="item">
              {{ item }}
            </v-tab>
          </v-tabs>
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
import logo from "@/assets/logo.png";

const theme = useTheme();

const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? "light"
    : "dark");

const items = [
  {
    title: "Dashboard",
    disabled: false,
    href: "breadcrumbs_dashboard",
  },
  {
    title: "Link 1",
    disabled: false,
    href: "breadcrumbs_link_1",
  },
  {
    title: "Link 2",
    disabled: true,
    href: "breadcrumbs_link_2",
  },
];

const tab = null;

const tabItems = ["web", "shopping", "videos", "images", "news"];
</script>

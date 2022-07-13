<template>
  <v-app>
    <v-main>
      <div>
        <Header />
        <router-view />
      </div>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),

  components: {
    Header,
    Footer,
  },
};
</script>

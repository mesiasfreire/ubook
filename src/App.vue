<template>
  <section class="h-screen w-screen bg-main-grayligth p-4 overflow-hidden">
    <main class="max-w-7xl mx-auto">
      <Header />
      <router-view />
    </main>
  </section>
</template>
<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
  setup() {},
};
</script>

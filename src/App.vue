<template>
  <ModalFactory />
  <section class="h-screen w-screen bg-main-grayligth p-4 overflow-hidden">
    <main class="max-w-7xl mx-auto max-h-screen">
      <Header />
      <router-view />
    </main>
  </section>
</template>
<script>
import Header from "@/components/Header";
import ModalFactory from "@/components/ModalFactory";
export default {
  components: {
    Header,
    ModalFactory,
  },
  setup() {},
};
</script>

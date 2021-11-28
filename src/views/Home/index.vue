<template>
  <div class="h-4/5 overflow-y-auto">
    <Agenda />
  </div>

  <!-- <section
    class="flex justify-center items-center flex-col mx-auto gap-4 my-20"
  >
    <img src="@/assets/icons/ic-book.svg" alt="Nenhum contato foi criado" />
    <p>Nenhum contato foi criado ainda</p>
    <button
      class="rounded-full bg-yellowGreen-50 py-2 w-44 mx-4 shadow-md text-tomato-25 font-medium font- flex items-center justify-evenly"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clip-rule="evenodd"
        />
      </svg>
      Criar contato
    </button>
  </section> -->
</template>

<script>
import { reactive } from "vue";
import Agenda from "@/components/Agenda";

export default {
  name: "Home",
  components: {
    Agenda,
  },
  setup() {
    const agenda = reactive({
      count: 0,
    });

    return {
      agenda,
    };
  },
};
</script>

<template>
  <Agenda
    v-if="agenda.length !== 0"
    @editContact="handleEditContact"
    @deleteContact="handleDeleteContact"
  />

  <section
    v-if="agenda.length === 0"
    class="flex justify-center items-center flex-col mx-auto gap-4 my-20"
  >
    <img src="@/assets/icons/ic-book.svg" alt="Nenhum contato foi criado" />
    <p>Nenhum contato foi criado ainda</p>
    <button
      @click="handleNewContact"
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
  </section>
</template>

<script>
import Agenda from "@/components/Agenda";
import { getCurrentAgenda } from "@/store/agenda";
import useModal from "@/hooks/useModal";

export default {
  name: "Home",
  components: {
    Agenda,
  },
  setup() {
    const agenda = getCurrentAgenda();
    const modal = useModal();
    function handleNewContact() {
      modal.open({
        component: "ModalNewContact",
      });
    }
    function handleEditContact() {
      modal.open({
        component: "ModalEditContact",
      });
    }
    function handleDeleteContact() {
      modal.open({
        component: "ModalDeleteContact",
      });
    }
    return {
      agenda,
      handleNewContact,
      handleEditContact,
      handleDeleteContact,
    };
  },
};
</script>

<template>
  <section class="py-4 px-4 border-b border-main-grayinside">
    <h1>Excluir contato</h1>
  </section>
  <section class="px-4 py-10">
    <p>Deseja realmente exluir o contato?</p>
  </section>
  <section
    class="py-4 px-4 border-t flex justify-end font-regular border-main-grayinside"
  >
    <button class="mr-2 text-tomato-25" @click="close">Cancelar</button>
    <button
      @click="handleDeleteContact"
      class="px-6 py-1 bg-tomato-25 rounded-full text-white shadow-lg"
    >
      Salvar
    </button>
  </section>
</template>

<script>
import { deleteCurrentContact } from "@/store/agenda";
import { getCurrentContact } from "@/store/contact";

import useModal from "@/hooks/useModal";

export default {
  name: "ModalDeleteContact",

  setup() {
    const modal = useModal();
    const contact = getCurrentContact();

    function handleDeleteContact() {
      deleteCurrentContact(contact);
      modal.close();
    }
    return {
      close: modal.close,
      handleDeleteContact,
    };
  },
};
</script>

<style scoped></style>

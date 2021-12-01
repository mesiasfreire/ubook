<template>
  <section class="py-4 px-4 border-b border-main-grayinside">
    <h1>Editar contato</h1>
  </section>
  <form
    class="p-4 flex justify-start flex-col font-normal"
    action=""
    method="post"
  >
    <label for="" class="mb-2"
      >Nome
      <input
        v-model="state.name.value"
        class="py-1 border rounded-md outline-none w-full border-main-grayinside"
        type="text"
      />
    </label>
    <label for="" class="mb-2"
      >E-mail
      <input
        v-model="state.email.value"
        class="py-1 border rounded-md outline-none w-full border-main-grayinside"
        type="email"
      />
    </label>
    <label for="" class="mb-2 flex flex-col"
      >Telefone
      <input
        v-model="state.tel.value"
        class="py-1 border border-main-grayinside rounded-md outline-none w-2/5"
        type="tel"
      />
    </label>
  </form>
  <section
    class="py-4 px-4 border-t flex justify-end font-regular border-main-grayinside"
  >
    <button class="mr-2 text-tomato-25" @click="close">Cancelar</button>
    <button
      @click="handleEditContact"
      :disabled="!isValid"
      :class="{ 'bg-opacity-50': !isValid }"
      class="px-6 py-1 bg-tomato-25 rounded-full text-white shadow-lg"
    >
      Salvar
    </button>
  </section>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { editCurrentContact } from "@/store/agenda";
import { getCurrentContact } from "@/store/contact";

import useModal from "@/hooks/useModal";

export default {
  name: "ModalEditContact",

  setup() {
    const modal = useModal();
    const contact = getCurrentContact();

    onMounted(() => {
      state.name.value = contact.name;
      state.email.value = contact.email;
      state.tel.value = contact.tel;
    });

    const state = reactive({
      name: {
        value: "",
      },
      email: {
        value: "",
      },
      tel: {
        value: "",
      },
    });
    const isValid = computed(() => {
      return !!state.name.value || !!state.email.value || !!state.tel.value;
    });

    function handleEditContact() {
      editCurrentContact({
        id: contact.id,
        name: state.name.value,
        email: state.email.value,
        tel: state.tel.value,
      });
      modal.close();
    }
    return {
      state,
      close: modal.close,
      handleEditContact,
      isValid,
      contact,
    };
  },
};
</script>

<style scoped></style>

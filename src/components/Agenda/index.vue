<template>
  <div class="inline-block rounded-lg border max-h-3/4 overflow-y-auto">
    <table class="w-full text-sm text-main-bluegray bg-white text-left">
      <colgroup>
        <col span="1" style="width: 2%" />
        <col span="1" style="width: 26%" />
        <col span="1" style="width: 26%" />
        <col span="1" style="width: 26%" />
        <col span="1" style="width: 6%" />
      </colgroup>
      <thead>
        <tr class="border-b">
          <th class="rounded-t-lg"></th>
          <th class="font-normal p-2">Contatos</th>
          <th class="font-normal">E-mail</th>
          <th class="font-normal">Telefone</th>
          <th class="rounded-b-lg"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b last:border-b-0 hover:bg-main-verylightpink"
          :class="{ lastItem: isLast(index) }"
          v-for="(contact, index) in contacts"
          :key="contact.id"
        >
          <td colspan="1" class="p-2">
            <span
              :style="{ 'background-color': '#' + randomColor() }"
              class="flex justify-center items-center h-4 w-4 self-start rounded-full p-4 text-gray-100 font-medium mx-auto"
              >{{ capitalized(contact.name) }}</span
            >
          </td>
          <td class="text-left">{{ contact.name }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.tel }}</td>
          <td class="flex justify-around items-center mt-4">
            <button @click="handleContactEdit(contact)">
              <img
                src="@/assets/icons/ic-edit.svg"
                alt="Botão de editar contato"
              />
            </button>
            <button @click="handleContactDelete(contact)">
              <img
                src="@/assets/icons/ic-delete.svg"
                alt="Botão de deletar contato"
              />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getCurrentAgenda } from "@/store/agenda";
import { setCurrentContact } from "@/store/contact";
import { watchEffect } from "@vue/runtime-core";
export default {
  name: "Agenda",

  setup(_, { emit }) {
    const contacts = getCurrentAgenda();
    watchEffect(() => {
      isLast();
    });
    function capitalized(value) {
      return value[0].toUpperCase();
    }
    function randomColor() {
      return Math.floor(Math.random() * 16777215).toString(16);
    }
    function isLast(index) {
      return contacts.length - 1 === index;
    }
    function handleContactEdit(val) {
      setCurrentContact({ ...val });
      emit("editContact");
    }
    function handleContactDelete(val) {
      setCurrentContact({ ...val });
      emit("deleteContact");
    }
    return {
      contacts,
      capitalized,
      randomColor,
      emit,
      handleContactDelete,
      handleContactEdit,
      isLast,
    };
  },
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 5px;
  border-radius: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: #fa726863;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #fa7268;
}
.lastItem {
  background-color: white;
  animation: myfadeIn 10s;
}
.lastItem:hover {
  background-color: #fff3f2 !important;
}

@keyframes myfadeIn {
  0% {
    background-color: #fff3f2;
  }
  100% {
    background-color: #ffff;
  }
}
</style>

import { reactive } from "vue";

const state = reactive({
  currentContact: {},
});

export function setCurrentContact(contact) {
  state.currentContact = contact;
}

export function getCurrentContact() {
  return state.currentContact;
}

export default state;

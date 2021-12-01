import { reactive } from "vue";

const state = reactive({
  currentAgenda: [],
});

export function setCurrentAgenda(agenda) {
  state.currentAgenda.push(agenda);
}

export function getCurrentAgenda() {
  return state.currentAgenda;
}

export function editCurrentContact(contact) {
  const item = state.currentAgenda.findIndex(
    (value) => value.id === contact.id
  );
  state.currentAgenda.splice(item, 1, contact);
}

export function deleteCurrentContact(contact) {
  const item = state.currentAgenda.findIndex(
    (value) => value.id === contact.id
  );
  state.currentAgenda.splice(item, 1);
}
export function findContact(data) {
  const result = state.currentAgenda.filter(
    (value) => value.name.indexOf(data) > -1
  );
  return result;
}

export default state;

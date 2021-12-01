<template>
  <teleport to="body">
    <div
      v-if="state.isActive"
      class="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
      @click="handleModalToogle({ status: false })"
    >
      <div class="fixed mx-auto" :class="state.width">
        <div
          @click.stop
          class="flex flex-col overflow-hidden bg-white rounded-2xl animate__animated animate__fadeInDown animate__faster h-auto"
        >
          <div class="flex flex-col bg-white">
            <component :is="state.component" />
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import {
  defineAsyncComponent,
  onBeforeUnmount,
  onMounted,
  reactive,
} from "vue";
import useModal from "@/hooks/useModal";
const ModalNewContact = defineAsyncComponent(() =>
  import("@/components/ModalNewContact")
);
const ModalEditContact = defineAsyncComponent(() =>
  import("@/components/ModalEditContact")
);
const ModalDeleteContact = defineAsyncComponent(() =>
  import("@/components/ModalDeleteContact")
);
const DEFAULT_WIDTH = "w-96";
export default {
  name: "ModalFactory",
  components: {
    ModalNewContact,
    ModalEditContact,
    ModalDeleteContact,
  },
  setup() {
    const modal = useModal();
    const state = reactive({
      isActive: false,
      component: {},
      props: {},
      width: DEFAULT_WIDTH,
    });

    onMounted(() => {
      modal.listen(handleModalToogle);
    });

    onBeforeUnmount(() => {
      modal.off(handleModalToogle);
    });

    function handleModalToogle(payload) {
      if (payload.status) {
        state.component = payload.component;
        state.props = payload.props;
        state.width = payload.width ?? DEFAULT_WIDTH;
      } else {
        state.component = {};
        state.props = {};
        state.width = DEFAULT_WIDTH;
      }
      state.isActive = payload.status;
    }

    return {
      state,
      handleModalToogle,
    };
  },
};
</script>

<style lang="scss" scoped></style>

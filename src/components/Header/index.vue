<template>
  <header>
    <nav class="flex justify-between items-center mb-4">
      <img src="@/assets/icons/ic-logo.svg" alt="Logo Ubook" class="" />
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
      <label class="relative flex-1 max-w-7xl">
        <input
          class="p-3 w-full bg-main-graylilac outline-none"
          type="text"
          placeholder="Buscar..."
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 absolute top-3 right-3 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </label>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

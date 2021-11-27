<template>
  <div class="inline-block rounded-lg border">
    <table
      class="w-full text-sm text-main-bluegray bg-white text-left rounded-full"
    >
      <colgroup>
        <col span="1" style="width: 2%" />
        <col span="1" style="width: 26%" />
        <col span="1" style="width: 26%" />
        <col span="1" style="width: 15%" />
        <col span="1" style="width: 15%" />
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
        <tr class="border-b" v-for="(n, index) in 6" :key="index">
          <td colspan="1" class="p-2">
            <span
              class="flex justify-center items-center h-4 w-4 self-start rounded-full bg-red-400 p-4 text-white font-medium mx-auto"
              >A</span
            >
          </td>
          <td class="text-left">Alana</td>
          <td>alan@mail.com</td>
          <td>(11) 99999-9989</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>

<style scoped></style>

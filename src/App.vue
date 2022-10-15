<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TodoListItems from "./components/TodoListItems.vue";

const todoList = [
    { id: 1, value: "Learn Vue 3" },
    { id: 2, value: "Learn Vue Pinia" },
    { id: 2, value: "Learn Vite" },
];
</script>

<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>

    <TodoListItems :list-items="todoList" />
</template>

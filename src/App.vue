// App.vue - Componente Vue

<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="incrementCount">Incrementar</button>
    <button @click="decrementCount">Decrementar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    message() {
      return `Contador: ${this.count}`;
    },
  },
  methods: {
    incrementCount() {
      this.count++;
    },
    decrementCount() {
      this.count--;
    },
  },
};
</script>

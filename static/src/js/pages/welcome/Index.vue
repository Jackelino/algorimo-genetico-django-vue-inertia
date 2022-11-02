<template>
  <Head title="Algoritmo Genetico" />
  <div class="container my-5">
    <div class="row">
      <div class="text-white text-center my-5"><h1>Algoritmos genenticos</h1></div>
      <div class="row">
        <div class="col">
          <a class="text-decoration-none" href="/algosimle/">
            <div class="card card border-primary  bg-black shadow-lg">
              <div class="card-body">
                <h5 class="card-title text-light">Algoritmo Genetico simple</h5>
                This is some text within a card body.
              </div>
            </div>
          </a>

        </div>
        <div class="col">
          <a href="" class="text-decoration-none">
            <div class="card card border-primary shadow-lg bg-black">
              <div class="card-body">
                 <h5 class="card-title text-white">Proyecto</h5>
                This is some text within a card body.
              </div>
            </div>
          </a>

        </div>
      </div>
      <ul>
        <li v-for="ind in events"> {{ ind }}</li>
      </ul>
    </div>
  </div>

</template>

<script>
import { Head } from '@inertiajs/inertia-vue3';
export default {
  name: "Index",
  components: {
    Head
  },
  props: {
    events: Array,
    error: Object
  }
}
</script>

<style scoped>

</style>
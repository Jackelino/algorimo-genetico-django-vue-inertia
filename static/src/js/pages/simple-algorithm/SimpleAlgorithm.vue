<template>
  <Head title="Algoritmo Genetico simple" />
  <div class="container-fluid">
    <div class="text-white text-center my-3">
      <h1>Algoritmo Genetico simple</h1>
    </div>
    <div class="row">
      <div class="col-3">
        <div class="text-white text-center">
          <h4 class="mb-5">Datos</h4>
        </div>
        <div class="form">
          <form action="">
            <div class="data-chromosome">
              <div class="text-white">
                <h5 class="my-2">Chromosome data</h5>
              </div>
              <div class="row g-2">
                <div class="col-md">
                  <label for="customRange1" class="form-label">Example range</label>
                  <input type="range" class="form-range" v-model="chromosome.initialRank" id="customRange1">
                  <div class="form-floating mb-3">
                    <input type="number" class="form-control bg-dark text-white" v-model="chromosome.initialRank"
                           id="floatingInput"
                           placeholder="name@example.com">
                    <label for="floatingInput" class="text-white">initial rank</label>
                  </div>
                </div>
                <div class="col-md">
                  <label for="customRange1" class="form-label">Example range</label>
                  <input type="range" class="form-range" v-model="chromosome.endRank" id="customRange1">
                  <div class="form-floating mb-3">
                    <input type="number" class="form-control bg-dark text-white" v-model="chromosome.endRank"
                           id="floatingInput"
                           placeholder="name@example.com">
                    <label for="floatingInput" class="text-white">End rank</label>
                  </div>
                </div>
              </div>
            </div>
            <hr class="text-white">
            <div class="data-general">
              <div class="form-floating mb-3">
                <input type="number" class="form-control bg-dark text-white" v-model="general.population"
                       id="floatingInput"
                       placeholder="name@example.com">
                <label for="floatingInput" class="text-white">Population</label>
              </div>
              <div class="form-floating mb-3">
                <input type="number" class="form-control bg-dark text-white" v-model="general.crossoverRate"
                       id="floatingPassword"
                       placeholder="Password">
                <label for="floatingPassword" class="text-white">Crossover Rate</label>
              </div>
              <div class="form-floating mb-3">
                <input type="number" class="form-control bg-dark text-white" v-model="general.mutationRate"
                       id="floatingPassword"
                       placeholder="Password">
                <label for="floatingPassword" class="text-white">Mutation Rate</label>
              </div>
              <div class="form-floating mb-3">
                <select class="form-select bg-dark text-white" v-model="general.optimization" id="floatingSelect"
                        aria-label="Floating label select example">
                  <option selected disabled>--</option>
                  <option value="1">Max</option>
                  <option value="2">Min</option>
                </select>
                <label for="floatingSelect" class="text-white">Optimization</label>
              </div>
              <div class="form-floating mb-3">
                <select class="form-select bg-dark text-white" v-model="general.typeCrossover" id="floatingSelect"
                        aria-label="Floating label select example">
                  <option selected disabled>--</option>
                  <option value="1">Elitista</option>
                  <option value="2">Aleatoria</option>
                </select>
                <label for="floatingSelect" class="text-white">Type crossover</label>
              </div>
              <div class="form-floating mb-3">
                <input type="number" class="form-control bg-dark text-white" v-model="general.generation"
                       id="floatingPassword"
                       placeholder="Password">
                <label for="floatingPassword" class="text-white">Generation</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col-5 ">
        <div class="text-white text-center">
          <h4 class="mb-5">Record History</h4>
        </div>
        <table class="table table-bordered">
          <thead>
          <tr>
            <th scope="col" class="text-white">Gen</th>
            <th scope="col" class="text-white">Name</th>
            <th scope="col" class="text-white">Score</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="n in 10">
            <th scope="row" class="text-white">{{ n }}</th>
            <td class="text-white">Mark</td>
            <td class="text-white">Otto</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col-4">
        <div class="text-white text-center">
          <h4 class="mb-5">Grafica</h4>
        </div>
        <div class="bg">
          <Chart/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "../components/Chart";
import { Head } from '@inertiajs/inertia-vue3';
export default {
  name: "SimpleAlgorithm",
  components: {
    Head,
    Chart
  },
  data() {
    return {
      chromosome: {
        initialRank: 0,
        endRank: 0
      },
      general: {
        population: null,
        crossoverRate: null,
        mutationRate: null,
        optimization: null,
        typeCrossover: null,
        generation: null
      }
    }
  }

}
</script>

<style scoped>

</style>
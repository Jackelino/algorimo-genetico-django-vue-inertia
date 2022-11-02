<template>
  <Line
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
  />
</template>

<script>
import {Line} from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
)

export default {
  name: "Chart",
  components: {
    Line
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {
      }
    },
    plugins: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March','January', 'February', 'March','January', 'February', 'March'],
        datasets: [
          {
            label: 'Dataset',
            data: [40, 20, 12,40, 20, 12,40, 20, 12],
            backgroundColor: '#f87979',
            borderColor: '#f87979',
            pointStyle: 'circle',
            pointRadius: 5,
            pointHoverRadius: 10
          }
        ],

      },
      chartOptions: {
        responsive: true,

      }
    }
  }
}
</script>

<style scoped>

</style>
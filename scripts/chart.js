
const ctx = document.getElementById('chart');
const ctx2 = document.getElementById('chart2');
const ctx3 = document.getElementById('chart3');
const ctx4 = document.getElementById('chart4');
charts = [ctx, ctx2, ctx3, ctx4];
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
    datasets: [{
      label: 'Minutos Entrenado esta Semana',
      data: [28, 22, 32, 40, 18, 20, 30],
      borderWidth: 1,
      backgroundColor: '#542BE3'
    }]
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
  }
});
new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Proteinas', 'Carbohidratos', 'Fibra', 'Grasas', 'Vitaminas', 'Minerales'],
    datasets: [{
      label: 'Gramos Consumidos /semana',
      data: [28, 22, 32, 40, 18, 20, 30],
      backgroundColor: [
          '#2f0',
          '#a2a',
          '#fac',
          '#1aa',
          '#22f',
          '#f22',
          '#fa2'
        ],
      borderWidth: 1,
    }]
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
  }
});
const data = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};
new Chart(ctx3, {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    },
    maintainAspectRatio: false,
    responsive: true,
  }
});
console.log('holaa')


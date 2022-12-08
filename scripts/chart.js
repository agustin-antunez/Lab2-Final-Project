const ctx = document.getElementById('chart');
const ctx2 = document.getElementById('chart2');
const ctx3 = document.getElementById('chart3');
const ctx4 = document.getElementById('chart4');
console.log('holaa')
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
    
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Proteinas', 'Carbohidratos', 'Fibra', 'Grasas', 'Vitaminas', 'Minerales'],
      datasets: [{
        label: 'Comidas',
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
    
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
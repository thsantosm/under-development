const ctx = document.getElementById('myChart');
const info = ['Depositos', 'PIX', 'TRANSFERÊNCIAS']
const element = document.getElementById('cash');
const cash = '0'
var text = document.createTextNode(cash);
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: info,
    datasets: [{
      label: 'Movimentações realizadas',
      data: [12, 19, 3],
      borderWidth: 1
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


element.appendChild(text);

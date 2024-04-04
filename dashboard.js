/* globals Chart:false, feather:false */


(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })
})();

function drawChart1(canvasId, datasetId){
  var ctx = document.getElementById(canvasId)
  var table = document.getElementById(datasetId);
  var tableData = [];
  var tableLabels = [];
  for (var i=1, row; row = table.rows[i]; i++){
    console.log(row.id)
    tableData[i-1] = parseInt(row.cells[4].textContent);
    tableLabels[i-1]= row.id;
      }
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: tableLabels,
      datasets: [{
        data: tableData,
        lineTension: 0,
        backgroundColor: '#12579A',
        borderColor: '#007bff',
        borderWidth: 0,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            suggestedMax: 100,
          },
        }]
      },
      legend: {
        display: false
      }
    }
  })
}

function drawChart2(canvasId, datasetId){
  var ctx = document.getElementById(canvasId)
  var table = document.getElementById(datasetId);
  var tableData = [];
  var tableLabels = [];
  for (var i=1, row; row = table.rows[i]; i++){
    console.log(row.id)
    tableData[i-1] = parseInt(row.cells[4].textContent);
    tableLabels[i-1]= row.id;
      }
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: tableLabels,
      datasets: [{
        data: tableData,
        lineTension: 0,
        backgroundColor: '#1791C4',
        borderColor: '#007bff',
        borderWidth: 0,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            suggestedMax: 100,
          },
        }]
      },
      legend: {
        display: false
      }
    }
  })
}

function drawChart3(canvasId, datasetId){
  var ctx = document.getElementById(canvasId)
  var table = document.getElementById(datasetId);
  var tableData = [];
  var tableLabels = [];
  for (var i=1, row; row = table.rows[i]; i++){
    console.log(row.id)
    tableData[i-1] = parseInt(row.cells[4].textContent);
    tableLabels[i-1]= row.id;
      }
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: tableLabels,
      datasets: [{
        data: tableData,
        lineTension: 0,
        backgroundColor: '#34A682',
        borderColor: '#007bff',
        borderWidth: 0,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            suggestedMax: 100,
          },
        }]
      },
      legend: {
        display: false
      }
    }
  })
}

function drawChart4(canvasId, datasetId){
  var ctx = document.getElementById(canvasId)
  var table = document.getElementById(datasetId);
  var tableData = [];
  var tableLabels = [];
  for (var i=1, row; row = table.rows[i]; i++){
    console.log(row.id)
    tableData[i-1] = parseInt(row.cells[4].textContent);
    tableLabels[i-1]= row.id;
      }
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: tableLabels,
      datasets: [{
        data: tableData,
        lineTension: 0,
        backgroundColor: '#81BD41',
        borderColor: '#007bff',
        borderWidth: 0,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            suggestedMax: 100,
          },
        }]
      },
      legend: {
        display: false
      }
    }
  })
}

function drawChart5(canvasId, datasetId){
  var ctx = document.getElementById(canvasId)
  var table = document.getElementById(datasetId);
  var tableData = [];
  var tableLabels = [];
  for (var i=1, row; row = table.rows[i]; i++){
    console.log(row.id)
    tableData[i-1] = parseInt(row.cells[4].textContent);
    tableLabels[i-1]= row.id;
      }
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: tableLabels,
      datasets: [{
        data: tableData,
        lineTension: 0,
        backgroundColor: '#C4D52F',
        borderColor: '#007bff',
        borderWidth: 0,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            suggestedMax: 100,
          },
        }]
      },
      legend: {
        display: false
      }
    }
  })
}



window.onload = function(){
  drawChart1('tsChart', 'tsTable');
  drawChart2('zssChart', 'zssTable');
  drawChart3('deChart', 'deTable');
  drawChart4('dcChart', 'dcTable');
  drawChart5('adChart', 'adTable');
}





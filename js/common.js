$(document).ready(function() { 


 function loadCmbCategories(){
  var strCmd ='',
  ui_cmbCategories = $("#cmbCategories");

  BBVAService.getCategories(function(data){
    data.forEach(function(item){
      strCmd +=  "<optgroup value='"+ item.code +"' label='"+ item.description +"'>";
      item.subcategories.forEach(function(subItem){
        strCmd +=  " <option value='"+ subItem.code +"'>"+ subItem.description +"</option>";
      });
      strCmd +=  "</optgroup>";
    });


    ui_cmbCategories.html(strCmd);
    ui_cmbCategories.select2();

    ui_cmbCategories.select2('val', 'mx_fastfood');
  });    
};
loadCmbCategories();




function loadCmbZipCodes(){
  var zipcodes,
  strCmd ='',
  ui_cmbZipCodes = $("#cmbZipCodes");

  // strCmd +=  "<optgroup value='' label='ZipCodes'>";
  zipcodes = BBVAService.getFilteredZipcodes();
  if (zipcodes.length>1){
    zipcodes.forEach(function(item){
      strCmd +=  " <option value='"+ item +"'>"+ item +"</option>";
    })
  }
  // strCmd +=  "</optgroup>"; 

  ui_cmbZipCodes.html(strCmd);
  ui_cmbZipCodes.select2();
  ui_cmbZipCodes.select2('val', '06010');
};
loadCmbZipCodes();


});


function restartCharts(){

};

function updateChartAVG(men_avg,wom_avg){
  var chart_avg = c3.generate({
    bindto: '#chart_avg',
    legend: {
      show: true
    },
    data: {
      columns: [
      ['men', men_avg],
      ['women', wom_avg]
      ],
      type: 'donut'
    },
    donut:{
      title:'Avg',
      width: 20,
      label: {
        show: false,
      }
    },
    color: {
      pattern: ['#303FE3', '#E841CF']
    },
    size: {
      width: 150,
      height: 120
    }
  });
};

function updateChartNUM(men_num_payments,wom_num_payments){
 var chart_num = c3.generate({
  bindto: '#chart_num',
  legend: {
    show: false
  },
  data: {
    columns: [
    ['men', men_num_payments],
    ['women', wom_num_payments]
    ],
    type: 'bar'
  },
  color: {
    pattern: ['#303FE3', '#E841CF']
  },
  bar: {
    title:'Avg',
    width: {
      ratio: 0.3
    }
  },
  axis: {
    x: {
      label: {
        text: 'Num. of payments',
        position: 'outer-top'
      }
    }
    // ,
    // y: {
    //   tick: {
    //     values: [50, 300, 500, 800, 1000, 1500,5000, 10000]
    //   }
    // }
  },
  size: {
    width: 150,
    height: 120
  }
});
};

function updateChartDIST(arrAvg,arrNum){
 var chart = c3.generate({
  bindto: '#chart_histo',
  data: {
    columns: [
      arrAvg,
      arrNum
    ],
    types: {
      avg: 'bar',
    }
  },
  axis: {
    rotated: true
  },
  size: {
    width: 300,
    height: 120
  }
});
};

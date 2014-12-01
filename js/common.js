$(document).ready(function() { 


 function loadCmbCategories(){
  var strCmd ='',
  ui_cmbCategories = $("#cmbCategories");

  BBVAService.getCategories(function(data){
    data.forEach(function(item){
      strCmd +=  "<optgroup value='"+ item.code +"' label='"+ item.description +"'>";
      item.subcategories.forEach(function(subItem){
        strCmd +=  " <option value='"+ subItem.code +"'>"+ subItem.code + " - " + subItem.description +"</option>";
      });
      strCmd +=  "</optgroup>";
    });


    ui_cmbCategories.html(strCmd);
    ui_cmbCategories.select2();

    ui_cmbCategories.select2('val', 'mx_mall');
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

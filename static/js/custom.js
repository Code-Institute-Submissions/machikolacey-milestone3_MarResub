  $(document).ready(function() {

    $(".button-collapse").sideNav();
    $('select').material_select();

    $('.searchcafe').keyup(function(event) {
        return $.getJSON(
            '/cafe_autocomplete/'+$('.searchcafe').attr('sortvalue'), 
            function (data) {
                return process(data);
            });
    });  

    $('.sort').click(function(event) {
    return $.getJSON(
        '/sort_memories/'+$(this).val(), 
            function (data) {
            return process(data);
            });
    });  

    
  });

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie(cname) {
  var val=getCookie(cname);
  if (val != "") {
   return true;
  } else {
   return false;
  }
}


 function autoCompleteCafe (cafenames){
    let data = {};
    let dataArray = [];

    cafenames.forEach(function (cafename) {
       data[cafename.cafe_name] = "https://res.cloudinary.com/machikolacey/image/upload/v1597350037/milestone3/Julien-Plumart-Cafe_oztqap.jpg";
       dataArray.push(cafename.cafe_name.toLowerCase());
    });

 actionAutoComplete(data, dataArray);

}

function autoCompleteArea(areanames){
    let data = {};
    let dataArray = [];
    areanames.forEach(function (areaname) {
       data[areaname.name] = "https://res.cloudinary.com/machikolacey/image/upload/v1597350037/milestone3/Julien-Plumart-Cafe_oztqap.jpg";  
       dataArray.push(areaname.name.toLowerCase());
    });

    actionAutoComplete(data, dataArray);

}



function actionAutoComplete(data, dataArray ){

  $('input.autocomplete').autocomplete({
      data: data,
      minLength: 0
    });
    $('input.autocomplete').on('blur', function(){
        if (!dataArray.includes($(this).val().toLowerCase()) ){
         $(this).val('');
         $('#flash-message')
         .slideDown(function() {
                setTimeout(function() {
                $('#flash-message').slideUp();
                }, 3000);
            });
        }
    });
 
 
}
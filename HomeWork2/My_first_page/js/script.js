$(function() {
    let header = $('.header');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
      } else {
       header.removeClass('header_fixed');
      }
    });
   });

  //  var reg = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

function postEmail () {

  var str = document.getElementById("email_input").value;
  if (document.getElementById("email_input").value === "") {
    alert("Please enter your email.")
  } else {
    alert(str);
  }
  
}



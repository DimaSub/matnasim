$(document).ready(function(){
    $(".submit").one("click", function() {
        $(".submit").css('background', '#aac8d3');
        $(".login").append("<div class='newoption'>באיזה סוג  משתמש הינך רוצה להיכנס</div>");
        $(".login").append("<input type='radio' class='logtype' name='logtype' value='מנהלן'>");
        $(".login").append("<label for='מנהלן'>מנהלן</label><br>");
        $(".login").append("<input type='radio' class='logtype' name='logtype' value='רכש'>");
        $(".login").append("<label for='כ'>רכש</label><br>");
        $(".login").append("<input type='radio' class='logtype' name='logtype' value='מנהלן'>");
        $(".login").append("<label for='מנהלן'>מנהלן</label><br>");
        $(".login").append("<button class='loginbtn' type='button'>הכנס/י</button>");
      });
})
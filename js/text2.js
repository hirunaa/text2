$(document).ready(function(){
    let usernameLength = 0;
    let passwordLength = 0;
    $("._2hvTZ, .pexuQ, .zyHYP").on("input", function(e){
        if($(this).attr("name")==="username")
        { 
            usernameLength = $(this).val().length;
            console.log(usernameLength);
            if($(this).val()!="")
            {
                $(".f0n8F:eq(0)").addClass("FATdn");
            }
            else $(".f0n8F:eq(0)").removeClass("FATdn");
        }
        else if($(this).attr("name")==="password")
        {
            passwordLength = $(this).val().length;
            console.log(passwordLength);
            if($(this).val()!="")
            {
                $(".f0n8F:eq(1)").addClass("FATdn"); 
            }
            else $(".f0n8F:eq(1)").removeClass("FATdn");
        }

        if(usernameLength>=1 && passwordLength>=6)
        {
            $(".sqdOP, .L3NKy, .y3zKF").removeAttr("disabled");
        }
        else $(".sqdOP, .L3NKy, .y3zKF").attr("disabled", "");
    });


});
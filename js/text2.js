$(document).ready(function(){
    let usernameId = 0;
    let idPassword = 0;
    $("._2hvTZ, .pexuQ, .zyHYP").on("input", function(e){
        if($(this).attr("name")==="username")
        { 
            usernameId = $(this).val();
            console.log(usernameId);
            if($(this).val()!="")
            {
                $(".f0n8F:eq(0)").addClass("FATdn");
            }
            else $(".f0n8F:eq(0)").removeClass("FATdn");
        }
        else if($(this).attr("name")==="password")
        {
            idPassword = $(this).val();
            console.log(idPassword);
            if($(this).val()!="")
            {
                $(".f0n8F:eq(1)").addClass("FATdn"); 
            }
            else $(".f0n8F:eq(1)").removeClass("FATdn");
        }

        if(usernameId.length>=1 && idPassword.length>=6)
        {
            $(".sqdOP, .L3NKy, .y3zKF").eq(0).removeAttr("disabled");
        }
        else $(".sqdOP, .L3NKy, .y3zKF").eq(0).attr("disabled", "");
    });


});
$(document).ready(function(){
    let usernameId = 0;
    let idPassword = 0;
    
    let userList= ["asdfasdf", "qwerasdf"];
    let passwordList = ["123456", "654321"];

    $("._2hvTZ, .pexuQ, .zyHYP").on("input", function(e){
        if($(this).attr("name")==="username")
        { 
            usernameId = $(this).val();
            if($(this).val()!="")
            {
                $(".f0n8F:eq(0)").addClass("FATdn");
            }
            else $(".f0n8F:eq(0)").removeClass("FATdn");
        }
        else if($(this).attr("name")==="password")
        {
            idPassword = $(this).val();
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

    $(".sqdOP, .L3NKy, .y3zKF").eq(0).on("click", function(e){
        var userListIndex=-1;
        var passwordListIndex=-2;
        for(var i=0; i<userList.length; i++)
        {
            if(userList[i]==usernameId)
            {
                userListIndex=i;
            }
            
            if(passwordList[i]==idPassword)
            {
                passwordListIndex=i;
            }
            
        }
        if(userListIndex==passwordListIndex)
        {
            e.preventDefault();
            console.log("ㅇㅇ");
        }
        else
        {
            e.preventDefault();
            console.log("ㄴㄴ");
        }
    });


});
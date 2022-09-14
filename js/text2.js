$(document).ready(function(){
    let usernameId = 0;
    let idPassword = 0;
    
    let userList= ["asdfasdf", "qwerasdf"];
    let passwordList = ["123456", "654321"];
    function inputFocusInit(){
        $("._9GP1n").removeClass("HlU5H");
        $("._2hvTZ, .pexuQ, .zyHYP").removeClass("focus-visible");
        $("._2hvTZ, .pexuQ, .zyHYP").removeAttr("data-focus-visible-added");
    }
    $("._2hvTZ, .pexuQ, .zyHYP").on("focus", function(){
        inputFocusInit();
        if($(this).attr("name")==="username")
        {
            $("._9GP1n:eq(0)").addClass("HlU5H");
            $(this).addClass("focus-visible");
            $(this).attr("data-focus-visible-added","");
        }
        if($(this).attr("name")==="password")
        {
            $("._9GP1n:eq(1)").addClass("HlU5H");
            $(this).addClass("focus-visible");
            $(this).attr("data-focus-visible-added","");
        }
    });
    $("._2hvTZ, .pexuQ, .zyHYP").on("blur",function(){
        inputFocusInit();
    });
    $("._2hvTZ, .pexuQ, .zyHYP").on("input", function(){
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
            //e.preventDefault();
            console.log("ㅇㅇ");
            $(".eiCW-").remove();
        }
        else
        {
            e.preventDefault();
            console.log("ㄴㄴ");
            $("#facebookLogin").eq(0).after(
                '<div class="eiCW-"><p aria-atomic="true" data-testid="login-error-message" id="slfErrorAlert" role="alert">잘못된 비밀번호입니다. 다시 확인하세요.</p></div>');
        }
    });


});
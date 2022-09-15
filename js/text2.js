$(document).ready(function(){
    let usernameId = 0;
    let idPassword = 0;
    
    let userList= ["asdfasdf", "qwerasdf", "qwerqwer"];
    let passwordList = ["123456", "654321", "0246810"];

    var inputBox = $("._2hvTZ, .pexuQ, .zyHYP");
    var loginButton = $(".sqdOP, .L3NKy, .y3zKF");
    

    function inputFocusInit(){
        $(".inputContainer").removeClass("inputFocus");
        inputBox.removeClass("focus-visible");
        inputBox.removeAttr("data-focus-visible-added");
    }
    inputBox.on("focus", function(){
        inputFocusInit();
        if($(this).attr("name")==="username")
        {
            $(".inputContainer:eq(0)").addClass("inputFocus");
            $(this).addClass("focus-visible");
            $(this).attr("data-focus-visible-added","");
        }
        if($(this).attr("name")==="password")
        {
            $(".inputContainer:eq(1)").addClass("inputFocus");
            $(this).addClass("focus-visible");
            $(this).attr("data-focus-visible-added","");
        }
    });
    inputBox.on("blur",function(){
        inputFocusInit();
    });
    inputBox.on("input", function(){
        if($(this).attr("name")==="username")
        { 
            usernameId = $(this).val();
            if($(this).val()!="")
            {
                $(".idPasswordInput:eq(0)").addClass("placeholderScale");
            }
            else $(".idPasswordInput:eq(0)").removeClass("placeholderScale");
        }
        else if($(this).attr("name")==="password")
        {
            idPassword = $(this).val();
            if($(this).val()!="")
            {
                $(".idPasswordInput:eq(1)").addClass("placeholderScale"); 
            }
            else $(".idPasswordInput:eq(1)").removeClass("placeholderScale");
        }

        if(usernameId.length>=1 && idPassword.length>=6)
        {
            loginButton.eq(0).removeAttr("disabled");
        }
        else loginButton.eq(0).attr("disabled", "");
    });

    loginButton.eq(0).on("click", function(e){
        var userListIndex=-1;
        var passwordListIndex=-2;
        var loginErrorAlert = $(".eiCW-");

        loginErrorAlert.remove();
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
            //console.log("ㅇㅇ");
            loginErrorAlert.remove();
        }
        else if(userListIndex==-1)
        {
            e.preventDefault();
            $("#facebookLogin").after(
                '<div class="eiCW-"><p aria-atomic="true" data-testid="login-error-message" id="slfErrorAlert" role="alert">입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다.'
                +' 사용자 이름을 확인하고 다시 시도하세요.</p></div>');
        }
        else
        {
            e.preventDefault();
            //console.log("ㄴㄴ");
            $("#facebookLogin").after(
                '<div class="eiCW-"><p aria-atomic="true" data-testid="login-error-message" id="slfErrorAlert" role="alert">잘못된 비밀번호입니다. 다시 확인하세요.</p></div>');
        }
    });


});
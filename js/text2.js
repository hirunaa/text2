$(document).ready(function(){
    console.log("asdfasdf");
    $("._2hvTZ, .pexuQ, .zyHYP").on("input", function(e){
        if($(this).attr("name")==="username")
        {
            if($(this).val()!="")
            {
                console.log("dd");
                $("#userName").text("");
                
            }
            else $("#userName").text("전화번호, 사용자 이름 또는 이메일");
        }
        else if($(this).attr("name")==="password")
        {
            if($(this).val()!="")
            {
                console.log("dd");
                $("#passWord").text("");
                
            }
            else $("#passWord").text("비밀번호");
        }
    });
});
$(document).ready(function(){

    $("._2hvTZ, .pexuQ, .zyHYP").on("input", function(e){
        if($(this).attr("name")==="username")
        {
            if($(this).val()!="")
            {
                $(".f0n8F:eq(0)").addClass("FATdn");   
            }
            else $(".f0n8F:eq(0)").removeClass("FATdn");
        }
        else if($(this).attr("name")==="password")
        {
            if($(this).val()!="")
            {
                $(".f0n8F:eq(1)").addClass("FATdn"); 
            }
            else $(".f0n8F:eq(1)").removeClass("FATdn");
        }
    });
});
var women = [
    ['Madam','photos/rangiku_matsumoto.jpg',"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","With Love, Someone.","Dear Madam,"],
]
var wom;
$(document).ready(function(){
    $("#target").submit(function(event){
        event.preventDefault();
        let text = $("#wom_name").val();
        console.log(text);
        let flag = false;
        women.forEach(element => {
            if($.trim(element[0])==text){
            $(".overlay").fadeOut("slow",function(){
                $(".overlay").removeClass();
                $(".overlay").css({"display":"none"});
            });
            flag = true;
            wom = element;
                $("#wom").attr("src",wom[1]);
                $("#dear").html(wom[4]);
                $(".message").html(wom[2]);
                $(".from").html(wom[3]);
        }
        });
        if(!flag) alert("Sorry, but we do not know you...");
        
    });
  
});
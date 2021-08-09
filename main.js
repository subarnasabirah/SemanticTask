$(document).ready(function (){

    $(".fa-search").click(function(){
        $(".icon").toggleClass("active");
        $("input[type='text']").toggleClass("active");
    });

    // $(".show").click(function (){
    //     $(".show-area").css("display", "block");
    // });
    // $(".hide").click(function (){
    //     $(".show-area").css("display", "none");
    // });
    $("#show").click(function (){
        $("#show-area").removeClass("d-none");
    });
    $("#hide").click(function (){
        $("#show-area").addClass("d-none");
    });

})
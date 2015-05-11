 $(function () {

      });

function showSearchMPG(){
    $(".search-option-mpg").css("display","block");
    $(".search-option-type").css("display","none");
    $("#btn-mpg").removeClass("btn-search-none-selected");
    $("#btn-mpg").addClass("btn-search-selected");
    
    $("#btn-type").removeClass("btn-search-selected");
    $("#btn-type").addClass("btn-search-none-selected")
}

function showSearchType(){
    $(".search-option-type").css("display","block");
    $(".search-option-mpg").css("display","none");
    $("#btn-type").removeClass("btn-search-none-selected");
    $("#btn-type").addClass("btn-search-selected");
    
     $("#btn-mpg").removeClass("btn-search-selected");
    $("#btn-mpg").addClass("btn-search-none-selected")
}

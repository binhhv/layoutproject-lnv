//$(document).on('click', '.panel-heading span.clickable', function (e) {
//    var $this = $(this);
//    if (!$this.hasClass('panel-collapsed')) {
//        $this.parents('.panel').find('.panel-body').slideUp();
//        $this.addClass('panel-collapsed');
//        $this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
//    } else {
//        $this.parents('.panel').find('.panel-body').slideDown();
//        $this.removeClass('panel-collapsed');
//        $this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
//    }
//});
//$(document).on('click', '.panel div.clickable', function (e) {
//    var $this = $(this);
//    if (!$this.hasClass('panel-collapsed')) {
//        $this.parents('.panel').find('.panel-body').slideUp();
//        $this.addClass('panel-collapsed');
//        $this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
//    } else {
//        $this.parents('.panel').find('.panel-body').slideDown();
//        $this.removeClass('panel-collapsed');
//        $this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
//    }
//});
//$(document).ready(function () {
//    $('.panel-heading span.clickable').click();
//    $('.panel div.clickable').click();
//});
/* pagination plugin */
$.fn.pageMe = function(opts){
    var $this = this,
        defaults = {
            perPage: 7,
            showPrevNext: false,
            numbersPerPage: 1,
            hidePageNumbers: false
        },
        settings = $.extend(defaults, opts);
    
    var listElement = $this;
    var perPage = settings.perPage; 
    var children = listElement.children();
    var pager = $('.pagination');
    
    if (typeof settings.childSelector!="undefined") {
        children = listElement.find(settings.childSelector);
    }
    
    if (typeof settings.pagerSelector!="undefined") {
        pager = $(settings.pagerSelector);
    }
    
    var numItems = children.size();
    var numPages = Math.ceil(numItems/perPage);

    pager.data("curr",0);
    
    if (settings.showPrevNext){
        $('<li><a href="#" class="prev_link">«</a></li>').appendTo(pager);
    }
    
    var curr = 0;
    while(numPages > curr && (settings.hidePageNumbers==false)){
        $('<li><a href="#" class="page_link">'+(curr+1)+'</a></li>').appendTo(pager);
        curr++;
    }
  
    if (settings.numbersPerPage>1) {
       $('.page_link').hide();
       $('.page_link').slice(pager.data("curr"), settings.numbersPerPage).show();
    }
    
    if (settings.showPrevNext){
        $('<li><a href="#" class="next_link">»</a></li>').appendTo(pager);
    }
    
    pager.find('.page_link:first').addClass('active');
    pager.find('.prev_link').hide();
    if (numPages<=1) {
        pager.find('.next_link').hide();
    }
  	pager.children().eq(0).addClass("active");
    
    children.hide();
    children.slice(0, perPage).show();
    
    pager.find('li .page_link').click(function(){
        var clickedPage = $(this).html().valueOf()-1;
        goTo(clickedPage,perPage);
        return false;
    });
    pager.find('li .prev_link').click(function(){
        previous();
        return false;
    });
    pager.find('li .next_link').click(function(){
        next();
        return false;
    });
    
    function previous(){
        var goToPage = parseInt(pager.data("curr")) - 1;
        goTo(goToPage);
    }
     
    function next(){
        goToPage = parseInt(pager.data("curr")) + 1;
        goTo(goToPage);
    }
    
    function goTo(page){
        var startAt = page * perPage,
            endOn = startAt + perPage;
        
        children.css('display','none').slice(startAt, endOn).show();
        
        if (page>=1) {
            pager.find('.prev_link').show();
        }
        else {
            pager.find('.prev_link').hide();
        }
        
        if (page<(numPages-1)) {
            pager.find('.next_link').show();
        }
        else {
            pager.find('.next_link').hide();
        }
        
        pager.data("curr",page);
       
        if (settings.numbersPerPage>1) {
       		$('.page_link').hide();
       		$('.page_link').slice(page, settings.numbersPerPage+page).show();
    	}
      
      	pager.children().removeClass("active");
        pager.children().eq(page).addClass("active");
    
    }
};
/* end plugin */

$(document).ready(function(){
    
  $('#accordion').pageMe({pagerSelector:'#myPager',childSelector:'.panel',showPrevNext:false,hidePageNumbers:false,perPage:6});
    
});

$(document).ready(function () {
     $('.panel-heading .panel-title a .container').addClass('expand-panel');
 $('a[data-toggle="collapse"]').click(function () {
     $('.panel-heading .panel-title a .container').removeClass('collapsed-panel');
     //alert(123);
     $(this).children().toggleClass('collapsed-panel');
//     if($(this).find('collapsed')){
//         alert(123);
//     }
    if(!$(this).hasClass('collapsed')){
        var attr = $(this).attr('aria-expanded');
        if (typeof attr !== typeof undefined && attr !== false) {
                  //$('.panel-heading .panel-title a.collapsed .container').toggleClass('expand-panel');
               // alert(123);
                $(this).children().removeClass('collapsed-panel');//.toggleClass('expand-panel');
            }
        
    }
     
      //$('.panel-heading .panel-title a.collapsed .container').toggleClass('expand-panel');
 //$(this).find('span.toggle-icon').toggleClass('glyphicon-collapse-up glyphicon-collapse-down');
 });
  

 })

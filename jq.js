$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      rtl:true,
      items:4,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true
  });
  // *******************main navigation *************
    var settime = {};
  $("#top-menu li").hover(function(){
    var element = $(this);
    var SetTimeProperty = element.attr("data-settime");
    clearTimeout(settime[SetTimeProperty]);
    settime[SetTimeProperty] = setTimeout(function(){
        $(" > ul " , element).fadeIn();
        $(" > div ", element).fadeIn();
      }
      ,300)
  },function(){
    var element = $(this);
    var SetTimeProperty = element.attr("data-settime");
    clearTimeout(settime[SetTimeProperty]);
    settime[SetTimeProperty] = setTimeout(function(){
        $(" > ul" , element).fadeOut();
        $(" > div", element).fadeOut();
      }
      ,300)
  })
  // *******************slider*****************
  var slider = $("#slider");
  var sliderItem = slider.find("#slider_item_img .show_item");
  var sliderli = slider.find("#li_nav li");
  var nextSlider = 1;
  var totalItems = sliderItem.length;
  function getSlider(){
    if(nextSlider > totalItems){
      nextSlider = 1;
    } else if(nextSlider < 1){
      nextSlider = totalItems;
    }
    sliderItem.fadeOut(0);
    sliderItem.eq(nextSlider - 1).fadeIn();
    sliderli.removeClass("active");
    sliderli.eq(nextSlider - 1).addClass("active");
    nextSlider ++;
  }
  $(".icon_next_show_left").click(function(){
    showNextItem();
  })
  function showNextItem(){
    getSlider();
  }

  $(".icon_prev_show_right").click(function(){
    showPrevItem();
    })
    function showPrevItem(){
      nextSlider -= 2;
      getSlider();
    }
  // ************** sub slider ********************
  $("#li_nav li",slider).click(function(){
    var number = $(this).index();
    nextSlider = number + 1;
    getSlider();
  })
  //*************set interval for slider **********
  getSlider();
  var startSlider = 4000;
   setInterval(getSlider,startSlider);

   //******************* counter clock  ***********************
      var clock;
			clock = $('.clock').FlipClock({
		        clockFace: 'DailyCounter',
		        autoStart: false ,
		        callbacks: {
		        	stop: function() {
                $('.message').fadeIn();
                $('.clock').fadeOut();
                $('.special_offer').css('opacity',0.2);
                $('#inner_content_left').css('opacity',0.2);
                $('.main_price').css('opacity',0.2);
                $('.offered_price').css('opacity',0.2);
                $('a_tag').addClass('inactiveLink')
		        	}
		        }
		    });
				clock.setTime(10000);
		    clock.setCountdown(true);
        clock.start();
      //*******************advanced slider*****************
  var Advancedslider = $("#AdvancedSlider");
  var AdvancedsliderItem = Advancedslider.find("#Right_Content .advanced_items");
  var Advancedsliderli = Advancedslider.find("#Left_Nav li");
  var AdvancednextSlider = 1;
  var AdvancedtotalItems = AdvancedsliderItem.length;
  function getAdvancedSlider(){
    if(AdvancednextSlider > AdvancedtotalItems){
      AdvancednextSlider = 1;
    } else if(AdvancednextSlider < 1){
      AdvancednextSlider = AdvancedtotalItems;
    }
    AdvancedsliderItem.fadeOut(0);
    AdvancedsliderItem.eq(AdvancednextSlider - 1).fadeIn();
    Advancedsliderli.removeClass("active");
    Advancedsliderli.eq(AdvancednextSlider - 1).addClass("active");
    AdvancednextSlider ++;
  }
  // ************** sub slider ********************
  $("#Left_Nav li",Advancedslider).click(function(){
    var number = $(this).index();
    AdvancednextSlider = number + 1;
    getAdvancedSlider();
  })
  //*************set interval for slider **********
  getAdvancedSlider();
  var AdvancedstartSlider = 4000;
   setInterval(getAdvancedSlider,AdvancedstartSlider);

   //************************ start tophit *******************/
   var tophit = $(".tophit");
   var tophitUl = tophit.find(".slider-content ul");
   var tophitLi = tophitUl.find("li");
   var tophitLiNum = tophitLi.length;
   var tophitShow = Math.ceil(tophitLiNum/3);
   var maxMargin = -(tophitShow - 2) * 760;
   function getTophitSlider(position){
    var currentMarginUl = tophitUl.css("margin-right");
    currentMarginUl = parseInt(currentMarginUl);
    if (position == "next") {
     var newMargin = currentMarginUl - 760;
    }
    else if (position == "prev"){
      var newMargin = currentMarginUl + 760;
    }
    if (newMargin < maxMargin) {
      newMargin = 0;
    }else if (newMargin > 0) {
      newMargin = maxMargin;
    }
    tophitUl.animate({"margin-right":newMargin},1500);
   }

$(".next-icon").click(function(){
  getTophitSlider("next");
});
$(".prev-icon").click(function(){
  getTophitSlider("prev");
});

  // option filter ,check and uncheck list items //
      var filter_option = $('.option_filter_top > ul > li');
      var append_filters  = $('.added_filters > ul');
    filter_option.click(function(){
      var filter_option_text = $(this).text();
      var filter_option_parent = $(this).parents("li").find("span").text();
      var data_num = $(this).attr('data-num');
      var item_data_num = $('div[data-num='+data_num+']');
      var append_element = '<div id="div" data-num='+ data_num + '><span>'+filter_option_parent+'</span><span>'+filter_option_text+'</span><button></button></div>';
      if ($('input[type=checkbox]',this).is(":checked")) {
        item_data_num.remove();
        $('input[type=checkbox]',this).prop("checked" , false);
      }else{
        $('input[type=checkbox]',this).prop("checked" , true);
        append_filters.append(append_element);
        append_filters.find('#div').css("display","none");
        append_filters.find('#div').show('normal');
      }
        append_filters.on('click','div',function() {
            if($(this).remove()){
              checkFalse();
            };
            function checkFalse() {
              filter_option.find('input[type=checkbox]').prop("checked" , false);
            }
        });
         });
        var product_filters = $('#product_filters > ul > li');
          product_filters.hover(function () {
            $('.option_filter_top',this).slideToggle("normal");
         });
          /***************** switch products button ******************/
         var inner_span = $('.switch-btn > span > span');
         var span = $('.switch-btn > span');
         $('.switch-btn').on('click',function(){
          // alert('hello')
          span.toggleClass("inner_btn_toggle");
         var inner_span_text = inner_span.text();
         if(inner_span_text == "off"){
          inner_span.html("on");
         }else{
          inner_span.html("off");
         }
         });
         /********************* change grid view *************************/
        var grids_2 = $('#grid_items > a:nth-child(2)');
        var grids_1 = $('#grid_items > a:nth-child(1)');
        var id = $("#exists");
        var rows = $('.change_row > div');
        var appendedelement =$("<div class='exists col-9 d-flex justify-content-start p-2'>dfvdfdfgbdfbfbgf</div>");
        grids_2.click(function(e){
          //alert('hello');
            rows.removeClass('col-3 justify-content-center');
            rows.addClass('col-12 justify-content-start');
            e.preventDefault();
            if ($(".exists").length) {
             
            }else{
              rows.append(appendedelement);
            }
        });
        grids_1.click(function(e){
          e.preventDefault();
          rows.addClass('col-3 justify-content-center');
          rows.removeClass('col-12 justify-content-start');
          if (rows.find($(".exists")).length) {
            //alert('it still exists');
            rows.find($(".exists")).remove();
          }
        });   
        /********************* heart icon on info_product*************************/
        var heart_icon = $('.heart-icon > a > i');
        heart_icon.click(function(){
         
          if ($(this).css("fontSize")=="25px") {
           $(this).css("color","red");
            $(this).animate({"fontSize":"27px"},200);
          }else{
            $(this).animate({"fontSize":"25px"},200);
            $(this).css("color","black");
          }
        });

        /************************ check_btns  **************/
       var btns = $('#check_btns > div');
       btns.click(function(){
         if ($('input[type=checkbox]',this).is(':checked')){
          $('input[type=checkbox]',this).prop('checked',false)
         }else{
          $('input[type=checkbox]',this).prop('checked',true)    
         }
      })
         /************************ show_more_btn  **************/
         var show_more_btn = $('.show_more');
         //Get Current Height
         var current_height = $('#expandable').css('height');
         //Set height to auto
          $('#expandable').css('height','auto');
          //Store auto height
          var animate_height = $('#expandable').css('height');
          //Put height back
          $('#expandable').css('height',current_height);
          //Do animation with animateHeight
         show_more_btn.click(function(e){
          $(this).prev().animate({"height":animate_height},500);
          $(this).text('کمتر');
          e.preventDefault();
          $(this).click(function(){
            if( $(this).text() === 'کمتر'){
              $(this).prev().animate({"height":current_height},500);
              $(this).text('بیشتر');
            }
          })
         
         });
       
});
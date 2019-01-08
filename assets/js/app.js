
$( document ).ready(function() {
  // initMap();
  $("#btnTipoPago").click(function(){
    var a = $("input:radio[name=tipo_pago]:checked").val();
    alert(a)
    return false
  })
  $(".keySearch").keypress(function(e){
    var _text = $(this).val();
    if(e.which == 13) {
        window.location.href = "busqueda.html?buscar="+_text;
    }
  })
  $(".abrirMenu").hover(
    function() {
      var ancho = $( window ).width();
      var offset = $(this).offset();
      var pLeft = offset.left;
      console.log(offset.left)
      $(this).children(".submenu").css("left", "-"+pLeft+"px");
    }, function() {
      $(this).children(".submenu").css("left", 0);
    }
  );
  $(".closeSearch").click(function(){
    $(".search-page").removeClass("open");
  })
  $(".openSearch").click(function(){
    $(".search-page").addClass("open");
  })
  $(".headerClick").click(function(){
    var name = $(this).data("name");
    var id = $(this).data("id");
    var hijo = $(this).children("span");
    hijo.removeClass("active");
    var hijo_back = $(".headerClick_"+id).children("span");
    hijo_back.removeClass("active");
    console.log(hijo_back)
    $(".heart"+id+"-"+name).addClass("active");
    $(".heart"+id+"_b-"+name).addClass("active");
    // console.log("#heart"+id+"-"+name)
    if (name === "filled" ){
      $(this).data("name","unfilled");
    }else{
      $(this).data("name","filled");
    }
  });
  $('.banner-owl').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    animateOut: 'fadeOut',
    items: 1,
    lazyLoad : true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  });
  $('.corousel-home-product').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    animateOut: 'fadeOut',
    lazyLoad : true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass:true,
    nav: false,
    dots: false,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false,
            margin: 20
        }
    }
  });

});

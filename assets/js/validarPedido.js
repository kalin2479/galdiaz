$.validator.addMethod("alfanumOespacio", function(value, element) {
      return /^[ a-z0-9áéíóúüñ]*$/i.test(value);
}, "Ingrese sólo letras, números.");

$.validator.addMethod("valueNotEquals", function(value, element, arg) {
      return arg !== value;
}, "Debe seleccionar un opción válida");


$("#formPedido").validate({
  rules: {
    email: {
      required: true,
      minlength: 4
    },
    pedido: {
      required: true
    },
    politica: "required"
  },
  messages: {
    correo: "Por favor ingresar un correo válido",
    pedido: "Campo obligatorio",
    politica: "Debe aceptar los términos y condiciones"
  }
});

$("#formPedido").submit(function(){
  if ($("#formPedido").valid()) {
    var datos =  $("#formPedido").serialize();
    var _url = "peidos.aspx";
    $("body").css("overflow", "hidden");
    console.log("todo bien");
    return false;
  }else{
    var idPol = document.getElementById('politica').checked
    if (idPol)
      $(".lineaFlex").removeClass("separate")
    else
      $(".lineaFlex").addClass("separate")
  }
});

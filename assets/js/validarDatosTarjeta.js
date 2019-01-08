$.validator.addMethod("alfanumOespacio", function(value, element) {
      return /^[ a-z0-9áéíóúüñ]*$/i.test(value);
}, "Ingrese sólo letras, números.");

$.validator.addMethod("valueNotEquals", function(value, element, arg) {
      return arg !== value;
}, "Debe seleccionar un opción válida");


$("#formTarjeta").validate({
  rules: {
    email: {
      required: true,
      minlength: 4
    },
    numTarjeta: {
      required: true,
      creditcard: true
    },
    mes: {
      required: true,
      valueNotEquals: true
    },
    anno: {
      required: true,
      valueNotEquals: true
    },
    cvc: "required"
  },
  messages: {
    email: "Por favor ingresar un correo válido",
    numTarjeta:{
			required: "Campo Obligatorio",
			creditcard: "Debe ingresar una tarjeta válida"
    },
    mes: "Campo Obligatorio",
    anno: "Campo Obligatorio",
    cvc: "Campo Obligatorio",
  }
});


$("#formTarjetaPago").validate({
  rules: {
    num_cuotas: {
      required: true
    },
    nombre: {
      required: true
    },
    apellido: {
      required: true
    },
    celular: {
      required: true
    },
    pais: {
      required: true
    },
    ciudad: {
      required: true
    },
    direccion: {
      required: true
    }
  },
  messages: {
    num_cuotas: "Campo Obligatorio",
    nombre: "Campo Obligatorio",
    apellido: "Campo Obligatorio",
    celular: "Campo Obligatorio",
    pais: "Campo Obligatorio",
    ciudad: "Campo Obligatorio",
    direccion: "Campo Obligatorio"
  }
});

$("#formTarjeta").submit(function(){
  if ($("#formTarjeta").valid()) {
    var datos =  $("#formTarjeta").serialize();
    var _url = "peidos.aspx";
    $("body").css("overflow", "hidden");
    console.log("todo bien");
    return false;
  }else{
    console.log("no pasa");
  }
});


$("#formTarjetaPago").submit(function(){
  if ($("#formTarjetaPago").valid()) {
    var datos =  $("#formTarjetaPago").serialize();
    var _url = "peidos.aspx";
    $("body").css("overflow", "hidden");
    console.log("todo bien");
    return false;
  }else{
    console.log("no pasa");
  }
});

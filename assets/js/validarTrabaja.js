$.validator.addMethod("alfanumOespacio", function(value, element) {
      return /^[ a-z0-9áéíóúüñ]*$/i.test(value);
}, "Ingrese sólo letras, números.");

$.validator.addMethod("valueNotEquals", function(value, element, arg) {
      return arg !== value;
}, "Debe seleccionar un opción válida");


$("#formDatos").validate({
  rules: {
    nombre: {
      required: true,
      minlength: 4
    },
    direccion: {
      required: true,
      minlength: 4
    },
    correo: {
      required: true,
      minlength: 4
    },
    puesto: {
      required: true,
      minlength: 4
    },
    grado: {
      required: true,
      minlength: 4
    },
    estadoCivil: {
      required: true,
      valueNotEquals: true
    },
    tipoDoc: {
      required: true,
      valueNotEquals: true
    }
  },
  messages: {
    correo: "Por favor ingresar un correo válido",
    direccion: {
      required: "Campo Obligatorio",
      minlength: "Como mínimo debe contener 4 caracteres"
    },
    nombre: {
      required: "Campo Obligatorio",
      minlength: "Como mínimo debe contener 4 caracteres"
    },
    puesto: {
      required: "Campo Obligatorio",
      minlength: "Como mínimo debe contener 4 caracteres"
    },
    grado: {
      required: "Campo Obligatorio",
      minlength: "Como mínimo debe contener 4 caracteres"
    },
    tipoDoc: {
      required: "Campo Obligatorio"
    },
    estadoCivil: {
      required: "Campo Obligatorio"
    }
  }
});

$("#formDatos").submit(function(){
  if ($("#formDatos").valid()) {
    var datos =  $("#formDatos").serialize();
    var _url = "trabaja.aspx";
    $("body").css("overflow", "hidden");

    var top = 0;
    $('html, body').animate({
      scrollTop: top
    }, 500);

    setTimeout(function(){
      $("body").css("width", "100vw");
      $("body").css("height", "100vh");
      $(".boxPopup").fadeIn("slow");
    }, 1000);
    console.log(datos)
    // por ajax, esto lo podremos probar una vez que este integrado
    // por el momento solo simularemos
    // $.ajax({
    //   data: datos,
    //   url: _url,
    //   type: 'post',
    //   success: function(response){
    //     console.log(response)
    //   }
    // });
    console.log("todo bien");
    return false;
  }else{
    console.log("no");
  }
});

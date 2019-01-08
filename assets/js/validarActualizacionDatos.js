$.validator.addMethod("alfanumOespacio", function(value, element) {
      return /^[ a-z0-9áéíóúüñ]*$/i.test(value);
}, "Ingrese sólo letras, números.");

$.validator.addMethod("valueNotEquals", function(value, element, arg) {
      return arg !== value;
}, "Debe seleccionar un opción válida");


$("#formDatos").validate({
  rules: {
    nacimiento: {
      required: true,
      valueNotEquals: true
    },
    tipoDoc: {
      required: true,
      valueNotEquals: true
    },
    numDoc: {
      required: true
    },
    usuario: {
      required: true
    },
    tipoSexo: {
      required: true,
      valueNotEquals: true
    },
    correo: {
      required: true,
      email: true
    },
    contrasenna: {
			required: true,
			minlength: 4
		},
  	verificarContrasenna: {
  		required: true,
  		minlength: 4,
  		equalTo: "#contrasenna"
  	}
  },
  messages: {
    correo: "Por favor ingresar un correo válido",
    usuario: {
      required: "Campo Obligatorio",
      minlength: "Como mínimo debe contener 8 caracteres"
    },
    nacimiento: {
      required: "Campo Obligatorio"
    },
    tipoDoc: {
      required: "Campo Obligatorio"
    },
    numDoc: {
      required: "Campo Obligatorio"
    },
    tipoSexo: {
      required: "Campo Obligatorio"
    },
    contrasenna: {
			required: "Campo Obligatorio",
			minlength: "Su contraseña debe contener como mínimo 4 caracteres"
		},
		verificarContrasenna: {
			required: "Campo Obligatorio",
			minlength: "Su contraseña debe contener como mínimo 4 caracteres",
			equalTo: "Ambas contraseñas no coinciden"
		}
  }
});

$("#formDatos").submit(function(){
  if ($("#formDatos").valid()) {
    var datos =  $("#formDatos").serialize();
    var _url = "procesado.aspx";
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

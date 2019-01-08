$.validator.addMethod("alfanumOespacio", function(value, element) {
      return /^[ a-z0-9áéíóúüñ]*$/i.test(value);
}, "Ingrese sólo letras, números.");

$.validator.addMethod("valueNotEquals", function(value, element, arg) {
      return arg !== value;
}, "Debe seleccionar un opción válida");


$("#formCompra").validate({
  rules: {
    nombre: {
      required: true
    },
    apellido_paterno: {
      required: true
    },
    apellido_materno: {
      required: true
    },
    identificacion: {
      required: true,
      minlength: 8,
      maxlength: 15
    },
    departamento: {
      required: true
    },
    provincia: {
      required: true
    },
    distrito: {
      required: true
    },
    telefono: {
      required: true
    },
    correo: {
      required: true,
      minlength: 4
    },
    dni: {
      required: true
    },
    contacto: {
      required: true
    },
    telefono_referencia: {
      required: true
    },
    agencia: {
      required: true,
      valueNotEquals: true
    },
    tipo_envia: {
      required: true,
      valueNotEquals: true
    },
    direccion_envio: {
      required: true
    },
    tipo_comprobante: {
      required: true,
      valueNotEquals: true
    }
  },
  messages: {
    nombre: "Campo obligatorio",
    apellido_paterno: "Campo obligatorio",
    apellido_materno: "Campo obligatorio",
    identificacion: {
      required: "Campo Obligatorio",
      minlength: "Como mínimo debe contener 8 caracteres",
      maxlength: "Como máximo debe contener 15 caracteres"
    },
    departamento: "Campo obligatorio",
    provincia: "Campo obligatorio",
    distrito: "Campo obligatorio",
    telefono: "Campo obligatorio",
    correo: "Por favor ingresar un correo válido",
    dni: "Campo obligatorio",
    contacto: "Campo obligatorio",
    telefono_referencia: "Campo obligatorio",
    agencia: "Campo obligatorio",
    tipo_envia: "Campo obligatorio",
    direccion_envio: "Campo obligatorio",
    tipo_comprobante: "Campo obligatorio"
  }
});


$('#tipo_comprobante').change(function(){
    var valor = $(this).val();
    if (valor == "2") {
      $("#boxFactura").fadeIn("slow");
    }else{
      $("#boxFactura").fadeOut("slow");
    }
});

$("#formCompra").submit(function(){
  if ($("#formCompra").valid()) {
    var datos =  $("#formPedido").serialize();
    var _url = "peidos.aspx";

    if ($('#tipo_comprobante').val() == "2"){
      if (($("#ruc").val() != "") && ($("#social").val() != "") && ($("#fiscal").val() != "")){
        alert("con factura")
        $("#errorFactura").fadeOut("slow");
      }else{
        $("#errorFactura").fadeIn("slow");
      }
    }else{
      alert("solo boleta")
    }

    // $("body").css("overflow", "hidden");



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

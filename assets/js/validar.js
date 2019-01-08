$.validator.addMethod("alfanumOespacio", function(value, element) {
      return /^[ a-z0-9áéíóúüñ]*$/i.test(value);
}, "Ingrese sólo letras, números.");
$("#formLogin").validate({
  rules: {
    dni: {
      required: true,
      minlength: 8,
      maxlength: 15
    },
    codigo: {
      required: true,
      alfanumOespacio: true
    }
  },
  messages: {
    dni: {
      required: "Campo Obligatorio",
      minlength: "Como mínimo debe contener 8 caracteres",
      maxlength: "Como máximo debe contener 15 caracteres"
    },
    codigo: {
      required: "Campo Obligatorio"
    }
  }
})

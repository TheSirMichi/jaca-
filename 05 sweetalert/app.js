const e1=()=>{
    Swal.fire('Cualquier tonto puede usar una computadora')
}

const e2=()=>{
    Swal.fire(
        '¿El internet?',
        '¿Esa cosa todavía está por ahí?',
        'question'
      )
}

const e3=()=>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'ALgo anda mal!',
        footer: '<a href="">¿Que puedo hacer en esta situacion?</a>'
      })
}
const e4=()=>{
    Swal.fire({
        title: '<strong>HTML <u>ejemplo</u></strong>',
        icon: 'info',
        html:
          'Puedes usar <b>texto en negrita</b>, ' +
          '<a href="//sweetalert2.github.io">enlaces</a> ' +
          'y otras etiquetas HTML',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Genial!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
    }

const e5=()=>{
    Swal.fire({
        title: '¿Quieres guardar los cambios?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No guardar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('guardado', '', 'exitoso')
        } else if (result.isDenied) {
          Swal.fire('Cambios no guardados', '', 'info')
        }
      })
}
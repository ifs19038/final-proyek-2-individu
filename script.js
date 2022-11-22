function contoh(){
  Swal.fire({
    title: 'Kamu yakin dengan pesanan mu?',
    text: "",
    icon: 'warning',
    showCancelButton: true,
    cancelButtonColor: '#d33',
    confirmButtonColor: '#379237',
    cancelButtonText: 'Nanti deh',
    confirmButtonText: 'Pastinya'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Pesanan telah diterima',
        'Pesanan anda akan segera dikerjakan',
        'success'
      )
    }
  })
}

function masuk(){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Login successfully'
  })
}

function daftar(){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Sign in successfully'
  })
}
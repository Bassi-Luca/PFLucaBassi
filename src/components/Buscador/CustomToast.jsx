import Swal from "sweetalert2";
import 'animate.css';

const CustomToast = ({ show, message }) => {
  if (show) {
    Swal.fire({
      title: message,
      icon: "warning",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
      timer: 10000,
      timerProgressBar: true,
      customClass: {
        confirmButton: 'btn btn-danger', // Usa le classi di Bootstrap
      },
    });
  }
  return null;
};

export default CustomToast;

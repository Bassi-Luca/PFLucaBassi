import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ToastOut = ({ idOrder }) => {
  const navigate = useNavigate();

  Swal.fire({
    title: "Su orden se subió correctamente! 😁",
    text: "Por favor, guarde su número de seguimiento: " + idOrder,
    icon: "success",
    confirmButtonText: "Volver al inicio",
  }).then(() => {
    navigate("/"); // Torna alla home
  });

  return null;
};

export default ToastOut;

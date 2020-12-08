import React from "react";

const Mensaje = ({ mensaje, userId }) => {
  let options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const intlDate = new Intl.DateTimeFormat(undefined, options);
  const date = new Date(mensaje.timestamp);

  return (
    <p
      className={userId === mensaje.userId ? "detalles" : "detalles-otro"}
      key={mensaje.id}
    >
      <span> {intlDate.format(date)} </span>
      {mensaje.message}
    </p>
  );
};

export default Mensaje;

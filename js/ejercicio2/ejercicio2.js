const api = "https://ucamp-api.onrender.com/api/v1/customers";

const obtenerClientes = async () => {
  try {
    const respuesta = await fetch(
      "https://ucamp-api.onrender.com/api/v1/customers"
    );
    const json = await respuesta.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const obtenerCliente = async () => {
  try {
    const respuesta = await fetch(
      "https://ucamp-api.onrender.com/api/v1/customers/643ab0727ff131d0b2870c63",
      {
        method: "GET",
      }
    );
    const json = await respuesta.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const crearCliente = async () => {
  try {
    const respuesta = await fetch(
      "https://ucamp-api.onrender.com/api/v1/customers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: "Dominic",
          lastName: "Fuentes",
        }),
      }
    );
    const json = await respuesta.json();

    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const actualizarCliente = async () => {
  try {
    const respuesta = await fetch(
      "https://ucamp-api.onrender.com/api/v1/customers",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-token": "",
        },
        body: JSON.stringify({
          firstName: "Bertin",
        }),
      }
    );
    const json = await respuesta.json();

    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const eliminarCliente = async () => {
  try {
    const respuesta = await fetch(
      "https://ucamp-api.onrender.com/api/v1/customers",
      {
        method: "DELETE",
      }
    );
    const json = await respuesta.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const inputClima = document.getElementById("inputClima");
const inputTemp = document.getElementById("inputTemp");

const consultarClima = async () => {
  try {
    const respuesta = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputClima.value}&appid=616629f9acdc3b22b8b09553e632e5da`
    );
    const datos = await respuesta.json();
    console.log(datos);
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};

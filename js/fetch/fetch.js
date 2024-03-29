const llamarApisPromise = () => {
  fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/mxn.json"
  )
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.log(error);
    });
};

const inputNombrePokemon = document.getElementById("inputNombrePokemon");

const llamarApisAsyncAwait = async () => {
  try {
    const respuesta = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${inputNombrePokemon.value}`
    );
    const json = await respuesta.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

//llamarApisPromise();
llamarApisAsyncAwait();

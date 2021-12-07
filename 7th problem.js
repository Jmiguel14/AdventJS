//método recursivo el cuál se llama así mismo hasta que encuentre un string 
//en cada nivel de cada objeto, es decir, el nombre de cada producto de la store.
//Una vez que encuentre el producto de la store, este será comparado con el producto que se 
//esta buscando para saber si existe en la store.
function contains(store, product) {
  if (typeof store === "string") {
    return store === product;
  }
  return Object.values(store).some((depot) => contains(depot, product));
}

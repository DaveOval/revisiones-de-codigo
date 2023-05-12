const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//! correccion a los selectores del documento
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');
/**
 * funcion para hacer peticion API del usuario
 * @param {String} username 
 */
async function displayUser(username) {
  $n.textContent = 'cargando...';
  //* Se creo el try y el catch para la peticion
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    //* se asigno la respuesta a la data
    const data = await response.json();
    console.log(data);
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err)
  }
}
/**
 * funcion para el manejo del error
 * @param {string} err 
 */
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  //*  se agrego el $ a la variable $n
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
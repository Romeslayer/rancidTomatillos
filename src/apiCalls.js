const getData = (endpoint) => {
  let url = ` https://rancid-tomatillos.herokuapp.com/api/v2/${endpoint}`;
   return fetch(url)
    .then(response => response.json())
    .then(result => {
      return result[endpoint]
    })
    .catch(err => console.log(err))
}


export default getData;


const getData = (endpoint, movieID) => {
  let url;
  if(movieID) {
    url = `https://rancid-tomatillos.herokuapp.com/api/v2/${endpoint}/${movieID}`
  } else {
    url = `https://rancid-tomatillos.herokuapp.com/api/v2/s${endpoint}`
  }
   return fetch(url)
    .then(response => response.json())
    .then(result => {
      return (movieID ? result['movie'] : result[endpoint] )
    })
    .catch(err => err)
}


export default getData;

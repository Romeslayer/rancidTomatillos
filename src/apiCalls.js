
const getData = (endpoint, movieID) => {
  let url;
  if(movieID) {
    url = `https://rancid-tomatillos.herokuapp.com/api/v2/${endpoint}/${movieID}`
  } else {
    url = `https://rancid-tomatillos.herokuapp.com/api/v2/s${endpoint}`
  }
   return fetch(url)
    
}


export default getData;

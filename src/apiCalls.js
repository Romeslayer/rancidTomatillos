
const getData = (endpoint, movieID) => {
  let url;
  if(movieID) {
    url = `https://rancid-tomatillos.herokuapp.com/api/v2/${endpoint}/${movieID}`
  } else {
    url = `https://rancid-tomatillos.herokuapp.com/api/v2/${endpoint}`
  }
   return fetch(url).then(response => {
          if(!response.ok) throw new Error(`${response.status} ${response.statusText}`)
          return response.json()
        })
    
}


export default getData;

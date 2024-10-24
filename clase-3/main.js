/*fetch("https://criptoya.com/api/dolar")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))

const consultarDolar = async () => {
    try {
        const response = await fetch("https://criptoya.com/api/dolar")
        const data = await response.json()
        console.log(data);
    }catch(e) {
        console.log(e)
    }
}

consultarDolar()

*/

const API_KEY = ""

const buscarCiudad = async (ciudad, provincia, pais) => {
    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${provincia},${pais}&limit=1&appid=${API_KEY}`)
        const datosCiudad = await response.json()
        console.log(datosCiudad)
        return datosCiudad
    }catch(e) {
        console.log("Error al buscar ciudad: ", e)
    } finally {
        console.log("Esto se ejecuta si o si")
    }
}

const buscarClima = async({lat, lon}) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=sp&appid=${API_KEY}`)
        const datosClima = await response.json()
        console.log(datosClima)
        return datosClima
    }catch(e) {
        console.log("Error al buscar clima", e)
    }
}


const consultarTiempo = async (ciudad, provincia, pais) => {
    try {
        const datosCiudad = await buscarCiudad(ciudad, provincia, pais)
        const datosClima = await buscarClima(datosCiudad[0])
        console.log(datosClima);
    }catch(e) {
        console.log("Error al consultar tiempo: ", e)
    }
}

consultarTiempo("Ushuaia", "Tierra del Fuego", "Ar")

/*import moment from "moment";

console.log(moment);


    node -v
    npm -v
    npm init --yes
    npm i moment
    en el package.json -> agregar "type":"module",

*/

import crypto from 'crypto'

console.log(crypto.getCiphers())
//SALT 
//Generar cadena aleatoria
const generarSalt = () => {
    return crypto.randomBytes(16).toString('hex')
}

//Encriptar contraseña
const encriptarContraseña = (password, salt) => {
    const hash = crypto.pbkdf2Sync(password, salt,1000, 64, 'sha512').toString('hex')
    return hash
}

const password = "coderhouse"
const salt = generarSalt()
console.log(encriptarContraseña(password, salt));

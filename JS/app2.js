import { Anuncio_mascota } from "./mascotas.js";

const vehiculos =  Anuncio_mascota.LeerLS()
const $divArticulos = document.getElementById("anuncios");
console.log($divArticulos);
if(vehiculos)
{
    const autos =[];
    vehiculos.forEach(element => {
        const {id,titulo,animal,descripccion,precio,raza,edad,vacunado} = element;
        autos.push(new  Anuncio_mascota(id,titulo,animal,descripccion,precio,raza,edad,vacunado));
    });
    autos.forEach(element => {
        $divArticulos.appendChild(element.articulo("./imagenes/raza.png","./imagenes/fecha.png","./imagenes/jeringa.png"));
    });
}

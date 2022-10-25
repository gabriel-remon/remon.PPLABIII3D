import { Anuncio_mascota } from "./mascotas.js";
import { CrearTabla,spinner } from "./dibujos.js";
import { ValidarPrecio,validarCampoVacio,validarLongitud } from "./validaciones.js";
const $form = document.forms[0];
const $divTabla = document.getElementById("tabla"); 
const $constroles = $form.elements;

if(Anuncio_mascota.LeerLS())
{
    actualizar();
}

function actualizar()
{
    limpiarHijos();
    $divTabla.appendChild(spinner("./imagenes/spinner.png"));
    setTimeout(() => {
        limpiarHijos();
        const tabla =CrearTabla(Anuncio_mascota.LeerLS());
        
        $divTabla.appendChild(tabla);
    }, 3000);
}
function limpiarHijos()
{
    while($divTabla.hasChildNodes()){
        $divTabla.removeChild($divTabla.firstChild);
    }
}

function limpiarCampos(e)
{
    const {titulo,descripccion,precio,raza,edad} = e.target;

    titulo.value="";
    descripccion.value="";
    precio.value="";
    raza.value="";
    edad.value="";
    for(const control of $constroles)
    {
        control.classList.remove("inputOk");
    }
}

for(let i=0;i<$constroles.length;i++)
{
    const control = $constroles[i];
    if(control.matches("input") && !control.matches("[type=radio]" ))
    {
        control.addEventListener("blur",validarCampoVacio);
        if(control.matches("[id=titulo]")||control.matches("[id=descripccion]"))
        {
            control.addEventListener("blur",validarLongitud);
        }else if(control.matches("[id=precio]"))
        {
            control.addEventListener("blur",ValidarPrecio);
        }
    }
    console.log(control);
}


$form.addEventListener("submit",(e)=>{

    e.preventDefault();

    for(const control of $constroles)
    {
        if(control.matches("input")&& !control.matches("[type=radio]")&& !control.classList.contains("inputOk")  )
        {
            return;
        }
    }

    const {titulo,animal,descripccion,precio,raza,edad,vacunado} = e.target;
    
    const mascota = new Anuncio_mascota(Date.now(),titulo.value,animal.value,descripccion.value,precio.value,raza.value,edad.value,vacunado.value);
    limpiarCampos(e);
    mascota.pushLS();
    actualizar();
});

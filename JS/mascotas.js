class Anuncio{
    constructor (id,titulo,animal,descripccion,precio)
    {
        this.id = id;
        this.titulo = titulo;
        this.animal = animal;
        this.descripccion = descripccion;
        this.precio=precio;
    }
}

export class Anuncio_mascota extends Anuncio{

    constructor (id,titulo,animal,descripccion,precio,raza,edad,vacunado)
    {
        super(id,titulo,animal,descripccion,precio);
        this.raza = raza;
        this.edad = edad;
        this.vacunado = vacunado;
    }

    articulo(imgRaza,imgFeha,imgVacuna)
    {
        const articulo = document.createElement("article")
        
        const titulo = document.createElement("h3");
        const descripccion = document.createElement("p");
        const precio = document.createElement("p");
        
        const divEspecificacion = document.createElement("div");

        const imagenRaza = document.createElement("img");
        const spanRaza = document.createElement("span");
        const imagenFeha = document.createElement("img");
        const spanFeha = document.createElement("span");
        const imagenVacuna = document.createElement("img");
        const spanVacuna = document.createElement("span");

        const boton = document.createElement("button");
        
        articulo.setAttribute("data-id",this.id);

        articulo.classList.add("articulo-mascota");
        boton.classList.add("boton-mascota");
        divEspecificacion.classList.add("especificaciones");
        precio.classList.add("precio-venta");

        titulo.textContent = this.titulo;
        descripccion.textContent = this.descripccion;
        precio.textContent = "$"+this.precio;
        
        imagenRaza.setAttribute("src",imgRaza)
        imagenFeha.setAttribute("src",imgFeha)
        imagenVacuna.setAttribute("src",imgVacuna)
        spanRaza.textContent = this.raza;
        spanFeha.textContent = this.edad;
        spanVacuna.textContent = this.vacunado;

        boton.textContent="Ver Mascota";

        divEspecificacion.appendChild(imagenRaza);
        divEspecificacion.appendChild(spanRaza);
        divEspecificacion.appendChild(imagenFeha);
        divEspecificacion.appendChild(spanFeha);
        divEspecificacion.appendChild(imagenVacuna);
        divEspecificacion.appendChild(spanVacuna);
        
        articulo.appendChild(titulo);
        articulo.appendChild(descripccion);
        articulo.appendChild(precio);
        articulo.appendChild(divEspecificacion);
        articulo.appendChild(boton);
        
        return articulo;
    }

    pushLS() {
        let data=JSON.parse(localStorage.getItem("mascotas"));
        
        if(data==null)
        {
            data=[];
        }
        data.push(this);
        localStorage.setItem("mascotas",JSON.stringify(data))
    }

    static LeerLS()
    {
        return JSON.parse(localStorage.getItem("mascotas"));
    }

}


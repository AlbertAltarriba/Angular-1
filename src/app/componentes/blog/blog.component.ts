import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  arrNoticias: Noticia[] = [];
  titulo: string = "";
  cuerpo: string = "";
  fecha: string = `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}` 
  id: number = 3;
  img: string = "";
  content: string = "";
  
  constructor() { 
    this.arrNoticias = [
      { titulo: 'Noticia 1', cuerpo: 'Cuerpo noticia 1', fecha: this.fecha, img: "https://picsum.photos/400/400?random=1" },
      { titulo: 'Noticia 2', cuerpo: 'Cuerpo noticia 2', fecha: this.fecha, img: "https://picsum.photos/400/400?random=2" }
    ]
  }

  ngOnInit(): void {
    this.cargarNoticias();
  }

  actualizarImg(): void{
    this.img = `https://picsum.photos/400/400?random=${this.id}`
  }

  actualizarFecha(): void{
    let ahora = new Date();
    this.fecha = `${ahora.toLocaleDateString()} - ${ahora.toLocaleTimeString()}`
  }

  cargarNoticias(): void{
    this.content = "";
    this.actualizarImg();
    
    this.id++;
    this.arrNoticias.forEach(noticia => this.content += 
       `<li>
       <article>
        <div class="noticia-caja">
          <div class="noticia-img">
            <img src=${noticia.img} alt="https://via.placeholder.com/400">
          </div>
          <div class="noticia-contenido">
            <h1>${noticia.titulo}</h1>
            <p class="cuerpo-noticia">${noticia.cuerpo}</p>
            <p class="fecha-noticia">${noticia.fecha}</p>
          </div> 
        </div>
       </article>
   </li>`
        )

  }

  guardarNoticia(): void{
    this.actualizarFecha();
    let noticia: Noticia = {
      titulo: this.titulo,
      cuerpo: this.cuerpo,
      fecha: this.fecha,
      img: this.img
    }

    if(this.titulo !== "" && this.cuerpo !== ""){
      this.arrNoticias.push(noticia);
      this.cargarNoticias();
      this.titulo = "";
      this.cuerpo = "";
    }
    else{
      alert("Por favor, rellene todos los campos")
    }
    
  }

}

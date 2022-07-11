import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

const LOREM: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, nisl eget blandit tincidunt, '+
'metus dui faucibus ipsum, nec volutpat metus nibh id risus. Ut ligula felis, convallis eu venenatis vitae, elementum non felis.'+
' Quisque vehicula, lacus et ultrices porta, eros nisi pellentesque tellus, ut mollis elit purus nec libero.'+
' Suspendisse vehicula libero quam. Nullam convallis felis sed nunc semper, eget aliquet sapien efficitur. In lectus nisi, '+
'interdum sed dignissim a, molestie vitae felis. Donec volutpat maximus sapien vel euismod. Quisque mattis ante purus, at '+
'fermentum augue vehicula eu. Nunc ut scelerisque metus, sit amet commodo urna. Vestibulum lacinia dui id elit congue, vel '+
'ultrices tellus varius. Curabitur eget congue elit. Praesent tempor vestibulum nisl sed elementum. Nulla vulputate nulla tortor, '+
'in rhoncus enim consequat ac. Ut a aliquet nunc, ut scelerisque sem. Nunc ipsum lacus, malesuada aliquam egestas vel, vulputate '+
'sodales metus. Nunc vulputate mollis aliquet. Fusce et faucibus orci. Duis ornare sem sapien, interdum dignissim lorem porta vitae. '+
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';

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
  id_img: number = 3;
  img: string = "";
  content: string = "";
  
  constructor() { 
    this.arrNoticias = [
      { titulo: 'Lorem ipsum 1', cuerpo: LOREM, fecha: this.fecha, img: "https://picsum.photos/400/400?random=1" },
      { titulo: 'Lorem ipsum 2', cuerpo: LOREM, fecha: this.fecha, img: "https://picsum.photos/400/400?random=2" }
    ]
  }

  ngOnInit(): void {
    this.cargarNoticias();
  }

  actualizarImg(): void{
    this.img = `https://picsum.photos/400/400?random=${this.id_img}`
  }

  actualizarFecha(): void{
    let ahora = new Date();
    this.fecha = `${ahora.toLocaleDateString()} - ${ahora.toLocaleTimeString()}`
  }

  cargarNoticias(): void{
    this.content = "";
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
    this.actualizarImg();
    this.id_img++;

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
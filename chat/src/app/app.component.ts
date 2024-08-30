import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioMsjComponent } from "./usuario-msj/usuario-msj.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsuarioMsjComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @Input() mensajes : string[] | undefined

  setMensaje(msj : string){
    this.mensajes?.push(msj)
  }
}

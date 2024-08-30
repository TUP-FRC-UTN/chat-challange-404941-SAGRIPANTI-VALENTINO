import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterEvent, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-usuario-msj',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario-msj.component.html',
  styleUrl: './usuario-msj.component.css'
})
export class UsuarioMsjComponent {
  @Output() enventoEnvio = new EventEmitter<string>()
  @Input() nombre : string = ""
  mensaje : string = ""

  enviarMensaje(){
    this.enventoEnvio.emit(this.mensaje = this.nombre + " : " + this.mensaje)
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usuario-msj',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario-msj.component.html',
  styleUrl: './usuario-msj.component.css'
})
export class UsuarioMsjComponent {
  @Input() nombre : string = ""
  mensaje : string = ""
}

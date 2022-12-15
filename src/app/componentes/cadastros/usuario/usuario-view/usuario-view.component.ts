import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-view',
  templateUrl: './usuario-view.component.html',
  styleUrls: ['./usuario-view.component.scss']
})
export class UsuarioViewComponent implements OnInit {

  @Input() Usuarios: any;
  constructor() { }

  ngOnInit(): void {
  }

}

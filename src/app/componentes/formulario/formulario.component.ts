import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
@Input() textoDoBotao!: string;

formsCadastroUSuario!: FormGroup


  constructor() { }

  ngOnInit(): void {
    this.formsCadastroUSuario = new FormGroup({
      id: new FormGroup('',[Validators.required]),
      nome: new FormGroup(''),
      registro: new FormGroup(''),
      setor: new FormGroup(''),
      cargo: new FormGroup(''),
    });
  }
get id(){
  return this.formsCadastroUSuario.get('id')!;
}

  submit(){
    if (this.formsCadastroUSuario.invalid) {
      return;
    }
    console.log("Enviando Formulario");
  }

}

import { CadastroSensorService } from './../../serviços/sensores/cadastro-sensor.service';
import { Component, OnInit } from '@angular/core';
import { Sensor } from '../../serviços/sensores/sensor-class';
import { FormControl,Form,FormsModule,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.component.html',
  styleUrls: ['./sensores.component.scss']
})
export class SensoresComponent implements OnInit {

  sensores: any=[];

  constructor(private  CadastroSensorService :  CadastroSensorService ) { }

  ngOnInit(): void {
  }

   adicionarSensor(idSensor: string,nomeSensor: string,IPSensor: string,setorSensor: string,tipoSensor: string){

  let ObjectCadastro: Sensor = {
  idSensor : idSensor,
  nomeSensor : nomeSensor,
  IPSensor : IPSensor,
  setorSensor : setorSensor,
  tipoSensor: tipoSensor
  }

  let returnCadastro = this.CadastroSensorService.cadastrarSensor(ObjectCadastro)
  //console.log(ObjectCadastro)
 // console.log(returnCadastro)
  this.sensores.push(returnCadastro )
  console.log(this.sensores)

  }

  }

import { Injectable } from '@angular/core';
import { Sensor } from './sensor-class';
@Injectable({
  providedIn: 'root'
})
export class CadastroSensorService {
novoSensor! :Sensor
  constructor() {}

    cadastrarSensor(novoSensor : Sensor) : any {

localStorage.setItem(novoSensor.idSensor,this.novoSensor.toString())
return this.novoSensor
 }
}

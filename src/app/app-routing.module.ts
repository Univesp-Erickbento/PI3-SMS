import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensoresComponent } from './componentes/cadastros/sensores/sensores.component';
import { UsuarioComponent } from './componentes/cadastros/usuario/usuario.component';
import { HomeComponent } from './componentes/pages/home/home.component';
import { LoginComponent } from './componentes/pages/login/login.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'cadastro-usuario', component: UsuarioComponent},
  {path:'cadastro-sensores', component: SensoresComponent}
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { Component } from '@angular/core';

@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrl: './master-layout.component.css'
})
export class MasterLayoutComponent {

  public sidebarItems = [
    {label:'Listado',icon:'label',url:'./list'},
    {label:'Crear',icon:'add',url:'./new'},
    {label:'Buscar',icon:'search',url:'./search'}
  ]

}

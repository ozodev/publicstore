import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent {
  constructor(private offcanvasService: NgbOffcanvas){}

  abrirMenuLateral(content: TemplateRef<any>) {
    let opciones:NgbOffcanvasOptions= {
      panelClass: 'menu-background', 
      backdropClass: 'menu-background-glass'
    }
		this.offcanvasService.open(content,opciones);
	}
}

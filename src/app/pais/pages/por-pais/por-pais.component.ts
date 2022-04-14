import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: []
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar() {
    this.hayError = false;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => {
        this.hayError = false;
        console.log(paises);
      },
      error: (err) => {
        this.hayError = true;
      }
    });
  }
}

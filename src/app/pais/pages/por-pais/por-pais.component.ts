import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: []
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar() {
    this.hayError = false;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => {
        this.hayError = false;
        this.paises = paises;
        console.log(this.paises);
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      }
    });
  }
}

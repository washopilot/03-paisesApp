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
    console.log(this.termino);

    this.paisService.buscarPais(this.termino).subscribe({
      next: (resp) => console.log(resp),
      error: (err) => {
        console.log('Error');
        console.info(err);
      }
    });
  }
}

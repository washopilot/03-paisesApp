import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: []
})
export class VerPaisComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap((value) => this.paisService.getPaisPorAlpha(value['id'])))
      .subscribe((resp) => console.log(resp.pop()));

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);
    //   this.paisService
    //     .getPaisPorAlpha(id)
    //     .subscribe((value) => console.log(value.pop()));
    // });
  }
}

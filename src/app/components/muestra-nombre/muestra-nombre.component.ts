import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styles: [],
})
export class MuestraNombreComponent implements OnInit, OnChanges {
  // PROPIEDADES
  @Input() nombre!: string;

  // CONSTRUCTOR
  constructor() {}

  // MÉTODOS
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {}
}

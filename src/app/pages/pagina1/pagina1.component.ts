import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [],
})
export class Pagina1Component
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // PROPIEDADES
  nombre: string = 'Fernando';
  segundos: number = 0;
  timerSubscription!: Subscription;

  // CONSTRUCTOR
  constructor() {
    console.log('constructor');
  }

  // MÉTODOS
  ngOnInit(): void {
    console.log('ngOnInit');
    /* 
     - interval() : Crea un intervbalo de tiempo, pero como un Observable
     - Creo un contador de milisegundos y lo asigno a la propiedad "segundos"
     - Asignao el interval() a mi propiedad con el fin de tener la referencia a la suscripción 
     */
    this.timerSubscription = interval(1000).subscribe(
      (i) => (this.segundos = i)
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // unsubscribe() : Permite detener una suscripción
    this.timerSubscription.unsubscribe();
    console.log('timer limpieado');
  }

  guardar() {}
}

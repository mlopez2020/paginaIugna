import { Component, ViewEncapsulation, OnInit, HostListener } from '@angular/core';
declare var myScript;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  fondo: string = 'transparent';
  title = 'nuevaPaginaIugna';
  options = {};
  isSolido: boolean = true;
  mostrarHeader:boolean=true;

  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll($event: Event) {
    console.log("Entro a windows scroll", window.pageYOffset);
    /* let scrollOffset = $event.srcElement.children[0].scrollTop; */
    if (window.pageYOffset > 100 && window.pageYOffset < 500) {

      this.isSolido = false;
      this.mostrarHeader = true;
      console.log("muestra header");

    } else if (window.pageYOffset > 450) {
      this.mostrarHeader = false;
      console.log("msyor a 500");
    } else {
      this.isSolido = true;
      this.mostrarHeader = true;
      console.log("muestra header");
    }

  }
}

  


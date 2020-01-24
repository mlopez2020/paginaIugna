import { Component, OnInit, Input, HostListener } from '@angular/core';
/* import { DOCUMENT } from "@angular/platform-browser"; */

@Component({
  selector: 'app-super-header',
  templateUrl: './super-header.component.html',
  styleUrls: ['./super-header.component.css']
})
export class SuperHeaderComponent implements OnInit {
  
  @Input () isSolido:number = 1;

  constructor() { 
    
  }

  
  ngOnInit() {
   /*  window.onscroll = function(){
    if (window.pageYOffset >100) {
  
      this.isSolido = false;      
    }
    else{
      this.isSolido = true;      
    }
  } */
  }


}

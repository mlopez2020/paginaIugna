import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isTab1Active:boolean = false;
  isTab2Active:boolean = false;
  isTab3Active:boolean = false;
  isTab4Active:boolean = false;
  isTab5Active:boolean = false;
  constructor() { }

  ngOnInit() {
    /* var cursos = document.getElementById("cursos");
    document.getElementById("cursos").style.display="none";   
    
    $(document).ready(function(){    
         
      $('ul.tabs li a:first').addClass('active');
      $('.secciones article').hide();
      $('.secciones article:first').show();  
      if(cursos.style.display == "none"){
        $('ul.tabs li a').click(function(){
          
          document.getElementById("cursos").style.display="block";        
          $('ul.tabs li a article').removeClass('active');
          $(this).addClass('active');
          $('.secciones article').hide();          
          var activeTab = $(this).attr('href');
          $(activeTab).show();
          return false;
        });
      } else {
        $('ul.tabs li a').click(function(){
          document.getElementById("cursos").style.display="none";        
          $('ul.tabs li a article').removeClass('active');
          $(this).addClass('active');
          $('.secciones article').hide();          
          var activeTab = $(this).attr('href');
          $(activeTab).show();
          return false;
        });
      }
     
    }); */

  }
  ejecutarTab(key) {
    console.log("entro al case",key);
    
    switch (key) {
      case 1:
        console.log("entro por 1");
        this.isTab1Active = !this.isTab1Active;
        this.isTab2Active = false;
        this.isTab3Active = false;
        this.isTab4Active = false;
        this.isTab5Active = false;
        break;
      case 2:
      console.log("entro por 2");
        this.isTab2Active = !this.isTab2Active;
        this.isTab1Active = false;
        this.isTab3Active = false;
        this.isTab4Active = false;
        this.isTab5Active = false;
        break;
      case 3:
          console.log("entro por 3");
          this.isTab3Active = !this.isTab3Active;
          this.isTab2Active = false;
          this.isTab1Active = false;
          this.isTab4Active = false;
          this.isTab5Active = false;
          break;
      case 4:
          console.log("entro por 4");
          this.isTab4Active = !this.isTab4Active;
          this.isTab2Active = false;
          this.isTab3Active = false;
          this.isTab1Active = false;
          this.isTab5Active = false;
          break;
      case 5:
          console.log("entro por 5");
          this.isTab5Active = !this.isTab5Active;
          this.isTab2Active = false;
          this.isTab3Active = false;
          this.isTab4Active = false;
          this.isTab1Active = false;
        break;
    
      default:
        break;
    }
    
    console.log("se ejecuto tab", this.isTab1Active);
  }
  
}


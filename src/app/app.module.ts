import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperHeaderComponent } from './components/super-header/super-header.component';
import { VideoIugnaComponent } from './components/video-iugna/video-iugna.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PaginasExternasComponent } from './components/paginas-externas/paginas-externas.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { InstitucionalComponent } from './components/institucional/institucional.component';
import { AutoridadesComponent } from './components/autoridades/autoridades.component';
import { InvestigacionComponent } from './components/investigacion/investigacion.component';
import { ExtensionesComponent } from './components/extensiones/extensiones.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SliderComponent } from './components/slider/slider.component';
import { EscuelasComponent } from './components/escuelas/escuelas.component';
import { EscugenComponent } from './components/escugen/escugen.component';
import { EscusubComponent } from './components/escusub/escusub.component';
import { EscusuperComponent } from './components/escusuper/escusuper.component';
import { InscaesComponent } from './components/inscaes/inscaes.component';
import { InsbarrealComponent } from './components/insbarreal/insbarreal.component';
import { BiblioComponent } from './components/biblio/biblio.component';
import { HeaderGhostComponent } from './components/header-ghost/header-ghost.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarXsComponent } from './components/nav-bar-xs/nav-bar-xs.component';
import { ConsejoInteruniversitarioComponent } from './components/consejo-interuniversitario/consejo-interuniversitario.component';
import { BibliotecasInvestigacionComponent } from './components/bibliotecas-investigacion/bibliotecas-investigacion.component';
import { BiblioEscusubComponent } from './components/biblio-escusub/biblio-escusub.component';
import { BiblioEscusuperComponent } from './components/biblio-escusuper/biblio-escusuper.component';
import { NovedadImportanteComponent } from './components/novedad-importante/novedad-importante.component';
import { CiclosInscripcionComponent } from './components/ciclos-inscripcion/ciclos-inscripcion.component';





const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'video', component: VideoIugnaComponent},
  {path: 'institucional', component: AutoridadesComponent},
  {path: 'investigación', component: InvestigacionComponent},
  {path: 'extensión', component: ExtensionesComponent},
  {path: 'escugen', component: EscugenComponent},
  {path: 'escusub', component: EscusubComponent},
  {path: 'escusuper', component: EscusuperComponent},
  {path: 'inscaes', component: InscaesComponent},
  {path: 'insbarreal', component: InsbarrealComponent},
  {path: 'biblio', component: BiblioComponent},
  {path: 'consejo', component: ConsejoInteruniversitarioComponent},
  {path: 'biblioInv', component: BibliotecasInvestigacionComponent},
  {path: 'biblioEscusub', component: BiblioEscusubComponent},
  {path: 'biblioEscusuper', component: BiblioEscusuperComponent},
  {path: 'cicloIns', component: CiclosInscripcionComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SuperHeaderComponent,
    VideoIugnaComponent,
    NavBarComponent,    
    PaginasExternasComponent,
    FooterComponent,
    HomeComponent,
    InstitucionalComponent,    
    AutoridadesComponent,
    InvestigacionComponent,
    ExtensionesComponent,
    SliderComponent,
    EscuelasComponent,
    EscugenComponent,
    EscusubComponent,
    EscusuperComponent,
    InscaesComponent,
    InsbarrealComponent,
    BiblioComponent,
    HeaderGhostComponent,
    HeaderComponent,
    NavBarXsComponent,
    ConsejoInteruniversitarioComponent,
    BibliotecasInvestigacionComponent,
    BiblioEscusubComponent,
    BiblioEscusuperComponent,
    NovedadImportanteComponent,
    CiclosInscripcionComponent,     
     
    
    
    
    
    
      

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,    
    NgbModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

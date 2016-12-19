import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

  	 <nav class="white lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><img width="50%" src="http://www.institutfrancais.es/adjuntos/logotipo_20160719.jpg"/></a>
      <ul class="right hide-on-med-and-down">
        <li><a style="color:black;" href="#">see other cv</a></li>
      </ul>

      <ul id="nav-mobile" class="side-nav">
        <li><a href="#">My cv</a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">IFE</i></a>
    </div>
  </nav>
  <router-outlet></router-outlet>
    <footer class="page-footer indigo">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">A propos</h5>
          <p class="grey-text text-lighten-4">Ce jeu cv est là en contre exemple et pour vous amuser</p>


        </div>
        <div class="col l3 s12">
          <h5 class="white-text">IFE</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Connect</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      Made by <a class="orange-text text-lighten-3" href="http://materializecss.com">Théophile Vast @IFE-2017</a>
      </div>
    </div>
  </footer>

  `,
})
export class AppComponent  { name = 'Angular'; }

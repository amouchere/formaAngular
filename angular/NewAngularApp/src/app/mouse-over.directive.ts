import { Directive, HostBinding, HostListener } from '@angular/core';


// La directive permet de coder un comportement un affichage à appliquer sur d'autres components. 
@Directive({
  selector: '[appMouseOver]'
})
export class MouseOverDirective {

  @HostBinding('style.backgroundColor')
  color = '#fff';

  constructor() { }

  @HostListener('mouseenter')
  onMouseEnter() { this.color = 'blue'; }

  @HostListener('mouseleave')
  onMouseLeave() { this.color = ''; }

}

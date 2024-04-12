import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCsspropertyDirective]'
})
export class CsspropertyDirectiveDirective {

  @HostBinding('style.backgroundColor') bg='transparent'

  @HostListener('mouseenter') mouseover(){
    this.bg = 'green'
  }

  @HostListener('mouseleave') mouseleave(){
    this.bg = 'transparent'
  }
}

import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPropertybindingDirective]'
})
export class PropertybindingDirectiveDirective {
@Input() defaultColor = 'green'
@Input() changeColor = 'yellow'
@HostBinding('style.backgroundColor') bg='transparent'


  constructor() { }

  @HostListener('mouseenter') mouseover(){
    this.bg = this.defaultColor
  }

  @HostListener('mouseleave') mouseleave(){
    this.bg = this.changeColor
  }

}

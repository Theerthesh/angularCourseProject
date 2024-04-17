import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {

  constructor() { }

  @HostBinding('class.open') Isopen=false;

  @HostListener('click') OnclickDropDrow(){
    this.Isopen = !this.Isopen;
  }


}

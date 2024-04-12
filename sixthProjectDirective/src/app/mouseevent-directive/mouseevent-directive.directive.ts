import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseeventDirective]'
})
export class MouseeventDirectiveDirective {

  constructor(private ele:ElementRef,private ren:Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') mouseover(){
    this.ren.setStyle(this.ele.nativeElement,'background-color','blue');
  }

  @HostListener('mouseleave') mouseleave(){
    this.ren.setStyle(this.ele.nativeElement,'background-color','white');
  }
}

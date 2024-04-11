import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderDirective]'
})
export class RenderDirectiveDirective implements OnInit{

  constructor(private ele:ElementRef,private ren:Renderer2) { }

  ngOnInit(): void {
    this.ren.setStyle(this.ele.nativeElement,'background-color','blue');
    this.ren.setStyle(this.ele.nativeElement,'color','white');
  }
}

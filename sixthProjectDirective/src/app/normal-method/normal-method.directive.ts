import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appNormalMethod]'
})
export class NormalMethodDirective implements OnInit {

  constructor(private ele:ElementRef) { }

  ngOnInit() {
    this.ele.nativeElement.Style.backgroundColor='green'
  }

}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  constructor( elem:ElementRef) { 
    elem.nativeElement.style.backgroundColor = "purple"
  }

  // constructor (private elem: ElementRef ) { 
  // }
  
  //   @HostListener("click") maxupvotes() {
  //     this.quote_highlight("purple")
  //   }
  
  
  //   private quote_highlight(action:string){
  //     this.elem.nativeElement.style.color=action;
  //   }
  
}

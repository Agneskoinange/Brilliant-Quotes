import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  constructor (private elem: ElementRef ) { 
  }
    @HostListener("click") maxupvotes() {
      this.quote_highlight("purple")
    }
  
  
    private quote_highlight(action:string){
      this.elem.nativeElement.style.color=action;
    }
}

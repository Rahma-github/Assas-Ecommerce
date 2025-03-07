import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appDirectiveCard]',
})
export class DirectiveCardDirective implements OnChanges {
  @Input() border1: string = '10px';
  @Input() border2: string = '30px';

  constructor(private el: ElementRef) {


    this.el.nativeElement.style.borderRadius = this.border2;
    this.el.nativeElement.style.boxShadow = '0px 4px 6px rgba(248, 29, 29, 0.74)';
  }

  ngOnChanges(): void {
       this.el.nativeElement.style.border = '2px solid #ccc';
    this.el.nativeElement.style.borderRadius = this.border2;
    this.el.nativeElement.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
    this.el.nativeElement.style.padding = '15px';
  }



  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.borderRadius = this.border1;
    this.el.nativeElement.style.boxShadow = '0px 10px 30px rgba(0, 0, 0, 0.39)';
    this.el.nativeElement.style.opacity = '0.9';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.borderRadius = this.border2;
    this.el.nativeElement.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
    this.el.nativeElement.style.opacity = '1';
  }
}

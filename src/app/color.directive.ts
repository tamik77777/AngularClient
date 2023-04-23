import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorDirective implements OnInit {

  constructor(private _el :ElementRef) 
  {
    
  }
   private _backgroundColor : string = 'pink';
  
   @Input()
   public set color(color: string){
    this._backgroundColor = color;
  }

  public get color(){
    return this._backgroundColor;
  }
  ngOnInit():void{
    this._el.nativeElement.style.backgroundColor = this._backgroundColor; 

  }
   @HostListener('mouseenter')
   onMouseEnter(){
     this._el.nativeElement.style.backgroundColor = this._backgroundColor === ''  ? 'pink': this._backgroundColor; 
   }
   @HostListener('mouseleave')
   onMouseLeave(){
     this._el.nativeElement.style.backgroundColor = null; 
   }
}

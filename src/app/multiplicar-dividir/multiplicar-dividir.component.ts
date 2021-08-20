import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiplicar-dividir',
  templateUrl: './multiplicar-dividir.component.html'
})
export class MultiplicarDividirComponent {

  @Input() count!: number;
  @Output() countChange = new EventEmitter<number>();
   
  multiply(){
    this.count = this.count * 2;
    this.update(this.count)
  }
  
  divide(){
    this.count = this.count / 2;
    this.update(this.count)
  }

  update(count:number){
    this.countChange.emit( count )
  }
}

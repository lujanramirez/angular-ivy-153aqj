import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resetear',
  templateUrl: './resetear.component.html'
})
export class ResetearComponent {

  @Input() count!: number;
  @Output() resetCount = new EventEmitter<number>();
  
  reset(){
    this.resetCount.emit(0);
  }
}

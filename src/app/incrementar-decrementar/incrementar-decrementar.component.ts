import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-incrementar-decrementar',
  templateUrl: './incrementar-decrementar.component.html'
})
export class IncrementarDecrementarComponent {

  @Input() count!: number;
  @Output() countChange = new EventEmitter<number>();
   
  inc(){
    this.count++;
    this.update(this.count)
  }

  dec(){
    this.count--;
    this.update(this.count)
  }

  update(count:number){
    this.countChange.emit( count );
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Input() data: any;
  @Output() dataOut: EventEmitter<any> = new EventEmitter<any>();
  buttonClass: string;


 eventClick = (e) => {
   this.dataOut.emit(e);
 }

  ngOnInit() {
    console.log(this.data);
  }
}

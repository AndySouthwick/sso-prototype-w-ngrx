import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Output() dataOut: EventEmitter<any> = new EventEmitter<any>();
  @Input() data;

  constructor() { }
  getStringForInput = (e) => {
    this.dataOut.emit(e);
  }
  removeIcon = () => {
    this.data.icon = ""
    this.data.textInputClass = "default"
  }
  ngOnInit() {
  }

}

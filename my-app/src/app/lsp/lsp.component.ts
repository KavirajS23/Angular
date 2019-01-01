import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lsp',
  templateUrl: './lsp.component.html',
  styleUrls: ['./lsp.component.css']
})
export class LspComponent implements OnInit {
  entitySelected: string;
  @Output() valueChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  entitySelect(entity: string) {
    this.entitySelected = entity;
    console.log(this.entitySelected);
    this.valueChange.emit(this.entitySelected);
  }
}

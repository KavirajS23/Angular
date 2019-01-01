import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rsp',
  templateUrl: './rsp.component.html',
  styleUrls: ['./rsp.component.css']
})
export class RspComponent implements OnInit {
  selectedEntity: string = "person";
  constructor() { }

  ngOnInit() {
  }

  clickedEntity(entity) {
    this.selectedEntity = entity;
  }
}

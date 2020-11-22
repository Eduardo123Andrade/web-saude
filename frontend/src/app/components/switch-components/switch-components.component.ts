import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from './../../components/admin/admin.component'
@Component({
  selector: 'app-switch-components',
  templateUrl: './switch-components.component.html',
  styleUrls: ['./switch-components.component.css']
})
export class SwitchComponentsComponent implements OnInit {

  @Input() action!: Action

  constructor(public route: Router) { }

  ngOnInit(): void {
    // switch (this.action) {
    //   case Action.CREATE:
    //     this.route.navigate(['/create-doctor'])
    //     break;
    //   case Action.LIST:
    //     this.route.navigate(['/list-doctor'])
    //     break;
    //   default:
    //     break;
    // }

  }

}

import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface AdminAction {
  iconName: string,
  name: string,
  action: Action
}

export enum Action {
  CREATE, DELETE, UPDATE, LIST, FIND
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  action!: Action
  showComponent: boolean = false

  filesPath: AdminAction[] = [
    { iconName: 'user-add', name: 'Adicionar Medico', action: Action.CREATE },
    { iconName: 'user-delete', name: 'Deletar Medico', action: Action.DELETE },
    { iconName: 'user-list', name: 'Listar Medico', action: Action.LIST },
    { iconName: 'user-edit', name: 'Editar Medico', action: Action.UPDATE },
    { iconName: 'user-find', name: 'Procurar Medico', action: Action.FIND },
  ]
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {}

  ngOnInit(): void {
  }

  setAction(action: Action) {
    this.showComponent = false
    this.showComponent = true
    this.action = action
  }

}

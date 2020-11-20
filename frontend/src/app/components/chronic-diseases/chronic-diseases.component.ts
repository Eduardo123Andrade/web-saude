import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

interface ChronicDiseases {
  name: string
  checked: boolean
  color: ThemePalette
}

@Component({
  selector: 'app-chronic-diseases',
  templateUrl: './chronic-diseases.component.html',
  styleUrls: ['./chronic-diseases.component.css']
})
export class ChronicDiseasesComponent implements OnInit {
  chronicDiseases: ChronicDiseases[] = [
    {name: 'Fuma', checked: false, color: 'primary'},
    {name: 'Bebe', checked: false, color: 'primary'},
    {name: 'Hipertensão', checked: false, color: 'primary'},
    {name: 'Hipotensão', checked: false, color: 'primary'},
    {name: 'Doença cardiaca', checked: false, color: 'primary'},
    {name: 'Diabetes', checked: false, color: 'primary'},
    {name: 'Asma', checked: false, color: 'primary'},
  ]

  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Primary', completed: false, color: 'primary' },
      { name: 'Accent', completed: false, color: 'accent' },
      { name: 'Warn', completed: false, color: 'warn' }
    ]
  };

  allComplete: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

}


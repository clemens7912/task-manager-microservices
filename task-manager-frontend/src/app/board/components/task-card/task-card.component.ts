import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../../shared/types/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
  @Input() task: Task = {
    title: '',
    description: '',
    tags: [],
    assignees: [],
    dueDate: ''
  };

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }
}

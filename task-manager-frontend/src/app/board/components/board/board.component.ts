import { Component } from '@angular/core';
import { TaskColumnComponent } from '../task-column/task-column.component';
import { Task } from '../../../shared/types/task.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [TaskColumnComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  todoTasks: Task[] = [
    {
      title: 'Task 1',
      description: 'This is a description of task 1.',
      tags: ['Urgent', 'Frontend'],
      assignees: [{ name: 'John Doe' }, { name: 'Jane Doe' }],
      dueDate: '2025-12-31'
    },
    {
      title: 'Task 2',
      description: 'This is a description of task 2.',
      tags: ['Backend'],
      assignees: [{ name: 'Peter Pan' }],
      dueDate: '2025-12-31'
    }
  ];
  inProgressTasks: Task[] = [
    {
      title: 'Task 3',
      description: 'This is a description of task 3.',
      tags: ['Design'],
      assignees: [{ name: 'Tinker Bell' }],
      dueDate: '2025-12-31'
    }
  ];
  inReviewTasks: Task[] = [];
  doneTasks: Task[] = [
    {
      title: 'Task 4',
      description: 'This is a description of task 4.',
      tags: ['Testing'],
      assignees: [{ name: 'Captain Hook' }],
      dueDate: '2025-12-31'
    }
  ];
}

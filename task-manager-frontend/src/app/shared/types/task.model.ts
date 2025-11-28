export interface Assignee {
  name: string;
}

export interface Task {
  title: string;
  description: string;
  tags: string[];
  assignees: Assignee[];
  dueDate: string;
}

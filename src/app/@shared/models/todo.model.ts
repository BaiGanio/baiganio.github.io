export class ToDo {
  Id: number;
  Name: string;
  Description: string;
  Date: Date;
  IsDone: boolean;

  constructor(id?: number, name?: string, description?: string,
    date?: Date, isDone?: boolean) {
    this.Id = id;
    this.Name = name;
    this.Description = description;
    this.Date = date;
    this.IsDone = isDone;
  }
}

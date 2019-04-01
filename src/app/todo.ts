export class Todo{
    id:number;
    title = '';
    status = false;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }
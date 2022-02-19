export class NotFoundError extends Error {
    name = "NotFoundError";
    constructor(message?: string) {
      super(message);
      this.name = NotFoundError.name;
    }
  }
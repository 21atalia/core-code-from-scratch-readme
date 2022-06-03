export default class Node<T> {
  public data: T;
  public next: Node<T> | null = null;

  get value(): T {
    return this.data;
  }

  constructor(data: T) {
    this.data = data;
  }
}

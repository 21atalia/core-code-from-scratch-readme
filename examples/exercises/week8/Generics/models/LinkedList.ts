import Node from './Node';
export default class LinkedList<T> {
  private head: Node<T> | null = null;
  private length: number = 0;

  get size(): number {
    return this.length;
  }

  public add(value: T) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new Node(value);
    }
    this.length++;
  }

  public remove() {
    if (this.head !== null) {
      this.head = this.head.next;
      this.length--;
    }
  }

  public addFirst(value: T) {
    if (this.head === null) {
      this.add(value);
    } else {
      let node = new Node(value);
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }

  public removeLast(): void {
    if (this.head !== null) {
      let node = this.head;
      let previous: Node<T> = node;
      while (node.next !== null) {
        previous = node;
        node = node.next;
      }
      previous.next = null;
      this.length--;
    }
  }

  public toString(): string {
    if (this.length === 0) return '[]';
    let data = '';
    let node = this.head;
    while (node !== null) {
      data = `${data}${node.data},`;
      node = node.next;
    }
    data = data.slice(0, -1);
    return `[${data}]`;
  }
}
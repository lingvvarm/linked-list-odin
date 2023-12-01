import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  append(data) {
    const node = new Node(data);
    if (this.size === 0) {
      this.root = node;
    } else {
      let current = this.root;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size += 1;
  }

  prepend(data) {
    const node = new Node(data);
    node.next = this.root;
    this.root = node;
    this.size += 1;
  }

  get_size() {
    return this.size;
  }

  head() {
    return this.root;
  }

  tail() {
    let current = this.root;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  at(index) {
    if (index > this.size - 1) return -1;
    if (index === this.size - 1) return this.tail();
    let currentIndex = 0;
    let current = this.root;
    while (current.next) {
      if (currentIndex === index) return current;
      currentIndex += 1;
      current = current.next;
    }
  }

  pop() {
    let current = this.root;
    while (current.next) {
      if (!current.next.next) {
        const toReturn = current.next;
        current.next = null;
        this.size -= 1;
        return toReturn;
      }
      current = current.next;
    }
  }

  contains(value) {
    let current = this.root;
    if (value === this.tail().data) return true;
    while (current.next) {
      if (current.data === value) return true;
      current = current.next;
    }
    return false;
  }

  find(value) {
    let current = this.root;
    let i = 0;
    while (current) {
      if (current.data === value) return i;
      current = current.next;
      i += 1;
    }
    return -1;
  }

  toString() {
    let current = this.root;
    let res = '';
    while (current) {
      res += `( ${current.data} ) -> `;
      current = current.next;
    }
    res += 'null';
    return res;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      this.size += 1;
      return index;
    }
    if (index > this.size - 1) return -1;
    const node = new Node(value);
    let current = this.root;
    for (let i = 0; i < index; i++) {
      if (index - 1 === i) {
        const tmp = current.next;
        node.next = tmp;
        current.next = node;
        return index;
      }
      current = current.next;
    }
    this.size += 1;
  }

  removeAt(index) {
    if (index === 0) {
      this.root = this.root.next;
      this.size -= 1;
      return index;
    }
    if (index > this.size - 1) return -1;
    let current = this.root;
    for (let i = 0; i < this.size; i++) {
      if (index - 1 === i) {
        current.next = current.next.next;
        this.size -= 1;
        return index;
      }
      current = current.next;
    }
  }
}

import LinkedList from "./linked-list.js";

let lst = new LinkedList();

lst.append(5);
lst.append(7);
lst.prepend(111);

console.log(lst.get_size())

console.log(lst.toString());

console.log(lst.insertAt(3, 2));
console.log(lst.insertAt(77, 0));
console.log(lst.get_size());



console.log(lst.head());
console.log(lst.tail());

console.log(lst.toString());

console.log(lst.find(111));
console.log(lst.find(10));

lst.pop();
console.log(lst.toString());
console.log(lst.get_size());

console.log(lst.removeAt(0));

console.log(lst.head());


console.log(lst.toString());
console.log(lst.get_size());
class Group {

    constructor() {
        this.arr = []
    }

    add(value) {
        if (!this.has(value)) {
            this.arr.push(value);
        }
    }

    delete(value) {
        const index = this.arr.indexOf(value);

        if (index > -1) {
            this.arr.splice(index, 1);
        }
    }

    has(str) {
        return this.arr.includes(str);
    }

    // Give the class a static from method that takes an iterable object as 
    // argument and creates a group that contains all the values produced by iterating over it.
    static from(obj) {
        
        let group = new Group

        for (let i = 0; i < obj.length; i++) {
            group.add(obj[i]);
        }

        return group
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if (this.position >= this.group.arr.length) {
            return {done: true};
        } else {
            let result = {
                value: this.group.arr[this.position],
                done: false
            };
            this.position++;

            return result;
        }
    }
}


// 6-2
let group = Group.from([10, 21]);

console.log(group.has(10));
// // → true
console.log(group.has(30));
// // → false

group.add(10);
group.delete(10);

console.log(group.has(10));
// // → false
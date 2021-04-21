class Person {
    constructor(name, DoB) {
        this.name = name;
        this.DoB = DoB;
    }

    getDetail = () => {
        // console.log(`Name : ${this.name} - Age : ${this.DoB}`);
        return `Name : ${this.name} - Age : ${this.DoB}`;
    }
}

const person = new Person('Khai', 1999);
// person.getDetail();
console.log(person.getDetail());

class Pilot extends Person {
    constructor(name, DoB, exp, type, license) {
        super(name, DoB);
        this.exp = exp;
        this.type = type;
        this.license = license;
    }
    getDate = () => {
        console.log(`Name : ${this.name} - DoB : ${this.DoB} -  Exp : ${this.exp} - Type : ${this.type} - License : ${this.license}`);

    }
}

const pilot = new Pilot('Khai', 1999, '4 years', 'pilot', '2020');
pilot.getDate();
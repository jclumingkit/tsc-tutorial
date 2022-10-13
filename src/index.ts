// Type Aliases

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void;
}

let employee: Employee = { 
    id: 1,
    name: '',
    retire: (date: Date) => {
        console.log(date)
    }
}
employee.name = 'Mosh'

// Union Types
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2
    else 
        return parseInt(weight) * 2.2;
};

kgToLbs(10);
kgToLbs('10kg')

// Intersection Types
type Draggable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Literal Types
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

// Nullable Types
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola');
}

greet(null);

// Optional Chaining
type Customer = {
    birthday?: Date;
};

function getCustomer(id: number) :  Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional call
let log: any = null;
log?.('a');


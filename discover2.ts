// Basic Types
let age: number = 5
let VehicleBrand: string = 'Mercedes Benz'
let isOpen: boolean = false
let x: any = 'Something'


// Arrays
let years: number[] = [1986, 1992, 1999, 2008, 2019]
let anyValues: any[] = ["Ford", true, "Black", 2019, 25000.00]


// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]
person = [22, 'Mahmoud', true]


// Tuple Array 
let people: [number, string, string, boolean][]
people = [
    [2, 'Mohammad', 'Hadi', true],
    [1, 'Rachid', 'Ag', true],
    [3, 'Soufiane', 'Ja', false],
]


// Union
let StudentId: string | number
StudentId = '22'
StudentId = 344


// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction1.Left)

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction2.Right)


// Objects
type Student = {
    name: string,
    age: number
}
const user: Student = {
    name: 'John',
    age: 27
}


// Type Assertion
let personId: any = 32
// let employeeId = <number>personId
let employeeId = personId as number
console.log(employeeId) 


// Functions
function addOperation(x: number, y: number): number {
    return x + y
}
console.log(addOperation(12, 33))


// Void
function showMessage(message: string | number): void {
    console.log(message)
}
showMessage('This is a running Typescript code!')


// Interfaces
interface PersonInterface {
    readonly id: number
    name: string
    age?: number,
    hasDegree?: boolean,
}
const p1: PersonInterface = {
    id: 465,
    name: 'Younes',
    hasDegree: true
}
  

// Interfaces with function
interface MathFunc {
    (x: number, y: number): number
}
// const div: MathFunc = (x: string, y: string): number => x / y (x & y should be numbers)
const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y


// Classes
interface CandidateInterface {
    id: number
    fname: string
    lname: string
    register(): string
}
class Employee implements CandidateInterface {
    id: number
    fname: string
    lname: string
  
    constructor(id: number, fname: string, lname: string) {
      this.id = id
      this.fname = fname,
      this.lname = lname
    }
  
    register() {
      return `${this.fname} ${this.lname} is now registered`
    }
}
const Sam = new Employee(1, 'Samuel', 'Nebra')
const Dav = new Employee(2, 'David', 'Ben')

class ITEmployee extends Employee {
    position: string
  
    constructor(id: number, fname: string, lname: string, position: string) {
      super(id, fname ,lname)
      this.position = position
    }
} 
const dev = new ITEmployee(3, 'Rachid', "Ag", 'Front-end Developer')


// Generics
function getArray<T>(items: T[]): T[] {
    return items
}
let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['Rasheed', 'Rajab', 'Dareef'])
// strArray.push(32) (Throws error)
strArray.push("Salman")
numArray.push(111)
console.log(strArray)
console.log(numArray)
// Number type
//------------

let weight: number
weight = 33 // (number)
weight = 2022 // (number)
weight = 20 - 2 * (23 + 3.14) // (number)
weight = false // (boolean) ot a number
weight = "apple" // (string) Not a number
weight = [10, 11, 89, 96] // Not a number

let age = 33 
age = 3.87 // (number)
age = 45 / 10 // (number)
age = "SO" + 34 // (string) Not a number
age = "120" // (string) Not a number
age = true // (boolean) Not a number
age = 36 // Not a number


// String
// ------

let firstName: string
firstName = "Rachid" // (string)
firstName = "Anas" // (string)
firstName = 0 // (number) Not a string
firstName = 34 > 90 // (boolean) ot a string
firstName = false // (boolean) Not a string
firstName = {} // (object) Not a string

let lastName: string = "Ag"
lastName = "Zad" // (string)
lastName = true // (boolean) Not a string
lastName = [] // (object) Not a string
lastName = "Something".length // (number) Not a string
lastName = "Something".length > 0 // (boolean) Not a string


// Boolean
// -------

let isLoading: boolean
isLoading = false // (boolean)
isLoading = 33 > 33 // (boolean)
isLoading = 33 // (number) Not a boolean
isLoading = 'Something'.toLowerCase() // (string) Not a boolean
isLoading = true.toString() // (string) Not a boolean

let isActive = true
isActive = false // (boolean)
isActive = "Something".length > 0 // (boolean)
isActive = "Netlinkers" // (string) Not a boolean
isActive = 34 // (number) Not a boolean
isActive = [34, 22] // (object) Not a boolean
isActive = "Something".length // (number) Not a boolean


// Any
// ---

let anyThing: any
anyThing = "Blabla"
anyThing = 233
anyThing = 45 < 40
anyThing = true

let yearOfBirth
yearOfBirth = 1990
yearOfBirth = "1990"
yearOfBirth = false
yearOfBirth = {}
yearOfBirth = "1990".split('')


// Object
// ------

let person: {
    firstName: string,
    lastName: string,
    hasChildren: boolean,
    age: number
} = {
    firstName: "Rachid",
    lastName: "Ag",
    hasChildren: false,
    age: 33
}
person.age = 54
person.age = "54" // (string) Not a number
person.age = false // (boolean) Not a number
person.lastName = true
person.hasChildren = "No" // (string) Not a boolean

const obj: {
    prop1: number,
    prop2: boolean,
    prop3: string,
    prop4?: any // ? => Optional
    prop5?: string[] // ? => Optional
} = {
    prop1: 2012,
    prop2: false,
    prop3: "Something"
}

// Array
// -----

let myArray:any[] // OR: let myArray = []
myArray.push(false)
myArray.push("Germany")
myArray.push(45)

let myArray2: any[] = [true, 'Blabla', 2022, "Nicola"]
myArray2.push(3.24)
myArray2.push(false)

let myArray3: any[] = true // (boolean) Not an array

let myArray4: number[] = [true, 4544, "Milan", 33] // true and Milan are not numbers

let myArray5: number[] = [22, 33, 90, 76]
myArray5.push('Python') // (string) Not a Number
myArray5.push(false) // (string) Not a Number

let myArray6: string[]
myArray6 = ['Python', 'Java', 'PHP'] 
myArray6.push(2022) // (number) Not a string

let myArray7: {
    model: string,
    color: string,
    year: number,
    isUsed: boolean
}[] = []

myArray7.push({
    model: "Ford",
    color: 'Black',
    year: 2018,
    isUsed: true
}) // Not an array of objects

myArray7.push(true) // Not an array of objects
myArray7.push('') // Not an array of objects
myArray7.push({}) // Does not contain all items
myArray7.push({model: "Audi", year: 2020}) // Does not contain all items

let arrayOfArraysOfArrays: string[][][]
arrayOfArraysOfArrays.push( [["Rachid", "Salim"]] )
arrayOfArraysOfArrays.push( [["Rachid", "Salim"], ["Osama", "Sami", "Ahmed"]] )
arrayOfArraysOfArrays.push( ["Rachid", "Salim"] ) // Incorrect
arrayOfArraysOfArrays.push( [[["Rachid", "Salim"]]] ) // Incorrect
arrayOfArraysOfArrays.push( [["Rachid", "Salim"], "Jamal", "Kamal"] ) // Incorrect


// Functions
// ---------

const add1 = (num1, num2) => {
    return num1 + num2
}
add1(true, "str") // num1 & num2 & add1 (return) are with type any

const add2 = (num1: number, num2: number): number => {
    return num1 + num2;
}
add2(33, 2) // 35 
add2(false, "slam") // (Incorrect) num1 & num2 are not numbers
add2(33, "slam") // (Incorrect) num2 is not a number
add2(true, 20) // (Incorrect) num1 is not a number

const showMessage = (msg: string): void => {
    console.log(msg)
} // By default the type of showMessage function is void
showMessage("Keep up the good work!")


// Advanced topics
// ---------------

let numberOrBoolean = 2022
numberOrBoolean = true // Must be a number

let numberOrBoolean2: boolean | number = true
numberOrBoolean2 = false
numberOrBoolean2 = 987
numberOrBoolean2 = "Yes" // Must be number or boolean

const arrayTab: (string | number)[] = [33, 98, "No", "Yes"]
arrayTab.push(true) // (Incorrect) must be string or number
arrayTab.push(["ma", "ta", "sa"]) // (Incorrect) must be string or number

const arrayTab2: (string | boolean | any[])[] = ["Pink", "Yellow", [11, 111, 1111], true, false]
const arrayTab3: (string | boolean | (undefined | number)[])[] = ["Pink", "Yellow", [11, 111, 1111, , , undefined], true, false]

let gender: "Male" | "Female"
gender = "Male"
gender = "Female"
gender = "Young" // Must be Male or Femal
gender = "female" // female !== Female


// Enum
// ----

enum direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}
let rightDirection: direction = direction.RIGHT
let upDirection: direction = direction.UP


// Interfaces
// ----------

interface Person {
    firstName: string,
    lastName: string,
    age: number,
    hasJob?: boolean
}
const person1: Person = {
    firstName: "Amine",
    lastName: "Mania",
    age: 31,
    hasJob: true
}
const person2: Person = {
    firstName: "Farid",
    lastName: "Faria",
    age: 26,
}


// Type
// ----

type JOB = String
let myJob: JOB = "Web Developer"

type PersonType = {
    fname: string,
    lname: string
}
let pt1: PersonType = {
    fname: "Jamal",
    lname: "Sassi",
}

type CarType = {
    brand: string,
    color: string,
    year: number,
    isAccendented?: boolean
}[]
const myCar: CarType = [{
    brand: "Ford",
    color: "red",
    year: 2018,
    isAccendented: false
}]
const yourCar: CarType = [{
    brand: "Ford",
    color: "red",
    year: 2018,
}]


// Classes
// -------

class Car {

    brand: string
    model: string
    color: string
    public year: number
    public isNew: boolean
    private drivers: string[] = []
    readonly notice: string = "Tis is a notice"

    constructor(brand: string, model: string, color: string, year: number, isNew: boolean) {
        this.brand = brand
        this.model = model
        this.color = color
        this.year = year
        this.isNew = isNew
    }

    describe(): string {
        return `${this.color} ${this.brand} ${this.model} Car, made on ${this.year}`
    }

    addDrivers(driver: string): void {
        this.drivers.push(driver);
    }
}
const firstCar = new Car("Ford", "Focus", "Grey", 2016, false)
let firstCarBrand = firstCar.brand
firstCar.describe()
firstCar.addDrivers("Rachid")
firstCar.addDrivers("Kareem")
firstCar.notice

class Vehicle {

    private drivers: string[] = []
    readonly notice: string = "Tis is a notice"

    constructor(public brand: string, public model: string, public color: string, public year: number, public isNew: boolean) {}

    describe(): string {
        return `${this.color} ${this.brand} ${this.model} Car, made on ${this.year}`
    }

    addDrivers(driver: string): void {
        this.drivers.push(driver);
    }

}
let firstVehicle = new Vehicle("Peugeot", "208", "Back", 2019, true)
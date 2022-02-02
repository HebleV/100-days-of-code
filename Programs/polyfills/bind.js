let name = {
    firstname: "Vishal",
    lastname: "H",
}
let printname = function(city,state) {
    console.log(this.firstname, this.lastname, city, state);
}

Function.prototype.mybind = function(...arg1) {
    return (...arg2) => {
        this.call(...arg1,...arg2);
    }
}

let x = printname.mybind(name,'Bangalore'); //...arg1
x('Karnataka'); //...arg2


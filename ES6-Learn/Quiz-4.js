

function Person(name,age) {
    this.name = name;
    this.age = age;
   
    // var self = this;
    
    // setInterval(function () { 
    //     self.age++;
    //     console.log(self.age);
    // },1000);    

    setInterval(() => { this.age++; console.log(this.age)},1000);

}

var p = new Person('Ria',1);
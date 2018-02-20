
function Cat(name, age)
{
    this.name = name;
    this.age = age;

    this.voice = function ()
    {
        console.log("Hello, my name is " + name + " I'm " + age + " years old...");
        console.log("Kiev is a capital of Ukraine.");
        console.log("...");
    }
}

new Cat('Murzik', 2).voice();


function Animal()
{
}

Animal.prototype.voice = function ()
{
    console.log('Rrr-rrr-rrr...');
};

new Animal().voice();


function Dog(name)
{
    this.name = name;

    this.voice = function ()
    {
        console.log("Bark, bark, bark...");
    }
}

Dog.prototype = new Animal();

new Dog('Rex').voice();


Dog.DIEGO = new Dog('Diego');

Dog.DIEGO.voice();


function Address()
{
    var city = null;
    var street = null;
    var number = null;

    this.getCity = function()
    {
        return city;
    }

    this.setCity = function(updated)
    {
        city = updated;
    }

}

console.log("----------------------");

var addr = new Address();

addr.setCity('Kiev');
console.log(addr.getCity());

addr.setCity('Moscow');
console.log(addr.getCity());


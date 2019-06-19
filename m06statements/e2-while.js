
console.log("Start");

function ageMoreThen18(a)
{
    if (a > 18)
    {
        return true;
    }
    return false;
}

var age = 16;

var counter = 0;

while (!ageMoreThen18(age))
{
    if (counter >= 3)
    {
        console.log("Go home boy!!!");
        break;
    }
    
    console.log("You are: " + age + ". Call me next year!!!");
    age += 1;
    counter++;
}

if (ageMoreThen18(age))
{
    console.log("You can drive!!!");
}


counter = 0;

while (true)
{
    if (counter++ % 2 == 0)
    {
        console.log("skip");
        continue;
    }
    console.log(counter);
}

console.log("End");


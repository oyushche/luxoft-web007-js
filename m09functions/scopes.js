function F()
{
    // var self = this;
    this.a = 10;
    
    this.test = function()
    {
        this.b = 400;
        console.log(this.a);
        console.log(this.b);
    }
    
    // this.test();
    //
    // setTimeout(this.test, 0);
};

var a = 10000;

var f = new F();

// f.test();
setTimeout(f.test, 0);

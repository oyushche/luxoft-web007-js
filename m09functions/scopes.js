function F()
{
    // var self = this;
    this.a = 10;
    
    this.test = () =>
    {
        
        console.log(this.a);
    }
    
    setTimeout(this.test, 0);
};

var f = new F();

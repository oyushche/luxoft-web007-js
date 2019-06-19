(function ()
{
    var n = 10;
    
    function f()
    {
        console.log("everything declared inside this -> accessible only inside this block");
    }
    
    f()
    
    
})();

// f() -> not visible outside
// n


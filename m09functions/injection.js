(function ()
{
    console.log("...start\n");

    var ttt = function () { console.log("---> " + this.getName()()); }

    function Cat()
    {
        var name = "Pushok";

        function getNameAccess()
        {
            return name;
        }

        this.getName = function()
        {
            return getNameAccess;
        }
    }


    function Car()
    {
        var name = "Tayota";

        function getNameAccess()
        {
            return name;
        }

        this.getName = function()
        {
            return getNameAccess;
        }
    }

    var  cat = new Cat();

    // console.log(cat.name);

    ttt.call(cat);

    ttt.call(new Car())

    console.log("\n...end");

})();

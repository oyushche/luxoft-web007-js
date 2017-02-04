
function callInContext(obj, fn, params)
{
    fn.call(obj, params);
}

(function ()
{
    function DataObj()
    {
        var data = [1, 2, 3];

        this.processWithData = function (fn)
        {
            fn(data);
        };
    }

    var objToRunOn = new DataObj();

    var fn = function print(param)
    {
        console.log(param);
    };


    callInContext(objToRunOn, objToRunOn.processWithData, fn);

})();
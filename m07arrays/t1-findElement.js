(function ()
{
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 1000);

    printArray(numbers);

    // TODO test it here
    console.log(findElement(numbers, 99));

    // returns:
    //
    //     el if exists
    //    -1 if not
    function findElement(arr, el)
    {
        // TODO your code here
    }

    function fillArrayWithRndNumbers(arr, count)
    {
        // TODO your code here

    }

    // Utils

    function printArray(arr)
    {
        console.log(JSON.stringify(arr));
    }

    function getRndNumber()
    {
        return Math.floor(Math.random() * 100);
    }

})();
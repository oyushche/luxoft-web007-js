(function ()
{
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 1000);

    printArray(numbers);

    console.log(getCountOfElements(numbers, 23));

    // return count of elements el within array
    function getCountOfElements(arr, el)
    {
        // TODO your code here
    }

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
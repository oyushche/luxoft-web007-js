(function ()
{
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 10);

    printArray(numbers);

    swap(numbers, 1, 4);

    printArray(numbers);


    // should swap elements with given positions
    function swap(arr, pos1, pos2)
    {
        // TODO your code here
    }


    // Utils

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

    function printArray(arr)
    {
        console.log(JSON.stringify(arr));
    }

    function getRndNumber()
    {
        return Math.floor(Math.random() * 100);
    }

})();
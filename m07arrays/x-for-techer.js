(function ()
{
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 10);

    printArray(numbers);

    function bubbleSort()
    {
        for (var i = 0; i < numbers.length; i++)
        {
            for (var j = 0; j < numbers.length; j++)
            {
                if (numbers[j] > numbers[j + 1])
                {
                    swap(numbers, j, j + 1);
                }
            }
        }
    }

    bubbleSort();

    printArray(numbers);

    // g3
    function swap(arr, pos1, pos2)
    {
        var tmp = arr[pos1];

        arr[pos1] = arr[pos2];
        arr[pos2] = tmp;
    }

    // t2
    function getCountOfElements(arr, el)
    {
        var tmp = [];
        for (var cp in arr)
        {
            if (arr[cp] == el)
            {
                tmp.push(el);
            }
        }

        return tmp.length;
    }


    // t1
    function findElement(arr, el)
    {
        for (var cp in arr)
        {
            if (cp == el)
            {
                return el;
            }
        }
        return -1;
    }

    // t0
    function fillArrayWithRndNumbers(arr, count)
    {
        for (var i = 0; i < count; i++)
        {
            arr.push(getRndNumber());
        }
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
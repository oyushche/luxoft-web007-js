(function ()
{
    var age = 33;

    var countOfYears = 60 - age;
    var howMuchYouWantToSaveInOneMonth = 704;
    var interestRate = 12;

    var sum = 0;

    createRetirementPlan();

    printAccountStatement();

    // calculate how much money you will have after countOfYears of savings
    // with given monthlyPayment and interestRate
    function createRetirementPlan()
    {
        // TODO your code here
    }

    function calcInterest(sum)
    {
        // TODO your code here
    }

    // Utils

    function printAccountStatement()
    {
        console.log("Account: " + sum.toLocaleString('en-US', {maximumFractionDigits: 0}));
        console.log("Mon  CF: " + (calcInterest(sum) / 12).toLocaleString('en-US', {maximumFractionDigits: 2}));
    }

})();
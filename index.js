// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers)
{
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers)
{
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiply)
{
    return function (result)
    {
        return multiply * result;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (d1, d2) {return d2(d1)}
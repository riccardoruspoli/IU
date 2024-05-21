/**
 * Calculates the mean of an array of values.
 *
 * @param {number[]} values - The array of values.
 * @returns {number} The mean of the values.
 */
function calculateMean(values) {
    // defining a container for the sum
    let sumOfValues = 0

    // cycling over each value of the array of values
    values.forEach(value => {
        // add each element to the sum
        sumOfValues += value
    });

    // return the mean by dividing the sum of values by the number of values
    return sumOfValues / values.length;
}

/**
 * Calculates the slope of the linear regression line.
 * 
 * @param {number[]} x - The array of x-values.
 * @param {number[]} y - The array of y-values.
 * @param {number} xMean - The mean of the x-values.
 * @param {number} yMean - The mean of the y-values.
 * @returns {number} The slope of the linear regression line.
 */
function calculateSlope(x, y, xMean, yMean) {
    // instantiate numerator variable
    let numerator = 0;
    // instantiate denominator variable
    let denominator = 0;

    // numerator and denominator both use a sum from i=1 to n, so a single for cycle can be used
    for (let i = 0; i < x.length; i++) {
        // add to the numerator, for each value, the product of the deviations of x and y with respect to their respective means
        numerator += (x[i] - xMean) * (y[i] - yMean);

        // add to the denominator, for each value, the square of the deviation of x with respect to its mean
        denominator += Math.pow(x[i] - xMean, 2);
    }

    // return the slope of the linear regression line
    return numerator / denominator;
}

/**
 * Calculates the linear regression of two arrays.
 *
 * @param {number[]} x - The array of x-values.
 * @param {number[]} y - The array of y-values.
 * @returns {Object} - An object containing the intercept (b0) and slope (b1) of the linear regression.
 * @throws {Error} - If the length of the x and y arrays is not the same.
 */
function linearRegression(x, y) {
    // check if the length of the x and y arrays is the same
    if (x.length != y.length) {
        // if length does not match, throw an error and interrupt the execution
        throw new Error("The length of the x and y arrays must be the same");
    }

    // first passage is to calculate the means of x and y arrays
    // use the function to calculate the mean of x
    const xMean = calculateMean(x);

    // calculate the mean of y
    const yMean = calculateMean(y);

    // calculate the slope using the function
    const slope = calculateSlope(x, y, xMean, yMean);

    // calculate the intercept
    const intercept = yMean - slope * xMean;

    // return the object with the intercept and slope
    return { b0: intercept, b1: slope };
}

// test data for linear regression
// the x-array represents the age of an house in years
x = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
// the y-array represents the price of the house in thousands of dollars
y = [480, 450, 410, 370, 400, 360, 320, 340, 290, 310, 280, 270, 260, 240, 220, 210, 190, 170, 160, 150]

console.log(linearRegression(x, y));
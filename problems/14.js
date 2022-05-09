/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    const maj = Math.floor(numbers.length / 2)
    let dict = {};
    for (n in numbers) {
        dict[numbers[n]] = 0
    }
    for (n in numbers) {
        dict[numbers[n]]++
        if (parseInt(dict[numbers[n]]) >= maj) {
            return numbers[n]
        }
    }
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};
/**
 * Problem 6: Custom Sorting
 * 
 * Given a list students, sort the students by their grade (descending).
 * Use the .sort function.
 * 
 * @example [{name: "Chase", grade: 89}, {name: "Raman", grade: 92}] -> [{name: "Raman", grade: 92}, {name: "Chase", grade: 89}]
*/
function problem(students) {
    const temp = students.sort(function (a, b) {
        return a.grade - b.grade
    })
    return temp.reverse()
}

const tests = [
    [[{name: "Chase", grade: 89}, {name: "Raman", grade: 92}], [{name: "Raman", grade: 92}, {name: "Chase", grade: 89}]],
    [[{name: "Peter", grade: 92}, {name: "Gillman", grade: 70}, {name: "Pattis", grade: 100}], [{name: "Pattis", grade: 100}, {name: "Peter", grade: 92}, {name: "Gillman", grade: 70}]]
]

module.exports = {problem, tests};
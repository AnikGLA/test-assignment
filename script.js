// function generateAssignment() {
//     const regNumber = document.getElementById('regNumber').value;
//     const assignments = [
//         "Write a Python program to find the sum of all numbers in a list.",
//         "Write a Python program to count the number of even and odd numbers in a list.",
//         "Write a Python program to check if a number is prime or not.",
//         "Write a Python program to find the factorial of a number.",
//         "fgf46565657fgfgf",
//         "fgfgfgfgfgfgffg",
//         "676767",
//         "jkffsdgjhhdferefcxc",
//         "fgfgf57bggjlk. asadsdw",
//         ".....83843939494"
//         // Add more assignment statements as needed
//     ];

//     // Generate a random index based on the registration number
//     const randomIndex = regNumber.length > 0 ? regNumber.charCodeAt(0) % assignments.length : 0;
//     const assignment = assignments[randomIndex];

//     const assignmentContainer = document.getElementById('assignmentContainer');
//     assignmentContainer.innerHTML = `<p>${assignment}</p>`;
// }


function validateRegistrationNumber(regNumber) {
    // Define a regular expression for the expected format
    const regex = /^[A-Z]{3}\d{4}-\d{8}$/; // Assuming the format is three uppercase letters, four digits, a hyphen, and eight digits.

    // Use the test method of the regular expression to check if it matches
    return regex.test(regNumber);
}

function generateAssignment() {
    const regNumber = document.getElementById('regNumber').value;

    if (validateRegistrationNumber(regNumber)) {
        const assignments = [
            `Write a Python program to find the sum of all numbers in a list.
            dfdfdfdfdfdfdfdfdfdfdfdffdfdf`,
            `Write a Python program to count the number of even and odd numbers in a list.
            ddfdfdfd`,
            `Write a Python program to check if a number is prime or not.
            dfdfdfdf`,
            `Write a Python program to find the factorial of a number.
            ddddfdfd`,
            // Add more assignment statements as needed
        ];

        // Generate a random index based on the registration number
        const randomIndex = regNumber.charCodeAt(0) % assignments.length;
        const assignment = assignments[randomIndex];

        const assignmentContainer = document.getElementById('assignmentContainer');
        assignmentContainer.innerHTML = `<p>${assignment}</p>`;
    } else {
        alert("Invalid roll number. Please enter a valid roll number in the format 'GLA2023-12345678'.");
    }
}

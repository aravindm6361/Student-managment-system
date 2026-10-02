let students = [];

let form = document.getElementById("studentform");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    addStudent();
});

function addStudent() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let Course = document.getElementById("Course").value;

    // Check empty fields
    if (name === "" || email === "" || age === "" || Course === "") {
        document.getElementById("message").textContent =
            "All fields are required to fill";
        return;
    }

    // Check age
    if (age < 18) {
        document.getElementById("message").textContent =
            "Age must be above 18";
        return;
    }

    // Create student object
    let student = {
        name: name,
        email: email,
        age: age,
        Course: Course
    };

    // Store student
    students.push(student);

    // Display students
    displayStudents();

    // Clear form
    form.reset();

    document.getElementById("message").textContent =
        "Form Submitted successfully!!";
}

function displayStudents() {

    let table = document.getElementById("studentTable");

    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Course</th>
        </tr>
    `;

    for (let i = 0; i < students.length; i++) {

        let row = `
            <tr>
                <td>${students[i].name}</td>
                <td>${students[i].email}</td>
                <td>${students[i].age}</td>
                <td>${students[i].Course}</td>
            </tr>
        `;

        table.innerHTML += row;
    }
}
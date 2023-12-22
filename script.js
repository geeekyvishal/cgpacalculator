function calculateCGPA() {
    const form = document.getElementById('cgpaForm');
    const courses = form.querySelectorAll('.course input:checked');
    let totalPoints = 0;
    let totalCredits = 18;

    courses.forEach(course => {
        const credit = (course.value === "0") ? 0 : 4; 
        // totalPoints += parseInt(course.value) * credit;
        totalPoints += parseInt(course.value);
        // totalCredits += credit;
    });


    const cgpa = totalPoints / totalCredits;
    // const cgpa = (totalCredits === 0) ? 0 : totalPoints / totalCredits;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Overall CGPA: ${cgpa.toFixed(2)}</p>`;
}

let courseCount = 0;

function addCourseField() 
{
    courseCount++;
    const coursesContainer = document.getElementById("coursesContainer");

    const courseField = document.createElement("div");
    courseField.setAttribute("id", `courseField${courseCount}`);
    courseField.innerHTML = `
        <input type="text" name="course${courseCount}" placeholder="Enter course name" required>
        <button type="button" onclick="removeCourseField(${courseCount})">Delete</button>
    `;

    coursesContainer.appendChild(courseField);
}

function removeCourseField(courseId) 
{
    const courseField = document.getElementById(`courseField${courseId}`);
    if (courseField) {
        courseField.remove();
    }
}

function validateForm(event) 
{
    event.preventDefault();
    const form = document.getElementById("infoform");
    const requiredFields = form.querySelectorAll("[required]");
    let allFilled = true;

    requiredFields.forEach(field => {
        if (!field.value) {
            allFilled = false;
            field.classList.add("missing-info");
        } else {
            field.classList.remove("missing-info");
        }
    });

    if (allFilled) {
        submitForm();
    } else {
        alert("Please fill in all required fields.");
    }
}

function submitForm() 
{
    const form = document.getElementById("infoform");
    const formData = new FormData(form);
    let outputHTML = "<h2>Survey Results</h2>";

    formData.forEach((value, key) => {
        if (key === "image" && value instanceof File) {
            if (value.type.startsWith("image/")) {
                const imageURL = URL.createObjectURL(value);
                outputHTML += `<p><strong>Image:</strong></p><img src="${imageURL}" alt="Uploaded Image" style="max-width: 200px; max-height: 200px;"><br>`;
            } else {
                outputHTML += `<p><strong>Image:</strong> ${value.name} (Not an image)</p>`;
            }
        } else {
            outputHTML += `<p><strong>${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> ${value}</p>`;
        }
    });

    outputHTML += `<button onclick="resetFormProgress()">Reset</button>`;
    form.innerHTML = outputHTML;
}


function resetFormProgress() 
{
    location.reload();
}
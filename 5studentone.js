
    const registerButtons = document.querySelectorAll(".item .subitem button");

    registerButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Get the course name from the button's parent element
            const courseName = this.parentElement.querySelector("h5").textContent;
            // Get the faculty name from the button's parent element
            const facultyName = this.parentElement.parentElement.parentElement.querySelector("h3").textContent;

            // Ask for confirmation before registering
            const confirmation = confirm("Are you sure you want to pay 1000rs to register for the course: " + courseName + " with faculty: " + facultyName + "?");

            // If the user confirms, add the course to the registered courses
            if (confirmation) {
                addRegisteredCourse(courseName, facultyName);
            }
        });
    });

    // Function to add the registered course to the list
    function addRegisteredCourse(courseName, facultyName) {
        // Create a new list item for the course
        const listItem = document.createElement("div");
        listItem.classList.add("registered-course");

        // Add the course name
        const courseHeading = document.createElement("h3");
        courseHeading.textContent = courseName;

        // Add the faculty name
        const facultyHeading = document.createElement("h4");
        facultyHeading.textContent = "Faculty: " + facultyName;

        // Add view button
        const viewButton = document.createElement("button");
        viewButton.textContent = "View";
        viewButton.classList.add("view-button");

        // Add event listener for the view button
        viewButton.addEventListener("click", function() {
            // Display an alert message with course and faculty details
            const alertMessage = "This course name is " + courseName + " with faculty: " + facultyName + ". It has many topics starting from beginners stage learning to advanced stage learning which helps you to create your own webpages and programs. Happy learning!!!";
            alert(alertMessage);

            // Navigate to the learning page
            window.location.href = "7learning.htm";
        });

        // Add delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");

        // Add event listener for the delete button
        deleteButton.addEventListener("click", function() {
            // Remove the course from the list of registered courses
            listItem.remove();
        });

        // Append elements to the list item
        listItem.appendChild(courseHeading);
        listItem.appendChild(facultyHeading);
        listItem.appendChild(viewButton);
        listItem.appendChild(deleteButton);

        // Append the list item to the registered courses container
        const registeredCoursesContainer = document.getElementById("registeredCourses");
        registeredCoursesContainer.appendChild(listItem);
    }

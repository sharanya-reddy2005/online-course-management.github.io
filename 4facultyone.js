
    const addCourseBtn = document.getElementById("addCourseBtn");
    const coursesList = document.getElementById("coursesList");

    addCourseBtn.addEventListener("click", function() {
        const courseName = prompt("Enter course name:");
        if (courseName) {
            addCourse(courseName);
        }
    });

    function addCourse(courseName) {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course");

        const courseNameSpan = document.createElement("span");
        courseNameSpan.classList.add("course-name");
        courseNameSpan.textContent = courseName;

        const viewBtn = document.createElement("button");
        viewBtn.classList.add("view");
        viewBtn.textContent = "View";
        viewBtn.addEventListener("click", function() {
            location.href="/6courseDetail.htm"
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            courseDiv.remove();
        });

        courseDiv.appendChild(courseNameSpan);
        courseDiv.appendChild(viewBtn);
        courseDiv.appendChild(deleteBtn);

        coursesList.appendChild(courseDiv);
    }



    const addTopicBtn = document.getElementById("addTopicBtn");
    const topicList = document.getElementById("topicList");
    const scheduleBtn=document.getElementById("schedule")

    addTopicBtn.addEventListener("click", function() {
        const topicName = prompt("Enter topic name:");
        if (topicName) {
            addTopic(topicName);
        }
    });
    scheduleBtn.addEventListener("click", function() {
        const scheduleDate = prompt("Enter schedule date (YYYY-MM-DD):");
        
        if (scheduleDate) {
            scheduleDateDisplay.textContent = `Scheduled Date: ${scheduleDate}`;
        }
    });

    function addTopic(topicName) {
        const topicDiv = document.createElement("div");
        topicDiv.classList.add("topic");

        const topicNameDiv = document.createElement("div");
        topicNameDiv.classList.add("topic-name");
        topicNameDiv.textContent = `Topic: ${topicName}`;

        const editTopicBtn = document.createElement("button");
        editTopicBtn.textContent = "Edit Name";
        editTopicBtn.classList.add("edit-topic-btn");
        editTopicBtn.addEventListener("click", function() {
            const newTopicName = prompt("Enter new topic name:", topicName);
            if (newTopicName) {
                topicNameDiv.textContent = `Topic: ${newTopicName}`;
            }
        });

        const deleteTopicBtn = document.createElement("button");
        deleteTopicBtn.textContent = "Delete";
        deleteTopicBtn.classList.add("delete-topic-btn");
        deleteTopicBtn.addEventListener("click", function() {
            topicDiv.remove();
        });

        const addFileBtn = document.createElement("button");
        addFileBtn.textContent = "Add File";
        addFileBtn.classList.add("add-file-btn");
        addFileBtn.addEventListener("click", function() {
            const fileInput = document.createElement("input");
            fileInput.type = "file";
            fileInput.addEventListener("change", function() {
                const fileList = document.createElement("ul");
                fileList.classList.add("file-list");

                const fileItem = document.createElement("li");
                const fileName = fileInput.files[0].name;
                fileItem.textContent = fileName;

                const deleteFileBtn = document.createElement("button");
                deleteFileBtn.textContent = "Delete File";
                deleteFileBtn.classList.add("delete-file-btn");
                deleteFileBtn.addEventListener("click", function() {
                    fileItem.remove();
                });

                fileItem.appendChild(deleteFileBtn);
                fileList.appendChild(fileItem);
                topicDiv.appendChild(fileList);
            });

            fileInput.click();
        });

        //scheduling

        topicDiv.appendChild(topicNameDiv);
        topicDiv.appendChild(editTopicBtn);
        topicDiv.appendChild(deleteTopicBtn);
        topicDiv.appendChild(addFileBtn);

        topicList.appendChild(topicDiv);

    }

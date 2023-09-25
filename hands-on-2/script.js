document.addEventListener("DOMContentLoaded", function () {
  loadCourses();
});

async function loadCourses() {
  try {
    const response = await fetch("https://api.minireg.thanayut.in.th/courses");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    displayCourses(data);
  } catch (error) {
    console.log("There was a problem:", error.message);
  }
}

function displayCourses(courses) {
  const courseContainer = document.createElement("div");
  courseContainer.className = "course-container";

  courses.forEach((course) => {
    const courseElement = document.createElement("div");
    courseElement.className = "course";

    const courseTitle = document.createElement("h3");
    courseTitle.textContent = course.name; // Assuming the course object has a 'name' property
    courseElement.appendChild(courseTitle);

    // Add more properties as needed

    courseContainer.appendChild(courseElement);
  });

  document.body.appendChild(courseContainer);
}

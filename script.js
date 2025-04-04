fetch('courses.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('categories');
    data.categories.forEach(cat => {
      const section = document.createElement('div');
      section.innerHTML = `<h2>${cat.name}</h2>`;
      cat.courses.forEach(course => {
        section.innerHTML += `
          <div class="course">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <iframe src="${course.video}" frameborder="0" allowfullscreen></iframe>
            <p><a href="${course.pdf}" target="_blank">Download PDF</a></p>
          </div>
        `;
      });
      container.appendChild(section);
    });
  });

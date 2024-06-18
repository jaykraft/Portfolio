document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: '2048 Game',
            description: 'A small but popular mobile game made using HTML, CSS and JavaScript.',
            skills: ['HTML', 'CSS', 'JavaScript'],
            image: './assets/images/2048_Logo.PNG',
            link: 'https://jaykraft.github.io/WebGame_2048/'
        },
        {
            title: 'Project Two',
            description: 'A web project using Bootstrap and JavaScript.',
            skills: ['Bootstrap', 'JavaScript'],
            image: '',
            link: '#'
        },
        {
            title: 'Project Three',
            description: 'A web project using all mentioned skills.',
            skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
            image: '',
            link: '#'
        }
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('col-md-4', 'project-card');

        const cardContent = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <img class="card-img" src="${project.image}">
                    <p class="card-text">${project.description}</p>
                    <p class="card-text"><strong>Skills:</strong> ${project.skills.join(', ')}</p>
                    <a href="${project.link}" class="btn btn-dark px-4">View</a>
                </div>
            </div>
        `;

        projectCard.innerHTML = cardContent;
        projectList.appendChild(projectCard);
    });
});

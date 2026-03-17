// Project data for carousel
const projects = [
    {
        title: 'Memoire',
        description: 'A full-stack memory resurfacing platform that lets users upload photo-based memories and receive them later through scheduled email delivery. Built with React, TypeScript, Node.js, Resend for email delivery, OpenAI for generated content, and Cloudinary for secure media storage, then deployed to Azure with CI/CD pipelines using GitHub Actions.',
        projectIcon: 'previews/memoirepreview.png',
        githubIcon: 'images/githublogo.svg',
        githubLink: 'https://github.com/Peluhott/memoire',
        liveLink: 'https://memoireclient.mangosky-85e31bca.eastus2.azurecontainerapps.io'
    },
    {
        title: 'GroupLink',
        description: 'A collaborative full-stack group management platform built with Java, HTML, CSS, and a SQL database. The backend handles user interactions and group functionality, while the frontend presents that functionality through a clean interface and supporting documentation.',
        projectIcon: 'previews/grouplinkpreview.png',
        githubIcon: 'images/githublogo.svg',
        githubLink: 'https://github.com/Peluhott/group-functionality'
    },
    {
        title: 'Shop Platform',
        description: 'A full-stack e-commerce platform with a backend RESTful API for product, order, and user management. Built role-based authentication and secure CRUD endpoints, then improved performance with Redis caching and pagination for scalable data access. Developed with TypeScript, Node.js, PostgreSQL, Prisma ORM, Cloudinary, and deployed across Render/Vercel.',
        projectIcon: 'previews/shoppreview.png',
        githubIcon: 'images/githublogo.svg',
        githubLink: 'https://github.com/Peluhott/shop-backend'
    }
];

const courses = [
  {
    title: "Software Engineering",
    shortDescription: "Covers software design, testing, collaboration, and maintainable application development.",
    internshipBenefits: "Strengthens the teamwork and engineering habits used in production software environments.",
    image: "images/SoftwareEngineering.png"
  },
  {
    title: "Big Data & Machine Learning",
    shortDescription: "Introduces data-heavy workflows, model building, and practical machine learning concepts.",
    internshipBenefits: "Builds intuition for working with large datasets and applying data-driven problem solving.",
    image: "images/numpy.svg"
  },
  {
    title: "Database Systems",
    shortDescription: "Focuses on relational design, normalization, querying, and database-backed application patterns.",
    internshipBenefits: "Supports backend development through stronger data modeling and SQL fundamentals.",
    image: "images/Database.png"
  },
  {
    title: "Artificial Intelligence",
    shortDescription: "Explores core AI ideas, decision making, and intelligent system behavior.",
    internshipBenefits: "Helps connect algorithmic thinking to modern AI-assisted and intelligent software systems.",
    image: "images/openai.svg"
  },
  {
    title: "Data Structures & Algorithms",
    shortDescription: "Covers efficient data organization, algorithm design, and runtime tradeoffs.",
    internshipBenefits: "Improves performance reasoning, backend problem solving, and technical interview readiness.",
    image: "images/DataStructures.png"
  },
  {
    title: "Data Science",
    shortDescription: "Combines statistical thinking, analysis, and interpretation for real-world datasets.",
    internshipBenefits: "Strengthens quantitative reasoning and evidence-based decision making in software projects.",
    image: "images/statistics.png"
  }
];

const skillGroups = [
  {
    title: 'Programming Languages',
    items: [
      { label: 'TypeScript', icon: 'images/typescript.png' },
      { label: 'Python', icon: 'images/python.svg' },
      { label: 'Java', icon: 'images/java.svg' },
      { label: 'HTML', icon: 'images/html.svg' },
      { label: 'CSS', icon: 'images/css.svg' },
      { label: 'SQL', icon: 'images/sql.png' },
      { label: 'JavaScript', icon: 'images/javascript.svg' }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { label: 'React', icon: 'images/react.svg' },
      { label: 'Node.js', icon: 'images/nodejs.png' },
      { label: 'Express', icon: 'images/express.svg' },
      { label: 'Spring Boot', icon: 'images/springboot.svg' },
      { label: 'Pandas', icon: 'images/pandas.svg' },
      { label: 'NumPy', icon: 'images/numpy.svg' },
      { label: 'Prisma', icon: 'images/prisma.svg' },
      { label: 'Redis', icon: 'images/redis.svg' }
    ]
  },
  {
    title: 'Development Tools',
    items: [
      { label: 'Claude', icon: 'images/anthropic.svg' },
      { label: 'Codex', icon: 'images/openai.svg' },
      { label: 'Copilot', icon: 'images/githubcopilot.svg' },
      { label: 'Git / GitHub', icon: 'images/githublogo.svg' }
    ]
  },
  {
    title: 'DevOps',
    items: [
      { label: 'Docker / DockerHub', icon: 'images/docker.svg' },
      { label: 'GitHub Actions', icon: 'images/githubactions.svg' },
      { label: 'Azure', icon: 'images/azure.svg' }
    ]
  }
];



function renderHomePage() {
    // Main container for combined Home/About
    const contentContainer = document.createElement('div');
    contentContainer.className = 'aboutme';

    // Left: Photo
    const leftContent = document.createElement('div');
    leftContent.className = 'left-content';
    const leftPicture = document.createElement('img');
    leftPicture.className = 'left-picture';
    leftPicture.src = 'images/greetpic2.png';
    leftPicture.alt = 'profile picture';
    leftContent.appendChild(leftPicture);

    // Right: Title, subtitle, email button
    const rightContent = document.createElement('div');
    rightContent.className = 'right-content';
    // Title
    const rightHeader = document.createElement('h1');
    rightHeader.className = 'right-header';
    rightHeader.textContent = "Hi, I'm Javier - Software Engineer";
    rightContent.appendChild(rightHeader);
    
 
    
    const aboutTextContainer = document.createElement('div');
    aboutTextContainer.className = 'aboutme-text';
    const aboutText = document.createElement('p');
    aboutText.innerHTML = ` I’m a Computer Science student at the University of North Carolina–Greensboro. I love learning and I’m passionate about building projects that make a real impact. My dream is to work in a place where technology is used to create meaningful change and help people.`;
    aboutTextContainer.appendChild(aboutText);
    rightContent.appendChild(aboutTextContainer);

    contentContainer.appendChild(leftContent);
    contentContainer.appendChild(rightContent);

    const homeSection = document.createElement('section');
    homeSection.id = 'home-section';
    homeSection.appendChild(contentContainer);

    return homeSection;
}

function renderJobSection() {
    const jobSection = document.createElement('section');
    jobSection.className = 'job-section';

    const jobTextContainer = document.createElement('div');
    jobTextContainer.className = 'job-section-text';
    const jobHeader = document.createElement('h2');
    jobHeader.textContent = 'Open to Fall 2026 Roles';
    const jobText = document.createElement('p');
    jobText.innerHTML = "I'm currently looking for a job starting in Fall 2026, with a strong interest in backend-focused roles. I can leverage AI tools to be more productive, I enjoy problem solving, and I'm naturally curious about how systems work under the hood. I'm especially interested in system design and building reliable software, and I'm familiar with working across multiple technologies in full-stack environments.<br><br>Outside of coding, you'll usually find me cooking, diving into a good book, or exploring YouTube rabbit holes.";
    jobTextContainer.appendChild(jobHeader);
    jobTextContainer.appendChild(jobText);

    const jobImage = document.createElement('div');
    jobImage.className = 'job-section-image';
    const placeholderImage = document.createElement('img');
    placeholderImage.src = 'images/2ndpicture.jpg';
    placeholderImage.alt = 'Javier portrait';
    jobImage.appendChild(placeholderImage);

    jobSection.appendChild(jobTextContainer);
    jobSection.appendChild(jobImage);

    return jobSection;
}

function renderContactSection() {
    const section = document.createElement('section');
    section.id = 'contact-section';
    section.className = 'contact-section';

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Me';

    const text = document.createElement('p');
    text.className = 'contact-copy';
    text.innerHTML = "If you'd like to talk about a backend role, a project, or anything I'm building, reach out and I'll get back to you.";

    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:j_sedanomar@uncg.edu';
    emailLink.className = 'contact-email-link';
    emailLink.textContent = 'j_sedanomar@uncg.edu';

    const contactLinks = document.createElement('div');
    contactLinks.className = 'contact-links';

    const links = [
        {
            href: 'mailto:j_sedanomar@uncg.edu',
            icon: 'images/emailLogo.png',
            alt: 'Email',
            label: 'Email'
        },
        {
            href: 'https://www.linkedin.com/in/javier-sedano/',
            icon: 'images/linkedinlogo.svg',
            alt: 'LinkedIn profile',
            label: 'LinkedIn'
        },
        {
            href: 'https://github.com/Peluhott',
            icon: 'images/githublogo.svg',
            alt: 'GitHub profile',
            label: 'GitHub'
        }
    ];

    links.forEach(linkData => {
        const link = document.createElement('a');
        link.href = linkData.href;
        link.target = '_blank';
        link.rel = 'noreferrer';
        link.className = 'contact-link-card';

        const icon = document.createElement('img');
        icon.src = linkData.icon;
        icon.alt = linkData.alt;

        const label = document.createElement('span');
        label.textContent = linkData.label;

        link.appendChild(icon);
        link.appendChild(label);
        contactLinks.appendChild(link);
    });

    section.appendChild(heading);
    section.appendChild(text);
    section.appendChild(emailLink);
    section.appendChild(contactLinks);

    return section;
}



function renderProject() {
  const section = document.createElement('section');
  section.id = 'projects-section';

  // --- Projects Section ---
  const projectsHeader = document.createElement('h1');
  projectsHeader.textContent = 'Projects';
  section.appendChild(projectsHeader);

  projects.forEach(project => {
    const projectRow = document.createElement('div');
    projectRow.className = 'project-row';

    // Left: Placeholder image
    const imgDiv = document.createElement('div');
    imgDiv.className = 'project-img';
    const img = document.createElement('img');
    img.src = project.projectIcon || 'https://via.placeholder.com/120x120?text=Project';
    img.alt = project.title + ' image';
    imgDiv.appendChild(img);

    // Right: Title, description, GitHub
    const infoDiv = document.createElement('div');
    infoDiv.className = 'project-info';
    const title = document.createElement('h2');
    title.textContent = project.title;
    infoDiv.appendChild(title);
    
    const desc = document.createElement('p');
    desc.textContent = project.description;
    infoDiv.appendChild(desc);
    
    if (project.githubLink) {
      const githubLink = document.createElement('a');
      githubLink.href = project.githubLink;
      githubLink.target = '_blank';
      githubLink.className = 'project-github-link';
      const githubImg = document.createElement('img');
      githubImg.src = project.githubIcon;
      githubImg.alt = 'GitHub repository';
      githubImg.className = 'github-icon small-github-icon';
      githubLink.appendChild(githubImg);
      infoDiv.appendChild(githubLink);
    }

    if (project.liveLink) {
      const liveLink = document.createElement('a');
      liveLink.href = project.liveLink;
      liveLink.target = '_blank';
      liveLink.className = 'project-live-link';
      liveLink.textContent = 'Live Site';
      infoDiv.appendChild(liveLink);
    }
    
    projectRow.appendChild(imgDiv);
    projectRow.appendChild(infoDiv);
    section.appendChild(projectRow);
  });

  return section;
}

function renderCoursesSection() {
  const section = document.createElement('section');
  section.id = 'courses-section';

  const coursesHeader = document.createElement('h1');
  coursesHeader.textContent = 'Relevant Courses Taken';
  section.appendChild(coursesHeader);

  const coursesGrid = document.createElement('div');
  coursesGrid.className = 'courses-grid';

  courses.forEach(course => {
    const courseRow = document.createElement('div');
    courseRow.className = 'course-row';

    // Left: Placeholder image
    const imgDiv = document.createElement('div');
    imgDiv.className = 'course-img';
    const img = document.createElement('img');
    img.src = course.image || 'https://via.placeholder.com/100x100?text=Course';
    img.alt = course.title + ' image';
    img.style.width = '100px';
    img.style.height = '100px';
    imgDiv.appendChild(img);

    // Right: Title, description, internship benefits
    const infoDiv = document.createElement('div');
    infoDiv.className = 'course-info';
    const title = document.createElement('h2');
    title.textContent = course.title;
    infoDiv.appendChild(title);
    const desc = document.createElement('p');
    desc.textContent = course.shortDescription;
    infoDiv.appendChild(desc);
    const benefits = document.createElement('p');
    benefits.textContent = course.internshipBenefits;
    benefits.style.fontStyle = 'italic';
    infoDiv.appendChild(benefits);

    courseRow.appendChild(imgDiv);
    courseRow.appendChild(infoDiv);
    coursesGrid.appendChild(courseRow); // <-- append to grid, not mainContainer
  });

  section.appendChild(coursesGrid);

  return section;
}


function renderSkills() {
    const section = document.createElement('section');
    section.id = 'skills-section';

    const skillsContentContainer = document.createElement('div');
    skillsContentContainer.className = 'skills-content-container';

    skillGroups.forEach(group => {
        const row = document.createElement('div');
        row.className = 'skillsrow';

        const heading = document.createElement('p');
        heading.textContent = group.title;
        row.appendChild(heading);

        const logosRow = document.createElement('div');
        logosRow.className = 'skills-logos-row';

        group.items.forEach(item => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';

            const icon = document.createElement('img');
            icon.src = item.icon;
            icon.alt = item.label;
            icon.className = 'skillicons';

            const label = document.createElement('span');
            label.textContent = item.label;

            skillItem.appendChild(icon);
            skillItem.appendChild(label);
            logosRow.appendChild(skillItem);
        });

        row.appendChild(logosRow);
        skillsContentContainer.appendChild(row);
    });

    section.appendChild(skillsContentContainer);

    return section;
}

function renderSinglePage(mainContainer) {
    mainContainer.innerHTML = '';
    mainContainer.appendChild(renderHomePage());
    mainContainer.appendChild(renderProject());
    mainContainer.appendChild(renderJobSection());
    mainContainer.appendChild(renderCoursesSection());
    mainContainer.appendChild(renderSkills());
    mainContainer.appendChild(renderContactSection());
}

document.addEventListener('DOMContentLoaded', function() {
    const mainContainer = document.querySelector('.main-content');
    renderSinglePage(mainContainer);
});

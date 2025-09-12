// Project data for carousel
const projects = [
    {
        title: 'Shop Platform  E-Commerce Backend',
        description: 'A full-stack e-commerce project featuring a RESTful API with Node.js, TypeScript, PostgreSQL, and Prisma. Supports secure JWT authentication, product/catalog management, carts, orders, and admin dashboards, with Cloudinary for media storage and Jest testing. React frontend planned.',
        projectIcon: 'images/shopbackend.png', 
        githubIcon: 'images/githublogo.svg',
        githubLink: 'https://github.com/Peluhott/shop-backend' 
    },
    {
        title: 'Memoire  Mood Support App (Work in Progress)',
        description: 'Memoire helps users overcome low moods by detecting sadness through wearable data (HRV, sleep quality) or self-reports and delivering uplifting, personalized content. Built with Node.js, TypeScript, PostgreSQL, Swift/React Native, and Cloudinary, it integrates with Apple Watch and Oura Ring, supports secure social logins, and allows users to upload, like, save, and share encouraging memories. To ensure effectiveness, the app itself decides when to deliver positive reminders.',
        projectIcon: 'images/memoire.png', 
        githubIcon: 'images/githublogo.svg',
        githubLink: ''
    }
];

const courses = [
  {
    title: "Software Engineering",
    shortDescription: "Principles of design, testing, version control, and project management.",
    internshipBenefits: "Prepares for teamwork, agile development, and producing scalable software.",
    image: "images/SoftwareEngineering.png"
  },
  {
    title: "Java Programming",
    shortDescription: "Covers object-oriented programming, data structures, and application design in Java.",
    internshipBenefits: "Write clean, maintainable code, debug effectively, and work with common frameworks.",
    image: "images/java.svg"
  },
  {
    title: "Calculus I & II",
    shortDescription: "Focus on limits, derivatives, integrals, series, and multivariable basics.",
    internshipBenefits: "Sharpens problem-solving and analytical thinking for algorithms and modeling.",
    image: "images/Calc.png"
  },
  {
    title: "Statistics",
    shortDescription: "Covers probability, distributions, hypothesis testing, and regression.",
    internshipBenefits: "Helps interpret data, validate results, and support data-driven decisions.",
    image: "images/statistics.png"
  },
  {
    title: "Discrete Mathematics",
    shortDescription: "Topics include logic, sets, relations, graphs, and combinatorics.",
    internshipBenefits: "Develops reasoning for algorithms, complexity analysis, and data structures.",
    image: "images/discrete.png"
  },
  {
    title: "Data Structures",
    shortDescription: "Study of arrays, linked lists, stacks, queues, trees, and graphs.",
    internshipBenefits: "Improves ability to optimize performance and solve coding interview problems.",
    image: "images/DataStructures.png"
  },
  {
    title: "Computer Organization & Assembly",
    shortDescription: "Covers hardware architecture, memory, and low-level programming.",
    internshipBenefits: "Gives insight into performance optimization and how code runs on hardware.",
    image: "images/ComputerOrg.png"
  },
  {
    title: "Principles of Databases",
    shortDescription: "Design and query relational databases using SQL and normalization.",
    internshipBenefits: "Enables building and maintaining databases, crucial for backend systems.",
    image: "images/Database.png"
  },
  {
    title: "Systems Programming",
    shortDescription: "Covers C programming, memory management, and OS-level concepts.",
    internshipBenefits: "Helps with debugging, performance tuning, and understanding operating systems.",
    image: "images/systems.png"
  },
  {
    title: "Concepts of Programming Languages",
    shortDescription: "Explores syntax, semantics, paradigms, and type systems.",
    internshipBenefits: "Improves adaptability to new languages and writing efficient code.",
    image: "images/programminglanguages.png"
  },
  {
    title: "Ethics in Computer Science",
    shortDescription: "Examines social, legal, and ethical issues in technology.",
    internshipBenefits: "Develops professionalism, responsibility, and awareness of ethical practices.",
    image: "images/Ethics.png"
  }
];



function renderHomePage(mainContainer) {
    mainContainer.innerHTML = '';
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
    aboutText.innerHTML = ` I’m a Computer Science student at the University of North Carolina–Greensboro. I love learning and I’m passionate about building projects that make a real impact. My dream is to work in a place where technology is used to create meaningful change and help people.<br><br> I’m currently looking for internship opportunities, feel free to reach out if you’d like to connect!<br><br>    Outside of coding, you’ll usually find me cooking, diving into a good book, or exploring YouTube rabbit holes.`;
    aboutTextContainer.appendChild(aboutText);
    rightContent.appendChild(aboutTextContainer);

    // Email action button
    const emailButton = document.createElement('a');
    emailButton.href = 'mailto:j_sedanomar@uncg.edu';
    emailButton.target = '_blank';
    emailButton.className = 'email-action-btn';

    // Add email icon to button (bigger, no text)
    const emailIcon = document.createElement('img');
    emailIcon.src = 'images/emailLogo.png';
    emailIcon.alt = 'Email';
    emailIcon.style.width = '2em';
    emailIcon.style.height = '2em';
    emailIcon.style.verticalAlign = 'middle';

    emailButton.appendChild(emailIcon);
    rightContent.appendChild(emailButton);
    
    contentContainer.appendChild(leftContent);
    contentContainer.appendChild(rightContent);

    // About Me text below
    
    
    mainContainer.appendChild(contentContainer)
    
    
}



function renderProject(mainContainer) {
  mainContainer.innerHTML = '';

  // --- Projects Section ---
  const projectsHeader = document.createElement('h1');
  projectsHeader.textContent = 'Projects';
  mainContainer.appendChild(projectsHeader);

  projects.forEach(project => {
    const projectRow = document.createElement('div');
    projectRow.className = 'project-row';

    // Left: Placeholder image
    const imgDiv = document.createElement('div');
    imgDiv.className = 'project-img';
    const img = document.createElement('img');
    img.src = project.projectIcon || 'https://via.placeholder.com/120x120?text=Project';
    img.alt = project.title + ' image';
    img.style.width = '120px';
    img.style.height = '120px';
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
    
    projectRow.appendChild(imgDiv);
    projectRow.appendChild(infoDiv);
    mainContainer.appendChild(projectRow);
  });

  
  const coursesHeader = document.createElement('h1');
  coursesHeader.textContent = 'Relevant Courses Taken';
  coursesHeader.style.marginTop = '2.5rem';
  mainContainer.appendChild(coursesHeader);

  // Add this before your courses.forEach
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

  mainContainer.appendChild(coursesGrid); // <-- append grid to mainContainer
}


function renderSkills(mainContainer) {
    mainContainer.innerHTML = '';

    // Create a content container for all skill rows
    const skillsContentContainer = document.createElement('div');
    skillsContentContainer.className = 'skills-content-container';

    const firstRow = document.createElement('div');
    firstRow.className = 'skillsrow';
    const secondRow = document.createElement('div');
    secondRow.className = 'skillsrow';
    const thirdRow = document.createElement('div');
    thirdRow.className = 'skillsrow';

    const firstText = document.createElement('p');
    firstText.textContent = 'Programming & Frameworks';
    firstRow.appendChild(firstText);
    const firstLogos = document.createElement('div');
    firstLogos.className = 'skills-logos-row';

    // Skill icons for Programming & Frameworks
    const javaIcon = document.createElement('img');
    javaIcon.src = 'images/java.svg';
    javaIcon.alt = 'Java';
    javaIcon.className = 'skillicons';
    firstLogos.appendChild(javaIcon);

    const jsIcon = document.createElement('img');
    jsIcon.src = 'images/javascript.svg';
    jsIcon.alt = 'JavaScript';
    jsIcon.className = 'skillicons';
    firstLogos.appendChild(jsIcon);

    const tsIcon = document.createElement('img');
    tsIcon.src = 'images/typescript.png';
    tsIcon.alt = 'TypeScript';
    tsIcon.className = 'skillicons';
    firstLogos.appendChild(tsIcon);

    const htmlIcon = document.createElement('img');
    htmlIcon.src = 'images/html.svg';
    htmlIcon.alt = 'HTML';
    htmlIcon.className = 'skillicons';
    firstLogos.appendChild(htmlIcon);

    const cssIcon = document.createElement('img');
    cssIcon.src = 'images/css.svg';
    cssIcon.alt = 'CSS';
    cssIcon.className = 'skillicons';
    firstLogos.appendChild(cssIcon);

    const reactIcon = document.createElement('img');
    reactIcon.src = 'images/react.svg';
    reactIcon.alt = 'React';
    reactIcon.className = 'skillicons';
    firstLogos.appendChild(reactIcon);

    const nodeIcon = document.createElement('img');
    nodeIcon.src = 'images/nodejs.png';
    nodeIcon.alt = 'Node.js';
    nodeIcon.className = 'skillicons';
    firstLogos.appendChild(nodeIcon);

    firstRow.appendChild(firstLogos);

    const secondText = document.createElement('p');
    secondText.textContent = 'Tools & Databases';
    secondRow.appendChild(secondText);
    const secondLogos = document.createElement('div');
    secondLogos.className = 'skills-logos-row';

    // Skill icons for Tools & Databases
    const sqlIcon = document.createElement('img');
    sqlIcon.src = 'images/sql.png';
    sqlIcon.alt = 'SQL';
    sqlIcon.className = 'skillicons';
    secondLogos.appendChild(sqlIcon);

    const prismaIcon = document.createElement('img');
    prismaIcon.src = 'images/prisma.svg';
    prismaIcon.alt = 'Prisma';
    prismaIcon.className = 'skillicons';
    secondLogos.appendChild(prismaIcon);

    const redisIcon = document.createElement('img');
    redisIcon.src = 'images/redis.svg';
    redisIcon.alt = 'Redis';
    redisIcon.className = 'skillicons';
    secondLogos.appendChild(redisIcon);

    const supabaseIcon = document.createElement('img');
    supabaseIcon.src = 'images/supabase.svg';
    supabaseIcon.alt = 'Supabase';
    supabaseIcon.className = 'skillicons';
    secondLogos.appendChild(supabaseIcon);

    const cloudinaryIcon = document.createElement('img');
    cloudinaryIcon.src = 'images/cloudinary.svg';
    cloudinaryIcon.alt = 'Cloudinary';
    cloudinaryIcon.className = 'skillicons';
    secondLogos.appendChild(cloudinaryIcon);

    const gitIcon = document.createElement('img');
    gitIcon.src = 'images/githublogo.svg';
    gitIcon.alt = 'Git';
    gitIcon.className = 'skillicons';
    secondLogos.appendChild(gitIcon);

    const postmanIcon = document.createElement('img');
    postmanIcon.src = 'images/postman.svg';
    postmanIcon.alt = 'Postman';
    postmanIcon.className = 'skillicons';
    secondLogos.appendChild(postmanIcon);

    const jestIcon = document.createElement('img');
    jestIcon.src = 'images/jest.png';
    jestIcon.alt = 'Jest';
    jestIcon.className = 'skillicons';
    secondLogos.appendChild(jestIcon);

    const vscodeIcon = document.createElement('img');
    vscodeIcon.src = 'images/visualcode.svg';
    vscodeIcon.alt = 'VS Code';
    vscodeIcon.className = 'skillicons';
    secondLogos.appendChild(vscodeIcon);

    secondRow.appendChild(secondLogos);

    const thirdText = document.createElement('p');
    thirdText.textContent = 'Design & AI';
    thirdRow.appendChild(thirdText);
    const thirdLogos = document.createElement('div');
    thirdLogos.className = 'skills-logos-row';

    // Skill icons for Design & AI
    const figmaIcon = document.createElement('img');
    figmaIcon.src = 'images/figma.svg';
    figmaIcon.alt = 'Figma';
    figmaIcon.className = 'skillicons';
    thirdLogos.appendChild(figmaIcon);

    const openaiIcon = document.createElement('img');
    openaiIcon.src = 'images/openai.svg';
    openaiIcon.alt = 'OpenAI';
    openaiIcon.className = 'skillicons';
    thirdLogos.appendChild(openaiIcon);

    thirdRow.appendChild(thirdLogos);

    // Append all rows to the content container
    skillsContentContainer.appendChild(firstRow);
    skillsContentContainer.appendChild(secondRow);
    skillsContentContainer.appendChild(thirdRow);

    // Add the content container to the main container
    mainContainer.appendChild(skillsContentContainer);
}

// Wire up nav links to render functions after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const mainContainer = document.querySelector('.main-content');
    const homeLink = document.getElementById('home-link');
    
    const projectsLink = document.getElementById('projects-link');
    const skillsLink = document.getElementById('skills-link');

    if (homeLink) homeLink.addEventListener('click', function(e) { e.preventDefault(); renderHomePage(mainContainer); });
    
    if (projectsLink) projectsLink.addEventListener('click', function(e) { e.preventDefault(); renderProject(mainContainer); });
    if (skillsLink) skillsLink.addEventListener('click', function(e) { e.preventDefault(); renderSkills(mainContainer); });

    // Render home page by default
    renderHomePage(mainContainer);
});

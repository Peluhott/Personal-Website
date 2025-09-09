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
        githubLink: '' // No link, work in progress
    }
];
function renderHomePage(mainContainer) {
    mainContainer.innerHTML = '';
    const contentContainer = document.createElement('div');
    contentContainer.className = 'home-page';

    const titleText = document.createElement('div');
    titleText.className = 'home-title';
    const titleElement = document.createElement('p');
    titleElement.className = 'home-header';
    titleElement.textContent = 'SedanoDev - Software Engineer';
    titleText.appendChild(titleElement);
    const subTitle = document.createElement('p');
    subTitle.className = 'home-subheader';
    subTitle.textContent = "I'm a computer science student who enjoys building impactful software";
    titleText.appendChild(subTitle);

    const aboutPhoto = document.createElement('div');
    aboutPhoto.className = 'home-photo';

    const aPhoto = document.createElement('img');
    aPhoto.className = 'home-photo';
    aPhoto.src = 'images/personallogo22.png';
    aPhoto.alt = 'descriptionOfLogo';
    aboutPhoto.appendChild(aPhoto);

    const socialLinks = document.createElement('div');
    //Linkedin, github, Email, Resume
    socialLinks.className = 'home-links';

    // LinkedIn
    const linkedInLink = document.createElement('a');
    linkedInLink.href = 'https://www.linkedin.com/in/javier-sedano/';
    linkedInLink.target = '_blank';
    const linkedInLogo = document.createElement('img');
    linkedInLogo.className = 'socialLinks';
    linkedInLogo.src = 'images/linkedinlogo.svg';
    linkedInLogo.alt = 'LinkedIn profile';
    linkedInLink.appendChild(linkedInLogo);
    socialLinks.appendChild(linkedInLink);

    // GitHub
    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/Peluhott';
    githubLink.target = '_blank';
    const githubLogo = document.createElement('img');
    githubLogo.className = 'socialLinks';
    githubLogo.src = 'images/githublogo.svg';
    githubLogo.alt = 'GitHub profile';
    githubLink.appendChild(githubLogo);
    socialLinks.appendChild(githubLink);

    // Email
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:j_sedanomar@uncg.edu';
    emailLink.target = '_blank';
    const emailLogo = document.createElement('img');
    emailLogo.className = 'socialLinks';
    emailLogo.src = 'images/emaillogo.svg';
    emailLogo.alt = 'Send email';
    emailLink.appendChild(emailLogo);
    socialLinks.appendChild(emailLink);

    // Resume
    const resumeLink = document.createElement('a');
    resumeLink.href = 'resume/90125resume.pdf';
    resumeLink.download = 'SedanoDev-Resume.pdf'; 
    const resumeLogo = document.createElement('img');
    resumeLogo.className = 'socialLinks';
    resumeLogo.src = 'images/resumelogo.svg';
    resumeLogo.alt = 'View resume';
    resumeLink.appendChild(resumeLogo);
    socialLinks.appendChild(resumeLink);

    contentContainer.appendChild(titleText);
    contentContainer.appendChild(aboutPhoto);
    contentContainer.appendChild(socialLinks);
    mainContainer.appendChild(contentContainer);
}

function renderAboutMe(mainContainer) {
    mainContainer.innerHTML = '';
    const aboutContentContainer = document.createElement('div');
    aboutContentContainer.className = 'aboutme';
    const leftContent = document.createElement('div');
    leftContent.className = 'left-content';
    const leftPicture = document.createElement('img');
    leftPicture.className = 'left-picture';
    leftPicture.src = 'images/greetpic2.png';
    leftPicture.alt = 'profile picture';
    const leftIntro = document.createElement('p');
    leftIntro.textContent = "Hey, I'm Javier!";
    leftContent.appendChild(leftPicture);
    leftContent.appendChild(leftIntro);
    aboutContentContainer.appendChild(leftContent);

    const rightContent = document.createElement('div');
    rightContent.className = 'right-content';
    const rightHeader = document.createElement('p');
    rightHeader.textContent = "About Me"
    rightHeader.className = 'right-header'
    const rightTextContent = document.createElement('p');
    rightTextContent.className = 'rightText';
    rightTextContent.innerHTML = `I’m a Computer Science student at the University of North Carolina–Greensboro. I love learning and I’m passionate about building projects that make a real impact. My dream is to work in a place where technology is used to create meaningful change and help people.<br><br>I’m currently looking for internship opportunities, feel free to reach out if you’d like to connect!<br><br>Outside of coding, you’ll usually find me cooking, diving into a good book, or exploring YouTube rabbit holes.`;
    rightContent.appendChild(rightHeader);
    rightContent.appendChild(rightTextContent);

    aboutContentContainer.appendChild(rightContent);
    mainContainer.appendChild(aboutContentContainer);
}

function renderProject(mainContainer) {
    mainContainer.innerHTML = '';

        // Carousel state
        let currentIndex = 0;

    // Carousel container
    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'carousel-container';

    // Left arrow (outside card)
    const leftArrow = document.createElement('button');
    leftArrow.className = 'carousel-arrow left-arrow';
    leftArrow.innerHTML = '&#8592;';
    leftArrow.setAttribute('aria-label', 'Previous project');

    // Right arrow (outside card)
    const rightArrow = document.createElement('button');
    rightArrow.className = 'carousel-arrow right-arrow';
    rightArrow.innerHTML = '&#8594;';
    rightArrow.setAttribute('aria-label', 'Next project');

    // Project card container
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    // Render project card
    function renderProjectCard(index) {
        const project = projects[index];
        projectCard.innerHTML = '';

        // --- Image Section (left) ---
        const imageSection = document.createElement('div');
        imageSection.className = 'project-image-section';
        const iconImg = document.createElement('img');
        iconImg.src = project.projectIcon;
        iconImg.alt = project.title + ' icon';
        iconImg.className = 'project-icon';
        imageSection.appendChild(iconImg);

        // --- Info Section (right) ---
        const infoSection = document.createElement('div');
        infoSection.className = 'project-info-section';
        // Title
        const title = document.createElement('h2');
        title.className = 'project-title';
        title.textContent = project.title;
        infoSection.appendChild(title);
        // If Memoire, add a visible label
        if (project.title.includes('Memoire')) {
            const wipLabel = document.createElement('span');
            wipLabel.className = 'wip-label';
            wipLabel.textContent = 'Work in Progress';
            infoSection.appendChild(wipLabel);
        }
        // Description
        const desc = document.createElement('p');
        desc.className = 'project-description';
        desc.textContent = project.description;
        infoSection.appendChild(desc);
        // Only show GitHub link if there is a link
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
            infoSection.appendChild(githubLink);
        }

        // Add both sections to card (image left, info right)
        projectCard.appendChild(imageSection);
        projectCard.appendChild(infoSection);
    }

    // Arrow event listeners
    leftArrow.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        renderProjectCard(currentIndex);
    });
    rightArrow.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % projects.length;
        renderProjectCard(currentIndex);
    });

    // Initial render
    renderProjectCard(currentIndex);

    // Layout: arrows outside card
    carouselContainer.appendChild(leftArrow);
    carouselContainer.appendChild(projectCard);
    carouselContainer.appendChild(rightArrow);
    mainContainer.appendChild(carouselContainer);
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
    const aboutLink = document.getElementById('about-link');
    const projectsLink = document.getElementById('projects-link');
    const skillsLink = document.getElementById('skills-link');

    if (homeLink) homeLink.addEventListener('click', function(e) { e.preventDefault(); renderHomePage(mainContainer); });
    if (aboutLink) aboutLink.addEventListener('click', function(e) { e.preventDefault(); renderAboutMe(mainContainer); });
    if (projectsLink) projectsLink.addEventListener('click', function(e) { e.preventDefault(); renderProject(mainContainer); });
    if (skillsLink) skillsLink.addEventListener('click', function(e) { e.preventDefault(); renderSkills(mainContainer); });

    // Render home page by default
    renderHomePage(mainContainer);
});

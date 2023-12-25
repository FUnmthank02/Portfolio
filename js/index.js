AOS.init();
const header = document.querySelector("#header");
const navbar = document.querySelector("#navbar");
const bar = document.querySelector("#bar");
const menu = document.querySelector("#menu");
const mobile_nav_item = document.querySelectorAll(".nav_item");
const navbar_items = document.querySelectorAll("#navbar a");
const btn_up = document.querySelector("#wrap_btn_up");
const logo = document.querySelector(".text-logo");
const containerSkillTech = document.querySelector("#skill_tech");
const containerSkillToolsLib = document.querySelector("#skill_tools_lib");
const containerSkillClouds = document.querySelector("#skill_clouds");
const containerSkillSoft = document.querySelector("#skill_soft");
const containerProjects = document.querySelector("#wrap-projects");
const containerCarousel = document.querySelector("#carousel_inner");

const listTechs = [
  {
    name: "Html",
    image: "../assets/images/skills/html.png"
  },
  {
    name: "Css",
    image: "../assets/images/skills/css.png"
  },
  {
    name: "JavaScript",
    image: "../assets/images/skills/js.png"
  },
  {
    name: "TypeScript",
    image: "../assets/images/skills/ts.png"
  },
  {
    name: "Jquery",
    image: "../assets/images/skills/jquery.png"
  },
  {
    name: "ReactJS",
    image: "../assets/images/skills/reactjs.png"
  },
  {
    name: "NextJS",
    image: "../assets/images/skills/nextjs.png"
  },
  {
    name: ".Net",
    image: "../assets/images/skills/dotnet.png"
  },
  {
    name: "Microsoft SQL Server",
    image: "../assets/images/skills/sqlserver.png"
  },
]
const listToolsLib = [
  {
    name: "Tailwind Css",
    image: "../assets/images/skills/tailwind.png"
  },
  {
    name: "Bootstrap",
    image: "../assets/images/skills/bootstrap.png"
  },
  {
    name: "MUI",
    image: "../assets/images/skills/mui.png"
  },
  {
    name: "Ant Design",
    image: "../assets/images/skills/antd.png"
  },
  {
    name: "Sass",
    image: "../assets/images/skills/sass.png"
  },
  {
    name: "Redux Toolkit",
    image: "../assets/images/skills/redux.png"
  },
  {
    name: "I18next",
    image: "../assets/images/skills/i18n.png"
  },
  {
    name: "Figma",
    image: "../assets/images/skills/figma.png"
  },
  {
    name: "Git",
    image: "../assets/images/skills/git.png"
  },
  {
    name: "Postman",
    image: "../assets/images/skills/postman.png"
  },
  {
    name: "Visual Studio Code",
    image: "../assets/images/skills/vscode.png"
  },
  {
    name: "Visual Studio",
    image: "../assets/images/skills/visual.png"
  },
]
const listClouds = [
  {
    name: "Firebase",
    image: "../assets/images/skills/firebase.png"
  },
  {
    name: "Azure",
    image: "../assets/images/skills/azure.png"
  },
  {
    name: "Vercel",
    image: "../assets/images/skills/vercel.png"
  },
  {
    name: "Netlify",
    image: "../assets/images/skills/netlify.png"
  },
]
const listSoftSkills = [
  {
    name: "English Communication",
    image: "../assets/images/skills/eng_communication.png"
  },
  {
    name: "Teamwork",
    image: "../assets/images/skills/teamwork.png"
  },
  {
    name: "High Responsibility",
    image: "../assets/images/skills/responsible.png"
  },
  {
    name: "Problem Solving",
    image: "../assets/images/skills/problem_solving.png"
  },
  {
    name: "Time Management",
    image: "../assets/images/skills/time_management.png"
  },
  {
    name: "Presentation",
    image: "../assets/images/skills/presentation.png"
  },
]
const listProjects = [
  {
    id: 1,
    name: "NMT Insta",
    description: `This is a project about social network. With the purpose of create a place for people to enjoy, 
    connect each other online. Here you can share your photos, save your memorable moments, chat with friends,...`,
    images: [
      "../assets/images/projects/insta_1.jpg",
      "../assets/images/projects/insta_2.jpg",
      "../assets/images/projects/insta_3.jpg",
      "../assets/images/projects/insta_4.jpg",
    ]
  },
]

  // Generate HTML strings for each technology
  const techHtmlStrings = listTechs.map(tech => `
    <div class="flex items-center flex-col" data-aos="zoom-out-up" data-aos-duration="800">
      <div class="rounded-full bg-white shadow-slate-400 shadow-md overflow-hidden flex items-center justify-center w-20 lg:w-24 h-20 lg:h-24">
        <img src="${tech.image}" alt="${tech.name}" class="w-auto h-12 hover:scale-125 transition-transform">
      </div>
      <p class="font-semibold my-3 text-center text-sm lg:text-lg">${tech.name}</p>
    </div>
  `);
  containerSkillTech.innerHTML = techHtmlStrings.join('');

  // Generate HTML strings for each tool or library
  const toolsHtmlStrings = listToolsLib.map(tool => `
    <div class="flex items-center flex-col" data-aos="zoom-out-up" data-aos-duration="800">
      <div class="rounded-full bg-white shadow-slate-400 shadow-md overflow-hidden flex items-center justify-center w-20 lg:w-24 h-20 lg:h-24">
        <img src="${tool.image}" alt="${tool.name}" class="w-auto h-12 hover:scale-125 transition-transform">
      </div>
      <p class="font-semibold my-3 text-center text-sm lg:text-lg">${tool.name}</p>
    </div>
  `);
  containerSkillToolsLib.innerHTML = toolsHtmlStrings.join('');

  // Generate HTML strings for each cloud
  const cloudHtmlStrings = listClouds.map(cloud => `
    <div class="flex items-center flex-col" data-aos="zoom-out-up" data-aos-duration="800">
      <div class="rounded-full bg-white shadow-slate-400 shadow-md overflow-hidden flex items-center justify-center w-20 lg:w-24 h-20 lg:h-24">
        <img src="${cloud.image}" alt="${cloud.name}" class="w-auto h-12 hover:scale-125 transition-transform">
      </div>
      <p class="font-semibold my-3 text-center text-sm lg:text-lg">${cloud.name}</p>
    </div>
  `);
  containerSkillClouds.innerHTML = cloudHtmlStrings.join('');

  // Generate HTML strings for each soft skill
  const softSkillHtmlStrings = listSoftSkills.map(softSkill => `
    <div class="flex items-center flex-col" data-aos="zoom-out-up" data-aos-duration="800">
      <div class="rounded-full bg-white shadow-slate-400 shadow-md overflow-hidden flex items-center justify-center w-20 lg:w-24 h-20 lg:h-24">
        <img src="${softSkill.image}" alt="${softSkill.name}" class="w-auto h-12 hover:scale-125 transition-transform">
      </div>
      <p class="font-semibold my-3 text-center text-sm lg:text-lg">${softSkill.name}</p>
    </div>
  `);
  containerSkillSoft.innerHTML = softSkillHtmlStrings.join('');

  // Generate HTML strings for each project
  const projectHtmlStrings = listProjects.map(item => `
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16 py-5 px-3 md:p-5 lg:p-5">
      <div class="wrap_img_item_projects group rounded-md bg-white shadow-slate-400 shadow-md overflow-hidden flex items-center justify-center aspect-video"
      >
        <img src="${item.images[0]}" alt="${item.name}" class="img_item_projects w-full h-full">
        <div class="overlay_projects group-hover:translate-y-0">
          <p class="py-2 px-4 font-bold text-xl text-black left-2/4 top-2/4 absolute"
            >${item.name}</p>
        </div>
      </div>
      <div>
        <p class="font-semibold my-3 text-xl" data-aos="zoom-in-left" data-aos-duration="800">
          <a href="https://nmt-insta.vercel.app/" target="_blank" class="no-underline hover:text-inherit">${item.name}</a>
        </p>
        <p class="font-medium my-3 text-justify" data-aos="zoom-in-left" data-aos-duration="800">${item.description}</p>
        <button onclick="handleShowImages(${item.id})" class="py-2 px-4 font-medium text-sm bg-orange-300 text-white rounded-md"
          type="button" data-bs-toggle="modal" data-aos="zoom-in-left" data-aos-duration="800" data-bs-target="#exampleModal">View Images</button>
      </div>
    </div>
  `);
  containerProjects.innerHTML = projectHtmlStrings.join('');

  const handleShowImages = (id) => {
    // Generate HTML strings for each slider
    const project = listProjects.find(p => p.id === id);
    const swiperHtmlStrings = project.images.map((item, index) => `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <img src="${item}" class="d-block w-100" alt="img">
      </div>
    `);
    containerCarousel.innerHTML = swiperHtmlStrings.join('');
  }

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("bg-blue-500");
    header.classList.remove("bg-orange-50");
    header.classList.add("py-4");
    header.classList.remove("py-6");
    navbar.classList.add("text-white");
    navbar.classList.remove("text-black");
    logo.classList.remove("text-black");
    logo.classList.add("text-white");
    btn_up.classList.add("block");
    btn_up.classList.remove("hidden");
    navbar_items.forEach(item => {
      item.classList.add("hover:decoration-white");
      item.classList.remove("hover:decoration-black");
    });
    bar.classList.add("text-white");
    bar.classList.remove("text-black");
  } else {
    header.classList.remove("bg-blue-500");
    header.classList.add("bg-orange-50");
    header.classList.add("py-6");
    header.classList.remove("py-4");
    navbar.classList.remove("text-white");
    navbar.classList.add("text-black");
    logo.classList.add("text-black");
    logo.classList.remove("text-white");
    btn_up.classList.add("hidden");
    btn_up.classList.remove("block");
    navbar_items.forEach(item => {
      item.classList.remove("hover:decoration-white");
      item.classList.add("hover:decoration-black");
    });
    bar.classList.remove("text-white");
    bar.classList.add("text-black");
  }
});

btn_up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

bar.addEventListener("click", () => {
  if (menu.classList.contains("-translate-x-full")) {
    menu.classList.add("translate-x-0");
    menu.classList.remove("-translate-x-full");
  }
});
mobile_nav_item.forEach(item => {
  item.addEventListener("click", () => {
    if (menu.classList.contains("translate-x-0")) {
      menu.classList.remove("translate-x-0");
      menu.classList.add("-translate-x-full");
    }
  });
})

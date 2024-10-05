export const navList = [
  {
    id: "1lsjkf",
    toLink: "about",
    text: "About",
  },
  {
    id: "1lsjsfdfekf",
    toLink: "experience",
    text: "Experience",
  },
  {
    id: "1lfdgdrtesjkf",
    toLink: "projects",
    text: "Projects",
  },
  {
    id: "sdfseg",
    toLink: "contact",
    text: "Contact",
  },
];

export const skillList = [
  {
    id: "sdfsdfasdf",
    skill: "html",
    level: "experienced",
  },
  {
    id: "sdfsdfaersdf",
    skill: "css",
    level: "experienced",
  },
  {
    id: "sdfsdfaghgsdf",
    skill: "sass",
    level: "experienced",
  },
  {
    id: "sdfsdfsfasdf",
    skill: "javascript",
    level: "experienced",
  },
  {
    id: "hjkkl",
    skill: "TypeScript",
    level: "experienced",
  },
  {
    id: "sdf",
    skill: "MaterialUI",
    level: "experienced",
  },
  {
    id: "sdfsdfsfa;'lsdf",
    skill: "React",
    level: "experienced",
  },
  {
    id: "sdfsdfklksfasdf",
    skill: "Vue",
    level: "experienced",
  },
];

// Define the Project interface
interface Project {
  imageLink: string;
  githubLink: string;
  liveDemoLink: string;
  title: string;
  id: string;
}

// Create an array of projects
export const projects: Project[] = [
  {
    imageLink:
      "https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/user/project1",
    liveDemoLink: "https://project1.demo.com",
    title: "Project One Project Project Project Project",
    id: "a1b2c3d4",
  },
  {
    imageLink:
      "https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/user/project2",
    liveDemoLink: "https://project2.demo.com",
    title: "Project Two",
    id: "e5f6g7h8",
  },
  {
    imageLink:
      "https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/user/project3",
    liveDemoLink: "https://project3.demo.com",
    title: "Project Three",
    id: "i9j0k1l2",
  },
  {
    imageLink:
      "https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/user/project4",
    liveDemoLink: "https://project4.demo.com",
    title: "Project Four",
    id: "m3n4o5p6",
  },
  {
    imageLink:
      "https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubLink: "https://github.com/user/project5",
    liveDemoLink: "https://project5.demo.com",
    title: "Project Five",
    id: "q7r8s9t0",
  },
];

import Sessions from "./Sessions.js";

let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
  sidebar.classList.toggle("active");
};

//Sessions

//HomeDefault
const homeContent = new Sessions("Hi, I'm Jonatha.", "Contact Me");

const homeSession = `
<header><span class="titleHome">${homeContent.sessionTitleHome}</span></header>

            <a class="btnContactme">
                <div class="btnContainer"><span class="btnText">${homeContent.sessionButton}</span></div>
`;

const mainHome = document.querySelector(".maincontent");

mainHome.innerHTML = homeSession;

//AboutMe

document.querySelector("#aboutJon").addEventListener("click", aboutJon);

function aboutJon() {
  const aboutMe = new Sessions("", "", "About Me", "This is the text about me");
  const aboutMeSession = `
  <header><span class="titleHome">${aboutMe.sessionTitle}</span></header>
              <div class="description">
              <p>${aboutMe.sessionDescription}</p>
              </div>
  `;
  const mainAbout = document.querySelector(".maincontent");
  mainAbout.innerHTML = aboutMeSession;
}

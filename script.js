// Container 1
let container = document.createElement("div");
container.setAttribute("class", "container");

// Navbar
let nav = document.createElement("nav");
let navin = document.createElement("div");
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let navp1 = document.createElement("p");

document.body.append(nav);
nav.append(container);
container.append(navin);
navin.append(navp1);
navin.append(ul);
ul.append(li1, li2, li3, li4);

li1.innerText = "Home";
li2.innerText = "Resume";
li3.innerText = "Projects";
li4.innerText = "Contact";
navp1.innerText = "StartBootstrap";

navin.setAttribute("class", "nav-in");




navin.style.display = "flex";
navin.style.justifyContent = "space-between";
navin.style.alignItems = "center";
navin.style.paddingTop = "20px";
navin.style.paddingRight = "10%";
navin.style.paddingLeft = "10%";
navin.style.paddingBottom = "20px";

li1.style.listStyle = "none";
li1.style.display = "inline-block";
li1.style.padding = "10px 15px";
li1.style.fontWeight = "bold";
li1.style.color = "#0000008C";
li1.style.cursor = "pointer";

li2.style.listStyle = "none";
li2.style.display = "inline-block";
li2.style.padding = "10px 15px";
li2.style.fontWeight = "bold";
li2.style.color = "#0000008C";
li2.style.cursor = "pointer";

li3.style.listStyle = "none";
li3.style.display = "inline-block";
li3.style.padding = "10px 15px";
li3.style.fontWeight = "bold";
li3.style.color = "#0000008C";
li3.style.cursor = "pointer";

li4.style.listStyle = "none";
li4.style.display = "inline-block";
li4.style.padding = "10px 15px";
li4.style.fontWeight = "bold";
li4.style.color = "#0000008C";
li4.style.cursor = "pointer";

navp1.style.fontSize = "25px";
navp1.style.fontWeight = "bold";
navp1.style.color = "#1E30F3";
navp1.style.cursor = "pointer";



// Section1
let section1 = document.createElement("section");
let sec1in = document.createElement("div");
let fortext = document.createElement("div");
let forimg = document.createElement("div");
let secp1 = document.createElement("p");
let secp2 = document.createElement("p");
let secp3 = document.createElement("p");
let secp4 = document.createElement("p");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let img = document.createElement("img");

document.body.append(section1);
section1.append(container);
container.append(sec1in);
sec1in.append(fortext);
fortext.append(secp1, secp2, secp3, secp4);
fortext.append(btn1, btn2);
sec1in.append(forimg);
forimg.append(img);

secp1.innerText = "DESIGN · DEVELOPMENT · MARKETING";
secp2.innerText = "I can help your business to";
secp3.innerText = "Get online and";
secp4.innerText = "grow fast";
btn1.innerText = "Resume";
btn2.innerText = "Projects";

section1.setAttribute("class", "section1");
sec1in.setAttribute("class", "sec1-in");
secp1.setAttribute("class", "sec1-p1");
secp2.setAttribute("class", "sec1-p2");
secp3.setAttribute("class", "sec1-p3");
secp4.setAttribute("class", "sec1-p4");
forimg.setAttribute("class", "forimg");
btn1.setAttribute("class", "btn1");
btn2.setAttribute("class", "btn2");
img.setAttribute("src", "https://startbootstrap.github.io/startbootstrap-personal/assets/profile.png");
img.classList.add("image");


// Section 2
let section2 = document.createElement("section");
let sec2in = document.createElement("div");
let sec2h1 = document.createElement("h1");
let sec2p1 = document.createElement("p");
let sec2p2 = document.createElement("p");
let sec2p3 = document.createElement("p");
let sec2p4 = document.createElement("p");

document.body.append(section2);
section2.append(sec2in);
sec2in.append(sec2h1, sec2p1, sec2p2, sec2p3, sec2p4);

sec2h1.innerText = "About Me";
sec2p1.innerText = "My name is Start Bootstrap and I help brands grow.";
sec2p2.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam";
sec2p3.innerText = "consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione";
sec2p4.innerText = "atque dolorem?";

section2.classList.add("section2");
sec2in.classList.add("sec2-in");
sec2h1.classList.add("sec2-h1");
sec2p1.classList.add("sec2-p1");
sec2p2.classList.add("sec2-p2");
sec2p3.classList.add("sec2-p3");
sec2p4.classList.add("sec2-p4");




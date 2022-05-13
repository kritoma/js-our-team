const container = document.querySelector(".team-container");

const listCard = [{
    user : "Wayne Barnett",
    role : "Founder & CEO",
    image : "img/wayne-barnett-founder-ceo.jpg",
},
{
    user : "Angela Caroll",
    role : "Chief Editor",
    image : "img/angela-caroll-chief-editor.jpg",
},
{
    user : "Walter Gordon",
    role : "Office Manager",
    image : "img/walter-gordon-office-manager.jpg",
},
{
    user : "Angela Lopez",
    role : "Social Media Manager",
    image :"img/angela-lopez-social-media-manager.jpg",
},
{
    user : "Scott Estrada",
    role : "Developer",
    image : "img/scott-estrada-developer.jpg",
},
{
    user : "Barbare Ramos",
    role : "Graphic Designer",
    image : "img/barbara-ramos-graphic-designer.jpg",
},
];

for (let i = 0; i < listCard.length; i++) {
    const card =`
        <div class="team-card">
            <div class="card-image">
              <img
                src=${listCard[i].image}
                alt=${listCard[i].user}
              />
            </div>
            <div class="card-text">
              <h3>${listCard[i].user}</h3>
              <p>${listCard[i].role}</p>
            </div>
        </div>
    `
    container.innerHTML += card
}
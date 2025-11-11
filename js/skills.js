let categorias = [];

async function carregarSkills() {
    const res = await fetch("./js/skills.json");
    categorias = await res.json();
    renderSkills();
}

function renderSkills() {
    const container = document.getElementById("skills__container");

    container.innerHTML = categorias.map(cat => `
        <div class="skill__card" style="background:${cat.color}">
            <h2>${cat.category}</h2>
            <div class="skill__list">
                ${cat.skills.map(s => `
                    <span class="skill__item">${s}</span>
                `).join("")}
            </div>
        </div>
    `).join("");
}

carregarSkills();

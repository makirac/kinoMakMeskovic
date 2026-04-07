let trenutnaProjekcija = 0;

function prikaziSalu() {
    const divSala = document.querySelector(".seating");
    divSala.innerHTML = "";

    if (!podaci.projekcije || podaci.projekcije.length === 0) {
        divSala.innerText = "Podaci nisu validni!";
        return;
    }

    const projekcija = podaci.projekcije[trenutnaProjekcija];

    // Ažuriranje headera
    document.querySelector("header h1").innerText = `Film: ${projekcija.film}`;
    document.querySelector("header p").innerText = `Vrijeme: ${projekcija.vrijeme} | Sala: 3`;

    const redovi = ["A","B","C","D","E","F","G","H"];
    for (const red of redovi) {
        const redDiv = document.createElement("div");
        redDiv.classList.add("row-letter");
        redDiv.innerText = red;
        divSala.appendChild(redDiv);

        for (let i = 1; i <= 10; i++) {
            const seat = document.createElement("div");
            seat.classList.add("seat");

            // Pronađi sjedište u podacima ili kreiraj novo slobodno
            let s = projekcija.sjedista.find(x => x.red === red && x.broj === i);
            if (!s) {
                s = { red: red, broj: i, status: "free" };
                projekcija.sjedista.push(s);
            }

            seat.classList.add(s.status);

            seat.addEventListener("click", () => {
                if (s.status === "free") {
                    s.status = "reserved";
                    prikaziSalu();
                }
            });

            divSala.appendChild(seat);
        }
    }

    // Dugmad za navigaciju projekcija
    let navDiv = document.querySelector(".nav-buttons");
    if (!navDiv) {
        navDiv = document.createElement("div");
        navDiv.classList.add("nav-buttons");
        navDiv.style.marginBottom = "30px";

        const btnPrev = document.createElement("button");
        btnPrev.innerText = "Prethodna projekcija";
        btnPrev.onclick = () => {
            if (trenutnaProjekcija > 0) {
                trenutnaProjekcija--;
                prikaziSalu();
            }
        };

        const btnNext = document.createElement("button");
        btnNext.innerText = "Sljedeća projekcija";
        btnNext.style.marginLeft = "10px";
        btnNext.onclick = () => {
            if (trenutnaProjekcija < podaci.projekcije.length - 1) {
                trenutnaProjekcija++;
                prikaziSalu();
            }
        };

        navDiv.appendChild(btnPrev);
        navDiv.appendChild(btnNext);
        divSala.parentNode.insertBefore(navDiv, divSala.nextSibling);
    }
}

document.addEventListener("DOMContentLoaded", prikaziSalu);
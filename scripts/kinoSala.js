let trenutnaProjekcija = 0;

function sacuvaj() {
    localStorage.setItem("kinoPodaci", JSON.stringify(podaci));
}

function prikaziSalu() {
    const divSala = document.querySelector(".seating");
    divSala.innerHTML = "";

    const projekcija = podaci.projekcije[trenutnaProjekcija];

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

            let s = projekcija.sjedista.find(x => x.red === red && x.broj === i);

            if (!s) {
                s = { red, broj: i, status: "free" };
                projekcija.sjedista.push(s);
            }

            seat.classList.add(s.status);

            seat.addEventListener("click", () => {
                if (s.status === "free") {
                    s.status = "reserved";

                    sacuvaj(); // 🔥 PAMTI U BAZU

                    prikaziSalu();
                }
            });

            divSala.appendChild(seat);
        }
    }

    let navDiv = document.querySelector(".nav-buttons");

    if (!navDiv) {
        navDiv = document.createElement("div");
        navDiv.classList.add("nav-buttons");

        const prev = document.createElement("button");
        prev.innerText = "Prethodna";
        prev.onclick = () => {
            if (trenutnaProjekcija > 0) {
                trenutnaProjekcija--;
                prikaziSalu();
            }
        };

        const next = document.createElement("button");
        next.innerText = "Sljedeća";
        next.onclick = () => {
            if (trenutnaProjekcija < podaci.projekcije.length - 1) {
                trenutnaProjekcija++;
                prikaziSalu();
            }
        };

        navDiv.appendChild(prev);
        navDiv.appendChild(next);

        divSala.parentNode.insertBefore(navDiv, divSala.nextSibling);
    }
}

document.addEventListener("DOMContentLoaded", prikaziSalu);
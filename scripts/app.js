let podaci = JSON.parse(localStorage.getItem("kinoPodaci"));

if (!podaci) {
    podaci = {
        projekcije: [
            { film: "Oppenheimer", vrijeme: "18:30", sjedista: [] },
            { film: "Spider-Man", vrijeme: "20:00", sjedista: [] },
            { film: "Dune", vrijeme: "21:30", sjedista: [] },
            { film: "Batman", vrijeme: "17:00", sjedista: [] },
            { film: "Interstellar", vrijeme: "19:45", sjedista: [] }
        ]
    };

    localStorage.setItem("kinoPodaci", JSON.stringify(podaci));
}
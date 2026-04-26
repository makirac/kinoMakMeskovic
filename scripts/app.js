let podaci = JSON.parse(localStorage.getItem("kinoPodaci"));

if (!podaci) {
    podaci = {
        projekcije: [
            {
                film: "Oppenheimer",
                vrijeme: "18:30",
                sjedista: [
                    { red: "A", broj: 1, status: "occupied" },
                    { red: "A", broj: 2, status: "occupied" },
                    { red: "B", broj: 5, status: "occupied" },
                    { red: "C", broj: 7, status: "occupied" },
                    { red: "D", broj: 3, status: "occupied" }
                ]
            },
            {
                film: "Spider-Man: Beyond",
                vrijeme: "20:00",
                sjedista: [
                    { red: "A", broj: 3, status: "occupied" },
                    { red: "B", broj: 1, status: "occupied" },
                    { red: "C", broj: 6, status: "occupied" },
                    { red: "D", broj: 8, status: "occupied" }
                ]
            },
            {
                film: "Dune: Part Two",
                vrijeme: "21:30",
                sjedista: [
                    { red: "A", broj: 4, status: "occupied" },
                    { red: "B", broj: 2, status: "occupied" },
                    { red: "C", broj: 9, status: "occupied" }
                ]
            },
            {
                film: "The Batman",
                vrijeme: "17:00",
                sjedista: [
                    { red: "A", broj: 5, status: "occupied" },
                    { red: "B", broj: 3, status: "occupied" },
                    { red: "D", broj: 6, status: "occupied" }
                ]
            },
            {
                film: "Interstellar",
                vrijeme: "19:45",
                sjedista: [
                    { red: "A", broj: 6, status: "occupied" },
                    { red: "B", broj: 7, status: "occupied" },
                    { red: "C", broj: 2, status: "occupied" },
                    { red: "E", broj: 9, status: "occupied" }
                ]
            }
        ]
    };

    localStorage.setItem("kinoPodaci", JSON.stringify(podaci));
}
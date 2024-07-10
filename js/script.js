//Creo una stuttura dati in cui creo un array di oggetti associati ad una costante che nominerò con "ourTeam"
const ourTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    },
    
];

//recupero l'lemento "our-team-strings" dal dom 
const info = document.getElementById("our-team-strings")

// eseguo il ciclo dell'array ourTeam
for (let i = 0; i < ourTeam.length; i++) {
    //riporto su console le informazioni (nome, ruolo, immagine) di ogni membro del team, ergo applico un ciclo for in cui eseguo un console.log per ogni chiave degli oggetti
    console.log(ourTeam[i].name);
    console.log(ourTeam[i].role);
    console.log(ourTeam[i].img);

    // stampare le infomazioni nel dom sottoforma di stringhe
    info.innerHTML += `${ourTeam[i].name} ${ourTeam[i].role} ${ourTeam[i].img}<br>`

  }
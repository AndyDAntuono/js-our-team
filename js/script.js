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

//console.log(ourTeam[0].name)

for (let i = 0; i < ourTeam.length; i++) {
    console.log(ourTeam[i].name);
    console.log(ourTeam[i].role);
    console.log(ourTeam[i].img);
  }
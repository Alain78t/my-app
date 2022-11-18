// Tableau de données
var team = [
    ['Jean-François PAU','DSI Pôle-Emploi : expert Power-Apps','Lesquin'],
    ['Alain TRINE','DS Pôle-Emploi : expert Fortran, COBOL, VE et Windev','Houilles'],
    ['David BOUQUET','ESN Gestion de matériels : expert Front-end','Antony'],
    ['Matthieu PECHALRIEUX','Responsable portail documentaire : expert documentaliste et juriste','Toulouse'],
    ['Thierry MAGNANI','Référent technique : expert ontransitioncancel, FormBuilder et Web','Antibes'],
    ['Vinh Ki BOUN','Développeur VB + SQL : montée en compétence sur C#','Luxembourg'],
    ['Lesly LODIN','IB Formation : Formateur Web Dév et BDD','La Défense']

];

// Parcout le tableau pour générer le code HTML
for (let i=0;i<team.length;i++) {
    document.write
    (
    '<article class="member"><figure><img class="card-photo" src="https://robohash.org/'+(Math.ceil(Math.random()*100))+'.png?bgset=bg1&set=set5" alt=""><h3>'+team[i][0]+'</h3></figure><p>'+team[i][1]+'</p><a href="https://maps.google.com/maps?q='+team[i][2]+'" target="blank">En savoir plus</a></article>')}
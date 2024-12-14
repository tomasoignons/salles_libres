
//---------------------------------------------------------CREATION DE LA MEGA LISTE DE SALLES--------------------------------

class Sallemodel {
    constructor (name, description, image, planning, temps, duree, disponibilite, note) {
        this.name = name,
        this.description = description,
        this.image = image,
        this.planning = planning,
        this.temps = temps,
        this.duree = duree,
        this.disponibilite =disponibilite,
        this.note = note
    }
}

let SalleList = []

function resetSalleList (){
    SalleList.push(
        new Sallemodel(
            "GF11",
            "une salle bien sympathique, où a étudié le créateur de cette application",
            "GF11",
            [
                [1, 1, 1, 1, 1, 0, 1, 6, 1, 6],
                [1, 0, 1, 1, 0, 1, 1, 1, 1, 0],
                [1, 1, 1, 4, 1, 1, 1, 1, 1, 1],
                [1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 0, 6, 6, 4, 1]
            ],
            "0h00m",
            0,
            false,
            "19"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF15",
            "La meilleure salle de mathématique, la ZGAM perdurera toujours !",
            "GF15",
            [
                [1, 1, 1, 1, 1, 0, 1, 1, 1, 4],
                [1, 1, 4, 1, 0, 1, 1, 1, 6, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
                [1, 0, 1, 1, 0, 1, 1, 1, 6, 1],
                [1, 1, 1, 1, 1, 6, 1, 1, 1, 0]
            ],
            "0h00m",
            0,
            false,
            "18"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF23",
            "souvent dispo, souvent pleine de monde. Beaucoup trop bruyante, je déconseille fortement",
            "GF23",
            [
                [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 0, 1, 1, 4, 1],
                [6, 1, 1, 0, 0, 1, 1, 1, 1, 0],
                [1, 0, 1, 1, 0, 1, 1, 6, 1, 1],
                [1, 1, 1, 1, 0, 0, 1, 1, 4, 0]
            ],
            "0h00m",
            0,
            false,
            "8"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF24",
            "sûrement la meilleure salle de tout le lycée, discrète, souvent libre, pas trop de monde",
            "GF24",
            [
                [1, 1, 0, 1, 0, 0, 1, 1, 4, 0],
                [1, 1, 0, 0, 1, 4, 1, 1, 0, 0],
                [1, 0, 0, 0, 4, 1, 1, 0, 0, 0],
                [1, 0, 1, 1, 0, 1, 1, 6, 1, 0],
                [1, 1, 1, 1, 0, 0, 1, 1, 1, 0]
            ],
            "0h00m",
            0,
            false,
            "20"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF25",
            "inconnue au bataillon, à côté de la GF23, il y a souvent du monde puisque les personnes fuient la GF23 ici",
            "GF25",
            [
                [1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
                [1, 1, 0, 1, 0, 1, 1, 1, 0, 0],
                [1, 1, 1, 0, 6, 1, 1, 6, 1, 0],
                [1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 1, 1, 1, 1, 0]
            ],
            "0h00m",
            0,
            false,
            "14"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF30",
            "assez discète, il faut savoir où la trouver, et en plus, elle est toujours prise",
            "GF30",
            [
                [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 4, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 4, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 1, 1, 1, 1, 0]
            ],
            "0h00m",
            0,
            false,
            "17"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF32",
            "les gens viennent souvent dormir, donc viens pas manger ici",
            "GF32",
            [
                [1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
                [1, 1, 1, 0, 0, 0, 1, 1, 4, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
                [1, 1, 1, 1, 0, 0, 4, 0, 1, 0]
            ],
            "0h00m",
            0,
            false,
            "15"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF34",
            "Pour des raisons que j'ignone, cette salle est souvent pleine",
            "GF34",
            [
                [1, 1, 1, 1, 0, 0, 1, 1, 4, 0],
                [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                [1, 1, 1, 4, 0, 1, 1, 0, 0, 0],
                [1, 0, 1, 1, 0, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 0, 0, 4, 1, 1, 0]
            ],
            "0h00m",
            0,
            false,
            "13"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF40",
            "inconnue au bataillon, à droite du bureau de Mme Reiss",
            "GF40",
            [
                [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 0, 1, 1, 4, 1],
                [1, 1, 1, 0, 1, 1, 1, 1, 0, 0],
                [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 0, 1, 1, 1, 1]
            ],
            "0h00m",
            0,
            false,
            "14"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF41",
            "Salle calme, sauf quand des terminales viennent faire des tierlists et hurlent",
            "GF41",
            [
                [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
                [1, 0, 1, 1, 0, 0, 4, 1, 1, 1],
                [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 4, 1, 1, 1, 0]
            ],
            "0h00m",
            0,
            false,
            "12"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF42",
            "salle exentrée, plutôt pas mal",
            "GF42",
            [
                [1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
                [1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
                [1, 0, 6, 6, 0, 1, 1, 0, 0, 0],
                [1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 0, 1, 1, 1, 1, 0]
            ],
            "0h00m",
            0,
            false,
            "16"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF43",
            "salle centrale, domaine des terminales, 1eres passez votre chemin",
            "GF43",
            [
                [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
                [1, 0, 1, 0, 6, 0, 1, 1, 0, 0],
                [1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 0, 1, 1, 1, 0]
            ],
            "0h00m",
            0,
            false,
            "17"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF44",
            "super discrète, souvent remplie de littéraires... A voir...",
            "GF44",
            [
                [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
                [1, 0, 1, 0, 0, 0, 1, 1, 1, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 0, 1, 0, 4, 0]
            ],
            "0h00m",
            0,
            false,
            "15"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF45",
            "les gens y font la sieste, donc viens te joindre à eux !",
            "GF45",
            [
                [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 0, 1, 1, 4, 1],
                [0, 0, 1, 1, 1, 1, 6, 1, 1, 0],
                [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 1, 6, 4, 1, 6]
            ],
            "0h00m",
            0,
            false,
            "16"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF50",
            "mec t'es vraiment sûr de vouloir aller au 5e ?",
            "GF50",
            [
                [1, 1, 1, 6, 4, 0, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
                [0, 0, 6, 0, 1, 1, 1, 1, 0, 0],
                [1, 1, 1, 1, 4, 0, 1, 1, 1, 0],
                [1, 1, 1, 1, 0, 1, 1, 1, 1, 0]
            ],
            "0h00m",
            0,
            false,
            "13"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF51",
            "et oui, on tient la salle la plus excentrée, au moins si t'y vas t'es sûr qu'elle soit libre",
            "GF51",
            [
                [1, 1, 0, 4, 4, 0, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
                [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                [1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
                [1, 1, 1, 1, 0, 1, 6, 1, 1, 0]
            ],
            "0h00m",
            0,
            false,
            "12"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF52",
            "détruis ton cardio si tu veux, ce n'est pas mon problème",
            "GF52",
            [
                [0, 1, 1, 6, 6, 0, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
                [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
                [1, 1, 1, 1, 0, 0, 1, 1, 0, 1],
                [1, 1, 1, 1, 6, 4, 1, 1, 4, 0]
            ],
            "0h00m",
            0,
            false,
            "11"
        )
    )
    SalleList.push(
        new Sallemodel(
            "GF53",
            "salle d'examen, interdit de manger",
            "GF53",
            [
                [0, 1, 0, 0, 0, 0, 1, 1, 1, 1],
                [0, 0, 1, 1, 0, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
            ],
            "0h00m",
            0,
            false,
            "13"
        )
    )
    
}


//----------------------------------------------------------VARIABLES DE TEMPS------------------------------------------------



//avoir l'heure et les minutes actuelles dans une liste
function Heure(){
    const dateactuelle = new Date();
    heure = [dateactuelle.getHours(), dateactuelle.getMinutes()];
    return (heure)
};

//avoir le jour, le mois, et l'année dans une liste
function FonctionDate(){
    const dateactuelle = new Date();
    date = [dateactuelle.getDate(), dateactuelle.getMonth()+1, dateactuelle.getFullYear()]
    return(date)
}

//avoir le numéro de la semaine d'une date
function numerosemaine(date){
    const dateactuelle = new Date(date[2], date[1]-1, date[0]);
    const oneJan = new Date(dateactuelle.getFullYear(),0,1);
    let numberOfDays = Math.floor((dateactuelle - oneJan) / (24 * 60 * 60 * 1000));
    let numerosemaine = Math.ceil(( dateactuelle.getDay() + 1 + numberOfDays) / 7);
    return(numerosemaine)
}

//savoir si une date est dans une semaine paire ou impaire
//probaabilité importante qu'il y ait un truc qui merde ici lol
function paireimpaire(date){
    let paireimpaire = numerosemaine(date)%2
    if (date[2] == 2022 && paireimpaire == 1){
        return ("B")
    } else if (date[2] == 2022 && paireimpaire == 0){
        return ("A")
    } else if (date[2]== 2023 && paireimpaire == 0){
        return ("A")
    } else if (date[2] == 2023 && paireimpaire == 1){
        return ("B")
    } else {
        return ("B")
    }
}

//savoir à quelle heure on est (entre 0 et 10)
function numeroheuredecours(heuredonnee){

    let heure = heuredonnee[0]
    let minute = heuredonnee[1]

    if(heure == 8){
        return (0)
    } else if (heure == 9){
        if (minute < 15){
            return (1)
        } else {
            return (0)
        }
    } else if (heure == 10){
        if (minute <10){
            return (1)
        } else {
            return (2)
        }
    } else if (heure == 11){
        if (minute < 25){
            return (2)
        } else {
            return (3)
        }
    } else if (heure == 12){
        if (minute < 20){
            return (3)
        } else {
            return (4)
        }
    } else if (heure == 13){
        if (minute < 15){
            return (4)
        } else {
            return (5)
        }
    } else if (heure == 14){
        if (minute < 10){
            return (5)
        } else {
            return (6)
        }
    } else if (heure == 15){
        if (minute < 5){
            return (6)
        } else {
            return (7)
        }
    } else if (heure == 16){
        return (8)
    } else if (heure == 17){
        if(minute< 10){
            return (8)
        } else {
            return (9)
        }
    } else if (heure == 18){
        if (minute < 5){
            return (9)
        } else {
            return (10)
        }
    } else {
        return (30)
    }
}


//savoir quel jour de la semaine on est (de 0 à 6, en fonction d'une date)
function joursemaine(date){

    let mois = date[1]
    let jour = date[0]
    let annee = date[2]    

    let joursemaine = 0

    if (mois <3){
        joursemaine = Math.round((((23*mois)/9)+jour+4+annee+((annee-1)/4)-((annee-1)/100)+((annee-1)/400))%7)
    } else {
        joursemaine = Math.round((((23*mois)/9)+jour+2+annee+((annee)/4)-((annee)/100)+((annee)/400))%7)
    }
    
    //attention, ici c'est quand même bien foireux, on part de l'algorithme, et de mémoire, le 1 c'est pour le Dimanche.
    if(joursemaine == 1){
        joursemaine = 6
    } else if (joursemaine == 7){
        joursemaine = 5
    } else {
        joursemaine = joursemaine -2
    }
    return (joursemaine)
}

//avoir l'heure qui suit après
function heureapres(heure){
    let temps = heure[0]*60 + heure[1] + 55;
    let minutes = temps%60
    let Heureapres = (temps-minutes)/60
    return([Heureapres, minutes]) 
}


function nombredejoursmois(mois, annee){
    if (mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12){
        return (31)
    } else if (mois == 4 || mois == 6 || mois == 9 || mois == 11){
        return (30)
    } else if (mois == 2 && annee%4 !==0){
        return(28)
    } else if (mois == 2 && annee%4 == 0){
        return(29)
    }
}

function moisenfonctionnombre(mois){
    if (mois == 1){
        return ("janvier")
    } else if (mois == 2){
        return ("fevrier")
    } else if (mois == 3){
        return ("mars")
    } else if (mois == 4){
        return ("avril")
    } else if (mois == 5){
        return ("mai")
    } else if (mois == 6){
        return ("juin")
    } else if (mois == 7){
        return ("juillet")
    } else if (mois == 8){
        return ("août")
    } else if (mois == 9){
        return ("septembre")
    } else if (mois == 10){
        return ("octobre")
    } else if (mois == 11){
        return ("novembre")
    } else if (mois == 12){
        return ("décembre")
    }
}

function moisenfonctionnom(mois){
    if (mois == "January"){
        return (1)
    } else if (mois == "February"){
        return (2)
    } else if (mois == "March"){
        return (3)
    } else if (mois == "April"){
        return (4)
    } else if (mois == "May"){
        return (5)
    } else if (mois == "June"){
        return (6)
    } else if (mois == "July"){
        return (7)
    } else if (mois == "August"){
        return (8)
    } else if (mois == "September"){
        return (9)
    } else if (mois == "October"){
        return (10)
    } else if (mois == "November"){
        return (11)
    } else if (mois == "December"){
        return (12)
    }
}

function heuredecoursfonctionstring (heuredecours){
    if (heuredecours == "de 8h20 à 9h15"){
        return (0)
    } else if (heuredecours == "de 9h15 à 10h10"){
        return (1)
    } else if (heuredecours == "de 10h30 à 11h25"){
        return (2)
    } else if (heuredecours == "de 11h25 à 12h20"){
        return (3)
    } else if (heuredecours == "de 12h20 à 13h15"){
        return (4)
    } else if (heuredecours == "de 13h15 à 14h10"){
        return (5)
    } else if (heuredecours == "de 14h10 à 15h05"){
        return (6)
    } else if (heuredecours == "de 15h05 à 16h00"){
        return (7)
    } else if (heuredecours == "de 16h15 à 17h10"){
        return (8)
    } else if (heuredecours == "de 17h10 à 18h05"){
        return (9)
    } 
}
//-----------------------------------------------GERER LES DIFFERENTES SALLES DISPONIBLES---------------------------------------------------


function sallesdispo(date, heure){
    jour = joursemaine(date)
    paire = paireimpaire(date)
    if (heure[1] !== undefined){
        heure = numeroheuredecours(heure)
    }

    let sallesdisponibles = []
    if (jour == 5 || jour == 6 || heure == 30){
        return(sallesdisponibles)
    }

    if (paire == "A"){
        for (let i = 0; i < SalleList.length; i++) {
            if (SalleList[i].planning[jour][heure] == 0 || SalleList[i].planning[jour][heure] == 6){
                sallesdisponibles.push(SalleList[i])
            }
        }
    } else if (paire == "B"){
        for (let i = 0; i < SalleList.length; i++){
            if (SalleList[i].planning[jour][heure] == 0 || SalleList[i].planning[jour][heure] == 4){
                sallesdisponibles.push(SalleList[i])
            }
        }
    }
    return (sallesdisponibles)
}

//-----------------trouver une salle et en renvoyer le sallemodel-------------------

function findsalle(sallename){
    for (let i = 0; i<SalleList.length; i++){
        if (SalleList[i].name == sallename){
            return(SalleList[i])
        }
    }
    return
}

//-------------------------------------FONCTIONS DE CREATION D'ELEMENTS AVEC LES SALLES MODELS------------------------

//mega fonction pour juste créer une div avec un élément parent précis, et une classname logique
function creatediv(elementparent, classname){
    const div = document.createElement("div")
    elementparent.appendChild(div)
    div.classList.add(classname)
    return(div)
}



function creerlayoutsallemodel(salle, parentelement){

    //création de la div contenu, et de l'imagecontainer
    let divcontenu = creatediv(parentelement, "SalleModel")

    //création de l'image container, pour pouvoir le modifier plus facilement
    let divimagecontainer = creatediv(divcontenu, "SalleModel_image_container")
    divimagecontainer.style.height = `${divcontenu.offsetHeight-20}px`
    divimagecontainer.style.left  = divcontenu.style.paddingLeft
    divimagecontainer.style.top = divcontenu.style.paddingTop
    divimagecontainer.style.width = divimagecontainer.style.height

    //insertion du titre
    let divtitre = creatediv(divcontenu, "SalleModel_titre")
    divtitre.innerText = salle.name
    divtitre.style.top = divcontenu.style.paddingTop;
    divtitre.style.left = `${divimagecontainer.offsetWidth+20}px`

    //insertion de l'image
    let divimage = document.createElement("img")
    divimagecontainer.appendChild(divimage)
    divimage.classList.add("SalleModel_image")
    divimage.src = `images/${salle.image}.jpg`

    //insertion de la description
    let divdescription = creatediv(divcontenu, "SalleModel_description")
    divdescription.innerHTML = salle.description
    divdescription.style.left = divtitre.style.left
    divdescription.style.top = `${divtitre.offsetHeight +10}px`
    divdescription.style.width = `${divcontenu.offsetWidth - divimagecontainer.offsetWidth -30}px`
}

//----------------------------------------------CODE DE LA PAGE ET DES LAYOUT-----------------------------------------------
resetSalleList()



const carousselmaintenant = document.getElementById("contenu_maintenant")
const carousselheureapres = document.getElementById("contenu_prochaineheure")

//remplir le caroussel maintenant
const dateajd = FonctionDate()
const heureactuelle = Heure()
const sallesdisponibles = sallesdispo(dateajd, heureactuelle)

for (let i = 0; i<sallesdisponibles.length; i++){
    creerlayoutsallemodel(sallesdisponibles[i], carousselmaintenant)
}
//remplir le caroussel heuresuivante
const Heureapres = heureapres(heureactuelle)
const sallesdispoheureapres = sallesdispo(dateajd, Heureapres)

for (let i = 0; i<sallesdispoheureapres.length; i++){
    creerlayoutsallemodel(sallesdispoheureapres[i], carousselheureapres)
}
//------------------------------------------CODE DU LAYOUT DE RECHERCHE---------------------------------------------------------


//fonction pour créer une div sur la page, l'assigner à un élément parent, et lui mettre une classname






//initialisation du titre fait de manière propre et clean pour laisser des possibilités de modification dans le futur
const listtitrespossibles = ["Planning d'une salle", "Salle à un temps précis", "Salles par étages"]
let numerotexttitreactuel = 0
let textetitreactuel = listtitrespossibles[numerotexttitreactuel]
document.getElementById("researchtitle").innerText = textetitreactuel


//réparer les pots cassés pour les transitions
let potcasses = false


function createoption(parentelement, nomoption){
    const option = document.createElement("option")
    parentelement.appendChild(option)
    option.innerText = nomoption
    option.classList.add("option_heure_cours")
}

function createnomdelasalle(parentelement){

    const container = creatediv(parentelement, "container_nom_salle")
    const titre = creatediv(container, "titre_nom_de_la_salle")
    titre.innerText = "Nom de la salle"

    const selecteurnomdelasalle = document.createElement("select")
    container.appendChild(selecteurnomdelasalle)
    selecteurnomdelasalle.classList.add("selecteur")
    selecteurnomdelasalle.classList.add("inputnomdelasalle")

    createoption(selecteurnomdelasalle, "GF11")
    createoption(selecteurnomdelasalle, "GF15")
    createoption(selecteurnomdelasalle, "GF23")
    createoption(selecteurnomdelasalle, "GF24")
    createoption(selecteurnomdelasalle, "GF25")
    createoption(selecteurnomdelasalle, "GF30")
    createoption(selecteurnomdelasalle, "GF32")
    createoption(selecteurnomdelasalle, "GF34")
    createoption(selecteurnomdelasalle, "GF40")
    createoption(selecteurnomdelasalle, "GF41")
    createoption(selecteurnomdelasalle, "GF42")
    createoption(selecteurnomdelasalle, "GF43")
    createoption(selecteurnomdelasalle, "GF44")
    createoption(selecteurnomdelasalle, "GF45")
    createoption(selecteurnomdelasalle, "GF50")
    createoption(selecteurnomdelasalle, "GF51")
    createoption(selecteurnomdelasalle, "GF52")
    createoption(selecteurnomdelasalle, "GF53")

    return(container)
}

function createdateinput(parentelement){

    const container = creatediv(parentelement, "container_date_salle")
    const titre = creatediv(container, "titre_date_recherche")
    titre.innerText = "Choisir la date"

    const inputdate = document.createElement("input")
    container.appendChild(inputdate)
    inputdate.setAttribute("type", "datetime-local")

    //cet unique truc sert à créer le calendrier mdr
    flatpickr("input[type=datetime-local]", {
        "altInput": true,
        "altFormat": "j F Y",
        "dateFormat": "d.m.Y",
        "defaultDate" :"today",
        "maxDate": "15.6.2023",
        "minDate": "2.9.2022",
        "locale": {
        "firstDayOfWeek": 1 // start week on Monday
        }
    });
    const pbpotentiel = document.getElementsByClassName("flatpickr-calendar")
    if (pbpotentiel.length > 1){
        pbpotentiel[0].remove()
    }
}

function createrecherchebutton(parentelement){
    const container = creatediv(parentelement, "container_button")
    const button = document.createElement("button")
    container.appendChild(button)
    button.classList.add("button_research")
    button.textContent = "RECHERCHER"

    button.addEventListener('click', () => {
        recherchelayout(parentelement)
      });
}

function createinputheuredecours(parentelement){
    const container = creatediv(parentelement, "container_input_heure")

    const titre = creatediv(container, "titre_heure_de_cours")
    titre.innerText = "Heure de cours"

    const selecteurheuredecours = document.createElement("select")
    container.appendChild(selecteurheuredecours)
    selecteurheuredecours.classList.add("selecteur")
    selecteurheuredecours.classList.add("inputheuredecours")

    createoption(selecteurheuredecours, "de 8h20 à 9h15")
    createoption(selecteurheuredecours, "de 9h15 à 10h10")
    createoption(selecteurheuredecours, "de 10h30 à 11h25")
    createoption(selecteurheuredecours, "de 11h25 à 12h20")
    createoption(selecteurheuredecours, "de 12h20 à 13h15")
    createoption(selecteurheuredecours, "de 13h15 à 14h10")
    createoption(selecteurheuredecours, "de 14h10 à 15h05")
    createoption(selecteurheuredecours, "de 15h05 à 16h00")
    createoption(selecteurheuredecours, "de 16h15 à 17h10")
    createoption(selecteurheuredecours, "de 17h10 à 18h05")

    //suivre le deuxième tuto, pour faire pas mal de trucs
}

function createetageinput(parentelement){
    const container = creatediv(parentelement, "container_etage_salle_input")

    const titre = creatediv(container, "etages_titre")
    titre.innerText = "Etage"

    const selecteurheuredecours = document.createElement("select")
    container.appendChild(selecteurheuredecours)
    selecteurheuredecours.classList.add("selecteur")
    selecteurheuredecours.classList.add("input_etage")

    createoption(selecteurheuredecours, "1")
    createoption(selecteurheuredecours, "2")
    createoption(selecteurheuredecours, "3")
    createoption(selecteurheuredecours, "4")
    createoption(selecteurheuredecours, "5")  

}


function creerlayoutrecherche(parentelement){
    if (textetitreactuel == "Planning d'une salle"){
        
        const nomdelasalle = createnomdelasalle(parentelement)
        const dateinput = createdateinput(parentelement)
        const recherchebutton = createrecherchebutton(parentelement)
        //ici, on peut gérer le style plus simplement

    } else if (textetitreactuel == "Salle à un temps précis"){

       const heuredecours = createinputheuredecours(parentelement)
       const dateinput = createdateinput(parentelement)
       const recherchebutton = createrecherchebutton(parentelement)
       //ici, on peut gérer le style plus simplement

    } else if (textetitreactuel == "Salles par étages"){

        const heuredecours = createinputheuredecours(parentelement)
        const dateinput = createdateinput(parentelement)
        const etageinput = createetageinput(parentelement)
        const recherchebutton = createrecherchebutton(parentelement)
        //ici, on peut gérer le style beaucoup plus simplement

    }

}


//---------------------------------------ANIMATIONS, PRINCIPALEMENT POUR SLIDER SUR L'AXE Y--------------------------------------------




//fonction pour upadater le titre actuel du menu rechercher

function nouveautitretexte(direction){
    if (direction == "droite"){
        if (numerotexttitreactuel == listtitrespossibles.length-1){
            numerotexttitreactuel = 0
        } else {
            numerotexttitreactuel = numerotexttitreactuel+1
        }
    } else if (direction  == "gauche"){
        if(numerotexttitreactuel == 0){
            numerotexttitreactuel = listtitrespossibles.length-1
        } else {
            numerotexttitreactuel = numerotexttitreactuel -1
        }
    }
    textetitreactuel = listtitrespossibles[numerotexttitreactuel]
    return(textetitreactuel)
}
//function quand on glisse sur la droite


function glissersurladroite(slider, elementactuel, elementsuivant, position){

    potcasses = true
    slider.style.width = "100%"
    elementactuel.style.position = position
    elementsuivant.style.position = "absolute"
    elementsuivant.style.left = `${elementactuel.offsetWidth}px`
    slider.style.transition = "all 1s ease"
    slider.style.transform = `translate(-${elementactuel.offsetWidth}px)`

    setTimeout(() => {retournerpointdedépartapresslide(slider, elementactuel, elementsuivant);}, 1000)
}

//fonction pour qu'un élément glisse sur la gauche
function glissersurlagauche(slider, elementactuel, elementsuivant, position){

    slider.style.width = "100%"
    elementsuivant.style.position = "absolute"
    elementactuel.style.position = position
    elementsuivant.style.left = `-${elementactuel.offsetWidth}px`
    slider.style.transition = "all 1s ease"
    slider.style.transform = `translate(${elementactuel.offsetWidth}px)`
    setTimeout(() => {retournerpointdedépartapresslide(slider, elementactuel, elementsuivant);}, 1000)
}

//fonction pour terminer le glissement, et pouvoir en effectuer un directement après
function retournerpointdedépartapresslide(slider, elementactuel, elementsuivant){
        elementactuel.remove()    
        elementsuivant.style.position = "relative"
        elementsuivant.style.left = "0px"
        elementsuivant.style.top = `0px`
        slider.style.transition = "all 0s ease"
        slider.style.left = "0px"
        slider.style.top = "0px"
        slider.style.transform = `translate(0px)`
  
        potcasses = false
}


function glissersurlagaucherecherche(){
    if (potcasses == true){
        return
    }

    potcasses = true

    //content de tout ce qui sert
    const slider = document.getElementById("user_research")
    const titreactuel = document.getElementById("researchtitle")
    const nouveautitre = creatediv(slider, "researchtitle")

    nouveautitre.innerText = nouveautitretexte("gauche")
    glissersurlagauche(slider, titreactuel, nouveautitre, "relative")
    nouveautitre.setAttribute("id","researchtitle");

    //layout du contenu de la recherche
    const contenudelarecherche = document.getElementById("contenudelarecherche")
    const sliderducontenu = document.getElementById("content_research")
    const new_contenudelarecherche = creatediv(sliderducontenu, "contenudelarecherche")

    creerlayoutrecherche(new_contenudelarecherche)
    glissersurlagauche(sliderducontenu, contenudelarecherche, new_contenudelarecherche, "absolute")
    new_contenudelarecherche.setAttribute("id", "contenudelarecherche")
}


function glissersurladroiterecherche(){

    if (potcasses == true){
        return
    }

    potcasses = true

    const slider = document.getElementById("user_research")
    const titreactuel = document.getElementById("researchtitle")
    const nouveautitre = creatediv(slider, "researchtitle")
    // const nouveautitre = document.createElement("div")

    // slider.appendChild(nouveautitre)
    // nouveautitre.classList.add("researchtitle")
    nouveautitre.innerText = nouveautitretexte("droite")
    glissersurladroite(slider, titreactuel, nouveautitre, "relative")
    nouveautitre.setAttribute("id","researchtitle");


    const contenudelarecherche = document.getElementById("contenudelarecherche")
    const sliderducontenu = document.getElementById("content_research")
    const new_contenudelarecherche = creatediv(sliderducontenu, "contenudelarecherche")
    // const new_contenudelarecherche = document.createElement("div")

    // sliderducontenu.appendChild(new_contenudelarecherche)
    // new_contenudelarecherche.classList.add("contenudelarecherche")
    creerlayoutrecherche(new_contenudelarecherche)
    glissersurladroite(sliderducontenu, contenudelarecherche, new_contenudelarecherche, "absolute")
    new_contenudelarecherche.setAttribute("id", "contenudelarecherche")
}

//--------------------------------LA REPONSE FOIREUSE CÔTE SERVEUR DE LA RECHERCHE-----------------------------------------



function creerlayoutplanningsalle(parentelement){


    //degager les anciens container
    const possiblecontainer = document.getElementsByClassName("container_planning_salle")
    if (possiblecontainer.length >0){
        possiblecontainer[0].remove()
    }

    //créer notre beau layout
    const container = creatediv(parentelement, "container_planning_salle")
    const nomsalle = document.getElementsByClassName("inputnomdelasalle")[0].value
    const datedegueu = document.getElementsByClassName("form-control")[0].value.split(" ")

    const date = [parseInt(datedegueu[0]), moisenfonctionnom(datedegueu[1]), parseInt(datedegueu[2])]
    const paireimpaires = paireimpaire(date)
    const jour = joursemaine(date)
    
    const salle = findsalle(nomsalle)
    const arrayatrier = salle.planning[jour]
    let newarray = []

    if (paireimpaires == "A"){
        for (let i =0; i<arrayatrier.length; i++){
            if (arrayatrier[i] == 0 || arrayatrier[i] == 6){
                newarray.push(0)
            } else {
                newarray.push(1)
            }
        }
    } else if (paireimpaires == "B"){
        for (let i =0; i<arrayatrier.length; i++){
            if (arrayatrier[i] == 0 || arrayatrier[i] == 4){
                newarray.push(0)
            } else {
                newarray.push(1)
            }
        }
    }


    for (let i = 0; i<newarray.length; i++){
        if (newarray[i]==0){
            const container_heure = creatediv(container, "container_planning")
            const horaire = creatediv(container_heure, "horaire")
            horaire.innerText = ListeHeures[i]
            creatediv(container_heure, "vert")
        } else if (newarray[i]== 1){
            const container_heure = creatediv(container, "container_planning")
            const horaire = creatediv(container_heure, "horaire")
            horaire.innerText = ListeHeures[i]
            creatediv(container_heure, "rouge")
        }
    }

}

function creerlayoutsallestempsprecis(parentelement){
    const possiblecontainer = document.getElementsByClassName("container_salles_temps_precis")
    if (possiblecontainer.length >0){
        possiblecontainer[0].remove()
    }
    const container = creatediv(parentelement, "container_salles_temps_precis")
    
    const heuredecours = heuredecoursfonctionstring(document.getElementsByClassName("inputheuredecours")[0].value)
    const datedegueu = document.getElementsByClassName("form-control")[0].value.split(" ")
    const date = [parseInt(datedegueu[0]), moisenfonctionnom(datedegueu[1]), parseInt(datedegueu[2])]

    const sallesdisponibles = sallesdispo(date, heuredecours)

    for (let i = 0; i<sallesdisponibles.length; i++){
        creerlayoutsallemodel(sallesdisponibles[i], container)
    }
}


function creerlayoutsallesfonctionetage(parentelement){
    const possiblecontainer = document.getElementsByClassName("container_salles_fonction_etage")
    if (possiblecontainer.length >0){
        possiblecontainer[0].remove()
    }
    const container = creatediv(parentelement, "container_salles_fonction_etage")
    
    const heuredecours = heuredecoursfonctionstring(document.getElementsByClassName("inputheuredecours")[0].value)
    const datedegueu = document.getElementsByClassName("form-control")[0].value.split(" ")
    const date = [parseInt(datedegueu[0]), moisenfonctionnom(datedegueu[1]), parseInt(datedegueu[2])]
    const etage = document.getElementsByClassName("input_etage")[0].value

    const sallesdisponibles = sallesdispo(date, heuredecours)
    let sallestriees = []

    for (let i = 0; i<sallesdisponibles.length; i++){ 
        if (sallesdisponibles[i].name.split("")[2] == etage){
            sallestriees.push(sallesdisponibles[i])        
        }
    }

    for (let i = 0; i<sallestriees.length; i++){
        creerlayoutsallemodel(sallestriees[i], container)
    }
}



function recherchelayout(parentelement){
    if (textetitreactuel == "Planning d'une salle"){
        creerlayoutplanningsalle(parentelement)
    } else if (textetitreactuel == "Salle à un temps précis"){
        creerlayoutsallestempsprecis(parentelement)
    } else if (textetitreactuel == "Salles par étages"){
        creerlayoutsallesfonctionetage(parentelement)
    }
}

//-------------------------------------------------EVENT LISTENER-----------------------------------------------------------

//initialisation des heures proprement
const ListeHeures = ["8h20", "9h15", "10h30", "11h25", "12h20", "13h15", "14h10", "15h05", "16h15", "17h10"]

//ajout des event listener, pour que ce soit dynamique quand on clique

creerlayoutrecherche(document.getElementById("contenudelarecherche"))

const flechedroite = document.getElementById("flechedroite")
const flechegauche = document.getElementById("flechegauche")

flechedroite.addEventListener('click', glissersurladroiterecherche, false);
flechegauche.addEventListener('click', glissersurlagaucherecherche, false);
function secretSocietyName(name){

    let names = "";

    name.forEach (name => {

        names += name[0];

    })

    return names

}

let name = ["Rahmatillo", "asad","hayrullo", "muhammadumar", "abdulaziz","tolib"];

let names = secretSocietyName(name);

console.log(names);
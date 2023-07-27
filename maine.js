const json = require("./items.json");
const items = JSON.parse(JSON.stringify(json));
const fs = require('fs');


console.log(items);

function titled(nb) {
    return items[nb].title.fr;
};

function description(nb) {
    if (items[nb].description !== undefined) {
        return items[nb].description.fr;
    }
    else {
        return 'dévs ankama feignasses'
    }
};

function rarity(nb) {
    if (items[nb].definition.item.baseParameters.rarity === 0) {
        return 'Commun'
    }
    else if (items[nb].definition.item.baseParameters.rarity === 1) {
        return 'Inhabituel'
    }
    else if (items[nb].definition.item.baseParameters.rarity === 2) {
        return 'Rare'
    }
    else if (items[nb].definition.item.baseParameters.rarity === 3) {
        return 'Mythique'
    }
    else if (items[nb].definition.item.baseParameters.rarity === 4) {
        return 'Légendaire'
    }
    else if (items[nb].definition.item.baseParameters.rarity === 5) {
        return 'Relique'
    }
    else if (items[nb].definition.item.baseParameters.rarity === 6) {
        return 'Souvenir'
    }
    else if (items[nb].definition.item.baseParameters.rarity === 7) {
        return 'Epique'
    }
};

function imagem(nb) {
    return items[nb].definition.item.graphicParameters.gfxId;
};

function imagef(nb) {
    return items[nb].definition.item.graphicParameters.femaleGfxId;
};

function typeit(nb) {
    var type = ''
    if (items[nb].definition.item.baseParameters.itemTypeId === 120) {
        type = 'Amulette'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 103) {
        type = 'Anneau'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 119) {
        type = 'Bottes'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 132) {
        type = 'Cape'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 133) {
        type = 'Ceinture'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 134) {
        type = 'Casque'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 114) {
        type = 'Marteau (deux mains)'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 110) {
        type = 'Epée (une main)'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 138) {
        type = 'Epaulettes'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 136) {
        type = 'Plastron'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 117) {
        type = 'Arc (deux mains)'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 111) {
        type = 'Pelle (deux mains)'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 189) {
        type = 'Bouclier (seconde main)'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 254) {
        type = 'Cartes (seconde main)'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 113) {
        type = 'Bâton (une main)'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 108) {
        type = 'Baguette (seconde main)'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 101) {
        type = 'Hâche (seconde main)'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 253) {
        type = 'Bâton (deux main)'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 112) {
        type = 'Dague (seconde main)'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 115) {
        type = 'Aiguille (une main)'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 223) {
        type = 'Epée (deux mains)'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 646) {
        type = 'Emblème'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 646) {
        type = 'Familiers'
    }
    else if (items[nb].definition.item.baseParameters.itemTypeId === 812) {
        type = 'Parchemins de Sublimations'
    }
    else {
        type = items[nb].definition.item.baseParameters.itemTypeId
    }

    return type;
}



list_items = [];

for (let i = 0; i < Object.keys(items).length - 1; i++) {
    var objets = { name: titled(i), description: description(i), color: rarity(i), imagem: imagem(i), imagef: imagef(i), type: typeit(i) };
    list_items.push(objets);
};

fs.writeFile('itemsv2+espaced.json', JSON.stringify(list_items, null, 4), (err) => {
    if (err)
        console.log(err);
    else {
        console.log("Human file written successfully\n");
    }
});

fs.writeFile('itemsv2.json', JSON.stringify(list_items, null, 0), (err) => {
    if (err)
        console.log(err);
    else {
        console.log("Compact file written successfully\n");
    }
});
function inventoryParser(input) {
    let heroes = [];

    for (const line of input) {
        let [ hero, level, inventory ] = line.split(' / ');
        level = Number(level);
        heroes.push({ hero, level, inventory })
    }

    let sortedHeroes = heroes.sort((heroA, heroB) => heroA.level - heroB.level);

    for (const { hero, level, inventory } of sortedHeroes) {
        console.log(`Hero: ${hero}`);
        console.log(`level => ${level}`)
        console.log(`items => ${inventory}`)
    }
}

inventoryParser(
    [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
)
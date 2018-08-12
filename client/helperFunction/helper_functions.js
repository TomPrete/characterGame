import { Warrior } from './create_characters'


//TEST FUNCTION FOR GAME COMPONENT
export function testAttackData(charType, level, weapon, wepDamage, char_str, wepElemPct, elemType, weaponData, attackData) {
  if (charType.toLowerCase() === "warrior") {
    return Warrior.prototype.attack(level, weapon, wepDamage, char_str, wepElemPct, elemType, weaponData, attackData)
  }
  //Input additional Character Types here for the test data
  else {
    return "ERROR: No Character Information Exists"
  }
}


//CREATE NEW CHARACTER
export function createNewCharacter(character_type, name, strength, level, vitality, armor) {
  switch (character_type) {
    case "warrior":
      return new Warrior(name, strength, level, vitality, armor)

    //Input addtional 'cases' for each Character Type (Class)

    default:
    console.log("That character doesn't exist!");
  }
}


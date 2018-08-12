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
      break;

    // case ("characterClass2"):
    //   return new characterClass2(name, strength, level, vitality, armor)
    //   break;
    // case ("characterClass3"):
    //   return new characterClass3(name, strength, level, vitality, armor)
    //   break;
    // case ("characterClass4"):
    //   return new characterClass4(name, strength, level, vitality, armor)
    //   break;
    // case ("characterClass5"):
    //   return new characterClass5(name, strength, level, vitality, armor)
    //   break;
    // case ("characterClass6"):
    //   return new characterClass6(name, strength, level, vitality, armor)
    default:
    console.log("That character doesn't exist!");
  }
}


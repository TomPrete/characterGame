

//WARRIOR CONSTRUCTOR FUNCTION - CHARACTER TYPE
export function Warrior(name = "name", strength = 1, level = 1, vitality = 1, armor="none") {
  this.type = "warrior"
  this.name = name
  this.strength = strength;
  this.level = level;
  this.vitality = vitality;
  this.armor = armor
  if (level > 90) {
    this.level = 90;
    return "Max Level Attained"
  }
  if (level < 1) {
    this.level = 1;
  }
}


//WARRIOR ATTACK METHOD
Warrior.prototype.attack = function (charLevel, weapon, wepDamage, char_str, wepElemPct, elemType, weaponData, attackData) {
  let level = Number(charLevel)
  let damage = [Number(wepDamage[0]), Number(wepDamage[1])]
  let str = Number(char_str) / 100
  let elemPCT = (Number(wepElemPct) / 100)
  let weaponAPS = 1
  if ((level > 90 || level < 1) || (wepDamage[0] > wepDamage[1]) || (wepDamage[0] < 1 || wepDamage[1] < 1)|| (elemPCT > .15) || (elemPCT < .05 && elemPCT > 0) || (elemPCT < 0) || str < 0) {
    return "ERROR: Check input data parameters. You may be outside the allowed range."
  }
  for (let key in weaponData) {
    if (key === weapon) {
      weaponAPS = weaponData[key]['aps']
    }
  }
  let attackValues = {}
  for (let attack in attackData) {
    let damageArr = []
    damageArr[0] = Math.round((damage[0] + (damage[0] * str)) * attackData[attack]['percDMG'] * 1000) / 1000
    damageArr[1] = Math.round((damage[1] + (damage[1] * str)) * attackData[attack]['percDMG'] * 1000) / 1000
    if (attackData[attack]['elem'] === elemType.toLowerCase()) {
      damageArr[0] = Math.round((damageArr[0] + (damageArr[0] * elemPCT)) * 1000) / 1000
      damageArr[1] = Math.round((damageArr[1] + (damageArr[1] * elemPCT)) * 1000) / 1000
    }
    let avgDamage = ((damageArr[0] + damageArr[1]) / 2)
    let weaponDPS = Math.round((weaponAPS * avgDamage * attackData[attack]['percAPS']) * 1000) / 1000
    attackValues[attack] = {
      'minimum': damageArr[0],
      'maximum': damageArr[1],
      'dps': weaponDPS
    }
  }
  return attackValues
}


//WARRIOR CHARACTER LEVELING UP
Warrior.prototype.levelUp = function () {
  this.level += 1;
  this.strength += 10;
  this.vitality += 5
  if (this.level > 90) {
    this.level = 90;
    return "Max Level Attained"
  }
}


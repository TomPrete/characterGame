console.log('--------------TESTING WARRIOR CONSTRUCTOR FUNCTION----------------')

//WARRIOR CONSTRUCTOR FUNCTION - CHARACTER TYPE
function Warrior(name = "name", strength = 1, level = 1, vitality = 1, armor="none") {
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
  if ((level > 90 || level < 1) || (wepDamage[0] > wepDamage[1]) || (elemPCT > .15) || (elemPCT < .05 && elemPCT > 0) || (elemPCT < 0)) {
    return "ERROR: Check input data parameters. You may be outside the allowed range."
  }
  for (let key in weaponData) {
    if (key === weapon) {
      weaponAPS = weaponData[key]['aps']
    }
  }
  console.log('---------| MINIMUM | MAXIMUM |   DPS   |')
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

    console.log(' ' + attack.toUpperCase() + '   |   ' + damageArr[0] + "    |  " + damageArr[1] + "     |  " + weaponDPS + "   |")
    console.log('----------------------------------------')
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



var assert = require("assert");
describe("Warrior", function() {

  let lena = new Warrior("Lena",10,1,5,"shield")

  describe("New Warrior", function() {
    it("lena.name should return -> Lena", function() {
      assert.equal(lena.name, "Lena");
    });
    it("lena.strength should return -> 10", function() {
      assert.equal(lena.strength, 10);
    });
    it("lena.level should return -> 1", function() {
      assert.equal(lena.level, 1);
    });
    it("lena.vitality should return -> 5", function() {
      assert.equal(lena.vitality, 5);
    });
    it("lena.armor should return -> shield", function() {
      assert.equal(lena.armor, "shield");
    });
  });
});

describe("Warrior-LevelUp", function() {

  let lena = new Warrior("Lena",10,1,5,"shield")
  lena.levelUp()

  describe("Leveling UP", function(){
    it("lena.level should return -> 2", () =>{
      assert.equal(lena.level, 2);
    })
    it("lena.strength should return -> 20", () =>{
      assert.equal(lena.strength, 20);
    })
    it("lena.vitality should return -> 10", () =>{
      assert.equal(lena.vitality, 10);
    })
  })
});

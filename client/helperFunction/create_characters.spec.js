import { Warrior } from './create_characters'
var assert = require("assert");


describe("Class/Constructor Function: Warrior", () => {

  let lena = new Warrior("Lena", 10, 1, 5, "shield")

  describe("New Warrior", () => {
    it("lena.name should return -> Lena", () => {
      assert.equal(lena.name, "Lena");
    });
    it("lena.strength should return -> 10", () => {
      assert.equal(lena.strength, 10);
    });
    it("lena.level should return -> 1", () => {
      assert.equal(lena.level, 1);
    });
    it("lena.vitality should return -> 5", () => {
      assert.equal(lena.vitality, 5);
    });
    it("lena.armor should return -> shield", () => {
      assert.equal(lena.armor, "shield");
    });
  });

  describe("Warrior-LevelUp", () => {

    let lena = new Warrior("Lena", 10, 1, 5, "shield")
    lena.levelUp()

    it("lena.level should return -> 2", () => {
      assert.equal(lena.level, 2);
    })
    it("lena.strength should return -> 20", () => {
      assert.equal(lena.strength, 20);
    })
    it("lena.vitality should return -> 10", () => {
      assert.equal(lena.vitality, 10);
    })
  });

  // describe("Warrior-Attack", () => {
  //   let lena = new Warrior("Lena", 10, 1, 5, "shield")
  //   var weaponData = {
  //     "mace": {
  //       "aps": 1,
  //       "mod": 0
  //     },
  //     "axe": {
  //       "aps": 1.2,
  //       "mod": 0
  //     },
  //     "sword": {
  //       "aps": 1.4,
  //       "mod": 0
  //     }
  //   }
  //   var attackData = {
  //     "punch": {
  //       "percAPS": 1,
  //       "percDMG": 1,
  //       "elem": "physical"
  //     },
  //     "smite": {
  //       "percAPS": 1.2,
  //       "percDMG": 0.9,
  //       "elem": "fire"
  //     },
  //     "cleave": {
  //       "percAPS": 0.9,
  //       "percDMG": 1.2,
  //       "elem": "cold"
  //     }
  //   }

  // let stats = Warrior.prototype.attack(lena.level, 'axe', [50,65], lena.strength, .10, 'fire', weaponData, attackData)
  // console.log("STATS: ", stats)
  // it("lena.attack should return an object", () => {
  //   assert.equal(typeof stats, Object);
  // })
});



// describe("Warrior-Attack", () => {
  // let lena = new Warrior("Lena", 10, 1, 5, "shield")
  // let weaponData = {
  //   "mace": {
  //     "aps": 1,
  //     "mod": 0
  //   },
  //   "axe": {
  //     "aps": 1.2,
  //     "mod": 0
  //   },
  //   "sword": {
  //     "aps": 1.4,
  //     "mod": 0
  //   }
  // }
  // let attackData = {
  //   "punch": {
  //     "percAPS": 1,
  //     "percDMG": 1,
  //     "elem": "physical"
  //   },
  //   "smite": {
  //     "percAPS": 1.2,
  //     "percDMG": 0.9,
  //     "elem": "fire"
  //   },
  //   "cleave": {
  //     "percAPS": 0.9,
  //     "percDMG": 1.2,
  //     "elem": "cold"
  //   }
  // }
  // let stats = lena.attack(lena.level, 'axe', [50,65], lena.strength, .10, 'fire', weaponData, attackData)

//   describe("Lena Attack", () => {
    // it("lena.attack should return an object", () => {
    //   assert.equal(typeof stats, Object);
    // })
    // // it("lena.strength should return -> 20", () => {
    // //   assert.equal(lena.strength, 20);
    // // })
    // // it("lena.vitality should return -> 10", () => {
    // //   assert.equal(lena.vitality, 10);
    // // })
//   })
// })



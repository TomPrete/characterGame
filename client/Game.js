import React, { Component } from "react";
import { connect } from 'react-redux';
import { testAttackData, createNewCharacter } from "./helperFunction/helper_functions.js"
import { fetchAllCharacters } from './store/index.js'


export class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: null,
      characterClass: "warrior",
      characterStats: null
    }
    this.inputCharacterClass = this.inputCharacterClass.bind(this)
    this.handleAttackSubmit = this.handleAttackSubmit.bind(this)
  }


  async componentWillReceiveProps(nextProps) {
    let char_type = this.state.characterClass
    await this.setState({
      characterStats: nextProps.characters[char_type]
    })
  }


  async inputCharacterClass(e) {
    await this.setState({
      characterClass: e.target.value
    })
    let char_type = this.state.characterClass
    await this.setState({
      characterStats: this.props.characters[char_type]
    })
  }

  handleAttackSubmit(e) {
    e.preventDefault()
    let character = this.state.characterClass
    let level = e.target.level.value;
    let minDmg = e.target.minDamage.value;
    let maxDmg = e.target.maxDamage.value;
    let strength = e.target.strength.value;
    let weapon = e.target.weapon.value;
    let elemType = e.target.element.value;
    let elemPct = e.target.elementPercentage.value || 0;
    let weaponData = this.props.characters[character]["weapons"];
    let attackData = this.props.characters[character]["attacks"];
    let newChar = createNewCharacter(character,'Lena', 20, 10, 5, 'shield')
    let results = testAttackData(character, level, weapon, [minDmg, maxDmg], strength, elemPct, elemType, weaponData, attackData)
    this.setState({
      results: results
    })

  }

  render() {
    let characters = this.props.characters
    return (

      <div className="Game">
        <form onSubmit={this.handleAttackSubmit} id="attack-form">
          <div className="input-column">
            <p className="input-text">Input Character Class:</p>
            <select
            name="character"
            className="input-select"
            onChange={this.inputCharacterClass}
            required>
            {
              characters
              ?
              Object.keys(characters).map(character => {
                return <option className="input-select" key={character} value={character}>{character.charAt(0).toUpperCase()+character.slice(1)}</option>
              })
              :
              null
            }
            </select>
          </div>
          <div className="input-column">
            <p className="input-text">Input Character's Level (1-90):</p>
            <input
              name="level"
              type="number"
              placeholder="ex: 10"
              className="input-data"
              required
            />
          </div>
          <div className="input-column">
            <p className="input-text">Choose your Weapon:</p>
            <select
              name="weapon" className="input-select"
              required
            >
            {
              this.state.characterStats
              ?
              Object.keys(this.state.characterStats['weapons']).length
              ?
              Object.keys(this.state.characterStats['weapons']).map(weapon => {
                  return <option className="input-select" key={weapon} value={weapon}>{weapon.charAt(0).toUpperCase()+weapon.slice(1)}</option>
              })
              :
              <option className="input-select">No Weapons Exist</option>
              :
              <option className="input-select">No Weapons Exist</option>
            }

            </select>
          </div>
          <div className="input-column">
            <p className="input-text">Input Weapon's Minimum Damage:</p>
            <input
              type="number"
              name="minDamage"
              className="input-data"
              placeholder="ex: 50"
              required
            />
          </div>
          <div className="input-column">
            <p className="input-text">Input Weapon's Maximum Damage:</p>
            <input
              type="number"
              name="maxDamage"
              className="input-data"
              placeholder="ex: 65"
              required
            />
          </div>
          <div className="input-column">
            <p className="input-text">Input Strength:</p>
            <input
              type="number"
              name="strength"
              className="input-data"
              placeholder="ex: 20"
              required
            />
          </div>
          <div className="input-column">
            <p className="input-text">Input Element Type:</p>
            <select
            name="element"
            className="input-select"
            required
            >
            {
              this.state.characterStats
              ?
              Object.keys(this.state.characterStats["attacks"]).length
              ?
              Object.values(this.state.characterStats["attacks"]).map(attack => {
                if( attack['elem'] ) {
                  let element = attack['elem']
                  return <option className="input-select" key={element} value={element}>{element.charAt(0).toUpperCase()+element.slice(1)} Damage</option>
                }
              })
              :
              <option className="input-select">No Elements Exist</option>
              :
              <option className="input-select">No Elements Exist</option>
            }
            </select>
          </div>
          <div className="input-column">
            <p className="input-text">Input Element Multiplier (0 or 5-15%):</p>
            <input
              type="number"
              name="elementPercentage"
              className="input-data"
              placeholder="ex: 10"
            />
          </div>
        </form>
        <div className="input-column">
          <button className="input-button" type="submit" form="attack-form">Calculate Attack Statistics</button>
        </div>
        {
          !this.state.results
          ?
          ""
          :
          <div className="statistic-column">
            <p className="statistics-title">Attack Type</p>
            <p className="statistics-title">Minimum Damage</p>
            <p className="statistics-title">Maximum Damage</p>
            <p className="statistics-title">Damage Per Second</p>
          </div>
        }
        <div>
          {
            !this.state.results
            ?
            ""
            :
            typeof this.state.results === "string"
            ?
            <div>
              <p>{this.state.results}</p>
            </div>
            :
              Object.keys(this.state.results).map(key => {
                return <div key={key} className="statistic-column">
                  <p className="statistic-result">{key.toUpperCase()}</p>
                  <p className="statistic-result">{this.state.results[key]["minimum"]}</p>
                  <p className="statistic-result">{this.state.results[key]["maximum"]}</p>
                  <p className="statistic-result">{this.state.results[key]["dps"]}</p>
                </div>
              })
          }
        </div>
        <footer>
        </footer>
      </div>
    );
  }
}




const mapState = state => {
  return {
    characters: state.characters,
  }
}

const mapDispatch = { fetchAllCharacters }

const GameContainter = connect(mapState, mapDispatch)(Game)

export default GameContainter



import React, { Component } from "react";
import { connect } from 'react-redux';
import { testAttackData, createNewCharacter } from "./helperFunction/front_functions.js"
import store, {fetchAllCharacters, fetchCharactersStats} from './store/index.js'


class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: null,
      characterClass: "warrior"
    }
    this.inputCharacterClass = this.inputCharacterClass.bind(this)
    this.handleAttackSubmit = this.handleAttackSubmit.bind(this)
  }


  componentDidMount() {
    let char_type = this.state.characterClass
    const fetchCharacterStats = fetchCharactersStats(char_type)
    store.dispatch(fetchCharacterStats)
  }

  async inputCharacterClass(e) {
    await this.setState({
      characterClass: e.target.value
    })
    let char_type = this.state.characterClass
    const fetchCharacterStats = await fetchCharactersStats(char_type);
    await store.dispatch(fetchCharacterStats)
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
    let charWeapons = this.props.stats['weapons'] ? Object.keys(this.props.stats['weapons']) : 0
    let weaponElements = this.props.stats["weapons"]? (Object.values(this.props.stats["attacks"])).map(elem => {
      return elem["elem"]
    }) : 0
    return (

      <div className="Game">
        <header className="Game-header">
          <h1 className="Game-title">Welcome to CopyCat Attack Calculator</h1>
        </header>
        <form onSubmit={this.handleAttackSubmit} id="attack-form">
          <div className="input-column">
            <p className="input-text">Input Character Class:</p>
            <select
            name="character"
            className="input-select"
            onChange={this.inputCharacterClass}
            required>
            {
              Object.keys(characters).map(character => {
                return <option className="input-select" key={character} value={character}>{character.charAt(0).toUpperCase()+character.slice(1)}</option>
              })
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
              charWeapons.length
              ?
              charWeapons.map(weapon => {
                return <option className="input-select" key={weapon} value={weapon}>{weapon.charAt(0).toUpperCase()+weapon.slice(1)}</option>
              })
              :
            <option className="input-select">No Weapon Exists</option>
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
            <p className="input-text">Input Element Type (Physical, Fire, or Ice):</p>
            <select
            name="element"
            className="input-select"
            required
            >
            {
              weaponElements.length
              ?
              weaponElements.map(element => {
                return <option className="input-select" key={element} value={element}>{element.charAt(0).toUpperCase()+element.slice(1)} Damage</option>
              })
              :
              <option className="input-select">No Element Exists</option>
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
    stats: state.stats
  }
}

const mapDispatch = { fetchAllCharacters, fetchCharactersStats }

const GameContainter = connect(mapState, mapDispatch)(Game)

export default GameContainter



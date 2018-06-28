import React, { Component } from "react";

class Villain extends Component {
  render() {
    return (
      <div className="villain-page">
        <div className="v-wrapper">
          <div className="v-columns">
            <div className="v-profile">
              <a href="https://www.dccomics.com/characters/bane">
                <img src="assets/bane.jpg" alt="bane" />
              </a>
              <p>
                <b>Bane:</b>
                <br />
                <b>Powers:</b> venom-driven super-human strength, genius-level
                intellect
                <br />
                <b>Affiliations:</b> International Terrorist
                <br />
                <b>Real Name:</b> Eduardo Dorrance
                <br />
                <b>Weekness:</b> Venom addiction and relapse, Thomas Jagger,
                psychological fear of "the bat-demon" of his nightmares.
              </p>
            </div>
            <div className="v-profile">
              <a href="https://www.dccomics.com/characters/clayface">
                <img src="assets/clayface.jpg" alt="clayface" width="350" />
              </a>
              <p>
                <b>Clayface:</b>
                <br />
                <b>Powers:</b> shape-changing ability, duplication, enhanced
                strength<br />
                <b>Affiliations:</b> Mud Pack, Secret Society of Super-Villains
                II
                <br />
                <b>Real Name:</b> Basil Karlo
                <br />
                <b>Weekness:</b> Extreme cold temperatures
              </p>
            </div>
            <div className="v-profile">
              <a href="https://www.dccomics.com/characters/deathstroke">
                <img src="assets/deathstroke.jpg" alt="deathstroke" />
              </a>
              <p>
                <b>Death Stroke:</b>
                <br />
                <b>Powers:</b> exceptional martial artist, combat strategy,
                durability, enhanced strength and speed, weapons expert,
                superhuman agility, master swordsman<br />
                <b>Affiliations:</b> Mercenary
                <br />
                <b>Real Name:</b> Slade Wilson
                <br />
                <b>Weekness:</b> Missing right eye
              </p>
            </div>
            <div className="v-profile">
              <a href="https://www.dccomics.com/characters/killer-croc">
                <img src="assets/killer-croc.jpg" alt="killer croc" />
              </a>
              <p>
                <b>Killer Croc:</b>
                <br />
                <b>Powers:</b> enhanced strength, durability, razor-sharp teeth
                and claws, expert wrestler<br />
                <b>Affiliations:</b> Medusa Black Mask
                <br />
                <b>Real Name:</b> Waylon Jones
                <br />
                <b>Weekness:</b> Very low intellect
              </p>
            </div>
            <div className="v-profile">
              <a href="http://batman.wikia.com/wiki/King_Shark_(Arkhamverse)">
                <img
                  src="assets/king-shark.jpg"
                  alt="king shark"
                  width="300px"
                />
              </a>
              <p>
                <b>Kingshark:</b>
                <br />
                <b>Powers:</b> Strong skin, sharp teeth, sharp claws, enhanced
                strength<br />
                <b>Affiliations:</b> King of all Sharks
                <br />
                <b>Real Name:</b> Nanaue
                <br />
                <b>Weekness:</b> Electricity
              </p>
            </div>
            <div className="v-profile">
              <a href="https://www.dccomics.com/characters/joker">
                <img src="assets/joker.jpg" alt="joker" width="350px" />
              </a>
              <p>
                <b>Joker:</b>
                <br />
                <b>Powers:</b> complete unpredictability, intelligence<br />
                <b>Affiliations::</b> Injustice Gang, Injustice League, Justice
                League of Arkham
                <br />
                <b>Real Name:</b> Unknown, Jack Napier, Marth Wayne
                <br />
                <b>Weekness:</b> Every super-hero besides Batman
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Villain;

import React from 'react';
import './App.css'; // You can style your components here
import profilePicture from './zoro-pfp-35.jpg'; // Make sure to add your profile picture to the src folder

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Personal Website</h1>
      </header>
      <main>
        <section className="About-me">
          <div className="About-me-content">
            <img src={profilePicture} className="Profile-picture" alt="profile" />
            <div className="About-me-text">
              <h2>About Me</h2>
              <p>
              Roronoa Zoro, the swordsman from "One Piece," is a man of many talents. He's a master swordsman, a loyal crewmate, and a staunch believer in the nap as a form of training. However, there's one aspect of his character that truly stands out: his unparalleled ability to get lost. If navigation were a sport, Zoro would not only fail to find the stadium but would likely end up playing in an entirely different country.

Zoro's sense of direction, or lack thereof, is legendary. In a world filled with pirates, marines, and monstrous sea creatures, Zoro's greatest enemy is geography. Give him a simple task like finding the nearest tavern, and he will, without fail, end up in a completely different town, possibly on a different island. His internal compass doesn't just point north; it points to places unknown and uncharted by mankind.

Despite his directional challenges, Zoro is an invaluable asset to the Straw Hat Pirates. His three-sword style is both unique and terrifying. While most swordsmen are content with one blade, Zoro wields three, because, clearly, two hands and a mouth are the optimal number of appendages for sword-fighting. One can only imagine the trial-and-error process that led to this discovery. Did he start with four and realize one was redundant? We may never know.

Zoro's training regimen is a testament to his dedication. While most people are content with lifting weights or running, Zoro prefers a more intense approach: lifting entire buildings, fighting wild beasts, and occasionally sparring with beings that could easily be mistaken for natural disasters. His idea of "light training" would make even the most seasoned athletes reconsider their life choices. And let's not forget his impressive ability to sleep through anything, be it a raging storm or an intense battle. For Zoro, sleep is both a hobby and an art form.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;

import React from "react";
import "../styles/App.css";
const App = () => {
  return (
    <div id="main">
      <div class="container">
        <div class="community">
          <h2 class="community-header">Join our community</h2>
          <h2>30-day, hassle-free money back guarantee</h2>
          <p>
            Gain access to our library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div class="card-details">
          <div class="card">
            <p class="card-header">Monthly Subscription</p>
            <p>
              <span>$29</span>per Month
            </p>
            <p>Full access for less than $1 a day.</p>
            <button className="btn">Sign Up</button>
          </div>
          <div class="why-us">
            <h4 class="why-us-header">Why Us</h4>
            <ul>
              <li>Tutorials by industry experts</li>
              <li>Peer & expert code review</li>
              <li>Coding exercises</li>
              <li>Access yo our Github repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

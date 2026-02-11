import React from "react";

export default function AboutUs() {
  return (
    <main>
      <section className="hero">
        <h1>ABOUT OUR BRAND</h1>
        <p>PASSION. PERFORMANCE. PADEL.</p>
      </section>

      <section className="content-wrapper">
        <div className="about-content">
          <h2>WHO WE ARE</h2>
          <p>
            Welcome to PADEL UK. We aren't just another online store;{" "}
            <strong>we are a group of professional, UK-based padel players</strong>{" "}
            who live and breathe the sport. We've experienced the scramble for gear firsthand and
            wanted to change the game.
          </p>
          <p>
            Our mission is simple:{" "}
            <strong>
              to help local players get easy accessibility to top-quality equipment
            </strong>{" "}
            without the hassle. We're dedicated to giving you the very best, with a focus on quality,
            performance, and the cutting-edge style that brands like Vibora are known for.
          </p>

          <div className="about-section">
            <div className="about-image-placeholder">
              <img src="/images/Ppitch.png" alt="A local UK padel court or your team playing" />
            </div>
            <div className="about-text">
              <h3>OUR STORY</h3>
              <p>
                <strong>Talk about your journey here.</strong> How did your group of pro players
                come together? What problems did you see in the UK padel market?
                This is a great place to build a personal connection.
              </p>
              <p>
                <i>
                  "After years of competing and seeing friends struggle to find elite rackets...
                  We decided to leverage our professional connections to source the best gear directly..."
                </i>
              </p>
            </div>
          </div>

          <div className="about-section reverse">
            <div className="about-image-placeholder">
              <img src="/images/closeUP.png" alt="Closeup of high-quality padel rackets or gear" />
            </div>
            <div className="about-text">
              <h3>WHY CHOOSE US?</h3>
              <p>
                <strong>Expand on your unique selling points.</strong> What does "pro-player approved"
                really mean for the customer?
              </p>
              <ul>
                <li>
                  <strong>Pro-Player Curated:</strong> Every item on this site is tested and approved by us.
                  We don't sell anything we wouldn't use in a tournament.
                </li>
                <li>
                  <strong>UK Stock &amp; Support:</strong> No more waiting for international shipping.
                  All stock is right here in the UK, and our team can give you genuine, expert advice.
                </li>
                <li>
                  <strong>Community Focused:</strong> We're building more than a store. We're building a community.
                  Look out for our upcoming clinics, events, and player spotlights.
                </li>
              </ul>
            </div>
          </div>

          <h3 className="team-heading">MEET THE TEAM</h3>

          <div className="team-grid">
            <div className="team-member">
              <img src="/images/T1.png" alt="Aneesh Nayyar" />
              <h4>ANESH NAYYAR</h4>
              <p>Apparel &amp; Footwear Expert</p>
            </div>

            <div className="team-member">
              <img src="/images/T2.png" alt="Joseba Bilbao" />
              <h4>JOSEBA BILBAO</h4>
              <p>Head Coach</p>
            </div>

            <div className="team-member">
              <img src="/images/T3.png" alt="Ajay Sangha" />
              <h4>AJAY SANGHA</h4>
              <p>Community Manager</p>
            </div>

            <div className="team-member">
              <img src="/images/T4.png" alt="Ahmed Ahmed" />
              <h4>AHMED AHMED</h4>
              <p>E-commerce Manager</p>
            </div>

            <div className="team-member">
              <img src="/images/T5.png" alt="Adam Jama" />
              <h4>ADAM JAMA</h4>
              <p>Content Creator</p>
            </div>

            <div className="team-member">
              <img src="/images/T6.png" alt="Soyed Tanim" />
              <h4>SOYED TANIM</h4>
              <p>Community Manager</p>
            </div>

            <div className="team-member">
              <img src="/images/T7.png" alt="Macdonald Emeshieobi" />
              <h4>MACDONALD EMESHIEOBI</h4>
              <p>Lead Product Curator</p>
            </div>

            <div className="team-member">
              <img src="/images/T8.png" alt="Adam Mahmood" />
              <h4>ADAM MAHMOOD</h4>
              <p>Racket Specialist</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

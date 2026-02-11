export default function Home() {
  return (
    <>
      <section id="banner">
        <div className="banner-image">
          <img src="/images/homepagebaanerimage.png" alt="Padel Banner" />
        </div>
        <div className="banner-txt">
          <h1>VIBORA UK</h1>
          <h2>PADEL LIKE NEVER BEFORE</h2>
        </div>
      </section>

      <section id="store">
        <h2>VIBORA STORE</h2>
        <input type="text" id="search" placeholder="Search for products..." />
      </section>

      <section id="featured-rackets">
        <h2>FEATURED RACKETS</h2>
        <div className="products-container" id="featured-rackets-list"></div>
      </section>

      <section id="featured-balls">
        <h2>FEATURED BALLS</h2>
        <div className="products-container" id="featured-balls-list"></div>
      </section>

      <section id="featured-sportswear">
        <h2>FEATURED SPORTSWEAR</h2>
        <div className="products-container" id="featured-sportswear-list"></div>
      </section>

      <section id="payment-banner">
        <div id="payment-banner-img">
          <img src="/images/rsg-4253484635.jpeg" alt="Payment Banner" />
        </div>

        <div id="payment-banner-txt">
          <h2>PAY AT YOUR PACE</h2>

          <div id="payment-methods-row">
            <section id="paypal-method">
              <img src="/images/PayPal.jpg" alt="PayPal" />
              <h4>BUY NOW & PAY IN 3</h4>
              <h5>Pay in 3 interest-free payments</h5>
              <a
                href="https://www.paypal.com/uk/digital-wallet/ways-to-pay/buy-now-pay-later"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
            </section>

            <section id="klarna-method">
              <img src="/images/Screenshot 2025-11-24 at 21.17.26.png" alt="Klarna" />
              <h4>BUY NOW PAY LATER</h4>
              <h5>Buy now pay in 30 days</h5>
              <a
                href="https://www.klarna.com/uk/payments/pay-in-30-days/"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

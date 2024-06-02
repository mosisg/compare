'use client'

import { useState } from 'react';
import '@/app/globals.css'

const Cookies = () => {
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [cookieDeclined, setCookieDeclined] = useState(false);

  const handleAcceptCookies = async () => {
    try {
      // Appel à l'API pour définir les cookies
      // Cette partie est à remplacer par votre propre logique
      // Exemple d'utilisation d'une requête fetch :
      // const response = await fetch('/api/setCookie', {
      //   method: 'GET',
      //   credentials: 'include'
      // });
      // if (response.ok) {
      //   setCookieAccepted(true);
      // } else {
      //   console.error('Erreur lors de l\'acceptation des cookies : ', response.status);
      // }
      setCookieAccepted(true); // Simulation de l'acceptation des cookies
    } catch (error) {
      console.error('Erreur lors de la requête fetch : ', error);
    }
  };

  const handleDeclineCookies = () => {
    setCookieDeclined(true);
  };

  return (
    <div>
      {!cookieAccepted && !cookieDeclined && (
        <div className="cky-consent-container cky-classic-bottom" tabIndex={0}>
          <div className="cky-consent-bar" data-cky-tag="notice" style={{ borderColor: "#f4f4f4", backgroundColor: "#FFFFFF" }}>
            <div className="cky-notice">
              <p className="cky-title" role="heading" aria-level={1} data-cky-tag="title" style={{ color: "#012737" }}>
                Nous accordons dimportance à votre vie privée
              </p>
              <div className="cky-notice-group">
                <div className="cky-notice-des" data-cky-tag="description" style={{ color: "#012737" }}>
                  <p>

                    Nous utilisons des cookies pour améliorer votre expérience de navigation, diffuser des annonces ou du contenu personnalisé et analyser notre trafic. En cliquant sur Accepter Tout, vous consentez à notre utilisation des cookies. Politique relative aux cookies. &nbsp;
                    <a href="#" className="cky-policy" aria-label="Cookie Policy" onClick={handleAcceptCookies} style={{ color: "#79CE25", borderColor: "transparent", backgroundColor: "transparent" }} data-cky-tag="readmore-button">
                      Politique de cookie
                    </a>
                  </p>
                </div>
                <div className="cky-notice-btn-wrapper" data-cky-tag="notice-buttons">
                  <button className="cky-btn cky-btn-customize" aria-label="Configure" data-cky-tag="settings-button" style={{ color: "#79CE25", borderColor: "#79CE25", backgroundColor: "transparent" }} aria-expanded="false" onClick={handleDeclineCookies}>
                    Refuser
                  </button>
                  <button className="cky-btn cky-btn-accept" aria-label="Accept All" data-cky-tag="accept-button" style={{ color: "#FFFFFF", borderColor: "#79CE25", backgroundColor: "#79CE25" }} onClick={handleAcceptCookies}>
                    Accepter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cookies;

import { useState } from 'react';
import './App.css';
import  Navbar from './components/Navbar'

function App() {
  // Estado para controlar la visibilidad de los enlaces de contacto
  const [showContactLinks, setShowContactLinks] = useState(false);

  const handleLearnMoreClick = (event) => {
    event.preventDefault(); // Evita que el enlace recargue la página o navegue
    setShowContactLinks(true); // Cambia el estado para mostrar los enlaces
  };

  return (
    <div className="App">
      <Navbar />
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="videos/background.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        <div className="content-wrapper">
          <div className="content">
            <h1>Welcome to 3R Partners</h1>
            <p>At 3R Partners, we don’t just consult — we <em>create</em>. </p>
            <p> We help businesses transform ideas into rock-solid digital experiences </p>

            {/* Renderizado condicional: Si showContactLinks es falso, muestra el botón */}
            {!showContactLinks ? (
              <a href="/learn-more" className="btn-hero" onClick={handleLearnMoreClick}>
                Contact Us
              </a>
            ) : (
              // Si showContactLinks es verdadero, muestra los enlaces
              <div className="contact-links-container">
                <a
                  href="https://wa.me/TUNUMERODEWHATSAPP?text=Hola!%20Me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n."
                  className="contact-link whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
                <a href="mailto:TUCORREO@EJEMPLO.COM" className="contact-link email">
                  <i className="fas fa-envelope"></i> Correo
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

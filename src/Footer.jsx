  import React from "react"; 
  import facebook from "./icons8-facebook.svg";
  import instagram from "./icons8-instagram.svg";
  import linkedin from "./icons8-linkedin.svg";

  function Footer(){

  return <div className='footer'>
            <div className="foot">
                <div className="foot-in a1">
                    <h2>Notre site</h2>
                    <span>Conditions d'utilisation</span>
                    <span>F.A.Q</span>
                    <span>Confidentialité</span>
                </div>
                <div className="foot-in a2">
                    <h2>Innotechwave</h2>
                    <span>Nos projets</span>
                    <span>Nos services</span>
                    <span>Notre équipe</span>
                </div>
                <div className="foot-in a3">
                    <h2>Suivez-nous</h2>
                    <span><a href="#">Facebook</a></span>
                    <span><a href="#">Instagram</a></span>
                    <span><a href="#">LinkedIn</a></span>
                </div>
                <div className="foot-in a4">
                    <h2>Contactez-nous</h2>
                    <span>Tel:<b>+229 53893625</b></span>
                    <span>Email:<b>contact.innotechwave@gmail.com</b></span>
                    
                </div>
            </div>
            <div className="social-media">
                <img 
                    src={facebook}
                    alt="facebook"
                 />
                <img 
                    src={instagram}
                    alt="facebook"
                 />
                 <img 
                    src={linkedin}
                    alt="facebook"
                 />
            </div>
            <span className="copyright">Copyright Abomey-Calavi, Bénin 2023</span>
</div>

  }

  export default Footer;
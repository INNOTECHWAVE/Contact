import React from "react";


const Formulaire=() =>
{
    return(
        <div>
            <h2 className="comment">Laissez nous un commentaire !!</h2>
            <fieldset>
            <form className="form" method="POST" action="">
                <label id="nom">Nom et Prénoms<br />
                    <input id="nom" type="text" name="nom" placeholder="Jack Doe"/>
                </label>
                <label id="phone">Téléphone<br />
                    <input id="phone" type="text" name="phone-number"/>
                </label>
                <label id="email">Adresse email<br />
                    <input id="email" type="email" name="email" placeholder="jackdoe@example.com"/>
                </label>
                <label>Votre commentaire<br />
                    <textarea cols="35" rows="8" placeholder="Entrez le commentaire ici"></textarea>
                </label>
                <br />
                <input id="send" type="submit" value="Soumettre" />
            </form>
        </fieldset>
        </div>
        
        
    
        
    )
}

export default Formulaire;
import React from "react";

const Menu=()=>
{
    const menu=['Accueil','Qui sommes-nous','Notre équipe','Nos projets','Contactez-nous'];
    return(
        <div className="menu">
            <img src="" alt="" />
            <ul className="menu-element">
                {   menu.map((content, index) => <li className="element" key={`${content}-${index}`}>
                    {content}
                    </li>)  
                }
            </ul>
        </div>
    )

}

export default Menu;
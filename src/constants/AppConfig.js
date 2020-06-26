/* 
*
* ALL APP CONFIG IN ONE FILE
*

// <p className="" dangerouslySetInnerHTML={{__html: }}></p>

*/

//CATEGORIES :

    // G5 Categories :

        // Welcome Home PAge
        const WELCOME = 70;
    
        // Appel d'offres :
        const APPEL_OFFRE = 61 ;

        // Presentation :
        const PRESENTATION = 39;
        // const Presentation_image_text_1 = 44;
        // const Presentation_image_text_2 = 45;
        // const Presentation_Citation = 46;
        
        //Activites : 
        const NOS_ACTIVITES = 23;
            const DEFENSE_SECURITE = 35;
            const GOUVERNANCE = 36;
                const GENRE = 59;
                const CELLULE_ANTI_REDICALISATION_EXTREMISME_VIOLANT = 60;
            const INFRASTRUCTURE = 37;
            const RESILENCE = 38;

        // Actualites :
        const ACTUALITE_INTERNATIONALE = 31;
        const ACTUALITES_DES_PAYS_G5 = 27;
        const VIDEOS = 26;
        
        // Rapports :
        const RAPPORTS = 28;
        
        // Partenariat :
        const PARTENARIAT = 34;
        
        // Documents :
        const DOCUMENTATIONS = 25;
            const PUBLICATIONS = 24;
            const REGLEMENTATIONS = 55;
            const MULTIMEDIAS = 56;
            const CORRESPONDANCE = 29;
            const DISCOURS = 30;
            const AUTRES_DOCUMENTS = 32;
            const COMMUNIQUE_DE_PRESSE = 63;



// Config :
   const config = {
        // url : 'https://g5sahel.switch.tn/wp-json/',
        url : 'https://admin.g5sahel.org/wp-json/',
        newsletterApiKey : 'g5-sahel',
   };

export {
    config,
  
    WELCOME,
    
    APPEL_OFFRE,

    PRESENTATION,
   
    NOS_ACTIVITES,
        DEFENSE_SECURITE,
        GOUVERNANCE,
            GENRE,
            CELLULE_ANTI_REDICALISATION_EXTREMISME_VIOLANT,
        INFRASTRUCTURE,
        RESILENCE,

    ACTUALITES_DES_PAYS_G5,
    ACTUALITE_INTERNATIONALE,
        
    VIDEOS,
        
        RAPPORTS,
        PARTENARIAT,
        
    DOCUMENTATIONS,
        PUBLICATIONS,
        REGLEMENTATIONS,
        MULTIMEDIAS,
        CORRESPONDANCE,
        DISCOURS,
        AUTRES_DOCUMENTS,
        COMMUNIQUE_DE_PRESSE,
};

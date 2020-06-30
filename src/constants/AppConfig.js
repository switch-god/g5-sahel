/* 
*
* ALL APP CONFIG IN ONE FILE
*

// <p className="" dangerouslySetInnerHTML={{__html: }}></p>

*/

//CATEGORIES :

    // G5 Categories :
        const UNCATEGORIZED = 1;

        // Welcome Home PAge
        const WELCOME = 70;
    
        // Appel d'offres :
        const APPEL_OFFRE = 61 ;

        // Presentation :
        const PRESENTATION = 39;
            const SECRETARIAT_EXECUTIF= 40;
            const ORGANES_APPUI = 51; 
            const DISPOSITIF_DE_PILOTAGE_G5 = 47;

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

        // Footer SDS & PIP
        const PIP = 73;
        const SDS = 74;



// Config :
   const config = {
        // url : 'https://g5sahel.switch.tn/wp-json/',
        url : 'https://admin.g5sahel.org/wp-json/',
        newsletterApiKey : 'g5-sahel',
        siteName: 'G5 SAHEL',
   };

export {
    config,

    UNCATEGORIZED,
  
    WELCOME,
    
    APPEL_OFFRE,

    PRESENTATION,
    SECRETARIAT_EXECUTIF,
    ORGANES_APPUI,
    DISPOSITIF_DE_PILOTAGE_G5,
   
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

    SDS,
    PIP,
};

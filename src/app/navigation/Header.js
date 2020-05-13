import React, { Component } from 'react'
import {
   Container,
   Row,
   Col,
   Navbar,
   Nav,
   NavDropdown,
   Button
} from 'react-bootstrap';


// Connect Redux :
import { connect } from 'react-redux';
// import { toogleSearch } from '../../redux/actions/PostsActions';


import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { IoIosSearch } from 'react-icons/io';
import {AutoComplete} from 'primereact/autocomplete';

// IMAGES & STYLING :
import './Header.css';
import LOGO from '../../assets/images/Header/logo3.png';
import LOGO2 from '../../assets/images/Header/logo2.png';
import ARROW from '../../assets/images/Header/downArrow.png';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            brandSuggestions: null
        };
        this.brands = ['Evenements', 'Actualites', 'Presentation', 'Documentation', 'Contact', 'Recrutement'];
    }

    render() {
        return (
            <Container fluid>
                <Row> 
                    <Col />
                    <Col />
                    <Col />
                    <Col lg={4} className="menuWeb inline-ipad" >
                        <Link style={styles.TopBarLinks} to="/appel-offre/cat-1"> Appel d'offre </Link>
                        <Link style={styles.TopBarLinks} to="/recrutement"> Recrutement </Link>
                        <Link style={styles.TopBarLinks} to="/contact-g5"> Contact </Link>
                    </Col>
                </Row>
                <hr style={{marginBottom : -5 + "px",borderColor : '##BCBCBC'}} />
                <Row>
                    <Col md={1}/>
                    <Col>
                        
                        <Navbar bg={null} expand="lg">
                            <Link className="navbar-brand logoMobile" to="/"><img src={LOGO2} height={80} className="d-inline-block align-top" /></Link>
                            <Link className="navbar-brand logoWeb" to="/"><img src={LOGO} height={80} className="d-inline-block align-top" /></Link>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse inline="true">
                                <Nav className="ml-auto">
                                <div className="menuWeb">
                                    {this.renderWebMenuElements()}   
                                </div>

                                    <div className="menuMobile">
                                        {this.renderMobileMenuElements()}
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>

                    </Col>
                    <Col md={1}/>
                </Row>
                <hr style={{marginTop : -5 + "px", borderColor : '##BCBCBC', marginBottom : 50 + "px"}} />
            </Container>
        )
    }

    renderWebMenuElements = () => (
       <>   
       <div className="dropdown">
            <Link style={styles.MainMenuLinks} to="/presentation"> Présentation <img src={ARROW} height={7} /></Link>
            <div className="dropdown-content">
                {/* NESTED LINKS */}
                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <a style={styles.MainMenuLinks} href="/article/un-nouveau-secretaire-permanent-pour-le-g5-sahel">Secrétariat Exécutif</a>
                </Row>
                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <a style={styles.MainMenuLinks} href="/article/les-comites-nationaux-de-coordination">Comités Nationaux de Coordination</a>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/presentation">Structures Rattachées</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/documentation/organigramme">Organigramme</Link>
                </Row>
                {/* NESTED LINKS */}
            </div>
        </div>
        
        <div className="dropdown">
            <Link style={styles.MainMenuLinks} to="/nos-activites"> Nos Activités <img src={ARROW} height={7} /></Link>
            <div className="dropdown-content">
                {/* NESTED LINKS */}
                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <HashLink style={styles.MainMenuLinks} to="/nos-activites#defenseSecurite">Défense et sécurité</HashLink>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <HashLink style={styles.MainMenuLinks} to="/nos-activites#gouvernance">Gouvernance</HashLink>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <HashLink style={styles.MainMenuLinks} to="/nos-activites#infrastructure">Infrastructures</HashLink>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <HashLink style={styles.MainMenuLinks} to="/nos-activites#resilence">Résilience et Développement humain</HashLink>
                </Row>
                {/* NESTED LINKS */}
            </div>
        </div>
        
        <div className="dropdown">
            <Link style={styles.MainMenuLinks} to="/actualites">Actualités</Link>
        </div>
        
        <div className="dropdown">
            {/* <Link style={styles.MainMenuLinks} to="/events">Evenements <img src={ARROW} height={7} /></Link> */}
            <Link style={styles.MainMenuLinks} to="/events"> Evenements </Link>
            {/* NESTED LINKS */}
             {/* <div className="dropdown-content">
                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/events">Prochains événements</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/events">Événements passés</Link>
                </Row>
            </div> */}
                {/* NESTED LINKS */}  
        </div>
        
        <div className="dropdown">
            {/* <Link style={styles.MainMenuLinks} to="/documentation/organigramme"> Documentation <img src={ARROW} height={7} /> </Link> */}
            <Link style={styles.MainMenuLinks} to="/documentation/organigramme"> Documentation </Link>
            
            {/* NESTED LINKS */}
            {/* <div className="dropdown-content">
                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/documentation">Règlementation</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/documentation">Newsletter</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/documentation">SDS, PIP</Link>
                </Row>
            </div> */}
            {/* NESTED LINKS */}

        </div>
        {/* <AutoComplete 
            value={this.state.brand} 
            onChange={(e) => this.setState({brand: e.value})}
            suggestions={this.state.brandSuggestions} 
            completeMethod={this.suggestBrands.bind(this)} 
        />

        <IoIosSearch size={25} className="searchIcon" /> */}
       </>
    );
  
    renderMobileMenuElements = () => (
       <>
            <div style={{textAlign : 'center'}}>
                <a style={styles.TopBarLinks} href="/appel-offre/cat-1"> Appel d'offre </a>
                <a style={styles.TopBarLinks} href="/recrutement"> Recrutement </a>
                <a style={styles.TopBarLinks} href="/contact-g5"> Contact </a>
            </div>
            
            <NavDropdown.Divider />
            <Row>
                <Col />

                <Col>
                    <NavDropdown title="Présentation" style={styles.collapsible}>
                        <a style={styles.navItem} className="dropdown-item" href="/presentation">Présentation</a>
                        <a style={styles.navItem} className="dropdown-item" href="/article/un-nouveau-secretaire-permanent-pour-le-g5-sahel">Secrétariat Exécutif</a>
                        <a style={styles.navItem} className="dropdown-item" href="/article/les-comites-nationaux-de-coordination">Comités Nationaux de Coordination</a>
                        <a style={styles.navItem} className="dropdown-item" href="/presentation">Structures Rattachées</a>
                        <a style={styles.navItem} className="dropdown-item" href="/documentation/organigramme">Organigramme</a>
                    </NavDropdown>

                    <NavDropdown title="Nos Activités" style={styles.collapsible}>
                        <a style={styles.navItem} className="dropdown-item" href="/nos-activites">Nos Activités</a>
                        <HashLink style={styles.navItem} className="dropdown-item" to="/nos-activites#defenseSecurite">Défense et sécurité</HashLink>
                        <HashLink style={styles.navItem} className="dropdown-item" to="/nos-activites#gouvernance">Gouvernance</HashLink>
                        <HashLink style={styles.navItem} className="dropdown-item" to="/nos-activites#infrastructure">Infrastructures</HashLink>
                        <HashLink style={styles.navItem} className="dropdown-item" to="/nos-activites#resilence">Résilience & Développement humain</HashLink>
                    </NavDropdown>
                    
                    <NavDropdown title="Actualités" style={styles.collapsible}>
                        <a style={styles.navItem} className="dropdown-item" href="/actualites">Nos actualités</a>
                    </NavDropdown>
                    
                    <NavDropdown title="Evenements" style={styles.collapsible}>
                        <a style={styles.navItem} className="dropdown-item" href="/events">Nos événements</a>
                        {/* <Link style={styles.navItem} className="dropdown-item" to="/events">Prochains événements</Link>
                        <Link style={styles.navItem} className="dropdown-item" to="/events">Événements passés</Link> */}
                    </NavDropdown>
                    
                       
                    <NavDropdown title="Documentation" style={styles.collapsible}>
                        <a style={styles.navItem} className="dropdown-item" href="/documentation/organigramme">Nos Documents</a>
                        {/* <Link style={styles.navItem} className="dropdown-item" to="/documentation">Règlementation</Link>
                        <Link style={styles.navItem} className="dropdown-item" to="/documentation">Newsletter</Link>
                        <Link style={styles.navItem} className="dropdown-item" to="/documentation">SDS, PIP</Link> */}
                    </NavDropdown>
                    
                </Col>

                <Col  />
            </Row>
            
       </>
    );

    // suggestBrands(event) {
    //     let results = this.brands.filter((brand) => {
    //          return brand.toLowerCase().startsWith(event.query.toLowerCase());
    //     });
    //     this.setState({ brandSuggestions: results });
    // }   
}

const styles = {
    TopBarLinks : {
        color : 'black', 
        fontSize : 13, 
        fontFamily : 'Poppins Light',
        marginRight : 20+"px",
    },
    MainMenuLinks : {
        backgroundColor : 'transparent',
        borderWidth : 0,
        fontSize : 14, 
        fontFamily : 'Poppins Light',
        fontWeight : '200',
        color : 'black', 
        marginRight : 20,
    },
    collapsible : {
        width : '95%',
        fontFamily : 'Poppins Light',
        textAlign : 'center',
        color : 'black'
    },
    navItem : {
        fontSize : 13+"px",
    },
};

const mapStateToProps = state => ({
    searchStatus : state.postsR.searchStatus,
})

export default connect(mapStateToProps, {})(Header);

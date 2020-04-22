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
                    <Col style={{marginRight : 50+"px"}} className="menuWeb" >
                        <Link style={styles.TopBarLinks} to="#"> Appel d'offre </Link>
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
                            <Navbar.Collapse inline>
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
                    <Link style={styles.MainMenuLinks} to="/presentation">Secrétariat Exécutif</Link>
                </Row>
                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/presentation">Communes Nationales De Coordination</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/presentation">Structures Rattachées</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/presentation">Organigramme</Link>
                </Row>
                {/* NESTED LINKS */}
            </div>
        </div>
        
        <div className="dropdown">
            <Link style={styles.MainMenuLinks} to="/nos-activites"> Nos Activités <img src={ARROW} height={7} /></Link>
            <div className="dropdown-content">
                {/* NESTED LINKS */}
                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/nos-activites">Défense et sécurité</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/nos-activites">Gouvernance</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/nos-activites">Infrastructures</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/nos-activites">Résilience et Développement humain</Link>
                </Row>
                {/* NESTED LINKS */}
            </div>
        </div>
        
        <div className="dropdown">
            <Link style={styles.MainMenuLinks} to="/actualites">Actualités</Link>
        </div>
        
        <div className="dropdown">
            <Link style={styles.MainMenuLinks} to="/events">Evenements <img src={ARROW} height={7} /></Link>
             <div className="dropdown-content">
                 {/* NESTED LINKS */}
                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/events">Prochains événements</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/events">Événements passés</Link>
                </Row>
                {/* NESTED LINKS */}  
            </div>
        </div>
        
        <div className="dropdown">
            <Link style={styles.MainMenuLinks} to="/documentation"> Documentation <img src={ARROW} height={7} /> </Link>
            <div className="dropdown-content">
                {/* NESTED LINKS */}
                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/documentation">Règlementation</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/documentation">Newsletter</Link>
                </Row>

                <Row style={{paddingTop : 10+"px",paddingBottom : 10+"px",paddingLeft : 10+"px"}}>
                    <Link style={styles.MainMenuLinks} to="/documentation">SDS, PIP</Link>
                </Row>
                {/* NESTED LINKS */}                
            </div>
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
                <Link style={styles.TopBarLinks} to="#"> Appel d'offre </Link>
                <Link style={styles.TopBarLinks} to="/recrutement"> Recrutement </Link>
                <Link style={styles.TopBarLinks} to="/contact-g5"> Contact </Link>
            </div>
            
            <NavDropdown.Divider />
            <Row>
                <Col />

                <Col>
                    <NavDropdown title="Présentation" style={styles.collapsible}>
                        <NavDropdown.Item style={styles.navItem} href="/presentation">Présentation</NavDropdown.Item>
                        <NavDropdown.Item style={styles.navItem} href="/presentation">Secrétariat Exécutif</NavDropdown.Item>
                        <NavDropdown.Item style={styles.navItem} href="/presentation">Communes Nationales De Coordination</NavDropdown.Item>
                        <NavDropdown.Item style={styles.navItem} href="/presentation">Structures Rattachées</NavDropdown.Item>
                        <NavDropdown.Item style={styles.navItem} href="/presentation">Organigramme</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Nos Activités" style={styles.collapsible}>
                        <NavDropdown.Item  style={styles.navItem} href="/nos-activites">Nos Activités</NavDropdown.Item>
                        <NavDropdown.Item  style={styles.navItem} href="/nos-activites">Défense et sécurité</NavDropdown.Item>
                        <NavDropdown.Item  style={styles.navItem} href="/nos-activites">Gouvernance</NavDropdown.Item>
                        <NavDropdown.Item  style={styles.navItem} href="/nos-activites">Infrastructures</NavDropdown.Item>
                        <NavDropdown.Item  style={styles.navItem} href="/nos-activites">Résilience et Développement humain</NavDropdown.Item>
                    </NavDropdown>
                    
                    <NavDropdown title="Actualités" style={styles.collapsible}>
                        <NavDropdown.Item style={styles.navItem} href="/actualites">Nos actualités</NavDropdown.Item>
                    </NavDropdown>
                    
                    <NavDropdown title="Evenements" style={styles.collapsible}>
                        <NavDropdown.Item style={styles.navItem} href="/events">Nos événements</NavDropdown.Item>
                        <NavDropdown.Item style={styles.navItem} href="/events">Prochains événements</NavDropdown.Item>
                        <NavDropdown.Item style={styles.navItem} href="/events">Événements passés</NavDropdown.Item>
                    </NavDropdown>
                    
                       
                    <NavDropdown title="Documentation" style={styles.collapsible}>
                        <NavDropdown.Item  style={styles.navItem}  href="/documentation">Documentation</NavDropdown.Item>
                        <NavDropdown.Item  style={styles.navItem}  href="/documentation">Règlementation</NavDropdown.Item>
                        <NavDropdown.Item  style={styles.navItem} href="/documentation">Newsletter</NavDropdown.Item>
                        <NavDropdown.Item  style={styles.navItem} href="/documentation">SDS, PIP</NavDropdown.Item>
                    </NavDropdown>
                    
                </Col>

                <Col  />
            </Row>
            
       </>
    );



    suggestBrands(event) {
        let results = this.brands.filter((brand) => {
             return brand.toLowerCase().startsWith(event.query.toLowerCase());
        });
        this.setState({ brandSuggestions: results });
    }   
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

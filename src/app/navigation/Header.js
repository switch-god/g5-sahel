import React, { Component } from 'react'
import {
   Container,
   Row,
   Col,
   Navbar,
   Nav,
   NavDropdown,
   Form,
   Spinner,
   Button,
} from 'react-bootstrap';

// Connect Redux :
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { IoIosSearch,IoIosArrowForward } from 'react-icons/io';

// IMAGES & STYLING :
import './Header.css';
import LOGO from '../../assets/images/Header/logo3.png';
import LOGO2 from '../../assets/images/Header/logo2.png';
import ARROW from '../../assets/images/Header/downArrow.png';

import axios from 'axios';
import { config } from '../../constants/AppConfig';
import UltimatePagination from '../../components/Paginate';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchInput: '', 
            searchResults: [],
            searching: false,   
            currentPage: 1,
            totalSearchPosts:0, 
            totalPages: 3,
        };
    
    }

    render() {
        return (
            <Container fluid>
                <Row> 
                    <Col />
                    <Col />
                    <Col />
                    <Col lg={4} className="topMenuWeb inline-ipad" >
                        <Link style={styles.TopBarLinks} to="/appel-offres">Appel d'offres</Link>
                        <Link style={styles.TopBarLinks} to="/recrutement">Recrutement</Link>
                        <Link style={styles.TopBarLinks} to="/contact-g5">Contact</Link>
                    </Col>
                </Row>
                <hr style={{marginBottom : -5 + "px",borderColor : '##BCBCBC'}} />
                <Row>
                    <Col md={1} xl={1}/>
                    <Col>
                        <Navbar bg={null} expand="lg">
                            <Link className="navbar-brand logoMobile" to="/"><img src={LOGO2} height={80} className="d-inline-block align-top" /></Link>
                            <Link className="navbar-brand logoWeb" to="/"><img src={LOGO} height={80} className="d-inline-block align-top" /></Link>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse inline="true">
                                <div className="menuWeb">
                                    <Nav className="ml-auto">
                                            {this.renderWebMenuElements()}   
                                    </Nav>
                                </div>


                                <div className="menuMobile">
                                    <Nav className="mr-auto">
                                        {this.renderMobileMenuElements()}
                                    </Nav>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>

                    </Col>
                    <Col md={1} xl={1}/>
                </Row>
                <hr style={{marginTop : -5 + "px", borderColor : '##BCBCBC', marginBottom : 50 + "px"}} />
            </Container>
        )
    }


    searchByTitle = (nextPage = 1) => {
                
        this.setState({
            currentPage: nextPage,
        });

        if(this.state.searchInput.length > 0) {

            this.setState({
                searching: true,
            });

            setTimeout(() => 
                axios.get(`${config.url}wp/v2/search?search=${this.state.searchInput}&page=${nextPage}&per_page=10&_embed`)
                .then(response => {
                    // console.log("Resp", response.data);
                    
                    this.setState({
                        searching: false,
                        totalSearchPosts: response.headers['x-wp-total'], 
                        totalPages: response.headers['x-wp-totalpages'],
                        searchResults: response.data,
                    });
    
                })
                .catch(err =>
                    console.log("Error =>", err)
                )
            ,1000);
        };

        // console.log(event.target.value);
    }

    handleInputChange = (event) => {
        this.setState({
            searchInput: event.target.value,
        });

        this.searchByTitle();
    }

    renderWebMenuElements = () => (
       <div>   
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

        
        <IoIosSearch size={25} className="openBtn" onClick={() => this.openSearch()} />
        
        {/* FULLSCREEN SEARCH */}
        <div id="myOverlay" className="overlay">
            <span className="closebtn" onClick={() => this.closeSearch()} title="Fermer la recherche">×</span>
            <div className="overlay-content">
                <Form.Group as={Col} controlId="formGridEmail"> 
                    <Form.Control 
                        className="no-border-input-header" 
                        type="text" 
                        placeholder="Rechercher..."
                        value={this.state.searchInput} 
                        onChange={input => this.handleInputChange(input)} 
                    />
                   <IoIosSearch size={40} className="searchIcon" />
                </Form.Group>
                
                <div className={this.state.searchInput.length > 0 && this.state.searchResults.length > 0 ? "searchResults scrollableSearch" : ""}>
                {
                this.state.searching 
                ?
                    (
                        
                        <div className="resultSpinnerContainer"> 
                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> 
                        </div>
                        
                    )
                :
                this.state.searchResults.length > 0 && this.state.searchInput.length > 0
                ?
                    (
                        <>
                        <div className="btnTotalContainer">
                        <Col>
                            <p className="resultTitle" style={{textAlign: 'left'}}>"{this.state.totalSearchPosts}" résultat(s) trouvé(s)</p>
                             <Link 
                                className="btn btn-light infraVoirToutButton"
                                style={{marginBottom: '20px',float: 'left'}}
                                onClick={() => this.closeSearch()}
                                to={{ pathname : `/search/${this.state.searchInput}` }}
                            >
                                Tous les résultats <IoIosArrowForward size={'20px'} />
                            </Link>
                        </Col>
                        </div>
                        {
                            this.state.searchResults.map((result,index) => 
                                <div key={index} className={"result"}>
                                    <a href={`/article/${result._embedded.self[0].slug}`} className="resultTitle" dangerouslySetInnerHTML={{__html:result.title}}></a>                                </div>
                        )
                        }
                        <div style={{paddingLeft: '10px'}}>
                            <UltimatePagination 
                                currentPage={this.state.currentPage}
                                totalPages={this.state.totalPages}
                                boundaryPagesRange={1}
                                siblingPagesRange={1}
                                hideEllipsis={false}
                                hidePreviousAndNextPageLinks
                                hideFirstAndLastPageLinks
                                onChange={(current) => this.searchByTitle(current) }
                            />
                        </div>
                       </>
                    )
                :
                this.state.searchResults.length === 0 && this.state.searchInput.length > 0
                && 
                    (
                        <div className="result-no-border">
                            <p className="resultTitle">Aucun resultat pour cette recherche</p>
                        </div>
                    )
                }
                </div>
            </div>
        </div>
        {/* FULLSCREEN SEARCH */}
   
       </div>
    );
  
    renderMobileMenuElements = () => (
       <>
            <div style={{textAlign : 'left', paddingLeft: '31px',}} >
                <a  className="topMenuItem" href="/appel-offres"> Appel d'offres </a>
                <a  className="topMenuItem" href="/recrutement"> Recrutement </a>
                <a  className="topMenuItem" href="/contact-g5"> Contact </a>
            </div>
            
            <NavDropdown.Divider />
            <Row>
                {/* <Col xs={1} md={0} /> */}

                <Col className="menuMobileContainer">
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
                    
                    <Form inline>
                        <input 
                            type="text" 
                            value={this.state.searchInput} 
                            onChange={input => this.handleInputChange(input)} 
                            placeholder="Rechercher..." 
                            className="searchInput" 
                        />
                        <a 
                            className=""
                            href={`/search/${this.state.searchInput}`}
                        >
                           <IoIosSearch size={25} className="searchIcon"/>
                        </a>
                    </Form>
                </Col>

                <Col xs={1}  md={2} />
            </Row>
       </>
    );


    closeSearch = () => {
        document.getElementById("myOverlay").style.display = "none";
    }

    openSearch = () => {
        document.getElementById("myOverlay").style.display = "block";
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
        marginRight : '14px',
    },
    collapsible : {
        width : '95%',
        fontFamily : 'Poppins Light',
        textAlign : 'center',
        color : 'black'
    },
    navItem : {
        fontSize : 13+"px",
        textAlign: 'left',
        fontFamily : 'Poppins Light',
    },
};

const mapStateToProps = state => ({
    // searchStatus : state.postsR.searchStatus,
})

export default connect(mapStateToProps, {})(Header);

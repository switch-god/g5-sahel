import React, { Component } from 'react'

import {
    Container,
    Col,
    Row,
    Image,
    Button,
} from 'react-bootstrap';

// Components :
    import Layout from '../../components/Layout';

// Images & styiling :
    import JOB from '../../assets/images/Recrutement/job.png';
    import './recrutement.css';

export default class Recrutement extends Component {
    render() {
        return (
            <>    
                <div class="bg-overlay justify-elements">
                    <div class="row text-center">
                        <Col/>

                        <Col>
                            <h1 style={{fontFamily : 'PopiSemiBold'}}>Browse career resources</h1>
                        </Col>

                        <Col/>
                    </div>
                </div>

                <Layout columns={9}>
                    {this.renderSearchContainer()}
                </Layout>




              



            </>
        )
    }

    renderSearchContainer = () => {

        return (
            <>
            <div>
                <Row style={{padding : 30+"px",backgroundColor : '#F6F6F6',marginTop : -20+"px"}}>
                    
                    <Col>
                        <h6 style={styles.searchTitle}>ÉVÈNEMENTS À PARTIR DE</h6>
                        <input type="text" className="form-control no-border" placeholder="22-03-2020" />
                    </Col>
                    
                    <Col>
                        <h6 style={styles.searchTitle}>RECHERCHE</h6>
                        <input type="text" class="form-control no-border" placeholder="Mot Clé" />
                    </Col>

                    <Col>
                        <h6 style={styles.searchTitle}>RECHERCHE</h6>
                        <input type="text" class="form-control no-border" placeholder="Mot Clé" />
                    </Col>

                    <Col />
                    
                    <Col className="align-self-center">
                        <Button className="button">
                            Rechercher
                        </Button>
                    </Col>
                </Row>
            </div>
            </>
        );
    };
}

const styles = {
    searchTitle : {
        color : '#666666',
        
    },
}

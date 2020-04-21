import React, { Component } from 'react'

// Connect Redux :
    import { connect } from 'react-redux';
    import { toogleSearch } from '../../redux/actions/PostsActions';

class Search extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        let { searchStatus } = this.props;

        console.log("SHIIIT",searchStatus);
        
        return (
            <div id="myOverlay" className={searchStatus ? "overlay" : "noOverlay"}>
                <span className="closebtn" onClick={() => this.closeSearch()} title="Close Overlay">×</span>
                <div className="overlay-content">
                    <form>
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        )
    }

    closeSearch = () => {
      this.props.toogleSearch(0);
    };
}

const mapStateToProps = state => ({
    searchStatus : state.postsR.searchStatus,
})

export default connect(mapStateToProps, { toogleSearch })(Search);
import React from 'react';
import {drizzleConnect} from 'drizzle-react';
import PropTypes from "prop-types";
import getWeb3 from "@drizzle-utils/get-web3";
import getContract from "truffle-contract";
import Suggestion from "../../views/Suggestion/Suggestion";
import CardColumns from "react-bootstrap/CardColumns";

const mapStateToProps = state => ({state});

class SuggestionBoard extends React.Component{

    constructor(props, context) {
        super(props);
        this.state = {
            boardName: '',
            suggestions: []
        };
    }

    async updateBoardContractDetails() {
        const contractJSON = require('../../contracts/SuggestionBoard.json');

        const contract = getContract(contractJSON);
        const web3 = await getWeb3();
        contract.setProvider(web3.currentProvider);

        const instance = await contract.deployed();
        const name = await instance.name();
        const suggestions = await instance.allSuggestions();
        
        this.setState({
            boardName: name,
            suggestions: suggestions,
            board: instance
        });
    }

    render() {
        this.updateBoardContractDetails();
        const items = this.state.suggestions.map((item, index) => (
            <Suggestion address={item} board={this.state.board}></Suggestion>
        ));


        return(<div>
            <h2>Board Name : {this.state.boardName}</h2>
            <CardColumns>
                {items}
            </CardColumns>
        </div>)
    }

}

SuggestionBoard.contextTypes = {
    drizzle: PropTypes.object,
  };

export default drizzleConnect(SuggestionBoard, mapStateToProps);
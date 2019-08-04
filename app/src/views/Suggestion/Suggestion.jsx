import React from 'react';
import {drizzleConnect} from 'drizzle-react';
import PropTypes from "prop-types";
import getWeb3 from "@drizzle-utils/get-web3";
import getContract from "truffle-contract";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import contractJSON from "../../contracts//Suggestion.json";

const mapStateToProps = state => ({state});

class SuggestionBoard extends React.Component{

    constructor(props, context) {
        super(props);
        this.state = {
            address: props.address
        };
        //console.log(this.state.address);
        this.updateSuggestionData();
    }

    componentDidMount() {
        this.updateSuggestionData();
    }

    async updateSuggestionData() {
        //const contractJSON = require('../../contracts/Suggestion.json');

        const contract = getContract(contractJSON);
        const web3 = await getWeb3();
        contract.setProvider(web3.currentProvider);

        const instance = await contract.at(this.state.address);

        const name = await instance.name();
        const description = await instance.suggestion();
        const upVotes = await instance.upVotes();
        const downVotes = await instance.downVotes();
        const open = await instance.isOpen();
        const creator = await instance.creator();

        this.setState({
            name: name,
            description: description,
            upVotes: upVotes,
            downVotes: downVotes,
            totalVotes: (upVotes-downVotes),
            isOpen: open,
            creator: creator
        });
    }

    render() {
        this.updateSuggestionData();
        return(
            <Card className="text-center">
                <Card.Header>Suggestion</Card.Header>
                <Card.Body>
                    <Card.Title>{this.state.name}</Card.Title>
                    <Card.Text>
                        {this.state.description}
                        <footer className="blockquote-footer">
                            <cite title="address">{this.state.creator}</cite>
                        </footer>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                    2 days ago
                </Card.Footer>
            </Card>
        );
    }

}

SuggestionBoard.contextTypes = {
    drizzle: PropTypes.object,
  };

export default drizzleConnect(SuggestionBoard, mapStateToProps);
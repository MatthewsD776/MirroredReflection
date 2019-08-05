import React from 'react';
import {drizzleConnect} from 'drizzle-react';
import PropTypes from "prop-types";
import getWeb3 from "@drizzle-utils/get-web3";
import getContract from "truffle-contract";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import contractJSON from "../../contracts//Suggestion.json";
import Web3 from "web3";

const mapStateToProps = state => ({state});

class SuggestionBoard extends React.Component{

    constructor(props, context) {
        super(props);
        this.state = {
            address: props.address,
            name: '',
            description: '',
            upVotes: '',
            downVotes: '',
            totalVotes: '',
            isOpen: null,
            creator: null
        };
        //console.log(this.state.address);
        this.updateSuggestionData();
    }

    componentDidMount() {
        this.updateSuggestionData();
    }

    async updateSuggestionData() {
        const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
        const BN = web3.utils.BN;

        const contract = getContract(contractJSON);
        contract.setProvider(web3.currentProvider);

        const instance = await contract.at(this.state.address);

        const name = await instance.name();
        this.setState({
            name: name
        });

        const description = await instance.suggestion();
        const upVotes = new BN(await instance.upVotes()).toString();
        const downVotes = new BN(await instance.downVotes()).toString;
        //const totalVotes =  await upVotes.add(downVotes).toString();
        const open = await instance.isOpen();
        const creator = await instance.creator();

        this.setState({
            description: description,
            upVotes: upVotes,
            downVotes: downVotes,
            totalVotes: 'total',
            isOpen: open,
            creator: creator
        });
    }

    render() {
        this.updateSuggestionData();

        if(this.state.name === ''){
            return (
                <Card className="text-center">
                    <Card.Header>Loading</Card.Header>
                </Card>
            );
        } else if (this.state.description === ''){
            return (
                <Card className="text-center">
                    <Card.Header>Loading [{this.state.name}]</Card.Header>
                </Card>
            );
        }



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
                    {this.state.upVotes}
                </Card.Footer>
            </Card>
        );
    }

}

SuggestionBoard.contextTypes = {
    drizzle: PropTypes.object,
  };

export default drizzleConnect(SuggestionBoard, mapStateToProps);
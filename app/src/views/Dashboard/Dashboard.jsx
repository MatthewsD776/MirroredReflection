import React from "react";
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import styled from 'styled-components';

import Etheruem from "../../views/AccountDetalis/Etheruem";
import SuggestionBoard from "../SuggestionBoard/SuggestionBoard";

// Be sure to include styles at some point, probably during your bootstraping
import style from '@trendmicro/react-sidenav/dist/react-sidenav.css';

import AccountBox from "@material-ui/icons/AccountBoxOutlined";
import Suggestion from "@material-ui/icons/SpeakerNotes";

const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0 20px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 'account'
        };
    }

    render() {
        return(
            <div>
                <SideNav onSelect={(selected) => {
                    if(selected === "account"){
                        this.setState({
                            selected: 'account' 
                        });
                    } else if (selected === "allSuggestions"){
                        this.setState({
                            selected: 'allSuggestions'
                        });
                    }
                }}>
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="account">
                        <NavItem eventKey="account">
                            <NavIcon>
                                <AccountBox/>
                            </NavIcon>
                            <NavText>
                                Account
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="allSuggestions">
                            <NavIcon>
                                <Suggestion/>
                            </NavIcon>
                            <NavText>
                                All Suggestions
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                <Main>
                    {(this.state.selected === 'account') ? <Etheruem/> : <div></div>}
                    {(this.state.selected === 'allSuggestions') ? <SuggestionBoard/> : <div></div>}
                </Main>
            </div>
    )}
}

export default Dashboard;

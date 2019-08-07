import React from 'react';

import {AccountData} from "drizzle-react-components";

class Etheruem extends React.Component {

    render() {
        return(
            <div>
                <h2>Etheruem Account Details</h2>
                <div className="section">
                    <h2>Active Account</h2>
                    <AccountData accountIndex={0} units="ether" precision={3} />
                </div>
            </div>
        );
    }
}

export default Etheruem;
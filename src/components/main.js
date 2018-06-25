import React, { Component } from 'react';
import '../style/content.scss';
import '../style/background.scss';
import '../style/main.scss';

export default class Main extends Component {
    render() {
        return(
        <div>
            <div className="container">
                <h1>Detective Comics</h1>
                <p>"You will give the people of Earth an ideal to strive towards."  -Jor-EL
                </p>
            </div>
            <div>
                <img src="assets/leagueOne.jpg" className="main_image"/>
            </div>
        </div>
        );
    }
}
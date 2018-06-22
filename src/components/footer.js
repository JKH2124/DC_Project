import React, { Component } from 'react';
export default class Footer extends Component {
    render() {
        return (
            <div className='app-wrapper-footer'>
                <span className='advertising_left'>
                    <a href='https://marvel.com/avengers'>For Best Content... Click Here!</a>
                </span>
                <span className='fun_times'>
                    <a href='https://www.imdb.com/title/tt1133985/'>Just Don't Go There...</a>
                </span>

                <span className='privacy_right'>
                    <a href='https://policies.warnerbros.com/privacy/en-us/html/privacy_en-us_1.0.0.html'>Privacy</a>
                </span>
                <span className='terms_right'>
                    <a href='https://policies.warnerbros.com/terms/en-us/html/terms_en-us_1.0.0.html'>Terms</a>
                </span>
                <span className='comics_right'>
                    <a href='https://www.dccomics.com/comics'>Comics</a>
                </span>
            </div>
        );
    }
}
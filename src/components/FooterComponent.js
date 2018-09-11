import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-auto">
                            phone: +44 7508 616 909 | mail: <a href="mailto:dkorolczuk86@gmail.com">
                                dkorolczuk86@gmail.com</a>
                            
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2018 Dariusz Korolczuk</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
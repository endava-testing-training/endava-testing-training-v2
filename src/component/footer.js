import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EndavaLogo from '../images/logo-endava.png';

const EndavaFooter = () => (
    <section className="footer clearfix container" expand="lg">
    <hr />
        <div className="row">
            <div className="offset-col-1 col-lg-12 col-md-12 col-sm-12 col-xs-12 inner">
                <div className="float-right mt-2">
                        <a href="https://www.facebook.com/endava" className="mr-1" rel="me" itemProp="sameAs" aria-label="visit us on " target="_blank" title="facebook"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                        <a href="https://twitter.com/endava" rel="me" className="mr-1" itemProp="sameAs" aria-label="visit us on " target="_blank" title="twitter"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                        <a href="https://www.linkedin.com/company/endava" className="mr-1" rel="me" itemProp="sameAs" aria-label="visit us on " target="_blank" title="linkedin"> <FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                        <a href="https://www.instagram.com/endava/" rel="me" itemProp="sameAs" aria-label="visit us on " target="_blank" title="instagram"> <FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                </div>
        
                <div className="pull-left float-left mr-3">
                    <a href="/en" title=""></a>
                    <img src={EndavaLogo} alt="React Bootstrap logo"  alt="Endava" width="131" height="44"/>
                </div>
                <p className="mt-4">Copyright Endava 2019. All rights reserved. Rosario, Argentina.</p>
            </div>
        </div>
    </section>

);

export default EndavaFooter;

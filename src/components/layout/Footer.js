import React from 'react';

function Footer(props) {
    return (
        <>
            {/* <!-- Footer --> */}
            <footer className="bg-white iq-footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* <ul className="list-inline mb-0">
                                <li className="list-inline-item"><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li className="list-inline-item"><a href="terms-of-service.html">Terms of Use</a></li>
                            </ul> */}
                        </div>
                        <div className="col-lg-6 text-right">
                            &copy; 2024, All Rights Reserved. Powered by <a href="https://virtuzo.in/">Virtuzo</a> 
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- Footer END --> */}
        </>
    )
}

export default Footer;

// src/components/Footer.jsx
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className='bg-slate-600 mt-10'>
        <MDBFooter bgColor="dark" className="text-center text-lg-start text-white">
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase font-poppins mt-20">Crypto.io</h5>
            <p className=''>
              Your company information and any other relevant description go here.
            </p>
          </MDBCol>
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
                style={{ fontSize: '30px' }}
              >
                <Facebook style={{ color: '#1877f2' }} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
                style={{ fontSize: '30px' }}
              >
                <Instagram style={{ color: '#e4405f' }} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                style={{ fontSize: '30px' }}
              >
                <Twitter style={{ color: '#1da1f2' }} />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="text-center p-3">
        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
      </div>
    </MDBFooter>
    </div>
    
  );
};

export default Footer;

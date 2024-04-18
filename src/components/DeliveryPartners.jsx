import styled from 'styled-components';
import amana from '../assets/ecart.jpeg'
import ozone from '../assets/bluebird.jpeg'



const Logo = styled.img`
  width: 150px;
`;

const DeliveryPartners = () => {
  return (
    <div className='container text-center my-5'>
      <h2 className='mb-5'>Delivery Partners</h2>
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <Logo src={amana} alt='Ekart Logo' />
        </div>
        <div className='col-md-6 col-sm-12'>
          <Logo src={ozone} alt='Blubird Logo' />
        </div>
      </div>
    </div>
  );
};

export default DeliveryPartners;

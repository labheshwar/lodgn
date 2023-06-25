import HospitalDetails from './HospitalDetails';

const RequestDetails = () => {
  return (
    <div className='request-details-container'>
      <HospitalDetails />
      <div className='processing-request'>
        <button className='active'>Recieved</button>
        <button>Negotiating</button>
        <button>Completed</button>
      </div>
    </div>
  );
};

export default RequestDetails;

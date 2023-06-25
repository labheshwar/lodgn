import HospitalDetails from './HospitalDetails';
import DetailCard from './DetailCard';

const RequestContainer = () => {
  return (
    <div className='request-container'>
      <HospitalDetails />
      <button className='completed-button'>Completed</button>
      <div className='detail-card-container'>
        <DetailCard badge='Rare Find' />
        <DetailCard />
        <DetailCard />
      </div>
    </div>
  );
};

export default RequestContainer;

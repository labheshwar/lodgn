import RequestContainer from './RequestContainer';
import RequestDetails from './RequestDetails';

const CurrentRequests = () => {
  return (
    <main className='current-requests'>
      <p>You currently have 3 requests</p>
      <RequestDetails />
      <RequestContainer />
    </main>
  );
};

export default CurrentRequests;

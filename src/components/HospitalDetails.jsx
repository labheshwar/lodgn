const HospitalDetails = () => {
  return (
    <div className='details'>
      <span className='hospital-details'>
        <h2 className='detail-header'>St Judes Hospital</h2>
        <p className='extra-details'>Sarsota, FL 33178</p>
      </span>
      <span className='date-details'>
        <span className='from'>
          <h2 className='detail-header center'>10</h2>
          <p className='extra-details center'>October</p>
        </span>
        <h2 className='detail-header'>-</h2>
        <span className='to'>
          <h2 className='detail-header center'>17</h2>
          <p className='extra-details center'>December</p>
        </span>
      </span>
      <span className='room-details'>
        <h2 className='detail-header'>20 Rooms</h2>
        <p className='extra-details'>10 Singles, 10 doubles</p>
      </span>
    </div>
  );
};

export default HospitalDetails;

import HolidayInnLogo from '../assets/HolidayInnLogo.svg';

// eslint-disable-next-line react/prop-types
const DetailCard = ({ badge }) => {
  return (
    <div className='detail-card'>
      {badge && <div className='badge'>{badge}</div>}
      <div className='logo-text'>
        <img src={HolidayInnLogo} alt='Logo' />
        <p>Holiday Inn</p>
      </div>
      <div className='card-details'>
        <p>1.5 miles away from joblocation</p>
        <div className='book-now-info'>
          <span>
            <p>Singles: $120</p>
            <p>Doubles: $145</p>
          </span>
          <button className='book-now-button'>Book now</button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;

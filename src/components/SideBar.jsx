import { useState } from 'react';

const SideBar = () => {
  const [activeNavItem, setActiveNavItem] = useState(0); // Initialize activeNavItem state to the index of the first item

  const handleNavItemClick = (index) => {
    setActiveNavItem(index); // Update activeNavItem state with the index of the clicked item
  };

  return (
    <aside className='sidebar'>
      <div className='nav-links'>
        <h2>Lodgn</h2>
        <ul>
          <li
            className={activeNavItem === 0 ? 'nav-active' : ''}
            onClick={() => handleNavItemClick(0)}
          >
            Current requests
          </li>
          <li
            className={activeNavItem === 1 ? 'nav-active' : ''}
            onClick={() => handleNavItemClick(1)}
          >
            Ongoing stays
          </li>
          <li
            className={activeNavItem === 2 ? 'nav-active' : ''}
            onClick={() => handleNavItemClick(2)}
          >
            Previous stays
          </li>
          <li
            className={activeNavItem === 3 ? 'nav-active' : ''}
            onClick={() => handleNavItemClick(3)}
          >
            Reports
          </li>
        </ul>
      </div>
      <div className='logout-container'>
        <button>Log-Out</button>
        <div className='help-desk-container'>
          <span>Help-Desk:</span>786-874 9988<span></span>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;

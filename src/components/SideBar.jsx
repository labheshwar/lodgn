import { useState, useEffect } from 'react';

/**
 * Sidebar component
 */
const SideBar = () => {
  const [activeNavItem, setActiveNavItem] = useState(0); // Initialize activeNavItem state to the index of the first item
  const [showSideBar, setShowSideBar] = useState(true); // Initialize showSideBar state to true

  /**
   * Handle click event for the navigation items
   * @param {number} index - Index of the clicked item
   */
  const handleNavItemClick = (index) => {
    setActiveNavItem(index); // Update activeNavItem state with the index of the clicked item
  };

  useEffect(() => {
    /**
     * Handle resize event to update showSideBar state based on window width
     */
    const handleResize = () => {
      setShowSideBar(window.innerWidth > 540); // Update showSideBar based on the window width
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <i
        className='fa-sharp fa-solid fa-bars hamburger-icon'
        onClick={() => setShowSideBar(!showSideBar)}
      ></i>
      {showSideBar && (
        <aside className={`sidebar ${showSideBar ? 'open' : ''}`}>
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
      )}
    </>
  );
};

export default SideBar;

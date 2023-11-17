import React from 'react';

function TabTitle({ id, title, activeTab, setActiveTab }) {
  const handTabSwitch = () => {
    setActiveTab(id);
  };

  return (
    <main
      onClick={handTabSwitch}
      className={activeTab === id ? 'tabActive' : 'tabNotActive'}
    >
      <ul className='tabTitle'>
        <li className='d-flex flex-row align-items-center '>
          <h4>{title}</h4>
        </li>
      </ul>
    </main>
  );
}

export default TabTitle;

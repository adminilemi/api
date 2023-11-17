import React, { useState } from 'react';
import TabContents from './TabContents';
import TabTitle from './TabTitle';
import './TabStyles.scss';
import ForTenants from '../ForTenants';
import ForLandloards from '../ForLandloards';

const TabsData = {
  TabTitle: [
    { id: '1', title: 'For Tenants' },
    { id: '2', title: 'For Landlords' },
  ],

  TabContents: [
    { id: '1', comps: <ForTenants /> },
    { id: '2', comps: <ForLandloards /> },
  ],
};

function Tabs() {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <main className='tabsContainer'>
      <section className='tabTitleContainer d-flex  col-12 col-lg-10 align-items-center'>
        {TabsData.TabTitle.map((tab, idx) => (
          <section key={idx}>
            <TabTitle
              title={tab.title}
              id={tab.id}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </section>
        ))}
      </section>
      <section className='tabContents d-flex flex-column'>
        {TabsData.TabContents.map((tab) => (
          <section key={tab.id} className='tabContents'>
            <TabContents id={tab.id} activeTab={activeTab} comps={tab.comps} />
          </section>
        ))}
      </section>
    </main>
  );
}

export default Tabs;

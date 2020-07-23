import React, { useState } from 'react'

export default function WithStateHook() {
 
  const [currentTab, setCurrentTab] = useState('tab1');
  const tabList = [
    {
      name: 'tab1',
      label: 'Tab 1',
      content: (
        <div className="tab-content">
          <h2>Tab content 1</h2>
          <p>Here is your tab content. You can separate this as a component.</p>
          <p>Lorem ipsum dolor sit amet ...</p>
        </div>
      )
    },
    {
      name: 'tab2',
      label: 'Tab 2',
      content: (
        <div className="tab-content">
          <h2>Tab content 2</h2>
          <p>Here is your tab content. You can separate this as a component.</p>
          <p>Lorem ipsum dolor sit amet ...</p>
        </div>
      )
    },
    {
      name: 'tab3',
      label: 'Tab 3',
      content: (
        <div className="tab-content">
          <h2>Tab content 3</h2>
          <p>Here is your tab content. You can separate this as a component.</p>
          <p>Lorem ipsum dolor sit amet ...</p>
        </div>
      )
    }
  ];
  
  return (
    <div className="simple-tabs">

      <h1>With State Hook</h1>
      
      <div className="tabs">
        {
          tabList.map((tab, i) => (
            <button 
              key={i}
              onClick={() => setCurrentTab(tab.name)} 
              className={(tab.name === currentTab) ? 'active' : ''}>
                {tab.label}
            </button>
          ))
        }
      </div>
      
      {
        tabList.map((tab, i) => {
          if(tab.name === currentTab) {
            return <div key={i}>{tab.content}</div>;
          } else {
            return null;
          }
        })
      }
    </div>
  )
}

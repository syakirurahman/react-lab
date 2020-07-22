import React, { useState } from 'react'

export default function WithStateHooks() {
 
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
  
  const handleTab = (event, name) => {
    event.preventDefault();
    setCurrentTab(name);
  };

  return (
    <div className="simple-tabs">

      <h1>With State Hooks</h1>
      
      <div className="tabs">
        {
          tabList.map((tab) => (
            // eslint-disable-next-line
            <a href="#" 
              onClick={(event) => handleTab(event, tab.name)} 
              className={(tab.name === currentTab) ? 'active' : ''}>
                {tab.label}
            </a>
          ))
        }
      </div>
      
      {
        tabList.map((tab) => {
          if(tab.name === currentTab) {
            return tab.content;
          } else {
            return null;
          }
        })
      }
    </div>
  )
}

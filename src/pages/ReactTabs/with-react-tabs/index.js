import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function WithReactTabs() {
  return (
    <div className="with-react-tabs">
      <h1>With react-tabs</h1>

      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>

        <TabPanel>
          <div className="tab-content">
            <h2>Tab content 1</h2>
            <p>Here is your tab content. You can separate this as a component.</p>
            <p>Lorem ipsum dolor sit amet ...</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content">
            <h2>Tab content 2</h2>
            <p>Here is your tab content. You can separate this as a component.</p>
            <p>Lorem ipsum dolor sit amet ...</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content">
            <h2>Tab content 3</h2>
            <p>Here is your tab content. You can separate this as a component.</p>
            <p>Lorem ipsum dolor sit amet ...</p>
          </div>
        </TabPanel>
      </Tabs>

    </div>
    
  )
}

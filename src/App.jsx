import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Section from './components/Section/Section';
import Container from './components/Container/Container';
import Todos from './tabs/Todos';
import Photos from './tabs/Photos';
import { useEffect, useState } from 'react';

export const App = () => {
  const [tabIndex, setTabIndex] = useState(() => {
    const saved = localStorage.getItem('tabIndex');
    return saved !== null ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('tabIndex', tabIndex);
  }, [tabIndex]);
  return (
    <Section>
      <Container>
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <TabList>
            <Tab>Todos</Tab>
            <Tab>Photos</Tab>
          </TabList>

          <TabPanel>
            <Todos />
          </TabPanel>
          <TabPanel>
            <Photos />
          </TabPanel>
        </Tabs>
      </Container>
    </Section>
  );
};

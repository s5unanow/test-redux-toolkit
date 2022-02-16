import { Courses } from 'components';
import React from 'react';
import { AppProvider } from 'app/app-provider/AppProvider';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Courses />
    </AppProvider>
  );
};

export default App;

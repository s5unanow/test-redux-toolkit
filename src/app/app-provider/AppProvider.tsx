import { Provider } from 'react-redux';
import { store } from 'store';

export const AppProvider: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

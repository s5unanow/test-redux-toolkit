import { Modal } from 'elements/modal/Modal';

export const ErrorScreen: React.FC = ({ children }) => (
  <Modal variant="alert">{children}</Modal>
);

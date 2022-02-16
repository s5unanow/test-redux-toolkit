import { modalPresets } from './modal.presets';
import { ModalTypes } from './modal.types';

export const Modal: React.FC<ModalTypes> = ({
  children,
  variant = 'processing',
}) => {
  const preset = modalPresets[variant];

  return (
    <div className={`fixed top-0 left-0 h-screen w-screen flex ${preset}`}>
      <div className="m-auto">{children}</div>
    </div>
  );
};

import type { ModalVariants } from './modal.types';

export const modalPresets: Record<ModalVariants, string> = {
  processing: 'bg-sky-500/100',
  alert: 'bg-red-200/100',
}
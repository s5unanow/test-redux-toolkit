import { useSelector as useReduxSelector } from 'react-redux';

import type { AppUseSelector } from 'ts';

export const useSelector: AppUseSelector = useReduxSelector;

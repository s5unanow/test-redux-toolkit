import { useDispatch as useReduxDispatch } from 'react-redux';

import type { AppDispatch } from 'ts';

export const useDispatch = () => useReduxDispatch<AppDispatch>();

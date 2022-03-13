import React, { createContext, useContext, useState, ReactElement } from 'react';

export interface RootContextMeta {
  version: number;
}
// eslint-disable-next-line
const INIT: any = () => {
  throw new Error('Forgot to wrap component in `RootContextProvider`');
};

export const RootContext = createContext(INIT);

const defaultMeta = {
  version: 1,
};

interface RootContextProviderProps {
  children: React.ReactNode;
}

const RootContextProvider = ({ children }: RootContextProviderProps): ReactElement => {
  const [meta, setMeta] = useState<RootContextMeta>(defaultMeta);
  // eslint-disable-next-line
  const value = { ...meta, setMeta } as any;
  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
};
export const RootContextConsumer = RootContext.Consumer;
export default RootContextProvider;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useUpdateVersion(): any {
  const { setMeta, version } = useContext(RootContext);
  return React.useCallback(() => {
    setMeta({ version: version + 1 });
  }, [version]);
}

export const useRootContext = (): RootContextMeta => {
  return useContext(RootContext);
};

import { createContext, useContext } from "react";

export class RootStore {
  // loginStore: LoginStore;

  constructor() {
    // this.loginStore = new LoginStore();
  }

  teardown = async () => {};
}

export const RootStoreContext = createContext<RootStore | undefined>(undefined);

export const useRootStore = () => useContext(RootStoreContext)!;

export const useStore = <T extends keyof RootStore>(name: T): RootStore[T] =>
  useRootStore()[name];

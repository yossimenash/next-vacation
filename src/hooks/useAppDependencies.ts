import d from "debug";
import { useEffect, useState } from "react";
import { RootStore } from "../store";

const NAMESPACE = "app-dependencies";
const debug = d(NAMESPACE);

export interface UseAppDependencies {
  store: RootStore;
}

const createDependencies = async (): Promise<UseAppDependencies> => {
  debug("Creating app dependencies");

  const store = new RootStore();

  debug("All app dependencies created");
  return {
    store,
  };
};

export const useAppDependencies = () => {
  const [dependencies, setDependencies] = useState<UseAppDependencies | undefined>(
    undefined
  );

  useEffect(() => {
    (async () => {
      const built = await createDependencies();
      setDependencies(built);

      return () => {
        debug("Tearing down dependencies");
        built.store.teardown();
      };
    })();
  }, []);

  return dependencies;
};

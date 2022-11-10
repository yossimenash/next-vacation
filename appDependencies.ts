import d from 'debug';
import {useEffect, useState} from 'react';
import {RootStore} from "./src/store";

const NAMESPACE = 'app-dependencies';
const debug = d(NAMESPACE);

export interface AppDependencies {
    store: RootStore;
}

const createDependencies = async (): Promise<AppDependencies> => {
    debug('Creating app dependencies');

    const store = new RootStore();

    debug('All app dependencies created');
    return {
        store,
    };
};

export const useAppDependencies = () => {
    const [dependencies, setDependencies] = useState<AppDependencies | undefined>(undefined);

    useEffect(() => {
        (async () => {
            const built = await createDependencies();
            setDependencies(built);

            return () => {
                debug('Tearing down dependencies');
                built.store.teardown();
            };
        })();
    }, []);

    return dependencies;
};

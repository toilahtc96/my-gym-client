import { reactive, provide, inject } from 'vue';

const StoreSymbol = Symbol('store');

export const createStore = () => {
    const state = reactive({
        // Your state here
    });

    const mutations = {
        // Your mutations here
    };

    const actions = {
        // Your actions here
    };

    const store = {
        state,
        mutations,
        actions
    };

    provide(StoreSymbol, store);
};

export const useStore = () => {
    const store = inject(StoreSymbol);
    if (!store) {
        throw new Error('Did not inject store');
    }
    return store;
};
import {ON_START_ADD_ITEM, ON_RECEIVE_BARCODE, ON_ADD_ITEM} from '../redux';

const DEFAULT_STATE = {
    isCameraOpen: false,
    isFillingDetails: false,
    detailsForProduct: {
        image: 'https://i5.walmartimages.com/asr/d4122c7b-d910-4f30-a19c-10ab6a31f765_1.e6ab485cdc062f2390b1bfaf1b2f6023.jpeg',
        unitName: 'packages',
        name: 'PC Chicken Breast (5lb)',
        price: '$5.99',
        wasteage: 0
    },
    ingredients: []
};

export default () => (state = DEFAULT_STATE, action) => {
    if (action.type === ON_START_ADD_ITEM) {
        return {
            ...state,
            isCameraOpen: true
        };
    }

    if (action.type === ON_RECEIVE_BARCODE) {
        return {
            ...state,
            isFillingDetails: true,
            isCameraOpen: false
        };
    }

    if (action.type === ON_ADD_ITEM) {
        return {
            ...state,
            isFillingDetails: false,
            ingredients: state.ingredients.concat({
                ...state.detailsForProduct,
                ...action.payload
            })
        };
    }

    return state;
};

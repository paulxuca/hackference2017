export const ON_START_ADD_ITEM = 'ON_START_ADD_ITEM';
export const ON_RECEIVE_BARCODE = 'ON_RECEIVE_BAR_CODE';
export const ON_ADD_ITEM = 'ON_ADD_ITEM';

export const onReceiveBarCode = () => ({type: ON_RECEIVE_BARCODE});
export const onStartAddItem = () => ({type: ON_START_ADD_ITEM});
export const onAddItem = item => ({type: ON_ADD_ITEM, payload: item});

import { UPDATE_COLLECTIONS } from '../constants'

export const updateCollection = (collectionsMap) => ({
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap
})  
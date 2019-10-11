// actions creator 1 - javascript function returning an action object
export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
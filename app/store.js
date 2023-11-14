import { configureStore } from '@reduxjs/toolkit'
import formulaireSlice from '../features/formulaire/formulaireSlice'
import dataSlice from '../features/formulaire/dataSlice'


export default configureStore({
  reducer: {
    formulaire: formulaireSlice,
    data: dataSlice,
  }
})
import { createSlice } from '@reduxjs/toolkit'

export const navbarToggle = createSlice({
  name: 'navbar',
  initialState: {
    value: false,
    user:{username:"",email:""},
    projectData:{
      fileURL:"",
      documentId:"",
      useCase:{title:"",component:"",image:""},
      Instruction:{
        labels:[],
        summary:"",
        workflow:"",},
      BatchType:"",
    },
    element:{},
    pageNum:1
  },
  reducers: {
    setElement: (state,action) =>{
      state.element = action.payload
    },
    toggle: state => {
    
      state.value = !state.value;
    },
    addDocument:(state,action) =>{
      state.projectData.documentId  = action.payload
    },
    pageValue:(state,action) =>{
      console.log(action.payload)
      state.pageNum = action.payload
    },
    userData: (state,action)=>{
      state.user = action.payload
    },
    addDataUpload: (state,action) =>{
      state.projectData.fileURL = action.payload
    },
    addInstruction: (state,action) =>{
      state.projectData.Instruction.labels = action.payload
    },
    addUseCase: (state,action) =>{
      console.log(action.payload)
      state.projectData.useCase = action.payload
    },
    addBatchType: (state,action) =>{
      state.projectData.BatchType = action.payload
    },
    decreasePageValue:(state)=>{
      state.pageNum -= 1
    },
    increasePageValue: (state)=>{

      state.pageNum += 1
    },
    summaryValue :(state,action)=>{
      state.projectData.Instruction.summary = action.payload
    },
    workflow:(state,action)=>{
      state.projectData.Instruction.workflow = action.payload
    }
    
    
  }
})
export const {addDocument, setElement,toggle,increasePageValue,decreasePageValue,userData, pageValue,addBatchType,addDataUpload,addInstruction,addUseCase,summaryValue,workflow} = navbarToggle.actions
export default navbarToggle.reducer
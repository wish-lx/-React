const defaultState = {
   foused: false
    
}
export default (state = defaultState, action)=>{
    if(action.type === 'input-foucs') {
        return {
            foused: true 
        }
    }
    if(action.type === 'input-blur') {
        return {
            foused: false 
        }
    }
    return state
}
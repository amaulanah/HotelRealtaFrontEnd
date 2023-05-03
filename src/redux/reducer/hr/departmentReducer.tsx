import * as ActionType from '../../constant/hr/departmentConstant'

const init_state = {
    departments: []
}

const departmentReducer = (state = init_state, action: any) => {
    switch (action.type) {
        case ActionType.GET_DEPT_REQUEST:
            return { ...state }
        case ActionType.GET_DEPT_SUCCESS:
            return GetDept(state, action)
        case ActionType.ADD_DEPT_REQUEST:
            return {...state}
        case ActionType.ADD_DEPT_SUCCESS:
            return AddDept(state,action)
        case ActionType.FIND_DEPT_REQUEST:
            return {...state}
        case ActionType.FIND_DEPT_SUCCESS:
            return FindDept(state,action)
        case ActionType.EDIT_DEPT_REQUEST:
            return {...state}
        case ActionType.EDIT_DEPT_SUCCESS:
            return EditDept(state,action)
        case ActionType.DELETE_DEPT_REQUEST:
            return {...state}
        case ActionType.DELETE_DEPT_SUCCESS:
            return DeleteDept(state,action)

        default:
            return { ...state };
    }
}

const GetDept = (state: any, action: any) => {
    return {
        ...state,
        departments: action.payload
    }
}

const AddDept = (state:any, action:any) => {
    const {payload} = action
    return {
        ...state,
        departments:[...state.departments,payload]
    }
}

const FindDept = (state: any, action: any) => {
    const { payload } = action
    return {
        ...state,
        departments: payload //kalau gagal, tambah action.payload
    }
}

const EditDept = (state:any, action:any) => {
    const {payload} = action 
    return {
        ...state, 
        departments:[...state.departments,payload] //kalau gagal, buat hanya state saja
    }
}

const DeleteDept = (state:any, action:any) => {
    const { payload } = action
    const updatedDepartments = state.departments.filter((departments: { id: number }) => departments.id !== payload.id)
    return {
        ...state,
        departments: updatedDepartments //kalau gagal, ganti jadi: departments:[...state.departments,payload]
    }
}

export default departmentReducer
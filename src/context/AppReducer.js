/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.filter(employee => employee.id !== action.payload)
            };
        case 'ADD_EMPLOYEES':
            return {
                ...state,
                employees: [...state.employees, action.payload]
            };
        case 'EDIT_EMPLOYEE':
            const updatedEmployee = action.payload;
            const updateEmployees = state.employees.map(employee => {
                if(employee.id === updatedEmployee.id) {
                    return updatedEmployee;
                }
                return employee;
                
            });
            return {
                ...state,
                employees: updateEmployees
            };
        default: return state;
    }
}
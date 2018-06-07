const initialState = {
    list: [
        {
            id: 1,
            name: 'Walter White',
            email: 'wwhite@btech.net',
            phone: '555-555-1111'
        },
        {
            id: 2,
            name: 'Scooby Doo',
            email: 'sdoo@btech.net',
            phone: '555-555-2222'
        },
        {
            id: 3,
            name: 'Dwight Schrute',
            email: 'dschrute@btech.net',
            phone: '555-555-3333'
        },
        {
            id: 4,
            name: 'Sean Murphy',
            email: 'smurphy@btech.net',
            phone: '555-555-4444'
        },
        {
            id: 5,
            name: 'Jeff Probst',
            email: 'jprobst@btech.net',
            phone: '555-555-5555'
        },
        {
            id: 6,
            name: 'Pam Halpert',
            email: 'phalpert@btech.net',
            phone: '555-555-6666'
        },
        {
            id: 7,
            name: 'Zack Morris',
            email: 'zmorris@btech.net',
            phone: '555-555-7777'
        },
        {
            id: 8,
            name: 'Seth Cohen',
            email: 'scohen@btech.net',
            phone: '555-555-8888'
        },
    ],
    name: '',
    email: '',
    phone: '',
    redirectTo: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_LIST':
        const listItem = state.list.filter(item => item.id === parseInt(action.id, 10));
        return {
            ...state,
            name: listItem[0] ? listItem[0].name: '',
            email: listItem[0] ? listItem[0].email: '',
            phone: listItem[0] ? listItem[0].phone: '',
         }

        case 'CAPTURE_INPUT':
            return{
                ...state,
                [action.payload.name]: action.payload.value
            }
        
        case 'UPDATE':
            const updatedList = state.list.map(item => {
                if (item.id === parseInt(action.id, 10)) {
                    item.name = state.name;
                    item.email = state.email;
                    item.phone = state.phone;
                    
                }
                return item;
            });
            return{
                ...state,
                list: updatedList
            }

        case 'DELETE':
            const newList = state.list.filter(item => item.id !== parseInt(action.id, 10));
            return{
                ...state,
                list: newList,
                name: newList[0] ? newList[0].name : '',
                email: newList[0] ? newList[0].email : '',
                phone: newList[0] ? newList[0].phone : '',
                redirectTo: newList.length > 0 ? '/${newList[0].id}' : '/1'
            }

        case 'ADD':
            let id;
            state.list.length > 0 ?  id = state.list[state.list.length - 1].id + 1 : id = 1;
            const newToDo = {id, name: state.name, email: state.email, phone: state.phone}
            return{
                ...state,
                list: state.list.concat(newToDo)
            }

        default:
            return state;
        

       
            }
    
}

export default reducer;
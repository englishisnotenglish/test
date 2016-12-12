export default ((value = 0, action)=>{
    switch (action){
        case 'INCREMENT':
            return ++value;
            break;
        case 'DECREMENT':
            return --value;
            break;
        default: return value;
    }
});
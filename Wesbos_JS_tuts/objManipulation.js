function changeObj(obj,operation,prop,newValue){
    switch(operation){
            case 'delete':
                delete obj[prop];
                break;
            case 'edit':
                if(obj[prop]){
                    obj[prop] = newValue;
                } 
        }
        return obj;
}
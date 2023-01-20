const validation = (userData) => {
    
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    let errors = {};
    if(!regexEmail.test(userData.username)){
        errors.username = "El email es invalido"
    }
    if(!userData.username){
        errors.username = "Este campo no puede estar vacio";
    }
    if(userData.username.length > 35){
        errors.username = "El email no puede superar los 35 caracteres"
    }
    if(!userData.password.match(/\d/)){
        errors.password = "La contraseña debe contener al menos un número"
    }
    if(userData.password.length < 6 || userData.password > 10 ){
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres"
    }
    return errors
}

export default validation

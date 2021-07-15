import React from "react";


type RequiredFieldType = {
    value: ''

}

 export const requiredField = (value:RequiredFieldType)  => {
    if (value) return undefined;
    return 'Field is required'

}

export const maxLengthCreater = (maxLength) => (value:RequiredFieldType)  => {
    if (value.length > maxLength) return 'Max lenght is ${maxLength} symbols';
    return undefined

}
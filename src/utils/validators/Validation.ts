import React from "react";


type RequiredFieldType = {
    value: ''

}

 export const requiredField = (value:RequiredFieldType)  => {
    if (value) return undefined;
    return 'Field is required'

}

export const maxLengthCreater = (maxLength: number) => (value:RequiredFieldType)  => {
    if (value.value.length > maxLength) return 'Max lenght is ${maxLength} symbols';
    return undefined

}
import { AbstractControl, ValidationErrors } from "@angular/forms";

export function alphabetValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    return (value && !/^[a-zA-Z]+$/.test(value)) ? { alphabet: true } : null;
}

export function noSpaceValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    return (value && /\s/.test(value)) ? { noSpaces: true } : null;
}

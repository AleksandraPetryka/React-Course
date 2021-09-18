
export const FORM_ERROR_ENUM = {
  AGE_NEGATIVE: 'AGE_NEGATIVE',
  NAME_EMPTY: 'NAME_EMPTY',
  AGE_EMPTY: 'AGE_EMPTY'
}

export const validationContent = {
  [FORM_ERROR_ENUM.AGE_EMPTY]: 'Please enter age',
  [FORM_ERROR_ENUM.NAME_EMPTY]: 'Please enter name.',
  [FORM_ERROR_ENUM.AGE_NEGATIVE]: 'Age cannot be lower than 1.'
}
export * from '../../utils'
import { UnknownObject } from 'types'

export const removeEmptyFields = (fields: unknown): UnknownObject => {
  const newObj = {}

  Object.keys(fields).forEach((prop) => {
    if (fields[prop]) {
      newObj[prop] = fields[prop]
    }
  })

  return newObj
}

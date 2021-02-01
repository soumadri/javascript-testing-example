let scope = {}

const addObject = (name, object) => {
  scope[name] = object
}

const getObject = (name) => {
  return scope[name]
}

export default { addObject, getObject }
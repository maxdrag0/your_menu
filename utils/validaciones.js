const validId = (valor) => {
  return valor>0;
};

const validName = (name) => {
  return name != null;
}

const validPrice = (valor) => {
  return valor>0;
};

const validDescription = (description) => {
  return description != null;
}

export default { validId, validName, validPrice, validDescription };

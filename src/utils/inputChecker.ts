const defaultEmailExpression =
  /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
const defaultPasswordExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const inputIsValid = {
  name: (value: string) => {
    if (value.length < 2) {
      return false;
    }
    return true;
  },
  email: (value: string) => {
    if (defaultEmailExpression.test(value)) {
      return true;
    }
    return false;
  },
  password: (value: string) => {
    if (defaultPasswordExpression.test(value)) {
      return true;
    }
    return false;
  },
};

const getInvalidInputs = ({
  name,
  email,
  password,
}: {
  name?: string;
  email?: string;
  password?: string;
}) => {
  const invalidInputs: string[] = [];
  if (name !== undefined && !inputIsValid.name(name)) {
    invalidInputs.push('nome');
  }
  if (email !== undefined && !inputIsValid.email(email)) {
    invalidInputs.push('e-mail');
  }
  if (password !== undefined && !inputIsValid.password(password)) {
    invalidInputs.push('senha');
  }
  return invalidInputs;
};

type UserLoginInformation = {
  name?: string;
  email?: string;
  password?: string;
};

export type InvalidInputsData = {
  string: string;
  amount: number;
  exists: boolean;
};

export const handleInvalidInputs = (info: UserLoginInformation) => {
  let invalidFieldsString = '';
  let invalidInputsExist = false;
  let amountOfInvalidInputs = 0;

  const invalidInputsList = getInvalidInputs({ ...info });
  if (invalidInputsList.length === 0) {
    invalidInputsExist = false;
  } else {
    invalidFieldsString = invalidInputsList.join(', ');
    invalidInputsExist = true;
    amountOfInvalidInputs = invalidInputsList.length;
  }

  const data: InvalidInputsData = {
    string: invalidFieldsString,
    amount: amountOfInvalidInputs,
    exists: invalidInputsExist,
  };

  return data;
};

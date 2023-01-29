export const InvalidInputsMessage = ({
  invalidInputsExist,
  amountOfInvalidInputs,
  invalidFieldsString,
}: {
  invalidInputsExist: boolean;
  amountOfInvalidInputs: number;
  invalidFieldsString: string;
}) => {
  return (
    <div>
      {invalidInputsExist && (
        <p className='p-medium' style={{ color: 'var(--color-error)' }}>
          {amountOfInvalidInputs === 1 &&
            `O campo ${invalidFieldsString} está inválido`}
          {amountOfInvalidInputs > 1 &&
            `Os campos ${invalidFieldsString} estão inválidos`}
        </p>
      )}
    </div>
  );
};

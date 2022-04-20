import styled from 'styled-components/macro';

type FormGroupProps = {
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
};

const FormGroup = styled.div<FormGroupProps>``;
FormGroup.defaultProps = {
  role: 'group',
};

export { FormGroup, type FormGroupProps };

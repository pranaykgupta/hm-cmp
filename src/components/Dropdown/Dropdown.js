import React from 'react';

import {
    DropdownWrapper,
    StyledSelect,
    StyledOption,
    StyledButton,
  } from "./styles.js";

export function Dropdown(props) {
  return (
    <DropdownWrapper action={props.action}>
      <StyledSelect id="services" name="services">
        {props.children}
      </StyledSelect>
      <StyledButton type="submit" value={props.buttonText} />
    </DropdownWrapper>
  );
}

export function Option(props) {
  return (
    <StyledOption selected={props.selected}>
      {props.value}
    </StyledOption>
  );
}

import styled from "styled-components";

export const StyledDropdown = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  list-style: none;
  background: #ffffff;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  border-radius: 10px;
  margin-top: 1.6rem;

  li:not(:last-child) {
    border-bottom: 1px solid #e2e3ea;
  }
`;

export const StyledDropdownItem = styled.li`
  width: 100%;
  height: 4.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #647196;
  padding: 0 2.4rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #ad1fea;
  }
`;

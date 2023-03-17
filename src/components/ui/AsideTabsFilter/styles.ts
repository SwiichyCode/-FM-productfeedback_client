import styled from "styled-components";

export const AsideTabsFilterWrapper = styled.div`
  width: 100%;
  height: 16.6rem;
  padding: 2.4rem;
  background-color: var(--white);
  border-radius: var(--rounded-2xl);

  ul {
    max-width: 18.1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
`;

export const Tab = styled.li<{ active: boolean }>`
  font-weight: var(--font-semibold);
  font-size: var(--text-xxs);
  color: ${({ active }) => (active ? "var(--white)" : "var(--blue)")};
  line-height: 1.9rem;
  background-color: ${({ active }) => (active ? "var(--blue)" : "#f2f4ff")};
  border-radius: var(--rouded-xl);
  padding: 0.5rem 1.6rem;
  list-style: none;
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    background-color: var(--grey-400);
  }
`;

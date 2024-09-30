import { Group } from '@mantine/core';
import SearchInputComponent from './SearchInput';
import ThemeIcon from './ThemeIcon';

function HeaderComponent() {
  return (
    <Group justify="center" p="xs" wrap="nowrap">
      <SearchInputComponent />
      <ThemeIcon />
    </Group>
  );
}

export default HeaderComponent;

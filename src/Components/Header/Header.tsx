import { Group } from '@mantine/core';
import SearchInputComponent from './SearchInput';

function HeaderComponent() {
  return (
    <Group justify="center" p="xs">
      <SearchInputComponent />
    </Group>
  );
}

export default HeaderComponent;

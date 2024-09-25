'use client';
import { ActionIcon, rem, TextInput, useMantineTheme } from '@mantine/core';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { Organisations } from '../Main/MainComponent';
import { useEffect, useState } from 'react';
import { updatedOrgs } from '../../store/updatedOrgsSlice';
import { initStoreOrgs } from '../../Interfaces/SearchInterfaces';

function SearchInputComponent() {
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const [searchValue, setValue] = useState('');
  const [orgsData, updateOrgsData] = useState<Organisations[]>([]);
  const selectorOrgsData = useSelector(
    (state: initStoreOrgs) => state.initOrgs.initOrgs,
  );

  useEffect(() => {
    updateOrgsData(selectorOrgsData);
  }, [selectorOrgsData]);

  const filteredValues = orgsData.filter((org) =>
    org.org_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
  );

  dispatch(updatedOrgs(filteredValues));

  return (
    <TextInput
      onChange={(event) => setValue(event.target.value)}
      radius="xl"
      size="md"
      placeholder="Поиск"
      rightSectionWidth={42}
      w={800}
      leftSection={
        <IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      }
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          color={theme.primaryColor}
          variant="filled"
        >
          <IconArrowRight
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        </ActionIcon>
      }
    />
  );
}

export default SearchInputComponent;

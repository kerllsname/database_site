'use client';
import { rem, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { Organisation } from '../Main/MainComponent';
import { useEffect, useState } from 'react';
import { updatedOrgs } from '../../store/updatedOrgsSlice';
import { initStoreOrgs } from '../../Interfaces/SearchInterfaces';

function SearchInputComponent() {
  const dispatch = useDispatch();
  const [orgsData, updateOrgsData] = useState<Organisation[]>([]);
  const selectorOrgsData = useSelector(
    (state: initStoreOrgs) => state.initOrgs.initOrgs,
  );

  useEffect(() => {
    updateOrgsData(selectorOrgsData);
  }, [selectorOrgsData]);

  const emptyArr = [
    {
      org_name: '',
      org_type: '',
      web_site: '',
      director: '',
      phone_number: '',
      org_structure: '',
      org_id: 0,
    },
  ];

  function searchHandler(searchValue: string) {
    const filteredValues = orgsData.filter((org) =>
      org.org_name
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase()),
    );

    if (filteredValues.length === 0) {
      dispatch(updatedOrgs(emptyArr));
    } else {
      dispatch(updatedOrgs(filteredValues));
    }
  }

  return (
    <TextInput
      onChange={(event) => searchHandler(event.target.value)}
      radius="xl"
      size="md"
      placeholder="Поиск"
      w={700}
      leftSection={
        <IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      }
    />
  );
}

export default SearchInputComponent;

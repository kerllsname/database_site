import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrg } from '../../store/initOrgsSlice';
import {
  initStoreOrgs,
  updatedStoreOrgs,
} from '../../Interfaces/SearchInterfaces';
import ErrorSearch from '../ErrorSearch';
import InputSelect from './InputSelect';
import { Center, Container } from '@mantine/core';
import ShowCards from './Cards';

export interface Organisation {
  id: number;
  org_name: string;
  org_type: string;
  website: string;
  director: string;
  phone_number: string;
  org_structure: string;
  activity_type: string;
  child: boolean;
  parent: {
    id: number;
    org_name: string;
    org_type: string;
  };
}

function MainComponent() {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState('type');

  const selectorInitOrgsData = useSelector(
    (state: initStoreOrgs) => state.initOrgs.initOrgs,
  );
  const selectorUpdatedOrgsData = useSelector(
    (state: updatedStoreOrgs) => state.updatedOrgs.updatedOrgs,
  );

  useEffect(() => {
    const getApiData = async () => {
      const response: Organisation[] = await fetch(
        'http://192.168.92.252:8000/api/all/',
      ).then((response) => response.json());

      dispatch(addOrg(response));
    };

    getApiData();
  }, [dispatch]);

  function isSearchActive(initArr: Organisation[], searchArr: Organisation[]) {
    if (Array.isArray(searchArr) && searchArr.length === 0)
      return (
        <ShowCards
          selectedValue={selectedValue}
          isSearchActive={false}
          initOrgs={initArr}
          updatedOrgs={searchArr}
        />
      );
    else if (searchArr.length === 1 && searchArr[0].org_name === '')
      return <ErrorSearch />;
    else {
      return (
        <ShowCards
          selectedValue={selectedValue}
          isSearchActive={true}
          initOrgs={initArr}
          updatedOrgs={searchArr}
        />
      );
    }
  }

  return (
    <Container p="md" fluid>
      <Center>
        <InputSelect handleChange={setSelectedValue} />
      </Center>

      {selectorInitOrgsData.length != 0
        ? isSearchActive(selectorInitOrgsData, selectorUpdatedOrgsData)
        : null}
    </Container>
  );
}

export default MainComponent;

import { Group } from '@mantine/core';
import { useEffect } from 'react';
import OrgCard from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addOrg } from '../../store/initOrgsSlice';
import {
  initStoreOrgs,
  updatedStoreOrgs,
} from '../../Interfaces/SearchInterfaces';
import ErrorSearch from '../ErrorSearch';

export interface Organisations {
  org_name: string;
  org_type: string;
  web_site: string;
  director: string;
  phone_number: string;
  org_structure: string;
  org_id: number;
}

function MainComponent() {
  const dispatch = useDispatch();

  const selectorInitOrgsData = useSelector(
    (state: initStoreOrgs) => state.initOrgs.initOrgs,
  );
  const selectorUpdatedOrgsData = useSelector(
    (state: updatedStoreOrgs) => state.updatedOrgs.updatedOrgs,
  );

  const getApiData = async () => {
    const response = await fetch(
      'http://192.168.92.252:8000/api/orgdata/',
    ).then((response) => response.json());

    dispatch(addOrg(response));
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <Group justify="center" p="md">
      {Array.isArray(selectorUpdatedOrgsData) &&
      selectorUpdatedOrgsData.length === 0 ? (
        selectorInitOrgsData.map((org) => (
          <OrgCard
            org_name={org.org_name}
            org_type={org.org_type}
            key={org.org_name}
          />
        ))
      ) : selectorUpdatedOrgsData.length === 1 &&
        selectorUpdatedOrgsData[0].org_name === '' ? (
        <ErrorSearch />
      ) : (
        selectorUpdatedOrgsData.map((org) => (
          <OrgCard
            org_name={org.org_name}
            org_type={org.org_type}
            key={org.org_name}
          />
        ))
      )}
    </Group>
  );
}

export default MainComponent;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrg } from '../../store/initOrgsSlice';
import {
  initStoreOrgs,
  updatedStoreOrgs,
} from '../../Interfaces/SearchInterfaces';
import ErrorSearch from '../ErrorSearch';
import CardsDefaultListComponent from './CardsGroup';

export interface Organisation {
  id: number;
  org_name: string;
  org_type: string;
  website: string;
  director: string;
  phone_number: string;
  org_structure: string;
  activity_type: string;
  parent: {
    id: number;
    org_name: string;
    org_type: string;
  };
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

  function isSearchActive(initArr: Organisation[], searchArr: Organisation[]) {
    if (Array.isArray(searchArr) && searchArr.length === 0)
      return <CardsDefaultListComponent orgs={initArr} />;
    else if (searchArr.length === 1 && searchArr[0].org_name === '')
      return <ErrorSearch />;
    else {
      return <CardsDefaultListComponent orgs={searchArr} />;
    }
  }

  return isSearchActive(selectorInitOrgsData, selectorUpdatedOrgsData);
}

export default MainComponent;

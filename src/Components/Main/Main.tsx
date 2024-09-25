import { Group } from '@mantine/core';
import { useEffect, useState } from 'react';
import OrgCard from '../Card/Card';

interface Organisations {
  org_name: string;
  org_type: string;
  web_site: string;
  director: string;
  phone_number: string;
  org_structure: string;
  org_id: number;
}

function MainComponent() {
  const [orgs, setOrgs] = useState<Organisations[]>([]);

  const getApiData = async () => {
    const response = await fetch(
      'http://192.168.92.252:8000/api/orgdata/',
    ).then((response) => response.json());

    setOrgs(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <Group justify="center" p="md">
      {orgs.map((org) => (
        <OrgCard
          org_name={org.org_name}
          org_type={org.org_type}
          key={org.org_name}
        />
        // <div className="item-container" key={org.org_id}>
        //   <div className="title">{org.org_name}</div>
        // </div>
      ))}
    </Group>
  );
}

export default MainComponent;

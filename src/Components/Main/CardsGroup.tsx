import { Group } from '@mantine/core';
import { Organisation } from './MainComponent';
import OrgCard from '../Card/Card';

function CardsDefaultListComponent(props: { orgs: Organisation[] }) {
  return (
    <Group justify="center" p="md">
      {props.orgs.map((org) => (
        <OrgCard org_data={org} key={org.id} />
      ))}
    </Group>
  );
}

export default CardsDefaultListComponent;

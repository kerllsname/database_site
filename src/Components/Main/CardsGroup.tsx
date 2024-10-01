import { Box, Divider, Flex, Group, Title } from '@mantine/core';
import { Organisation } from './MainComponent';
import OrgCard from '../Card/Card';

function CardsDefaultListComponent(props: { orgs: Organisation[] }) {
  const orgsTypesSet = new Set<string>();

  for (let x = 0; x < props.orgs.length; x++) {
    orgsTypesSet.add(props.orgs[x].org_type);
  }

  const orgTypesArr: string[] = Array.from(orgsTypesSet);

  return (
    <Flex direction="column">
      {orgTypesArr.map((uniqOrgType) => {
        return (
          <Box key={uniqOrgType}>
            <Title order={2}>{uniqOrgType}</Title>
            <Group mt="md">
              {props.orgs.map((org) => {
                if (org.org_type === uniqOrgType)
                  return (
                    <OrgCard org_data={org} showForm="type" key={org.id} />
                  );
              })}
            </Group>
            <Divider my="md" />
          </Box>
        );
      })}
    </Flex>
  );
}

export default CardsDefaultListComponent;

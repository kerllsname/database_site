import { Box, Divider, Flex, Group, Title } from '@mantine/core';
import { Organisation } from './MainComponent';
import OrgCard from '../Card/Card';

function CardsByDepartmentComponent(props: { orgs: Organisation[] }) {
  const orgsDepartmentsSet = new Set<string>();

  for (let x = 0; x < props.orgs.length; x++) {
    orgsDepartmentsSet.add(props.orgs[x].org_structure);
  }

  const orgDepartmentsArr: string[] = Array.from(orgsDepartmentsSet);

  return (
    <Flex direction="column">
      {orgDepartmentsArr.map((uniqOrgDepartment) => {
        return (
          <Box key={uniqOrgDepartment}>
            <Title order={2}>
              {uniqOrgDepartment.charAt(0).toUpperCase() +
                uniqOrgDepartment.slice(1)}
            </Title>
            <Group mt="md">
              {props.orgs.map((org) => {
                if (org.org_structure === uniqOrgDepartment)
                  return (
                    <OrgCard
                      org_data={org}
                      showForm="department"
                      key={org.id}
                    />
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

export default CardsByDepartmentComponent;

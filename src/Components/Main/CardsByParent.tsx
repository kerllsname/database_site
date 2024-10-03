import { Divider, Flex, Group } from '@mantine/core';
import { Organisation } from './MainComponent';
import OrgCard from '../Card/Card';

function CardsByParentComponent(props: {
  initOrgs: Organisation[];
  updatedOrgs: Organisation[];
  isSearchActive: boolean;
}) {
  const actualParentsId: number[] = [];
  const searchedParentsId: number[] = [];

  const finalArr: Organisation[] = [];

  function findParent(id: number) {
    let parentId: number = 0;

    props.initOrgs.forEach((parentOrg) => {
      if (parentOrg.id === id) parentId = parentOrg.id;
    });

    return parentId;
  }

  if (props.isSearchActive) {
    props.updatedOrgs.map((searchedOrg) => {
      if (searchedOrg.parent != null) {
        searchedParentsId.push(searchedOrg.parent.id);
        finalArr.push(searchedOrg);
      } else {
        actualParentsId.push(searchedOrg.id);
      }
    });

    searchedParentsId.map((childsParentId) => {
      if (!actualParentsId.includes(childsParentId)) {
        actualParentsId.push(findParent(childsParentId));
      }
    });

    props.initOrgs.map((initOrg) => {
      if (actualParentsId.includes(initOrg.id)) finalArr.push(initOrg);
    });

    return (
      <Flex direction="column">
        {finalArr.map((parentOrg) => {
          if (parentOrg.parent === null)
            return (
              <Flex direction="column" key={parentOrg.org_name}>
                <Group>
                  <OrgCard
                    org_data={parentOrg}
                    showForm="department"
                    key={parentOrg.id}
                  />
                </Group>
                {parentOrg.child ? (
                  <Group mt="md" ml="xl">
                    {finalArr.map((org) => {
                      if (org.parent && org.parent.id === parentOrg.id)
                        return (
                          <OrgCard
                            org_data={org}
                            showForm="department"
                            key={org.id}
                          />
                        );
                    })}
                  </Group>
                ) : null}
                <Divider my="md" />
              </Flex>
            );
        })}
      </Flex>
    );
  } else {
    return (
      <Flex direction="column">
        {props.initOrgs.map((parentOrg) => {
          if (parentOrg.parent === null)
            return (
              <Flex direction="column" key={parentOrg.org_name}>
                <OrgCard
                  org_data={parentOrg}
                  showForm="department"
                  key={parentOrg.id}
                />
                <Group mt="md" ml="xl">
                  {props.initOrgs.map((org) => {
                    if (org.parent && org.parent.id === parentOrg.id)
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
              </Flex>
            );
        })}
      </Flex>
    );
  }
}

export default CardsByParentComponent;

{
  /* <Button
                onClick={() =>
                  childernState === 'block'
                    ? setChildrenState('none')
                    : setChildrenState('block')
                }
              >
                {childernState === 'block'
                  ? 'Скрыть дочерние организации'
                  : 'Показать дочерние организации'}
              </Button> */
}

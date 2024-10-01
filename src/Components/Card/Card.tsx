import { Card, Stack, Text, Modal, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Organisation } from '../Main/MainComponent';

function OrgCard(props: { org_data: Organisation; showForm: string }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card
        w={400}
        radius={5}
        padding="xs"
        onClick={open}
        style={{ cursor: 'pointer' }}
        withBorder
      >
        {props.showForm != 'type' ? (
          <Stack align="flex-start" justify="space-between" h={150}>
            <Text fw={600}>{props.org_data.org_name}</Text>
            <Text c="dimmed" size="small">
              {props.org_data.org_type}
            </Text>
          </Stack>
        ) : (
          <Text h={75} fw={600}>
            {props.org_data.org_name}
          </Text>
        )}
      </Card>
      <Modal
        opened={opened}
        onClose={close}
        title={props.org_data.org_name}
        size="60%"
      >
        <Flex direction="column">
          <Text>Тип организации: {props.org_data.org_type}</Text>
          <Text>
            Сайт организации:
            <a
              href={
                props.org_data.website.includes('http')
                  ? props.org_data.website
                  : '//' + props.org_data.website
              }
              target="_blank"
            >
              {props.org_data.website}
            </a>
          </Text>
          <Text>Директор организации: {props.org_data.director}</Text>
          <Text>Телефон организации: {props.org_data.phone_number}</Text>
        </Flex>
      </Modal>
    </>
  );
}

export default OrgCard;

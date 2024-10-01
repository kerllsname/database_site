import { Card, Text, Modal, Flex } from '@mantine/core';
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
        <Text h={75} fw={600}>
          {props.org_data.org_name}
        </Text>
      </Card>
      <Modal
        opened={opened}
        onClose={close}
        title={props.org_data.org_name}
        size="60%"
      >
        <Flex direction="column">
          <Text>Тип организации: {props.org_data.org_type}</Text>
          <Text>Отделение организации: {props.org_data.org_structure}</Text>
          <Text>
            Сайт организации:&nbsp;
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

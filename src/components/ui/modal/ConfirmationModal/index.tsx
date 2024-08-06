import {
  Button,
  Modal,
  Text,
  Title,
  Alert,
  MantineColor,
  Flex,
} from '@mantine/core';
import { Icon } from '@iconify/react';

interface ConfirmationModalProps {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  color: MantineColor;
}

export default function ConfirmationModal({
  title,
  description,
  onConfirm,
  onCancel,
  color,
}: ConfirmationModalProps) {
  return (
    <Modal
      opened={false}
      onClose={onCancel}
      size="lg"
      radius="md"
      withCloseButton={false}
      closeOnClickOutside={false}
      closeOnEscape={false}
    >
      <Flex direction="column" gap="md">
      <Title order={4}>Add Todo</Title>

        <Alert
          icon={<Icon icon="tabler:alert-circle" />}
          color={color}
          title={title}
        >
          {description}
        </Alert>
        <Flex direction="row" gap="md" justify="end">
          <Button onClick={onCancel} radius="md" color="orange.4">Cancel</Button>
          <Button onClick={onConfirm} color={color} radius="md">
            Confirm
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
}

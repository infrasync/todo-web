import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, test, vi } from 'vitest';

import { AppRouterContextProviderMock } from '@/utils/testing/mock-app-router';

import ModalMutationTodo from '../index';

describe('ModalMutationTodo', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // Deprecated
        removeListener: vi.fn(), // Deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  test('should render ModalMutationTodo', () => {
    render(
      <AppRouterContextProviderMock router={{ push: vi.fn() }}>
        <ModalMutationTodo onClose={() => {}} opened type="ADD" />
      </AppRouterContextProviderMock>,
    );
    expect(screen.getByTestId('todo-modal-mutation')).toBeInTheDocument();
  });
  test('Todo Textarea should be required', () => {
    expect(screen.getByTestId('todo-textarea')).toBeRequired();
  });
});

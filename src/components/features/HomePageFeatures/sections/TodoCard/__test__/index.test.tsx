import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, test, vi } from 'vitest';

import { AppRouterContextProviderMock } from '@/utils/testing/mock-app-router';

import TodoCard from '../index';

describe('TodoCard', () => {
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

  test('should render TodoCard', () => {
    render(
      <AppRouterContextProviderMock router={{ push: vi.fn() }}>
        <TodoCard
          id="1"
          todo="Todo 1"
          createdAt="2023-01-01"
          done={false}
          updatedAt="2023-01-01"
        />
      </AppRouterContextProviderMock>,
    );
    expect(screen.getByTestId('todo-card')).toBeInTheDocument();
  });
});

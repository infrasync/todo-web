import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, test, vi } from 'vitest';

import { AppRouterContextProviderMock } from '@/utils/testing/mock-app-router';

import RandomQuote from '../index';

describe('RandomQuote', () => {
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

  test('should render RandomQuote', () => {
    render(
      <AppRouterContextProviderMock router={{ push: vi.fn() }}>
        <RandomQuote />
      </AppRouterContextProviderMock>,
    );
    expect(screen.getByTestId('random-quote-card')).toBeInTheDocument();
  });
});

/// <reference types="vitest" />
import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Countdown from './Countdown';

describe('Countdown', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('renders remaining time and calls onComplete when deadline reached', async () => {
    const now = Date.now();
    // deadline 3 seconds from now
    const deadline = new Date(now + 3000).toISOString();
    const onComplete = vi.fn();

    render(<Countdown deadline={deadline} onComplete={onComplete} />);

    // initial render should show a time string containing ':'
    expect(screen.getByText(/:/)).toBeInTheDocument();

    // advance timers to after the deadline
    act(() => {
      vi.advanceTimersByTime(3500);
    });

    // wait for onComplete to be called and for the UI to show expired time
    await waitFor(() => expect(onComplete).toHaveBeenCalled());
    expect(screen.getByText('00:00:00')).toBeInTheDocument();
  });

  it('shows Invalid date for bad input', () => {
    render(<Countdown deadline={'not-a-date'} />);
    expect(screen.getByText('Invalid date')).toBeInTheDocument();
  });
});

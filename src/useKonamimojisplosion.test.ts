import { act, renderHook } from '@testing-library/react-hooks';

import { useKonamimojisplosion } from './useKonamimojisplosion';

let mockKonamiCode: { mockLaunch: () => void; disable: jest.Mock };

jest.mock(
  'konami-code-js',
  () =>
    class MockKonamiCode {
      constructor(public mockLaunch: () => void) {
        mockKonamiCode = this;
      }

      disable = jest.fn();
    }
);

const mockEmojisplosionsCancel = jest.fn();
const mockEmojisplosionsStart = jest.fn(() => ({
  cancel: mockEmojisplosionsCancel,
}));

jest.mock('emojisplosion', () => ({
  get emojisplosions() {
    return mockEmojisplosionsStart;
  },
}));

describe('useKonamimojisplosion', () => {
  it('does not start emojisplosions when the konami code is not triggered', () => {
    renderHook(() => useKonamimojisplosion(jest.fn()));

    expect(mockEmojisplosionsStart).not.toHaveBeenCalled();
  });

  it('starts emojisplosions when the konami code is triggered a first time', () => {
    renderHook(() => useKonamimojisplosion(jest.fn()));

    act(() => {
      mockKonamiCode.mockLaunch();
    });

    expect(mockEmojisplosionsStart).toHaveBeenCalled();
  });

  it('stops emojisplosions when the konami code is triggered a second time', () => {
    renderHook(() => useKonamimojisplosion(jest.fn()));

    act(() => {
      mockKonamiCode.mockLaunch();
    });

    act(() => {
      mockKonamiCode.mockLaunch();
    });

    expect(mockEmojisplosionsCancel).toHaveBeenCalled();
  });

  it('stops emojisplosions and konami listening when disposed', () => {
    const hook = renderHook(() => useKonamimojisplosion(jest.fn()));

    act(() => {
      mockKonamiCode.mockLaunch();
    });

    act(() => {
      hook.unmount();
    });

    expect(mockEmojisplosionsCancel).toHaveBeenCalled();
    expect(mockKonamiCode.disable).toHaveBeenCalled();
  });
});

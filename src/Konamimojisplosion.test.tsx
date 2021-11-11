import { setupRtl } from 'component-test-setup';

import { Konamimojisplosion } from './Konamimojisplosion';

const mockUseKonamimojisplosion = jest.fn();

jest.mock('./useKonamimojisplosion', () => ({
  get useKonamimojisplosion() {
    return mockUseKonamimojisplosion;
  },
}));

const renderView = setupRtl(Konamimojisplosion);

describe('Konamimojisplosion', () => {
  it('calls useKonamimojisplosion with onActivate on mount', () => {
    const onActivate = jest.fn();

    renderView({ onActivate });

    expect(mockUseKonamimojisplosion).toHaveBeenCalledWith(onActivate);
  });
});

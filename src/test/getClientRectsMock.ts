export const getClientRectsMock = () => {
  return Object.defineProperty(window, 'getClientRects', {
    writable: true,
    value: vi.fn().mockImplementation(() => [
      {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
      },
    ]),
  });
};

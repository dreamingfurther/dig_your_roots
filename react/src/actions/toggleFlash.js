export const TOGGLE_FLASH = 'TOGGLE_FLASH';

const toggleFlash = (visible) => ({
  type: TOGGLE_FLASH,
  visible
});

export { toggleFlash }

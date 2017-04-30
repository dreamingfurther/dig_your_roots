export const TOGGLE_FORGOT_PASSWORD_FORM = 'TOGGLE_FORGOT_PASSWORD_FORM';

const toggleForgotPasswordForm = (visible) => ({
  type: TOGGLE_FORGOT_PASSWORD_FORM,
  visible
});

export { toggleForgotPasswordForm }

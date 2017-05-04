describe('user navigates to Forget your password page', () => {
  beforeEach(() => {
    page = mountReactAppAt('/')
  });

  it('can click the link from the sign in page', () => {
    clickOn('#toggle-sign-in-form', page);
    expect(page.text()).toMatch('Forget your password');

    clickOn('#forgot-password-link', page);
    page.render();
    expect(page.text()).toMatch('Enter your email to send a reset link');
  });
});

describe('user visits welcome page', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/authorize':  { POST: ['postAuthorizeFailureResponse', 401] }
    });

    page = mountReactAppAt('/')
  });

  it('sees an error when they sign in incorrectly', done => {
    clickOn('#sign-in-form', page);

    let signInButton = page.find('#sign-in-button');
    fillIn('email', { with: 'test@test.com' }, page);
    fillIn('password', { with: 'test-password' }, page);
    simulateIfPresent(signInButton, 'submit');

    setTimeout(() => {
      expect(page.text()).toMatch('Wrong Password');

      done();
    }, 0)
  });
});

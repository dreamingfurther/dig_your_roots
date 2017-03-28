describe('user visits welcome page', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/authorize':  { POST: ['postAuthorizeSuccessResponse', 200] }
    });

    page = mountReactAppAt('/')
  });

  it('can toggle the sign in form', () => {
    expect(page.text()).toMatch('Jesse & David');
    expect(page.text()).not.toMatch('Email');

    clickOn('#toggle-sign-in-form', page);
    expect(page.text()).toMatch('Email');
    clickOn('#toggle-sign-in-form', page);
    expect(page.text()).not.toMatch('Email');
  });

  it('shows sign in form', () => {
    clickOn('#toggle-sign-in-form', page);
    expect(page.text()).toMatch('Email');
    expect(page.text()).toMatch('Password');
    let signInButton = page.find('#sign-in-button');
    expect(signInButton.text()).toMatch('Sign In');

    fillIn('email', { with: 'test@test.com' }, page);
    fillIn('password', { with: 'test-password' }, page);
    simulateIfPresent(signInButton, 'submit');
    expect(fetch).toHaveBeenCalledWith(
      '/api/v1/authorize',
      {
        credentials: 'same-origin',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: {
            email: 'test@test.com',
            password: 'test-password'
          }
        })
      }
    )
  });
});

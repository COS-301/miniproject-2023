describe('Register User and Login',()=>{
  const user = {
      username: 'testUsername',
      email:'test@email.com',
      password: 't3StP@ssword'
  };
  test('Register user',()=>{
      cy.register(user.username,user.email,user.password);
  })
  
  test('Login User',()=>{
      cy.login(user.email,user.password);
  })
})
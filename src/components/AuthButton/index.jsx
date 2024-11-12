function AuthButton(Component) {
  const isAuth = false;
  let AuthButton = "";
  if (isAuth) {
    AuthButton = <Component />;
  }

  return AuthButton;
}

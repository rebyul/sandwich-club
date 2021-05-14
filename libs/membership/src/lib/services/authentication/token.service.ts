interface IAuthenticationService {
  generateToken(username: string, password: string);
  verifyToken(token: string);
  revokeToken(token: string);
}

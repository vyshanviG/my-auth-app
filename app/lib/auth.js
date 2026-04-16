import jwt from "jsonwebtoken";

const SECRET = "mysecretkey";

export function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, SECRET, {
    expiresIn: "1h",
  });
}
import "dotenv/config";
import jwt from "jsonwebtoken";

interface Token {
  firstname: string;
  email: string;
}

const jwt_secret =
  (process.env.JWT_SECRET_KEY as string) || "2398fja9afjJ8eMw8FWJF83";

export function tokenSign({ firstname, email }: Token) {
  const token = jwt.sign({ firstname, email }, jwt_secret);
  return token;
}

/**
 * this function hashes the password
 * provided by the user at signup time
 */

import bcrypt from "bcrypt";

export async function hashpassword(password: string, saltRounds = 10) {
  const hashedpassword = await bcrypt.hash(password, saltRounds);
  return hashedpassword;
}

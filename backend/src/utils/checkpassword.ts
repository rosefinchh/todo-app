import bcrypt from "bcrypt";

/**
 * this function checks the password
 * provided by the user at signin time
 *
 */
export async function checkpassword(plaintextPassword: string, hash: string) {
  const result = await bcrypt.compare(plaintextPassword, hash);

  return result;
}

import { auth } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export async function createAdminAuth(email, password) {
  return createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );
}

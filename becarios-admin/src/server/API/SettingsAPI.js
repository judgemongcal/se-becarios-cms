import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAdminContext } from '../../hooks/useAdminContext';

export async function createAdminAuth(email, password) {
  return createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );
}

export async function createAdminCredentials(
  adminFirstName,
  adminLastName,
  adminEmail,
  adminContactNum,
  adminImageSrc,
  adminRole,
) {
  console.log(adminRole);

  const docRef = await addDoc(
    collection(db, 'admin_credentials'),
    {
      contactNumber: adminContactNum,
      email: adminEmail,
      firstName: adminFirstName,
      image: null,
      lastName: adminLastName,
      role: adminRole,
    },
  );

  return docRef;
}

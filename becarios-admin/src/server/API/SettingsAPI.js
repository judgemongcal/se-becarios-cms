import { addDoc, collection } from 'firebase/firestore';
import { adminAuth, auth, db } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAdminContext } from '../../hooks/useAdminContext';

export async function createAdminAuth(email, password) {
  // await createUserWithEmailAndPassword(
  //   auth,
  //   email,
  //   password,
  // );
  try {
    const userRecord = await adminAuth.auth().createUser({
      email: email,
      password: password,
    });
    console.log(
      'Successfully created new user',
      userRecord.uid,
    );
  } catch (error) {
    console.log(error);
  }
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

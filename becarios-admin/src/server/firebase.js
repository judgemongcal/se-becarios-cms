import { db } from './firebase.js';

// Fetches Admin login credentials for authentication
async function fetchLogin() {
  try {
    // This line assumes 'loginCredentials' is a collection
    const loginCredentialsSnapshot = await db
      .collection('login_credentials')
      .get();
    return loginCredentialsSnapshot;
  } catch (error) {
    console.error(
      'Error fetching login credentials',
      error,
    );
    throw error;
  }
}

// Fetches All Existing Admins
async function fetchAllAdmins() {
  try {
    const allAdminsSnapshot = await db
      .collection('admin_credentials')
      .get();
    // Extract admin data from the snapshot
    const allAdmins = [];
    allAdminsSnapshot.forEach((doc) => {
      allAdmins.push(doc.data());
    });
    return allAdmins;
  } catch (error) {
    console.error(
      'Error fetching login credentials',
      error,
    );
    throw error;
  }
}

// Fetches All Existing Articles
async function fetchAllArticles() {
  try {
    const allArticlesSnapshot = await db
      .collection('article_information')
      .get();
    // Extract articles data from the snapshot
    const allArticles = [];
    allArticlesSnapshot.forEach((doc) => {
      allArticles.push(doc.data());
    });
    return allArticles;
  } catch (error) {
    console.error('Error fetching articles', error);
    throw error;
  }
}

// Function to add a document/account to the admin_credentials collection
// Function to get the current count of admin documents for admin_id
async function getCurrentAdminCount() {
  try {
    const adminCredentialsCollection = db.collection(
      'admin_credentials',
    );
    const snapshot = await adminCredentialsCollection.get();
    return snapshot.size; // Number of documents in the collection
  } catch (error) {
    console.error('Error getting admin count:', error);
    throw error;
  }
}

async function addAdminCredentials(adminData) {
  try {
    // Get the current count of admin documents
    const currentAdminCount = await getCurrentAdminCount();

    // Increment the count to get the new admin_id
    const newAdminId = currentAdminCount + 1;

    // Add the new admin_id to adminData
    adminData.admin_id = newAdminId.toString();

    // Reference to the admin_credentials collection
    const adminCredentialsCollection = db.collection(
      'admin_credentials',
    );
    /*
    // Define a basic schema for the admin credentials
    const schema = {
      admin_id: 'string',
      first_name: 'string',
      last_name: 'string',
      image: 'string',
      contact_number: 'string',
      role: 'string',
      email_address: 'string',
    };

    // Validate that the provided data matches the schema
    Object.keys(schema).forEach((field) => {
      if (!(field in adminData)) {
        throw new Error(`Field '${field}' is missing in adminData`);
      }
      if (typeof adminData[field] !== schema[field]) {
        throw new Error(`Field '${field}' should be of type '${schema[field]}'`);
      }
    });
    */
    // Add the document with the provided data
    const result =
      await adminCredentialsCollection.add(adminData);

    console.log('Document added with ID:', result.id);
    //return result.id; // Return the ID of the added document if needed
  } catch (error) {
    console.error('Error adding admin credentials:', error);
    throw error;
  }
}

/*<script>
  // Assuming addAdminCredentials is available from a script tag or imported module
  async function addAdmin() {
    // Get values from input fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const image_ref = document.getElementById('image').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const adminRole = document.getElementById('role').value;
    const emailAddress = document.getElementById('email_address').value;

    // Create an object with the gathered values
    const adminData = {
      admin_id: '',
      first_name: firstName,
      last_name: lastName,
      image: image_ref,
      contact_number: contactNumber,
      role: adminRole,
      email_address: emailAddress,
    };

    try {
      // Call the function to add admin credentials
      const addedAdminId = await addAdminCredentials(adminData);
      console.log(`Admin with ID ${addedAdminId} added successfully.`);
    } catch (error) {
      console.error('Error adding admin credentials:', error);
    }
  }
</script>
*/

export {
  addAdminCredentials,
  fetchLogin,
  fetchAllAdmins,
  fetchAllArticles,
};

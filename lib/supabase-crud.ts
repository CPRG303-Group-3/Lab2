import supabase from "./supabase";

const TABLE_NAME = "sampledatabase";

export async function getUsers() {
  try {
    console.log(`Attempting to fetch users from table: ${TABLE_NAME}`);
    const { data, error } = await supabase.from(TABLE_NAME).select("*");

    if (error) {
      console.error("Supabase Error:", error);
      throw error;
    }

    console.log("Fetched users:", data);
    console.log("Number of users:", data ? data.length : 0);

    if (!data || data.length === 0) {
      console.warn(`No users found in table: ${TABLE_NAME}`);
    }

    return data || [];
  } catch (err) {
    console.error("Unexpected error in getUsers:", err);
    throw err;
  }
}

export async function deleteUserById(id: number) {
  try {
    console.log(
      `Attempting to delete user with ID: ${id} from table: ${TABLE_NAME}`
    );
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .delete()
      .eq("id", id)
      .select();

    if (error) {
      console.error("Supabase Error:", error);
      throw error;
    }

    console.log("Deleted user:", data);

    if (!data || data.length === 0) {
      console.warn(
        `No user found with ID: ${id} to delete in table: ${TABLE_NAME}`
      );
    }

    return data;
  } catch (err) {
    console.error("Unexpected error in deleteUserById:", err);
    throw err;
  }
}

export async function updateUserById(id: number, name: string) {
  try {
    console.log(
      `Attempting to update user with ID: ${id} in table: ${TABLE_NAME}`
    );
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .update({ name })
      .eq("id", id)
      .select();

    if (error) {
      console.error("Supabase Error:", error);
      throw error;
    }

    console.log("Updated user:", data);

    if (!data || data.length === 0) {
      console.warn(
        `No user found with ID: ${id} to update in table: ${TABLE_NAME}`
      );
    }

    return data;
  } catch (err) {
    console.error("Unexpected error in updateUserById:", err);
    throw err;
  }
}

export async function getUserById(id: number) {
  try {
    console.log(
      `Attempting to fetch user with ID: ${id} from table: ${TABLE_NAME}`
    );
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Supabase Error:", error);
      throw error;
    }

    console.log("Fetched user:", data);

    if (!data) {
      console.warn(`No user found with ID: ${id} in table: ${TABLE_NAME}`);
    }

    return data;
  } catch (err) {
    console.error("Unexpected error in getUserById:", err);
    throw err;
  }
}

export async function createUser(name: string) {
  try {
    console.log(`Attempting to create user with name: ${name}`);
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert({ name })
      .select();

    if (error) {
      console.error("Supabase Error:", error);
      throw error;
    }

    console.log("Created user:", data);
    return data[0];
  } catch (err) {
    console.error("Unexpected error in createUser:", err);
    throw err;
  }
}

export interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [];

const getAllUsers = async (): Promise<User[]> => {
  return users;
};

const getUserById = async (id: number): Promise<User | undefined> => {
  return users.find((user) => user.id === id);
}

const createUser = async (user: Omit<User, "id">): Promise<User> => {
  const newUser: User = { id: Date.now(), ...user };
  users.push(newUser);
  return newUser;
};

export default {
  getAllUsers,
  getUserById,
  createUser,
};
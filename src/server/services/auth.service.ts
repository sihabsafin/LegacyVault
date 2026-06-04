import { userRepository }
from "@/server/repositories/user.repository";

export const authService = {
  async getUserByEmail(
    email: string
  ) {
    return userRepository.findByEmail(
      email
    );
  },
};
import { connectDB } from "../lib/mongodb";
import User from "../models/User";


interface UpdateProfileData {
  email: string;
  phoneNumber: string;
  profilePic: string;
  name: string;
}

export async function updateProfile(data: UpdateProfileData) {
  await connectDB();

  const { email, phoneNumber, profilePic } = data;

  const updatedUser = await User.findOneAndUpdate(
    { email },
    { phone: phoneNumber, profilePic },
    { new: true }
  );

  if (!updatedUser) {
    throw new Error("User not found");
  }

  return updatedUser;
}
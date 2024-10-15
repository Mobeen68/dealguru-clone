"use server";
import { connectDB } from "../lib/mongodb";
import User from "../models/User";


interface UpdateProfileData {
  email: string;
  phoneNumber: string;
  profilePic: string;
  name: string;
}

export async function updateProfile(data: UpdateProfileData) {
  try {
    await connectDB();
    const { email, phoneNumber, profilePic, name } = data;

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { phone: phoneNumber, profilePic, name },
      { new: true }
    );

    if (!updatedUser) {
      throw new Error('User not found');
    }

    return { success: true, data: updatedUser };
  } catch (error) {
    console.error('Error updating profile:', error);
    return { success: false, message: (error as Error).message };
  }
}
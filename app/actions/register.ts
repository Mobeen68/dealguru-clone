"use server";
import { connectDB } from "@/app/lib/mongodb";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
  const { email, password, name, username } = values;

  // Consolidate validation checks
  if (!name) return { error: "Name is required" };
  if (!email) return { error: "Email is required" };
  if (!password) return { error: "Password is required" };
  if (!username) return { error: "Username is required" };

  try {
    await connectDB();
    const userFound = await User.findOne({ email });
    if (userFound) {
      return {
        error: "Email already exists!",
      };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
      name,
      email,
      username,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    return { message: "User registered successfully" };
  } catch (error) {
    console.error("Registration error:", error);
    return { error: "An error occurred during registration" };
  }
};

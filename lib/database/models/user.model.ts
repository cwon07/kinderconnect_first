import { Document, Schema, model, models } from "mongoose";

export interface UserProps extends Document {
  clerkId: string;
  email: string;
  userName: string;
  firstName: string | null;
  lastName: string | null;
  photo: string
}

const UserSchema = new Schema<UserProps>({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: {type: String, required: true },
  photo: { type: String, required: true },
})

const User = models.User || model('User', UserSchema);

export default User;
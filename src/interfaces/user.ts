import type { Location } from "@/interfaces/location";
import type { Role } from "@/interfaces/role";

export interface User {
  id: string;
  userName: string;
  normalizedUserName: string;
  email: string;
  normalizedEmail: string;
  emailConfirmed: boolean;
  passwordHash: string;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd: Date | null;
  lockoutEnabled: boolean;
  accessFailedCount: number;
  fullName: string;
  password: string;
  streetAddress: string;
  countryCode: string;
  countryName: string;
  avatar: string;
  provinceCode: string;
  provinceName: string;
  phoneCode: string;
  refreshToken: string;
  isActive: boolean;
  isDeleted: boolean;
  role: Role;
  createdAt: string;
  updatedAt: string;
  locations: Location[];
}

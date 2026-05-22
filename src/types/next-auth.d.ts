import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      isNewUser?: boolean;
      userNumber?: number;
      preferences?: string[] | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    isNewUser?: boolean;
    userNumber?: number;
    preferences?: string[] | null;
    provider?: string;
  }
}

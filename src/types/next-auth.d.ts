import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      isNewUser?: boolean;
      userNumber?: number;
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
    provider?: string;
  }
}

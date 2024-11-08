import type { APIResponseType, UserType } from "~/lib/types";

export const useUserStore = defineStore("user_store", () => {
  const {
    public: { baseApi },
  } = useRuntimeConfig();

  const user = useState<UserType | null>("user", () => null);
  const token = useState<string | null>("token", () => null);

  async function SIGN_IN({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<APIResponseType<string> | undefined> {
    try {
      const data = await $fetch<APIResponseType<string>>(
        `${baseApi}/user/sign-in`,
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
        }
      );

      token.value = data.response;

      await FETCH_INFO();

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async function FETCH_INFO(): Promise<APIResponseType<UserType> | undefined> {
    try {
      const data = await $fetch<APIResponseType<UserType>>(
        `${baseApi}/user/info`,
        {
          method: "GET",
          cache: "force-cache",
          headers: {
            token: token.value as string,
          },
        }
      );

      user.value = data.response;

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    SIGN_IN,
    FETCH_INFO,
    user,
    token,
  };
});

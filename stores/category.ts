import type { APIResponseType, CategoryType } from "~/lib/types";

export const useCategoryStore = defineStore("category", () => {
  const {
    public: { baseApi },
  } = useRuntimeConfig();

  const categories = useState<Array<CategoryType>>("categories", () => []);

  async function FETCH_ALL(): Promise<
    APIResponseType<CategoryType[]> | undefined
  > {
    try {
      const data = await $fetch<APIResponseType<CategoryType[]>>(
        `${baseApi}/product/categories`,
        {
          method: "GET",
          headers: {
            token: "",
          },
        }
      );

      categories.value = data.response;

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  return { FETCH_ALL, categories };
});

import type { APIResponseType, ProductType } from "~/lib/types";

export const useProductStore = defineStore("product", () => {
  const {
    public: { baseApi },
  } = useRuntimeConfig();

  const products = useState<Array<ProductType>>("products", () => []);

  async function FETCH_ALL(): Promise<
    APIResponseType<ProductType[]> | undefined
  > {
    try {
      const data = await $fetch<APIResponseType<ProductType[]>>(
        `${baseApi}/product`,
        {
          method: "GET",
          headers: {
            token: "",
          },
        }
      );

      products.value = data.response;

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async function FETCH_DETAIL(
    id: number
  ): Promise<APIResponseType<ProductType> | undefined> {
    try {
      const data = await $fetch<APIResponseType<ProductType>>(
        `${baseApi}/product/${id}`,
        {
          method: "GET",
          headers: {
            token: "",
          },
        }
      );

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    FETCH_ALL,
    FETCH_DETAIL,
    products,
  };
});

import type { APIResponseType, ProductType, ReportType } from "~/lib/types";

export const useProductStore = defineStore("product", () => {
  const {
    public: { baseApi },
  } = useRuntimeConfig();

  const userStore = useUserStore();

  const products = useState<Array<ProductType>>("products", () => []);
  const reports = useState<Array<ReportType>>("reports", () => []);

  async function FETCH_ALL(): Promise<
    APIResponseType<ProductType[]> | undefined
  > {
    try {
      const data = await $fetch<APIResponseType<ProductType[]>>(
        `${baseApi}/product`,
        {
          method: "GET",
          cache: "force-cache",
          headers: {
            token: userStore.token as string,
          },
        }
      );

      products.value = data.response;

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async function FETCH_DETAIL(id: number): Promise<ProductType | undefined> {
    try {
      const data = await $fetch<APIResponseType<ProductType>>(
        `${baseApi}/product/${id}`,
        {
          method: "GET",
          cache: "force-cache",
          headers: {
            token: userStore.token as string,
          },
        }
      );

      return data.response;
    } catch (error) {
      console.error(error);
    }
  }

  async function FETCH_REPORT(): Promise<ReportType[] | undefined> {
    try {
      const data = await $fetch<ReportType[]>(`${baseApi}/product/report`, {
        method: "GET",
        cache: "force-cache",
        headers: {
          token: userStore.token as string,
        },
      });

      reports.value = data;

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async function CREATE(
    payload: Partial<ProductType>
  ): Promise<APIResponseType<ProductType> | undefined> {
    try {
      const data = await $fetch<APIResponseType<ProductType>>(
        `${baseApi}/product`,
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
            token: userStore.token as string,
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
    FETCH_REPORT,
    CREATE,
    products,
    reports,
  };
});

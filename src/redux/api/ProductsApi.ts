import { TQueryParams } from "@/types";
import { baseApi } from "../api/baseApi";

const ServiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (productInfo) => {
        return {
          url: "/products/create-product",
          method: "POST",
          body: productInfo,
        };
      },
      invalidatesTags: ["products"],
    }),
    getAllProducts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/products",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["products"],
    }),
    getSingleProduct: builder.query({
      query: (payload) => {
        return {
          url: `/products/${payload}`,
          method: "GET",
        };
      },
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["products"],
    }),
    updateProduct: builder.mutation({
      query: (payload) => {
        const { _id, ...data } = payload;
        return {
          url: `/products/${_id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = ServiceApi;

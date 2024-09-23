import { baseApi } from "../api/baseApi";

const OrderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderInfo) => {
        return {
          url: "/orders/create-order",
          method: "POST",
          body: orderInfo,
        };
      },
      invalidatesTags: [],
    }),
  }),
});

export const { useCreateOrderMutation } = OrderApi;

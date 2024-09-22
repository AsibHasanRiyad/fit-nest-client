import { baseApi } from "../api/baseApi";

const OrderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingInfo) => {
        return {
          url: "/orders/create-order",
          method: "POST",
          body: bookingInfo,
        };
      },
      invalidatesTags: [],
    }),
  }),
});

export const { useCreateBookingMutation } = OrderApi;

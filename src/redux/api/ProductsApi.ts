import { TQueryParams } from "@/types";
import { baseApi } from "../api/baseApi";

const ServiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingInfo) => {
        return {
          url: "/bookings",
          method: "POST",
          body: bookingInfo,
        };
      },
      invalidatesTags: [],
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
      providesTags: [],
    }),
    getSingleProduct: builder.query({
      query: (payload) => {
        return {
          url: `/products/${payload}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} = ServiceApi;

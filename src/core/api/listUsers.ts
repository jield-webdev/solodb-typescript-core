import axios from "axios";
import { User } from "../interfaces/user";
import { ApiFormattedResponse, ApiResponse } from "../interfaces/response";

export type UserListOrder = "id" | "name" | "firstname" | "lastname" | "email" | "add-date" | "last-update";

export interface UserListFilter {
  /** 0 = deleted, 1 = active */
  status?: number[];
  roles?: number[];
  equipment?: number[];
}

export default async function listUsers({
  query,
  selection,
  filter,
  order,
  direction,
  page,
  pageSize,
}: {
  query?: string;
  selection?: number;
  filter?: UserListFilter;
  order?: UserListOrder;
  direction?: "ASC" | "DESC";
  page?: number;
  pageSize?: number;
} = {}): Promise<ApiFormattedResponse<User>> {
  const searchParams = new URLSearchParams();

  if (query) {
    searchParams.append("query", query);
  }

  if (selection) {
    searchParams.append("selection", selection.toString());
  }

  if (filter) {
    (Object.entries(filter) as [string, number[] | undefined][]).forEach(([key, values]) => {
      values?.forEach((value: number) => searchParams.append(`filter[${key}][]`, value.toString()));
    });
  }

  if (order) {
    searchParams.append("order", order);
  }

  if (direction) {
    searchParams.append("direction", direction);
  }

  if (page) {
    searchParams.append("page", page.toString());
  }

  if (pageSize) {
    searchParams.append("page_size", pageSize.toString());
  }

  let url = "list/user?" + searchParams.toString();

  const response = await axios.get<ApiResponse<User>>(url);
  const { data } = response;
  return {
    items: data._embedded.items,
    amountOfPages: data.page_count,
    currentPage: data.page,
    totalItems: data.total_items,
    hasMore: data.page < data.page_count,
  };
};

import { useItemsApiService } from "./api-service";
import { useCallback, useState } from "react";
import { Item } from "../interfaces/item";

export function useItemsFacade() {
  const { fetchItems } = useItemsApiService();
  const [items, setItems] = useState<Item[]>([]);

  const getItems = useCallback(async () => {
    const newItems = await fetchItems();
    setItems(newItems);
  }, [fetchItems]);

  return { items, getItems };
}

import { apiService } from "../../core/services/api-service";
import { ItemDTO } from "../interfaces/item-dto";
import { useItemsMapper } from "./mapper";
import { useCallback } from "react";

export function useItemsApiService() {
  const { mapToModel } = useItemsMapper();

  const fetchItems = useCallback(async () => {
    const itemDTOs = await apiService.get<ItemDTO[]>("items");
    return itemDTOs.map(mapToModel);
  }, [mapToModel]);

  return { fetchItems };
}

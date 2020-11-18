import { ItemDTO } from "../interfaces/item-dto";
import { Item } from "../interfaces/item";
import { useCallback } from "react";

export function useItemsMapper() {
  const mapToModel = useCallback((dto: ItemDTO): Item => {
    return {
      id: dto.item_id,
      name: dto.item_name,
      price: +dto.item_price,
    };
  }, []);

  return { mapToModel };
}

import { renderHook, act } from "@testing-library/react-hooks";
import { useItemsMapper } from "./mapper";
import { Item } from "../interfaces/item";
import { ItemDTO } from "../interfaces/item-dto";

describe("Items mapper", () => {
  it("should map an ItemDTO into an Item", () => {
    const { result } = renderHook(() => useItemsMapper());

    let item = {} as Item;
    const itemDTO: ItemDTO = {
      item_id: 1,
      item_name: "Product 1",
      item_price: 100,
    };

    const expectedItem: Item = { id: 1, name: "Product 1", price: 100 };

    act(() => {
      item = result.current.mapToModel(itemDTO);
    });

    expect(item).toStrictEqual(expectedItem);
  });
});

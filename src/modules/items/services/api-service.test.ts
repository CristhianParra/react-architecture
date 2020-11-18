import { mocked } from "ts-jest/utils";
import { renderHook } from "@testing-library/react-hooks";
import { useItemsApiService } from "./api-service";
import { apiService } from "../../core/services/api-service";
import { useItemsMapper } from "./mapper";

jest.mock("../../core/services/api-service");
jest.mock("./mapper");

const apiServiceMock = mocked(apiService);
const mapperMock = mocked(useItemsMapper);

describe("Items API Service", () => {
  it("should fetch items", async () => {
    const { result } = renderHook(() => useItemsApiService());

    apiServiceMock.get.mockReturnValueOnce(Promise.resolve([]) as any);
    mapperMock.mockReturnValueOnce({ mapToModel: jest.fn() });
    const items = await result.current.fetchItems();

    expect(items).toStrictEqual([]);
  });
});

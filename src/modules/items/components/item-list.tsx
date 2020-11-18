import React, { useEffect } from "react";
import { useItemsFacade } from "../services/facade";

export function ItemList() {
  const { items, getItems } = useItemsFacade();
  useEffect(() => {
    getItems();
  }, [getItems]);
  return <div>{JSON.stringify(items)}</div>;
}

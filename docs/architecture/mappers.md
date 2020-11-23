---
id: mappers
title: Mappers
sidebar_label: mappers
---

Mappers description

## Example

    import { useCallback } from "react";
    import { Item } from "../interfaces/item";
    import { ItemDTO } from "../interfaces/item-dto";

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

## Use cases

## Naming conventions

## Do’s and Don’ts

## Testing

Don't apply

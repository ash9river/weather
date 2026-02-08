import { useState } from "react";
import { InputField } from "@shared/ui/composite/InputField";
import { ItemGroup } from "@shared/ui/base/Item";
import { searchDistricts } from "entities/location/district/internal/model/services/searchDisctricts";
import { SidebarNoContent } from "../common/SidebarNoContent";
import { SearchItem } from "./SearchItem";

export function SearchSidebarContent() {
  const [keyword, setKeyword] = useState("");
  const searchedDistricts = searchDistricts(keyword);

  return (
    <>
      <div className="p-4">
        <InputField
          id="search"
          buttonText="검색"
          placeholder="행정구역 검색"
          onButtonClick={setKeyword}
        />
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
        <ItemGroup>
          {searchedDistricts.length > 0 ? (
            searchedDistricts.map((district, index) => (
              <SearchItem
                district={district}
                showSeparator={index !== searchedDistricts.length - 1}
              />
            ))
          ) : (
            <SidebarNoContent type="search" />
          )}
        </ItemGroup>
      </div>
    </>
  );
}

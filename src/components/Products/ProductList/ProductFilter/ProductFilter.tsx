import React from "react";
import DropDown from "../../../../utils/Dropdown/Dropdown";
import Input from "../../../../utils/FormElements/Input";
import { Button } from "../../../../utils/Buttons/Button";
import Toggle from "../../../../utils/ToggleSwitch/ToggleSwitch";
import MultiSelect from "react-multi-select-component";
import "./ProductFilter.css";
function ProductFilter({
  data,
  setSearchResult,
}: {
  data: any;
  setSearchResult: any;
}) {
  const [selected, setSelected] = React.useState<any>([]);
  const [name, setName] = React.useState<string>("");
  const [active, setActive] = React.useState<boolean>(false);
  const [toggleState, setToggleState] = React.useState("off");
  const handleFilterName = (e: { value: string; label: string }) => {
    const result = data.filter((el: any) => {
      return el.name === e.value;
    });
    setSearchResult(result);
  };
  const handleSearch = (e: any) => {
    e.preventDefault();
    const query = name.toLowerCase();
    const result = data.filter((el: any) => {
      return el.name.toLowerCase().includes(query);
    });
    setSearchResult(result);
  };
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setName(event.target.value);
  };
  const handleFilterId = (e: any) => {
    setSelected(e);
    let res: {}[] = [];
    const result = data.map((el: any) => {
      const ids = el.shopIds;
      let query: {}[] = [];
      const queries = e.map((filter: any) => {
        query.push(filter.value);
      });
      if (query.some((i) => ids.includes(i))) {
        return el;
      }
      res.push(el);
    });
    setSearchResult(res);
  };
  const handleRadio = () => {
    setActive(!active);
    const n = new Date().toLocaleString("en-us", { weekday: "long" });
    const today = n.toLowerCase();
    setToggleState(toggleState === "off" ? "on" : "off");
    if (active) {
      const result = data.filter((el: any) => {
        const activeDays = el.activeDays;
        if (activeDays.find((a: any) => a.includes(today.toUpperCase()))) {
          return el;
        }
        return;
      });
      setSearchResult(result);
    } else {
      setSearchResult(data);
    }
  };
  const handleClear = () => {
    setSearchResult(data);
  };

  const shopIds = [
    { label: "ett", value: "ett" },
    { label: "tva", value: "tva" },
    { label: "tre", value: "tre" },
  ];
  const names = ["a mEnY 3", "b meNy 2", "d MENY 4", "q meny 1"];

  return (
    <div className="ProductFilter">
      <div className="filter-e-w">
        <label className="Dd-label">Välj restaurang</label>
        <DropDown
          onFocus={""}
          baseClassName={"Dropdown"}
          controlClassName={"Dropdown"}
          placeholderClassName={""}
          menuClassName={""}
          arrowClassName={""}
          className={""}
          disabled={""}
          onChange={(e: { value: string; label: string }) =>
            handleFilterName(e)
          }
          arrowClosed={""}
          arrowOpen={""}
          options={[names[0], names[1], names[2], names[3]]}
          value={""}
          placeholder={"Restaurang..."}
          assignedSlot={""}
        />
        <form onSubmit={handleSearch}>
          <Input
            placeholder="..."
            key="restaurant"
            id="restaurant"
            type="text"
            onChangeHandler={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleInput(event)
            }
            hasLabel={true}
            hasButton={true}
            buttonHandler={handleSearch}
            labelText="Sök restaurang"
            name="name"
            value={name}
          />
        </form>
      </div>
      <div className="filter-e-w">
        <label className="Dd-label">Välj kategori</label>
        <MultiSelect
          options={shopIds}
          value={selected}
          onChange={handleFilterId}
          labelledBy={"Välj restaurang"}
        />
      </div>
      <div className="radiogroup filter-e-w">
        <label className="Dd-label">Visa bara dagens meny</label>
        <div>
          <Toggle
            toggleState={toggleState}
            clickHandler={() => handleRadio()}
          />
        </div>
      </div>

      <Button
        style={{ alignSelf: "flex-end" }}
        type="button"
        onClick={handleClear}
        secondary={false}
      >
        Rensa
      </Button>
    </div>
  );
}

export default ProductFilter;

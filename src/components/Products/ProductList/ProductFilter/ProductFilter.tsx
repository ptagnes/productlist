import React from "react";
import DropDown from "../../../../utils/Dropdown/Dropdown";
import Input from "../../../../utils/FormElements/Input";
import { Button } from "../../../../utils/Buttons/Button";
import Toggle from "../../../../utils/ToggleSwitch/ToggleSwitch";
import MultiSelect from "react-multi-select-component";
import "./ProductFilter.css";
const options = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    image: { avatar: true, src: "/images/avatar/small/jenny.jpg" },
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
    image: { avatar: true, src: "/images/avatar/small/elliot.jpg" },
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano",
    value: "Stevie Feliciano",
    image: { avatar: true, src: "/images/avatar/small/stevie.jpg" },
  },
  {
    key: "Christian",
    text: "Christian",
    value: "Christian",
    image: { avatar: true, src: "/images/avatar/small/christian.jpg" },
  },
  {
    key: "Matt",
    text: "Matt",
    value: "Matt",
    image: { avatar: true, src: "/images/avatar/small/matt.jpg" },
  },
  {
    key: "Justen Kitsune",
    text: "Justen Kitsune",
    value: "Justen Kitsune",
    image: { avatar: true, src: "/images/avatar/small/justen.jpg" },
  },
];

function ProductFilter({
  data,
  setSearchResult,
  setReset,
}: {
  data: {
    name: string;
    activeDays: string[];
    shopIds: string[];
    img: string;
    categories: {
      name: string;
      products: {
        name: string;
        price: number;
      }[];
    }[];
  }[];
  setSearchResult: React.Dispatch<any>;
  setReset: React.Dispatch<any>;
}) {
  const [selected, setSelected] = React.useState<any>([]);
  const [name, setName] = React.useState<string>("");
  const [selectedDropdown, setselectedDropdown] = React.useState<string>("");
  const [active, setActive] = React.useState<boolean>(false);
  const [toggleState, setToggleState] = React.useState("off");
  const handleFilterName = (e: { value: string; label: string }) => {
    setselectedDropdown(e.value);
    const result = data.filter((el: any) => {
      return el.name === e.value;
    });
    setSearchResult(result);
    setReset(true);
  };
  const handleSearch = (e: any) => {
    e.preventDefault();
    const query = name.toLowerCase();
    const result = data.filter((el: any) => {
      return el.name.toLowerCase().includes(query);
    });
    setSearchResult(result);
    setReset(true);
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
        res.push(el);
        return el;
      }
    });
    if (res.length !== 0) {
      setSearchResult(res);
    } else {
      setSearchResult(data);
    }
    setReset(true);
  };
  const handleRadio = () => {
    setActive(!active);
    const n = new Date().toLocaleString("en-us", { weekday: "long" });
    const today = n.toLowerCase();
    setToggleState(toggleState === "off" ? "on" : "off");
    if (!active) {
      const result = data.filter((el: any) => {
        const activeDays = el.activeDays;
        if (activeDays.find((a: any) => a.includes(today.toUpperCase()))) {
          return el;
        }
        return;
      });
      setSearchResult(result);
      setReset(true);
    } else {
      setSearchResult(data);
      setReset(true);
    }
  };
  const handleClear = () => {
    setSearchResult(data);
    setReset(true);
    setToggleState("off");
    setName("");
    setselectedDropdown("");
    setSelected([]);
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
          value={selectedDropdown}
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
          className="multiselect"
          disableSearch={true}
          overrideStrings={{
            selectSomeItems: "Välj en eller fler kategorier...",
            allItemsAreSelected: "Alla kategorier är valda",
            selectAll: "Välj alla",
            search: "Sök",
          }}
        />
      </div>
      <div className="radiogroup filter-e-w">
        <label className="Dd-label">Visa dagens meny</label>
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

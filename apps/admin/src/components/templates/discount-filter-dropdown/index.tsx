import clsx from "clsx"
import { useEffect, useState } from "react"
import FilterDropdownContainer from "../../molecules/filter-dropdown/container"
import FilterDropdownItem from "../../molecules/filter-dropdown/item"
import SaveFilterItem from "../../molecules/filter-dropdown/save-field"
import TabFilter from "../../molecules/filter-tab"
import PlusIcon from "../../fundamentals/icons/plus-icon"

const dynamicFilters = ["normal", "dynamic"]

const dateFilters = [
  "is in the last",
  "is older than",
  "is after",
  "is before",
  "is equal to",
]

const DiscountFilters = ({
  tabs,
  activeTab,
  onTabClick,
  onSaveTab,
  onRemoveTab,
  filters,
  submitFilters,
  clearFilters,
}) => {
  const [tempState, setTempState] = useState(filters)
  const [name, setName] = useState("")

  const handleRemoveTab = (val) => {
    if (onRemoveTab) {
      onRemoveTab(val)
    }
  }

  const handleSaveTab = () => {
    if (onSaveTab) {
      onSaveTab(name, tempState)
    }
  }

  const handleTabClick = (tabName: string) => {
    if (onTabClick) {
      onTabClick(tabName)
    }
  }

  useEffect(() => {
    setTempState(filters)
  }, [filters])

  const onSubmit = () => {
    submitFilters(tempState)
  }

  const onClear = () => {
    clearFilters()
  }

  const setSingleFilter = (filterKey, filterVal) => {
    setTempState((prevState) => ({
      ...prevState,
      [filterKey]: filterVal,
    }))
  }

  const numberOfFilters = Object.entries(filters).reduce(
    (acc, [key, value]) => {
      if (value?.open) {
        acc = acc + 1
      }
      return acc
    },
    0
  )

  return (
    <div className="flex space-x-1">
      <FilterDropdownContainer
        submitFilters={onSubmit}
        clearFilters={onClear}
        triggerElement={
          <button
            className={clsx(
              "flex rounded-rounded items-center space-x-1 focus-visible:outline-none focus-visible:shadow-input focus-visible:border-violet-60"
            )}
          >
            <div className="flex items-center h-6 px-2 border rounded-rounded bg-grey-5 border-grey-20 inter-small-semibold">
              Filters
              <div className="flex items-center ml-1 rounded text-grey-40">
                <span className="text-violet-60 inter-small-semibold">
                  {numberOfFilters ? numberOfFilters : "0"}
                </span>
              </div>
            </div>
            <div className="flex items-center p-1 border rounded-rounded bg-grey-5 border-grey-20 inter-small-semibold">
              <PlusIcon size={14} />
            </div>
          </button>
        }
      >
        <FilterDropdownItem
          filterTitle="Types"
          options={dynamicFilters}
          filters={tempState.isDynamic.filter}
          open={tempState.isDynamic.open}
          setFilter={(val) => setSingleFilter("isDynamic", val)}
        />
        {/* Backend support missing
        <FilterDropdownItem
          filterTitle="Date"
          options={dateFilters}
          filters={tempState.date.filter}
          open={tempState.date.open}
          setFilter={(val) => setSingleFilter("date", val)}
      /> */}
        <SaveFilterItem
          saveFilter={handleSaveTab}
          name={name}
          setName={setName}
        />
      </FilterDropdownContainer>
      {tabs &&
        tabs.map((t) => (
          <TabFilter
            key={t.value}
            onClick={() => handleTabClick(t.value)}
            label={t.label}
            isActive={activeTab === t.value}
            removable={!!t.removable}
            onRemove={() => handleRemoveTab(t.value)}
          />
        ))}
    </div>
  )
}

export default DiscountFilters

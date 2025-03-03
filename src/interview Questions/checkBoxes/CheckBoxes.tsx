import { useState } from "react";
const CheckBoxes = () => {
    const checkBoxItems = ["dogs", "cats", "cows", "lions", "GOAT"]

    const [checkedItems, setCheckedItems] = useState(
        checkBoxItems.reduce((acc, item) => ({ ...acc, [item]: false }), {})
    )

    function handleCheckbox(e) {
        const { value, checked } = e.target;
        console.log(`value : ${value} and checked : ${checked}`)
        setCheckedItems((prev) => ({ ...prev, [value]: checked }))
    }

    function handleAllSelect() {
        const allSelected = Object.values(checkedItems).every(Boolean);
        console.log(allSelected);
        setCheckedItems(
            checkBoxItems.reduce((acc, item) => ({ ...acc, [item]: !allSelected }), {})
        )
    }
    return (
        <>
            {
                checkBoxItems.map((item) => (
                    <label key={item}>
                        <input
                            type="checkbox"
                            value={item}
                            checked={checkedItems[item]}
                            onChange={handleCheckbox}
                        />
                        {item}
                    </label>
                ))
            }
            <br />
            <button onClick={handleAllSelect}>Select All</button>
        </>
    )
}

export default CheckBoxes;
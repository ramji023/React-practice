

export interface PetData {
    animal: string;
    fact: string;
    image: string;
}

export interface TabButtonsProps {
    petData: PetData[];
    activeTab: number;
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

const TabButtons: React.FC<TabButtonsProps> = ({ petData, activeTab, setActiveTab }) => {
    return (
        <>
            {
                petData.map((pets, index) => (
                    <button key={index} onClick={()=>setActiveTab(index)}>
                        {pets.animal}
                    </button>
                ))
            }
        </>


    )
}

export default TabButtons
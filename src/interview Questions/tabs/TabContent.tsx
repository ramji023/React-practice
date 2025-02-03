
export interface PetData {
    animal: string;
    fact: string;
    image: string;
}

export interface TabButtonsProps {
    petData: PetData[];
    activeTab: number;
}

const TabContent: React.FC<TabButtonsProps> = ({ petData, activeTab }) => {
    console.log("active tab : ", activeTab);
    return (
        <>
            {petData.map((pets, index) =>
                index === activeTab && (
                    <div key={index}>
                        <p>{pets.fact}</p>
                    </div>
                )
            )}
        </>


    )
}

export default TabContent;
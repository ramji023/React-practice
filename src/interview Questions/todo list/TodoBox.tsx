interface TodoBoxProps {
    tasks: string[];
}

const TodoBox = ({ tasks }: TodoBoxProps) => {
   
    return (
        <>
            {tasks.map((task: string, index: number) => (
                <li key={index}>
                    {task}
                </li>
            ))}
        </>
    )
}
export default TodoBox;
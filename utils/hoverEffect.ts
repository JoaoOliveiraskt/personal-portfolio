
const HandleOnMouseMove = (
  e: React.MouseEvent<HTMLDivElement>,
  setMousePosition: React.Dispatch<
    React.SetStateAction<{ x: number; y: number }>
  >
) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  setMousePosition({ x, y });
};

export default HandleOnMouseMove;

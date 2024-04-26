const Star = ({ click, mouse, state, index, divClick, ishover }) => {
  return (
    <>
      <div
        onClick={click}
        onMouseEnter={mouse}
        style={{
          height: "30px",
          width: "30px",
          border: "2px solid red",

          ...(index <= state && index > divClick
            ? { backgroundColor: "red" }
            : divClick
              ? index <= divClick
                ? { backgroundColor: "red" }
                : { backgroundColor: "" }
              : { backgroundColor: "" }),
        }}
      ></div>
    </>
  );
};
export default Star;

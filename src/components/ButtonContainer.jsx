import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({ onButtonClick }) => {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonName.map((buttonName) => (
        <button
          key={buttonName}
          onClick={() => {
            onButtonClick(buttonName);
          }}
          className={styles.button}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;

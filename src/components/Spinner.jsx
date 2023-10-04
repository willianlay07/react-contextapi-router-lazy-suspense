import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Spinner;

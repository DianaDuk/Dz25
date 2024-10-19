export function ResetButton({ onReset }) {
    return (
      <button className="reset-btn" onClick={onReset}>
        Очистити результати
      </button>
    );
  }
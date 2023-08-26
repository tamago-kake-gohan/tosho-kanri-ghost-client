import React, { useState, useRef, useEffect } from "react";
import Scanner from "./Scanner";
import Styles from "./ScannerWrapper.module.scss";

type props = {
  callback: (result: string | undefined) => void;
};

const ScannerWrapper = ({ callback }: props) => {
  const [state, setState] = useState(0);
  const scannerRef = useRef(null);

  useEffect(() => {
    setState(1);
  }, []);

  const onDetect = (val: string) => {
    setState(2);
    callback(val);
  };
  const cancel = () => {
    setState(3);
    callback(undefined);
  };

  return (
    <div className={Styles.wrapper}>
      <div ref={scannerRef} className={Styles.view}>
        <div className={Styles.message}>
          <p>読み込み中...</p>
          <p>カメラの使用を許可してください</p>
        </div>
        <canvas className="drawingBuffer" width="640" height="480" />
        {state === 1 ? (
          <Scanner scannerRef={scannerRef} onDetected={onDetect} />
        ) : null}
      </div>
      <div className={Styles.control}>
        <button onClick={cancel} className={Styles.button}>
          キャンセル
        </button>
      </div>
    </div>
  );
};

export { ScannerWrapper };

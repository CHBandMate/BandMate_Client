import { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

const PopupWindow = ({ onClose, children, width = 420, height = 600 }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    popupRef.current = window.open(
      "",
      "_blank",
      `width=${width}, height=${height},left=200,top=200`
    );

    if (popupRef.current) {
      popupRef.current.document.write(`
        <html>
            <head>
              <title>팝업</title>
            </head>
            <body>
                <div id="popup-root"></div>
            </body>
        </html>
      `);
      popupRef.current.document.close();

      const popupRoot = popupRef.current.document.getElementById("popup-root");

      if (popupRoot) {
        ReactDOM.createRoot(popupRoot).render(children);
      }
    }

    const handleUnload = () => {
      onClose();
    };

    popupRef.current.addEventListener("beforeunload", handleUnload);

    return () => {
      popupRef.current.removeEventListener("beforeunload", handleUnload);
      popupRef.current.close();
    };
  }, [onClose, children, width, height]);

  return null;
};

export default PopupWindow;

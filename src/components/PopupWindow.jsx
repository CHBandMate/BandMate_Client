import { useEffect, useRef } from "react";

const PopupWindow = ({ onCloes, children, width = 420, height = 600 }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    popupRef.current = window.open(
      "",
      "_black",
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
      ReactDOM.createRoot(popupRoot).render(children);
    }
    const handleUnload = () => {
      onClose();
    };
    popupRef.current.addEventListener("beforeunload", handleUnload);
    return () => {
      popupRef.current.removeEventListener("beforeunload", handleUnload);
      popupRef.current.cloes();
    };
  });

  return null;
};

export default PopupWindow;

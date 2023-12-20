import { CSSProperties, useState } from 'react';
import './App.css';
import { MathInput } from './MathInput/MathInput';

function App() {
  // const [keyboardActive, setKeyboardActive] = useState(false);
  const [zoom, setZoom] = useState(1);

  // useEffect(() => {
  //   if (keyboardActive) {
  //     console.log('showing keyboard');
  //     console.log('show before', window.mathVirtualKeyboard.visible);
  //     window.mathVirtualKeyboard.show();
  //     console.log('show after', window.mathVirtualKeyboard.visible);
  //     // window.mathVirtualKeyboard.visible;
  //   } else {
  //     console.log('hiding keyboard');
  //     console.log('hiding before', window.mathVirtualKeyboard.visible);
  //     window.mathVirtualKeyboard.hide();
  //     console.log('hiding after', window.mathVirtualKeyboard.visible);
  //   }
  // }, [keyboardActive]);

  // function handleToggleKeyboard() {
  //   if (!keyboardActive) {
  //     console.log('showing keyboard');
  //     console.log('show before', window.mathVirtualKeyboard.visible);
  //     window.mathVirtualKeyboard.visible = true;
  //     console.log('show after', window.mathVirtualKeyboard.visible);
  //     // window.mathVirtualKeyboard.visible;
  //   } else {
  //     console.log('hiding keyboard');
  //     console.log('hiding before', window.mathVirtualKeyboard.visible);
  //     window.mathVirtualKeyboard.visible = false;
  //     console.log('hiding after', window.mathVirtualKeyboard.visible);
  //   }
  //   setKeyboardActive(!keyboardActive);
  // }

  return (
    <div className="flex flex-col gap-6 bg-stone-50 fixed inset-0 overflow-auto items-center ">
      <div className="flex justify-around w-[1000px] p-4">
        {/* <div className="flex gap-2">
          <input
            type="checkbox"
            id="keyboardToggle"
            checked={keyboardActive}
            // onChange={handleToggleKeyboard}
          />
          <label htmlFor="keyboardToggle">Equation Editor</label>
        </div> */}
        <div className="flex items-center gap-2">
          <label htmlFor="zoomRange">Zoom:</label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
          />
          <div className="font-bold text-sm w-10">x{zoom}</div>
        </div>
      </div>
      <div
        style={
          {
            '--zoom': zoom,
          } as CSSProperties
        }
        className="border p-4 h-[1000px] w-[1000px] flex flex-col gap-10 bg-stone-100"
      >
        <MathInput width="15ch" />
        <MathInput width="30ch" isTall />
      </div>
    </div>
  );
}

export default App;

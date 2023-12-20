/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties, useLayoutEffect, useRef } from 'react';
import {
  MathfieldElement,
  // MathfieldElementAttributes,
  MathfieldOptions,
} from 'mathlive';

export type MathInputProps = {
  options?: Partial<MathfieldOptions>;
  value?: string;
  onChange?: any;
  onBlur?: any;
  className?: string;
  keyboardRef?: React.RefObject<HTMLElement>;
  isTall?: boolean;
  width?: CSSProperties['width'];
};

export function MathInput({ isTall, width }: MathInputProps) {
  const mathfieldRef = useRef<MathfieldElement>(null);

  useLayoutEffect(() => {
    if (mathfieldRef.current) {
      const mf = mathfieldRef.current;
      // mathfieldRef.current.value = value;
      // mathfieldRef.current.mathVirtualKeyboardPolicy = 'auo';
      // mathfieldRef.current.macros = {};
      mf.popoverPolicy = 'off';
      // mathfieldRef.current.environmentPopoverPolicy = 'off';
      // mathfieldRef.current.keyboa
      mf.mathVirtualKeyboardPolicy = 'manual';
      mf.addEventListener('focusin', () => window.mathVirtualKeyboard.show());
      mf.addEventListener('focusout', () => window.mathVirtualKeyboard.hide());
    }
  }, []);

  function handleChange() {
    if (!mathfieldRef.current) return;
  }

  // function handleFocus(event: React.FocusEvent<MathfieldElementAttributes>) {
  //   if (!mathfieldRef.current) return;
  //   // mathfieldRef.current.mathVirtualKeyboard.visible = true;
  //   event.preventDefault();
  //   event.stopPropagation();
  //   // window.mathVirtualKeyboard.show();
  // }

  // function handleBlur(event: React.FocusEvent<MathfieldElementAttributes>) {
  //   // prevent the keyboard from hiding on blur
  //   event.preventDefault();
  //   event.stopPropagation();
  // }

  return (
    <math-field
      className="math-field-inline"
      ref={mathfieldRef}
      onChange={handleChange}
      onInput={handleChange}
      // onFocus={handleFocus}
      // onBlur={handleBlur}
      data-tall={isTall}
      style={{
        width,
      }}
    />
  );
}

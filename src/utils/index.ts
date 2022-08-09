import * as EPToolkit from "./EPToolkit";

export interface PrinterOptions {
  beep?: boolean;
  cut?: boolean;
  tailingLine?: boolean;
  encoding?: string;
}

export const textTo64Buffer = (text: string, opts: PrinterOptions) => {
  const defaultOptions = {
    beep: false,
    cut: false,
    tailingLine: false,
    encoding: "UTF8"
  };

  const options = {
    ...defaultOptions,
    ...opts
  };
  return EPToolkit.exchange_text(text, options);
};

export const billTo64Buffer = (text: string, opts: PrinterOptions) => {
  const defaultOptions = {
    beep: true,
    cut: true,
    encoding: "UTF8",
    tailingLine: true
  };
  const options = {
    ...defaultOptions,
    ...opts
  };
  return EPToolkit.exchange_text(text, options);
};

import React, { useRef, useEffect } from "react";
import Prism from "../prismSetup";
import "./codeEditor.css";

type Props = {
  value: string;
  onValueChange: (value: string) => void;
  highlight: (value: string) => string | React.ReactNode;
  padding?:
    | number
    | string
    | {
        top?: number | string;
        right?: number | string;
        bottom?: number | string;
        left?: number | string;
      };
  textareaId?: string;
  textareaClassName?: string;
  style?: React.CSSProperties;
};

const CodeEditor: React.FC<Props> = ({
  value,
  onValueChange,
  highlight,
  padding = 0,
  textareaId,
  textareaClassName,
  style,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (preRef.current) {
      Prism.highlightElement(preRef.current);
    }
  }, [value]);

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onValueChange(event.target.value);
  };

  const contentStyle = {
    padding:
      typeof padding === "object"
        ? `${padding.top ?? 0}px ${padding.right ?? 0}px ${
            padding.bottom ?? 0
          }px ${padding.left ?? 0}px`
        : `${padding}px`,
  };

  const highlighted = highlight(value);

  return (
    <div className="code-editor" style={{ ...styles.container, ...style }}>
      <pre
        ref={preRef}
        className="language-javascript"
        style={{ ...styles.editor, ...styles.highlight, ...contentStyle }}
        dangerouslySetInnerHTML={{
          __html: typeof highlighted === "string" ? highlighted + "<br />" : "",
        }}
      />
      <textarea
        ref={textareaRef}
        className={textareaClassName}
        id={textareaId}
        value={value}
        onChange={handleCodeChange}
        style={{ ...styles.editor, ...styles.textarea, ...contentStyle }}
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        data-gramm="false"
      />
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    textAlign: "left",
    boxSizing: "border-box",
    padding: 0,
    overflow: "hidden",
  },
  textarea: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    resize: "none",
    color: "inherit",
    overflow: "hidden",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    WebkitTextFillColor: "transparent",
  },
  highlight: {
    position: "relative",
    pointerEvents: "none",
  },
  editor: {
    margin: 0,
    border: 0,
    background: "none",
    boxSizing: "inherit",
    display: "inherit",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontStyle: "inherit",
    fontVariantLigatures: "inherit",
    fontWeight: "inherit",
    letterSpacing: "inherit",
    lineHeight: "inherit",
    tabSize: "inherit",
    textIndent: "inherit",
    textRendering: "inherit",
    textTransform: "inherit",
    whiteSpace: "pre-wrap",
    wordBreak: "keep-all",
    overflowWrap: "break-word",
  },
} as const;

export default CodeEditor;

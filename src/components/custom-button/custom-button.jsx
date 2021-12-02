import "./custom-button.scss";

export default function CustomButton({
  children,
  isGoogleSignIn = false,
  inverted = false,
  ...otherProps
}) {
  return (
    <button
      className={`${inverted ? "inverted" : ""}
      ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

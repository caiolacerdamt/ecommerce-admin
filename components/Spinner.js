import { BarLoader } from "react-spinners";

export default function Spinner({ fullWidth }) {
  if (fullWidth) {
    return (
      <div className="w-full flex justify-center">
        <BarLoader color={"#1E3A8A"} speedMultiplier={2} />
      </div>
    );
  }
  return <BarLoader color={"#1E3A8A"} speedMultiplier={2} />;
}

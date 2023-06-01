import { IStar } from "../models/IStar";
import Star from "./Star";
import { v4 as uuidv4 } from "uuid";

export default function Stars({ count }: IStar) {
  const validity = count >= 1 && count <= 5 && typeof count === "number";

  return validity ? (
    <ul className="card-body-stars">
      {Array.from({ length: count }, () => {
        return <Star key={uuidv4()} />;
      })}
    </ul>
  ) : null;
}

import { getImageUrl } from "../utils";
export default function Avatar({ person, size }) {
  return (
    <img
      width={size}
      height={size}
      src={getImageUrl(person)}
      alt={`Avatar for ${person.name}`}
      className="avatar"
      title={`Avatar for ${person.name}`}
    />
  );
}

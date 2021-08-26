import { Layout } from "../../../components/Layout";
import { useUserSelect } from "./UserSelect.useUserSelect";
import { ItemPreview } from "../../../components/ItemPreview";

export const UserSelect = () => {
  const { localUsers } = useUserSelect();

  return (
    <Layout
      secondary={["Cancel", "/"]}
      primary={["User not listed", "/auth/signIn"]}
      title="Sign In"
    >
      {localUsers.map(({ id, image, name, activity }, index) => (
        <ItemPreview
          first={index < 1}
          key={id}
          tittle={name}
          image={URL.createObjectURL(image)}
        />
      ))}
    </Layout>
  );
};

export default UserSelect;

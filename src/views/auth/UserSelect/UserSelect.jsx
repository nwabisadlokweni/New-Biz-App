import React from "react";
import { Layout } from "../../../components/Layout";
import { useUserSelect } from "./UserSelect.useUserSelect";
import { ItemPreview } from "../../../components/ItemPreview";
import { format as formatDate } from "date-fns";

export const UserSelect = () => {
  const { localUsers, logUserIn } = useUserSelect();

  return (
    <Layout
      secondary={["Cancel", "/"]}
      primary={["User not listed", "/auth/signIn"]}
      title="Sign In"
    >
      {localUsers.map(({ id, image, name, activity, type }, index) => {
        const dateString = !activity
          ? "N/A"
          : formatDate(activity, "d MM yyyy");

        return (
          <ItemPreview
            first={index < 1}
            key={id}
            tittle={name}
            image={URL.createObjectURL(image)}
            helper={`Last Activity: ${dateString}`}
            action={() => logUserIn(id, type)}
          />
        );
      })}
    </Layout>
  );
};

export default UserSelect;

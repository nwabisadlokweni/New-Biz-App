import { Layout } from "../../../components/Layout";
import { useUserSelect } from "./UserSelect.useUserSelect";

// import React from 'react';

export const UserSelect = () => {
  const { localUsers } = useUserSelect();

  return (
    <Layout
      secondary={["Cancel", "/"]}
      primary={["User not listed", "/auth/signIn"]}
      title="Sign In"
    >
      {localUsers.map(({ id, email }) => (
        <div>{id}: {email}</div>
      ))}
    </Layout>
  )}

export default UserSelect

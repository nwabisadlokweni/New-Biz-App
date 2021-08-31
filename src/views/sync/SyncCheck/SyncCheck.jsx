import React from "react";
import { Redirect } from 'react-router-dom'
// import { CustomIcon } from "../../../components/CustomIcon";
import { Layout } from "../../../components/Layout";
import { Text } from "../../../components/Text";
import { useSyncCheck } from "./SyncCheck.useSyncCheck";

export const SyncCheck = () => {
  const { online, user, cancelVerification } = useSyncCheck();

  if (!user) {
    return null;
  }
  if (user.type === 'online'){
    return <Redirect to="/items/list" />
  }

  if (user.type === "verifying") {
    return (
      <Layout
        tittle="Email Sent"
        inverse
        padded
        primary={["Remind me Later", "/items/list"]}
        secondary={["Cancel Varification", cancelVerification]}
      >
        {/* <CustomIcon image="email" size="l" inverse /> */}
        <Text size='m' inverse>
          An email has been sent to '<em>{user.email}</em>'
     Please check your inbox or span folder and click
     the link inside the email.
        </Text>
      </Layout>
    );
    }

  if (!online) {
  return (
    <Layout
      tittle="Offline"
      inverse
      padded
      primary={["Remind me Later", "/items/list"]}
    >
      {/* <CustomIcon image="noCloud" size="l" inverse /> */}
      <Text size='m' inverse>
        Data syncing is disabled but will be propmted
        again to sync when online.
      </Text>
    </Layout>
  );
  }

  return (
    <Layout
      tittle="Set Up Sync"
      inverse
      secondary={["Cancel", "/items/list"]}
      primary={["Cantinue", "#"]}
    >
      {/* <CustomIcon image="activeCloud" size="m" inverse /> */}
      <Text size='l' inverse>
        We recommend that you set up data on your profile. This allows you to
        back up and sync data across devices
      </Text>
    </Layout>
  );
};

export default SyncCheck;
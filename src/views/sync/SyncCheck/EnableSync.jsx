import React from "react";
import { CustomIcon } from "../../../components/CustomIcon";
import { Layout } from "../../../components/Layout";
import { Text } from "../../../components/Text";
import { useEnableSync } from "./EnableSync.useEnableSync";

export const EnableSync = () => {
  const { online } = useEnableSync();
  console.log(online);

  if (!online) {
  return (
    <Layout
      tittle="Offline"
      inverse
      primary={["Remind me Later", "/items/list"]}
    >
      <CustomIcon image="noCloud" size="l" inverse />
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
      <CustomIcon image="activeCloud" size="m" inverse />
      <Text size='l' inverse>
        We recommend that you set up data on your profile. This allows you to
        back up and sync data across devices
      </Text>
    </Layout>
  );
};

export default EnableSync;

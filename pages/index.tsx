import React, { useMemo } from "react";
import { RoomProvider, useOthers, useSelf } from "../liveblocks.config";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { getServerSession } from "./api/auth/getServerSession";
import { signOut } from "next-auth/react";
// import styles from "./index.module.css";
import Avatar from "@/components/users/Avatar";
import { Button } from "@/components/ui/button";


function Example() {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > 3;

  return (
    <div className="flex h-screen flex-col place-content-center place-items-center space-y-5">
      <div className="flex w-full select-none place-content-center place-items-center">
        <div className="flex pl-3">
          {users.slice(0, 3).map(({ connectionId, info }) => {
            return (
              <Avatar
                key={connectionId}
                name={Avatar.name}
              />
            );
          })}

          {hasMoreUsers && (
            // <div className={styles.more}>+{users.length - 3}</div>
          )}

          {currentUser && (
            <div className="relative ml-8 first:ml-0">
             <Avatar name={Avatar.name}/>
            </div>
          )}
        </div>
      </div>
      <div>
        <Button onClick={() => signOut()}>Sign Out</Button>
      </div>
    </div>
  );
}

// export default function Page() {
//   const roomId = useOverrideRoomId("nextjs-live-avatars");
//
//   return (
//     <RoomProvider id={roomId} initialPresence={{}}>
//       <Example />
//     </RoomProvider>
//   );
// }

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin",
      },
    };
  }

  return {
    props: {},
  };
};
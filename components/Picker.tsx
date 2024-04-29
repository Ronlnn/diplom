// "use client"
//
// import React, { ChangeEvent, ReactNode, forwardRef, useEffect } from 'react';
// import useDrivePicker from "react-google-drive-picker";
// import type { FC } from 'react';
// import { Button } from "@/components/ui/button";
//
// function Picker() {
//
//   const [openPicker, data, authResponse] = useDrivePicker();
//   const handleOpenPicker = () => {
//     openPicker({
//       const clientId: string = process.env.GOOGLE_CLIENT_ID !== undefined ? process.env.GOOGLE_CLIENT_ID : "",
//     const developerKey: string = process.env.GOOGLE_API_KEY !== undefined ? process.env.GOOGLE_API_KEY : "",
//     viewId: "DOCS",
//       token: "ya29.a0Ad52N38xeGRVD3bO0l00iQsAA8cWLxu18NedcveW8GyQcrl6EJXsMaRpGultWjeJLL7vKfAbsENYk7h-kvK4Zt4wESlkXjpVACYMaFlTujHVUctds2Seo2hPD5W25rnIOTcz1CHR9EpTm-bJxzxJsAd4AdkXmKslbaVYaCgYKAU0SARESFQHGX2Mii3oJXK9nly_XQOwPRXuJpA0171", // ваш токен
//       showUploadFolders: true,
//       showUploadView: true,
//       supportDrives: true,
//       multiselect: true,
//     })
//   }
//
//   useEffect(() => {
//     if (data) {
//       data.docs.map((i) => console.log(i))
//     }
//   }, [data])
//
//   return (
//     <Button onClick={handleOpenPicker}>
//       Picker
//     </Button>
//   )
// }
//
// export default Picker;


"use client";

import React, { ChangeEvent, ReactNode, forwardRef, useEffect } from 'react';
import useDrivePicker from "react-google-drive-picker";
import type { FC } from 'react';
import { Button } from "@/components/ui/button";

function Picker() {
  // Добавляем "useClient" для пометки компонента как клиентского
  // useClient();

  const [openPicker, data, authResponse] = useDrivePicker();
  const handleOpenPicker = () => {
    openPicker({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      developerKey: process.env.GOOGLE_API_KEY || "",
      viewId: "DOCS",
      token: "ya29.a0Ad52N38NQsJ8VVkaeEuXdC5EGiG5WR_r1HyeT7rcyAbUf9KoLYxc475569VRIA6QV477BzHmEY9vStjTqH8VBGGvPiRJz0kY7o3b0nTfmTVA6cYSBGYBqwLqOVcPrMnj0wob0O_OjZLbtsLcV_GVEs3deNZm2IbHPP16aCgYKAdQSARESFQHGX2MiJjeWw39l-C9rRkPiPeiGMg0171",
      showUploadFolders: true,
      showUploadView: true,
      supportDrives: true,
      multiselect: true,
      // Добавляем callbackFunction
      callbackFunction: (data) => {
        // Обработка данных из Google Picker
        console.log(data);
      }
    })
  }

  useEffect(() => {
    if (data) {
      data.docs.map((i) => console.log(i))
    }
  }, [data])

  return (
    <header className="flex gap-4 p-1 bg-gradient-to-b from-white to-gray-200 shadow">
    <Button onClick={handleOpenPicker}>
      Picker
    </Button>
    </header>
  )
}

export default Picker;


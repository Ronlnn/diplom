import { exportToPdf } from './exportToPdf';
import { authorize, google } from 'googleapis';

// Подставьте свои учетные данные для аутентификации
const credentials = {
  client_id: process.env.GOOGLE_CLIENT_ID,
  client_secret: process.env.GOOGLE_CLIENT_SECRET,
  redirect_uris: ['http://localhost:3000/oauth2callback'],
};

// Путь к файлу, который вы хотите загрузить на Google Диск
const filePath = '/usr/downloads/';

// Функция для аутентификации и загрузки файла на Google Диск
export const exportToGoogleDrive = async () => {
  try {
    // Создание OAuth2 клиента
    const oAuth2Client = new google.auth.OAuth2(
      credentials.client_id,
      credentials.client_secret,
      credentials.redirect_uris[0]
    );

    // Запрос на получение токена доступа
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/drive.file'],
    });
    console.log('Authorize this app by visiting this URL:', authUrl);

    // Получение токена доступа
    const code = 'YOUR_AUTHORIZATION_CODE'; // Вам нужно получить этот код после аутентификации
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    // Создание экземпляра Google Drive API
    const drive = google.drive({ version: 'v3', auth: oAuth2Client });

    // Загрузка файла на Google Диск
    const res = await drive.files.create({
      requestBody: {
        name: 'canvas.pdf', // Имя загружаемого файла
      },
      media: {
        mimeType: 'application/pdf',
        body: filePath, // Путь к файлу на вашем сервере
      },
    });
    console.log('File uploaded:', res.data);
  } catch (err) {
    console.error('Error uploading file:', err);
  }
};

// Пример использования функции экспорта в PDF и загрузки на Google Диск
export const exportAndUpload = async () => {
  await exportToPdf(); // Экспортируем макет в PDF
  await exportToGoogleDrive(); // Загружаем PDF на Google Диск
};



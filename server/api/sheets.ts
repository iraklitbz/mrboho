import { defineEventHandler } from 'h3';
import { getGoogleSheetsClient } from '~/utils/googleSheets';

export default defineEventHandler(async () => {
    console.log("Google Sheets:");
});

/**
 * ============================================================================
 * VKR CASHEW & DRY FRUITS — Google Apps Script Web App
 * Handles: Contact Form, Wholesale Form, and Get Best Price Modal
 * ============================================================================
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet
 * 2. Click "Extensions" > "Apps Script"
 * 3. Delete everything in the editor, and paste this entire file
 * 4. Click "Save" (disk icon or Ctrl+S / Cmd+S)
 * 5. TO TEST: Select "testScript" from the function dropdown at the top and click "Run".
 *    Grant permissions when prompted. A test row will appear in your Google Sheet!
 * 6. TO DEPLOY:
 *    - Click "Deploy" (top right blue button) > "New deployment"
 *    - Click the gear icon next to "Select type" > select "Web app"
 *    - Description: "VKR Website Forms v1"
 *    - Execute as: "Me (your email)"
 *    - Who has access: "Anyone"  <-- CRITICAL! Must be "Anyone", NOT "Only myself"
 *    - Click "Deploy"
 *    - Copy the "Web app URL" (it ends with /exec)
 * 7. Paste that Web App URL into your website's .env file:
 *    VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/.../exec
 * 
 * ============================================================================
 */

// If you created this script inside the Google Sheet (via Extensions > Apps Script),
// SPREADSHEET_ID can be left empty. It will use the sheet automatically!
// If you created a standalone script at script.google.com, paste your Sheet ID here:
var SPREADSHEET_ID = ''; 

// Name of the tab in your spreadsheet (will be created automatically if it doesn't exist)
var SHEET_NAME = 'Enquiries';

/**
 * Main Web App POST handler called by the website
 */
function doPost(e) {
  // If tested directly from Apps Script editor by clicking "Run", execute test
  if (!e || (!e.postData && !e.parameter)) {
    return testScript();
  }

  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
  } catch (lockErr) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: 'Server is busy. Please try again.' })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var rawData = e.postData ? e.postData.contents : null;
    var data = {};

    if (rawData) {
      try {
        data = JSON.parse(rawData);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    // Required fields validation
    var name = (data.name || data.fullName || '').toString().trim();
    var phone = (data.phone || data.phoneNumber || '').toString().trim();

    if (!name || !phone) {
      return ContentService.createTextOutput(
        JSON.stringify({
          status: 'error',
          message: 'Validation failed: Name and Phone are required.',
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Connect to Google Sheet
    var ss = SPREADSHEET_ID
      ? SpreadsheetApp.openById(SPREADSHEET_ID)
      : SpreadsheetApp.getActiveSpreadsheet();

    if (!ss) {
      throw new Error('Unable to find target Google Sheet. Please run this script from Extensions > Apps Script inside your Google Sheet, or set SPREADSHEET_ID.');
    }

    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    // Ensure header row exists
    if (sheet.getLastRow() === 0) {
      var headers = [
        'Timestamp',
        'Form Type',
        'Name',
        'Business Name',
        'Phone',
        'Email',
        'Location',
        'Product',
        'Category',
        'Quantity',
        'Subject',
        'Message',
        'Source',
      ];
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
      sheet.getRange(1, 1, 1, headers.length).setBackground('#7b2c15');
      sheet.getRange(1, 1, 1, headers.length).setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    // Prepare row data matching the columns exactly:
    // Timestamp | Form Type | Name | Business Name | Phone | Email | Location | Product | Category | Quantity | Subject | Message | Source
    var timestamp = new Date();
    var formType = (data.formType || 'general_enquiry').toString().trim();
    var businessName = (data.businessName || '').toString().trim();
    var email = (data.email || '').toString().trim();
    var location = (data.location || data.businessLocation || '').toString().trim();
    var product = (data.product || data.productGrade || '').toString().trim();
    var category = (data.category || data.productCategory || '').toString().trim();
    var quantity = (data.quantity || data.requiredQuantity || '').toString().trim();
    var subject = (data.subject || '').toString().trim();
    var message = (data.message || data.messageRequirements || '').toString().trim();
    var source = (data.source || '').toString().trim();

    var row = [
      timestamp,
      formType,
      name,
      businessName,
      phone,
      email,
      location,
      product,
      category,
      quantity,
      subject,
      message,
      source,
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'success',
        message: 'Enquiry recorded successfully.',
        timestamp: timestamp,
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'error',
        message: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    try {
      lock.releaseLock();
    } catch (e) {}
  }
}

/**
 * Health check endpoint - open the Web App URL in your browser to verify it is working
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: 'active',
      service: 'VKR Cashew & Dry Fruits Forms Web App',
      timestamp: new Date(),
      instruction: 'This Web App endpoint is active and ready to accept POST submissions.'
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * TEST FUNCTION: Click "Run" on this function in Apps Script to verify everything works!
 */
function testScript() {
  Logger.log('Starting test submission...');
  
  var testPayload = {
    formType: 'wholesale',
    name: 'Test Customer',
    businessName: 'VKR Test Enterprises',
    phone: '8838885921',
    email: 'vkrcashews@gmail.com',
    location: 'Panruti / Neyveli',
    product: 'W180 King Cashews',
    category: 'Cashews',
    quantity: '100 kg',
    subject: 'Wholesale Test Inquiry',
    message: 'Testing Google Apps Script connection from Apps Script editor.',
    source: 'Apps Script Direct Test',
  };

  var mockEvent = {
    postData: {
      contents: JSON.stringify(testPayload),
    },
  };

  var response = doPost(mockEvent);
  Logger.log('Response: ' + response.getContent());
  return response;
}

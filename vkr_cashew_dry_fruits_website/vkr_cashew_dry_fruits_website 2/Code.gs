/**
 * Google Apps Script Web App for VKR Cashew & Dry Fruits
 * Handles form submissions from Contact, Wholesale, and Get Best Price forms.
 *
 * Google Sheet Columns Required (Row 1):
 * Timestamp | Form Type | Name | Business Name | Phone | Email | Location | Product | Category | Quantity | Subject | Message | Source
 */

// If bound to a Spreadsheet (opened via Extensions > Apps Script), getActiveSpreadsheet() works automatically.
// Otherwise, specify your spreadsheet ID below:
var SPREADSHEET_ID = ''; // Leave empty if script is container-bound to your Sheet
var SHEET_NAME = 'Enquiries'; // Name of the sheet tab

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

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
      throw new Error('Unable to find target Google Sheet.');
    }

    var sheet = ss.getSheetByName(SHEET_NAME) || ss.getActiveSheet();

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
    lock.releaseLock();
  }
}

// Simple test endpoint
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: 'active',
      service: 'VKR Cashew & Dry Fruits Forms Web App',
      timestamp: new Date(),
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

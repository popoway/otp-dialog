//TOTP Secret lists, keep it secret.
//Copyright 2017 popoway. All rights reserved.
//Replace otp token with yours, please.
var currsertime = new Date();
var totpObj = new TOTP();
var popowayCloud = totpObj.getOTP("SAMPLEOTPTOKEN");
var Google = totpObj.getOTP("REPLACEWITHYOURS");
var Microsoft = totpObj.getOTP("SAMPLEOTPTOKEN");
var Facebook = totpObj.getOTP("SAMPLEOTPTOKEN");
var Xiaomi = totpObj.getOTP("SAMPLEOTPTOKEN");
var Evernote = totpObj.getOTP("SAMPLEOTPTOKEN");

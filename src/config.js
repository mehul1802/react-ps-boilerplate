// How to create STAGING TEST USER via Console
// aws cognito-idp sign-up \
//   --region us-east-1 \
//   --client-id 2b6knojjb3jro4rdqaoqep32js \
//   --username astrahanjoe@gmail.com \
//   --password ^Poolservice123^
//
//   aws cognito-idp admin-confirm-sign-up \
// --region us-east-1 \
// --user-pool-id us-east-1_BOsSTIk3S \
// --username astrahanjoe@gmail.com
//
//Direct URL to Hosted Location for Staging Site
//http://poolservice123-web-staging.s3-website-us-east-1.amazonaws.com
const staging = {
  apiGateway: {
    URL: "https://api-staging.poolservice123.com", //Updated to Staging
    REGION: "us-east-1" //Updated to Staging
  },
  cognito: {
    USER_POOL_ID: "us-east-1_BOsSTIk3S", //Updated to Staging
    APP_CLIENT_ID: "2b6knojjb3jro4rdqaoqep32js", //Updated to Staging
    //POOL ARN -- arn:aws:cognito-idp:us-east-1:197984628663:userpool/us-east-1_BOsSTIk3S
    //POOL Domain Name: https://poolservice123-web-staging.auth.us-east-1.amazoncognito.com
    IDENTITY_POOL_ID: "us-east-1:66202b8b-aa00-464d-b16c-c3e6a5d2f0a3",//Updated to Staging by Default
    REGION: "us-east-1"
  },
  s3: {
    BUCKET: "poolserviceapi-uploads-staging" //Updated to Staging
  }
}

// How to create DEV TEST USER via Console
// aws cognito-idp sign-up \
//   --region us-east-1 \
//   --client-id 71blnmoq809ieofj5sdfefphdp \
//   --username astrahanjoe@gmail.com \
//   --password ^^Dumbpassword123
//
//   aws cognito-idp admin-confirm-sign-up \
// --region us-east-1 \
// --user-pool-id us-east-1_2tQ99fX9l \
// --username astrahanjoe@gmail.com
//
//Direct URL to Hosted Location for Dev Site
//http://poolservice123-web-dev.s3-website-us-east-1.amazonaws.com
const dev = {
  apiGateway: {
    URL: "https://api-dev.poolservice123.com",
    REGION: "us-east-1"
  },
  cognito: {
    USER_POOL_ID: "us-east-1_2tQ99fX9l", //Updated to Dev
    //POOL ARN -- arn:aws:cognito-idp:us-east-1:197984628663:userpool/us-east-1_2tQ99fX9l
    //POOL Domain Name: https://poolservice123-dev.auth.us-east-1.amazoncognito.com
    APP_CLIENT_ID: "71blnmoq809ieofj5sdfefphdp", //Updated to Dev
    IDENTITY_POOL_ID: "us-east-1:d1e98291-d0aa-4fab-b975-efb2dc4cd764", //Updated to Dev
    REGION: "us-east-1"
  },
  s3: {
    BUCKET: "poolserviceapi-uploads-dev" //Updated to Dev
  }
}

// How to create PROD TEST USER via Console
// aws cognito-idp sign-up \
//   --region us-east-1 \
//   --client-id m5itb5gc1itqrsf05mohbmo82 \
//   --username astrahanjoe@gmail.com \
//   --password ^^ProdPassword123
//
//   aws cognito-idp admin-confirm-sign-up \
// --region us-east-1 \
// --user-pool-id us-east-1_8AWb9vvUm \
// --username astrahanjoe@gmail.com
//
//Direct URL to Hosted Location for Prod Site
//http://poolservice123-web-prod.s3-website-us-east-1.amazonaws.com
const prod = {
  apiGateway: {
    URL: "https://api-prod.poolservice123.com", //Updated to Prod
    REGION: "us-east-1" //Updated to Prod
  },
  cognito: {
    USER_POOL_ID: "us-east-1_8AWb9vvUm",//Updated to Prod
    //POOL ARN -- arn:aws:cognito-idp:us-east-1:197984628663:userpool/us-east-1_8AWb9vvUm
    //POOL Domain Name: https://poolservice123-web-prod.auth.us-east-1.amazoncognito.com
    APP_CLIENT_ID: "m5itb5gc1itqrsf05mohbmo82",//Updated to Prod
    IDENTITY_POOL_ID: "us-east-1:7e921d48-dd2f-42dd-9026-7d34054138ef", //updated to Prod
    REGION: "us-east-1"
  },
  s3: {
    BUCKET: "poolserviceapi-uploads-prod" //Updated to Prod
  }
}

//Set config accordingly to enviroment variable.
var config = null;
if (process.env.REACT_APP_STAGE === 'prod'){
  config = prod;
}else if(process.env.REACT_APP_STAGE === 'dev'){
  config = dev;
}else{
  config = staging;
}

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};

export default {
  MAX_ATTACHMENT_SIZE: 500000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notesapp-up"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://v0xx0tpxg3.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_SJAJV6ImL",
    APP_CLIENT_ID: "2glmtkmt688k8kk8618tjno34s",
    IDENTITY_POOL_ID: "us-east-1:605c0ccf-c42a-471d-a5c4-402c08382731"
  }
}
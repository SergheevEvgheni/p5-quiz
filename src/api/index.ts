import { GoogleSpreadsheet } from "google-spreadsheet";

const doc = new GoogleSpreadsheet("1bDMNWzZMdVvuSLxHXOVjQqn9paW9CUixJKwLJNcYiWM");
const addToSpreadsheet = async (NAME: string, EMAIL: string, PHONE: string, SCORE: number) => new Promise(
    async (resolve, reject) => {
        try {
            await doc.useServiceAccountAuth({
                client_email: "quiz-653@quiz-362310.iam.gserviceaccount.com",
                private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCqsNpjJ4LKy6fU\noKWPLCBYKYyggKsQ1/vA8Sz/uZYaCnzu3niLX/NZ/m/bMysht+J5SyjS4n5IF8t2\nYXI36413Bg8eA0rJ2+jcRBvbkguUWdwKJsTUlOpUC3VP8K55XrXB7UlY6iwK1T0U\nxVNNsr4DD3T+A6VXNulam0+VyEvxRopmlSWridvJzNViKO3FT/P/01coOLdlrMG6\nXTZHZQ3UAGC0plQKdVo366vsa40N0mdrpWyNqJxaT/xdHfCxJh61Vw3gZCzgoT9m\nEb8yHUnS92kYYWg4soLVmZdKzgpUvSaYiHHFfH1yeZFONEkrC68aa5t0PUP7SGhv\ngoH7u7W1AgMBAAECggEAB50/CLhM/dXq5THLYOEjijtEQi6rMuOnn9pCWyAAwaWh\nIBi9gN4lYWjXvYwBSw5EZIvFRO8EmhuxoFTFfxgbZelXyEt2TR3pu9Wv9nID4TjG\n9472LdN8xoYCVDAU4GYorn9yy6wajdsoT+Jjjm5ASquoWOJ5wDO7YibWfISEWr1r\niM3tVTY8dRE4gFTWc3VOPAXuvKh7YbTQUfSLdINyjQlpEXaQZOeglKgZuDEy/2GD\nfdPCi35cw2BWlsO0mReL2G5hiBvFoEU01dOrUWvRNo1Rr07DloCMWKV8wwGlHq1x\ns4Tvf7xDo4uC8YeAZtMsUb49R8MrA3lDKVPO2YCvgQKBgQDssiaYiumPOx6bdWI9\nAm2uTqzvHOBtGLyztgqJF1auneb0jssLlgimro9wOhhp/mmAZmN89jgie+IKF9Rp\nkKJw+orsYv1xW7DI6wd0d8QY4FULkU10JSLPzq9e/H6aG2l0IpXl5FRHFL4Nh1WO\nR+smyMpfQFV9ezmmkcBnMX/5dQKBgQC4nJ4AC8eDkPETvc+Y9gs8gzT2o1c8Z6DZ\nR0d50zNc75yhnj+lfyZMnw+Ua1wCINWgiysMbCVdkGYn8JW4+E8OiUJCz0r/Srjv\nwcsZo5z0q3vb9lXbLy0zVp1jegOYTRFJ6Oj00A8BGUlJGpaU2thz7Fqyz6WB4TAy\nHkwX9e0DQQKBgFkjimd+QRFA2XkATvvc80Nmu7fdLyPG4iHn17XjRTDDpJvLPuph\nGWb0bG5+Yn1gY4kIhkUkUOWjs+/LI6KR5qsXn8QAT6QmPMCdypPxGrennD+b/AhW\nh/KsytzByEfvNNqYv8zxHVAbnqtnoS/RI9zaV2RhzRBRnNd/Im96c9CVAoGAacq2\ncGhPqQGCZUG8mXdF8SNvUndAIolwD5NdTl7NbFCTfbpl1r0KgZYVI4RycXXHdfzK\nao/+yaNaJ0EjS6BgDYByzD5mR+3WFO8FKGguJbevftmnUbezO1xDTSI6tShU4/no\npYIlVwfai14FNMBEkgm74ARGYCtfpxjdmk1/yQECgYEAqr84sDeYqgPWcE9phOXl\nn1GgBI6fIQlr8DhwT9gZYmk/fiaJerpmkTFGQh6oEbKAoh38/JYJy/t1GMpjcHFW\nWTcwz2A5AKXU1dgaf2zkZVTC+YUS9RL9ZPcBlgXdWquhgl5BW7/C2JuffuEXApGX\n4RhZeM891dVAON5/n3+lh6A=\n-----END PRIVATE KEY-----\n",
            });
            await doc.loadInfo();
            const sheet = doc.sheetsById[0];
            await sheet.addRow({ NAME, EMAIL, PHONE, SCORE });
            resolve(true)
        } catch (e) {
            reject(e)
        }
    }
)

export default addToSpreadsheet;
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        
        spreadsheetId: "1KsaQLT3pp77yEQYeptOIWVmNWmGvxxADlRHrsysF5c8",
        typePrefix: "GoogleSpreadsheet",
        credentials : {
          "type": "service_account",
          "project_id": "qciitd-1605238983650",
          "private_key_id": "0086d79dd9e39e7b34fb70db48ad621afefe2785",
          "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCspsV4JPm1CWQi\nWSJ52+3j36LZzoGyGcmEyZQA/9ugLLvmBg/VQKqAB017PXFbi1REDPDbjcnZID9B\nW8lLQimkJNta4qwYlKtHx+rtcf2yUJzNMT1Opa06g5JO8RiZuTnOjahQ8+H79TGY\nqSfKML/2VZOjpWlYkxevCcweIkeaExb0s+z/lYcliYk2EQxTVxPFzqJYmtXTkcc/\nVkQ60stSZ9GpxWoRGG1uK8A8scJwmC/AN1GnlhOhdqmHCyL1HUnPBQGbNJF4BD8L\n9Leq2VFV/So5jvN/ueX2OltGxIltrRbdLeSoN9niONwst6lwh7APyeO0dXlD5Q2R\nlokJPWBJAgMBAAECggEAD7o5btJfdOBgIMjh3Rvttb5fhVvMcL7sno4GT3j/Nr4c\nd73Bn3l+jp8brchRFTfB+1j6b+Wgp4jKele0JIjoZi19VfAkITEZ0TYi7nJd2+p/\n/ikoHov1Fcl6gHpx9T7sRyacWJN+2Ibjd7ahC0gZlIUDJ/sfd5QeqjFISM5ym1RP\nR3Sjc9OG3saaoexOCpqYejvcaR32aLnq+HqgWQbND9oUvnZoMs2XdxyhOmWhvYBJ\n//t4ouBsnvp8ycBlqhMWqE0LvRokUnjlgl1RyHlut2+wLYrFnWWkysmdgtnAUtxX\nB6AbVIXlA2nprESZu6/u3KwV88cdXy89o59BJZfiyQKBgQDsgu5vUnKXsYQ+Lrvc\n1GBaxXlVqyB3xgOa7JkNbbdn2NBcDinndn7gXdkVXXkqloV7opekDUiqx5G2REsC\n2YMMgg+wYDmjFfkhCrEPMVejrx/GIxeYQsOvd3ZXH11pWggNekW3EaHCF2bBf1p6\nbPJKWUZ5wZOvcUA0h3jyY/UHqwKBgQC64MBOZsT+9pK9f53p0XCLVxwngC35QL3I\nvIBJmRX7VOwUwlKVgWUNl073EgqIc6v7X1cYyl6VYybpTVWMUcWajN0hdFw1y+hM\nbxcOMod1hq/INIcsO7UGiSAcqXMq20U+u11fu2lYUKfc1b8Jx+hORh/RNlS/AQPW\nQhR29opz2wKBgQDpgkfpDyzmijR3tGp0mBZd6HRoWaGfv5gVoJ1n/bhDxnPJP46t\n4XdZDC9lgbk8jApUS+6N4TOqsYkyvHCW6qwRcGQPDqI5W1tx/P1dc6kEicXEOSd1\nhA1yM29aizQN7P7gV6V3HuhnGfWw+40YLHJ3Z3dGhRHL+POcKVkHcBsfKwKBgQCo\neupFhNfD+e9P0xc+byllJnLmleRc3GZ97JxIPjEYN3bkPFGSImdFuo1hqK1AWfDK\nnyj527EsQ4kYOzWOXUam0Kqod6yOf7h9+IWzshB3/6bI+7qGQYoySzxdOtPu5mLm\nbKuBHIicK5M7QKWMHuOsdgJHbxE2Zqbb6xViL2GhkwKBgQCW/8ehqLSuMLojETSD\nVoCqgYvMNg9wwdEw9hmh9y2CWmgD+WAY9HqOaPuLmh8gBx1iu9pS5HeWaC0wXVZx\noZ0kr1qu0UoqJdFfM6F70GNnbZRslPs+MMRpumZDIqvgBkKbwfAa9eCM49WW4riE\nFRY6tUQX8r434fnjwVAYvxGeAA==\n-----END PRIVATE KEY-----\n",
          "client_email": "qciitd-user-666@qciitd-1605238983650.iam.gserviceaccount.com",
          "client_id": "111980319016977403257",
          "auth_uri": "https://accounts.google.com/o/oauth2/auth",
          "token_uri": "https://oauth2.googleapis.com/token",
          "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
          "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/qciitd-user-666%40qciitd-1605238983650.iam.gserviceaccount.com"
          },
        filterNode: () => true,
        mapNode: node => node
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

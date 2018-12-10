# Slash-commands för #konsulatet

## Kommandon

- `/gilla vad-som-helst` svarar med

  ```
  Killar gillar vad-som-helst!
  Tjejer gillar vad-som-helst!
  Alla gillar vad-som-helst!
  vad-som-helst! vad-som-helst! vad-som-helst!
  ```

- `/wos @nick` svarar med

  ```
  HEJ HEJ HEJ HEJ HEJ HEJ @nick @nick @nick @nick @nick @nick @nick @nick @nick @nick @nick @nick @nick @nick @nick @nick
  ```

  Ingen validering görs, så om nicket inte finns kanske det ser jättekonstigt ut.

## Hosting och installation

Kommandona hostas på AWS, med Lambda och API Gateway. För att
sätta upp liknande någon annanstans:

1. Kör `yarn install` och zippa sedan hela mappen och ladda upp som body på en Lambda.

1. Konfigurera API Gateway med en POST-metod, med `Method Integration` satt till `Lambda Proxy`.

1. Konfigurera ett slash-command i Slack som postar till rätt url

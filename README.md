# EmojiCrypt

EmojiCrypt ist eine lokale Browser-App zum Verschlüsseln und Entschlüsseln von Texten.

## Datenschutz

Die App verwendet keine Cookies, kein LocalStorage, kein SessionStorage, kein IndexedDB, keine Cache API, keinen Service Worker, keine Analytics, keine Telemetrie, keine Uploads und keine Netzwerk-API. Während der Nutzung liegen notwendige Daten nur flüchtig im Arbeitsspeicher des Browsers. Browser und Betriebssystem können eigene Speichermechanismen wie Swap oder Cache verwenden; das kann eine Web-App nicht zuverlässig verhindern.

Für möglichst wenige Verbindungsmetadaten: Repository bzw. `index.html` und `manifest.json` einmal herunterladen, danach die lokale `index.html` offline öffnen. Beim Download oder beim direkten Aufruf über GitHub/GitHub Pages entstehen beim Hoster normale HTTP-Verbindungsdaten.

## Kryptografie

Neue Nachrichten verwenden AES-256-GCM mit einem zufälligen 16-Byte-Salt und 12-Byte-IV. Der Schlüssel wird per PBKDF2-SHA-256 mit 310.000 Iterationen aus dem Passwort abgeleitet. Die verschlüsselte Nutzlast wird als EmojiCrypt-Format `EC3` dargestellt. Das vorherige `EC2`-Format kann weiterhin entschlüsselt werden.

## Offline-Nutzung

1. `index.html` und `manifest.json` in denselben lokalen Ordner speichern.
2. Internetverbindung bei Bedarf trennen.
3. `index.html` direkt im Browser öffnen.

Die App lädt keine externen Bibliotheken oder Ressourcen nach.

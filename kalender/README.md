# Skripte zum Steuern der Homematic über einen Kalender
Dieses Skriptsammlung nutzt einen Google Calendar zur Steuerung der Homematic.

## google-calendar-abfragen.txt
Dieses Skript fragt einen spezifischen Google Calendar ab und setzt anhand der darin gefundenen Einträge Systemvariable, die dann wieder um z.B. die Heizungssteuerung beeinflussen

## google-calendar-termin-eintragen.txt
Dieses Skript trägt in den Google Kalender einen spezifischen Termin ein. Ich nutze dieses Skript insbesondere in Verbindung mit der Amazon Alexa Koppelung. So kann mittels Sprache die heizung elegant gesteuert werden.

## google-calendar-termin-loeschen.txt
Dieses Skript löscht aus dem Google Kalender einen spezifischn Termin. Ich nutze diese Funktion, um in der Heizungssteuerung einen Raum nicht mehr zu heizen. Dies wieder in Verbindung mit Amazon Alexa.

## google-script-create-event-today.gs
Die beiden Homematic Skripte zum Eintragen bzw. Löschen von Terminen rufen Google Skripte auf. 

## google-script-create-event-tomorrow.gs
Die beiden Homematic Skripte zum Eintragen bzw. Löschen von Terminen rufen Google Skripte auf.

## google-script-delete-event.gs
Die beiden Homematic Skripte zum Eintragen bzw. Löschen von Terminen rufen Google Skripte auf. 

## feiertage.txt
Dieses Skript ermitteln die für eine Region relevanten Feiertag und setzt bei Bedarf die entsprechenden Systemvariable, die dann z.B. zur Steuerung der heizung verwendet werden können

## Tageszeit
Dieses Skript setzt eine Systemvariable mit der aktuellen Tageszeit